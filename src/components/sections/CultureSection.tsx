"use client"

import { useRef } from "react"
import { gsap, useGSAP } from "@/lib/gsap-plugins"
import { RevealOnScroll } from "@/components/animations/RevealOnScroll"
import { CardTilt } from "@/components/animations/CardTilt"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { PhoneFrame } from "@/components/phone/PhoneFrame"
import { OrisaScreen } from "@/components/phone/screens/OrisaScreen"
import { ORISAS } from "@/lib/constants"

export function CultureSection() {
  const mobilePhoneRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()
    mm.add("(max-width: 1023px)", () => {
      if (!mobilePhoneRef.current) return
      gsap.from(mobilePhoneRef.current, {
        x: 100,
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
    <section id="culture" className="py-20 md:py-28 lg:py-32 relative overflow-hidden">
      {/* Adire pattern background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A853' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Cultura"
          title="A Cultura Viva dos Òrìṣà"
          subtitle="Mergulhe na rica tradição Yorùbá com a Biblioteca Sagrada. Conheça os Òrìṣà, seus cânticos, vocabulário e significados profundos."
          badgeColor="gold"
        />

        {/* Mobile phone */}
        <div ref={mobilePhoneRef} className="lg:hidden flex justify-center mb-10" aria-hidden="true">
          <PhoneFrame size="sm">
            <OrisaScreen />
          </PhoneFrame>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {ORISAS.map((orisa, i) => (
            <RevealOnScroll key={orisa.name} delay={i * 0.15}>
              <CardTilt className="h-full">
                <div
                  className="rounded-2xl p-6 h-full border border-border/50 hover:border-gold/30 transition-all duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${orisa.colors[0]}15, ${orisa.colors[1]}25)`,
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full mb-4 flex items-center justify-center text-lg font-bold text-white"
                    style={{ backgroundColor: orisa.colors[0] }}
                  >
                    {orisa.name[0]}
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-1">{orisa.name}</h3>
                  <p className="text-xs text-gold mb-2">{orisa.title}</p>
                  <p className="text-sm text-text-secondary leading-relaxed">{orisa.description}</p>
                </div>
              </CardTilt>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
