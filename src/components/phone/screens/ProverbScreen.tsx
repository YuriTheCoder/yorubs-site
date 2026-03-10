export function ProverbScreen() {
  return (
    <div
      className="absolute inset-0 flex flex-col"
      style={{ background: "linear-gradient(180deg, #1B4332 0%, #0A0A0F 100%)" }}
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

      {/* Header */}
      <div className="px-4 pt-8 pb-2">
        <span className="text-[10px] text-forest-light font-medium">Proverbio do Dia</span>
      </div>

      {/* Proverb content */}
      <div className="flex-1 flex flex-col items-center justify-center px-5">
        {/* Audio icon */}
        <div className="w-8 h-8 rounded-full bg-forest/30 flex items-center justify-center mb-4">
          <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-forest-light border-b-[5px] border-b-transparent ml-0.5" />
        </div>

        <p className="text-[13px] font-serif text-gold italic text-center leading-relaxed mb-4">
          &ldquo;Eni ti o ba mo ibi ti o ti wa, yoo mo ibi ti o nlo.&rdquo;
        </p>

        <div className="w-8 h-[1px] bg-forest-light/30 mb-4" />

        <p className="text-[10px] text-text-secondary text-center leading-relaxed px-2">
          Quem sabe de onde veio, sabera para onde vai.
        </p>

        {/* Category pill */}
        <div className="mt-4 px-3 py-1 rounded-full bg-forest/20 border border-forest/30">
          <span className="text-[9px] text-forest-light font-medium">Sabedoria</span>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="h-12 border-t border-white/5 flex items-center justify-around px-4">
        {[false, false, false, false].map((_, i) => (
          <div
            key={i}
            className="w-5 h-5 rounded-full"
            style={{ backgroundColor: i === 0 ? "rgba(45,106,79,0.4)" : "rgba(255,255,255,0.05)" }}
          />
        ))}
      </div>
    </div>
  )
}
