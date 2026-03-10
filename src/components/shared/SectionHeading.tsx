import { TextReveal } from "@/components/animations/TextReveal"

interface SectionHeadingProps {
  badge?: string
  title: string
  subtitle?: string
  badgeColor?: "gold" | "terracotta" | "forest"
  className?: string
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  badgeColor = "gold",
  className = "",
}: SectionHeadingProps) {
  const colorMap = {
    gold: "bg-gold/10 text-gold border-gold/20",
    terracotta: "bg-terracotta/10 text-terracotta border-terracotta/20",
    forest: "bg-forest/10 text-forest-light border-forest/20",
  }

  return (
    <div className={`text-center mb-12 md:mb-16 ${className}`}>
      {badge && (
        <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium border mb-6 ${colorMap[badgeColor]}`}>
          {badge}
        </span>
      )}
      <TextReveal as="h2" className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight tracking-tight">
        {title}
      </TextReveal>
      {subtitle && (
        <TextReveal as="p" className="text-lg md:text-xl text-text-secondary mt-4 md:mt-6 max-w-3xl mx-auto" stagger={0.03}>
          {subtitle}
        </TextReveal>
      )}
    </div>
  )
}
