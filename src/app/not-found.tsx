"use client"

import { useRef } from "react"
import Link from "next/link"
import { gsap, useGSAP } from "@/lib/gsap-plugins"
import { MagneticButton } from "@/components/animations/MagneticButton"
import { Home, Search, ArrowLeft, BookOpen } from "lucide-react"

const YORUBA_PROVERBS = [
  { yoruba: "Ẹni tí ò mọ̀ ibi tí ó ti wá, kò lè mọ̀ ibi tí ó ń lọ.", translation: "Quem não sabe de onde veio, não pode saber para onde vai." },
  { yoruba: "Àgbà kì í wà lójà, kí orí ọmọ tuntun wó.", translation: "Um ancião não fica no mercado enquanto a cabeça de um recém-nascido se torce." },
  { yoruba: "Bí a bá ń lọ, a ó dé.", translation: "Se continuarmos andando, chegaremos lá." },
]

export default function NotFound() {
  const containerRef = useRef<HTMLDivElement>(null)
  const numbersRef = useRef<HTMLHeadingElement>(null)
  const orb1Ref = useRef<HTMLDivElement>(null)
  const orb2Ref = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const linksRef = useRef<HTMLDivElement>(null)

  // Pick a random proverb
  const proverb = YORUBA_PROVERBS[Math.floor(Math.random() * YORUBA_PROVERBS.length)]

  useGSAP(() => {
    if (!containerRef.current) return

    const tl = gsap.timeline({ defaults: { ease: "yorubs-smooth" } })

    // Animate 404 number
    if (numbersRef.current) {
      tl.from(numbersRef.current, {
        scale: 0.5,
        autoAlpha: 0,
        duration: 1.2,
        rotationX: 40,
      })
    }

    // Animate content
    if (contentRef.current) {
      tl.from(contentRef.current.children, {
        y: 40,
        autoAlpha: 0,
        stagger: 0.12,
        duration: 0.8,
      }, "-=0.6")
    }

    // Animate links
    if (linksRef.current) {
      tl.from(linksRef.current.children, {
        y: 30,
        autoAlpha: 0,
        stagger: 0.08,
        duration: 0.6,
      }, "-=0.4")
    }

    // Floating orbs
    if (orb1Ref.current) {
      gsap.to(orb1Ref.current, {
        y: -30,
        x: 15,
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      })
    }
    if (orb2Ref.current) {
      gsap.to(orb2Ref.current, {
        y: 25,
        x: -20,
        duration: 5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      })
    }
  })

  return (
    <main
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden"
    >
      {/* Floating orbs */}
      <div
        ref={orb1Ref}
        className="absolute top-[15%] left-[10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-gold/[0.04] blur-[100px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        ref={orb2Ref}
        className="absolute bottom-[10%] right-[5%] w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full bg-terracotta/[0.03] blur-[80px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Decorative adire pattern line */}
      <div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold/20 to-transparent"
        aria-hidden="true"
      />

      {/* Giant background text */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] md:text-[20vw] font-serif text-border/[0.04] select-none pointer-events-none whitespace-nowrap"
        aria-hidden="true"
      >
        Yorubs
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* 404 number */}
        <h1
          ref={numbersRef}
          className="text-[10rem] md:text-[14rem] font-serif leading-none tracking-tighter mb-2"
          style={{
            background: "linear-gradient(135deg, #D4A853 0%, #C45B28 50%, #D4A853 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          404
        </h1>

        {/* Content */}
        <div ref={contentRef}>
          <p className="text-xl md:text-2xl text-text-primary font-serif mb-3">
            Caminho não encontrado
          </p>

          <p className="text-text-secondary mb-8 max-w-md mx-auto">
            Parece que você se perdeu nas encruzilhadas. Até Èṣù precisa de direções às vezes.
          </p>

          {/* Proverb card */}
          <div className="bg-background-tertiary/50 border border-gold/10 rounded-2xl p-6 mb-10 backdrop-blur-sm max-w-lg mx-auto">
            <p className="text-gold font-serif text-lg italic mb-2">
              &ldquo;{proverb.yoruba}&rdquo;
            </p>
            <p className="text-sm text-text-muted">
              {proverb.translation}
            </p>
          </div>
        </div>

        {/* Action buttons */}
        <div ref={linksRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <MagneticButton
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-background font-semibold rounded-full hover:bg-gold-light hover:shadow-glow-gold active:scale-95 transition-all duration-300"
          >
            <Home className="w-4 h-4" />
            Voltar ao Início
          </MagneticButton>

          <MagneticButton
            href="/pre-registro"
            className="inline-flex items-center gap-2 px-8 py-4 border border-gold/30 text-gold rounded-full hover:bg-gold/5 transition-all duration-300"
          >
            <BookOpen className="w-4 h-4" />
            Pré-Registro
          </MagneticButton>
        </div>

        {/* Quick links */}
        <div ref={linksRef} className="flex flex-wrap items-center justify-center gap-6 text-sm">
          <Link href="/features" className="flex items-center gap-1.5 text-text-muted hover:text-gold transition-colors">
            <Search className="w-3.5 h-3.5" />
            Recursos
          </Link>
          <Link href="/blog" className="flex items-center gap-1.5 text-text-muted hover:text-gold transition-colors">
            <BookOpen className="w-3.5 h-3.5" />
            Blog
          </Link>
          <Link href="/pricing" className="flex items-center gap-1.5 text-text-muted hover:text-gold transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            Preços
          </Link>
          <Link href="/faq" className="flex items-center gap-1.5 text-text-muted hover:text-gold transition-colors">
            <Search className="w-3.5 h-3.5" />
            FAQ
          </Link>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-terracotta/20 to-transparent"
        aria-hidden="true"
      />
    </main>
  )
}
