"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Star, 
  ShoppingCart, 
  Heart, 
  Eye, 
  Package,
  Clock,
  GraduationCap,
  ExternalLink
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface ProductListItemProps {
  product: any
  onAddToCart: (product: any) => void
}

export function ProductListItem({ product, onAddToCart }: ProductListItemProps) {
  const [isFavorited, setIsFavorited] = useState(false)
  const [imageError, setImageError] = useState(false)

  const getStockStatus = () => {
    if (product.stock === 0) return { text: "Out of Stock", color: "bg-error text-on-error" }
    if (product.stock <= 10) return { text: "Low Stock", color: "bg-warning text-on-warning" }
    return { text: "In Stock", color: "bg-success text-on-success" }
  }

  const stockStatus = getStockStatus()
  const hasDiscount = product.originalPrice && product.originalPrice > product.price
  const discountPercent = hasDiscount ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0

  return (
    <div className="bg-surface rounded-3xl border border-outline-variant/20 p-6 hover:shadow-lg transition-all duration-300">
      <div className="flex gap-6">
        {/* Product Image */}
        <div className="relative w-32 h-32 bg-surface-variant/30 rounded-2xl flex-shrink-0">
          {product.isNewProduct && (
            <Badge className="absolute -top-2 -left-2 bg-tertiary text-on-tertiary text-xs z-10">
              NEW
            </Badge>
          )}
          
          <div className="w-full h-full flex items-center justify-center bg-white rounded-2xl">
            {!imageError ? (
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-2"
                onError={() => setImageError(true)}
              />
            ) : (
              <Package className="w-8 h-8 text-primary/20" />
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-2">
              <Badge className="bg-secondary/10 text-secondary text-xs">
                {product.subcategory.replace('-', ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())}
              </Badge>
              <span className="text-xs text-on-surface/40">{product.sku}</span>
            </div>
            
            <div className="flex items-center gap-1">
              <Button
                size="sm"
                variant="ghost"
                className="p-2"
                onClick={() => setIsFavorited(!isFavorited)}
              >
                <Heart className={`h-4 w-4 ${isFavorited ? 'fill-error text-error' : 'text-on-surface/60'}`} />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="p-2"
                asChild
              >
                <Link href={`/supply/product/${product.id}`}>
                  <Eye className="h-4 w-4 text-on-surface/60" />
                </Link>
              </Button>
            </div>
          </div>

          <h3 className="text-xl font-bold text-on-surface mb-2">
            <Link 
              href={`/supply/product/${product.id}`}
              className="hover:text-primary transition-colors"
            >
              {product.name}
            </Link>
          </h3>

          <p className="text-sm text-on-surface/70 mb-3 line-clamp-2">
            {product.description}
          </p>

          {/* Rating & Stock */}
          <div className="flex items-center gap-4 mb-3">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-3 w-3 ${
                      i < Math.floor(product.rating) 
                        ? 'fill-warning text-warning' 
                        : 'text-outline'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-on-surface/60">
                {product.rating} ({product.reviewCount})
              </span>
            </div>

            <Badge className={`${stockStatus.color} text-xs`}>
              {stockStatus.text}
            </Badge>

            <div className="flex items-center gap-1 text-xs text-on-surface/60">
              <Clock className="h-3 w-3" />
              <span>{product.leadTime}</span>
            </div>
          </div>

          {/* Key Specifications */}
          {product.specifications && Object.keys(product.specifications).length > 0 && (
            <div className="mb-3">
              <div className="grid grid-cols-2 gap-x-4 text-xs text-on-surface/60">
                {Object.entries(product.specifications).slice(0, 4).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-1">
                    <span>{key}:</span>
                    <span className="font-medium">{value as string}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Pricing & Actions */}
        <div className="flex flex-col items-end gap-4 min-w-[200px]">
          {/* Pricing */}
          <div className="text-right">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl font-bold text-primary">
                UGX {product.price.toLocaleString()}
              </span>
              {hasDiscount && (
                <Badge className="bg-error text-on-error text-xs">
                  -{discountPercent}%
                </Badge>
              )}
            </div>
            
            {hasDiscount && (
              <div className="text-sm text-on-surface/50 line-through mb-1">
                UGX {product.originalPrice.toLocaleString()}
              </div>
            )}
            
            {product.studentPrice && (
              <div className="flex items-center gap-1 text-xs text-success justify-end">
                <GraduationCap className="h-3 w-3" />
                <span>Student: UGX {product.studentPrice.toLocaleString()}</span>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="space-y-2 w-full">
            <Button
              onClick={() => onAddToCart(product)}
              disabled={product.stock === 0}
              className="w-full bg-primary hover:bg-primary/90 text-on-primary rounded-2xl"
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
            </Button>
            
            <Button
              variant="outline"
              className="w-full border-outline-variant text-on-surface hover:bg-surface-variant/50 rounded-2xl"
              asChild
            >
              <Link href={`/supply/product/${product.id}`}>
                <ExternalLink className="mr-2 h-4 w-4" />
                Details
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 