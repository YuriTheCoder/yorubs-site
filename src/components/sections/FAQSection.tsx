"use client"

import { useState, useRef, useCallback } from "react"
import { gsap } from "@/lib/gsap-plugins"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { RevealOnScroll } from "@/components/animations/RevealOnScroll"
import { FAQ_ITEMS } from "@/lib/constants"
import { ChevronDown } from "lucide-react"

export function FAQSection({ centered = false }: { centered?: boolean } = {}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const contentRefs = useRef<(HTMLDivElement | null)[]>([])

  const toggle = useCallback((i: number) => {
    // Close current
    if (openIndex !== null && openIndex !== i && contentRefs.current[openIndex]) {
      gsap.to(contentRefs.current[openIndex]!, { height: 0, duration: 0.3, ease: "power2.inOut" })
    }
    // Toggle clicked
    const el = contentRefs.current[i]
    if (!el) return
    if (openIndex === i) {
      gsap.to(el, { height: 0, duration: 0.3, ease: "power2.inOut" })
      setOpenIndex(null)
    } else {
      gsap.to(el, { height: "auto", duration: 0.4, ease: "power2.out" })
      setOpenIndex(i)
    }
  }, [openIndex])

  return (
    <section id="faq" className="py-20 md:py-28 lg:py-32 bg-background-secondary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="FAQ"
          title="Perguntas Frequentes"
          badgeColor="gold"
        />

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, i) => (
            <RevealOnScroll key={i} delay={i * 0.05}>
              <div className="bg-background-card border border-border rounded-xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  onClick={() => toggle(i)}
                  aria-expanded={openIndex === i}
                >
                  <span className="font-medium text-text-primary pr-4">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  ref={(el) => { contentRefs.current[i] = el }}
                  className="overflow-hidden"
                  style={{ height: 0 }}
                >
                  <p className="px-6 pb-5 text-sm text-text-secondary leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
