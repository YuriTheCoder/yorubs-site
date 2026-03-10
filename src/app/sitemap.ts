import type { MetadataRoute } from "next"

const blogSlugs = [
  "por-que-aprender-yoruba",
  "sistema-tonal-yoruba",
  "orisas-introducao",
  "proverbios-yoruba-sabedoria",
  "como-yorubs-usa-ia",
  "festas-sagradas-calendario-yoruba",
  "dicas-manter-sequencia-estudo",
  "o-que-sao-orikis",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://yorubs.com"
  const lastModified = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/pricing`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/download`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/features`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/faq`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "yearly", priority: 0.5 },
    { url: `${baseUrl}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ]

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [...staticPages, ...blogPages]
}
