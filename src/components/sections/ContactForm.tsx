"use client"

import { useState } from "react"
import { Send, Mail } from "lucide-react"

const SUBJECTS = [
  { value: "duvida", label: "Dúvida" },
  { value: "sugestao", label: "Sugestao" },
  { value: "bug", label: "Relatar Bug" },
  { value: "parceria", label: "Parceria" },
  { value: "outro", label: "Outro" },
] as const

export function ContactForm() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [assunto, setAssunto] = useState("")
  const [mensagem, setMensagem] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const subjectLabel = SUBJECTS.find((s) => s.value === assunto)?.label ?? assunto
    const subject = encodeURIComponent(`[Yorubs] ${subjectLabel}`)
    const body = encodeURIComponent(
      `Nome: ${nome}\nEmail: ${email}\n\n${mensagem}`
    )

    window.location.href = `mailto:suporte@yorubs.com?subject=${subject}&body=${body}`
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Nome */}
      <div>
        <label htmlFor="contact-nome" className="block text-sm font-medium text-text-primary mb-2">
          Nome
        </label>
        <input
          id="contact-nome"
          type="text"
          required
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Seu nome completo"
          className="w-full bg-background-tertiary border border-border rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-text-primary mb-2">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="seu@email.com"
          className="w-full bg-background-tertiary border border-border rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
        />
      </div>

      {/* Assunto */}
      <div>
        <label htmlFor="contact-assunto" className="block text-sm font-medium text-text-primary mb-2">
          Assunto
        </label>
        <select
          id="contact-assunto"
          required
          value={assunto}
          onChange={(e) => setAssunto(e.target.value)}
          className="w-full bg-background-tertiary border border-border rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors appearance-none"
        >
          <option value="" disabled>
            Selecione um assunto
          </option>
          {SUBJECTS.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </div>

      {/* Mensagem */}
      <div>
        <label htmlFor="contact-mensagem" className="block text-sm font-medium text-text-primary mb-2">
          Mensagem
        </label>
        <textarea
          id="contact-mensagem"
          required
          rows={5}
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          placeholder="Descreva sua dúvida, sugestão ou problema..."
          className="w-full bg-background-tertiary border border-border rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors resize-none"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-gold to-terracotta text-background font-semibold px-6 py-4 rounded-xl hover:opacity-90 transition-opacity"
      >
        <Send className="w-4 h-4" />
        Enviar Mensagem
      </button>

      <p className="text-xs text-text-muted text-center">
        Ao clicar em enviar, seu app de email será aberto com a mensagem pré-preenchida.
      </p>
    </form>
  )
}
