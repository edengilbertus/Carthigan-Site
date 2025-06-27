"use client"

import { motion } from 'framer-motion'
import { UploadCloud, FileText, CheckSquare, Send } from 'lucide-react'

const processSteps = [
  {
    icon: UploadCloud,
    title: '1. Submit Your Project',
    description: 'Tell us about your project and upload your documents or files through our secure portal.'
  },
  {
    icon: FileText,
    title: '2. Receive Your Quote',
    description: "We'll provide a transparent, no-obligation quote and a clear timeline for delivery."
  },
  {
    icon: CheckSquare,
    title: '3. Expert Translation & Review',
    description: 'Our language experts get to work. Every project undergoes a rigorous quality assurance and review process.'
  },
  {
    icon: Send,
    title: '4. Receive Your Files',
    description: 'We deliver your professionally translated and formatted files, ready for you to use.'
  }
]

export function SimpleProcess() {
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
          <h2 className="text-4xl font-bold">Our Simple Process</h2>
        </motion.div>
        <div className="relative">
          {/* Dotted line connector */}
          <div className="hidden md:block absolute top-10 left-1/2 -ml-px h-[calc(100%-5rem)] w-0.5 border-l-2 border-dashed border-outline-variant"></div>

          <div className="grid md:grid-cols-1 gap-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="flex-shrink-0 z-10">
                  <div className="flex items-center justify-center h-20 w-20 bg-secondary-container rounded-full ring-8 ring-surface">
                    <step.icon className="h-10 w-10 text-on-secondary-container" />
                  </div>
                </div>
                <div className={`text-left ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-on-surface/80">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 