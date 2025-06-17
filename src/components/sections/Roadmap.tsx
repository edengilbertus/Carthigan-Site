"use client"

import { motion } from "framer-motion"

const phases = [
  {
    phase: "01",
    title: "Foundation Building",
    timeframe: "2025-2026",
    status: "In Progress",
    objectives: [
      "Establish R&D facilities",
      "Build core engineering team",
      "Develop RISC-V prototype"
    ]
  },
  {
    phase: "02",
    title: "Product Development",
    timeframe: "2026-2027",
    status: "Planned",
    objectives: [
      "Launch first hardware products",
      "Release CarthageOS beta",
      "Expand manufacturing capacity"
    ]
  },
  {
    phase: "03",
    title: "Market Expansion",
    timeframe: "2027-2028",
    status: "Planned",
    objectives: [
      "Enter key African markets",
      "Launch developer platform",
      "Establish distribution network"
    ]
  },
  {
    phase: "04",
    title: "Global Scale",
    timeframe: "2028-2029",
    status: "Planned",
    objectives: [
      "International market entry",
      "Advanced R&D initiatives",
      "Strategic partnerships"
    ]
  }
]

export function Roadmap() {
  return (
    <section className="min-h-screen py-32 relative bg-white">
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.03]" />
      
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-16 text-black">
            /// Our Roadmap
          </h2>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-[50%] top-0 bottom-0 w-px bg-black/10" />

            {phases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-start gap-8 mb-16 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-[50%] -translate-x-1/2 w-6 h-6">
                  <div className={`w-full h-full rounded-full border-2 transition-colors duration-500 ${
                    phase.status === "In Progress" 
                      ? "border-accent bg-accent shadow-soft animate-pulse" 
                      : "border-black/20 bg-white"
                  }`} />
                </div>

                {/* Content Box */}
                <div className={`w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? "text-right" : "text-left"
                }`}>
                  <div className="bg-white rounded-2xl p-8 shadow-medium border border-black/5 hover:shadow-strong transition-shadow duration-500">
                    <div className="flex items-center gap-4 justify-end mb-6">
                      <span className="font-mono text-accent">
                        PHASE {phase.phase}
                      </span>
                      <span className={`px-4 py-1 rounded-full text-xs font-medium ${
                        phase.status === "In Progress" 
                          ? "bg-accent/10 text-accent"
                          : "bg-black/5 text-black/40"
                      }`}>
                        {phase.status}
                      </span>
                    </div>
                    <h3 className="text-2xl font-display font-semibold mb-2 text-black">
                      {phase.title}
                    </h3>
                    <p className="text-black/40 mb-6 font-mono">{phase.timeframe}</p>
                    <ul className={`space-y-4 ${
                      index % 2 === 0 ? "text-right" : "text-left"
                    }`}>
                      {phase.objectives.map((objective, objIndex) => (
                        <motion.li 
                          key={objective}
                          initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + (objIndex * 0.1) }}
                          className="text-black/60 flex items-center gap-3"
                        >
                          {index % 2 === 0 && objective}
                          <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                          {index % 2 !== 0 && objective}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
