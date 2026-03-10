import { Music, Bot, Scroll, BookOpen, Trophy, WifiOff, type LucideIcon } from "lucide-react"

// === LINKS ===
export const LINKS = {
  appStore: "/download",
  googlePlay: "/download",
  download: "/download",
} as const

// === HERO ===
export const HERO = {
  title: "Aprenda Yorùbá.",
  highlightWord: "Yorùbá",
  subtitle: "O app gamificado com tutor IA, provérbios diários e a cultura viva dos Òrìṣà. Disponível para iOS e Android.",
  cta: "Baixar Grátis",
  ctaSecondary: "Saiba Mais",
} as const

// === SOCIAL PROOF ===
export const SOCIAL_PROOF = [
  { value: 358, suffix: "+", label: "Provérbios" },
  { value: 500, suffix: "+", label: "Lições disponíveis" },
  { value: 19, suffix: "", label: "Òrìṣà na Biblioteca" },
  { value: 13, suffix: "", label: "Tipos de exercícios" },
] as const

// === FEATURES ===
export interface Feature {
  icon: LucideIcon
  title: string
  description: string
  color: "gold" | "terracotta" | "forest"
}

export const FEATURES: Feature[] = [
  {
    icon: Music,
    title: "Lições Tonais",
    description: "Domine os tons do Yorùbá com visualização em tempo real e exercícios interativos.",
    color: "gold",
  },
  {
    icon: Bot,
    title: "Tutor IA Àróbá",
    description: "Converse com o ancião virtual que ensina como ninguém e adapta ao seu ritmo.",
    color: "terracotta",
  },
  {
    icon: Scroll,
    title: "Provérbio do Dia",
    description: "Sabedoria ancestral com pronúncia, tradução e exercícios interativos todo dia.",
    color: "forest",
  },
  {
    icon: BookOpen,
    title: "Biblioteca Sagrada",
    description: "19 Òrìṣà com vocabulário, cânticos, oríkì, ervas e objetos sagrados.",
    color: "gold",
  },
  {
    icon: Trophy,
    title: "Gamificação",
    description: "XP, sequências, ligas e conquistas para te motivar em cada passo.",
    color: "terracotta",
  },
  {
    icon: WifiOff,
    title: "Offline First",
    description: "Estude sem internet. Seus dados sincronizam automaticamente depois.",
    color: "forest",
  },
]

// === SCREENSHOTS ===
export const SCREENSHOTS = [
  { title: "Lições Interativas", desc: "Exercícios com áudio, tons e gamificação", color: "#D4A853" },
  { title: "Àróbá, o Tutor IA", desc: "Converse em Yorùbá com nosso ancião virtual", color: "#C45B28" },
  { title: "Biblioteca Sagrada", desc: "Conheça os Òrìṣà e suas histórias", color: "#2D6A4F" },
  { title: "Provérbio do Dia", desc: "Sabedoria ancestral todos os dias", color: "#B8912F" },
  { title: "Ligas e Rankings", desc: "Compete com outros estudantes", color: "#E07040" },
] as const

// === AROBA ===
export const AROBA = {
  badge: "Inteligência Artificial",
  title: "Conheça Àróbá, o Ancião",
  description: "Àróbá é seu tutor pessoal de Yorùbá. Combinando sabedoria ancestral com inteligência artificial, ele adapta o ensino ao seu ritmo, corrige sua pronúncia e compartilha provérbios que enriquecem sua jornada.",
  chatMessages: [
    { role: "user" as const, text: "Como eu digo bom dia?" },
    { role: "assistant" as const, text: "Ẹ kú àárọ̀! Literalmente 'saudação da manhã'. O tom é importante — pronuncie com tom médio-alto." },
    { role: "user" as const, text: "E boa noite?" },
  ],
  capabilities: [
    { label: "Conversa Inteligente", color: "terracotta" as const },
    { label: "Avaliação de Pronúncia", color: "gold" as const },
    { label: "Adaptação ao Seu Nível", color: "forest" as const },
  ],
} as const

// === ORISA ===
export const ORISAS = [
  { name: "Èṣù", title: "Mensageiro dos Òrìṣà", description: "Senhor das encruzilhadas, dono dos caminhos e guardião das entradas.", colors: ["#C62828", "#1A1A1A"] },
  { name: "Ògún", title: "Senhor do Ferro", description: "Guerreiro destemido, patrono dos ferreiros e de todos que trabalham com metais.", colors: ["#1B5E20", "#0D3D14"] },
  { name: "Yemọja", title: "Mãe das Águas", description: "Rainha do mar, protetora dos filhos e símbolo da fertilidade e maternidade.", colors: ["#0277BD", "#01579B"] },
  { name: "Ọ̀ṣun", title: "Deusa do Rio", description: "Dona da beleza, do amor, da riqueza e das águas doces.", colors: ["#D4A853", "#B8912F"] },
  { name: "Ṣàngó", title: "Senhor do Trovão", description: "Rei da justiça, do fogo e do trovão. Dança com raios nas mãos.", colors: ["#D32F2F", "#B71C1C"] },
] as const

