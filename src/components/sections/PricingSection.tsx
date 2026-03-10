"use client"

import { RevealOnScroll } from "@/components/animations/RevealOnScroll"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { MagneticButton } from "@/components/animations/MagneticButton"
import { PRICING, LINKS } from "@/lib/constants"
import { Check } from "lucide-react"

export function PricingSection({ centered = false }: { centered?: boolean } = {}) {

  return (
    <section id="pricing" className="py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={PRICING.title}
          subtitle="Comece grátis e evolua quando quiser."
          badgeColor="gold"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRICING.plans.map((plan, i) => (
            <RevealOnScroll key={plan.name} delay={i * 0.1} from={{ autoAlpha: 0, scale: 0.95, y: 40 }}>
              <div
                className={`relative rounded-2xl p-6 h-full flex flex-col ${
                  plan.highlighted
                    ? "bg-background-card border-2 border-gold shadow-glow-gold"
                    : "bg-background-card border border-border"
                }`}
              >
                {plan.highlighted && 'badge' in plan && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gold text-background text-xs font-bold px-4 py-1 rounded-full">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>

                {'trial' in plan && plan.trial && (
                  <span className="text-xs text-gold">{plan.trial}</span>
                )}

                <div className="mt-3 mb-4">
                  <span className="text-3xl font-bold">
                    {'priceLabel' in plan ? plan.priceLabel : "—"}
                  </span>
                </div>

                <ul className="space-y-2 mb-6 flex-1">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-sm">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlighted ? "text-gold" : "text-forest-light"}`} />
                      <span className="text-text-secondary">{feat}</span>
                    </li>
                  ))}
                </ul>

                <MagneticButton
                  href={LINKS.download}
                  className={`block w-full text-center py-3 rounded-full font-semibold transition-all duration-300 text-sm ${
                    plan.highlighted
                      ? "bg-gold text-background hover:bg-gold-light hover:shadow-glow-gold"
                      : "border border-border text-text-primary hover:border-gold/30"
                  }`}
                >
                  {plan.cta}
                </MagneticButton>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
