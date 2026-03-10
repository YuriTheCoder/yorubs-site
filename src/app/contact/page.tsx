import { createMetadata } from "@/lib/metadata"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { TextReveal } from "@/components/animations/TextReveal"
import { RevealOnScroll } from "@/components/animations/RevealOnScroll"
import { ContactForm } from "@/components/sections/ContactForm"
import { Mail, Clock, MessageCircleQuestion } from "lucide-react"
import Link from "next/link"

export const metadata = createMetadata({
  title: "Contato",
  description: "Entre em contato com a equipe do Yorubs. Dúvidas, sugestões, parcerias ou relato de bugs — respondemos em até 48h.",
  path: "/contact",
})

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 md:py-28 lg:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <TextReveal as="h1" className="text-5xl md:text-6xl lg:text-7xl font-serif leading-tight tracking-tight">
              Fale Conosco
            </TextReveal>
            <TextReveal as="p" className="text-xl text-text-secondary mt-6 max-w-2xl mx-auto" stagger={0.03}>
              Tem alguma dúvida, sugestão ou quer propor uma parceria? Adoramos ouvir nossos usuários.
            </TextReveal>
          </div>
        </section>

        {/* Form + Sidebar */}
        <section className="pb-20 md:pb-28 lg:pb-32">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Form */}
              <RevealOnScroll className="lg:col-span-2">
                <div className="bg-background-card border border-border rounded-2xl p-6 sm:p-8">
                  <h2 className="text-2xl font-serif mb-6">Envie sua mensagem</h2>
                  <ContactForm />
                </div>
              </RevealOnScroll>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Response time card */}
                <RevealOnScroll delay={0.1}>
                  <div className="bg-background-card border border-border rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                        <Clock className="w-5 h-5 text-gold" />
                      </div>
                      <h3 className="font-medium text-text-primary">Tempo de resposta</h3>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      Respondemos em até <span className="text-gold font-semibold">48 horas</span> úteis. Para assuntos urgentes, mencione no assunto da mensagem.
                    </p>
                  </div>
                </RevealOnScroll>

                {/* Email direct card */}
                <RevealOnScroll delay={0.2}>
                  <div className="bg-background-card border border-border rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-terracotta" />
                      </div>
                      <h3 className="font-medium text-text-primary">Email direto</h3>
                    </div>
                    <a
                      href="mailto:suporte@yorubs.com"
                      className="text-sm text-gold hover:text-gold-light transition-colors underline underline-offset-4"
                    >
                      suporte@yorubs.com
                    </a>
                  </div>
                </RevealOnScroll>

                {/* FAQ link card */}
                <RevealOnScroll delay={0.3}>
                  <div className="bg-background-card border border-border rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center">
                        <MessageCircleQuestion className="w-5 h-5 text-forest-light" />
                      </div>
                      <h3 className="font-medium text-text-primary">Perguntas frequentes</h3>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed mb-3">
                      Talvez sua dúvida já tenha sido respondida.
                    </p>
                    <Link
                      href="/faq"
                      className="inline-flex items-center text-sm text-gold hover:text-gold-light transition-colors underline underline-offset-4"
                    >
                      Confira também nosso FAQ
                    </Link>
                  </div>
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
