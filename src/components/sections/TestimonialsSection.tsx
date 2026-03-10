"use client"

import { RevealOnScroll } from "@/components/animations/RevealOnScroll"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { TESTIMONIALS } from "@/lib/constants"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-28 lg:py-32 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Depoimentos"
          title="O Que Dizem Nossos Beta Testers"
          badgeColor="gold"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <RevealOnScroll key={i} delay={i * 0.1}>
              <div className="bg-background-card border border-border rounded-2xl p-6 hover:border-gold/20 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-sm font-bold text-gold">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-medium text-sm">{t.name}</div>
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: t.stars }).map((_, s) => (
                        <Star key={s} className="w-3 h-3 fill-gold text-gold" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
        <p className="text-center text-xs text-text-muted mt-8">
          * Feedback de beta testers durante o período de testes.
        </p>
      </div>
    </section>
  )
}
