"use client"

import { useState } from "react"
import { AlertTriangle, Check, Loader2 } from "lucide-react"

type FormState = "idle" | "submitting" | "success" | "error"

export function DeleteAccountForm() {
  const [email, setEmail] = useState("")
  const [confirmText, setConfirmText] = useState("")
  const [reason, setReason] = useState("")
  const [state, setState] = useState<FormState>("idle")
  const [errorMsg, setErrorMsg] = useState("")

  const isConfirmed = confirmText === "EXCLUIR"
  const canSubmit = email && isConfirmed && state !== "submitting"

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!canSubmit) return

    setState("submitting")
    setErrorMsg("")

    try {
      const res = await fetch("/api/delete-account", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, reason: reason || undefined }),
      })

      const data = await res.json()

      if (!res.ok) {
        setErrorMsg(data.error || "Erro ao processar solicitação.")
        setState("error")
        return
      }

      setState("success")
    } catch {
      setErrorMsg("Erro de conexão. Tente novamente.")
      setState("error")
    }
  }

  if (state === "success") {
    return (
      <div className="text-center py-6">
        <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-4">
          <Check className="w-7 h-7 text-gold" />
        </div>
        <h3 className="text-xl font-serif text-text-primary mb-2">
          Solicitação Recebida
        </h3>
        <p className="text-sm text-text-secondary max-w-md mx-auto">
          Enviamos um email de confirmação para <strong className="text-text-primary">{email}</strong>.
          Verifique sua caixa de entrada (e spam) e siga as instruções para confirmar a exclusão.
          O processo será concluído em até 30 dias após a confirmação.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Email */}
      <div>
        <label htmlFor="delete-email" className="block text-sm font-medium text-text-primary mb-1.5">
          Email da conta
        </label>
        <input
          id="delete-email"
          type="email"
          required
          placeholder="email@exemplo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-background-tertiary border border-border rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
        />
        <p className="text-xs text-text-muted mt-1">
          Use o mesmo email que você usou para criar a conta no Yorubs.
        </p>
      </div>

      {/* Reason (optional) */}
      <div>
        <label htmlFor="delete-reason" className="block text-sm font-medium text-text-primary mb-1.5">
          Motivo da exclusão <span className="text-text-muted font-normal">(opcional)</span>
        </label>
        <select
          id="delete-reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          className="w-full bg-background-tertiary border border-border rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors appearance-none"
          style={{ color: reason ? undefined : "var(--color-text-muted)" }}
        >
          <option value="">Selecione um motivo (opcional)</option>
          <option value="not-using">Não estou usando o app</option>
          <option value="privacy">Preocupação com privacidade</option>
          <option value="alternative">Encontrei outra alternativa</option>
          <option value="difficult">O app é difícil de usar</option>
          <option value="content">O conteúdo não atende minhas expectativas</option>
          <option value="other">Outro motivo</option>
        </select>
      </div>

      {/* Confirmation */}
      <div>
        <label htmlFor="delete-confirm" className="block text-sm font-medium text-text-primary mb-1.5">
          Confirmação
        </label>
        <p className="text-xs text-text-muted mb-2">
          Digite <strong className="text-red-400">EXCLUIR</strong> para confirmar que deseja excluir sua conta permanentemente.
        </p>
        <input
          id="delete-confirm"
          type="text"
          required
          placeholder="Digite EXCLUIR"
          value={confirmText}
          onChange={(e) => setConfirmText(e.target.value)}
          className="w-full bg-background-tertiary border border-border rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 transition-colors"
        />
      </div>

      {/* Error */}
      {state === "error" && errorMsg && (
        <p className="text-sm text-red-400 text-center">{errorMsg}</p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={!canSubmit}
        className="w-full flex items-center justify-center gap-2 bg-red-600 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-red-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {state === "submitting" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Processando...
          </>
        ) : (
          <>
            <AlertTriangle className="w-5 h-5" />
            Solicitar Exclusão da Conta
          </>
        )}
      </button>
    </form>
  )
}
