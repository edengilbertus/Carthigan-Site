import { Metadata } from 'next'
import { SupplyNavigation } from '@/components/supply/SupplyNavigation'
import { DevBoardsCategory } from '@/components/supply/categories/DevBoardsCategory'
import { SupplyFooter } from '@/components/supply/SupplyFooter'

export const metadata: Metadata = {
  title: 'Development Boards - Uganda\'s Electronics Supply Platform | Carthigan',
  description: 'Comprehensive selection of development boards including Arduino, ESP32, Orange Pi, and specialty AI boards. Perfect for IoT, robotics, and embedded systems development in Uganda.',
  keywords: 'development boards, Arduino, ESP32, Orange Pi, microcontrollers, SBC, single board computers, IoT boards, robotics, embedded systems, Uganda electronics',
}

export default function DevBoardsCategoryPage() {
  return (
    <main className="min-h-screen bg-surface">
      <SupplyNavigation />
      <DevBoardsCategory />
      <SupplyFooter />
    </main>
  )
} 