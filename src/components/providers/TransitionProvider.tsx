"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { gsap } from "@/lib/gsap-plugins"

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    gsap.fromTo(
      "main",
      { autoAlpha: 0, y: 12 },
      { autoAlpha: 1, y: 0, duration: 0.4, ease: "power2.out" }
    )
  }, [pathname])

  return <>{children}</>
}
