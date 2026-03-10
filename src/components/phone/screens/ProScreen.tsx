export function ProScreen() {
  return (
    <div
      className="absolute inset-0 flex flex-col"
      style={{ background: "linear-gradient(180deg, rgba(212,168,83,0.06) 0%, #0A0A0F 100%)" }}
    >
      {/* Status bar */}
      <div className="flex items-center justify-between px-5 pt-3 text-[10px] text-text-secondary/60">
        <span>9:41</span>
        <div className="w-3 h-2 border border-text-secondary/40 rounded-[2px]">
          <div className="w-2 h-full bg-text-secondary/40 rounded-[1px]" />
        </div>
      </div>

      {/* Dynamic island */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[90px] h-[26px] bg-black rounded-full z-10" />

      <div className="flex-1 flex flex-col items-center px-5 pt-10">
        {/* PRO badge */}
        <div className="px-4 py-1.5 rounded-full bg-gold/20 border border-gold/30 mb-4">
          <span className="text-[12px] font-bold text-gold tracking-wider">PRO</span>
        </div>

        <h3 className="text-sm font-bold text-text-primary mb-1">Yorubs Pro</h3>
        <p className="text-[10px] text-text-secondary mb-5 text-center">Desbloqueie todo o conteúdo</p>

        {/* Feature list */}
        <div className="w-full space-y-2.5">
          {[
            "Licoes ilimitadas",
            "Tutor IA sem limites",
            "Biblioteca completa",
            "Sem anuncios",
          ].map((feat) => (
            <div key={feat} className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-background-card/60 border border-border/50">
              <span className="text-gold text-[10px]">✓</span>
              <span className="text-[10px] text-text-primary">{feat}</span>
            </div>
          ))}
        </div>

        {/* Subscribe button */}
        <div className="w-full mt-5">
          <div className="w-full py-2.5 rounded-full bg-gold text-center text-[11px] font-bold text-background">
            Assinar — R$ 19,90/mes
          </div>
          <p className="text-[8px] text-text-muted text-center mt-2">7 dias gratis</p>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="h-12 border-t border-white/5 flex items-center justify-around px-4">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="w-5 h-5 rounded-full"
            style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
          />
        ))}
      </div>
    </div>
  )
}
