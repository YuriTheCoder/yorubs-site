"use client"

import { useRef } from "react"
import { gsap, useGSAP } from "@/lib/gsap-plugins"
import { RevealOnScroll } from "@/components/animations/RevealOnScroll"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { PhoneFrame } from "@/components/phone/PhoneFrame"
import { GamificationScreen } from "@/components/phone/screens/GamificationScreen"
import { GAMIFICATION } from "@/lib/constants"
import { Flame, Star, Trophy, Zap } from "lucide-react"

export function GamificationSection() {
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
    <section id="gamification" className="py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text (desktop) — Right: Text (when phone is on left desktop, swap via order) */}
          <div className="lg:order-2">
            <SectionHeading
              badge="Gamificação"
              title={GAMIFICATION.title}
              subtitle={GAMIFICATION.subtitle}
              badgeColor="terracotta"
              className="text-left"
            />

            <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-8">
              {GAMIFICATION.stats.map((stat, i) => (
                <RevealOnScroll key={i} delay={i * 0.1}>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-gold">{stat.value}</div>
                    <div className="text-sm text-text-secondary mt-1">{stat.label}</div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>

          {/* Right: Mockup panel (mobile only) / Spacer (desktop — fixed phone overlays) */}
          <div className="lg:order-1">
            {/* Desktop phone */}
            <div className="hidden lg:flex justify-center" aria-hidden="true">
              <PhoneFrame size="md">
                <GamificationScreen />
              </PhoneFrame>
            </div>

            {/* Mobile phone */}
            <div ref={mobilePhoneRef} className="lg:hidden flex justify-center" aria-hidden="true">
              <PhoneFrame size="sm">
                <GamificationScreen />
              </PhoneFrame>
            </div>

            {/* Mobile fallback mockup card */}
            <div className="lg:hidden mt-8">
              <RevealOnScroll from={{ autoAlpha: 0, x: 60 }}>
                <div className="bg-background-card border border-border rounded-2xl p-6 space-y-6">
                  {/* XP Bar */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-gold" />
                        <span className="text-sm font-medium">Nível 12</span>
                      </div>
                      <span className="text-xs text-text-muted">1.250 / 2.000 XP</span>
                    </div>
                    <div className="h-2 bg-surface rounded-full overflow-hidden">
                      <div className="h-full bg-gold rounded-full" style={{ width: "62.5%" }} />
                    </div>
                  </div>

                  {/* Streak */}
                  <div className="flex items-center gap-3 bg-background-tertiary rounded-xl p-4">
                    <Flame className="w-8 h-8 text-terracotta" />
                    <div>
                      <div className="font-bold">Sequência de 7 dias!</div>
                      <div className="text-xs text-text-secondary">Continue estudando amanhã</div>
                    </div>
                  </div>

                  {/* Mini leaderboard */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <Trophy className="w-4 h-4 text-gold" />
                        <span className="font-medium">Liga Ouro</span>
                      </div>
                      <span className="text-text-muted">3º lugar</span>
                    </div>
                    {[
                      { name: "Ana S.", xp: "2.450 XP", pos: 1 },
                      { name: "Carlos M.", xp: "2.380 XP", pos: 2 },
                      { name: "Você", xp: "2.250 XP", pos: 3, highlight: true },
                    ].map((player) => (
                      <div
                        key={player.pos}
                        className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm ${
                          player.highlight ? "bg-gold/10 border border-gold/20" : "bg-surface/50"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-text-muted w-5">{player.pos}.</span>
                          <span className={player.highlight ? "text-gold font-medium" : ""}>{player.name}</span>
                        </div>
                        <span className="text-text-secondary">{player.xp}</span>
                      </div>
                    ))}
                  </div>

                  {/* Achievements */}
                  <div className="flex items-center gap-3">
                    {[Star, Trophy, Flame, Zap].map((Icon, i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center"
                      >
                        <Icon className="w-5 h-5 text-gold" />
                      </div>
                    ))}
                    <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-xs text-text-muted">
                      +12
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
