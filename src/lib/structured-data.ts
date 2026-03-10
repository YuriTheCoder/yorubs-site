export function articleJsonLd({
  title,
  description,
  url,
  datePublished,
  dateModified,
  author = "Equipe Yorubs",
}: {
  title: string
  description: string
  url: string
  datePublished: string
  dateModified?: string
  author?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished,
    dateModified: dateModified || datePublished,
    image: {
      "@type": "ImageObject",
      url: `https://yorubs.com/api/og?title=${encodeURIComponent(title)}`,
      width: 1200,
      height: 630,
    },
    author: { "@type": "Person", name: author },
    publisher: {
      "@type": "Organization",
      name: "Yorubs",
      url: "https://yorubs.com",
      logo: {
        "@type": "ImageObject",
        url: "https://yorubs.com/images/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  }
}

export function faqPageJsonLd(
  items: readonly { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }
}

export function productJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Yorubs",
    description:
      "App gamificado para ensino da língua Yorùbá com lições interativas, tutor IA Àróbá, provérbios diários e Biblioteca Sagrada dos Òrìṣà.",
    brand: { "@type": "Brand", name: "Yorubs" },
    offers: [
      {
        "@type": "Offer",
        price: "0",
        priceCurrency: "BRL",
        availability: "https://schema.org/PreOrder",
        description: "Plano Gratuito",
      },
      {
        "@type": "Offer",
        price: "24.90",
        priceCurrency: "BRL",
        availability: "https://schema.org/PreOrder",
        description: "Plano Língua mensal",
      },
      {
        "@type": "Offer",
        price: "49.90",
        priceCurrency: "BRL",
        availability: "https://schema.org/PreOrder",
        description: "Plano Sagrado mensal",
      },
      {
        "@type": "Offer",
        price: "99.90",
        priceCurrency: "BRL",
        availability: "https://schema.org/PreOrder",
        description: "Plano Templo mensal",
      },
    ],
  }
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Yorubs",
    url: "https://yorubs.com",
    logo: "https://yorubs.com/images/logo.png",
    description:
      "App gamificado para ensino da língua Yorùbá. Lições interativas, tutor IA, provérbios diários e Biblioteca Sagrada dos Òrìṣà.",
    foundingDate: "2025",
    sameAs: [
      "https://instagram.com/yorubs.app",
      "https://x.com/yorubsapp",
      "https://tiktok.com/@yorubsapp",
      "https://youtube.com/@yorubsapp",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "suporte@yorubs.com",
      contactType: "customer support",
      availableLanguage: ["Portuguese", "English"],
    },
  }
}

export function breadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
