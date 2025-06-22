"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="min-h-screen pt-32 relative overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-5" />
      
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-20 right-10 w-96 h-96 bg-gradient-mesh rounded-full blur-3xl"
        />

        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-display font-semibold mb-8 tracking-tight">
              <span className="inline-block overflow-hidden">
                <motion.span
                  className="inline-block"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  Your Complete
                </motion.span>
              </span>
              <br />
              <span className="inline-block overflow-hidden">
                <motion.span
                  className="inline-block"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  Technology{" "}
                  <span className="text-accent">Ecosystem</span>
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl text-black/60 max-w-2xl mb-12 font-body"
            >
              To design and build a seamless technology experience, from custom hardware to intelligent software, engineered for Africa and the world.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col md:flex-row gap-6"
            >
              <Button
                asChild
                className="bg-black hover:bg-black/90 text-white rounded-full px-8 py-6 text-lg shadow-soft"
              >
                <a href="#products">
                  Explore Products
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-2 border-black/10 hover:bg-black/5 text-black rounded-full px-8 py-6 text-lg"
              >
                <a href="#innovation">
                  Learn More
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Tech Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 text-black/40"
        >
          {[
            "HARDWARE",
            "SOFTWARE",
            "AI",
            "OPEN SOURCE",
            "AFRICA FOCUS",
            "SECURITY"
          ].map((tag, index) => (
            <div key={tag} className="flex items-center gap-3 font-mono text-sm">
              <span className="text-accent">0{index + 1} /</span>
              <span>{tag}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
