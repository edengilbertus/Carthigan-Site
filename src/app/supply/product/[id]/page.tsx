import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SupplyNavigation } from '@/components/supply/SupplyNavigation'
import { ProductDetail } from '@/components/supply/product/ProductDetail'
import { SupplyFooter } from '@/components/supply/SupplyFooter'
import { getProductById, getRelatedProducts, allProducts } from '@/lib/data/unified-products'

interface ProductPageProps {
  params: {
    id: string
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params
  const product = getProductById(id)
  
  if (!product) {
    return {
      title: 'Product Not Found | Carthigan Supply',
      description: 'The requested product could not be found.'
    }
  }

  return {
    title: `${product.name} | Carthigan Supply`,
    description: `${product.description} - UGX ${product.price.toLocaleString()}. ${product.inStock ? 'In stock' : 'Out of stock'} at Carthigan Supply Uganda.`,
    keywords: [
      product.name,
      product.category,
      product.subcategory,
      product.type === 'electronics' ? 'electronics' : 'development boards',
      'components',
      'Uganda',
      'Carthigan'
    ].join(', ')
  }
}

// Generate static paths for all products
export async function generateStaticParams() {
  return allProducts.map((product) => ({
    id: product.id,
  }))
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const product = getProductById(id)

  if (!product) {
    notFound()
  }

  // Find related products (same category/subcategory)
  const relatedProducts = getRelatedProducts(product.id, 8)

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