"use client"

import { motion } from "framer-motion"
import { Award, CheckCircle, Trophy } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const achievements = [
  {
    id: 1,
    title: "Sai Tech Ratna Award",
    description: "Recognized for exceptional technical contributions and innovative solutions.",
    icon: <Trophy className="h-8 w-8 text-yellow-500" />,
    year: "2023",
  },
  {
    id: 2,
    title: "HackerRank Software Engineer Role Certification",
    description: "Certified for advanced programming skills and problem-solving abilities.",
    icon: <CheckCircle className="h-8 w-8 text-green-500" />,
    year: "2024",
  },
  {
    id: 3,
    title: "DEC Club Technical Lead",
    description: "Led technical initiatives and mentored junior developers in the Digital Engineering Club.",
    icon: <Award className="h-8 w-8 text-blue-500" />,
    year: "2024-Present",
  },
]

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              Achievements & Recognitions
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Milestones that highlight my technical expertise and professional growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <Card className="h-full bg-black/50 border border-gray-800 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 p-3 rounded-full bg-gray-800/50">{achievement.icon}</div>
                  <h3 className="text-gray-400 font-bold mb-2">{achievement.title}</h3>
                  <p className="text-gray-500 mb-4">{achievement.description}</p>
                  <div className="mt-auto">
                    <span className="text-sm text-primary font-semibold">{achievement.year}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

