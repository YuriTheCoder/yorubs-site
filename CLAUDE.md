# CLAUDE.md — Landing Page Yorubs (Awwwards-Level)

Voce e um engenheiro frontend senior especializado em sites premiados no Awwwards. Sua missao e construir do ZERO o site marketing completo para o **Yorubs** — um app mobile gamificado para ensino da lingua Yoruba. O site deve atingir nivel **Awwwards Site of the Day** com animacoes cinematicas, micro-interacoes refinadas, performance impecavel e acessibilidade total.

## REGRAS ABSOLUTAS

1. **NUNCA use Firebase** — o projeto mobile usa Supabase, e a landing page nao precisa de backend
2. **Tailwind CSS v4** — use a sintaxe CSS-first (`@theme`, `@import "tailwindcss"`). NAO use `tailwind.config.ts` antigo
3. **GSAP 3.13+** — TODOS os plugins sao gratuitos (ScrollTrigger, SplitText, ScrollSmoother, CustomEase). Importe SEMPRE de `@/lib/gsap-plugins.ts`, NUNCA diretamente de "gsap"
4. **Next.js App Router** — use SEMPRE Server Components quando possivel. `"use client"` so para interatividade
5. **Performance** — Lighthouse 95+ em todas as metricas. Lazy load tudo abaixo do fold
6. **Acessibilidade** — `prefers-reduced-motion` desativa animacoes. ARIA labels em tudo interativo
7. **Mobile first** — Design responsivo, 3D desativado em mobile (usar imagem fallback)
8. O idioma principal do site e **Portugues Brasileiro (pt-BR)**
9. Use a logo em `public/images/logo.png` — e a logo oficial do app
10. O modelo 3D do celular esta em `public/models/phone.glb` — e um iPhone 17 Pro

---

## TECH STACK EXATO

```json
{
  "framework": "next@15.2+",
  "react": "react@19",
  "styling": "tailwindcss@4.0+",
  "animations": "gsap@3.13+",
  "gsap-react": "@gsap/react@2.1+",
  "smooth-scroll": "lenis@1.3+",
  "3d": "@react-three/fiber@9+ @react-three/drei@10+",
  "ui-components": "shadcn/ui (latest)",
  "icons": "lucide-react",
  "page-transitions": "next-transition-router@0.5+",
  "animation-utilities": "tw-animate-css",
  "class-utils": "class-variance-authority clsx tailwind-merge",
  "typescript": "typescript@5.7+",
  "package-manager": "pnpm"
}
```

### Comandos de Setup

```bash
# Se o projeto ainda nao foi inicializado:
pnpm create next-app@latest . --ts --tailwind --eslint --app --src-dir
pnpm add gsap @gsap/react lenis next-transition-router @react-three/fiber @react-three/drei three tw-animate-css class-variance-authority clsx tailwind-merge lucide-react
pnpm add -D @types/three
pnpm dlx shadcn@latest init

# Se o projeto ja existe:
pnpm install
pnpm dev
```

---

## ESTRUTURA DE ARQUIVOS ALVO

