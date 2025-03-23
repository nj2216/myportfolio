"use client";
import dynamic from "next/dynamic"
import Link from "next/link"
import HeroSection from "@/components/hero-section"
import SkillsSection from "@/components/skills-section"
import PortfolioSection from "@/components/portfolio-section"
import AchievementsSection from "@/components/achievements-section"
import ContactSection from "@/components/contact-section"
import Navbar from "@/components/navbar"
import { useRef } from "react"  

// Import MatrixBackground with no SSR to avoid hydration issues
const MatrixBackground = dynamic(() => import("@/components/matrix-background"), { ssr: false })

export default function Home() {
  const terminalRef = useRef<HTMLDivElement>(null)

  return (
    <div className="relative min-h-screen bg-black text-white">
      <MatrixBackground />
      <Navbar />
      <main className="container mx-auto px-4 py-10 relative z-10">
        <HeroSection />
        <SkillsSection />
        <PortfolioSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <footer className="border-t border-gray-800 py-6 relative z-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">© {new Date().getFullYear()} | Built with Next.js & Tailwind</p>
          <div className="flex space-x-4">
            <Link href="https://github.com/njeeevan2216" className="text-gray-400 hover:text-primary transition-colors">
              GitHub
            </Link>
            <Link href="https://linkedin.com/in/nj2216" className="text-gray-400 hover:text-primary transition-colors">
              LinkedIn
            </Link>
            <Link href="/blog" className="text-gray-400 hover:text-primary transition-colors">
              Blog
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

