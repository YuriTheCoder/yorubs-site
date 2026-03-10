"use client"

import { useRef, useEffect, useCallback } from "react"
import { gsap } from "@/lib/gsap-plugins"
import { useSyncExternalStore } from "react"

function subscribeTouchChange(callback: () => void) {
  window.addEventListener("pointerdown", callback, { once: true })
  return () => {}
}

function getIsTouchDevice() {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0
}

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)
  const isVisibleRef = useRef(false)
  const isHoveringRef = useRef(false)

  const isTouchDevice = useSyncExternalStore(subscribeTouchChange, getIsTouchDevice, () => true)

  const forceUpdate = useCallback(() => {
    if (cursorRef.current) {
      cursorRef.current.style.opacity = isVisibleRef.current ? "1" : "0"
      cursorRef.current.style.width = isHoveringRef.current ? "60px" : "20px"
      cursorRef.current.style.height = isHoveringRef.current ? "60px" : "20px"
      cursorRef.current.style.backgroundColor = isHoveringRef.current ? "rgba(212,168,83,0.08)" : "transparent"
    }
    if (followerRef.current) {
      followerRef.current.style.opacity = isVisibleRef.current ? "0.5" : "0"
    }
  }, [])

  useEffect(() => {
    if (isTouchDevice) return

    const cursor = cursorRef.current
    const follower = followerRef.current
    if (!cursor || !follower) return

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.15, ease: "power2.out" })
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.15, ease: "power2.out" })
    const xFollower = gsap.quickTo(follower, "x", { duration: 0.5, ease: "power2.out" })
    const yFollower = gsap.quickTo(follower, "y", { duration: 0.5, ease: "power2.out" })

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisibleRef.current) {
        isVisibleRef.current = true
        forceUpdate()
      }
      xTo(e.clientX - 10)
      yTo(e.clientY - 10)
      xFollower(e.clientX - 25)
      yFollower(e.clientY - 25)
    }

    const handleMouseEnter = () => {
      isHoveringRef.current = true
      forceUpdate()
    }
    const handleMouseLeave = () => {
      isHoveringRef.current = false
      forceUpdate()
    }

    window.addEventListener("mousemove", handleMouseMove)

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest("a, button, [data-cursor-hover]")) {
        handleMouseEnter()
      }
    }
    const handleOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest("a, button, [data-cursor-hover]")) {
        handleMouseLeave()
      }
    }

    document.body.addEventListener("mouseover", handleOver)
    document.body.addEventListener("mouseout", handleOut)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.body.removeEventListener("mouseover", handleOver)
      document.body.removeEventListener("mouseout", handleOut)
    }
  }, [isTouchDevice, forceUpdate])

  if (isTouchDevice) return null

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 rounded-full border-[1.5px] border-gold pointer-events-none z-[99999] mix-blend-difference transition-[width,height] duration-300"
        style={{ opacity: 0, width: 20, height: 20, backgroundColor: "transparent" }}
        aria-hidden="true"
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-[50px] h-[50px] rounded-full border border-gold/20 pointer-events-none z-[99998] mix-blend-difference"
        style={{ opacity: 0 }}
        aria-hidden="true"
      />
    </>
  )
}
