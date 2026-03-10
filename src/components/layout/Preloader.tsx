"use client"

import { useRef, useState } from "react"
import { gsap, useGSAP } from "@/lib/gsap-plugins"

export function Preloader() {
  const preloaderRef = useRef<HTMLDivElement>(null)
  const counterRef = useRef<HTMLSpanElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const [isComplete, setIsComplete] = useState(false)

  useGSAP(() => {
    if (!preloaderRef.current || !counterRef.current || !progressRef.current) return

    const counter = { val: 0 }
    const tl = gsap.timeline({
      onComplete: () => setIsComplete(true),
    })

    tl.to(counter, {
      val: 100,
      duration: 0.8,
      ease: "power2.inOut",
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.textContent = Math.round(counter.val).toString()
        }
      },
    })

    tl.to(
      progressRef.current,
      {
        scaleX: 1,
        duration: 0.8,
        ease: "power2.inOut",
      },
      "<"
    )

    tl.to(preloaderRef.current, {
      yPercent: -100,
      duration: 0.3,
      ease: "power4.inOut",
      delay: 0.1,
    })

  })

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-[100000] bg-background flex flex-col items-center justify-center"
      style={{ display: isComplete ? "none" : "flex" }}
      aria-hidden="true"
    >
      <div className="mb-12">
        <span className="text-4xl font-serif text-gold tracking-wider">Yorubs</span>
      </div>

      <div className="text-8xl font-mono text-text-primary tabular-nums mb-8">
        <span ref={counterRef}>0</span>
        <span className="text-gold text-4xl align-top ml-1">%</span>
      </div>

      <div className="w-48 h-[2px] bg-border overflow-hidden">
        <div
          ref={progressRef}
          className="h-full bg-gold origin-left"
          style={{ transform: "scaleX(0)" }}
        />
      </div>
    </div>
  )
}
