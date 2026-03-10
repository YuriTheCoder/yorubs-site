"use client"

import { CounterAnimation } from "@/components/animations/CounterAnimation"
import { SOCIAL_PROOF } from "@/lib/constants"

export function SocialProofBar() {
  return (
    <section id="social-proof" className="bg-background-secondary py-12 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {SOCIAL_PROOF.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-text-primary">
                <CounterAnimation end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-text-secondary mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
