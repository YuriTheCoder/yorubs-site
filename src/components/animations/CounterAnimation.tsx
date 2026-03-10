"use client"

import { useRef } from "react"
import { gsap, useGSAP } from "@/lib/gsap-plugins"

interface CounterAnimationProps {
  end: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
}

export function CounterAnimation({
  end,
  suffix = "",
  prefix = "",
  duration = 2,
  className = "",
}: CounterAnimationProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const valueRef = useRef({ val: 0 })

  useGSAP(() => {
    if (!ref.current) return

    gsap.to(valueRef.current, {
      val: end,
      duration,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      onUpdate: () => {
        if (ref.current) {
          ref.current.textContent = `${prefix}${Math.round(valueRef.current.val).toLocaleString("pt-BR")}${suffix}`
        }
      },
    })
  }, { scope: ref })

  return <span ref={ref} className={className}>0</span>
}
