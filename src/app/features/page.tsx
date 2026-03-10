import { createMetadata } from "@/lib/metadata"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { TextReveal } from "@/components/animations/TextReveal"
import { RevealOnScroll } from "@/components/animations/RevealOnScroll"
import { CardTilt } from "@/components/animations/CardTilt"
import { CounterAnimation } from "@/components/animations/CounterAnimation"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { StoreBadges } from "@/components/shared/StoreBadges"
import { PhoneFrame } from "@/components/phone/PhoneFrame"
import { HomeScreen } from "@/components/phone/screens/HomeScreen"
import { OrisaScreen } from "@/components/phone/screens/OrisaScreen"
import { GamificationScreen } from "@/components/phone/screens/GamificationScreen"
import {
  Music,
  Bot,
  Scroll,
  BookOpen,
  AudioLines,
  Trophy,
  Gem,
  WifiOff,
  Search,
  Calendar,
  UtensilsCrossed,
  Award,
  Mic,
} from "lucide-react"

export const metadata = createMetadata({
  title: "Recursos",
  description: "Descubra todos os recursos do Yorubs: 13 tipos de exercícios, tutor IA, 358 provérbios, Biblioteca Sagrada dos Òrìṣà e muito mais.",
  path: "/features",
})

/* ── Feature data ── */
const FEATURES = {
  learning: [
    {
      icon: Music,
      title: "Exercícios Interativos",
      color: "gold" as const,
      text: "13 tipos de exercícios gamificados — quiz, flashcard com áudio, construção de frases, prática de pronúncia, diálogo interativo e speed match. O sistema adapta a dificuldade ao seu nível.",
    },
    {
      icon: AudioLines,
      title: "Sistema Tonal",
      color: "terracotta" as const,
      text: "O Yorùbá é uma língua tonal. Cada palavra vem com indicadores visuais de tom alto, médio e baixo, além de áudio nativo. A Unidade 0 é dedicada inteiramente à introdução tonal.",
    },
    {
      icon: WifiOff,
      title: "Modo Offline",
      color: "forest" as const,
      text: "Todas as lições ficam salvas no seu dispositivo. Estude no metrô, no avião ou em qualquer lugar sem internet. Seu progresso sincroniza automaticamente ao reconectar.",
    },
  ],
  ai: [
    {
      icon: Bot,
      title: "Tutor IA Àróbá",
      color: "terracotta" as const,
      text: [
        "Àróbá — 'O Ancião' — é seu tutor pessoal alimentado por inteligência artificial. Ele conversa com você em Yorùbá, avalia sua pronúncia e adapta o ensino ao seu ritmo.",
        "Com sabedoria ancestral e tecnologia moderna, Àróbá compartilha provérbios contextuais, corrige erros de tom e incentiva seu progresso a cada interação.",
        "Disponível a qualquer hora, ele torna o aprendizado mais humano e personalizado do que qualquer método tradicional.",
      ],
    },
    {
      icon: Scroll,
      title: "Provérbios Diários",
      color: "forest" as const,
      text: [
        "Todo dia você recebe um novo provérbio Yorùbá selecionado do nosso catálogo de 358 provérbios autênticos, organizados em 8 categorias: sabedoria, família, vida, natureza, trabalho, comunidade, perseverança e humildade.",
        "Cada provérbio vem com pronúncia em áudio, tradução detalhada, explicação cultural e exercícios interativos para fixar o aprendizado.",
        "Os provérbios são uma das formas mais ricas de transmissão de conhecimento na cultura Yorùbá — 'Owe lesin oro' (o provérbio é o cavalo da palavra).",
      ],
    },
  ],
  culture: {
    library: {
      icon: BookOpen,
      title: "Biblioteca Sagrada",
      color: "gold" as const,
      text: [
        "Uma coleção completa dedicada aos 19 Òrìṣà da tradição Yorùbá. Cada divindade conta com vocabulário sagrado, saudações, cânticos (oríkì), ervas medicinais, objetos rituais e oferendas.",
        "De Èṣù, o mensageiro, a Ọ̀rúnmìlà, o senhor da sabedoria — explore a mitologia, os símbolos e as relações entre os Òrìṣà em uma árvore genealógica interativa.",
        "Todo o conteúdo usa a ortografia Yorùbá autêntica (Èṣù, Ògún, Yemọja, Ọ̀ṣun, Ṣàngó) em respeito à tradição.",
      ],
    },
    cuisine: {
      icon: UtensilsCrossed,
      title: "Culinária",
      color: "terracotta" as const,
      text: "Descubra mais de 28 receitas tradicionais Yorùbá com instruções passo a passo, ingredientes e vocabulário culinário.",
    },
    calendar: {
      icon: Calendar,
      title: "Calendário",
      color: "gold" as const,
      text: "Acompanhe o calendário de festas e celebrações da cultura Yorùbá ao longo do ano com mais de 30 eventos catalogados.",
    },
  },
  gamification: [
    {
      icon: Trophy,
      title: "Gamificação",
      color: "forest" as const,
      text: "Ganhe XP a cada lição completada, mantenha sua sequência diária (streak), suba de nível e compita com outros estudantes em 8 ligas diferentes.",
    },
    {
      icon: Gem,
      title: "Gems",
      color: "gold" as const,
      text: "Moeda virtual do Yorubs. Ganhe gems completando lições, mantendo sua sequência e fazendo login diário. Use na loja para streak freeze, vidas extras e Double XP.",
    },
    {
      icon: Award,
      title: "Certificados",
      color: "terracotta" as const,
      text: "Receba certificados de conclusão ao completar módulos. Cada certificado é personalizado com seu nome, data e nível atingido.",
    },
  ],
  dictionary: {
    icon: Search,
    title: "Dicionário Interativo",
    color: "forest" as const,
    text: [
      "Um dicionário interativo Yorùbá-Português com busca por palavra, categoria e contexto cultural.",
      "Cada verbete inclui pronúncia com áudio, indicadores tonais, exemplos de uso em frases e notas culturais quando relevante.",
      "Integrado com as lições — toque em qualquer palavra durante os exercícios para ver sua definição completa.",
    ],
  },
}

