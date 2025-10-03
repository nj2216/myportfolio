"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Code, Server, Database, Cpu, Wrench, BrainCircuit, ChevronDown } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const skills = [
  {
    category: "Programming Languages & Tools",
    items: ["Python & C++", "JavaScript & Express.js", "SQL", "Flask & Tkinter", "LATEX"],
    icon: <Code className="h-6 w-6" />,
    color: "from-blue-500 to-cyan-400",
  },
  {
    category: "Multimedia & Streaming",
    items: ["FFMpeg", "WebRTC", "Video Editing (Davinci Resolve)", "Flask Media Streaming", "Javascript Media APIs"],
    icon: <Server className="h-6 w-6" />,
    color: "from-purple-500 to-pink-400",
  },
  {
    category: "Automation & Scripting",
    items: ["Selenium", "Bash Scripting", "Google Drive API", "Clerk Authentication"],
    icon: <Database className="h-6 w-6" />,
    color: "from-green-500 to-emerald-400",
  },
  {
    category: "Developement Tools & Deployment",
    items: ["Git", "VS Code", "Vercel", "Postman API", "Proxmox"],
    icon: <Cpu className="h-6 w-6" />,
    color: "from-red-500 to-orange-400",
  },
  {
    category: "Cybersecurity & System Administration",
    items: ["Windows Server Management", "Networking", "Hardware Deployment", "Hardware Troubleshooting"],
    icon: <Wrench className="h-6 w-6" />,
    color: "from-yellow-500 to-amber-400",
  },
  {
    category: "Soft Skills",
    items: ["Technical Blogging", "Troubleshooting", "Team Collaboration"],
    icon: <BrainCircuit className="h-6 w-6" />,
    color: "from-indigo-500 to-violet-400",
  },
]

export default function SkillsSection() {
  const [activeSkill, setActiveSkill] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSkill((prev) => (prev + 1) % skills.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
      <div className="container mx-auto px-4">
        <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                className="flex flex-col justify-center items-center text-center"
              >
        <div className="text-center">
          <ChevronDown className="h-10 w-10 text-primary/70 cursor-pointer" />
          </div>
          </motion.div>
        <div className="text-center mb-16 pt-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit built over years of solving complex technical challenges and creating innovative
            solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="h-full"
            >
              <Card className="h-full bg-black/50 border border-gray-800 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6 h-full">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${skill.color} mr-4`}>{skill.icon}</div>
                    <h3 className="text-gray-200 font-bold">{skill.category}</h3>
                  </div>

                  <div className="space-y-2 mt-4">
                    {skill.items.map((item, i) => (
                      <div key={item} className="flex items-center">
                        <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                        <p className="text-gray-300">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        {/* 
        <div className="mt-16 p-6 bg-black/50 border border-gray-800 rounded-xl">
          <div className="flex items-center mb-4">
            <div className="flex space-x-2 mr-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <p className="text-gray-400 text-sm">terminal</p>
          </div>
          

          <div className="font-mono text-sm">
            <p className="text-green-500">$ skills --list-all</p>
            <p className="text-gray-300 mt-2">
              <span className="text-primary">{">"}</span> Loading skill database...
            </p>
            <div className="mt-2">
              <span className="text-primary">{"$"}</span> <span className="text-yellow-400"></span> {skills[activeSkill].category}
            </div>
              {skills[activeSkill].items.map((item, i) => (
                <p key={i} className="text-gray-300">
                  <span className="text-yellow-400">[{i + 1}]</span> {item}
                </p>
              ))}
            </div>
            <p className="text-gray-300 mt-2 flex items-center">
              <span className="text-primary mr-1">$</span>
              <span className="w-2 h-4 bg-primary animate-blink"></span>
            </p>
          </div> 
          */}
        </div>
      )
}

