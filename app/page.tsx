"use client";
import dynamic from "next/dynamic"
import Link from "next/link"
import HeroSection from "@/components/hero-section"
import SkillsSection from "@/components/skills-section"
import PortfolioSection from "@/components/portfolio-section"
import AchievementsSection from "@/components/achievements-section"
import ContactSection from "@/components/contact-section"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useRef } from "react"  

// Import MatrixBackground with no SSR to avoid hydration issues
const MatrixBackground = dynamic(() => import("@/components/matrix-background"), { ssr: false })

export default function Home() {
  const terminalRef = useRef<HTMLDivElement>(null)

  return (
    <div className="relative min-h-screen bg-black text-white">
      <MatrixBackground />
      <Navbar title="Jeevan N"/>
      <main className="container mx-auto px-4 py-10 relative z-10">
        <HeroSection />
        <SkillsSection />
        <PortfolioSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

