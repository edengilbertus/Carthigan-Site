import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SupplyNavigation } from '@/components/supply/SupplyNavigation'
import { ProductDetail } from '@/components/supply/product/ProductDetail'
import { SupplyFooter } from '@/components/supply/SupplyFooter'
import { productApi } from '@/lib/api'

interface ProductPageProps {
  params: Promise<{
    id: string
  }>
}

// Function to get product from database
async function getProductFromDatabase(id: string) {
  try {
    const response = await productApi.getProduct(id)
    if (response.success && response.data) {
      // Transform database product to match UnifiedProduct interface
      const product = response.data
      return {
        id: product.id,
        name: product.name,
        description: product.description,
        category: product.product_type || 'electronics',
        subcategory: product.subcategory || '',
        price: product.price,
        studentPrice: product.student_price || undefined,
        image: product.images?.[0] || '/images/placeholder-product.jpg',
        inStock: product.stock_status === 'in_stock' && product.stock_quantity > 0,
        stockLevel: product.stock_quantity,
        rating: product.rating || 4.0,
        reviews: product.reviews || 0,
        specifications: product.specifications || {},
        compatibility: [],
        projects: [],
        leadTime: '2-3 days',
        tags: product.tags || [],
        type: 'electronics' as const,
        features: product.features || []
      }
    }
    return null
  } catch (error) {
    console.error('Error fetching product:', error)
    return null
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params
  const product = await getProductFromDatabase(id)
  
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
      'electronics',
      'components',
      'Uganda',
      'Carthigan'
    ].join(', ')
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const product = await getProductFromDatabase(id)

  if (!product) {
    notFound()
  }

  // For now, use empty related products array since we'd need to implement related products from database
  const relatedProducts: any[] = []

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