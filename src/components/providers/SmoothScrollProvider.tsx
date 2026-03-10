"use client"

import { ReactLenis } from "lenis/react"
import { useEffect, useRef, useState } from "react"
import { gsap, ScrollTrigger } from "@/lib/gsap-plugins"

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const lenisRef = useRef<any>(null)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReducedMotion(mql.matches)
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mql.addEventListener("change", handler)
    return () => mql.removeEventListener("change", handler)
  }, [])

  useEffect(() => {
    if (reducedMotion) return

    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }
    gsap.ticker.add(update)
    gsap.ticker.lagSmoothing(0)

    lenisRef.current?.lenis?.on("scroll", ScrollTrigger.update)

    return () => {
      gsap.ticker.remove(update)
    }
  }, [reducedMotion])

  if (reducedMotion) {
    return <>{children}</>
  }

  return (
    <ReactLenis
      ref={lenisRef}
      root
      options={{
        lerp: 0.12,
        duration: 1.0,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 0,
        autoRaf: false,
      }}
    >
      {children}
    </ReactLenis>
  )
}
