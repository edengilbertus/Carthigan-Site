import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SupplyNavigation } from '@/components/supply/SupplyNavigation'
import { ProductDetail } from '@/components/supply/product/ProductDetail'
import { SupplyFooter } from '@/components/supply/SupplyFooter'
import { electronicsData } from '@/lib/data/electronics'

interface ProductPageProps {
  params: {
    id: string
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = electronicsData.products.find(p => p.id === params.id)
  
  if (!product) {
    return {
      title: 'Product Not Found | Carthigan Supply',
      description: 'The requested product could not be found.'
    }
  }

  return {
    title: `${product.name} - ${product.sku} | Carthigan Supply`,
    description: `${product.description} - UGX ${product.price.toLocaleString()}. ${product.stock > 0 ? 'In stock' : 'Out of stock'} at Carthigan Supply Uganda.`,
    keywords: [
      product.name,
      product.sku,
      product.category,
      product.subcategory,
      'electronics',
      'components',
      'Uganda',
      'Carthigan'
    ].join(', ')
  }
}

// Generate static paths for all products
export async function generateStaticParams() {
  return electronicsData.products.map((product) => ({
    id: product.id,
  }))
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = electronicsData.products.find(p => p.id === params.id)

  if (!product) {
    notFound()
  }

  // Find related products (same category/subcategory)
  const relatedProducts = electronicsData.products
    .filter(p => 
      p.id !== product.id && 
      (p.category === product.category || p.subcategory === product.subcategory)
    )
    .slice(0, 8)

  return (
    <main className="min-h-screen bg-surface">
      <SupplyNavigation />
      <ProductDetail 
        product={product} 
        relatedProducts={relatedProducts}
      />
      <SupplyFooter />
    </main>
  )
} 