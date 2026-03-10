import { NextRequest, NextResponse } from "next/server"
import crypto from "crypto"
import { getSupabaseAdmin } from "@/lib/supabase-server"

// In-memory rate limiting: 3 submissions per IP per 5 minutes
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT = 3
const RATE_WINDOW_MS = 5 * 60 * 1000
let lastCleanup = Date.now()

function isRateLimited(ip: string): boolean {
  const now = Date.now()

  // Periodic cleanup: remove expired entries every 10 minutes
  if (now - lastCleanup > 10 * 60 * 1000) {
    for (const [key, entry] of rateLimitMap) {
      if (now > entry.resetAt) rateLimitMap.delete(key)
    }
    lastCleanup = now
  }

  const entry = rateLimitMap.get(ip)

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS })
    return false
  }

  if (entry.count >= RATE_LIMIT) return true

  entry.count++
  return false
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const VALID_SOURCES = ["organic", "instagram", "friend", "google", "tiktok", "blog", "other"]

/** Truncate string to max length, return null if empty */
function sanitize(value: unknown, maxLength: number): string | null {
  if (typeof value !== "string") return null
  const trimmed = value.trim()
  if (!trimmed) return null
  return trimmed.slice(0, maxLength)
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown"
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Muitas tentativas. Tente novamente em alguns minutos." },
        { status: 429 }
      )
    }

    const body = await req.json()
    const { email, firstName, referralSource, utmSource, utmMedium, utmCampaign, referredBy, lgpdConsent } = body

    // Validate email: type + regex + length
    if (typeof email !== "string" || email.length > 320 || !EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: "Email inválido." }, { status: 400 })
    }
    if (lgpdConsent !== true) {
      return NextResponse.json({ error: "Consentimento LGPD é obrigatório." }, { status: 400 })
    }

    // Validate optional fields
    if (referralSource && !VALID_SOURCES.includes(referralSource)) {
      return NextResponse.json({ error: "Fonte de indicação inválida." }, { status: 400 })
    }

    // Sanitize referral code format (must be exactly 8 hex chars if provided)
    const sanitizedRef = sanitize(referredBy, 8)
    if (sanitizedRef && !/^[a-f0-9]{8}$/.test(sanitizedRef)) {
      return NextResponse.json({ error: "Código de indicação inválido." }, { status: 400 })
    }

    const referralCode = crypto.randomBytes(4).toString("hex")

    const supabase = getSupabaseAdmin()

    const { data, error } = await supabase
      .from("waitlist")
      .insert({
        email: email.toLowerCase().trim(),
        first_name: sanitize(firstName, 100),
        referral_source: referralSource || null,
        utm_source: sanitize(utmSource, 200),
        utm_medium: sanitize(utmMedium, 200),
        utm_campaign: sanitize(utmCampaign, 200),
        referral_code: referralCode,
        referred_by: sanitizedRef,
        lgpd_consent: true,
      })
      .select("referral_code")
      .single()

    if (error) {
      // Duplicate email — return existing referral code
      if (error.code === "23505") {
        const { data: existing } = await supabase
          .from("waitlist")
          .select("referral_code")
          .eq("email", email.toLowerCase().trim())
          .single()

        const { count } = await supabase
          .from("waitlist")
          .select("*", { count: "exact", head: true })

        return NextResponse.json({
          success: true,
          referralCode: existing?.referral_code,
          position: count || 0,
          existing: true,
        })
      }

      // FK violation — invalid referral code
      if (error.code === "23503") {
        return NextResponse.json({ error: "Código de indicação não encontrado." }, { status: 400 })
      }

      console.error("Waitlist insert error:", error)
      return NextResponse.json({ error: "Erro ao cadastrar. Tente novamente." }, { status: 500 })
    }

    const { count } = await supabase
      .from("waitlist")
      .select("*", { count: "exact", head: true })

    return NextResponse.json({
      success: true,
      referralCode: data.referral_code,
      position: count || 0,
    })
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error"
    console.error("Waitlist POST error:", message)

    if (message.includes("Missing Supabase")) {
      return NextResponse.json(
        { error: "Serviço temporariamente indisponível. Tente novamente mais tarde." },
        { status: 503 }
      )
    }

    return NextResponse.json({ error: "Erro interno. Tente novamente." }, { status: 500 })
  }
}

export async function GET() {
  try {
    const supabase = getSupabaseAdmin()
    const { count } = await supabase
      .from("waitlist")
      .select("*", { count: "exact", head: true })

    return NextResponse.json(
      { count: count || 0 },
      {
        headers: {
          "Cache-Control": "s-maxage=60, stale-while-revalidate=300",
        },
      }
    )
  } catch {
    return NextResponse.json({ count: 0 })
  }
}
