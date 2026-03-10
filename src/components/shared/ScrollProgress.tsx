"use client"

import { useRef } from "react"
import { gsap, useGSAP } from "@/lib/gsap-plugins"

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!barRef.current) return

    gsap.to(barRef.current, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3,
      },
    })
  })

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[9999]" aria-hidden="true">
      <div
        ref={barRef}
        className="h-full bg-gold origin-left"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  )
}
