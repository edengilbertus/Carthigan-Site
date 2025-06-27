"use client"

import { useState, useEffect } from 'react'
import { Metadata } from 'next'
import { ServicesNavigation } from '@/components/services/ServicesNavigation'
import { CoreServices } from '@/components/services/CoreServices'
import { CarthiganAdvantage } from '@/components/services/CarthiganAdvantage'
import { SimpleProcess } from '@/components/services/SimpleProcess'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { submitQuoteRequest } from './actions'
import { useFormState } from 'react-dom'
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'Translation & Language Services | Carthigan',
  description: 'Professional, culturally-aware language services to connect your business, research, or project with a global and local Ugandan audience.',
}

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
          Ready to Reach a New Audience?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl max-w-2xl mx-auto mb-10"
        >
          Let's break down the language barriers together. Contact us today for custom projects or specialized language needs.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button size="lg" onClick={onGetQuoteClick} className="bg-primary text-on-primary hover:bg-primary/90 rounded-full px-12 py-8 text-lg">
            Contact Us for a Custom Project
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

function QuoteModal({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (isOpen: boolean) => void }) {
    const { toast } = useToast()
    const [state, formAction] = useFormState(submitQuoteRequest, { message: '', errors: {} })
  
    useEffect(() => {
      if (state.message === 'success') {
        toast({ title: "Success!", description: "Your quote request has been submitted." })
        setIsOpen(false)
      } else if (state.message === 'error') {
        toast({ variant: "destructive", title: "Error", description: "Something went wrong. Please try again." })
      }
    }, [state, toast, setIsOpen])
  
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle className="text-2xl">Get a Free Quote</DialogTitle>
            <DialogDescription>
              Fill out the form below and we'll get back to you with a no-obligation quote.
            </DialogDescription>
          </DialogHeader>
          <form action={formAction}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="full_name" className="text-right">Full Name</Label>
                <Input id="full_name" name="full_name" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">Email</Label>
                <Input id="email" name="email" type="email" className="col-span-3" />
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

export default function ServicesPage() {
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  return (
    <div className="bg-background text-on-surface">
      <ServicesNavigation />
      <main>
        <div id="hero" className="text-center py-40 bg-primary-container text-on-primary-container">
          <h1 className="text-6xl font-bold">Bridging Worlds, One Word at a Time.</h1>
          <p className="text-xl mt-4 max-w-3xl mx-auto">Carthigan Supply offers professional, culturally-aware language services to connect your business, research, or project with a global and local Ugandan audience. We ensure your message is not just translated, but truly understood.</p>
          <Button size="lg" onClick={() => setIsQuoteModalOpen(true)} className="mt-8 bg-primary text-on-primary hover:bg-primary/90 rounded-full px-12 py-8 text-lg">
            Get a Free Quote
          </Button>
        </div>

        <CoreServices />
        <CarthiganAdvantage />
        <SimpleProcess />
        <LanguagesSection />
        <FinalCallToAction onGetQuoteClick={() => setIsQuoteModalOpen(true)} />
      </main>
      <QuoteModal isOpen={isQuoteModalOpen} setIsOpen={setIsQuoteModalOpen} />
      <Toaster />
      {/* <ServicesFooter /> */}
    </div>
  )
}