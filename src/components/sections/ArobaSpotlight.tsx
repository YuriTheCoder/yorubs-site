"use client"

import { useRef } from "react"
import { gsap, useGSAP } from "@/lib/gsap-plugins"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { PhoneFrame } from "@/components/phone/PhoneFrame"
import { AROBA } from "@/lib/constants"
import { Mic } from "lucide-react"

const PILL_COLOR_MAP = {
  terracotta: "bg-terracotta/10 text-terracotta border-terracotta/20",
  gold: "bg-gold/10 text-gold border-gold/20",
  forest: "bg-forest/10 text-forest-light border-forest/20",
} as const

// ── ArobaChatScreen: rich chat mockup for inside the phone frame ──
export function ArobaChatScreen() {
  const chatScreenRef = useRef<HTMLDivElement>(null)
  const waveformRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!chatScreenRef.current) return

    // Typing dots infinite pulse
    const dots = chatScreenRef.current.querySelectorAll(".typing-dot")
    gsap.to(dots, {
      y: -3,
      repeat: -1,
      yoyo: true,
      stagger: 0.15,
      duration: 0.4,
      ease: "power1.inOut",
    })

    // Waveform bars infinite animation
    if (waveformRef.current) {
      const bars = waveformRef.current.querySelectorAll(".wave-bar")
      bars.forEach((bar) => {
        gsap.to(bar, {
          scaleY: 1.5 + Math.random() * 0.5,
          repeat: -1,
          yoyo: true,
          duration: 0.5 + Math.random() * 0.3,
          ease: "power1.inOut",
        })
      })
    }
  }, { scope: chatScreenRef })

  return (
    <div ref={chatScreenRef} className="absolute inset-0 flex flex-col bg-background-secondary">
      {/* Status bar */}
      <div className="flex items-center justify-between px-5 pt-3 text-[10px] text-text-secondary/60">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <div className="w-3 h-2 border border-text-secondary/40 rounded-[2px]">
            <div className="w-2 h-full bg-text-secondary/40 rounded-[1px]" />
          </div>
        </div>
      </div>

      {/* Dynamic island */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[90px] h-[26px] bg-black rounded-full z-10" />

      {/* Chat header */}
      <div className="flex items-center gap-3 px-4 pt-6 pb-3 border-b border-white/5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/aroba-mascot.png"
          alt="Aroba"
          className="w-9 h-9 rounded-full object-cover border border-terracotta/30"
        />
        <div>
          <span className="text-sm font-semibold text-text-primary block leading-tight">Àróbá</span>
          <span className="text-[10px] text-forest-light">Online</span>
        </div>
      </div>

      {/* Chat messages */}
      <div className="flex-1 px-3 py-3 space-y-2.5 overflow-hidden">
        {/* Bot greeting */}
        <div className="flex justify-start">
          <div className="max-w-[85%] px-3 py-2 rounded-2xl rounded-bl-md bg-background-card text-text-primary text-[11px] leading-relaxed border border-border">
            Ẹ kú àárọ̀! Vamos praticar sua pronúncia hoje?
          </div>
        </div>

        {/* User message */}
        <div className="flex justify-end">
          <div className="max-w-[85%] px-3 py-2 rounded-2xl rounded-br-md bg-gold/10 text-gold text-[11px] leading-relaxed border border-gold/20">
            Como eu digo &quot;ẹ ṣé&quot;?
          </div>
        </div>

        {/* Bot typing */}
        <div className="flex justify-start">
          <div className="px-4 py-2.5 rounded-2xl rounded-bl-md bg-background-card border border-border flex items-center gap-1">
            <div className="typing-dot w-1.5 h-1.5 rounded-full bg-terracotta/60" />
            <div className="typing-dot w-1.5 h-1.5 rounded-full bg-terracotta/60" />
            <div className="typing-dot w-1.5 h-1.5 rounded-full bg-terracotta/60" />
          </div>
        </div>

        {/* Pronúnciation eval card */}
        <div className="mx-1 p-2.5 rounded-xl bg-background-card border border-border">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] text-text-secondary">Pronúncia</span>
            <div className="flex items-center gap-1">
              <span className="text-[11px] font-bold text-forest-light">92%</span>
              <span className="text-[9px] text-forest-light/80">Ótimo!</span>
            </div>
          </div>
          {/* Waveform bars — deterministic heights to avoid hydration mismatch */}
          <div ref={waveformRef} className="flex items-end justify-center gap-[3px] h-6">
            {[14, 10, 18, 8, 16, 12, 19].map((h, i) => (
              <div
                key={i}
                className="wave-bar w-[3px] rounded-full bg-terracotta/60"
                style={{ height: `${h}px`, transformOrigin: "bottom" }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Input bar */}
      <div className="px-3 pb-3 pt-1">
        <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-background-card border border-border">
          <span className="text-[11px] text-text-muted flex-1">Digite sua mensagem...</span>
          <div className="w-7 h-7 rounded-full bg-terracotta/20 flex items-center justify-center">
            <Mic className="w-3.5 h-3.5 text-terracotta" />
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="h-10 border-t border-white/5 flex items-center justify-around px-4">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: i === 1 ? "rgba(196,91,40,0.4)" : "rgba(255,255,255,0.05)" }}
          />
        ))}
      </div>
    </div>
  )
}

