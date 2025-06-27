import { Metadata } from "next"
import { SupplyNavigation } from "@/components/supply/SupplyNavigation"
import { SupplyFooter } from "@/components/supply/SupplyFooter"
import { EducationCategory } from "@/components/supply/categories/EducationCategory"

export const metadata: Metadata = {
  title: "Educational Kits | Carthigan Supply",
  description: "Comprehensive educational electronics kits for learning and skill development in Uganda. From beginner electronics discovery to advanced IoT and robotics kits - perfect for students, educators, and hobbyists building tomorrow's technology skills.",
  keywords: "educational electronics kits, Arduino starter kit, robotics education, IoT learning, electronics education Uganda, STEM education, programming kits, maker education, technology learning, electronics training",
  openGraph: {
    title: "Educational Electronics Kits | Carthigan Supply",
    description: "Curated educational kits designed to guide learners from first circuits to advanced IoT and robotics projects. Empowering Uganda's next generation of innovators.",
    type: "website",
    url: "https://carthigan.com/supply/category/education",
  },
}

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-background">
      <SupplyNavigation />
      <main className="container mx-auto px-6 py-8">
        <EducationCategory />
      </main>
      <SupplyFooter />
    </div>
  )
}
