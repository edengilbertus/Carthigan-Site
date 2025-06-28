"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Gavel, Subtitles, Languages, GraduationCap, Code, ChevronDown, ChevronUp, Globe, Smartphone, Server, Brain, Cloud, Cpu, CircuitBoard, Box, Zap, Settings, Camera, Video, FileText, Film, Music, Printer, Monitor, Wrench, Theater } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

// Main service categories for the hub
const serviceCategories = [
  {
    id: 'digital',
    icon: Monitor,
    title: 'Digital & Software Solutions',
    description: 'We build the digital engines of your business, from web platforms to AI-powered mobile apps.',
    services: 'Full-Stack Web, Mobile Apps, Backend & API, AI/ML, Cloud & DevOps'
  },
  {
    id: 'engineering',
    icon: Wrench,
    title: 'Hardware & Engineering Services', 
    description: 'Turn your concepts into reality with our expert hardware engineering and design support.',
    services: 'PCB Design, Embedded Systems, 3D CAD Modeling, FEA, Control Systems'
  },
  {
    id: 'language',
    icon: Languages,
    title: 'Language & Content Services',
    description: 'We ensure your message is not just translated, but truly understood across cultures.',
    services: 'Document Translation, Transcription, Software Localization, Technical Writing, Content Creation'
  },
  {
    id: 'creative',
    icon: Theater,
    title: 'Creative Production & Fabrication',
    description: 'From stunning visuals and sound to physical prototypes, we bring your creative vision to life.',
    services: 'Photo/Video Editing, Motion Graphics, Music Production, 3D Printing'
  }
]

// Digital & Software Solutions detailed services
const digitalServices = [
  {
    icon: Globe,
    title: "Full-Stack Web Development",
    description: "We architect and build dynamic, responsive, and secure web applications tailored to your business needs. From complex enterprise portals and SaaS platforms to engaging customer-facing dashboards, we leverage a comprehensive stack to create exceptional, data-driven user experiences."
  },
  {
    icon: Smartphone,
    title: "Native & Cross-Platform Mobile Apps",
    description: "We bring your services to your users' fingertips. We specialize in creating high-performance, beautiful native apps for iOS (Swift) and Android (Kotlin). For projects requiring broad reach and efficiency, we develop robust cross-platform applications using Flutter and React Native."
  },
  {
    icon: Server,
    title: "Backend, API & Systems Architecture",
    description: "The backbone of any powerful application. Our team designs and builds scalable, secure, and efficient server-side logic and microservices. We develop robust RESTful and GraphQL APIs to ensure seamless data communication between your frontend, mobile apps, and critical third-party services."
  },
  {
    icon: Brain,
    title: "AI & Machine Learning Solutions",
    description: "Unlock the power of your data. We design, train, and deploy custom machine learning models to solve complex challenges. Our expertise includes predictive analytics, natural language processing (NLP) for chatbots, computer vision for image analysis, and recommendation engines."
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure & DevOps",
    description: "We build for scale and reliability. Our team are experts in deploying and managing applications on leading cloud platforms. We implement modern DevOps practices, including CI/CD pipelines, containerization, and infrastructure-as-code to ensure your application is scalable, secure, and always available."
  }
]

// Hardware & Engineering Services detailed services
const engineeringServices = [
  {
    icon: CircuitBoard,
    title: "PCB Design & Layout",
    description: "From simple breakout boards to complex multi-layered designs, we provide professional Printed Circuit Board (PCB) design services, optimized for manufacturing, signal integrity, and performance."
  },
  {
    icon: Cpu,
    title: "Embedded Systems & Firmware",
    description: "We develop the low-level code that brings your hardware to life. Our expertise in C/C++ and real-time operating systems (RTOS) ensures your embedded devices are responsive, efficient, and reliable."
  },
  {
    icon: Box,
    title: "3D CAD Modeling",
    description: "Turn your concepts into detailed, manufacturable 3D models. We design custom enclosures, mechanical parts, and product assemblies ready for 3D printing or traditional manufacturing."
  },
  {
    icon: Zap,
    title: "Finite Element Analysis (FEA)",
    description: "We digitally simulate how your mechanical designs will behave under real-world stress, strain, and thermal loads, allowing for optimization and validation before a single part is made."
  },
  {
    icon: Settings,
    title: "Control Systems Design",
    description: "We design and implement feedback control systems for robotics, automation, and process control, ensuring your systems are stable, accurate, and perform to specification."
  }
]

// Language & Content Services detailed services
const languageServices = [
  {
    icon: Gavel,
    title: 'Document Translation',
    description: 'From legal contracts and technical manuals to marketing materials and academic papers, our native-speaking experts ensure every translation is accurate, context-aware, and maintains the original tone and intent. We handle a wide range of file formats.'
  },
  {
    icon: Subtitles,
    title: 'Transcription & Subtitling',
    description: 'We convert your audio and video content into precise, readable text. Our services are perfect for interviews, lectures, podcasts, and video content, providing accurate transcriptions and perfectly synchronized subtitles to broaden your audience reach.'
  },
  {
    icon: Languages,
    title: 'Software & App Localization',
    description: 'Go beyond simple translation. We adapt your software, websites, and mobile applications to specific local markets. This includes translating user interfaces, help files, and error messages while respecting cultural norms and local dialects to ensure a seamless user experience.'
  },
  {
    icon: FileText,
    title: "Technical Writing & Content Creation",
    description: "Clear, concise communication is key. We produce high-quality technical documentation, user manuals, whitepapers, blog content, and marketing copy that effectively communicates with your target audience."
  }
]

