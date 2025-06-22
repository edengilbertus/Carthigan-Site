"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Mail, ArrowRight, Zap, Shield, Keyboard, Users, Lightbulb, Cpu, Globe, Sparkles } from "lucide-react"

const products = [
  {
    name: "Carthage Laptop",
    description: "Powered by custom Carthage Silicon with 18+ hour battery life.",
    status: "Coming Soon",
    innovation: "RISC-V + AI Acceleration"
  },
  {
    name: "Carthage Workstation",
    description: "Modular design with tool-less GPU upgrades and AI accelerator slots.",
    status: "Coming Soon",
    innovation: "Modular Architecture"
  },
  {
    name: "Carthage Mobile",
    description: "6,000mAh battery with hardened AOSP for African conditions.",
    status: "Coming Soon",
    innovation: "Power Resilience"
  },
  {
    name: "CarthageOS",
    description: "BSD-based OS with Linux compatibility and offline-first AI.",
    status: "Coming Soon",
    innovation: "Security-First Design"
  },
]

export function Services() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // Handle waitlist signup logic here
      setIsSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section className="min-h-screen py-32 relative bg-white" id="products">
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.03]" />
      
      <div className="container mx-auto px-6 relative">
        {/* Eden Paste - Featured Product */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto mb-32"
        >
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="h-8 w-8 text-accent" />
              <h2 className="text-4xl md:text-5xl font-display font-semibold text-black">
                /// Featured Innovation
              </h2>
              <Sparkles className="h-8 w-8 text-accent" />
            </div>
            <p className="text-xl text-black/60 max-w-3xl mx-auto">
              Our first breakthrough: A desktop productivity tool that redefines how students and developers interact with text automation.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-strong border border-black/5 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Product Info */}
              <div className="p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <h3 className="text-3xl font-display font-bold text-black">
                    Eden Paste
                  </h3>
                  <Badge className="bg-accent/10 text-accent border-accent/20">
                    BETA
                  </Badge>
                  <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/20">
                    <Lightbulb className="h-3 w-3 mr-1" />
                    INNOVATION
                  </Badge>
                </div>
                
                <p className="text-lg text-black/70 mb-8 leading-relaxed">
                  A revolutionary desktop app with intelligent text automation that types what you've pasted 
                  anywhere your cursor is positioned. Built with the same innovation philosophy driving 
                  our hardware platform—solving real problems with elegant technology.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Keyboard className="h-5 w-5 text-accent" />
                    <span className="text-black/60">Context-aware text insertion technology</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className="h-5 w-5 text-accent" />
                    <span className="text-black/60">Lightning-fast automation with ML optimization</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-accent" />
                    <span className="text-black/60">Privacy-first design with local processing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-accent" />
                    <span className="text-black/60">Designed for African developer workflows</span>
                  </div>
                </div>

                {/* Innovation Highlight */}
                <div className="bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl p-4 mb-6 border border-blue-500/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb className="h-4 w-4 text-blue-600" />
                    <span className="text-blue-600 font-medium text-sm">Innovation Spotlight</span>
                  </div>
                  <p className="text-black/70 text-sm">
                    Eden Paste showcases our core innovation principles: solving real African challenges with 
                    world-class technology that sets new global standards.
                  </p>
                </div>

                {/* Waitlist Signup */}
                <div className="bg-gradient-to-r from-accent/5 to-accent/10 rounded-2xl p-6 border border-accent/20">
                  <h4 className="text-lg font-semibold text-black mb-3">
                    Join the Beta Waitlist
                  </h4>
                  <p className="text-black/60 mb-4 text-sm">
                    Be among the first to experience the future of productivity tools.
                  </p>
                  
                  {isSubmitted ? (
                    <div className="text-center py-4">
                      <div className="text-accent font-medium mb-2">✓ You're on the innovation list!</div>
                      <p className="text-black/60 text-sm">We'll notify you when Eden Paste is ready.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleWaitlistSubmit} className="flex gap-3">
                      <div className="relative flex-1">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-black/40" />
                        <Input
                          type="email"
                          placeholder="your.email@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-10 border-black/20 focus:border-accent focus:ring-accent"
                          required
                        />
                      </div>
                      <Button 
                        type="submit"
                        className="bg-accent hover:bg-accent/90 text-white px-6"
                      >
                        Join Waitlist
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  )}
                </div>
              </div>

              {/* Product Screenshot */}
              <div className="bg-gradient-to-br from-accent/5 to-accent/10 p-12 flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute -inset-4 bg-gradient-to-r from-accent to-accent/70 rounded-2xl blur-xl opacity-20" />
                  <div className="relative bg-white rounded-xl shadow-strong border border-black/10 overflow-hidden">
                    {/* Mock Terminal/Editor Interface */}
                    <div className="bg-black/90 px-4 py-3 flex items-center gap-2">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                      </div>
                      <span className="text-white/70 text-sm font-mono ml-4">Eden Paste - Innovation Edition</span>
                    </div>
                    <div className="p-6 bg-gray-900 text-green-400 font-mono text-sm">
                      <div className="space-y-2">
                        <div className="text-blue-400"># Smart text automation</div>
                        <div className="text-white">
                          <span className="text-yellow-400">const</span> innovation = "Context-aware typing"
                        </div>
                        <div className="text-white">
                          <span className="text-purple-400">system</span>.<span className="text-blue-400">insertAnywhere</span>(innovation)
                        </div>
                        <div className="h-px bg-white/20 my-4" />
                        <div className="text-green-400 animate-pulse">
                          ► AI-powered insertion ready...
                        </div>
                        <div className="text-orange-400 text-xs mt-2">
                          Innovation: ML-optimized for African workflows
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Innovation Platform Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-start justify-between gap-16 flex-col lg:flex-row">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-3 mb-8">
                <Cpu className="h-8 w-8 text-accent" />
                <h2 className="text-4xl md:text-5xl font-display font-semibold text-black">
                  /// Innovation Platform
                </h2>
              </div>
              
              <div className="space-y-12">
                <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-black">
                  <h3 className="text-2xl font-display font-semibold mb-8 text-black">
                    Revolutionary Integration
                  </h3>
                  <div className="space-y-6 text-black/60 font-mono">
                    <p className="flex items-center gap-3">
                      <span className="text-accent">{'>'}</span>
                      CUSTOM RISC-V SILICON WITH AI ACCELERATION CORES.
                    </p>
                    <p className="flex items-center gap-3">
                      <span className="text-accent">{'>'}</span>
                      BSD-BASED OS WITH BREAKTHROUGH SECURITY ARCHITECTURE.
                    </p>
                    <p className="flex items-center gap-3">
                      <span className="text-accent">{'>'}</span>
                      POWER-RESILIENT DESIGN FOR AFRICAN INFRASTRUCTURE.
                    </p>
                    <p className="flex items-center gap-3">
                      <span className="text-accent">{'>'}</span>
                      OFFLINE-FIRST AI WITH LOCAL LANGUAGE PROCESSING.
                    </p>
                  </div>
                </div>

                {/* Innovation Stats */}
                <div className="bg-gradient-to-r from-accent/5 to-purple-500/5 rounded-xl p-6 border border-accent/10">
                  <h4 className="font-display font-semibold text-black mb-4">Innovation Metrics</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-xl font-bold text-accent">100%</div>
                      <div className="text-sm text-black/60">Open Source Foundation</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-accent">10x</div>
                      <div className="text-sm text-black/60">Power Efficiency</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-accent">50+</div>
                      <div className="text-sm text-black/60">Language Support</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-accent">24/7</div>
                      <div className="text-sm text-black/60">Offline Capability</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:w-1/2 relative"
            >
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-mesh rounded-full blur-3xl opacity-50" />
              <div className="relative bg-white rounded-2xl shadow-medium border border-black/5 p-12">
                <div className="flex items-center gap-3 mb-8">
                  <Lightbulb className="h-6 w-6 text-accent" />
                  <h3 className="text-2xl font-display text-black">
                    Innovation Pipeline
                  </h3>
                </div>
                <div className="grid grid-cols-1 gap-6">
                  {products.map((product, index) => (
                    <motion.div
                      key={product.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative overflow-hidden rounded-xl bg-black/[0.02] hover:bg-black/[0.03] p-6 transition-colors border border-black/5"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-lg font-display font-medium text-black">
                          {product.name}
                        </h4>
                        <div className="flex gap-2">
                          <Badge variant="outline" className="text-xs">
                            {product.status}
                          </Badge>
                          <Badge className="bg-purple-500/10 text-purple-600 border-purple-500/20 text-xs">
                            {product.innovation}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-black/60 text-sm mb-3">
                        {product.description}
                      </p>
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    </motion.div>
                  ))}
                </div>
                <div className="text-center mt-8">
                  <p className="text-black/60 text-sm">
                    <Globe className="inline h-4 w-4 mr-1" />
                    Breakthrough innovations designed for Africa, built for the world.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
