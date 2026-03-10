"use client"

import { useRef } from "react"
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap-plugins"
import { TextReveal } from "@/components/animations/TextReveal"
import { MagneticButton } from "@/components/animations/MagneticButton"
import { PhoneFrame } from "@/components/phone/PhoneFrame"
import { HomeScreen } from "@/components/phone/screens/HomeScreen"
import { HERO, LINKS } from "@/lib/constants"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const phoneWrapRef = useRef<HTMLDivElement>(null)
  const orb1Ref = useRef<HTMLDivElement>(null)
  const orb2Ref = useRef<HTMLDivElement>(null)
  const orb3Ref = useRef<HTMLDivElement>(null)
  const accentLineRef = useRef<HTMLDivElement>(null)
  const accentDotRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!sectionRef.current) return

    const mm = gsap.matchMedia()

    mm.add("(min-width: 1024px)", () => {
      if (!phoneWrapRef.current) return

      // Phone entrance — rise from below
      gsap.from(phoneWrapRef.current, {
        y: 100,
        autoAlpha: 0,
        rotation: 6,
        duration: 1.4,
        delay: 0.5,
        ease: "yorubs-smooth",
      })

      // Phone parallax on scroll — moves slower
      gsap.to(phoneWrapRef.current, {
        y: -150,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      })
    })

    mm.add("(max-width: 1023px)", () => {
      if (!phoneWrapRef.current) return

      gsap.from(phoneWrapRef.current, {
        scale: 0.85,
        autoAlpha: 0,
        duration: 1,
        delay: 0.6,
        ease: "yorubs-smooth",
      })

      gsap.to(phoneWrapRef.current, {
        y: -60,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      })
    })

    // Background orbs — different parallax speeds for depth
    const orbs = [
      { el: orb1Ref.current, speed: -80 },
      { el: orb2Ref.current, speed: -120 },
      { el: orb3Ref.current, speed: -50 },
    ]

    orbs.forEach(({ el, speed }) => {
      if (!el) return
      gsap.to(el, {
        y: speed,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      })
    })

    // Decorative accent line
    if (accentLineRef.current) {
      gsap.to(accentLineRef.current, {
        y: -60,
        rotation: 15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
      })
    }

    // Decorative accent dot
    if (accentDotRef.current) {
      gsap.to(accentDotRef.current, {
        y: -90,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.8,
        },
      })
    }
  })

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-12"
    >
      {/* Parallax background orbs */}
      <div
        ref={orb1Ref}
        className="absolute top-[8%] left-[2%] w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full bg-gold/[0.04] blur-[100px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        ref={orb2Ref}
        className="absolute top-[25%] right-[5%] w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full bg-terracotta/[0.03] blur-[80px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        ref={orb3Ref}
        className="absolute bottom-[5%] left-[30%] w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full bg-forest/[0.03] blur-[90px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Decorative accent shapes */}
      <div
        ref={accentLineRef}
        className="absolute top-[15%] right-[15%] w-20 h-[2px] bg-gradient-to-r from-gold/20 to-transparent rounded-full pointer-events-none hidden lg:block"
        aria-hidden="true"
      />
      <div
        ref={accentDotRef}
        className="absolute bottom-[20%] left-[8%] w-3 h-3 rounded-full bg-gold/15 pointer-events-none hidden lg:block"
        aria-hidden="true"
      />

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="space-y-8">
            <div>
              <TextReveal
                as="h1"
                className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-serif leading-[1.05] tracking-tight"
                type="words,chars"
                stagger={0.03}
                trigger="load"
                delay={0.3}
                mask="lines"
              >
                {HERO.title}
              </TextReveal>
            </div>

            <div>
              <TextReveal
                as="p"
                className="text-lg md:text-xl lg:text-2xl text-text-secondary leading-relaxed max-w-xl"
                type="lines,words"
                stagger={0.02}
                trigger="load"
                delay={0.5}
              >
                {HERO.subtitle}
              </TextReveal>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <MagneticButton
                href={LINKS.download}
                className="inline-flex items-center px-8 py-4 bg-gold text-background font-semibold rounded-full hover:bg-gold-light hover:shadow-glow-gold active:scale-95 transition-all duration-300"
              >
                {HERO.cta}
              </MagneticButton>
              <MagneticButton
                href="#features"
                className="inline-flex items-center px-8 py-4 border border-gold/30 text-gold rounded-full hover:bg-gold/5 transition-all duration-300"
              >
                {HERO.ctaSecondary}
              </MagneticButton>
            </div>

            <div className="flex items-center gap-3 text-sm text-text-muted mt-1">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 opacity-60" viewBox="0 0 384 512" fill="currentColor">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-62.1 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                </svg>
                iOS
              </span>
              <span className="w-1 h-1 rounded-full bg-text-muted/40" />
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 opacity-60" viewBox="0 0 512 512" fill="currentColor">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                </svg>
                Android
              </span>
              <span className="w-1 h-1 rounded-full bg-text-muted/40" />
              <span className="opacity-70">100% Gratuito</span>
            </div>
          </div>

          {/* Right: Phone with parallax */}
          <div className="flex items-center justify-center lg:justify-end">
            <div ref={phoneWrapRef} className="relative">
              {/* Glow behind phone */}
              <div
                className="absolute -inset-16 rounded-[60px] blur-[80px] opacity-30 pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(212,168,83,0.3), transparent 70%)" }}
                aria-hidden="true"
              />
              <PhoneFrame>
                <HomeScreen />
              </PhoneFrame>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
