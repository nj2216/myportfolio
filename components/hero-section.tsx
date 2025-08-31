"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Terminal, ChevronUp } from "lucide-react"
import Link from "next/link"
import GlitchText from "./glitch-text"

export default function HeroSection() {

  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center text-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <Link href="https://linkedin.com/in/nj2216" target="_blank">
        <div className="inline-flex items-center mb-6 bg-black/50 px-4 py-2 rounded-full border border-primary/30">
          <Terminal className="h-5 w-5 mr-2 text-primary" />
          <span className="text-primary">Work with me?</span>
        </div>
        </Link>

        <GlitchText txt="$ whoami → Jeevan Nagarajan"/>

        <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
        Tech enthusiast, problem solver, and the guy who makes code, content, and chaos work in perfect harmony.<br></br> I turn ideas into apps, bugs into features, and confusion into clarity.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#portfolio">
          <Button size="lg" className="bg-primary hover:bg-primary/80 text-black font-bold">
            View Portfolio
          </Button>
          </Link>
            <Link href="#contact">
            <Button size="lg" className="bg-primary hover:bg-primary/80 text-black font-bold">
              Contact Me
            </Button>
            </Link>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        className="absolute bottom-10"
      >
        <Link href="#">
          <ChevronUp className="h-10 w-10 text-primary/70 cursor-pointer" />
        </Link>
      </motion.div>
    </section>
  )
}

