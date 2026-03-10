const ORISA_MINI = [
  { name: "Èṣù", color: "#C45B28" },
  { name: "Ògún", color: "#2D6A4F" },
  { name: "Yemọja", color: "#4A9BD9" },
  { name: "Ọ̀ṣun", color: "#D4A853" },
  { name: "Ṣàngó", color: "#C45B28" },
  { name: "Ọbàtálá", color: "#E8E8E8" },
]

export function OrisaScreen() {
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

      {/* Header */}
      <div className="px-4 pt-8 pb-3">
        <span className="text-[10px] text-gold font-medium">Explorar</span>
        <h3 className="text-sm font-bold text-text-primary mt-0.5">Biblioteca Sagrada</h3>
      </div>

      {/* Orisa grid 2x3 */}
      <div className="flex-1 px-3">
        <div className="grid grid-cols-2 gap-2">
          {ORISA_MINI.map((o) => (
            <div
              key={o.name}
              className="flex flex-col items-center p-2.5 rounded-xl border border-border/50"
              style={{ background: `linear-gradient(135deg, ${o.color}10, ${o.color}20)` }}
            >
              <div
                className="w-9 h-9 rounded-full mb-1.5 flex items-center justify-center text-[11px] font-bold text-white"
                style={{ backgroundColor: o.color }}
              >
                {o.name[0]}
              </div>
              <span className="text-[10px] font-medium text-text-primary">{o.name}</span>
            </div>
          ))}
        </div>

        {/* More indicator */}
        <div className="text-center mt-3">
          <span className="text-[9px] text-text-muted">+13 Òrìṣà</span>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="h-12 border-t border-white/5 flex items-center justify-around px-4">
        {[false, false, true, false].map((active, i) => (
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
