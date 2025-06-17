"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

const tabContent = {
  strategy: {
    title: "Our Strategy",
    description: "Combining the hardware excellence of Samsung with the software innovation of Google, we're creating a unified ecosystem that brings unprecedented value to Africa and beyond.",
    points: [
      "Vertical Integration",
      "Local Manufacturing",
      "Global Standards"
    ]
  },
  hardware: {
    title: "The Hardware",
    description: "Custom-designed RISC-V silicon optimized for our specific use cases, delivering performance where it matters most.",
    points: [
      "Custom Silicon",
      "Modular Design",
      "Energy Efficient"
    ]
  },
  software: {
    title: "The Software",
    description: "CarthageOS: A secure, efficient, and user-friendly operating system built for African needs but designed for global use.",
    points: [
      "Privacy First",
      "AI Integration",
      "Local Optimization"
    ]
  }
}

type TabType = "strategy" | "hardware" | "software"

export function CorePhilosophy() {
  const [activeTab, setActiveTab] = useState<TabType>("strategy")

  return (
    <section className="min-h-screen py-32 relative bg-white">
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.03]" />
      
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-16 text-black">
            /// Core Philosophy
          </h2>

          <div className="flex flex-col md:flex-row gap-4 mb-16">
            {(["strategy", "hardware", "software"] as const).map((tab) => (
              <Button
                key={tab}
                variant={activeTab === tab ? "default" : "ghost"}
                className={`text-lg py-6 px-8 relative rounded-full ${
                  activeTab === tab 
                    ? "bg-black text-white shadow-soft" 
                    : "text-black/60 hover:text-black hover:bg-black/5"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                [ {tab.charAt(0).toUpperCase() + tab.slice(1)} ]
                {activeTab === tab && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                    layoutId="activeTab"
                  />
                )}
              </Button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-12 rounded-2xl shadow-medium border border-black/5"
            >
              <h3 className="text-3xl font-display font-semibold mb-4 text-black">
                {tabContent[activeTab].title}
              </h3>
              <p className="text-xl text-black/60 mb-12 font-body max-w-2xl">
                {tabContent[activeTab].description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {tabContent[activeTab].points.map((point, index) => (
                  <motion.div
                    key={point}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative bg-black/[0.02] hover:bg-black/[0.03] rounded-xl p-6 transition-colors"
                  >
                    <p className="font-mono text-accent mb-3">0{index + 1}</p>
                    <h4 className="font-display text-lg text-black">{point}</h4>
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
