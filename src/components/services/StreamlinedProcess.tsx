"use client"

import { motion } from 'framer-motion'
import { Search, FileText, Settings, Award } from 'lucide-react'

const processSteps = [
  {
    icon: Search,
    title: '1. Discovery & Consultation',
    description: 'We start by listening to your vision and defining the goals of your project.'
  },
  {
    icon: FileText,
    title: '2. Strategy & Proposal',
    description: "We deliver a clear, transparent proposal with a strategic plan, timeline, and quote."
  },
  {
    icon: Settings,
    title: '3. Execution & Collaboration',
    description: 'Our experts get to work, providing regular updates and collaborating with you at every stage.'
  },
  {
    icon: Award,
    title: '4. Delivery & Support',
    description: 'We deliver the final product to the highest standard and offer ongoing support to ensure your success.'
  }
]

export function StreamlinedProcess() {
  return (
    <section id="process" className="py-24 bg-surface text-on-surface">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold">Our Streamlined Process</h2>
        </motion.div>
        <div className="relative">
          {/* Dotted line connector for larger screens */}
          <div className="hidden md:block absolute top-10 left-0 right-0 mx-auto w-0.5 h-[calc(100%-5rem)] bg-gradient-to-b from-transparent via-outline-variant to-transparent"></div>

          <div className="grid md:grid-cols-1 gap-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left"
              >
                <div className="md:w-1/2 flex justify-center md:justify-end md:pr-16 order-2 md:order-1">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                    <p className="text-on-surface/80">{step.description}</p>
                  </div>
                </div>
                <div className="md:w-1/2 flex justify-center md:justify-start md:pl-16 order-1 md:order-2">
                  <div className="flex-shrink-0 z-10">
                    <div className="flex items-center justify-center h-20 w-20 bg-secondary-container rounded-full ring-8 ring-surface">
                      <step.icon className="h-10 w-10 text-on-secondary-container" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 