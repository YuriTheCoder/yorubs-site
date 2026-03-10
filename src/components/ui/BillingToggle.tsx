"use client"

interface BillingToggleProps {
  period: "monthly" | "yearly"
  onChange: (period: "monthly" | "yearly") => void
}

export function BillingToggle({ period, onChange }: BillingToggleProps) {
  return (
    <div className="flex items-center justify-center gap-4">
      <span
        className={`text-sm font-medium transition-colors ${
          period === "monthly" ? "text-text-primary" : "text-text-muted"
        }`}
      >
        Mensal
      </span>
      <button
        onClick={() => onChange(period === "monthly" ? "yearly" : "monthly")}
        className="relative w-14 h-7 rounded-full bg-background-card border border-border transition-colors"
        aria-label={`Trocar para plano ${period === "monthly" ? "anual" : "mensal"}`}
      >
        <div
          className={`absolute top-0.5 w-6 h-6 rounded-full bg-gold transition-transform duration-300 ${
            period === "yearly" ? "translate-x-7" : "translate-x-0.5"
          }`}
        />
      </button>
      <span
        className={`text-sm font-medium transition-colors ${
          period === "yearly" ? "text-text-primary" : "text-text-muted"
        }`}
      >
        Anual
        <span className="ml-1.5 text-xs text-forest-light font-semibold">-37%</span>
      </span>
    </div>
  )
}
