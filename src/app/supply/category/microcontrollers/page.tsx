import { Metadata } from "next"
import { SupplyNavigation } from "@/components/supply/SupplyNavigation"
import { SupplyFooter } from "@/components/supply/SupplyFooter"
import { MicrocontrollersCategory } from "@/components/supply/categories/MicrocontrollersCategory"

export const metadata: Metadata = {
  title: "Microcontrollers | Carthigan Supply",
  description: "Premium microcontrollers for your next project. Arduino, ESP32, STM32, and more. Best prices in Uganda with fast delivery.",
  keywords: ["microcontrollers", "Arduino", "ESP32", "STM32", "microcontroller", "embedded", "IoT", "Uganda", "Carthigan"]
}

export default function MicrocontrollersPage() {
  return (
    <main className="min-h-screen bg-surface">
      <SupplyNavigation />
      <MicrocontrollersCategory />
      <SupplyFooter />
    </main>
  )
} 