import dynamic from "next/dynamic"
import { Preloader } from "@/components/layout/Preloader"
import { Navbar } from "@/components/layout/Navbar"
import { HeroSection } from "@/components/sections/HeroSection"
import { SocialProofBar } from "@/components/sections/SocialProofBar"
import { ScrollProgress } from "@/components/shared/ScrollProgress"

const FeaturesGrid = dynamic(() => import("@/components/sections/FeaturesGrid").then(m => ({ default: m.FeaturesGrid })), { ssr: true })
const PhoneShowcase = dynamic(() => import("@/components/sections/PhoneShowcase").then(m => ({ default: m.PhoneShowcase })), { ssr: true })
const ArobaSpotlight = dynamic(() => import("@/components/sections/ArobaSpotlight").then(m => ({ default: m.ArobaSpotlight })), { ssr: true })
const CultureSection = dynamic(() => import("@/components/sections/CultureSection").then(m => ({ default: m.CultureSection })), { ssr: true })
const DailyProverb = dynamic(() => import("@/components/sections/DailyProverb").then(m => ({ default: m.DailyProverb })), { ssr: true })
const GamificationSection = dynamic(() => import("@/components/sections/GamificationSection").then(m => ({ default: m.GamificationSection })), { ssr: true })
const TestimonialsSection = dynamic(() => import("@/components/sections/TestimonialsSection").then(m => ({ default: m.TestimonialsSection })), { ssr: true })
const FAQSection = dynamic(() => import("@/components/sections/FAQSection").then(m => ({ default: m.FAQSection })), { ssr: true })
const CTASection = dynamic(() => import("@/components/sections/CTASection").then(m => ({ default: m.CTASection })), { ssr: true })
const Footer = dynamic(() => import("@/components/layout/Footer").then(m => ({ default: m.Footer })), { ssr: true })
const CustomCursor = dynamic(() => import("@/components/layout/CustomCursor").then(m => ({ default: m.CustomCursor })), { ssr: true })

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <CustomCursor />
      <ScrollProgress />
      <main>
        <HeroSection />
        <SocialProofBar />
        <FeaturesGrid />
        <PhoneShowcase />
        <ArobaSpotlight />
        <CultureSection />
        <DailyProverb />
        <GamificationSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
