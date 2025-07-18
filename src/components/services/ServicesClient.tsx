"use client"

import { useState } from 'react'
import { ServicesNavigation } from '@/components/services/ServicesNavigation'
import { CoreServices } from '@/components/services/CoreServices'
import { CarthiganAdvantage } from '@/components/services/CarthiganAdvantage'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const featuredLanguages = [
  "English ↔ Luganda",
  "English ↔ Hebrew",
  "English ↔ Persian/Farsi",
  "English ↔ French",
  "English ↔ German"
]

const additionalLanguages = [
  "Portuguese",
  "Spanish",
  "Tigrinya",
  "Latin (for academic & legal use)"
]

function LanguagesSection() {
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

function FinalCallToAction({ onGetQuoteClick }: { onGetQuoteClick: () => void }) {
  return (
    <section id="contact" className="py-32 bg-primary-container text-on-primary-container text-center">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-6"
        >
          Ready to Transform Your Business?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl max-w-2xl mx-auto mb-10"
        >
          From breaking language barriers to building cutting-edge software and empowering your team with new skills. Let's discuss how Carthigan can accelerate your growth and innovation.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button size="lg" onClick={onGetQuoteClick} className="bg-primary text-on-primary hover:bg-primary/90 rounded-full px-12 py-8 text-lg">
            Start Your Project Today
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

function QuoteModal({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (isOpen: boolean) => void }) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert('Thank you! Your quote request has been received. We will contact you soon.')
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Get a Free Quote</DialogTitle>
          <DialogDescription>
            Fill out the form below and we'll get back to you with a no-obligation quote.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="full_name" className="text-right">Full Name</Label>
              <Input id="full_name" name="full_name" className="col-span-3" required />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">Email</Label>
              <Input id="email" name="email" type="email" className="col-span-3" required />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="service_type" className="text-right">Service Type</Label>
              <Select name="service_type">
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Document Translation">Document Translation</SelectItem>
                  <SelectItem value="Transcription & Subtitling">Transcription & Subtitling</SelectItem>
                  <SelectItem value="Software & App Localization">Software & App Localization</SelectItem>
                  <SelectItem value="Software & App Development">Software & App Development</SelectItem>
                  <SelectItem value="Education & Skills Development">Education & Skills Development</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="source_language" className="text-right">Source Language</Label>
              <Input id="source_language" name="source_language" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="target_language" className="text-right">Target Language</Label>
              <Input id="target_language" name="target_language" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="details" className="text-right">Project Details</Label>
              <Textarea id="details" name="details" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="file" className="text-right">Upload File</Label>
              <Input id="file" name="file" type="file" className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Submit Request</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default function ServicesClient() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  return (
    <div className="bg-background text-on-surface">
      <ServicesNavigation />
      <main>
        <div id="hero" className="text-center py-40 bg-primary-container text-on-primary-container">
          <h1 className="text-6xl font-bold">Building Bridges, Breaking Barriers.</h1>
          <p className="text-xl mt-4 max-w-3xl mx-auto">
            Carthigan Supply offers comprehensive services to connect your business with global opportunities. From professional language services and software development to education and skills training, we empower you to reach new markets, build innovative solutions, and develop future-ready talent.
          </p>
          <Button size="lg" onClick={() => setIsQuoteModalOpen(true)} className="mt-8 bg-primary text-on-primary hover:bg-primary/90 rounded-full px-12 py-8 text-lg">
            Get a Free Quote
          </Button>
        </div>

        <CoreServices onGetQuoteClick={() => setIsQuoteModalOpen(true)} />
        <CarthiganAdvantage />
        <LanguagesSection />
        <FinalCallToAction onGetQuoteClick={() => setIsQuoteModalOpen(true)} />
      </main>
      
      <QuoteModal isOpen={isQuoteModalOpen} setIsOpen={setIsQuoteModalOpen} />
    </div>
  )
} 