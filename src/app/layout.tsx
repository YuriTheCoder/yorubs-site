import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider"
import { TransitionProvider } from "@/components/providers/TransitionProvider"
import { CookieConsent } from "@/components/shared/CookieConsent"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], display: "swap", variable: "--font-playfair" })

export const metadata: Metadata = {
  metadataBase: new URL("https://yorubs.com"),
  title: {
    default: "Yorubs — Aprenda Yorùbá de Forma Divertida",
    template: "%s | Yorubs",
  },
  description:
    "O app gamificado para aprender a língua Yorùbá. Lições interativas, tutor IA Àróbá, provérbios diários e a Biblioteca Sagrada dos Òrìṣà. Grátis para baixar.",
  keywords: [
    "yoruba",
    "aprender yoruba",
    "língua yoruba",
    "curso yoruba",
    "orisa",
    "orixas",
    "cultura africana",
    "Nigeria",
    "diáspora",
  ],
  authors: [{ name: "Yorubs" }],
  creator: "Yorubs",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    alternateLocale: "en_US",
    url: "https://yorubs.com",
    siteName: "Yorubs",
    title: "Yorubs — Aprenda Yorùbá de Forma Divertida",
    description:
      "O app gamificado para aprender a língua Yorùbá com tutor IA, provérbios diários e conteúdo cultural.",
    images: [{ url: "/api/og", width: 1200, height: 630, alt: "Yorubs - Aprenda Yorùbá" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yorubs — Aprenda Yorùbá de Forma Divertida",
    description: "App gamificado para aprender Yorùbá com IA.",
    images: ["/api/og"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/images/logo.png", sizes: "any" },
    ],
    apple: "/images/logo.png",
  },
  manifest: "/manifest.json",
}

export const viewport: Viewport = {
  themeColor: "#0A0A0F",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="bg-background text-text-primary font-sans antialiased">
        <SmoothScrollProvider>
          <TransitionProvider>{children}</TransitionProvider>
        </SmoothScrollProvider>
        <CookieConsent />
        <div className="grain-overlay" aria-hidden="true" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MobileApplication",
              name: "Yorubs",
              operatingSystem: "iOS, Android",
              applicationCategory: "EducationApplication",
              description:
                "App gamificado para aprender a língua Yorùbá com tutor IA, provérbios diários e conteúdo cultural dos Òrìṣà.",
              offers: { "@type": "Offer", price: "0", priceCurrency: "BRL" },
              author: { "@type": "Organization", name: "Yorubs", url: "https://yorubs.com" },
            }),
          }}
        />
      </body>
    </html>
  )
}
