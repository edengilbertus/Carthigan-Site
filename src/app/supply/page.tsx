import { Metadata } from 'next'
import { SupplyHero } from '@/components/supply/SupplyHero'
import { ProductCategories } from '@/components/supply/ProductCategories'
import { FeaturedProducts } from '@/components/supply/FeaturedProducts'
import { ServicesShowcase } from '@/components/supply/ServicesShowcase'
import { TechStats } from '@/components/supply/TechStats'
import { NewsletterSection } from '@/components/supply/NewsletterSection'

export const metadata: Metadata = {
  title: 'Carthigan Supply - Your Comprehensive Technology Platform | Uganda',
  description: 'Your one-stop platform for electronics, microcontrollers, development tools, 3D printing, and professional tech services. Empowering African innovation with quality components and expert support.',
}

export default function SupplyHomePage() {
  return (
    <main className="min-h-screen bg-surface">
      <SupplyHero />
      <ProductCategories />
      <FeaturedProducts />
      <TechStats />
      <ServicesShowcase />
      <NewsletterSection />
    </main>
  )
} 