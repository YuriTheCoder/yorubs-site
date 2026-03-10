export function GamificationScreen() {
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

      <div className="flex-1 px-4 pt-8 space-y-3">
        {/* XP bar */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-semibold text-gold">Nivel 12</span>
            <span className="text-[9px] text-text-muted">1.250 / 2.000 XP</span>
          </div>
          <div className="h-2 bg-surface rounded-full overflow-hidden">
            <div className="h-full bg-gold rounded-full" style={{ width: "62%" }} />
          </div>
        </div>

        {/* Streak badge */}
        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-terracotta/10 border border-terracotta/20">
          <span className="text-base">🔥</span>
          <div>
            <div className="text-[11px] font-bold text-terracotta">7 dias</div>
            <div className="text-[9px] text-text-secondary">Sequencia ativa</div>
          </div>
        </div>

        {/* Mini leaderboard */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-[10px]">
            <span className="text-gold font-medium">Liga Ouro</span>
            <span className="text-text-muted">Top 3</span>
          </div>
          {[
            { name: "Ana S.", xp: "2.450", pos: 1, you: false },
            { name: "Carlos M.", xp: "2.380", pos: 2, you: false },
            { name: "Voce", xp: "2.250", pos: 3, you: true },
          ].map((p) => (
            <div
              key={p.pos}
              className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg text-[10px] ${
                p.you ? "bg-gold/10 border border-gold/20" : "bg-surface/50"
              }`}
            >
              <div className="flex items-center gap-1.5">
                <span className="text-text-muted w-3">{p.pos}.</span>
                <span className={p.you ? "text-gold font-medium" : "text-text-primary"}>{p.name}</span>
              </div>
              <span className="text-text-secondary">{p.xp} XP</span>
            </div>
          ))}
        </div>

        {/* Achievement circles */}
        <div className="flex items-center gap-2 pt-1">
          {["⭐", "🏆", "🔥", "⚡"].map((emoji, i) => (
            <div key={i} className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center text-xs">
              {emoji}
            </div>
          ))}
          <div className="w-9 h-9 rounded-full bg-surface flex items-center justify-center text-[9px] text-text-muted">
            +12
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="h-12 border-t border-white/5 flex items-center justify-around px-4">
        {[false, false, false, true].map((active, i) => (
          <div
            key={i}
            className="w-5 h-5 rounded-full"
            style={{ backgroundColor: active ? "rgba(196,91,40,0.4)" : "rgba(255,255,255,0.05)" }}
          />
        ))}
      </div>
    </div>
  )
}
