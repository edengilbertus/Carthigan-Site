"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Cpu, Smartphone, Laptop, Monitor, Settings, Zap, Lightbulb, Sparkles } from "lucide-react"

const roadmapItems = [
  {
    timeframe: "Q2 2025",
    title: "Eden Paste Launch",
    status: "In Progress",
    icon: Zap,
    description: "Our flagship desktop productivity tool",
    innovation: "Context-Aware Automation",
    features: [
      "Beta testing with early adopters",
      "macOS and Windows support",
      "ML-powered text insertion technology",
      "Public launch with innovation community"
    ],
    category: "Software"
  },
  {
    timeframe: "Q4 2025",
    title: "CarthageOS Foundation",
    status: "Development",
    icon: Settings,
    description: "BSD-based operating system family",
    innovation: "Security-First Architecture",
    features: [
      "CarthageOS-Core (Embedded) initial release",
      "Revolutionary BSD security foundation",
      "IoT and embedded device optimization",
      "Open-source developer preview program"
    ],
    category: "Operating System"
  },
  {
    timeframe: "H1 2026",
    title: "Hardware Platform Launch",
    status: "Planned",
    icon: Monitor,
    description: "Carthage PowerStation & IoT Development Kit",
    innovation: "RISC-V AI Acceleration",
    features: [
      "PowerStation for AI/ML workloads",
      "Revolutionary Carthage Nyota (RISC-V) chip debut",
      "IoT Development Kit for embedded innovation",
      "Complete developer ecosystem and tools"
    ],
    category: "Hardware"
  },
  {
    timeframe: "H2 2026",
    title: "CarthageOS Desktop",
    status: "Planned",
    icon: Laptop,
    description: "Full desktop operating system experience",
    innovation: "Linux Compatibility Layer",
    features: [
      "CarthageOS-Desktop 2.0 release",
      "Breakthrough Linux compatibility technology",
      "Modern desktop environment",
      "AI-enhanced developer productivity features"
    ],
    category: "Operating System"
  },
  {
    timeframe: "Q1 2027",
    title: "Carthage Mobile",
    status: "Planned",
    icon: Smartphone,
    description: "Smartphone optimized for East Africa",
    innovation: "Power Resilience Technology",
    features: [
      "Revolutionary 6,000mAh+ battery system",
      "Breakthrough rugged design for African conditions",
      "CarthageMobile OS (hardened AOSP innovation)",
      "Advanced local language AI processing"
    ],
    category: "Mobile"
  },
  {
    timeframe: "H1 2027",
    title: "Carthage DevBook",
    status: "Planned",
    icon: Laptop,
    description: "Developer laptop with integrated silicon",
    innovation: "Integrated Silicon Design",
    features: [
      "Industry-leading 18+ hour battery life",
      "Custom ARM processor with Carthage Silicon",
      "CarthageOS-Desktop pre-optimized",
      "Revolutionary developer workflow integration"
    ],
    category: "Hardware"
  },
  {
    timeframe: "H2 2027",
    title: "Custom Silicon Evolution",
    status: "Research",
    icon: Cpu,
    description: "Next-generation Carthage Nyota chip",
    innovation: "AI-First Silicon",
    features: [
      "Breakthrough AI acceleration capabilities",
      "Revolutionary power efficiency technology",
      "Advanced security and privacy features",
      "Seamless integration across entire ecosystem"
    ],
    category: "Silicon"
  }
]

const categoryColors = {
  "Software": "bg-blue-500/10 text-blue-600 border-blue-500/20",
  "Operating System": "bg-purple-500/10 text-purple-600 border-purple-500/20",
  "Hardware": "bg-orange-500/10 text-orange-600 border-orange-500/20",
  "Mobile": "bg-green-500/10 text-green-600 border-green-500/20",
  "Silicon": "bg-red-500/10 text-red-600 border-red-500/20"
}

