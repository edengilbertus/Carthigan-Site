"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navigation() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-black/5"
    >
      <nav className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-2xl font-display font-semibold text-black">
          CARTHIGAN
        </div>
        <div className="hidden md:flex items-center space-x-10">
          <a href="#products" className="text-black/60 hover:text-black transition-colors">Products</a>
          <Link href="/supply" className="text-black/60 hover:text-black transition-colors">Supply</Link>
          <Link href="/education" className="text-black/60 hover:text-black transition-colors">Education</Link>
          <a href="#roadmap" className="text-black/60 hover:text-black transition-colors">CarthageOS</a>
          <a href="#innovation" className="text-black/60 hover:text-black transition-colors">Innovation</a>
          <Link href="/blog" className="text-black/60 hover:text-black transition-colors">Pulse</Link>
        </div>
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            className="text-black hover:bg-black/5 rounded-full px-6"
          >
            Log In
          </Button>
          <Button 
            className="bg-black hover:bg-black/90 text-white rounded-full px-6 shadow-soft"
          >
            Sign Up
          </Button>
        </div>
      </nav>
    </motion.header>
  )
}
