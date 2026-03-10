import Image from "next/image"

export function HomeScreen() {
  return (
    <div className="absolute inset-0 flex flex-col bg-background-secondary">
      {/* Status bar */}
      <div className="flex items-center justify-between px-5 pt-3 text-[10px] text-text-secondary/60">
        <span>9:41</span>
        <div className="w-3 h-2 border border-text-secondary/40 rounded-[2px]">
          <div className="w-2 h-full bg-text-secondary/40 rounded-[1px]" />
        </div>
      </div>

      {/* Dynamic island */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[90px] h-[26px] bg-black rounded-full z-10" />

      {/* Content */}
      <div className="flex-1 flex flex-col items-center px-5 pt-10">
        {/* Logo */}
        <Image
          src="/images/logo.png"
          alt=""
          width={56}
          height={56}
          className="rounded-xl mb-2"
          aria-hidden="true"
        />
        <span className="text-sm text-text-secondary mb-4">Boa tarde!</span>

        {/* Streak badge */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-terracotta/10 border border-terracotta/20 mb-4">
          <span className="text-[11px]">🔥</span>
          <span className="text-[11px] font-semibold text-terracotta">7 dias</span>
        </div>

        {/* Progress ring (simplified) */}
        <div className="relative w-20 h-20 mb-4">
          <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
            <circle cx="18" cy="18" r="15.5" fill="none" stroke="rgba(212,168,83,0.1)" strokeWidth="2.5" />
            <circle
              cx="18" cy="18" r="15.5" fill="none" stroke="#D4A853" strokeWidth="2.5"
              strokeDasharray="97.4" strokeDashoffset="56.5" strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-bold text-gold">42%</span>
          </div>
        </div>

        {/* Continue button */}
        <div className="w-full px-3">
          <div className="w-full py-2.5 rounded-full bg-gold/20 text-center text-[11px] font-semibold text-gold">
            Continuar
          </div>
        </div>

        {/* Lesson cards */}
        <div className="w-full px-3 mt-3 space-y-2">
          <div className="flex items-center gap-2 p-2 rounded-lg bg-background-card border border-border">
            <div className="w-8 h-8 rounded-lg bg-gold/15 flex items-center justify-center text-[10px]">📚</div>
            <div className="flex-1">
              <div className="text-[10px] font-medium text-text-primary">Unidade 1 - Tons</div>
              <div className="h-1 rounded-full bg-white/5 mt-1 overflow-hidden">
                <div className="h-full w-3/5 rounded-full bg-gold/50" />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-lg bg-background-card border border-border">
            <div className="w-8 h-8 rounded-lg bg-terracotta/15 flex items-center justify-center text-[10px]">🗣️</div>
            <div className="flex-1">
              <div className="text-[10px] font-medium text-text-primary">Saudacoes</div>
              <div className="h-1 rounded-full bg-white/5 mt-1 overflow-hidden">
                <div className="h-full w-1/4 rounded-full bg-terracotta/50" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="h-12 border-t border-white/5 flex items-center justify-around px-4">
        {[true, false, false, false].map((active, i) => (
          <div
            key={i}
            className="w-5 h-5 rounded-full"
            style={{ backgroundColor: active ? "rgba(212,168,83,0.4)" : "rgba(255,255,255,0.05)" }}
          />
        ))}
      </div>
    </div>
  )
}
