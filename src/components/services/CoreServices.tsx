"use client"

import { motion } from 'framer-motion'
import { Gavel, Subtitles, Languages } from 'lucide-react'

const services = [
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
  }
]

export function CoreServices() {
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
          <h2 className="text-4xl font-bold">Our Core Language Services</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface-variant p-8 rounded-3xl"
            >
              <div className="flex items-center justify-center h-16 w-16 bg-primary-container rounded-full mb-6">
                <service.icon className="h-8 w-8 text-on-primary-container" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-on-surface-variant/80">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 