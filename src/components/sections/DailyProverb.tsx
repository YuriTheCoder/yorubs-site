"use client"

import { useState, useRef } from "react"
import { gsap, useGSAP } from "@/lib/gsap-plugins"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { RevealOnScroll } from "@/components/animations/RevealOnScroll"
import { PhoneFrame } from "@/components/phone/PhoneFrame"
import { ProverbScreen } from "@/components/phone/screens/ProverbScreen"
import { PROVERB } from "@/lib/constants"

export function DailyProverb() {
  const [revealed, setRevealed] = useState(false)
  const mobilePhoneRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()
    mm.add("(max-width: 1023px)", () => {
      if (!mobilePhoneRef.current) return
      gsap.from(mobilePhoneRef.current, {
        x: -100,
        autoAlpha: 0,
        duration: 0.8,
        ease: "yorubs-smooth",
        scrollTrigger: {
          trigger: mobilePhoneRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      })
    })
  })

  return (
    <section id="proverb" className="py-20 md:py-28 lg:py-32 relative overflow-hidden">
      {/* Adire texture background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2l2-1h14v2H24v2h18v2H24v2H22l-2-1z' fill='%23D4A853' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeading
          badge="Proverbios"
          title={PROVERB.title}
          badgeColor="forest"
        />

        {/* Mobile phone */}
        <div ref={mobilePhoneRef} className="lg:hidden flex justify-center mb-10" aria-hidden="true">
          <PhoneFrame size="sm">
            <ProverbScreen />
          </PhoneFrame>
        </div>

        <RevealOnScroll>
          <div
            className="bg-background-card/50 border border-border rounded-2xl p-8 md:p-12 cursor-pointer group"
            onClick={() => setRevealed(!revealed)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setRevealed(!revealed)}
            aria-expanded={revealed}
          >
            <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-gold leading-relaxed italic mb-6">
              &ldquo;{PROVERB.yoruba}&rdquo;
            </p>

            <div
              className={`overflow-hidden transition-all duration-700 ${
                revealed ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-lg text-text-secondary leading-relaxed">
                {PROVERB.translation}
              </p>
            </div>

            {!revealed && (
              <p className="text-sm text-text-muted mt-4 group-hover:text-gold transition-colors">
                Clique para revelar a tradução
              </p>
            )}
          </div>
        </RevealOnScroll>

        <p className="text-text-secondary mt-8">
          {PROVERB.subtitle}
        </p>
      </div>
    </section>
  )
}
