import { createMetadata } from "@/lib/metadata"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { PricingSection } from "@/components/sections/PricingSection"
import { FeatureComparisonTable } from "@/components/sections/FeatureComparisonTable"
import { FAQSection } from "@/components/sections/FAQSection"
import { TextReveal } from "@/components/animations/TextReveal"
import { RevealOnScroll } from "@/components/animations/RevealOnScroll"
import { productJsonLd } from "@/lib/structured-data"
import { Shield, CreditCard, Mail } from "lucide-react"

export const metadata = createMetadata({
  title: "Preços",
  description: "Planos e preços do Yorubs. 4 planos: Gratuito, Língua (R$24,90/mês), Sagrado (R$49,90/mês) e Templo (R$99,90/mês).",
  path: "/pricing",
})

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-16 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <TextReveal as="h1" className="text-5xl md:text-6xl font-serif leading-tight tracking-tight">
              Preços Simples e Transparentes
            </TextReveal>
            <TextReveal as="p" className="text-xl text-text-secondary mt-6 max-w-2xl mx-auto" stagger={0.03}>
              Comece grátis. Evolua quando estiver pronto. Cancele quando quiser.
            </TextReveal>
          </div>
        </section>

        <PricingSection centered />
        <FeatureComparisonTable />

        {/* Guarantee + Institutional */}
        <section className="py-16 bg-background-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <RevealOnScroll>
                <div className="text-center">
                  <Shield className="w-8 h-8 text-gold mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">7 Dias Grátis</h3>
                  <p className="text-sm text-text-secondary">Teste o plano Pro sem compromisso. Cancele a qualquer momento antes do fim do período de teste.</p>
                </div>
              </RevealOnScroll>
              <RevealOnScroll delay={0.1}>
                <div className="text-center">
                  <CreditCard className="w-8 h-8 text-gold mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Pagamento Seguro</h3>
                  <p className="text-sm text-text-secondary">Pagamentos processados pela App Store e Google Play. Seus dados financeiros nunca passam por nós.</p>
                </div>
              </RevealOnScroll>
              <RevealOnScroll delay={0.2}>
                <div className="text-center">
                  <Mail className="w-8 h-8 text-gold mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Planos Institucionais</h3>
                  <p className="text-sm text-text-secondary">Escola ou instituição? Entre em contato pelo suporte@yorubs.com para planos especiais.</p>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        <FAQSection centered />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd()) }}
      />
    </>
  )
}
