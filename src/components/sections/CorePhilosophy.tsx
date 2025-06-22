"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Lightbulb, Cpu, Globe, Zap } from "lucide-react"

const tabContent = {
  strategy: {
    title: "Our Strategy",
    description: "Combining the hardware excellence of Samsung with the software innovation of Google, we're creating a unified ecosystem that brings unprecedented value to Africa and beyond.",
    points: [
      { name: "Vertical Integration", desc: "Complete control from silicon to software" },
      { name: "Local Manufacturing", desc: "Building capacity across African markets" },
      { name: "Global Standards", desc: "World-class quality with local relevance" }
    ]
  },
  innovation: {
    title: "Innovation Engine",
    description: "Pioneering technologies designed for Africa's unique challenges while setting new global standards for performance, efficiency, and accessibility.",
    points: [
      { name: "RISC-V Leadership", desc: "Open architecture enabling true sovereignty" },
      { name: "BSD Foundation", desc: "Security-first OS architecture" },
      { name: "AI Acceleration", desc: "Custom NPU for edge computing" }
    ]
  },
  hardware: {
    title: "The Hardware",
    description: "Custom-designed RISC-V silicon optimized for our specific use cases, delivering performance where it matters most while addressing African infrastructure realities.",
    points: [
      { name: "Carthage Nyota Chip", desc: "Ultra-low power RISC-V with AI acceleration" },
      { name: "Modular Design", desc: "Upgradeable, repairable, sustainable" },
      { name: "Power Resilient", desc: "Designed for intermittent power conditions" }
    ]
  },
  software: {
    title: "The Software",
    description: "CarthageOS: A secure, efficient, and user-friendly operating system built for African needs but designed for global use, with innovations in local language support and connectivity.",
    points: [
      { name: "Privacy by Design", desc: "Built-in security and data sovereignty" },
      { name: "Offline-First AI", desc: "Intelligence that works without internet" },
      { name: "Local Optimization", desc: "Native support for African languages & contexts" }
    ]
  }
}

type TabType = "strategy" | "innovation" | "hardware" | "software"

const tabIcons = {
  strategy: Globe,
  innovation: Lightbulb,
  hardware: Cpu,
  software: Zap
}

export function CorePhilosophy() {
  const [activeTab, setActiveTab] = useState<TabType>("innovation")

  return (
    <section className="min-h-screen py-32 relative bg-white" id="innovation">
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.03]" />
      
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-semibold mb-8 text-black">
              /// Core Philosophy
            </h2>
            <p className="text-xl text-black/60 max-w-3xl mx-auto">
              Building the future of African technology through radical innovation, 
              local manufacturing, and global excellence.
            </p>
          </div>

          {/* Innovation Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            {[
              { number: "100%", label: "Open Source", sublabel: "RISC-V Architecture" },
              { number: "3+", label: "Platforms", sublabel: "Unified Ecosystem" },
              { number: "50+", label: "Languages", sublabel: "Local Support" },
              { number: "6000mAh", label: "Battery", sublabel: "Power Resilience" }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-display font-bold text-accent mb-2">{stat.number}</div>
                <div className="text-black font-medium">{stat.label}</div>
                <div className="text-black/60 text-sm">{stat.sublabel}</div>
              </div>
            ))}
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {(["innovation", "strategy", "hardware", "software"] as const).map((tab) => {
              const Icon = tabIcons[tab]
              return (
                <Button
                  key={tab}
                  variant={activeTab === tab ? "default" : "ghost"}
                  className={`text-lg py-6 px-8 relative rounded-full flex items-center gap-3 ${
                    activeTab === tab 
                      ? "bg-black text-white shadow-soft" 
                      : "text-black/60 hover:text-black hover:bg-black/5"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  <Icon className="h-5 w-5" />
                  [ {tab.charAt(0).toUpperCase() + tab.slice(1)} ]
                  {activeTab === tab && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                      layoutId="activeTab"
                    />
                  )}
                </Button>
              )
            })}
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
              <div className="flex items-center gap-4 mb-6">
                {(() => {
                  const Icon = tabIcons[activeTab]
                  return <Icon className="h-8 w-8 text-accent" />
                })()}
                <h3 className="text-3xl font-display font-semibold text-black">
                  {tabContent[activeTab].title}
                </h3>
              </div>
              <p className="text-xl text-black/60 mb-12 font-body max-w-4xl">
                {tabContent[activeTab].description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {tabContent[activeTab].points.map((point, index) => (
                  <motion.div
                    key={point.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative bg-black/[0.02] hover:bg-black/[0.03] rounded-xl p-6 transition-colors"
                  >
                    <p className="font-mono text-accent mb-3">0{index + 1}</p>
                    <h4 className="font-display text-lg text-black mb-3">{point.name}</h4>
                    <p className="text-black/60 text-sm">{point.desc}</p>
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Innovation Highlight */}
          {activeTab === "innovation" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12 p-8 bg-gradient-to-r from-accent/5 to-accent/10 rounded-2xl border border-accent/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="h-6 w-6 text-accent" />
                <h4 className="text-xl font-display font-semibold text-black">
                  Innovation Philosophy
                </h4>
              </div>
              <p className="text-black/70 leading-relaxed">
                Every line of code, every circuit design, every user interface element is crafted with Africa's 
                unique challenges in mind—from power infrastructure to connectivity patterns. But we don't stop at 
                local optimization. Our innovations set new global standards for efficiency, security, and sustainability.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
