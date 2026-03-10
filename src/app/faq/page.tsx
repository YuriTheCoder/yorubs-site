"use client"

import { useState } from "react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { TextReveal } from "@/components/animations/TextReveal"
import { RevealOnScroll } from "@/components/animations/RevealOnScroll"
import { FAQ_CATEGORIES } from "@/lib/constants"
import { ChevronDown, MessageCircle } from "lucide-react"
import Link from "next/link"
import Script from "next/script"

const categoryKeys = Object.keys(FAQ_CATEGORIES) as Array<keyof typeof FAQ_CATEGORIES>

// Build JSON-LD FAQPage schema from all categories
const allQuestions = categoryKeys.flatMap((cat) =>
  FAQ_CATEGORIES[cat].map((item) => ({
    "@type": "Question" as const,
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer" as const,
      text: item.answer,
    },
  }))
)

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allQuestions,
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const currentCategory = categoryKeys[activeCategory]
  const currentItems = FAQ_CATEGORIES[currentCategory]

  function handleCategoryChange(index: number) {
    setActiveCategory(index)
    setOpenIndex(null)
  }

  return (
    <>
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 md:py-28 lg:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <TextReveal as="h1" className="text-5xl md:text-6xl lg:text-7xl font-serif leading-tight tracking-tight">
              Perguntas Frequentes
            </TextReveal>
            <TextReveal as="p" className="text-xl text-text-secondary mt-6 max-w-2xl mx-auto" stagger={0.03}>
              Encontre respostas sobre o Yorubs, planos, conteúdo e suporte técnico.
            </TextReveal>
          </div>
        </section>

        {/* Category Tabs + Accordion */}
        <section className="pb-20 md:pb-28 lg:pb-32">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category tabs */}
            <RevealOnScroll>
              <div className="flex flex-wrap gap-2 mb-10 justify-center">
                {categoryKeys.map((cat, i) => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(i)}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeCategory === i
                        ? "bg-gold text-background"
                        : "bg-background-card border border-border text-text-secondary hover:text-text-primary hover:border-gold/30"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </RevealOnScroll>

            {/* Accordion */}
            <div className="space-y-4">
              {currentItems.map((item, i) => (
                <RevealOnScroll key={`${currentCategory}-${i}`} delay={i * 0.05}>
                  <div className="bg-background-card border border-border rounded-xl overflow-hidden">
                    <button
                      className="w-full flex items-center justify-between px-6 py-5 text-left"
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
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
                      className={`overflow-hidden transition-all duration-500 ${
                        openIndex === i ? "max-h-96" : "max-h-0"
                      }`}
                    >
                      <p className="px-6 pb-5 text-sm text-text-secondary leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

            {/* CTA */}
            <RevealOnScroll className="mt-16">
              <div className="bg-background-card border border-border rounded-2xl p-8 text-center">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-gold" />
                </div>
                <h2 className="text-xl font-serif mb-2">Não encontrou sua resposta?</h2>
                <p className="text-sm text-text-secondary mb-6">
                  Nossa equipe está pronta para ajudar. Respondemos em até 48 horas.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-terracotta text-background font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
                >
                  Entre em contato
                </Link>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
