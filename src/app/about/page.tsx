import { createMetadata } from "@/lib/metadata"
import { organizationJsonLd } from "@/lib/structured-data"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { TextReveal } from "@/components/animations/TextReveal"
import { RevealOnScroll } from "@/components/animations/RevealOnScroll"
import { CounterAnimation } from "@/components/animations/CounterAnimation"
import {
  Target,
  Eye,
  Globe,
  Brain,
  AudioLines,
  WifiOff,
  Gamepad2,
  Search,
  Code,
  Rocket,
  Users,
  ShieldCheck,
  Accessibility,
  Sparkles,
  BookOpen,
  User,
  Languages,
  HeartHandshake,
} from "lucide-react"

export const metadata = createMetadata({
  title: "Sobre",
  description:
    "Conheca a missão do Yorubs: democratizar o acesso ao ensino da língua Yorùbá para a diáspora africana através de tecnologia, gamificação e respeito cultural.",
  path: "/about",
})

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
      />
      <Navbar />
      <main className="pt-20">
        {/* ==============================
            1. HERO — Nossa Missão
        ============================== */}
        <section className="py-20 md:py-28 lg:py-36 relative overflow-hidden">
          {/* Subtle radial glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px]" />
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <TextReveal
              as="h1"
              className="text-5xl md:text-6xl lg:text-7xl font-serif leading-tight tracking-tight"
            >
              Nossa Missão
            </TextReveal>
            <TextReveal
              as="p"
              className="text-xl md:text-2xl text-text-secondary mt-6 max-w-3xl mx-auto leading-relaxed"
              stagger={0.03}
            >
              Democratizar o acesso ao ensino da língua Yorùbá, reconectando a diáspora africana com suas raízes através de tecnologia de ponta, gamificação e profundo respeito cultural.
            </TextReveal>
          </div>
        </section>

        {/* ==============================
            2. MISSAO / VISAO — Two Cards
        ============================== */}
        <section className="py-16 md:py-24 bg-background-secondary">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Missão */}
              <RevealOnScroll>
                <div className="bg-background-card border border-border rounded-2xl p-8 md:p-10 h-full relative overflow-hidden group hover:border-gold/30 hover:shadow-card-hover transition-all duration-500">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-gold-light" />
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                    <Target className="w-7 h-7 text-gold" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-serif mb-4">Missão</h2>
                  <p className="text-text-secondary leading-relaxed">
                    Tornar o aprendizado da língua Yorùbá acessível a qualquer pessoa no mundo, independentemente de sua localização, condição financeira ou nível de escolaridade. Acreditamos que a língua é a porta de entrada para compreender uma das culturas mais ricas e influentes da história humana.
                  </p>
                </div>
              </RevealOnScroll>

              {/* Visão */}
              <RevealOnScroll delay={0.15}>
                <div className="bg-background-card border border-border rounded-2xl p-8 md:p-10 h-full relative overflow-hidden group hover:border-terracotta/30 hover:shadow-card-hover transition-all duration-500">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-terracotta to-terracotta-light" />
                  <div className="w-14 h-14 rounded-xl bg-terracotta/10 flex items-center justify-center mb-6">
                    <Eye className="w-7 h-7 text-terracotta" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-serif mb-4">Visão</h2>
                  <p className="text-text-secondary leading-relaxed">
                    Ser a principal plataforma global de ensino de Yorùbá, construindo a maior comunidade de aprendizes da língua e contribuindo para que o Yorùbá deixe de figurar entre os idiomas ameaçados pela UNESCO. Queremos que milhoes de pessoas falem, entendam e vivam o Yorùbá.
                  </p>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* ==============================
            3. POR QUE YORUBA?
        ============================== */}
        <section className="py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="text-center mb-12 md:mb-16">
                <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium border mb-6 bg-forest/10 text-forest-light border-forest/20">
                  Contexto Cultural
                </span>
                <h2 className="text-4xl md:text-5xl font-serif leading-tight tracking-tight">
                  Por que Yorùbá?
                </h2>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Left: The Language */}
              <RevealOnScroll>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex-shrink-0 flex items-center justify-center mt-1">
                      <Globe className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">45+ milhoes de falantes</h3>
                      <p className="text-text-secondary leading-relaxed">
                        O Yorùbá é uma das línguas mais faladas da África, com falantes nativos na Nigéria, Benin, Togo e uma vasta diáspora espalhada pelo mundo — especialmente no Brasil, Cuba, Trinidad e Tobago e Haiti.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-terracotta/10 flex-shrink-0 flex items-center justify-center mt-1">
                      <BookOpen className="w-6 h-6 text-terracotta" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Patrimônio da UNESCO</h3>
                      <p className="text-text-secondary leading-relaxed">
                        Apesar do número expressivo de falantes, a UNESCO classifica o Yorùbá como língua vulnerável. A transmissão entre gerações está diminuindo, tornando iniciativas de preservação digital urgentes e necessárias.
                      </p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>

              {/* Right: Brazilian Roots */}
              <RevealOnScroll delay={0.15}>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-forest/10 flex-shrink-0 flex items-center justify-center mt-1">
                      <HeartHandshake className="w-6 h-6 text-forest-light" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Raizes na cultura brasileira</h3>
                      <p className="text-text-secondary leading-relaxed">
                        O Yorùbá é a base linguística do Candomblé e da Umbanda, tradições religiosas praticadas por milhões de brasileiros. Palavras como &ldquo;axe&rdquo;, &ldquo;abada&rdquo;, &ldquo;dengo&rdquo;, &ldquo;vatapa&rdquo; e &ldquo;acaraje&rdquo; vem diretamente do Yorùbá.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex-shrink-0 flex items-center justify-center mt-1">
                      <Languages className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Diaspora global</h3>
                      <p className="text-text-secondary leading-relaxed">
                        De Salvador a Havana, de Lagos a Nova York — a cultura Yorùbá conecta povos em todos os continentes. Aprender a língua é reconectar-se com uma herança ancestral viva e pulsante que moldou música, gastronomia, espiritualidade e arte.
                      </p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* ==============================
            4. TECNOLOGIA
        ============================== */}
        <section className="py-16 md:py-24 bg-background-secondary">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="text-center mb-12 md:mb-16">
                <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium border mb-6 bg-gold/10 text-gold border-gold/20">
                  Tecnologia
                </span>
                <h2 className="text-4xl md:text-5xl font-serif leading-tight tracking-tight">
                  Construído com Tecnologia de Ponta
                </h2>
                <p className="text-lg text-text-secondary mt-4 max-w-2xl mx-auto">
                  Cada componente do Yorubs foi projetado para oferecer a melhor experiencia de aprendizado possível.
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: Brain,
                  title: "IA Proprietária",
                  description:
                    "Tutor virtual Àróbá, o Ancião, alimentado pela IA proprietária do Yorubs. Conversas contextuais, correção de pronúncia e geração de exercícios personalizados em tempo real.",
                  color: "gold" as const,
                },
                {
                  icon: AudioLines,
                  title: "TTS Nativo em Yorùbá",
                  description:
                    "Sintese de voz treinada especificamente para Yorùbá com tons corretos. Não usamos TTS genérico — cada áudio captura as nuances tonais da língua.",
                  color: "terracotta" as const,
                },
                {
                  icon: WifiOff,
                  title: "Offline-First",
                  description:
                    "Arquitetura offline-first com WatermelonDB e sincronização inteligente. Aprenda no metro, no aviao ou em qualquer lugar sem conexão com a internet.",
                  color: "forest" as const,
                },
                {
                  icon: Gamepad2,
                  title: "Gamificação Completa",
                  description:
                    "Sistema de XP, níveis, streaks, ligas competitivas, conquistas, gems e recompensas. 13 tipos de exercícios interativos que tornam o aprendizado viciante.",
                  color: "gold" as const,
                },
              ].map((tech, i) => {
                const colorMap = {
                  gold: "bg-gold/10 text-gold border-gold/20",
                  terracotta: "bg-terracotta/10 text-terracotta border-terracotta/20",
                  forest: "bg-forest/10 text-forest-light border-forest/20",
                }
                return (
                  <RevealOnScroll key={i} delay={i * 0.1}>
                    <div className="bg-background-card border border-border rounded-2xl p-8 h-full hover:border-gold/30 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-500">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${colorMap[tech.color]}`}
                      >
                        <tech.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{tech.title}</h3>
                      <p className="text-text-secondary leading-relaxed">{tech.description}</p>
                    </div>
                  </RevealOnScroll>
                )
              })}
            </div>
          </div>
        </section>

        {/* ==============================
            5. TIMELINE
        ============================== */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="text-center mb-12 md:mb-16">
                <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium border mb-6 bg-terracotta/10 text-terracotta border-terracotta/20">
                  Jornada
                </span>
                <h2 className="text-4xl md:text-5xl font-serif leading-tight tracking-tight">
                  Nossa Timeline
                </h2>
              </div>
            </RevealOnScroll>

            {/* Vertical timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

              {[
                {
                  icon: Search,
                  year: "2025",
                  title: "Pesquisa",
                  description:
                    "Pesquisa linguística aprofundada, consulta com falantes nativos e praticantes da cultura Yorùbá, definição da metodologia pedagógica e do currículo tonal.",
                  side: "left" as const,
                },
                {
                  icon: Code,
                  year: "2025-2026",
                  title: "Desenvolvimento",
                  description:
                    "Construção do app com React Native, integração de IA generativa, sistema de TTS nativo em Yorùbá, gamificação completa e Biblioteca Sagrada com 19 Òrìṣà.",
                  side: "right" as const,
                },
                {
                  icon: Users,
                  year: "2026",
                  title: "Beta Fechado",
                  description:
                    "Teste com 50-100 usuarios no Brasil e Nigeria, coleta de feedback, refinamento de conteúdo e UX, validação de métricas de retenção e engajamento.",
                  side: "left" as const,
                },
                {
                  icon: Rocket,
                  year: "2026",
                  title: "Lançamento",
                  description:
                    "Lançamento em breve na App Store e Google Play. Soft launch no Brasil e Nigéria, seguido de expansão para toda a diáspora africana.",
                  side: "right" as const,
                },
              ].map((step, i) => (
                <RevealOnScroll key={i} delay={i * 0.15}>
                  <div
                    className={`relative flex items-start mb-12 last:mb-0 ${
                      step.side === "right"
                        ? "md:flex-row-reverse"
                        : ""
                    }`}
                  >
                    {/* Gold dot on the line */}
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold border-4 border-background z-10 mt-2" />

                    {/* Content card */}
                    <div
                      className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${
                        step.side === "left"
                          ? "md:mr-auto md:pr-8"
                          : "md:ml-auto md:pl-8"
                      }`}
                    >
                      <div className="bg-background-card border border-border rounded-2xl p-6 md:p-8 hover:border-gold/20 transition-colors duration-300">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                            <step.icon className="w-5 h-5 text-gold" />
                          </div>
                          <span className="text-sm font-mono text-gold font-semibold">
                            {step.year}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                        <p className="text-text-secondary leading-relaxed text-sm md:text-base">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ==============================
            6. VALORES
        ============================== */}
        <section className="py-16 md:py-24 bg-background-secondary">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="text-center mb-12 md:mb-16">
                <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium border mb-6 bg-gold/10 text-gold border-gold/20">
                  Princípios
                </span>
                <h2 className="text-4xl md:text-5xl font-serif leading-tight tracking-tight">
                  Nossos Valores
                </h2>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: ShieldCheck,
                  title: "Autenticidade",
                  description:
                    "Todo conteúdo é desenvolvido em consulta com linguistas Yorùbá e praticantes da cultura. Não simplificamos — ensinamos a língua real, com tons, ortografia correta (Èṣù, Ọ̀ṣun, Ṣàngó) e contexto cultural.",
                  accent: "gold",
                },
                {
                  icon: Accessibility,
                  title: "Acessibilidade",
                  description:
                    "Tier gratuito generoso com acesso a lições, provérbios e vocabulário. Arquitetura offline-first para funcionar em qualquer lugar, mesmo sem internet. Aprender Yorùbá não deveria ser um privilégio.",
                  accent: "terracotta",
                },
                {
                  icon: Sparkles,
                  title: "Gamificação Respeitosa",
                  description:
                    "Usamos gamificação para motivar, nunca para trivializar. XP, streaks e ligas incentivam a constância, enquanto o conteúdo mantém a profundidade e o respeito que a língua e a cultura Yorùbá merecem.",
                  accent: "forest",
                },
                {
                  icon: BookOpen,
                  title: "Preservação Cultural",
                  description:
                    "Cada provérbio, oríkì, cântico e saudação preservados no app são uma contribuição para manter viva uma herança milenar. Trabalhamos para que o Yorùbá prospere no mundo digital para as próximas gerações.",
                  accent: "gold",
                },
              ].map((value, i) => {
                const accentMap = {
                  gold: {
                    iconBg: "bg-gold/10",
                    iconColor: "text-gold",
                    border: "hover:border-gold/30",
                  },
                  terracotta: {
                    iconBg: "bg-terracotta/10",
                    iconColor: "text-terracotta",
                    border: "hover:border-terracotta/30",
                  },
                  forest: {
                    iconBg: "bg-forest/10",
                    iconColor: "text-forest-light",
                    border: "hover:border-forest/30",
                  },
                }
                const accent = accentMap[value.accent as keyof typeof accentMap]
                return (
                  <RevealOnScroll key={i} delay={i * 0.1}>
                    <div
                      className={`bg-background-card border border-border rounded-2xl p-8 h-full ${accent.border} hover:shadow-card-hover hover:-translate-y-1 transition-all duration-500`}
                    >
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${accent.iconBg}`}
                      >
                        <value.icon className={`w-6 h-6 ${accent.iconColor}`} />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                      <p className="text-text-secondary leading-relaxed">{value.description}</p>
                    </div>
                  </RevealOnScroll>
                )
              })}
            </div>
          </div>
        </section>

        {/* ==============================
            7. EQUIPE
        ============================== */}
        <section className="py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <RevealOnScroll>
              <div className="mb-12 md:mb-16">
                <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium border mb-6 bg-terracotta/10 text-terracotta border-terracotta/20">
                  Quem Somos
                </span>
                <h2 className="text-4xl md:text-5xl font-serif leading-tight tracking-tight">
                  Equipe
                </h2>
                <p className="text-lg text-text-secondary mt-4 max-w-2xl mx-auto">
                  Pessoas apaixonadas por linguística, tecnologia e cultura africana.
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* Fundador */}
              <RevealOnScroll>
                <div className="bg-background-card border border-border rounded-2xl p-8 hover:border-gold/30 hover:shadow-card-hover transition-all duration-500">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold to-terracotta mx-auto mb-5 flex items-center justify-center">
                    <User className="w-9 h-9 text-background" />
                  </div>
                  <div className="text-lg font-bold">Yuri</div>
                  <div className="text-sm text-gold font-medium mt-1">Fundador & Desenvolvedor</div>
                  <p className="text-sm text-text-secondary mt-3 leading-relaxed">
                    Engenheiro de software e apaixonado pela preservação de linguas africanas. Idealizou e construiu o Yorubs do zero.
                  </p>
                </div>
              </RevealOnScroll>

              {/* Linguistas */}
              <RevealOnScroll delay={0.1}>
                <div className="bg-background-card border border-border rounded-2xl p-8 hover:border-terracotta/30 hover:shadow-card-hover transition-all duration-500">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-terracotta to-terracotta-light mx-auto mb-5 flex items-center justify-center">
                    <Languages className="w-9 h-9 text-background" />
                  </div>
                  <div className="text-lg font-bold">Linguistas</div>
                  <div className="text-sm text-terracotta font-medium mt-1">Colaboradores</div>
                  <p className="text-sm text-text-secondary mt-3 leading-relaxed">
                    Falantes nativos de Yorùbá e especialistas em linguística africana que validam conteúdo, pronúncia e contexto tonal.
                  </p>
                </div>
              </RevealOnScroll>

              {/* Consultores Culturais */}
              <RevealOnScroll delay={0.2}>
                <div className="bg-background-card border border-border rounded-2xl p-8 hover:border-forest/30 hover:shadow-card-hover transition-all duration-500">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-forest to-forest-light mx-auto mb-5 flex items-center justify-center">
                    <HeartHandshake className="w-9 h-9 text-background" />
                  </div>
                  <div className="text-lg font-bold">Consultores Culturais</div>
                  <div className="text-sm text-forest-light font-medium mt-1">Colaboradores</div>
                  <p className="text-sm text-text-secondary mt-3 leading-relaxed">
                    Praticantes e estudiosos da cultura Yorùbá que garantem a autenticidade da Biblioteca Sagrada, oríkì e tradições.
                  </p>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* ==============================
            8. STATS
        ============================== */}
        <section className="py-16 md:py-24 bg-background-secondary">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-serif leading-tight tracking-tight">
                  Yorubs em Números
                </h2>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
              {[
                { end: 500, suffix: "+", label: "Lições" },
                { end: 19, suffix: "", label: "Òrìṣà" },
                { end: 358, suffix: "+", label: "Provérbios" },
                { end: 13, suffix: "", label: "Exercícios" },
              ].map((stat, i) => (
                <RevealOnScroll key={i} delay={i * 0.1}>
                  <div className="bg-background-card border border-border rounded-2xl p-6 md:p-8 hover:border-gold/20 transition-colors duration-300 flex flex-col items-center justify-center aspect-square max-h-40 md:max-h-48">
                    <div className="text-4xl md:text-5xl font-bold font-mono text-gold">
                      <CounterAnimation end={stat.end} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm text-text-secondary mt-3">{stat.label}</div>
                  </div>
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
