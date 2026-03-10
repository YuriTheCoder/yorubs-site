import { forwardRef, type ReactNode, type Ref } from "react"

const SIZES = {
  sm: { w: 180, h: 370, radius: 32, border: 3, innerRadius: 29, island: { w: 70, h: 20 } },
  md: { w: 220, h: 450, radius: 36, border: 3, innerRadius: 33, island: { w: 80, h: 23 } },
  lg: { w: 280, h: 580, radius: 44, border: 3, innerRadius: 41, island: { w: 90, h: 26 } },
} as const

interface PhoneFrameProps {
  children: ReactNode
  size?: "sm" | "md" | "lg"
  className?: string
  glowRef?: Ref<HTMLDivElement>
}

export const PhoneFrame = forwardRef<HTMLDivElement, PhoneFrameProps>(
  function PhoneFrame({ children, size = "lg", className = "", glowRef }, ref) {
    const s = SIZES[size]

    return (
      <div ref={ref} className={`relative ${className}`} style={{ width: s.w, height: s.h }}>
        {/* Glow element */}
        <div
          ref={glowRef}
          className="absolute -inset-10 rounded-[60px] blur-3xl opacity-40 pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(212,168,83,0.25), transparent 70%)" }}
        />

        {/* Phone body */}
        <div
          className="relative w-full h-full overflow-hidden shadow-2xl"
          style={{
            borderRadius: s.radius,
            border: `${s.border}px solid #3A3A45`,
            backgroundColor: "#0A0A0F",
          }}
        >
          {/* Screen area */}
          <div
            className="absolute overflow-hidden bg-background-secondary"
            style={{
              inset: s.border,
              borderRadius: s.innerRadius,
            }}
          >
            {children}
          </div>
        </div>

        {/* Side buttons */}
        <div className="absolute -right-[2px] top-[35%] w-[3px] h-[15%] bg-[#3A3A45] rounded-r-sm" />
        <div className="absolute -left-[2px] top-[28%] w-[3px] h-[8%] bg-[#3A3A45] rounded-l-sm" />
        <div className="absolute -left-[2px] top-[40%] w-[3px] h-[12%] bg-[#3A3A45] rounded-l-sm" />
        <div className="absolute -left-[2px] top-[55%] w-[3px] h-[12%] bg-[#3A3A45] rounded-l-sm" />
      </div>
    )
  }
)
