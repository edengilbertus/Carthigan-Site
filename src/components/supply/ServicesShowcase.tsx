"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Languages, 
  Code, 
  Cpu, 
  Camera, 
  Music, 
  Printer, 
  ArrowRight,
  CheckCircle,
  Globe,
  Zap
} from "lucide-react"
import Link from "next/link"

const serviceCategories = [
  {
    id: "translation",
    title: "Translation & Language Services",
    description: "Professional translation across multiple languages",
    icon: Languages,
    bgColor: "bg-primary-container",
    textColor: "text-on-primary-container",
    services: [
      "English ↔ Luganda",
      "English ↔ Hebrew", 
      "English ↔ Persian/Farsi",
      "English ↔ French",
      "English ↔ German",
      "Transcription & Subtitling",
      "Software Localization"
    ],
    pricing: "From UGX 5,000/page"
  },
  {
    id: "development",
    title: "Software & App Development",
    description: "Full-stack development and AI solutions",
    icon: Code,
    bgColor: "bg-secondary-container",
    textColor: "text-on-secondary-container",
    services: [
      "React/Angular/Vue.js Apps",
      "Node.js/Python Backend",
      "iOS & Android Apps",
      "Machine Learning Models",
      "API Development",
      "Cloud Infrastructure"
    ],
    pricing: "From UGX 500,000/project"
  },
  {
    id: "engineering",
    title: "Engineering Project Services",
    description: "Technical expertise for complex engineering challenges",
    icon: Cpu,
    bgColor: "bg-tertiary-container",
    textColor: "text-on-tertiary-container",
    services: [
      "PCB Design & Layout",
      "Embedded Systems",
      "3D CAD Modeling",
      "Finite Element Analysis",
      "Control Systems",
      "Firmware Development"
    ],
    pricing: "From UGX 300,000/project"
  },
  {
    id: "creative",
    title: "Creative & Production Services",
    description: "Bringing creative visions to life through media",
    icon: Camera,
    bgColor: "bg-surface-variant",
    textColor: "text-on-surface-variant",
    services: [
      "Photo & Video Editing",
      "Motion Graphics",
      "Technical Writing",
      "Content Creation",
      "Scriptwriting",
      "Visual Effects"
    ],
    pricing: "From UGX 50,000/hour"
  },
  {
    id: "audio",
    title: "Music Production",
    description: "Professional audio recording and production",
    icon: Music,
    bgColor: "bg-error-container",
    textColor: "text-on-error-container",
    services: [
      "Custom Music Composition",
      "Audio Recording",
      "Mixing & Mastering",
      "Sound Design",
      "Podcast Production",
      "Voice-over Services"
    ],
    pricing: "From UGX 100,000/track"
  },
  {
    id: "printing",
    title: "3D Printing & Prototyping",
    description: "Rapid prototyping and custom manufacturing",
    icon: Printer,
    bgColor: "bg-warning-container",
    textColor: "text-on-warning-container",
    services: [
      "FDM 3D Printing",
      "SLA High-Detail Printing",
      "SLS Functional Parts",
      "3D Design & Modeling",
      "Rapid Prototyping",
      "Custom Manufacturing"
    ],
    pricing: "From UGX 2,000/gram"
  }
]

const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "25+", label: "Service Categories" },
  { number: "15+", label: "Languages Supported" },
  { number: "98%", label: "Client Satisfaction" }
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

export function ServicesShowcase() {
  return (
    <section id="services" className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="bg-tertiary/10 text-tertiary mb-4 px-4 py-2 rounded-full">
            🛠️ Professional Services
          </Badge>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-on-surface mb-6">
            Expert Services
          </h2>
          <p className="text-xl text-on-surface/70 max-w-3xl mx-auto">
            Connecting you with skilled professionals across technology, creative, and engineering domains
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-on-surface/60">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {serviceCategories.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className={`${service.bgColor} rounded-3xl p-8 border border-outline-variant/20 hover:shadow-xl transition-all duration-300`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-4 bg-surface/50 rounded-2xl">
                  <service.icon className={`h-8 w-8 ${service.textColor}`} />
                </div>
                <Badge className="bg-surface/20 text-on-surface/70 rounded-full text-xs">
                  {service.pricing}
                </Badge>
              </div>

              <h3 className={`text-xl font-bold ${service.textColor} mb-3`}>
                {service.title}
              </h3>
              
              <p className={`${service.textColor}/70 mb-6 text-sm leading-relaxed`}>
                {service.description}
              </p>

              <div className="space-y-2 mb-6">
                {service.services.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center gap-2">
                    <CheckCircle className={`h-4 w-4 ${service.textColor}/50`} />
                    <span className={`text-sm ${service.textColor}/80`}>{item}</span>
                  </div>
                ))}
              </div>

              <Button
                variant="ghost"
                className={`w-full ${service.textColor} hover:bg-surface/20 rounded-2xl`}
                asChild
              >
                <Link href={service.id === 'translation' ? '/services' : `/supply/services/${service.id}`}>
                  {service.id === 'translation' ? 'Learn More' : 'Request Quote'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Choose Our Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-primary-container rounded-3xl p-12 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-on-primary-container mb-6">
              Why Choose Our Professional Services?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <div className="p-4 bg-primary/20 rounded-2xl mb-4">
                  <Globe className="h-8 w-8 text-on-primary-container" />
                </div>
                <h4 className="font-semibold text-on-primary-container mb-2">Local Expertise</h4>
                <p className="text-on-primary-container/70 text-sm">
                  Understanding of Ugandan market and cultural context
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="p-4 bg-primary/20 rounded-2xl mb-4">
                  <Zap className="h-8 w-8 text-on-primary-container" />
                </div>
                <h4 className="font-semibold text-on-primary-container mb-2">Quick Turnaround</h4>
                <p className="text-on-primary-container/70 text-sm">
                  Fast delivery without compromising on quality
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="p-4 bg-primary/20 rounded-2xl mb-4">
                  <CheckCircle className="h-8 w-8 text-on-primary-container" />
                </div>
                <h4 className="font-semibold text-on-primary-container mb-2">Quality Assured</h4>
                <p className="text-on-primary-container/70 text-sm">
                  Rigorous quality control and client satisfaction guarantee
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-on-primary px-8 py-4 rounded-full"
                asChild
              >
                <Link href="/supply/services/consultation">
                  Free Consultation
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary/5 px-8 py-4 rounded-full"
                asChild
              >
                <Link href="/supply/services">
                  View All Services
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 