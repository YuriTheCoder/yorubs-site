"use client"

import { useRef } from "react"
import Image, { type StaticImageData } from "next/image"
import { gsap, useGSAP } from "@/lib/gsap-plugins"

interface ParallaxImageProps {
  src: string | StaticImageData
  alt: string
  speed?: number
  className?: string
  imgClassName?: string
}

export function ParallaxImage({
  src,
  alt,
  speed = 0.5,
  className = "",
  imgClassName = "",
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current || !imageRef.current) return

    const distance = (1 - speed) * 100

    gsap.fromTo(
      imageRef.current,
      { yPercent: -distance },
      {
        yPercent: distance,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    )
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <div ref={imageRef} className="w-full h-[120%]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`object-cover ${imgClassName}`}
          quality={85}
        />
      </div>
    </div>
  )
}