// === DAILY PROVERB ===
export const PROVERB = {
  title: "Sabedoria de Cada Dia",
  yoruba: "Owe lesin oro, oro lesin owe",
  translation: "O provérbio é o cavalo da palavra; a palavra é o cavalo do provérbio",
  subtitle: "Todo dia um novo provérbio com pronúncia, tradução e exercícios interativos.",
} as const

// === GAMIFICATION ===
export const GAMIFICATION = {
  title: "Aprender Nunca Foi Tão Divertido",
  subtitle: "Ganhe XP, mantenha sua sequência, suba nas ligas e desbloqueie conquistas. Cada dia de estudo te leva mais longe.",
  stats: [
    { label: "Níveis", value: "50+" },
    { label: "Conquistas", value: "100+" },
    { label: "Ligas", value: "8" },
  ],
} as const

// === TESTIMONIALS ===
export const TESTIMONIALS = [
  { name: "Ana Silva", initials: "AS", stars: 5, quote: "O Yorubs mudou minha relação com minhas raízes. As lições são divertidas e Àróbá é um professor incrível!" },
  { name: "Carlos Mendes", initials: "CM", stars: 5, quote: "Nunca imaginei que aprender Yorùbá seria tão viciante. O sistema de XP me motiva todo dia." },
  { name: "Fatima Santos", initials: "FS", stars: 5, quote: "A Biblioteca Sagrada é um tesouro. Aprendi mais sobre os Òrìṣà do que em anos de pesquisa." },
  { name: "Pedro Oliveira", initials: "PO", stars: 4, quote: "O provérbio diário é minha parte favorita. Compartilho com minha família toda manhã." },
  { name: "Lucia Ferreira", initials: "LF", stars: 5, quote: "Uso offline no metrô e sincroniza tudo quando chego em casa. Perfeito para minha rotina." },
  { name: "Rafael Costa", initials: "RC", stars: 5, quote: "As ligas tornaram o aprendizado competitivo de um jeito saudável. Estou no topo da minha liga!" },
] as const

// === PRICING ===
export const PRICING = {
  title: "Escolha Seu Plano",
  plans: [
    {
      name: "Gratuito",
      price: 0,
      period: "",
      features: [
        "3 lições por unidade",
        "5 vidas (regeneram a cada 6h)",
        "Provérbio do dia",
        "5 mensagens IA/dia",
        "1 dispositivo",
        "Com anúncios",
      ],
      cta: "Comece Grátis",
      highlighted: false,
    },
    {
      name: "Língua",
      price: 24.90,
      period: "/mês",
      yearlyPrice: 199.90,
      features: [
        "Lições ilimitadas",
        "Vidas infinitas",
        "Àróbá IA (50 msgs/dia)",
        "Cultura completa",
        "Dicionário interativo",
        "Download offline",
        "Sem anúncios",
        "2 dispositivos",
      ],
      cta: "Assinar Língua",
      highlighted: false,
      trial: "7 dias grátis",
    },
    {
      name: "Sagrado",
      price: 49.90,
      period: "/mês",
      yearlyPrice: 399.90,
      lifetimePrice: 899.90,
      features: [
        "Tudo do Lingua +",
        "Biblioteca Sagrada completa",
        "19 Òrìṣà com cânticos e oríkì",
        "Culinária tradicional",
        "Certificados de conclusão",
        "Àróbá IA ilimitado",
        "Streak freeze ilimitado",
        "3 dispositivos",
      ],
      cta: "Assinar Sagrado",
      highlighted: true,
      badge: "Mais Popular",
      trial: "7 dias grátis",
    },
    {
      name: "Templo",
      price: 99.90,
      period: "/mês",
      features: [
        "Tudo do Sagrado +",
        "Suporte prioritário",
        "Atividades personalizadas",
        "Acesso antecipado a novidades",
        "5 dispositivos",
      ],
      cta: "Assinar Templo",
      highlighted: false,
    },
  ],
} as const

