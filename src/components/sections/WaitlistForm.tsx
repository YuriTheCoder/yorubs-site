"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Check, Copy, Share2 } from "lucide-react"

const REFERRAL_SOURCES = [
  { value: "", label: "Como conheceu o Yorubs?" },
  { value: "instagram", label: "Instagram" },
  { value: "tiktok", label: "TikTok" },
  { value: "google", label: "Google" },
  { value: "friend", label: "Indicação de amigo" },
  { value: "blog", label: "Blog / Artigo" },
  { value: "other", label: "Outro" },
]

type FormState = "idle" | "submitting" | "success" | "error"

export function WaitlistForm() {
  const searchParams = useSearchParams()

  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [referralSource, setReferralSource] = useState("")
  const [lgpdConsent, setLgpdConsent] = useState(false)
  const [state, setState] = useState<FormState>("idle")
  const [errorMsg, setErrorMsg] = useState("")
  const [referralCode, setReferralCode] = useState("")
  const [position, setPosition] = useState(0)
  const [copied, setCopied] = useState(false)

  // Auto-capture UTM params and referral code
  const ref = searchParams.get("ref") || ""
  const utmSource = searchParams.get("utm_source") || ""
  const utmMedium = searchParams.get("utm_medium") || ""
  const utmCampaign = searchParams.get("utm_campaign") || ""

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email || !lgpdConsent) return

    setState("submitting")
    setErrorMsg("")

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          firstName: firstName || undefined,
          referralSource: referralSource || undefined,
          utmSource: utmSource || undefined,
          utmMedium: utmMedium || undefined,
          utmCampaign: utmCampaign || undefined,
          referredBy: ref || undefined,
          lgpdConsent,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        setErrorMsg(data.error || "Erro ao cadastrar.")
        setState("error")
        return
      }

      setReferralCode(data.referralCode)
      setPosition(data.position)
      setState("success")
    } catch {
      setErrorMsg("Erro de conexão. Tente novamente.")
      setState("error")
    }
  }

  const shareUrl = `https://yorubs.com/pre-registro?ref=${referralCode}`
  const shareText = `Estou na fila para aprender Yorùbá com o Yorubs! Garanta seu lugar:`

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback for older browsers
      const input = document.createElement("input")
      input.value = shareUrl
      document.body.appendChild(input)
      input.select()
      document.execCommand("copy")
      document.body.removeChild(input)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  // Success state
  if (state === "success") {
    return (
      <div className="max-w-lg mx-auto bg-background-tertiary border border-gold/20 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-5">
          <Check className="w-8 h-8 text-gold" />
        </div>

        <h3 className="text-2xl font-serif text-text-primary mb-2">
          Cadastro confirmado!
        </h3>
        <p className="text-text-secondary mb-1">
          Você é o <span className="text-gold font-semibold">#{position}</span> da lista.
        </p>
        <p className="text-sm text-text-muted mb-6">
          Avisaremos por email quando o Yorubs estiver disponível.
        </p>

        {/* Referral section */}
        <div className="bg-background-secondary rounded-xl p-5 mb-5">
          <p className="text-sm text-text-secondary mb-3">
            Seu link de indicação:
          </p>
          <div className="flex items-center gap-2 justify-center mb-4">
            <code className="text-sm font-mono text-gold bg-background/50 px-3 py-2 rounded-lg border border-gold/20 truncate max-w-[280px] sm:max-w-none select-all">
              {shareUrl}
            </code>
            <button
              onClick={copyLink}
              className="p-2 rounded-lg bg-background/50 border border-border hover:border-gold/30 transition-colors flex-shrink-0"
              aria-label="Copiar link"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-400" />
              ) : (
                <Copy className="w-4 h-4 text-text-muted" />
              )}
            </button>
          </div>
          <p className="text-xs text-text-muted">
            {copied ? "Link copiado!" : "Compartilhe e suba na fila!"}
          </p>
        </div>

        {/* Share buttons */}
        <div className="flex items-center gap-3 justify-center">
          <a
            href={`https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 rounded-full text-sm font-medium hover:bg-[#25D366]/20 transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-background-card border border-border rounded-full text-sm font-medium text-text-secondary hover:border-gold/30 transition-colors"
          >
            <Share2 className="w-4 h-4" />
            Twitter / X
          </a>
        </div>
      </div>
    )
  }

  // Form state
  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
      {/* Email */}
      <div>
        <input
          type="email"
          required
          placeholder="Seu melhor email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-background-tertiary border border-border rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
        />
      </div>

      {/* First name (optional) */}
      <div>
        <input
          type="text"
          placeholder="Seu nome (opcional)"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full bg-background-tertiary border border-border rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
        />
      </div>

      {/* Referral source */}
      <div>
        <select
          value={referralSource}
          onChange={(e) => setReferralSource(e.target.value)}
          className="w-full bg-background-tertiary border border-border rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors appearance-none"
          style={{ color: referralSource ? undefined : "var(--color-text-muted)" }}
        >
          {REFERRAL_SOURCES.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </div>

      {/* LGPD Consent */}
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={lgpdConsent}
          onChange={(e) => setLgpdConsent(e.target.checked)}
          className="mt-1 w-4 h-4 rounded border-border bg-background-tertiary accent-gold flex-shrink-0"
        />
        <span className="text-sm text-text-secondary leading-relaxed">
          Concordo em receber comunicações do Yorubs sobre o lançamento do app.
          Meus dados serão tratados conforme a{" "}
          <a href="/privacy" className="text-gold hover:underline" target="_blank" rel="noopener noreferrer">
            Política de Privacidade
          </a>
          . Posso cancelar a qualquer momento.
        </span>
      </label>

      {/* Error message */}
      {state === "error" && errorMsg && (
        <p className="text-sm text-red-400 text-center">{errorMsg}</p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={state === "submitting" || !email || !lgpdConsent}
        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-gold to-terracotta text-background font-semibold px-6 py-4 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state === "submitting" ? (
          <>
            <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Cadastrando...
          </>
        ) : (
          "Garantir Meu Lugar"
        )}
      </button>

      {ref && (
        <p className="text-xs text-text-muted text-center">
          Indicado por um amigo
        </p>
      )}
    </form>
  )
}
