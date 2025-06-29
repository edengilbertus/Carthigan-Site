import { Metadata } from 'next'
import { ThreeDPrintingCategory } from '@/components/supply/categories/ThreeDPrintingCategory'

export const metadata: Metadata = {
  title: '3D Printing - Printers, Filaments, Tools & Accessories | Carthigan Supply',
  description: 'Professional 3D printing solutions including FDM and resin printers, high-quality filaments, tools, and accessories. From prototyping to production, we have everything for your additive manufacturing needs.',
  keywords: '3D printing, FDM printers, resin printers, PLA filament, ABS filament, PETG, 3D printer tools, additive manufacturing, prototyping, Uganda',
}

export default function ThreeDPrintingCategoryPage() {
  return (
    <main className="container mx-auto px-6 py-8">
      <ThreeDPrintingCategory />
    </main>
  )
}
