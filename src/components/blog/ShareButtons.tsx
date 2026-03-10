"use client"

import { Share2, Link2, MessageCircle } from "lucide-react"
import { useState, useCallback } from "react"

interface ShareButtonsProps {
  url: string
  title: string
}

export function ShareButtons({ url, title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)
  const fullUrl = `https://yorubs.com${url}`

  const copyLink = useCallback(async () => {
    await navigator.clipboard.writeText(fullUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [fullUrl])

  const shareWhatsApp = `https://wa.me/?text=${encodeURIComponent(`${title} - ${fullUrl}`)}`
  const shareTwitter = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(fullUrl)}`

  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-text-muted mr-1">Compartilhar:</span>
      <a
        href={shareWhatsApp}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 rounded-full bg-background-card border border-border flex items-center justify-center text-text-muted hover:text-forest-light hover:border-forest/30 transition-colors"
        aria-label="Compartilhar no WhatsApp"
      >
        <MessageCircle className="w-3.5 h-3.5" />
      </a>
      <a
        href={shareTwitter}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 rounded-full bg-background-card border border-border flex items-center justify-center text-text-muted hover:text-gold hover:border-gold/30 transition-colors"
        aria-label="Compartilhar no Twitter"
      >
        <Share2 className="w-3.5 h-3.5" />
      </a>
      <button
        onClick={copyLink}
        className="w-8 h-8 rounded-full bg-background-card border border-border flex items-center justify-center text-text-muted hover:text-gold hover:border-gold/30 transition-colors"
        aria-label="Copiar link"
      >
        <Link2 className="w-3.5 h-3.5" />
      </button>
      {copied && <span className="text-xs text-forest-light">Copiado!</span>}
    </div>
  )
}
