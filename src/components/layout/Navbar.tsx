"use client"

import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import { gsap, useGSAP } from "@/lib/gsap-plugins"
import { MagneticButton } from "@/components/animations/MagneticButton"
import { NAV_LINKS, LINKS } from "@/lib/constants"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const navRef = useRef<HTMLElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      if (currentY > lastScrollY.current && currentY > 100) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      lastScrollY.current = currentY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useGSAP(() => {
    if (!navRef.current) return
    gsap.to(navRef.current, {
      y: hidden ? -100 : 0,
      duration: 0.3,
      ease: "power2.out",
    })
  }, { dependencies: [hidden] })

  useGSAP(() => {
    if (!menuRef.current) return
    const links = menuRef.current.querySelectorAll(".mobile-nav-link")
    if (isOpen) {
      gsap.to(menuRef.current, { autoAlpha: 1, duration: 0.3, ease: "power2.out" })
      gsap.fromTo(
        links,
        { y: 40, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, stagger: 0.06, duration: 0.4, ease: "power2.out", delay: 0.1 }
      )
    } else {
      gsap.to(menuRef.current, { autoAlpha: 0, duration: 0.2, ease: "power2.in" })
    }
  }, { dependencies: [isOpen] })

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 h-16 md:h-20 bg-background/80 backdrop-blur-xl border-b border-border/50 pt-[env(safe-area-inset-top)]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-serif text-gold tracking-wider">
            Yorubs
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <MagneticButton
              href={LINKS.download}
              className="inline-flex items-center px-6 py-2.5 bg-gold text-background font-semibold text-sm rounded-full hover:bg-gold-light transition-colors"
            >
              Pré-Registro
            </MagneticButton>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-text-primary p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        ref={menuRef}
        className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden overflow-y-auto invisible"
        style={{ paddingTop: "env(safe-area-inset-top)", pointerEvents: isOpen ? "auto" : "none" }}
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="mobile-nav-link text-2xl text-text-primary hover:text-gold transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href={LINKS.download}
          className="mobile-nav-link mt-4 px-8 py-3 bg-gold text-background font-semibold rounded-full"
          onClick={() => setIsOpen(false)}
        >
          Pré-Registro
        </Link>
      </div>
    </>
  )
}
