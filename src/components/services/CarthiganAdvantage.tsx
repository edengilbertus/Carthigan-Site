"use client"

import { motion } from 'framer-motion'
import { BadgeCheck, Globe, Hourglass, Lock } from 'lucide-react'

const advantages = [
  {
    icon: BadgeCheck,
    title: 'Native-Speaker Accuracy',
    description: 'All translations are performed by qualified, native speakers of the target language, guaranteeing authentic and natural-sounding results.'
  },
  {
    icon: Globe,
    title: 'Cultural Nuance',
    description: 'We understand that language is more than words. Our Kampala-based team provides unparalleled context for English ↔ Luganda translations.'
  },
  {
    icon: Hourglass,
    title: 'Efficient & Timely Delivery',
    description: 'We respect your deadlines. Our streamlined process ensures your projects are delivered on time without compromising on quality.'
  },
  {
    icon: Lock,
    title: 'Secure & Confidential',
    description: 'Your documents and data are safe with us. We adhere to strict confidentiality protocols for all client projects.'
  }
]

export function CarthiganAdvantage() {
  return (
    <section id="why-us" className="py-24 bg-surface-variant text-on-surface-variant">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold">The Carthigan Advantage</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="flex items-center justify-center h-20 w-20 bg-primary/10 rounded-full mb-6 mx-auto">
                <advantage.icon className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
              <p className="text-on-surface-variant/80">{advantage.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 