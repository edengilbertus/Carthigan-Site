"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Cpu, 
  Zap, 
  Wrench, 
  GraduationCap, 
  Printer, 
  Headphones, 
  Wifi, 
  Battery,
  ArrowRight,
  ChevronRight
} from "lucide-react"
import Link from "next/link"

const productCategories = [
  {
    id: "microcontrollers",
    title: "Single-Board Computers & Microcontrollers",
    description: "Powerful development boards and microcontrollers for innovation",
    icon: Cpu,
    itemCount: "45+",
    bgColor: "bg-primary-container",
    textColor: "text-on-primary-container",
    featured: [
      "Orange Pi 5 Plus (4GB, 8GB, 16GB)",
      "ESP32 Development Boards", 
      "STM32 Development Boards",
      "SparkFun RedBoard Series"
    ]
  },
  {
    id: "components",
    title: "Electronic Components",
    description: "Comprehensive collection of semiconductors and passive components",
    icon: Zap,
    itemCount: "800+",
    bgColor: "bg-secondary-container",
    textColor: "text-on-secondary-container",
    featured: [
      "Resistors & Capacitors",
      "Transistors & MOSFETs",
      "LEDs & Diodes",
      "Connectors & Sockets"
    ]
  },
  {
    id: "sensors",
    title: "Sensors & Modules",
    description: "Advanced sensors for environmental monitoring and automation",
    icon: Wifi,
    itemCount: "120+",
    bgColor: "bg-tertiary-container",
    textColor: "text-on-tertiary-container",
    featured: [
      "Temperature & Humidity Sensors",
      "Motion & Proximity Sensors",
      "GPS & Communication Modules",
      "Biometric Sensors"
    ]
  },
  {
    id: "power",
    title: "Power Supplies & Management",
    description: "Reliable power solutions for all your electronic projects",
    icon: Battery,
    itemCount: "60+",
    bgColor: "bg-surface-variant",
    textColor: "text-on-surface-variant",
    featured: [
      "AC/DC Power Adapters",
      "Benchtop Power Supplies",
      "Li-Po & Li-ion Batteries",
      "Voltage Converters"
    ]
  },
  {
    id: "tools",
    title: "Tools & Prototyping Equipment",
    description: "Professional tools for building and testing electronic circuits",
    icon: Wrench,
    itemCount: "150+",
    bgColor: "bg-error-container",
    textColor: "text-on-error-container",
    featured: [
      "Soldering Stations",
      "Digital Multimeters",
      "Oscilloscopes",
      "3D Printers & Filaments"
    ]
  },
  {
    id: "educational",
    title: "Educational Kits",
    description: "Learning kits for students and beginners",
    icon: GraduationCap,
    itemCount: "30+",
    bgColor: "bg-primary-container",
    textColor: "text-on-primary-container",
    featured: [
      "Arduino Starter Kits",
      "Robotics Learning Kits",
      "Electronics Lab Kits",
      "STEM Project Bundles"
    ]
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export function ProductCategories() {
  return (
    <section id="categories" className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="bg-primary/10 text-primary mb-4 px-4 py-2 rounded-full">
            📦 Complete Catalog
          </Badge>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-on-surface mb-6">
            Products & Components
          </h2>
          <p className="text-xl text-on-surface/70 max-w-3xl mx-auto">
            A comprehensive inventory serving Uganda's tech ecosystem—from hobby projects to professional development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {productCategories.map((category, index) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className={`${category.bgColor} rounded-3xl p-8 border border-outline-variant/20 hover:shadow-xl transition-all duration-300`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`p-4 bg-surface/50 rounded-2xl`}>
                  <category.icon className={`h-8 w-8 ${category.textColor}`} />
                </div>
                <Badge className="bg-surface/20 text-on-surface/70 rounded-full">
                  {category.itemCount}
                </Badge>
              </div>

              <h3 className={`text-xl font-bold ${category.textColor} mb-3`}>
                {category.title}
              </h3>
              
              <p className={`${category.textColor}/70 mb-6 text-sm leading-relaxed`}>
                {category.description}
              </p>

              <div className="space-y-2 mb-6">
                {category.featured.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center gap-2">
                    <ChevronRight className={`h-4 w-4 ${category.textColor}/50`} />
                    <span className={`text-sm ${category.textColor}/80`}>{item}</span>
                  </div>
                ))}
              </div>

              <Button
                variant="ghost"
                className={`w-full ${category.textColor} hover:bg-surface/20 rounded-2xl`}
                asChild
              >
                <Link href={`/supply/category/${category.id}`}>
                  Explore Category
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-primary-container rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-on-primary-container mb-4">
              Can't Find What You Need?
            </h3>
            <p className="text-on-primary-container/70 mb-8 max-w-2xl mx-auto">
              Our procurement team can source specialized components and custom solutions for your projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-on-primary px-8 py-4 rounded-full"
                asChild
              >
                <Link href="/supply/request-quote">
                  Request Custom Quote
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary/5 px-8 py-4 rounded-full"
                asChild
              >
                <Link href="/supply/contact">
                  Contact Procurement Team
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 