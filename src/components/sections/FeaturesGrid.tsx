"use client"

import { RevealOnScroll } from "@/components/animations/RevealOnScroll"
import { CardTilt } from "@/components/animations/CardTilt"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { FEATURES } from "@/lib/constants"

const colorMap = {
  gold: "bg-gold/10 text-gold",
  terracotta: "bg-terracotta/10 text-terracotta",
  forest: "bg-forest/10 text-forest-light",
}

export function FeaturesGrid() {
  return (
    <section id="features" className="py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Recursos"
          title="Tudo Para Aprender Yorùbá"
          subtitle="Ferramentas poderosas reunidas em um app bonito e intuitivo."
          badgeColor="gold"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {FEATURES.map((feature, i) => (
            <RevealOnScroll key={i} delay={i * 0.1}>
              <CardTilt className="h-full">
                <div data-feature-index={i} className="bg-background-card border border-border rounded-2xl p-8 h-full hover:border-gold/30 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-500">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${colorMap[feature.color]}`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">{feature.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{feature.description}</p>
                </div>
              </CardTilt>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
