import { Suspense } from "react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { TextReveal } from "@/components/animations/TextReveal"
import { RevealOnScroll } from "@/components/animations/RevealOnScroll"
import { WaitlistForm } from "@/components/sections/WaitlistForm"
import { WaitlistCounter } from "@/components/sections/WaitlistCounter"
import { PhoneFrame } from "@/components/phone/PhoneFrame"
import { WaitlistScreen } from "@/components/phone/screens/WaitlistScreen"
import { createMetadata } from "@/lib/metadata"
import { Bell, Sparkles, Gift, Users } from "lucide-react"

export const metadata = createMetadata({
  title: "Pré-Registro — Garanta Seu Lugar",
  description: "Cadastre-se gratuitamente na lista de espera do Yorubs e seja notificado no lançamento. Acesso antecipado para os primeiros da fila.",
  path: "/pre-registro",
})

const BENEFITS = [
  {
    icon: Bell,
    title: "Acesso Antecipado",
    description: "Seja notificado antes de todo mundo quando o app estiver disponível.",
  },
  {
    icon: Sparkles,
    title: "Conteúdo Exclusivo",
    description: "Receba dicas de Yorùbá e conteúdo cultural antes do lançamento.",
  },
  {
    icon: Gift,
    title: "Bônus de Lançamento",
    description: "Os primeiros cadastrados receberão gems extras e benefícios especiais.",
  },
  {
    icon: Users,
    title: "Comunidade Pioneira",
    description: "Faça parte do grupo fundador de aprendizes de Yorùbá.",
  },
]

const FAQ_ITEMS = [
  {
    q: "Quando o app será lançado?",
    a: "Estamos trabalhando para lançar o Yorubs no segundo semestre de 2026. Cadastrados na lista serão os primeiros a saber.",
  },
  {
    q: "O pré-registro é gratuito?",
    a: "Sim! Não cobramos nada para entrar na lista de espera. Você será notificado por email quando o app estiver disponível.",
  },
  {
    q: "Meus dados estão seguros?",
    a: "Seus dados são armazenados com criptografia e tratados conforme a LGPD. Usamos apenas para comunicações sobre o lançamento do Yorubs.",
  },
  {
    q: "Posso indicar amigos?",
    a: "Sim! Após o cadastro você recebe um código de indicação exclusivo. Quanto mais amigos indicar, mais benefícios no lançamento.",
  },
]

export default function PreRegistroPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(212,168,83,0.06) 0%, transparent 60%)" }}
            aria-hidden="true"
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: Text + Form */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm mb-6">
                  <Bell className="w-3.5 h-3.5" />
                  Pré-registro aberto
                </div>

                <TextReveal
                  as="h1"
                  className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight tracking-tight mb-4"
                  type="words"
                  stagger={0.03}
                  trigger="load"
                  delay={0.2}
                >
                  Garanta Seu Lugar na Jornada Yorùbá
                </TextReveal>

                <TextReveal
                  as="p"
                  className="text-lg text-text-secondary leading-relaxed mb-8 max-w-xl"
                  type="lines,words"
                  stagger={0.02}
                  trigger="load"
                  delay={0.4}
                >
                  O Yorubs está quase pronto. Cadastre-se na lista de espera e seja o primeiro a aprender Yorùbá de forma gamificada com tutor IA.
                </TextReveal>

                <Suspense fallback={null}>
                  <WaitlistForm />
                </Suspense>
              </div>

              {/* Right: Phone mockup */}
              <div className="hidden lg:flex justify-center">
                <div className="relative">
                  <div
                    className="absolute -inset-16 rounded-[60px] blur-[80px] opacity-25 pointer-events-none"
                    style={{ background: "radial-gradient(circle, rgba(212,168,83,0.3), transparent 70%)" }}
                    aria-hidden="true"
                  />
                  <PhoneFrame>
                    <WaitlistScreen />
                  </PhoneFrame>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <h2 className="text-2xl md:text-3xl font-serif text-center mb-12">
                Por que se cadastrar?
              </h2>
            </RevealOnScroll>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {BENEFITS.map((b, i) => (
                <RevealOnScroll key={b.title} delay={i * 0.1}>
                  <div className="bg-background-tertiary border border-border rounded-xl p-6 hover:border-gold/20 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                      <b.icon className="w-5 h-5 text-gold" />
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">{b.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{b.description}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Counter */}
        <section className="py-10">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <WaitlistCounter />
            </RevealOnScroll>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <h2 className="text-2xl md:text-3xl font-serif text-center mb-10">
                Perguntas Frequentes
              </h2>
            </RevealOnScroll>

            <div className="space-y-4">
              {FAQ_ITEMS.map((item, i) => (
                <RevealOnScroll key={i} delay={i * 0.08}>
                  <details className="group bg-background-tertiary border border-border rounded-xl overflow-hidden">
                    <summary className="flex items-center justify-between px-6 py-4 cursor-pointer text-text-primary font-medium hover:text-gold transition-colors list-none">
                      {item.q}
                      <span className="text-text-muted ml-4 flex-shrink-0 transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <div className="px-6 pb-4 text-sm text-text-secondary leading-relaxed">
                      {item.a}
                    </div>
                  </details>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
