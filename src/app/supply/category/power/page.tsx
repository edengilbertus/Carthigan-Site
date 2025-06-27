import { Metadata } from 'next'
import { SupplyNavigation } from '@/components/supply/SupplyNavigation'
import { PowerCategory } from '@/components/supply/categories/PowerCategory'
import { SupplyFooter } from '@/components/supply/SupplyFooter'

export const metadata: Metadata = {
  title: 'Power Components - Voltage Regulators, Converters & Power Management | Carthigan Supply',
  description: 'Browse our comprehensive catalog of power components including voltage regulators, power converters, batteries, and protection circuits. Quality components for reliable power management in Uganda.',
}

export default function PowerComponentsPage() {
  return (
    <main className="min-h-screen bg-surface">
      <SupplyNavigation />
      <PowerCategory />
      <SupplyFooter />
    </main>
  )
}