// Creative Production & Fabrication detailed services
const creativeServices = [
  {
    icon: Camera,
    title: "Photo & Video Editing",
    description: "From product photography retouching to full-scale video production, our creative team delivers polished, professional content that captures your brand's essence and engages your audience."
  },
  {
    icon: Video,
    title: "Motion Graphics & Visual Effects",
    description: "Elevate your video content with dynamic motion graphics, logo animations, and stunning visual effects (VFX) that explain complex ideas and captivate viewers."
  },
  {
    icon: Film,
    title: "Scriptwriting",
    description: "A great video starts with a great script. We develop compelling narratives and clear, concise scripts for commercials, corporate videos, tutorials, and documentaries."
  },
  {
    icon: Music,
    title: "Music Production",
    price: "From UGX 100,000/track",
    description: "Professional audio recording, composition, and post-production.",
    features: ["Custom Music Composition", "Audio Recording & Mixing", "Mastering & Sound Design", "Podcast & Voice-over Production"]
  },
  {
    icon: Printer,
    title: "3D Printing & Prototyping",
    price: "From UGX 2,000/gram",
    description: "Rapid prototyping and custom part manufacturing.",
    features: ["FDM 3D Printing (Functional Prototypes)", "SLA High-Detail Printing (Visual Models)", "SLS Functional Parts (Durable Nylon)", "3D Design for Manufacturing"]
  }
]

// Technology stack data
const techStack = {
  frontend: {
    title: "Frontend Development",
    technologies: ["React", "Angular", "Vue.js", "TypeScript", "Next.js", "Svelte", "Redux", "HTML5", "CSS3/SASS"]
  },
  backend: {
    title: "Backend Development", 
    technologies: ["Node.js", "Express.js", "NestJS", "Python", "Django", "Flask", "Java", "Spring Boot", "C#", ".NET", "Go (Golang)", "PHP", "Laravel"]
  },
  mobile: {
    title: "Mobile App Development",
    technologies: ["Swift (iOS)", "Kotlin (Android)", "React Native", "Flutter", "Jetpack Compose", "SwiftUI"]
  },
  ai: {
    title: "AI & Machine Learning",
    technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "Keras", "OpenAI API Integration", "Computer Vision (OpenCV)"]
  },
  databases: {
    title: "Databases & Data Storage",
    technologies: ["PostgreSQL", "MySQL", "Microsoft SQL Server", "MongoDB", "Redis", "Firebase", "Amazon S3"]
  },
  cloud: {
    title: "Cloud Infrastructure & DevOps",
    technologies: ["AWS (Amazon Web Services)", "Microsoft Azure", "Google Cloud Platform (GCP)", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Terraform", "Nginx"]
  },
  api: {
    title: "API Design & Communication",
    technologies: ["RESTful APIs", "GraphQL", "gRPC", "WebSockets", "JSON"]
  }
}

// Development process data
const developmentProcess = [
  {
    step: 1,
    title: "Discovery & Consultation",
    description: "We start by listening to your vision and defining the goals of your project."
  },
  {
    step: 2,
    title: "Strategy & Proposal",
    description: "We deliver a clear, transparent proposal with a strategic plan, timeline, and quote."
  },
  {
    step: 3,
    title: "Execution & Collaboration",
    description: "Our experts get to work, providing regular updates and collaborating with you at every stage."
  },
  {
    step: 4,
    title: "Delivery & Support",
    description: "We deliver the final product to the highest standard and offer ongoing support to ensure your success."
  }
]

