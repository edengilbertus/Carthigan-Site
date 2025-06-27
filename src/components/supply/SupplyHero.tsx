"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Truck, Award, Cpu, Wrench, Code, Zap } from "lucide-react"
import Link from "next/link"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
}

const valueProps = [
  {
    icon: Truck,
    title: "Same-Day Delivery",
    description: "Free delivery within Kampala",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "12-month warranty on all products",
  },
  {
    icon: Award,
    title: "Local Support",
    description: "Expert technical assistance",
  },
]

const techCategories = [
  { icon: Cpu, label: "Microcontrollers", count: "45+" },
  { icon: Wrench, label: "Tools & Equipment", count: "120+" },
  { icon: Code, label: "Dev Services", count: "25+" },
  { icon: Zap, label: "Components", count: "800+" },
]

export function SupplyHero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary-container to-secondary-container overflow-hidden">
      {/* Material 3 Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-tertiary/5 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <Badge className="bg-primary text-on-primary px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                🚀 Now Live in Kampala, Uganda
              </Badge>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-display font-bold text-on-surface leading-tight">
                Your Comprehensive
                <span className="text-primary block mt-2">
                  Supply Platform
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-on-surface/70 max-w-2xl font-light leading-relaxed">
                A detailed catalog of products and services for Uganda's burgeoning tech and creative sectors. 
                <span className="text-primary font-medium"> Empowering innovation across Africa.</span>
              </p>
            </motion.div>

            {/* Value Propositions */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {valueProps.map((prop, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-surface-variant/50 rounded-2xl backdrop-blur-sm border border-outline-variant/20"
                >
                  <div className="p-2 bg-primary/10 rounded-xl">
                    <prop.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-on-surface text-sm">{prop.title}</div>
                    <div className="text-on-surface/60 text-xs">{prop.description}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-on-primary px-8 py-6 text-lg rounded-full shadow-lg"
                asChild
              >
                <Link href="#categories">
                  Explore Catalog
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary/5 px-8 py-6 text-lg rounded-full"
                asChild
              >
                <Link href="#services">Browse Services</Link>
              </Button>
            </motion.div>

            {/* Tech Categories Overview */}
            <motion.div variants={itemVariants} className="pt-8 border-t border-outline-variant/20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {techCategories.map((category, index) => (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-2xl mb-2">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-lg font-bold text-on-surface">{category.count}</div>
                    <div className="text-sm text-on-surface/60">{category.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Content - Interactive Product Showcase */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            {/* Main Product Card */}
            <div className="bg-surface rounded-3xl shadow-2xl p-8 border border-outline-variant/20 backdrop-blur-sm">
              <div className="flex justify-between items-start mb-6">
                <Badge className="bg-error text-on-error rounded-full px-3 py-1">
                  FEATURED
                </Badge>
                <div className="text-right">
                  <div className="text-sm text-on-surface/60">Starting from</div>
                  <div className="text-3xl font-bold text-primary">UGX 245K</div>
                </div>
              </div>
              
              <div className="aspect-[4/3] bg-primary-container rounded-2xl mb-6 flex items-center justify-center">
                <div className="text-6xl">🔧</div>
              </div>
              
              <h3 className="text-2xl font-bold text-on-surface mb-2">
                Orange Pi 5 Plus Series
              </h3>
              <p className="text-on-surface/70 mb-6">
                Powerful single-board computers perfect for AI projects, edge computing, and IoT applications.
              </p>
              
              <Button className="w-full bg-primary hover:bg-primary/90 text-on-primary rounded-2xl py-3">
                View Collection
              </Button>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-8 -right-8 bg-secondary text-on-secondary rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold">800+</div>
                <div className="text-sm opacity-80">Components</div>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-8 bg-tertiary text-on-tertiary rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold">25+</div>
                <div className="text-sm opacity-80">Services</div>
              </div>
            </div>

            {/* Student Discount Banner */}
            <div className="mt-8 bg-gradient-to-r from-error to-error-container rounded-2xl p-6 text-center">
              <div className="text-on-error font-semibold mb-1">Student Discount Available</div>
              <div className="text-2xl font-bold text-on-error mb-2">15% OFF</div>
              <div className="text-on-error/80 text-sm">With valid university ID verification</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 