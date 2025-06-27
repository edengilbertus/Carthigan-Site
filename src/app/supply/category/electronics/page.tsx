import { Metadata } from 'next'
import { SupplyNavigation } from '@/components/supply/SupplyNavigation'
import { ElectronicsCategory } from '@/components/supply/categories/ElectronicsCategory'
import { SupplyFooter } from '@/components/supply/SupplyFooter'

export const metadata: Metadata = {
  title: 'Electronic Components - Semiconductors, Passive Components & More | Carthigan Supply',
  description: 'Browse our comprehensive catalog of electronic components including ICs, transistors, resistors, capacitors, and more. Quality components for hobbyists, students, and professionals in Uganda.',
}

export default function ElectronicsCategoryPage() {
  return (
    <main className="min-h-screen bg-surface">
      <SupplyNavigation />
      <ElectronicsCategory />
      <SupplyFooter />
    </main>
  )
} 