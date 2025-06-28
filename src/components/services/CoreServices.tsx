"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Gavel, Subtitles, Languages, GraduationCap, Code, ChevronDown, ChevronUp, Globe, Smartphone, Server, Brain, Cloud } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

// Tech stack data structured for future admin management
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

// Development services data structured for admin management
const developmentServices = [
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

// Development process data
const developmentProcess = [
  {
    step: 1,
    title: "Discovery & Strategy",
    description: "We begin by understanding your goals, target audience, and technical requirements. Together, we define the project scope, key features, and a strategic roadmap for success."
  },
  {
    step: 2,
    title: "Design & Prototyping (UI/UX)",
    description: "Our design phase focuses on creating intuitive and engaging user experiences. We develop wireframes and interactive prototypes to visualize the user journey before writing a single line of code."
  },
  {
    step: 3,
    title: "Agile Development & Testing",
    description: "We build your application in iterative sprints, allowing for flexibility and continuous feedback. Each feature undergoes rigorous testing—unit, integration, and user acceptance—to ensure quality and reliability."
  },
  {
    step: 4,
    title: "Deployment & DevOps",
    description: "We handle the entire deployment process using modern DevOps practices. Leveraging cloud infrastructure and CI/CD pipelines, we ensure a smooth, automated, and scalable launch."
  },
  {
    step: 5,
    title: "Maintenance & Support",
    description: "Our partnership doesn't end at launch. We offer ongoing maintenance, monitoring, and support packages to ensure your application remains secure, updated, and performs optimally."
  }
]

const services = [
  {
    icon: Gavel,
    title: 'Document Translation',
    description: 'From legal contracts and technical manuals to marketing materials and academic papers, our native-speaking experts ensure every translation is accurate, context-aware, and maintains the original tone and intent. We handle a wide range of file formats.',
    href: null
  },
  {
    icon: Subtitles,
    title: 'Transcription & Subtitling',
    description: 'We convert your audio and video content into precise, readable text. Our services are perfect for interviews, lectures, podcasts, and video content, providing accurate transcriptions and perfectly synchronized subtitles to broaden your audience reach.',
    href: null
  },
  {
    icon: Languages,
    title: 'Software & App Localization',
    description: 'Go beyond simple translation. We adapt your software, websites, and mobile applications to specific local markets. This includes translating user interfaces, help files, and error messages while respecting cultural norms and local dialects to ensure a seamless user experience.',
    href: null
  },
  {
    icon: GraduationCap,
    title: 'Education & Skills Development',
    description: 'Master electronics, programming, and tech skills with our comprehensive education platform designed for African professionals. From Arduino and IoT to business skills and software development, build your future with world-class courses and hands-on learning.',
    href: '/education'
  },
  {
    icon: Code,
    title: 'Software & App Development',
    description: 'At Carthigan Supply, we don\'t just write code; we build the engines of your business. From robust enterprise systems in Kampala to scalable AI-powered mobile apps reaching a global audience, our full-stack development team delivers secure, high-performance, and future-proof digital solutions.',
    href: null,
    expandable: true
  }
]

function SoftwareDevelopmentDetails({ onGetQuoteClick }: { onGetQuoteClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden"
    >
      <div className="bg-gradient-to-br from-primary-container/50 to-surface-variant p-8 rounded-3xl mt-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-on-surface mb-4">
            Engineering Your Ambition into Digital Reality
          </h2>
          <p className="text-xl text-on-surface-variant max-w-4xl mx-auto mb-8">
            At Carthigan Supply, we don't just write code; we build the engines of your business. From robust enterprise systems in Kampala to scalable AI-powered mobile apps reaching a global audience, our full-stack development team delivers secure, high-performance, and future-proof digital solutions.
          </p>
          <Button onClick={onGetQuoteClick} size="lg" className="bg-primary text-on-primary hover:bg-primary/90 rounded-full px-12 py-6 text-lg">
            Book a Free Technical Consultation
          </Button>
        </div>

        {/* Development Services */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">End-to-End Development Capabilities</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developmentServices.map((service, index) => (
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
        </div>

        {/* Technology Stack */}
        <div className="mb-16">
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

        {/* Development Process */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Your Vision, Our Blueprint</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developmentProcess.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-surface p-6 rounded-3xl border border-outline-variant"
              >
                <div className="flex items-center justify-center h-12 w-12 bg-primary text-on-primary rounded-full mb-4 text-lg font-bold">
                  {process.step}
                </div>
                <h4 className="text-xl font-bold mb-4 text-on-surface">{process.title}</h4>
                <p className="text-on-surface-variant">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4">Let's Build Something Remarkable</h3>
          <p className="text-xl text-on-surface-variant mb-8 max-w-2xl mx-auto">
            Whether you have a detailed specification or just the seed of an idea, our team in Kampala is ready to help you architect and build the technology that will drive your business forward.
          </p>
          <Button onClick={onGetQuoteClick} size="lg" className="bg-primary text-on-primary hover:bg-primary/90 rounded-full px-12 py-6 text-lg">
            Contact Our Development Team
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

export function CoreServices({ onGetQuoteClick }: { onGetQuoteClick?: () => void }) {
  const [expandedService, setExpandedService] = useState<number | null>(null)

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index)
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
          <h2 className="text-4xl font-bold">Our Core Services</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const ServiceCard = (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-surface-variant p-8 rounded-3xl ${
                  service.href || service.expandable ? 'hover:shadow-lg transition-all cursor-pointer' : ''
                } ${expandedService === index ? 'ring-2 ring-primary' : ''}`}
                onClick={() => service.expandable ? toggleService(index) : undefined}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center justify-center h-16 w-16 bg-primary-container rounded-full">
                    <service.icon className="h-8 w-8 text-on-primary-container" />
                  </div>
                  {service.expandable && (
                    <div className="text-primary">
                      {expandedService === index ? (
                        <ChevronUp className="h-6 w-6" />
                      ) : (
                        <ChevronDown className="h-6 w-6" />
                      )}
                    </div>
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-on-surface-variant/80">{service.description}</p>
                {(service.href || service.expandable) && (
                  <div className="mt-4 text-primary font-medium">
                    {service.expandable ? (
                      expandedService === index ? 'Show less' : 'Learn more'
                    ) : (
                      'Learn more →'
                    )}
                  </div>
                )}
              </motion.div>
            )

            return (
              <div key={index} className={index === 4 ? 'md:col-span-2 lg:col-span-3' : ''}>
                {service.href && !service.expandable ? (
                  <Link href={service.href}>
                    {ServiceCard}
                  </Link>
                ) : (
                  ServiceCard
                )}
                
                {/* Expanded Content for Software Development */}
                <AnimatePresence>
                  {service.expandable && expandedService === index && onGetQuoteClick && (
                    <SoftwareDevelopmentDetails onGetQuoteClick={onGetQuoteClick} />
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
} 