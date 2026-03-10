import type { Metadata } from "next"

const BASE_URL = "https://yorubs.com"

export function createMetadata({
  title,
  description,
  path = "",
  image,
}: {
  title: string
  description: string
  path?: string
  image?: string
}): Metadata {
  const url = `${BASE_URL}${path}`
  const ogImage = image || `/api/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  }
}
