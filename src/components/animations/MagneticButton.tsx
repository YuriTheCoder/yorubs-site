"use client"

import { useRef, useCallback } from "react"
import { gsap } from "@/lib/gsap-plugins"

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  strength?: number
  onClick?: () => void
  href?: string
}

export function MagneticButton({
  children,
  className = "",
  strength = 0.35,
  onClick,
  href,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const el = buttonRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      gsap.to(el, {
        x: x * strength,
        y: y * strength,
        duration: 0.4,
        ease: "power2.out",
      })

      if (textRef.current) {
        gsap.to(textRef.current, {
          x: x * strength * 0.5,
          y: y * strength * 0.5,
          duration: 0.4,
          ease: "power2.out",
        })
      }
    },
    [strength]
  )

  const handleMouseLeave = useCallback(() => {
    const el = buttonRef.current
    if (el) {
      gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.3)" })
    }
    if (textRef.current) {
      gsap.to(textRef.current, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.3)" })
    }
  }, [])

  if (href) {
    return (
      <a
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={className}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
      >
        <span ref={textRef}>{children}</span>
      </a>
    )
  }

  return (
    <button
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <span ref={textRef}>{children}</span>
    </button>
  )
}
