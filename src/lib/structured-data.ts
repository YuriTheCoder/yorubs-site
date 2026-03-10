export function articleJsonLd({
  title,
  description,
  url,
  datePublished,
  author = "Equipe Yorubs",
}: {
  title: string
  description: string
  url: string
  datePublished: string
  author?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished,
    author: { "@type": "Person", name: author },
    publisher: {
      "@type": "Organization",
      name: "Yorubs",
      url: "https://yorubs.com",
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
        availability: "https://schema.org/InStock",
        description: "Plano Gratuito",
      },
      {
        "@type": "Offer",
        price: "24.90",
        priceCurrency: "BRL",
        priceValidUntil: "2027-12-31",
        availability: "https://schema.org/InStock",
        description: "Plano Língua mensal",
      },
      {
        "@type": "Offer",
        price: "49.90",
        priceCurrency: "BRL",
        priceValidUntil: "2027-12-31",
        availability: "https://schema.org/InStock",
        description: "Plano Sagrado mensal",
      },
      {
        "@type": "Offer",
        price: "99.90",
        priceCurrency: "BRL",
        priceValidUntil: "2027-12-31",
        availability: "https://schema.org/InStock",
        description: "Plano Templo mensal",
      },
    ],
  }
}
