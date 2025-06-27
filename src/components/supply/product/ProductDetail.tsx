"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Star, 
  ShoppingCart, 
  Heart, 
  Share2,
  Package,
  Clock,
  Truck,
  Shield,
  GraduationCap,
  Download,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  Building,
  Cpu,
  Zap,
  Gauge,
  ArrowLeft
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useCartStore } from "@/lib/store/cart"

interface ProductDetailProps {
  product: any
  relatedProducts: any[]
}

export function ProductDetail({ product, relatedProducts }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isFavorited, setIsFavorited] = useState(false)
  const [imageError, setImageError] = useState(false)

  const { addItem, toggleCart } = useCartStore()

  const getStockStatus = () => {
    if (product.stock === 0) return { 
      text: "Out of Stock", 
      color: "bg-error text-on-error",
      icon: AlertCircle,
      description: "This item is currently unavailable"
    }
    if (product.stock <= 10) return { 
      text: "Low Stock", 
      color: "bg-warning text-on-warning",
      icon: AlertCircle,
      description: `Only ${product.stock} units remaining`
    }
    return { 
      text: "In Stock", 
      color: "bg-success text-on-success",
      icon: CheckCircle,
      description: `${product.stock} units available`
    }
  }

  const stockStatus = getStockStatus()
  const hasDiscount = product.originalPrice && product.originalPrice > product.price
  const discountPercent = hasDiscount ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0
  const StockIcon = stockStatus.icon

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image || "/images/placeholder.jpg",
        sku: product.sku
      })
    }
    toggleCart()
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: product.description,
          url: window.location.href,
        })
      } catch (error) {
        console.log('Error sharing:', error)
      }
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(window.location.href)
    }
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-on-surface/60 mb-8">
          <Link href="/supply" className="hover:text-primary">Supply</Link>
          <span>/</span>
          <Link href="/supply/category/electronics" className="hover:text-primary">Electronics</Link>
          <span>/</span>
          <Link 
            href={`/supply/category/electronics?category=${product.category}`}
            className="hover:text-primary capitalize"
          >
            {product.category.replace('-', ' ')}
          </Link>
          <span>/</span>
          <span className="text-on-surface">{product.name}</span>
        </div>

        {/* Back Button */}
        <Button
          variant="ghost"
          className="mb-6"
          asChild
        >
          <Link href="/supply/category/electronics">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Electronics
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-white rounded-3xl p-8 border border-outline-variant/20">
              {product.isNewProduct && (
                <Badge className="absolute top-4 left-4 bg-tertiary text-on-tertiary z-10">
                  NEW
                </Badge>
              )}
              {product.isFeatured && (
                <Badge className="absolute top-4 right-4 bg-primary text-on-primary z-10">
                  FEATURED
                </Badge>
              )}
              {hasDiscount && (
                <Badge className="absolute top-12 right-4 bg-error text-on-error z-10">
                  -{discountPercent}%
                </Badge>
              )}

              <div className="w-full h-full flex items-center justify-center">
                {!imageError ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-8"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-primary/20">
                    <Package className="w-32 h-32" />
                    <span className="text-sm text-on-surface/40 mt-4">Product Image</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Title & Rating */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-secondary/10 text-secondary">
                  {product.subcategory.replace('-', ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())}
                </Badge>
                <span className="text-sm text-on-surface/60">SKU: {product.sku}</span>
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold text-on-surface mb-4">
                {product.name}
              </h1>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) 
                            ? 'fill-warning text-warning' 
                            : 'text-outline'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-on-surface/70">
                    {product.rating} ({product.reviewCount} reviews)
                  </span>
                </div>
              </div>

              <p className="text-lg text-on-surface/80 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-3 p-4 bg-surface-variant/30 rounded-2xl">
              <StockIcon className={`h-5 w-5 ${stockStatus.color.includes('success') ? 'text-success' : stockStatus.color.includes('warning') ? 'text-warning' : 'text-error'}`} />
              <div>
                <Badge className={`${stockStatus.color} mb-1`}>
                  {stockStatus.text}
                </Badge>
                <p className="text-sm text-on-surface/70">
                  {stockStatus.description}
                </p>
              </div>
            </div>

            {/* Pricing */}
            <div className="p-6 bg-primary/5 rounded-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl font-bold text-primary">
                  UGX {product.price.toLocaleString()}
                </span>
                {hasDiscount && (
                  <>
                    <span className="text-xl text-on-surface/50 line-through">
                      UGX {product.originalPrice.toLocaleString()}
                    </span>
                    <Badge className="bg-error text-on-error">
                      Save {discountPercent}%
                    </Badge>
                  </>
                )}
              </div>
              
              {product.studentPrice && (
                <div className="flex items-center gap-2 p-3 bg-success/10 rounded-2xl">
                  <GraduationCap className="h-4 w-4 text-success" />
                  <span className="text-success font-medium">
                    Student Price: UGX {product.studentPrice.toLocaleString()}
                  </span>
                  <span className="text-xs text-success/80">(Show student ID)</span>
                </div>
              )}
            </div>

            {/* Quantity & Actions */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="text-sm font-medium text-on-surface">Quantity:</label>
                <div className="flex items-center">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="rounded-l-xl rounded-r-none"
                  >
                    -
                  </Button>
                  <input
                    type="number"
                    min="1"
                    max={product.stock}
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, Math.min(product.stock, parseInt(e.target.value) || 1)))}
                    className="w-16 text-center border-t border-b border-outline-variant focus:outline-none"
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="rounded-r-xl rounded-l-none"
                  >
                    +
                  </Button>
                </div>
                <span className="text-sm text-on-surface/60">
                  (Min: {product.minOrderQty})
                </span>
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                  className="flex-1 bg-primary hover:bg-primary/90 text-on-primary rounded-2xl py-3 text-lg"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                </Button>
                
                <Button
                  variant="outline"
                  onClick={() => setIsFavorited(!isFavorited)}
                  className="p-3 rounded-2xl"
                >
                  <Heart className={`h-5 w-5 ${isFavorited ? 'fill-error text-error' : ''}`} />
                </Button>
                
                <Button
                  variant="outline"
                  onClick={handleShare}
                  className="p-3 rounded-2xl"
                >
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4 p-4 bg-surface-variant/20 rounded-2xl">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-sm">Delivery: {product.leadTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Building className="h-4 w-4 text-primary" />
                <span className="text-sm">Supplier: {product.supplier}</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                <span className="text-sm">Quality Assured</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-primary" />
                <span className="text-sm">Free delivery in Kampala</span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <Tabs defaultValue="specifications" className="mb-16">
          <TabsList className="grid w-full grid-cols-5 bg-surface-variant/30 rounded-2xl p-1">
            <TabsTrigger value="specifications" className="rounded-xl">Specifications</TabsTrigger>
            <TabsTrigger value="compatibility" className="rounded-xl">Compatibility</TabsTrigger>
            <TabsTrigger value="projects" className="rounded-xl">Projects</TabsTrigger>
            <TabsTrigger value="datasheet" className="rounded-xl">Documents</TabsTrigger>
            <TabsTrigger value="reviews" className="rounded-xl">Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value="specifications" className="mt-8">
            <Card className="rounded-3xl border-outline-variant/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cpu className="h-5 w-5 text-primary" />
                  Technical Specifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(product.specifications || {}).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center p-3 bg-surface-variant/20 rounded-xl">
                      <span className="font-medium text-on-surface/80">{key}</span>
                      <span className="text-on-surface font-mono">{value as string}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="compatibility" className="mt-8">
            <Card className="rounded-3xl border-outline-variant/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Compatibility & Integration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-on-surface mb-3">Compatible Platforms</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.compatibility?.map((item: string) => (
                        <Badge key={item} className="bg-success/10 text-success px-3 py-1">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-4 bg-primary/5 rounded-2xl">
                    <h4 className="font-semibold text-primary mb-2">💡 Integration Tips</h4>
                    <ul className="text-sm text-on-surface/80 space-y-1">
                      <li>• Ensure proper voltage levels before connection</li>
                      <li>• Check pinout compatibility with your development board</li>
                      <li>• Consider using pull-up/pull-down resistors where needed</li>
                      <li>• Review datasheet for maximum current ratings</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="projects" className="mt-8">
            <Card className="rounded-3xl border-outline-variant/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gauge className="h-5 w-5 text-primary" />
                  Project Ideas & Use Cases
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.projects?.map((project: string, index: number) => (
                    <div key={index} className="p-4 bg-tertiary/10 rounded-2xl">
                      <h4 className="font-semibold text-tertiary mb-2">{project}</h4>
                      <p className="text-sm text-on-surface/70">
                        Perfect component for building {project.toLowerCase()} systems
                      </p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-secondary/5 rounded-2xl">
                  <h4 className="font-semibold text-secondary mb-2">🚀 Need Help Getting Started?</h4>
                  <p className="text-sm text-on-surface/80 mb-3">
                    Our technical team can help you design circuits and provide code examples.
                  </p>
                  <Button variant="outline" className="text-secondary border-secondary">
                    Contact Technical Support
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="datasheet" className="mt-8">
            <Card className="rounded-3xl border-outline-variant/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-5 w-5 text-primary" />
                  Documentation & Resources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {product.datasheet && (
                    <div className="flex items-center justify-between p-4 bg-surface-variant/20 rounded-2xl">
                      <div>
                        <h4 className="font-semibold text-on-surface">Official Datasheet</h4>
                        <p className="text-sm text-on-surface/70">Complete technical specifications and pin diagrams</p>
                      </div>
                      <Button variant="outline" asChild>
                        <a href={product.datasheet} target="_blank" rel="noopener noreferrer">
                          <Download className="mr-2 h-4 w-4" />
                          Download PDF
                        </a>
                      </Button>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-primary/5 rounded-2xl">
                      <h4 className="font-semibold text-primary mb-2">📚 Code Examples</h4>
                      <p className="text-sm text-on-surface/70 mb-3">
                        Arduino and Python examples available
                      </p>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="mr-2 h-3 w-3" />
                        View Examples
                      </Button>
                    </div>
                    
                    <div className="p-4 bg-secondary/5 rounded-2xl">
                      <h4 className="font-semibold text-secondary mb-2">🎥 Video Tutorials</h4>
                      <p className="text-sm text-on-surface/70 mb-3">
                        Step-by-step integration guides
                      </p>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="mr-2 h-3 w-3" />
                        Watch Videos
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="mt-8">
            <Card className="rounded-3xl border-outline-variant/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-primary" />
                  Customer Reviews ({product.reviewCount})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-on-surface/60">
                  <Star className="h-12 w-12 mx-auto mb-4 text-outline" />
                  <p>Customer reviews coming soon!</p>
                  <p className="text-sm mt-2">Be the first to review this product</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold text-on-surface mb-8">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/supply/product/${relatedProduct.id}`}
                  className="group block"
                >
                  <div className="bg-surface rounded-3xl border border-outline-variant/20 overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="aspect-square bg-surface-variant/30 p-4 flex items-center justify-center">
                      <Package className="w-12 h-12 text-primary/40" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-on-surface mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-primary font-bold">
                        UGX {relatedProduct.price.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
} 