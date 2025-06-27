import { Metadata } from 'next'
import { SupplyNavigation } from '@/components/supply/SupplyNavigation'
import { SensorsCategory } from '@/components/supply/categories/SensorsCategory'
import { SupplyFooter } from '@/components/supply/SupplyFooter'

export const metadata: Metadata = {
  title: 'Sensors & Modules - Environmental, Motion, Wireless & More | Carthigan Supply',
  description: 'Browse our comprehensive catalog of sensors and modules including environmental sensors, motion detectors, wireless modules, and specialized measurement equipment. Professional-grade sensors for research, industrial, and educational applications.',
}

export default function SensorsCategoryPage() {
  return (
    <main className="min-h-screen bg-surface">
      <SupplyNavigation />
      <SensorsCategory />
      <SupplyFooter />
    </main>
  )
}
