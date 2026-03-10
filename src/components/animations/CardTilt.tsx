"use client"

import { useRef, useCallback } from "react"
import { gsap } from "@/lib/gsap-plugins"

interface CardTiltProps {
  children: React.ReactNode
  className?: string
  maxTilt?: number
}

export function CardTilt({
  children,
  className = "",
  maxTilt = 8,
}: CardTiltProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5

    gsap.to(cardRef.current, {
      rotateX: -y * maxTilt,
      rotateY: x * maxTilt,
      duration: 0.5,
      ease: "power2.out",
    })

    if (glowRef.current) {
      gsap.to(glowRef.current, {
        x: `${x * 100}%`,
        y: `${y * 100}%`,
        opacity: 0.15,
        duration: 0.5,
      })
    }
  }, [maxTilt])

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current) return
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.5)",
    })
    if (glowRef.current) {
      gsap.to(glowRef.current, { opacity: 0, duration: 0.5 })
    }
  }, [])

  return (
    <div
      ref={cardRef}
      className={`relative ${className}`}
      style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <div
        ref={glowRef}
        className="absolute inset-0 pointer-events-none rounded-inherit opacity-0"
        style={{
          background: "radial-gradient(circle at center, rgba(212,168,83,0.15), transparent 60%)",
        }}
      />
    </div>
  )
}
