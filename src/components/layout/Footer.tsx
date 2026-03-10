"use client"

import { useRef } from "react"
import Link from "next/link"
import { gsap, useGSAP } from "@/lib/gsap-plugins"
import { StoreBadges } from "@/components/shared/StoreBadges"
import { FOOTER } from "@/lib/constants"
import { Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
  const textRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!textRef.current) return
    gsap.to(textRef.current, {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    })
  })

  return (
    <footer className="relative bg-background-secondary border-t border-border overflow-hidden">
      {/* Giant decorative text */}
      <div
        ref={textRef}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[15vw] font-serif text-border/10 whitespace-nowrap select-none pointer-events-none"
        aria-hidden="true"
      >
        Yorubs
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1: Logo + Social */}
          <div>
            <Link href="/" className="text-2xl font-serif text-gold tracking-wider">
              Yorubs
            </Link>
            <p className="mt-4 text-text-secondary text-sm leading-relaxed">
              O app gamificado para aprender a língua Yorùbá com tutor IA e conteúdo cultural.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <span className="text-text-muted cursor-default" aria-label="Instagram - Em breve" title="Em breve">
                <Instagram className="w-5 h-5" />
              </span>
              <span className="text-text-muted cursor-default" aria-label="Twitter - Em breve" title="Em breve">
                <Twitter className="w-5 h-5" />
              </span>
              <span className="text-text-muted cursor-default" aria-label="YouTube - Em breve" title="Em breve">
                <Youtube className="w-5 h-5" />
              </span>
            </div>
          </div>

          {/* Col 2: Produto */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">Produto</h3>
            <ul className="space-y-3">
              {FOOTER.links.produto.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-text-secondary hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Empresa */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">Empresa</h3>
            <ul className="space-y-3">
              {FOOTER.links.empresa.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-text-secondary hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Legal */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-3">
              {FOOTER.links.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-text-secondary hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-text-muted text-center md:text-left">
            <p>&copy; 2026 Yorubs. Todos os direitos reservados.</p>
            <p className="mt-1 text-text-muted/70">{FOOTER.tagline}</p>
          </div>
          <StoreBadges />
        </div>
      </div>
    </footer>
  )
}
