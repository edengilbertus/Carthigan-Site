"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function ServicesNavigation() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-background/80 backdrop-blur-lg border-b border-outline-variant/20 sticky top-0 z-50"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3">
            <div className="text-2xl font-display font-bold text-on-surface">
              CARTHIGAN
            </div>
            <Badge variant="secondary" className="border-0 text-xs">
              SERVICES
            </Badge>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-on-surface/80 hover:text-on-surface transition-colors font-medium">
              Services
            </Link>
            <Link href="#why-us" className="text-on-surface/80 hover:text-on-surface transition-colors font-medium">
              Why Us
            </Link>
            <Link href="#process" className="text-on-surface/80 hover:text-on-surface transition-colors font-medium">
              Process
            </Link>
            <Link href="#languages" className="text-on-surface/80 hover:text-on-surface transition-colors font-medium">
              Languages
            </Link>
          </div>

          <Button asChild className="hidden md:flex">
            <Link href="#contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </motion.header>
  )
} 