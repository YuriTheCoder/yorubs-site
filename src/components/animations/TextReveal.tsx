"use client"

import { useRef } from "react"
import { gsap, SplitText, useGSAP } from "@/lib/gsap-plugins"

interface TextRevealProps {
  children: string
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span"
  className?: string
  type?: "lines" | "words" | "chars" | "lines,words" | "words,chars"
  stagger?: number
  duration?: number
  delay?: number
  trigger?: "scroll" | "load"
  start?: string
  mask?: "lines" | "words" | "chars"
}

export function TextReveal({
  children,
  as: Tag = "p",
  className = "",
  type = "lines,words",
  stagger = 0.08,
  duration = 1,
  delay = 0,
  trigger = "scroll",
  start = "top 85%",
  mask = "lines",
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    SplitText.create(containerRef.current, {
      type,
      mask,
      autoSplit: true,
      linesClass: "split-line",
      wordsClass: "split-word",
      charsClass: "split-char",
      onSplit(self) {
        const targets = self.chars.length > 0 ? self.chars
          : self.words.length > 0 ? self.words
          : self.lines

        if (trigger === "scroll") {
          return gsap.from(targets, {
            yPercent: 100,
            autoAlpha: 0,
            duration,
            stagger,
            delay,
            ease: "yorubs-smooth",
            scrollTrigger: {
              trigger: containerRef.current,
              start,
              toggleActions: "play none none none",
            },
          })
        } else {
          return gsap.from(targets, {
            yPercent: 100,
            autoAlpha: 0,
            duration,
            stagger,
            delay,
            ease: "yorubs-smooth",
          })
        }
      },
    })
  }, { scope: containerRef })

  return (
    <Tag ref={containerRef as React.RefObject<never>} className={className}>
      {children}
    </Tag>
  )
}