// === FAQ ===
export const FAQ_ITEMS = [
  {
    question: "O Yorubs funciona offline?",
    answer: "Sim! Todas as lições e conteúdos ficam salvos no seu dispositivo. Você pode estudar sem internet e seus dados sincronizam automaticamente quando você se reconectar.",
  },
  {
    question: "Preciso ter conhecimento prévio?",
    answer: "Não! O Yorubs é feito para iniciantes completos. Começamos do zero com uma introdução aos tons da língua Yorùbá antes de ensinar qualquer palavra.",
  },
  {
    question: "Quais são os planos disponíveis?",
    answer: "Temos 4 planos: Gratuito (básico com anúncios), Língua (lições ilimitadas e sem anúncios), Sagrado (inclui Biblioteca Sagrada completa e IA ilimitada) e Templo (tudo + suporte prioritário e 5 dispositivos).",
  },
  {
    question: "O app tem pronúncia com áudio?",
    answer: "Sim! Temos TTS (Text-to-Speech) nativo para Yorùbá com visualização tonal. Você pode ouvir a pronúncia correta de cada palavra e frase.",
  },
  {
    question: "Posso usar em mais de um dispositivo?",
    answer: "Depende do plano: Gratuito (1 dispositivo), Língua (2), Sagrado (3) e Templo (5 dispositivos simultâneos).",
  },
  {
    question: "Como cancelo minha assinatura?",
    answer: "Você pode cancelar a qualquer momento diretamente pela App Store (iOS) ou Google Play (Android). Não cobramos taxas de cancelamento.",
  },
] as const

// === CTA ===
export const CTA = {
  title: "Comece Sua Jornada no Yorùbá Hoje",
  subtitle: "Comece gratuitamente e reconecte com suas raízes culturais.",
  cta: "Baixar Grátis Agora",
} as const

// === FOOTER ===
export const FOOTER = {
  tagline: "Feito com axé para a diáspora.",
  links: {
    produto: [
      { label: "Como Funciona", href: "/features" },
      { label: "Preços", href: "/pricing" },
      { label: "Download", href: "/download" },
      { label: "Blog", href: "/blog" },
    ],
    empresa: [
      { label: "Sobre", href: "/about" },
      { label: "Contato", href: "/contact" },
    ],
    legal: [
      { label: "Privacidade", href: "/privacy" },
      { label: "Termos", href: "/terms" },
      { label: "Cookies", href: "/privacy#cookies" },
    ],
  },
} as const

// === NAV ===
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Como Funciona", href: "/features" },
  { label: "Preços", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Sobre", href: "/about" },
] as const

