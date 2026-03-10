export function ReviewScreen() {
  return (
    <div
      className="absolute inset-0 flex flex-col"
      style={{ background: "linear-gradient(180deg, rgba(212,168,83,0.08) 0%, #0A0A0F 100%)" }}
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

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-5">
        {/* Stars */}
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-lg text-gold">★</span>
          ))}
        </div>

        {/* Rating */}
        <span className="text-3xl font-bold text-gold mb-4">4.8</span>

        {/* Quote */}
        <div className="bg-background-card/80 border border-border rounded-xl p-3 mb-4 w-full">
          <p className="text-[11px] text-text-secondary text-center leading-relaxed italic">
            &ldquo;Melhor app para aprender Yorùbá! O tutor IA e incrivel.&rdquo;
          </p>
        </div>

        {/* Avatar + name */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-gold/20 flex items-center justify-center text-[10px] font-bold text-gold">
            M
          </div>
          <div>
            <span className="text-[10px] font-medium text-text-primary block">Maria L.</span>
            <span className="text-[8px] text-text-muted">Beta tester</span>
          </div>
        </div>

        {/* More reviews indicator */}
        <div className="flex gap-1 mt-4">
          {[true, false, false].map((active, i) => (
            <div
              key={i}
              className="rounded-full"
              style={{
                width: active ? 16 : 6,
                height: 6,
                backgroundColor: active ? "#D4A853" : "rgba(255,255,255,0.1)",
              }}
            />
          ))}
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