const COLOR_MAP = {
  gold: { bg: "bg-gold/10", text: "text-gold", border: "border-gold/20", accent: "from-gold to-gold-light" },
  terracotta: { bg: "bg-terracotta/10", text: "text-terracotta", border: "border-terracotta/20", accent: "from-terracotta to-terracotta-light" },
  forest: { bg: "bg-forest/10", text: "text-forest-light", border: "border-forest/20", accent: "from-forest to-forest-light" },
} as const

/* ── Reusable feature card ── */
function FeatureCard({
  icon: Icon,
  title,
  color,
  text,
  delay = 0,
}: {
  icon: typeof Music
  title: string
  color: "gold" | "terracotta" | "forest"
  text: string | string[]
  delay?: number
}) {
  const colors = COLOR_MAP[color]
  const paragraphs = Array.isArray(text) ? text : [text]

  return (
    <RevealOnScroll delay={delay}>
      <CardTilt>
        <div className="relative bg-background-card border border-border rounded-2xl p-6 sm:p-8 h-full hover:border-gold/30 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-500 overflow-hidden">
          {/* Top accent bar */}
          <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${colors.accent}`} />

          <div className="flex items-start gap-4 mb-4">
            <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center flex-shrink-0`}>
              <Icon className={`w-7 h-7 ${colors.text}`} />
            </div>
            <div className="flex-1 pt-1">
              <h3 className="text-lg font-serif text-text-primary">{title}</h3>
            </div>
          </div>

          <div className="space-y-3">
            {paragraphs.map((para, j) => (
              <p key={j} className="text-sm text-text-secondary leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>
      </CardTilt>
    </RevealOnScroll>
  )
}

/* ── Compact feature card (horizontal, single paragraph) ── */
function FeatureCardCompact({
  icon: Icon,
  title,
  color,
  text,
  delay = 0,
}: {
  icon: typeof Music
  title: string
  color: "gold" | "terracotta" | "forest"
  text: string
  delay?: number
}) {
  const colors = COLOR_MAP[color]

  return (
    <RevealOnScroll delay={delay}>
      <div className="flex items-start gap-4 p-5 rounded-xl bg-background-card border border-border hover:border-gold/20 transition-colors duration-300">
        <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center flex-shrink-0`}>
          <Icon className={`w-6 h-6 ${colors.text}`} />
        </div>
        <div className="flex-1">
          <h3 className="text-base font-serif text-text-primary mb-1.5">{title}</h3>
          <p className="text-sm text-text-secondary leading-relaxed">{text}</p>
        </div>
      </div>
    </RevealOnScroll>
  )
}

/* ── Static chat mockup (no hooks, Server Component safe) ── */
function StaticChatMockup() {
  return (
    <div className="absolute inset-0 flex flex-col bg-background-secondary">
      {/* Status bar */}
      <div className="flex items-center justify-between px-5 pt-3 text-[10px] text-text-secondary/60">
        <span>9:41</span>
        <div className="w-3 h-2 border border-text-secondary/40 rounded-[2px]">
          <div className="w-2 h-full bg-text-secondary/40 rounded-[1px]" />
        </div>
      </div>

      {/* Dynamic island */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[90px] h-[26px] bg-black rounded-full z-10" />

      {/* Chat header */}
      <div className="flex items-center gap-3 px-4 pt-6 pb-3 border-b border-white/5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/aroba-mascot.png"
          alt="Àróbá, o tutor de IA do Yorubs"
          className="w-9 h-9 rounded-full object-cover border border-terracotta/30"
        />
        <div>
          <span className="text-sm font-semibold text-text-primary block leading-tight">Àróbá</span>
          <span className="text-[10px] text-forest-light">Online</span>
        </div>
      </div>

      {/* Chat messages */}
      <div className="flex-1 px-3 py-3 space-y-2.5 overflow-hidden">
        {/* Bot greeting */}
        <div className="flex justify-start">
          <div className="max-w-[85%] px-3 py-2 rounded-2xl rounded-bl-md bg-background-card text-text-primary text-[11px] leading-relaxed border border-border">
            Ẹ kú àárọ̀! Vamos praticar sua pronúncia hoje?
          </div>
        </div>

        {/* User message */}
        <div className="flex justify-end">
          <div className="max-w-[85%] px-3 py-2 rounded-2xl rounded-br-md bg-gold/10 text-gold text-[11px] leading-relaxed border border-gold/20">
            Como eu digo &quot;ẹ ṣé&quot;?
          </div>
        </div>

        {/* Bot response */}
        <div className="flex justify-start">
          <div className="max-w-[85%] px-3 py-2 rounded-2xl rounded-bl-md bg-background-card text-text-primary text-[11px] leading-relaxed border border-border">
            &quot;Ẹ ṣé&quot; significa &quot;obrigado(a)&quot;. Pronuncie com tom médio-baixo!
          </div>
        </div>

        {/* Pronunciation eval card */}
        <div className="mx-1 p-2.5 rounded-xl bg-background-card border border-border">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] text-text-secondary">Pronúncia</span>
            <div className="flex items-center gap-1">
              <span className="text-[11px] font-bold text-forest-light">92%</span>
              <span className="text-[9px] text-forest-light/80">Ótimo!</span>
            </div>
          </div>
          {/* Static waveform bars */}
          <div className="flex items-end justify-center gap-[3px] h-6">
            {[14, 10, 18, 8, 16, 12, 19].map((h, i) => (
              <div
                key={i}
                className="w-[3px] rounded-full bg-terracotta/60"
                style={{ height: `${h}px` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Input bar */}
      <div className="px-3 pb-3 pt-1">
        <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-background-card border border-border">
          <span className="text-[11px] text-text-muted flex-1">Digite sua mensagem...</span>
          <div className="w-7 h-7 rounded-full bg-terracotta/20 flex items-center justify-center">
            <Mic className="w-3.5 h-3.5 text-terracotta" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">

        {/* ══════════════════════════════════════════
            1. HERO
        ══════════════════════════════════════════ */}
        <section className="py-20 md:py-28 lg:py-36 relative overflow-hidden">
          {/* Radial glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px]" />
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <TextReveal as="h1" className="text-5xl md:text-6xl lg:text-7xl font-serif leading-tight tracking-tight">
              Recursos do Yorubs
            </TextReveal>
            <TextReveal as="p" className="text-xl md:text-2xl text-text-secondary mt-6 max-w-3xl mx-auto leading-relaxed" stagger={0.03}>
              Tudo que você precisa para aprender Yorùbá de forma completa, divertida e culturalmente autêntica.
            </TextReveal>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            2. APRENDA DE VERDADE — Learning Core
        ══════════════════════════════════════════ */}
        <section className="py-20 md:py-28 bg-background-secondary">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-[1fr_auto] lg:gap-16 lg:items-center">
              {/* Left: heading + cards */}
              <div>
                <SectionHeading
                  badge="Fundamentos"
                  title="Aprenda de Verdade"
                  subtitle="Exercícios interativos, sistema tonal e modo offline — tudo pensado para um aprendizado eficaz."
                  badgeColor="gold"
                  className="lg:text-left"
                />
                <div className="space-y-4">
                  {FEATURES.learning.map((f, i) => (
                    <FeatureCardCompact key={i} {...f} delay={i * 0.1} />
                  ))}
                </div>
              </div>

              {/* Right: phone mockup (hidden on mobile) */}
              <div className="hidden lg:flex items-center justify-center">
                <RevealOnScroll delay={0.2}>
                  <PhoneFrame size="sm">
                    <HomeScreen />
                  </PhoneFrame>
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            3. SEU TUTOR PESSOAL — AI & Proverbs
        ══════════════════════════════════════════ */}
        <section className="py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-[auto_1fr] lg:gap-16 lg:items-center">
              {/* Left: phone mockup (hidden on mobile) */}
              <div className="hidden lg:flex items-center justify-center">
                <RevealOnScroll delay={0.2}>
                  <PhoneFrame size="sm">
                    <StaticChatMockup />
                  </PhoneFrame>
                </RevealOnScroll>
              </div>

              {/* Right: heading + cards */}
              <div>
                <SectionHeading
                  badge="Inteligência Artificial"
                  title="Seu Tutor Pessoal"
                  subtitle="Àróbá, o Ancião, e seus provérbios diários acompanham você em cada passo."
                  badgeColor="terracotta"
                  className="lg:text-left"
                />
                <div className="space-y-6">
                  {FEATURES.ai.map((f, i) => (
                    <FeatureCard key={i} {...f} delay={i * 0.15} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            4. CULTURA VIVA — Cultural Content
        ══════════════════════════════════════════ */}
        <section className="py-20 md:py-28 bg-background-secondary">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="Cultura"
              title="Cultura Viva"
              subtitle="A Biblioteca Sagrada dos Òrìṣà, culinária tradicional e o calendário de festas Yorùbá."
              badgeColor="forest"
            />

            {/* Biblioteca Sagrada — hero card */}
            <RevealOnScroll>
              <div className="relative bg-background-card border border-border rounded-2xl p-6 sm:p-8 lg:p-10 mb-6 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-gold-light" />

                <div className="lg:grid lg:grid-cols-[1fr_auto] lg:gap-12 lg:items-center">
                  <div>
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-7 h-7 text-gold" />
                      </div>
                      <h3 className="text-xl font-serif text-text-primary">{FEATURES.culture.library.title}</h3>
                    </div>
                    <div className="space-y-3">
                      {FEATURES.culture.library.text.map((para, j) => (
                        <p key={j} className="text-sm text-text-secondary leading-relaxed">{para}</p>
                      ))}
                    </div>
                  </div>

                  {/* Phone mockup (hidden on mobile) */}
                  <div className="hidden lg:flex items-center justify-center mt-6 lg:mt-0">
                    <PhoneFrame size="sm">
                      <OrisaScreen />
                    </PhoneFrame>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Culinária + Calendário — grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FeatureCard
                icon={FEATURES.culture.cuisine.icon}
                title={FEATURES.culture.cuisine.title}
                color={FEATURES.culture.cuisine.color}
                text={FEATURES.culture.cuisine.text}
                delay={0.1}
              />
              <FeatureCard
                icon={FEATURES.culture.calendar.icon}
                title={FEATURES.culture.calendar.title}
                color={FEATURES.culture.calendar.color}
                text={FEATURES.culture.calendar.text}
                delay={0.2}
              />
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            5. JOGUE E EVOLUA — Gamification
        ══════════════════════════════════════════ */}
        <section className="py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-[auto_1fr] lg:gap-16 lg:items-start">
              {/* Left: phone mockup (hidden on mobile) */}
              <div className="hidden lg:flex items-start justify-center pt-20">
                <RevealOnScroll delay={0.2}>
                  <PhoneFrame size="sm">
                    <GamificationScreen />
                  </PhoneFrame>
                </RevealOnScroll>
              </div>

              {/* Right: heading + cards + stats */}
              <div>
                <SectionHeading
                  badge="Gamificação"
                  title="Jogue e Evolua"
                  subtitle="XP, ligas, conquistas e gems tornam cada sessão de estudo estratégica e recompensadora."
                  badgeColor="terracotta"
                  className="lg:text-left"
                />
                <div className="space-y-4 mb-10">
                  {FEATURES.gamification.map((f, i) => (
                    <FeatureCardCompact key={i} {...f} delay={i * 0.1} />
                  ))}
                </div>

                {/* Stats row */}
                <RevealOnScroll delay={0.3}>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { end: 50, suffix: "+", label: "Níveis" },
                      { end: 100, suffix: "+", label: "Conquistas" },
                      { end: 8, suffix: "", label: "Ligas" },
                    ].map((stat, i) => (
                      <div key={i} className="text-center p-4 rounded-xl bg-background-card border border-border">
                        <div className="text-2xl md:text-3xl font-mono font-bold text-gold">
                          <CounterAnimation end={stat.end} suffix={stat.suffix} />
                        </div>
                        <p className="text-xs text-text-secondary mt-1">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            6. DICIONÁRIO INTERATIVO — Standalone
        ══════════════════════════════════════════ */}
        <section className="py-20 md:py-28 bg-background-secondary">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <FeatureCard
              icon={FEATURES.dictionary.icon}
              title={FEATURES.dictionary.title}
              color={FEATURES.dictionary.color}
              text={FEATURES.dictionary.text}
            />
          </div>
        </section>

        {/* ══════════════════════════════════════════
            7. CTA
        ══════════════════════════════════════════ */}
        <section className="py-20 md:py-28">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="relative bg-background-card border border-border rounded-2xl p-8 sm:p-12 text-center overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold via-terracotta to-forest" />
                <h2 className="text-3xl md:text-4xl font-serif mb-4">Baixe o Yorubs gratuitamente</h2>
                <p className="text-text-secondary mb-8 max-w-lg mx-auto">
                  Todos esses recursos na palma da sua mão. Comece grátis e evolua no seu ritmo.
                </p>
                <StoreBadges className="justify-center" />
              </div>
            </RevealOnScroll>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
