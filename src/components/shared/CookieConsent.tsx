"use client"

import { useState, useEffect } from "react"

type ConsentLevel = "all" | "essential" | null

export function CookieConsent() {
  const [consent, setConsent] = useState<ConsentLevel>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("yorubs_cookie_consent")
    if (stored) {
      setConsent(stored as ConsentLevel)
    } else {
      const timer = setTimeout(() => setVisible(true), 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  function accept(level: ConsentLevel) {
    localStorage.setItem("yorubs_cookie_consent", level!)
    setConsent(level)
    setVisible(false)
  }

  if (consent || !visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6" role="dialog" aria-label="Consentimento de cookies">
      <div className="max-w-4xl mx-auto bg-background-card border border-border rounded-2xl p-6 shadow-2xl">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-text-primary mb-1">Cookies e Privacidade</h3>
            <p className="text-xs text-text-secondary leading-relaxed">
              Usamos cookies essenciais para o funcionamento do site e cookies analíticos para entender como você usa nossos serviços.
              Consulte nossa{" "}
              <a href="/privacy#cookies" className="text-gold hover:underline">
                Politica de Cookies
              </a>{" "}
              para mais informações.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => accept("essential")}
              className="px-4 py-2 text-xs font-medium text-text-secondary border border-border rounded-full hover:border-gold/30 transition-colors"
            >
              Apenas essenciais
            </button>
            <button
              onClick={() => accept("all")}
              className="px-4 py-2 text-xs font-medium bg-gold text-background rounded-full hover:bg-gold-light transition-colors"
            >
              Aceitar todos
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
