"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const products = [
  {
    name: "Carthage Laptop",
    description: "Powerful computing designed for African professionals.",
  },
  {
    name: "Carthage Workstation",
    description: "High-performance workstations for demanding tasks.",
  },
  {
    name: "Carthage Mobile",
    description: "Smart devices optimized for local needs.",
  },
  {
    name: "CarthageOS",
    description: "Secure, efficient operating system built for Africa.",
  },
]

export function Services() {
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
          <div className="flex items-start justify-between gap-16 flex-col lg:flex-row">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-display font-semibold mb-16 text-black">
                /// Services
              </h2>
              
              <div className="space-y-12">
                <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-black">
                  <h3 className="text-2xl font-display font-semibold mb-8 text-black">
                    Integrated Hardware & Software
                  </h3>
                  <div className="space-y-6 text-black/60 font-mono">
                    <p className="flex items-center gap-3">
                      <span className="text-accent">{'>'}</span>
                      UNIFIED ECOSYSTEM FOR SEAMLESS PRODUCTIVITY.
                    </p>
                    <p className="flex items-center gap-3">
                      <span className="text-accent">{'>'}</span>
                      CUSTOM RISC-V SILICON FOR OPTIMIZED PERFORMANCE.
                    </p>
                    <p className="flex items-center gap-3">
                      <span className="text-accent">{'>'}</span>
                      CARTHAGEOS PROVIDES A SECURE & ROBUST FOUNDATION.
                    </p>
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
                <h3 className="text-2xl font-display mb-12 text-center text-black">
                  Explore Our Products
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {products.map((product, index) => (
                    <motion.div
                      key={product.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative overflow-hidden rounded-xl bg-black/[0.02] hover:bg-black/[0.03] p-6 transition-colors"
                    >
                      <h4 className="text-lg font-display font-medium mb-3 text-black">
                        {product.name}
                      </h4>
                      <p className="text-black/60 text-sm">
                        {product.description}
                      </p>
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