```
landingpage/
├── public/
│   ├── images/
│   │   ├── logo.png                    # Logo oficial do app (JA EXISTE)
│   │   ├── hero-phone-light.webp       # Screenshot da home do app (CRIAR/PLACEHOLDER)
│   │   ├── app-screenshot-lesson.webp  # Tela de licao
│   │   ├── app-screenshot-aroba.webp   # Chat com Aroba
│   │   ├── app-screenshot-library.webp # Sacred Library
│   │   ├── app-screenshot-proverb.webp # Daily Proverb
│   │   ├── app-screenshot-leagues.webp # Leagues
│   │   ├── og-image.jpg               # Open Graph 1200x630
│   │   ├── pattern-adire.svg          # Textura Adire (Yoruba textile)
│   │   └── grain-overlay.png          # Noise texture 200x200 tiled
│   ├── models/
│   │   └── phone.glb                  # iPhone 17 Pro 3D (JA EXISTE)
│   └── fonts/
├── src/
│   ├── app/
│   │   ├── layout.tsx                 # Root layout
│   │   ├── page.tsx                   # Homepage
│   │   ├── about/page.tsx
│   │   ├── pricing/page.tsx
│   │   ├── blog/page.tsx
│   │   ├── blog/[slug]/page.tsx
│   │   ├── download/page.tsx
│   │   ├── privacy/page.tsx
│   │   ├── terms/page.tsx
│   │   ├── api/og/route.tsx           # Dynamic OG image
│   │   ├── robots.ts
│   │   ├── sitemap.ts
│   │   ├── not-found.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── providers/
│   │   │   ├── TransitionProvider.tsx
│   │   │   └── SmoothScrollProvider.tsx
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Preloader.tsx
│   │   │   └── CustomCursor.tsx
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── SocialProofBar.tsx
│   │   │   ├── FeaturesGrid.tsx
│   │   │   ├── PhoneShowcase.tsx
│   │   │   ├── ArobaSpotlight.tsx
│   │   │   ├── CultureSection.tsx
│   │   │   ├── DailyProverb.tsx
│   │   │   ├── GamificationSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── PricingSection.tsx
│   │   │   ├── FAQSection.tsx
│   │   │   └── CTASection.tsx
│   │   ├── ui/                        # shadcn/ui components
│   │   ├── animations/
│   │   │   ├── TextReveal.tsx
│   │   │   ├── ParallaxImage.tsx
│   │   │   ├── MagneticButton.tsx
│   │   │   ├── CardTilt.tsx
│   │   │   ├── CounterAnimation.tsx
│   │   │   ├── RevealOnScroll.tsx
│   │   │   └── FloatingPhone.tsx      # Cena R3F do celular 3D
│   │   └── shared/
│   │       ├── SectionHeading.tsx
│   │       ├── GrainOverlay.tsx
│   │       ├── StoreBadges.tsx
│   │       └── ScrollProgress.tsx
│   ├── lib/
│   │   ├── gsap-plugins.ts           # Registro central de plugins GSAP
│   │   ├── utils.ts                  # cn() helper
│   │   ├── constants.ts              # Textos, links, configs
│   │   └── metadata.ts
│   └── hooks/
│       ├── useMediaQuery.ts
│       ├── useReducedMotion.ts
│       └── useDeviceDetect.ts
├── reference/                         # Documentos de referencia (NAO deploy)
│   ├── BRAND_GUIDE.md
│   ├── CONTENT.md
│   └── PHONE_MOCKUP_COMPONENT.tsx     # Componente R3F pronto do iPhone
├── CLAUDE.md                          # ESTE ARQUIVO
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## DESIGN TOKENS (Paleta de Cores do App)

```css
/* Cores do app mobile — manter consistencia */
--color-background: #0A0A0F;
--color-background-secondary: #121218;
--color-background-tertiary: #1C1C24;
--color-background-card: #26262E;
--color-surface: #2A2A35;
--color-border: #3A3A45;

--color-gold: #D4A853;         /* Cor principal — dourado Yoruba */
--color-gold-light: #E8C878;
--color-gold-dark: #B8912F;
--color-terracotta: #C45B28;   /* Secundaria — terracota africana */
--color-terracotta-light: #E07040;
--color-forest: #2D6A4F;       /* Acento — verde floresta */
--color-forest-light: #40916C;

