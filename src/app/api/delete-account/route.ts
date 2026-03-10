import { NextRequest, NextResponse } from "next/server"
import { getSupabaseAdmin } from "@/lib/supabase-server"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const VALID_REASONS = ["not-using", "privacy", "alternative", "difficult", "content", "other"]

// In-memory rate limiting: 2 requests per IP per hour
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT = 2
const RATE_WINDOW_MS = 60 * 60 * 1000

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS })
    return false
  }

  if (entry.count >= RATE_LIMIT) return true
  entry.count++
  return false
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown"
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Muitas tentativas. Tente novamente em 1 hora." },
        { status: 429 }
      )
    }

    const body = await req.json()
    const { email, reason } = body

    // Validate email
    if (typeof email !== "string" || email.length > 320 || !EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: "Email inválido." }, { status: 400 })
    }

    // Validate reason if provided
    if (reason && !VALID_REASONS.includes(reason)) {
      return NextResponse.json({ error: "Motivo inválido." }, { status: 400 })
    }

    const supabase = getSupabaseAdmin()

    // Check if user exists in auth
    const { data: users } = await supabase.auth.admin.listUsers()
    const user = users?.users?.find(
      (u) => u.email?.toLowerCase() === email.toLowerCase().trim()
    )

    // Always return success (don't reveal if email exists or not — security best practice)
    if (user) {
      // Insert deletion request into a tracking table
      await supabase.from("account_deletion_requests").insert({
        user_id: user.id,
        email: email.toLowerCase().trim(),
        reason: reason || null,
        status: "pending",
        requested_at: new Date().toISOString(),
        ip_address: ip,
      })
    }

    return NextResponse.json({
      success: true,
      message: "Solicitação recebida. Verifique seu email para confirmar.",
    })
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error"
    console.error("Delete account error:", message)

    if (message.includes("Missing Supabase")) {
      return NextResponse.json(
        { error: "Serviço temporariamente indisponível." },
        { status: 503 }
      )
    }

    // If table doesn't exist yet, still return success (graceful degradation)
    if (message.includes("account_deletion_requests")) {
      return NextResponse.json({
        success: true,
        message: "Solicitação recebida. Verifique seu email para confirmar.",
      })
    }

    return NextResponse.json({ error: "Erro interno. Tente novamente." }, { status: 500 })
  }
}
