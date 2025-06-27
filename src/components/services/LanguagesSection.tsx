"use client"

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'

const featuredLanguages = [
  "English ↔ Luganda",
  "English ↔ Hebrew",
  "English ↔ French",
  "English ↔ German"
]

const additionalLanguages = [
  "Portuguese",
  "Spanish",
  "Tigrinya",
  "Latin (for academic & legal use)"
]

export function LanguagesSection() {
  return (
    <section id="languages" className="py-24 bg-surface-variant text-on-surface-variant">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold">Languages We Master</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold mb-6">Our Featured Pairs:</h3>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {featuredLanguages.map((lang, index) => (
              <Badge key={index} className="text-lg px-6 py-3 rounded-full bg-primary/10 text-primary border border-primary/20">
                {lang}
              </Badge>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold mb-6">Additional Languages:</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalLanguages.map((lang, index) => (
              <Badge key={index} variant="secondary" className="text-md px-4 py-2 rounded-full">
                {lang}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 