--color-text-primary: #F5F5F7;
--color-text-secondary: #A0A0B0;
--color-text-muted: #6B6B7B;
```

### Tipografia
- **Sans**: Inter (variavel) — corpo, UI
- **Serif**: Playfair Display — headings hero, titulos de secao
- **Mono**: JetBrains Mono — contadores, stats

### Gradientes
```css
background: linear-gradient(135deg, #D4A853 0%, #C45B28 100%); /* Gold → Terracotta */
background: linear-gradient(180deg, #0A0A0F 0%, #121218 100%); /* Dark gradient */
```

---

## MODELO 3D DO CELULAR — iPhone 17 Pro

O arquivo `public/models/phone.glb` e um iPhone 17 Pro do Sketchfab. O componente pronto esta em `reference/PHONE_MOCKUP_COMPONENT.tsx`.

### Meshes do modelo:
- **`Cube004_2`** com material **`Display`** = TELA DO CELULAR
- Para aplicar screenshot: troque o material `Display` por `MeshStandardMaterial` com textura + emissive

### Como usar:
```tsx
// A tela do celular e o mesh Cube004_2 com material Display
// Substitua o material por uma textura com a screenshot do app:
<mesh geometry={nodes.Cube004_2.geometry} material={screenMaterial} />
```

Ver `reference/PHONE_MOCKUP_COMPONENT.tsx` para o componente completo.

---

## HOMEPAGE — SECOES (ordem exata de cima para baixo)

### 1. Preloader (0→100 counter, barra de progresso, fade out para cima)
### 2. Navbar (sticky, blur backdrop, logo + links + CTA, esconde no scroll down/mostra no scroll up)
### 3. HeroSection
- Titulo: `"Aprenda Yoruba de forma divertida"` (TextReveal, SplitText lines+words)
- Subtitulo: `"Licoes gamificadas, tutor IA, proverbios diarios e a cultura dos Orisa"` (fade in)
- CTA: `"Baixe Gratis"` (MagneticButton, gradiente gold→terracotta)
- CTA secundario: `"Veja como funciona"` (ghost button, scroll suave para Features)
- **Celular 3D** (FloatingPhone com modelo iPhone 17 Pro, rotacao suave, Float, ContactShadows)
- Background: gradiente radial escuro + particulas sutis

### 4. SocialProofBar (stats animados)
- `"10.000+ usuarios"` | `"4.8 ★ na App Store"` | `"358 proverbios"` | `"19 Orisa"`
- CounterAnimation no scroll, divider dourado

### 5. FeaturesGrid (grid 2x3 ou 3x2)
Features com icone, titulo, descricao curta:
- **Licoes Interativas** — 13 tipos de exercicios gamificados
- **Tutor IA Aroba** — Converse com o Anciao virtual
- **Proverbio Diario** — 358 proverbios com explicacao cultural
- **Biblioteca Sagrada** — 19 Orisa com vocabulario, canticos, ervas
- **Sistema Tonal** — Visualizacao de tons da lingua Yoruba
- **Gamificacao** — XP, niveis, streaks, ligas, conquistas

### 6. PhoneShowcase (scroll horizontal com screenshots)
- Scroll-triggered horizontal scroll com 5+ screenshots do app
- Cada screenshot e um card com titulo e descricao curta
- Parallax nas imagens

### 7. ArobaSpotlight (destaque do tutor IA)
- Visual: chat bubble simulado com animacao de typing
- Titulo: `"Conheca Aroba, o Anciao"`
- Descricao do tutor IA, exemplos de conversa
- CTA: `"Converse agora"`

### 8. CultureSection (cultura Yoruba)
- Cards dos Orisa com cores tematicas
- Titulo: `"Mergulhe na Cultura Yoruba"`
- Grid visual com destaques: Eshu, Ogun, Yemoja, Oshun, Shango
- Parallax em imagens

### 9. DailyProverb (proverbio interativo)
- Proverbio Yoruba com traducao animada
- Fundo com textura Adire
- Efeito de revelar traducao ao passar o mouse/click

### 10. GamificationSection
- Visual: leaderboard simulado, badge de streak, barra de XP
- Titulo: `"Aprenda como se fosse um jogo"`
- Stats: niveis, XP, conquistas, ligas

### 11. TestimonialsSection
- Depoimentos com foto, nome, estrelas
- Carousel ou grid masonry
- Animacao de entrada escalonada

### 12. PricingSection
- 2 planos: **Gratis** vs **Pro** (R$19.90/mes)
- Tabela de comparacao com checkmarks
- CTA: `"Comece Gratis"` | `"Assine Pro"`
- Badge: `"7 dias gratis"` no plano Pro

### 13. FAQSection
- Accordion com 6-8 perguntas frequentes
- Animacao suave de abertura/fechamento

### 14. CTASection (call-to-action final)
- Titulo grande: `"Comece Sua Jornada Yoruba Hoje"`
- Botoes de download (App Store + Google Play)
- Background com gradiente dourado sutil

### 15. Footer
- Logo + slogan
- Links: Sobre, Precos, Blog, Privacidade, Termos
- Redes sociais (placeholders)
- Copyright

---

## PAGINAS ADICIONAIS

### /about
- Historia da marca, missao, equipe
- Por que Yoruba? Contexto cultural

### /pricing
- Versao expandida da secao de precos
- Comparacao detalhada free vs pro
- FAQ de pagamento

### /blog
- Lista de posts (pode ser estatico ou CMS futuro)
- Cards com imagem, titulo, data, categoria

### /download
- Links diretos para App Store e Google Play
- QR code para download
- Redirect inteligente por plataforma

### /privacy e /terms
- Paginas de texto legal
- Typography limpa e legivel

---

## ANIMACOES — REGRAS DE OURO

1. **Duracoes**: Hero = 1-1.5s, elementos do scroll = 0.8-1s, micro-interacoes = 0.3-0.5s
2. **Easing**: Use `"yorubs-smooth"` (custom ease) para entradas, `"power2.out"` para saidas, `"elastic.out"` para botoes
3. **Stagger**: 0.05-0.1s entre elementos de lista/grid
4. **ScrollTrigger**: `start: "top 85%"`, `toggleActions: "play none none none"`
5. **prefers-reduced-motion**: Desabilite TUDO com `matchMedia`
6. **Mobile**: Desative 3D, use fallback com imagem estatica
7. **SplitText**: Use `mask: "lines"` para efeito de revelacao limpo

---

## PERFORMANCE — METAS

| Metrica | Meta |
|---|---|
| Lighthouse Performance | 95+ |
| LCP | < 2.5s |
| FID | < 100ms |
| CLS | < 0.1 |
| Bundle size (initial) | < 150KB JS |
| 3D model | Lazy loaded, < 3MB |
| Imagens | WebP/AVIF, responsive sizes |

### Estrategias:
- `next/dynamic` com `ssr: false` para componentes 3D
- `next/image` para TODAS as imagens
- Font subsetting com `display: "swap"`
- Preload do modelo GLB: `useGLTF.preload("/models/phone.glb")`
- Code split por rota

---

## SEO

- Metadata completa em cada pagina (title, description, og, twitter)
- Structured data (JSON-LD): Organization, MobileApplication, FAQPage
- `robots.ts` e `sitemap.ts` automaticos
- Dynamic OG images com `ImageResponse` em `/api/og`
- `<link rel="canonical">` em todas as paginas
- Heading hierarchy correto (h1 > h2 > h3)

---

## ORDEM DE EXECUCAO RECOMENDADA

1. Inicializar projeto Next.js + instalar dependencias
2. Configurar `globals.css` com design tokens
3. Criar `lib/gsap-plugins.ts` e `lib/utils.ts`
4. Criar Providers (SmoothScroll + Transition)
5. Criar `layout.tsx` com providers, fonts, metadata
6. Criar componentes de animacao (TextReveal, MagneticButton, RevealOnScroll, etc.)
7. Criar Preloader
8. Criar Navbar
9. Criar HeroSection com FloatingPhone (3D)
10. Criar SocialProofBar
11. Criar FeaturesGrid
12. Criar PhoneShowcase
13. Criar ArobaSpotlight
14. Criar CultureSection
15. Criar DailyProverb
16. Criar GamificationSection
17. Criar TestimonialsSection
18. Criar PricingSection
19. Criar FAQSection
20. Criar CTASection
21. Criar Footer
22. Criar paginas adicionais (/about, /pricing, /blog, /download, /privacy, /terms)
23. SEO: sitemap, robots, OG images, structured data
24. Performance audit e otimizacao
25. Responsividade final e testes cross-browser

---

## INFORMACOES DO APP (para conteudo do site)

- **Nome**: Yorubs
- **Tagline**: "Aprenda Yoruba de Forma Divertida"
- **Descricao**: App gamificado para ensino da lingua Yoruba com licoes interativas, tutor IA (Aroba), proverbios diarios, e a Biblioteca Sagrada dos Orisa
- **Plataformas**: iOS + Android
- **Preco**: Gratis (com plano Pro R$19.90/mes)
- **Trial**: 7 dias gratis do Pro
- **Idiomas do app**: Portugues Brasileiro (pt-BR), Ingles (en)
- **Lingua ensinada**: Yoruba (lingua tonal da Nigeria, falada por 45M+ pessoas)
- **Website**: yorubs.com
- **Redes**: @yorubsapp (Instagram, TikTok, Twitter, YouTube, Facebook)

### Features Principais:
1. **13 tipos de exercicios** gamificados (quiz, flashcard audio, sentence builder, match pairs, pronunciation practice, etc.)
2. **Tutor IA "Aroba" (O Anciao)** — conversa em Yoruba com correcao de pronuncia
3. **358 proverbios diarios** com explicacao cultural e exercicios
4. **Biblioteca Sagrada** — 19 Orisa com vocabulario, canticos, orikis, ervas sagradas, objetos, oferendas
5. **Sistema Tonal** — visualizacao interativa dos tons Yoruba
6. **Gamificacao completa** — XP, niveis, streaks, ligas, conquistas, gems
7. **Offline-first** — funciona sem internet
8. **Dicionario** interativo
9. **Calendario de festas** Yoruba
10. **Culinaria** — receitas tradicionais
11. **Certificados** de conclusao

### Orisa Destaque (para CultureSection):
- **Eshu** (Mensageiro dos Orisa, dono das encruzilhadas) — cor: vermelho/preto
- **Ogun** (Senhor do ferro e da guerra) — cor: verde escuro/azul
- **Yemoja** (Mae das aguas, fertilidade) — cor: azul claro/prata
- **Oshun** (Deusa do rio, amor, riqueza) — cor: dourado/amarelo
- **Shango** (Senhor do trovao e da justica) — cor: vermelho/branco
