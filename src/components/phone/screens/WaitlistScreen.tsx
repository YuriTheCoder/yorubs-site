import Image from "next/image"

export function WaitlistScreen() {
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
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        {/* Logo */}
        <Image
          src="/images/logo.png"
          alt=""
          width={72}
          height={72}
          className="rounded-2xl mb-4"
          aria-hidden="true"
        />

        <h3 className="text-base font-bold text-text-primary mb-1">Yorubs</h3>
        <p className="text-[10px] text-text-secondary text-center mb-5">
          Aprenda Yorùbá de forma divertida
        </p>

        {/* Badge */}
        <span className="text-[12px] font-bold text-gold mb-4">Pré-Registro</span>

        {/* Fake email input */}
        <div className="w-full px-2 mb-3">
          <div className="w-full py-2 px-3 rounded-lg bg-background-card border border-border text-[10px] text-text-muted">
            seu@email.com
          </div>
        </div>

        {/* CTA */}
        <div className="w-full px-2">
          <div className="w-full py-2.5 rounded-full bg-gradient-to-r from-gold to-terracotta text-center text-[11px] font-bold text-background">
            Garantir Meu Lugar
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
