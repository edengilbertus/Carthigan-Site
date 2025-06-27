import { Metadata } from "next"
import { SupplyNavigation } from "@/components/supply/SupplyNavigation"
import { SupplyFooter } from "@/components/supply/SupplyFooter"
import { ToolsCategory } from "@/components/supply/categories/ToolsCategory"

export const metadata: Metadata = {
  title: "Tools & Equipment | Carthigan Supply",
  description: "Essential tools and equipment for electronics work in Uganda. From soldering stations to multimeters, safety gear to prototyping tools - everything you need for professional electronics development, repair, and education.",
  keywords: "electronics tools, soldering station, multimeter, oscilloscope, Uganda electronics, Kampala tools, electronics equipment, testing instruments, safety equipment, prototyping tools",
  openGraph: {
    title: "Professional Electronics Tools & Equipment | Carthigan Supply",
    description: "Comprehensive selection of electronics tools and equipment for professionals, students, and hobbyists in Uganda. Quality tools for reliable results.",
    images: ["/images/og/tools-category.jpg"],
  },
}

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <SupplyNavigation />
      <main className="pt-16">
        <ToolsCategory />
      </main>
      <SupplyFooter />
    </div>
  )
}
