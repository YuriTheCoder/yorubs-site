"use client"

import { useRef } from "react"
import { gsap, useGSAP } from "@/lib/gsap-plugins"
import { TextReveal } from "@/components/animations/TextReveal"
import { MagneticButton } from "@/components/animations/MagneticButton"
import { PhoneFrame } from "@/components/phone/PhoneFrame"
import { WaitlistScreen } from "@/components/phone/screens/WaitlistScreen"
import { CTA, LINKS } from "@/lib/constants"

export function CTASection() {
  const mobilePhoneRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()
    mm.add("(max-width: 1023px)", () => {
      if (!mobilePhoneRef.current) return
      gsap.from(mobilePhoneRef.current, {
        scale: 0.9,
        autoAlpha: 0,
        duration: 1,
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
    <section id="cta" className="py-20 md:py-28 lg:py-40 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(212,168,83,0.08) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <TextReveal
          as="h2"
          className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight tracking-tight"
        >
          {CTA.title}
        </TextReveal>

        <TextReveal
          as="p"
          className="text-lg md:text-xl text-text-secondary mt-6 max-w-2xl mx-auto"
          stagger={0.03}
        >
          {CTA.subtitle}
        </TextReveal>

        {/* Mobile phone */}
        <div ref={mobilePhoneRef} className="lg:hidden flex justify-center my-10" aria-hidden="true">
          <PhoneFrame size="md">
            <WaitlistScreen />
          </PhoneFrame>
        </div>

        <div className="mt-10 flex flex-col items-center gap-6">
          <MagneticButton
            href="/pre-registro"
            className="inline-flex items-center px-8 py-4 bg-gold text-background font-semibold rounded-full hover:bg-gold-light hover:shadow-glow-gold active:scale-95 transition-all duration-300"
          >
            {CTA.cta}
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}