export function ArobaSpotlight() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const chatRef = useRef<HTMLDivElement>(null)
  const pillsRef = useRef<HTMLDivElement>(null)
  const mobilePhoneRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!chatRef.current) return

    const mm = gsap.matchMedia()

    // Chat bubbles stagger
    const bubbles = chatRef.current.querySelectorAll(".chat-bubble")
    gsap.from(bubbles, {
      x: 40,
      autoAlpha: 0,
      stagger: 0.3,
      duration: 0.8,
      ease: "yorubs-smooth",
      scrollTrigger: {
        trigger: chatRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    })

    // Capability pills stagger
    if (pillsRef.current) {
      const pills = pillsRef.current.querySelectorAll(".cap-pill")
      gsap.from(pills, {
        y: 20,
        autoAlpha: 0,
        stagger: 0.15,
        duration: 0.6,
        ease: "yorubs-smooth",
        scrollTrigger: {
          trigger: pillsRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      })
    }

    // Mobile phone slide-up
    mm.add("(max-width: 1023px)", () => {
      if (!mobilePhoneRef.current) return
      gsap.from(mobilePhoneRef.current, {
        y: 60,
        autoAlpha: 0,
        scale: 0.9,
        duration: 1,
        ease: "yorubs-smooth",
        scrollTrigger: {
          trigger: mobilePhoneRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      })
    })
  }, { scope: sectionRef })

  return (
    <section id="aroba" ref={sectionRef} className="py-20 md:py-28 lg:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 70% 50%, rgba(196,91,40,0.05) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text + Chat */}
          <div>
            <SectionHeading
              badge={AROBA.badge}
              title={AROBA.title}
              badgeColor="terracotta"
              className="text-left !mb-4"
            />
            <p className="text-lg text-text-secondary leading-relaxed mb-4">
              {AROBA.description}
            </p>

            {/* Capability pills */}
            <div ref={pillsRef} className="flex flex-wrap gap-2 mb-4">
              {AROBA.capabilities.map((cap, i) => (
                <span
                  key={i}
                  className={`cap-pill inline-block px-3 py-1.5 rounded-full text-xs font-medium border ${PILL_COLOR_MAP[cap.color]}`}
                  style={{ opacity: 0 }}
                >
                  {cap.label}
                </span>
              ))}
            </div>

            {/* Chat mockup */}
            <div ref={chatRef} className="space-y-4">
              {AROBA.chatMessages.map((msg, i) => (
                <div
                  key={i}
                  className={`chat-bubble flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  style={{ opacity: 0 }}
                >
                  <div
                    className={`max-w-[80%] px-5 py-3 rounded-2xl text-sm ${
                      msg.role === "user"
                        ? "bg-gold/10 text-gold border border-gold/20 rounded-br-md"
                        : "bg-background-card text-text-primary border border-border rounded-bl-md"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile: phone below chat */}
            <div
              ref={mobilePhoneRef}
              className="lg:hidden flex justify-center mt-2"
            >
              <div className="w-[200px] h-[410px] rounded-[36px] border-[3px] border-[#3A3A45] bg-[#0A0A0F] overflow-hidden relative shadow-2xl">
                <div className="absolute inset-[3px] rounded-[33px] overflow-hidden bg-background-secondary">
                  <ArobaChatScreen />
                </div>
              </div>
            </div>
          </div>

          {/* Right: phone on desktop */}
          <div className="hidden lg:flex items-center justify-center">
            <PhoneFrame size="md">
              <ArobaChatScreen />
            </PhoneFrame>
          </div>
        </div>
      </div>
    </section>
  )
}
