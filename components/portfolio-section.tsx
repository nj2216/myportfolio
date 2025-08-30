"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "MedPlay",
    description: "A music player built with Flask, allowing users to stream and manage songs effortlessly.",
    image: "https://raw.githubusercontent.com/gowtham-2321/Medplay-UI-v2/refs/heads/jeevan-bk2/static/img/Screenshot%202025-03-23%20095553.png",
    techStack: ["Python", "HTML", "CSS", "Javascript", "Flask"],
    demoUrl: "https://medplay.vercel.app",
    repoUrl: "https://github.com/gowtham-2321/Medplay-UI-v2",
    pageUrl: "/medplay"
  },
  {
    id: 2,
    title: "jvincipy",
    description: "A Python DSL for HTML using Python objects, featuring a TagFactory for a wide range of elements.",
    image: "/images/jvincipy/thumbnail.png",
    techStack: ["Python", "HTML"],
    demoUrl: "https://pypi.org/project/jvincipy/",
    repoUrl: "https://github.com/nj2216/jvincipy",
    pageUrl: "/jvincipy"
  },
  {
    id: 3,
    title: "LAN MDH Streams",
    description: "A local network content delivery app for streaming in-campus productions seamlessly.",
    image: "https://raw.githubusercontent.com/njeeevan2216/LAN-MDH-Streams/refs/heads/pre-realease/static/img/Screenshot%202025-03-23%20095809.png",
    techStack: ["Python", "Flask", "Networking", "HTML", "Bootstrap"],
    demoUrl: "https://lan-mdh-streams-live.vercel.app",
    repoUrl: "https://github.com/njeeevan2216/LAN-MDH-Streams",
    pageUrl: "/#"
  },
  {
    id: 4,
    title: "MangoEdit",
    description: "A Notepad clone created as a challenge with a friend, built using Python and Tkinter.",
    image: "https://raw.githubusercontent.com/njeeevan2216/MangoEdit/refs/heads/main/Screenshot%202025-03-23%20100144.png",
    techStack: ["Python", "Tkinter"],
    demoUrl: "https://github.com/njeeevan2216/MangoEdit/releases",
    repoUrl: "https://github.com/njeeevan2216/MangoEdit",
    pageUrl: "/#"
  },
]

export default function PortfolioSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              Portfolio Showcase
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Explore my latest projects and technical achievements</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => ( 
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: project.id * 0.1 }}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.2 },
              }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="h-full"
            >

              <Card className="h-full overflow-hidden bg-black/50 border border-gray-800 hover:border-primary/50 transition-all duration-300">
                <Link href={project.pageUrl}>

                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />

                  {hoveredProject === project.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center p-4"
                    >
                      <h4 className="text-xl font-bold mb-2 text-primary">Tech Stack</h4>
                      <div className="flex flex-wrap justify-center gap-2">
                        {project.techStack.map((tech) => (
                          <Badge key={tech} variant="outline" className="border-primary text-primary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
                

                <CardContent className="p-6">
                  <h3 className="text-gray-400 font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-500">{project.description}</p>
                </CardContent>
                </Link>

                <CardFooter className="p-6 pt-0 flex justify-between">
                  <Link href={project.repoUrl} target="_blank">
                  <Button variant="outline" size="sm" className="border-secondary/50 text-secondary bg-primary-20 hover:bg-primary/10 hover:text-primary hover:border-primary">
                    <Github className="h-4 w-4 mr-2" />
                    Repo
                  </Button>
                  </Link>
                  
                  <Link href={project.demoUrl} target="_blank">
                  <Button variant="outline" size="sm" className="border-secondary/50 text-secondary bg-primary-20 hover:bg-primary/10 hover:text-primary hover:border-primary">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Try
                  </Button>
                  </Link>
                </CardFooter>
              </Card>
              
            </motion.div>
        ))}
        </div>
      </div>
    </section>
  )
}