function CategoryDetailSection({ category, services, onGetQuoteClick }: { 
  category: any, 
  services: any[], 
  onGetQuoteClick: () => void 
}) {
  const getServiceGrid = () => {
    if (category.id === 'creative') {
      return (
        <div className="space-y-8">
          {/* Regular creative services */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-surface p-6 rounded-3xl border border-outline-variant"
              >
                <div className="flex items-center justify-center h-16 w-16 bg-tertiary-container rounded-full mb-6">
                  <service.icon className="h-8 w-8 text-on-tertiary-container" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-on-surface">{service.title}</h4>
                <p className="text-on-surface-variant">{service.description}</p>
              </motion.div>
            ))}
          </div>
          
          {/* Advanced production services */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.slice(3).map((service, index) => (
              <motion.div
                key={index + 3}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                className="bg-surface p-8 rounded-3xl border border-outline-variant"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center h-16 w-16 bg-primary-container rounded-full">
                    <service.icon className="h-8 w-8 text-on-primary-container" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-on-surface">{service.title}</h4>
                    {service.price && <p className="text-lg text-primary font-semibold">{service.price}</p>}
                  </div>
                </div>
                <p className="text-on-surface-variant mb-6">{service.description}</p>
                {service.features && (
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-on-surface-variant">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <Button onClick={onGetQuoteClick} className="w-full bg-primary text-on-primary hover:bg-primary/90 rounded-full py-3">
                  {service.title.includes('Music') ? 'Request an Audio Quote' : 'Request a 3D Print Quote'}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      )
    }

    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-surface p-6 rounded-3xl border border-outline-variant"
          >
            <div className="flex items-center justify-center h-16 w-16 bg-primary-container rounded-full mb-6">
              <service.icon className="h-8 w-8 text-on-primary-container" />
            </div>
            <h4 className="text-xl font-bold mb-4 text-on-surface">{service.title}</h4>
            <p className="text-on-surface-variant">{service.description}</p>
          </motion.div>
        ))}
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden"
    >
      <div className="bg-gradient-to-br from-primary-container/50 to-surface-variant p-8 rounded-3xl mt-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-on-surface mb-4">
            {category.title}
          </h3>
          <p className="text-xl text-on-surface-variant max-w-3xl mx-auto mb-8">
            {category.description}
          </p>
          <Button onClick={onGetQuoteClick} size="lg" className="bg-primary text-on-primary hover:bg-primary/90 rounded-full px-12 py-6 text-lg">
            Get a Quote
          </Button>
        </div>

        {getServiceGrid()}
      </div>
    </motion.div>
  )
}

export function CoreServices({ onGetQuoteClick }: { onGetQuoteClick?: () => void }) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId)
  }

  const getServicesForCategory = (categoryId: string) => {
    switch (categoryId) {
      case 'digital': return digitalServices
      case 'engineering': return engineeringServices
      case 'language': return languageServices
      case 'creative': return creativeServices
      default: return []
    }
  }

  return (
    <section id="services" className="py-24 bg-surface text-on-surface">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Service Categories</h2>
          <p className="text-xl text-on-surface-variant max-w-3xl mx-auto">
            Carthigan Supply offers a complete ecosystem of services designed to power innovation. From professional language and software solutions to hands-on engineering and creative production, we are your strategic partner in Kampala.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {serviceCategories.map((category, index) => (
            <div key={category.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-surface-variant p-8 rounded-3xl hover:shadow-lg transition-all cursor-pointer ${
                  expandedCategory === category.id ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => toggleCategory(category.id)}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center h-16 w-16 bg-primary-container rounded-full">
                      <category.icon className="h-8 w-8 text-on-primary-container" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-on-surface">{category.title}</h3>
                    </div>
                  </div>
                  <div className="text-primary">
                    {expandedCategory === category.id ? (
                      <ChevronUp className="h-6 w-6" />
                    ) : (
                      <ChevronDown className="h-6 w-6" />
                    )}
                  </div>
                </div>
                
                <p className="text-on-surface-variant mb-4">{category.description}</p>
                
                <div className="text-sm text-primary font-medium">
                  <span className="opacity-75">Includes: </span>{category.services}
                </div>
                
                <div className="mt-4 text-primary font-medium">
                  {expandedCategory === category.id ? 'Show less' : 'Learn more'}
                </div>
              </motion.div>
              
              {/* Expanded Content */}
              <AnimatePresence>
                {expandedCategory === category.id && onGetQuoteClick && (
                  <CategoryDetailSection 
                    category={category}
                    services={getServicesForCategory(category.id)}
                    onGetQuoteClick={onGetQuoteClick}
                  />
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Technology Stack - Shows when Digital category is expanded */}
        <AnimatePresence>
          {expandedCategory === 'digital' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mt-16"
            >
              <div className="bg-gradient-to-br from-primary-container/30 to-surface-variant/50 p-8 rounded-3xl">
                <h3 className="text-3xl font-bold text-center mb-12">The Technologies We Master</h3>
                <div className="space-y-8">
                  {Object.entries(techStack).map(([key, category]) => (
                    <div key={key} className="bg-surface p-6 rounded-3xl border border-outline-variant">
                      <h4 className="text-xl font-bold mb-4 text-on-surface">{category.title}</h4>
                      <div className="flex flex-wrap gap-3">
                        {category.technologies.map((tech, index) => (
                          <Badge key={index} variant="secondary" className="px-4 py-2 rounded-full text-sm">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Development Process - Shows when any category is expanded */}
        <AnimatePresence>
          {expandedCategory && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-16"
            >
              <div className="bg-gradient-to-br from-secondary-container/30 to-surface-variant/50 p-8 rounded-3xl">
                <h3 className="text-3xl font-bold text-center mb-12">Your Vision, Our Blueprint</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {developmentProcess.map((process, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-surface p-6 rounded-3xl border border-outline-variant text-center"
                    >
                      <div className="flex items-center justify-center h-12 w-12 bg-primary text-on-primary rounded-full mb-4 text-lg font-bold mx-auto">
                        {process.step}
                      </div>
                      <h4 className="text-xl font-bold mb-4 text-on-surface">{process.title}</h4>
                      <p className="text-on-surface-variant">{process.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
} 