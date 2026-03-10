"use client"

import { useRef } from "react"
import { gsap, useGSAP } from "@/lib/gsap-plugins"

interface RevealOnScrollProps {
  children: React.ReactNode
  className?: string
  from?: gsap.TweenVars
  start?: string
  duration?: number
  delay?: number
}

export function RevealOnScroll({
  children,
  className = "",
  from = { autoAlpha: 0, y: 60 },
  start = "top 85%",
  duration = 1,
  delay = 0,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!ref.current) return

    gsap.from(ref.current, {
      ...from,
      duration,
      delay,
      ease: "yorubs-smooth",
      scrollTrigger: {
        trigger: ref.current,
        start,
        toggleActions: "play none none none",
      },
    })
  }, { scope: ref })

  return (
    <div ref={ref} className={className} style={{ visibility: "hidden" }}>
      {children}
    </div>
  )
}
