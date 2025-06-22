import { Metadata } from 'next'
import { SupplyNavigation } from '@/components/supply/SupplyNavigation'
import { SupplyFooter } from '@/components/supply/SupplyFooter'
import { ProductsGrid } from '@/components/supply/ProductsGrid'
import { ProductFilters } from '@/components/supply/ProductFilters'

export const metadata: Metadata = {
  title: 'All Products - Carthigan Supply',
  description: 'Browse our complete catalog of electronics, development boards, tools, and educational materials.',
}

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <SupplyNavigation />
      
      {/* Page Header */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-16 mt-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              All Products
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our complete catalog of 300+ electronics, components, and tools
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-1/4">
              <ProductFilters />
            </div>
            
            {/* Products Grid */}
            <div className="lg:w-3/4">
              <ProductsGrid />
            </div>
          </div>
        </div>
      </section>

      <SupplyFooter />
    </main>
  )
} 