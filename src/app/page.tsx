"use client"

import { Navigation } from "@/components/sections/Navigation"
import { Hero } from "@/components/sections/Hero"
import { CorePhilosophy } from "@/components/sections/CorePhilosophy"
import { Services } from "@/components/sections/Services"
import { Pulse } from "@/components/sections/Pulse"
import { Roadmap } from "@/components/sections/Roadmap"
import { Footer } from "@/components/sections/Footer"

export default function Home() {
  return (
    <main className="bg-carthigan-dark">
      <Navigation />
      <Hero />
      <CorePhilosophy />
      <Services />
      <Pulse />
      <Roadmap />
      <Footer />
    </main>
  )
}
