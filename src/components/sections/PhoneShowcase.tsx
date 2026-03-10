"use client"

import { useRef } from "react"
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap-plugins"
import { PhoneFrame } from "@/components/phone/PhoneFrame"
import { Music, Bot, Scroll, BookOpen, Trophy } from "lucide-react"

export const PHONE_STEPS = [
  {
    icon: Music,
    title: "Lições Tonais Interativas",
    description:
      "Domine os tons do Yorùbá com visualização em tempo real e 13 tipos de exercícios gamificados. Áudio nativo e feedback instantâneo.",
    color: "#D4A853",
    gradient: "from-[#D4A853]/20 to-[#B8912F]/20",
    screenLabel: "Lições",
    screenSub: "Exercício de tons",
  },
  {
    icon: Bot,
    title: "Àróbá, Seu Tutor IA",
    description:
      "Converse com o Ancião virtual que adapta o ensino ao seu ritmo, corrige sua pronúncia e compartilha sabedoria ancestral.",
    color: "#C45B28",
    gradient: "from-[#C45B28]/20 to-[#A04820]/20",
    screenLabel: "Àróbá",
    screenSub: "Chat inteligente",
  },
  {
    icon: Scroll,
    title: "Provérbio do Dia",
    description:
      "358 provérbios com pronúncia, tradução e exercícios interativos. Sabedoria Yorùbá renovada todos os dias.",
    color: "#2D6A4F",
    gradient: "from-[#2D6A4F]/20 to-[#1B4332]/20",
    screenLabel: "Provérbio",
    screenSub: "Sabedoria diária",
  },
  {
    icon: BookOpen,
    title: "Biblioteca Sagrada",
    description:
      "19 Òrìṣà com vocabulário, cânticos, oríkì, ervas sagradas, objetos e oferendas. Um tesouro cultural completo.",
    color: "#D4A853",
    gradient: "from-[#D4A853]/20 to-[#B8912F]/20",
    screenLabel: "Biblioteca",
    screenSub: "Os Òrìṣà",
  },
  {
    icon: Trophy,
    title: "Gamificação Completa",
    description:
      "XP, sequências, ligas, conquistas e gems. Cada dia de estudo te leva mais longe na jornada Yorùbá.",
    color: "#C45B28",
    gradient: "from-[#C45B28]/20 to-[#A04820]/20",
    screenLabel: "Ranking",
    screenSub: "Liga Ouro",
  },
]

