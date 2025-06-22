import { Metadata } from 'next'
import { SupplyNavigation } from '@/components/supply/SupplyNavigation'
import { SupplyHero } from '@/components/supply/SupplyHero'
import { FeaturedCategories } from '@/components/supply/FeaturedCategories'
import { PopularProducts } from '@/components/supply/PopularProducts'
import { SupplyFooter } from '@/components/supply/SupplyFooter'

export const metadata: Metadata = {
  title: 'Carthigan Supply - Electronics & Tech Components for Africa',
  description: 'Your premier destination for electronics, development boards, tools, and educational materials. Powering African innovation.',
}

export default function SupplyHomePage() {
  return (
    <main className="min-h-screen bg-white">
      <SupplyNavigation />
      <SupplyHero />
      <FeaturedCategories />
      <PopularProducts />
      <SupplyFooter />
    </main>
  )
} 