export function Roadmap() {
  return (
    <section className="min-h-screen py-32 relative bg-white" id="roadmap">
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.03]" />
      
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="h-8 w-8 text-accent" />
              <h2 className="text-4xl md:text-5xl font-display font-semibold text-black">
                /// Innovation Roadmap
              </h2>
              <Sparkles className="h-8 w-8 text-accent" />
            </div>
            <p className="text-xl text-black/60 max-w-4xl mx-auto">
              A timeline of breakthrough innovations: From revolutionary software tools to complete 
              hardware ecosystems, every milestone pushes the boundaries of what's possible.
            </p>
          </div>

          {/* Innovation Impact Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          >
            {[
              { number: "7", label: "Breakthrough", sublabel: "Innovations" },
              { number: "100%", label: "Open Source", sublabel: "Foundation" },
              { number: "3", label: "Platform", sublabel: "Ecosystem" },
              { number: "∞", label: "Global", sublabel: "Impact" }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-display font-bold text-accent mb-2">{stat.number}</div>
                <div className="text-black font-medium">{stat.label}</div>
                <div className="text-black/60 text-sm">{stat.sublabel}</div>
              </div>
            ))}
          </motion.div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-[50%] top-0 bottom-0 w-px bg-black/10 hidden lg:block" />

            {roadmapItems.map((item, index) => (
              <motion.div
                key={item.timeframe}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                className={`relative flex items-start gap-8 mb-16 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } flex-col lg:flex-row`}
              >
                {/* Timeline Node */}
                <div className="absolute left-[50%] -translate-x-1/2 w-8 h-8 hidden lg:flex">
                  <div className={`w-full h-full rounded-full border-2 flex items-center justify-center transition-colors duration-500 ${
                    item.status === "In Progress" 
                      ? "border-accent bg-accent text-white shadow-soft animate-pulse" 
                      : item.status === "Development"
                      ? "border-accent bg-white text-accent"
                      : "border-black/20 bg-white text-black/40"
                  }`}>
                    <item.icon className="h-4 w-4" />
                  </div>
                </div>

                {/* Content Box */}
                <div className={`w-full lg:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                }`}>
                  <div className="bg-white rounded-2xl p-8 shadow-medium border border-black/5 hover:shadow-strong transition-shadow duration-500">
                    <div className={`flex items-center gap-4 mb-6 ${
                      index % 2 === 0 ? "lg:justify-end" : "lg:justify-start"
                    } justify-start`}>
                      <div className="flex items-center gap-3">
                        <item.icon className="h-5 w-5 text-accent" />
                        <span className="font-mono text-accent font-medium">
                          {item.timeframe}
                        </span>
                      </div>
                      <Badge className={categoryColors[item.category as keyof typeof categoryColors]}>
                        {item.category}
                      </Badge>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.status === "In Progress" 
                          ? "bg-accent/10 text-accent"
                          : item.status === "Development"
                          ? "bg-purple-500/10 text-purple-600"
                          : item.status === "Research"
                          ? "bg-blue-500/10 text-blue-600"
                          : "bg-black/5 text-black/40"
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-display font-semibold mb-3 text-black">
                      {item.title}
                    </h3>
                    
                    <p className="text-black/70 mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Innovation Highlight */}
                    <div className="bg-gradient-to-r from-accent/5 to-purple-500/5 rounded-lg p-3 mb-6 border border-accent/10">
                      <div className="flex items-center gap-2 mb-1">
                        <Lightbulb className="h-4 w-4 text-accent" />
                        <span className="text-accent font-medium text-sm">Innovation Focus</span>
                      </div>
                      <p className="text-black/70 text-sm">{item.innovation}</p>
                    </div>
                    
                    <div className={`space-y-3 ${
                      index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                    } text-left`}>
                      {item.features.map((feature, featIndex) => (
                        <motion.div 
                          key={feature}
                          initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + (featIndex * 0.1) }}
                          className={`text-black/60 flex items-center gap-3 text-sm ${
                            index % 2 === 0 ? "lg:flex-row-reverse lg:justify-end" : ""
                          }`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for opposite side on desktop */}
                <div className="w-[calc(50%-2rem)] hidden lg:block" />
              </motion.div>
            ))}
          </div>

          {/* Innovation Vision Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-20 p-12 bg-gradient-to-r from-accent/5 to-accent/10 rounded-3xl border border-accent/20"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Lightbulb className="h-8 w-8 text-accent" />
              <h3 className="text-2xl font-display font-semibold text-black">
                Innovation Philosophy: Africa First, Global Impact
              </h3>
              <Lightbulb className="h-8 w-8 text-accent" />
            </div>
            <p className="text-black/70 max-w-4xl mx-auto leading-relaxed mb-6">
              Every innovation on our roadmap starts with a simple question: "How can this transform 
              life in Africa?" From Eden Paste's productivity revolution to our RISC-V silicon breakthrough, 
              we're not just building products—we're pioneering the future of technology itself.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-black/60">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span>Open Source Foundation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                <span>African Innovation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span>Global Standards</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