// === FAQ CATEGORIES (standalone page) ===
export const FAQ_CATEGORIES = {
  "Sobre o App": [
    {
      question: "O que é o Yorubs?",
      answer: "O Yorubs é um aplicativo móvel gamificado para o ensino da língua Yorùbá. Combina lições interativas, um tutor de IA chamado Àróbá, provérbios diários e uma Biblioteca Sagrada dos Òrìṣà.",
    },
    {
      question: "Para quem o Yorubs é indicado?",
      answer: "Para qualquer pessoa interessada em aprender Yorùbá, seja iniciante ou com algum conhecimento prévio. O app é especialmente voltado para a diáspora africana que deseja reconectar com suas raízes culturais.",
    },
    {
      question: "O Yorubs funciona offline?",
      answer: "Sim! Todas as lições e conteúdos ficam salvos no seu dispositivo. Você pode estudar sem internet e seus dados sincronizam automaticamente quando você se reconectar.",
    },
    {
      question: "Preciso ter conhecimento prévio de Yorùbá?",
      answer: "Não! O Yorubs é feito para iniciantes completos. Começamos do zero com uma introdução aos tons da língua Yorùbá antes de ensinar qualquer palavra.",
    },
    {
      question: "O app tem pronúncia com áudio?",
      answer: "Sim! Temos TTS (Text-to-Speech) nativo para Yorùbá com visualização tonal. Você pode ouvir a pronúncia correta de cada palavra e frase.",
    },
  ],
  Pagamentos: [
    {
      question: "Quais são os planos disponíveis?",
      answer: "Temos 4 planos: Gratuito (básico com anúncios), Língua (R$ 24,90/mes — lições ilimitadas e sem anúncios), Sagrado (R$ 49,90/mes — Biblioteca Sagrada completa e IA ilimitada) e Templo (R$ 99,90/mes — tudo + suporte prioritário e 5 dispositivos).",
    },
    {
      question: "Quanto custam os planos pagos?",
      answer: "Língua: R$ 24,90/mes ou R$ 199,90/ano. Sagrado: R$ 49,90/mes, R$ 399,90/ano ou R$ 899,90 vitalício. Templo: R$ 99,90/mes. Os planos Língua e Sagrado oferecem 7 dias de teste gratuito.",
    },
    {
      question: "Como funciona o período de teste gratuito?",
      answer: "Os planos Língua e Sagrado oferecem 7 dias de acesso completo sem cobrança. Se cancelar antes do fim do período de teste, não será cobrado nada.",
    },
    {
      question: "Como cancelo minha assinatura?",
      answer: "Você pode cancelar a qualquer momento diretamente pela App Store (iOS) ou Google Play (Android). Não cobramos taxas de cancelamento.",
    },
    {
      question: "Tem reembolso?",
      answer: "Os reembolsos seguem as politicas da App Store (Apple) ou Google Play. Geralmente são aprovados em até 48 horas quando solicitados dentro do prazo.",
    },
  ],
  Tecnico: [
    {
      question: "Posso usar em mais de um dispositivo?",
      answer: "Depende do plano: Gratuito (1 dispositivo), Língua (2), Sagrado (3) e Templo (5 dispositivos simultâneos).",
    },
    {
      question: "Quais sistemas o app suporta?",
      answer: "O Yorubs está disponível para iOS 16+ e Android 10+. O app ocupa aproximadamente 150MB de espaço.",
    },
    {
      question: "Meus dados estão seguros?",
      answer: "Sim. Usamos o Supabase como provedor de infraestrutura com criptografia em transito e em repouso. Seus dados pessoais são protegidos conforme a LGPD.",
    },
  ],
  Conteúdo: [
    {
      question: "Quantas lições o app tem?",
      answer: "O Yorubs tem mais de 500 lições organizadas em módulos progressivos, com 13 tipos diferentes de exercícios interativos.",
    },
    {
      question: "O que é a Biblioteca Sagrada?",
      answer: "É uma seção dedicada aos 19 Òrìṣà da tradição Yorùbá, com vocabulário sagrado, cânticos (oríkì), ervas medicinais, objetos rituais e oferendas de cada divindade.",
    },
    {
      question: "O que são os provérbios diários?",
      answer: "Todo dia você recebe um novo provérbio Yorùbá com pronúncia em áudio, tradução detalhada e exercícios interativos. Temos mais de 358 provérbios no catálogo.",
    },
    {
      question: "Quem é o Àróbá?",
      answer: "Àróbá ('O Ancião') é o tutor de inteligência artificial do Yorubs. Ele conversa com você em Yorùbá, avalia sua pronúncia e adapta o ensino ao seu nível.",
    },
  ],
} as const

// === PRICING FEATURES TABLE ===
export const PRICING_FEATURES_TABLE = [
  { feature: "Lições por unidade", free: "3", lingua: "Ilimitadas", sagrado: "Ilimitadas", templo: "Ilimitadas" },
  { feature: "Vidas", free: "5 (regeneram 6h)", lingua: "Infinitas", sagrado: "Infinitas", templo: "Infinitas" },
  { feature: "Provérbio do Dia", free: true, lingua: true, sagrado: true, templo: true },
  { feature: "Tutor IA Àróbá", free: "5 msgs/dia", lingua: "50 msgs/dia", sagrado: "Ilimitado", templo: "Ilimitado" },
  { feature: "Biblioteca Sagrada", free: false, lingua: false, sagrado: "19 Òrìṣà completos", templo: "19 Òrìṣà completos" },
  { feature: "Culinária tradicional", free: false, lingua: false, sagrado: true, templo: true },
  { feature: "Cultura completa", free: false, lingua: true, sagrado: true, templo: true },
  { feature: "Dicionário interativo", free: false, lingua: true, sagrado: true, templo: true },
  { feature: "Certificados", free: false, lingua: false, sagrado: true, templo: true },
  { feature: "Download offline", free: false, lingua: true, sagrado: true, templo: true },
  { feature: "Ligas e rankings", free: true, lingua: true, sagrado: true, templo: true },
  { feature: "Conquistas e XP", free: true, lingua: true, sagrado: true, templo: true },
  { feature: "Streak freeze", free: "1/semana", lingua: "2/semana", sagrado: "Ilimitado", templo: "Ilimitado" },
  { feature: "Anuncios", free: "Sim", lingua: "Sem anúncios", sagrado: "Sem anúncios", templo: "Sem anúncios" },
  { feature: "Dispositivos", free: "1", lingua: "2", sagrado: "3", templo: "5" },
  { feature: "Suporte prioritário", free: false, lingua: false, sagrado: false, templo: true },
  { feature: "Atividades personalizadas", free: false, lingua: true, sagrado: true, templo: true },
] as const
