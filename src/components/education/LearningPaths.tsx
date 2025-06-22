"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Monitor, Wrench, Palette, Globe, Briefcase } from "lucide-react"

const learningPaths = [
  {
    id: "software-engineer",
    title: "Software Engineer Path",
    description: "Become a full-stack developer with modern technologies",
    duration: "6-8 months",
    courses: 4,
    icon: Monitor,
    color: "bg-blue-500",
    steps: [
      "Programming Fundamentals (Python)",
      "Web Development (HTML, CSS, JS)",
      "Full-Stack Development (React, Node.js)",
      "Advanced Backend & Databases"
    ]
  },
  {
    id: "hardware-engineer",
    title: "Hardware Engineer Path",
    description: "Master electronics design and embedded systems",
    duration: "4-6 months",
    courses: 3,
    icon: Wrench,
    color: "bg-orange-500",
    steps: [
      "Electronics Fundamentals",
      "Arduino & Microcontrollers", 
      "IoT & Connected Devices"
    ]
  },
  {
    id: "product-designer",
    title: "Product Designer Path",
    description: "Create beautiful and functional digital experiences",
    duration: "3-4 months",
    courses: 3,
    icon: Palette,
    color: "bg-purple-500",
    steps: [
      "Design Thinking & Research",
      "UI/UX Design with Figma",
      "Advanced Prototyping"
    ]
  }
]

export function LearningPaths() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Structured Learning Paths
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow our carefully designed learning paths to master complex skills step by step.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {learningPaths.map((path, index) => (
            <motion.div
              key={path.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-center mb-6">
                <div className={`${path.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <path.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{path.title}</h3>
                <p className="text-gray-600 mb-4">{path.description}</p>
                
                <div className="flex justify-center space-x-4 text-sm text-gray-500 mb-6">
                  <span>{path.duration}</span>
                  <span>•</span>
                  <span>{path.courses} courses</span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {path.steps.map((step, stepIndex) => (
                  <div key={stepIndex} className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-medium">
                      {stepIndex + 1}
                    </div>
                    <span className="text-sm text-gray-700">{step}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                Start Learning Path
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