export function PhoneScreen({ step, active }: { step: (typeof PHONE_STEPS)[number]; active: boolean }) {
  const Icon = step.icon
  return (
    <div
      className={`absolute inset-0 flex flex-col items-center justify-center p-6 transition-opacity duration-500 ${
        active ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{
        background: `linear-gradient(160deg, ${step.color}15, ${step.color}35)`,
      }}
    >
      {/* Status bar */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-5 pt-3 text-[10px] text-text-secondary/60">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <div className="w-3 h-2 border border-text-secondary/40 rounded-[2px]">
            <div className="w-2 h-full bg-text-secondary/40 rounded-[1px]" />
          </div>
        </div>
      </div>

      {/* Dynamic island */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[90px] h-[26px] bg-black rounded-full" />

      {/* Content */}
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
        style={{ backgroundColor: `${step.color}25` }}
      >
        <Icon className="w-8 h-8" style={{ color: step.color }} />
      </div>
      <span className="text-lg font-bold text-text-primary">{step.screenLabel}</span>
      <span className="text-xs text-text-secondary mt-1">{step.screenSub}</span>

      {/* Fake UI elements */}
      <div className="w-full mt-6 space-y-2.5 px-3">
        {/* Progress bar */}
        <div className="flex items-center gap-2">
          <div className="flex-1 h-1.5 rounded-full bg-white/5 overflow-hidden">
            <div className="h-full rounded-full w-2/3" style={{ backgroundColor: `${step.color}60` }} />
          </div>
          <span className="text-[9px] font-medium" style={{ color: `${step.color}90` }}>67%</span>
        </div>
        {/* Card rows */}
        <div className="flex gap-2">
          <div className="flex-1 h-10 rounded-lg border flex items-center px-2 gap-1.5" style={{ borderColor: `${step.color}15`, backgroundColor: `${step.color}08` }}>
            <div className="w-5 h-5 rounded" style={{ backgroundColor: `${step.color}20` }} />
            <div className="flex-1 space-y-1">
              <div className="h-1.5 rounded-full w-3/4" style={{ backgroundColor: `${step.color}15` }} />
              <div className="h-1 rounded-full w-1/2" style={{ backgroundColor: `${step.color}10` }} />
            </div>
          </div>
          <div className="flex-1 h-10 rounded-lg border flex items-center px-2 gap-1.5" style={{ borderColor: `${step.color}15`, backgroundColor: `${step.color}08` }}>
            <div className="w-5 h-5 rounded" style={{ backgroundColor: `${step.color}20` }} />
            <div className="flex-1 space-y-1">
              <div className="h-1.5 rounded-full w-2/3" style={{ backgroundColor: `${step.color}15` }} />
              <div className="h-1 rounded-full w-1/3" style={{ backgroundColor: `${step.color}10` }} />
            </div>
          </div>
        </div>
        {/* CTA button */}
        <div
          className="mx-auto w-28 h-8 rounded-full flex items-center justify-center text-[10px] font-semibold mt-1"
          style={{ backgroundColor: `${step.color}30`, color: step.color }}
        >
          Continuar
        </div>
      </div>

      {/* Bottom nav bar */}
      <div className="absolute bottom-0 left-0 right-0 h-14 border-t border-white/5 flex items-center justify-around px-4">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="w-5 h-5 rounded-full"
            style={{ backgroundColor: i === 0 ? `${step.color}40` : "rgba(255,255,255,0.05)" }}
          />
        ))}
      </div>
    </div>
  )
}

export function PhoneShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const mobilePhoneRef = useRef<HTMLDivElement>(null)
  const mobileScreenRefs = useRef<(HTMLDivElement | null)[]>([])
  const mobileIndicatorRef = useRef<HTMLDivElement>(null)
  const desktopPhoneRef = useRef<HTMLDivElement>(null)
  const desktopScreenRefs = useRef<(HTMLDivElement | null)[]>([])

  useGSAP(
    () => {
      if (!sectionRef.current) return

      const mm = gsap.matchMedia()

      // ── Mobile: sticky phone with scroll-driven crossfade ──
      mm.add("(max-width: 1023px)", () => {
        if (!mobilePhoneRef.current || !sectionRef.current) return

        const mobileSteps = sectionRef.current.querySelectorAll<HTMLElement>(".mobile-step")

        mobileSteps.forEach((step, i) => {
          ScrollTrigger.create({
            trigger: step,
            start: "top 80%",
            end: "bottom 20%",
            onEnter: () => activateMobileStep(i),
            onEnterBack: () => activateMobileStep(i),
          })
        })

        function activateMobileStep(index: number) {
          mobileScreenRefs.current.forEach((screen, i) => {
            if (!screen) return
            gsap.to(screen, {
              autoAlpha: i === index ? 1 : 0,
              duration: 0.4,
              ease: "power2.out",
            })
          })
          if (mobileIndicatorRef.current) {
            const dots = mobileIndicatorRef.current.children
            Array.from(dots).forEach((dot, i) => {
              gsap.to(dot, {
                scale: i === index ? 1.3 : 1,
                backgroundColor: i === index ? PHONE_STEPS[index].color : "rgba(255,255,255,0.15)",
                duration: 0.3,
              })
            })
          }
        }

        activateMobileStep(0)
      })

      // ── Desktop: sticky phone on left, text scrolls on right ──
      mm.add("(min-width: 1024px)", () => {
        if (!sectionRef.current) return

        const desktopSteps = sectionRef.current.querySelectorAll<HTMLElement>(".showcase-step")

        desktopSteps.forEach((step, i) => {
          ScrollTrigger.create({
            trigger: step,
            start: "top 55%",
            end: "bottom 45%",
            onEnter: () => activateDesktopStep(i),
            onEnterBack: () => activateDesktopStep(i),
          })
        })

        function activateDesktopStep(index: number) {
          desktopScreenRefs.current.forEach((screen, i) => {
            if (!screen) return
            gsap.to(screen, {
              autoAlpha: i === index ? 1 : 0,
              duration: 0.5,
              ease: "power2.out",
            })
          })
        }

        activateDesktopStep(0)
      })
    },
    { scope: sectionRef }
  )

  return (
    <section id="phone-showcase" ref={sectionRef} className="relative">
      {/* ── Mobile: sticky phone + scrolling steps ── */}
      <div className="lg:hidden">
        <div className="px-4 pt-8 pb-4 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-gold/10 text-gold border border-gold/20 mb-4">
            Descubra o App
          </span>
          <h2 className="text-3xl font-serif text-text-primary">
            Tudo na Palma da Mão
          </h2>
        </div>

        {/* Sticky phone */}
        <div className="sticky top-[8vh] z-10 flex flex-col items-center py-4">
          <div
            ref={mobilePhoneRef}
            className="w-[200px] h-[410px] rounded-[36px] border-[3px] border-[#3A3A45] bg-[#0A0A0F] overflow-hidden relative shadow-2xl"
          >
            <div className="absolute inset-[3px] rounded-[33px] overflow-hidden bg-background-secondary">
              {PHONE_STEPS.map((step, i) => (
                <div
                  key={i}
                  ref={(el) => { mobileScreenRefs.current[i] = el }}
                  style={{ visibility: i === 0 ? "visible" : "hidden" }}
                  className="absolute inset-0"
                >
                  <PhoneScreen step={step} active />
                </div>
              ))}
            </div>
          </div>
          {/* Dot indicator */}
          <div ref={mobileIndicatorRef} className="flex gap-2 mt-3">
            {PHONE_STEPS.map((step, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: i === 0 ? step.color : "rgba(255,255,255,0.15)" }}
              />
            ))}
          </div>
        </div>

        {/* Scrolling steps below the sticky phone — z-20 so they scroll OVER the phone */}
        <div className="relative z-20 px-4 pb-12 space-y-6 pt-8 bg-background">
          {PHONE_STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={i} className="mobile-step py-8">
                <div className="text-center max-w-sm mx-auto">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                    style={{ backgroundColor: `${step.color}15` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: step.color }} />
                  </div>
                  <h3 className="text-lg font-bold text-text-primary">{step.title}</h3>
                  <p className="text-sm text-text-secondary mt-2">{step.description}</p>
                  <div className="flex items-center gap-2 pt-3 justify-center">
                    <div className="w-6 h-[2px] rounded-full" style={{ backgroundColor: step.color }} />
                    <span className="text-xs font-medium" style={{ color: step.color }}>
                      {i + 1} de {PHONE_STEPS.length}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* ── Desktop: sticky phone on left + scrolling text on right ── */}
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-16 lg:gap-24">
            {/* Left: sticky phone */}
            <div className="relative">
              <div className="sticky top-[15vh] flex items-start justify-center py-8">
                <PhoneFrame ref={desktopPhoneRef} size="lg">
                  {PHONE_STEPS.map((step, i) => (
                    <div
                      key={i}
                      ref={(el) => { desktopScreenRefs.current[i] = el }}
                      className="absolute inset-0"
                      style={{ visibility: i === 0 ? "visible" : "hidden" }}
                    >
                      <PhoneScreen step={step} active />
                    </div>
                  ))}
                </PhoneFrame>
              </div>
            </div>

            {/* Right: scrolling feature steps */}
            <div className="py-[30vh]">
              {/* Section header */}
              <div className="mb-16">
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-gold/10 text-gold border border-gold/20 mb-4">
                  Descubra o App
                </span>
                <h2 className="text-4xl lg:text-5xl font-serif text-text-primary">
                  Tudo na Palma da Mão
                </h2>
              </div>

              {/* Steps */}
              <div className="space-y-[40vh]">
                {PHONE_STEPS.map((step, i) => {
                  const Icon = step.icon
                  return (
                    <div
                      key={i}
                      className="showcase-step min-h-[60vh] flex items-center"
                    >
                      <div className="space-y-5">
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center"
                          style={{ backgroundColor: `${step.color}15` }}
                        >
                          <Icon className="w-7 h-7" style={{ color: step.color }} />
                        </div>
                        <h3 className="text-3xl lg:text-4xl font-serif text-text-primary leading-tight">
                          {step.title}
                        </h3>
                        <p className="text-lg text-text-secondary leading-relaxed max-w-md">
                          {step.description}
                        </p>
                        <div className="flex items-center gap-2 pt-2">
                          <div className="w-8 h-[2px] rounded-full" style={{ backgroundColor: step.color }} />
                          <span className="text-xs font-medium" style={{ color: step.color }}>
                            {i + 1} de {PHONE_STEPS.length}
                          </span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
