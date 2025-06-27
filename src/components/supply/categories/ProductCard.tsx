"use client"

import { useState } from "react"
import { motion } from "framer-motion"
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

interface ProductCardProps {
  product: any
  onAddToCart: (product: any) => void
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
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
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-surface rounded-3xl border border-outline-variant/20 overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      {/* Product Image */}
      <div className="relative aspect-square bg-surface-variant/30 p-4">
        {product.isNewProduct && (
          <Badge className="absolute top-2 left-2 bg-tertiary text-on-tertiary text-xs z-10">
            NEW
          </Badge>
        )}
        {product.isFeatured && (
          <Badge className="absolute top-2 right-2 bg-primary text-on-primary text-xs z-10">
            FEATURED
          </Badge>
        )}
        {hasDiscount && (
          <Badge className="absolute top-8 right-2 bg-error text-on-error text-xs z-10">
            -{discountPercent}%
          </Badge>
        )}

        <div className="w-full h-full flex items-center justify-center bg-white rounded-2xl">
          {!imageError ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-4"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-6xl text-primary/20">
              <Package className="w-16 h-16" />
              <span className="text-xs text-on-surface/40 mt-2">No Image</span>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute bottom-2 right-2 flex gap-1">
          <Button
            size="sm"
            variant="ghost"
            className="bg-surface/80 backdrop-blur-sm hover:bg-surface rounded-xl p-2"
            onClick={() => setIsFavorited(!isFavorited)}
          >
            <Heart className={`h-4 w-4 ${isFavorited ? 'fill-error text-error' : 'text-on-surface/60'}`} />
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className="bg-surface/80 backdrop-blur-sm hover:bg-surface rounded-xl p-2"
            asChild
          >
            <Link href={`/supply/product/${product.id}`}>
              <Eye className="h-4 w-4 text-on-surface/60" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        {/* Category & SKU */}
        <div className="flex items-center justify-between mb-2">
          <Badge className="bg-secondary/10 text-secondary text-xs">
            {product.subcategory.replace('-', ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())}
          </Badge>
          <span className="text-xs text-on-surface/40">{product.sku}</span>
        </div>

        {/* Product Name */}
        <h3 className="text-lg font-bold text-on-surface mb-2 line-clamp-2">
          <Link 
            href={`/supply/product/${product.id}`}
            className="hover:text-primary transition-colors"
          >
            {product.name}
          </Link>
        </h3>

        {/* Description */}
        <p className="text-sm text-on-surface/70 mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
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

        {/* Stock Status */}
        <div className="flex items-center gap-2 mb-4">
          <Badge className={`${stockStatus.color} text-xs`}>
            {stockStatus.text}
          </Badge>
          {product.stock > 0 && (
            <span className="text-xs text-on-surface/60">
              {product.stock} available
            </span>
          )}
          <div className="flex items-center gap-1 text-xs text-on-surface/60">
            <Clock className="h-3 w-3" />
            <span>{product.leadTime}</span>
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xl font-bold text-primary">
              UGX {product.price.toLocaleString()}
            </span>
            {hasDiscount && (
              <span className="text-sm text-on-surface/50 line-through">
                UGX {product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          
          {product.studentPrice && (
            <div className="flex items-center gap-1 text-xs text-success">
              <GraduationCap className="h-3 w-3" />
              <span>Student: UGX {product.studentPrice.toLocaleString()}</span>
            </div>
          )}
        </div>

        {/* Key Specifications */}
        {product.specifications && Object.keys(product.specifications).length > 0 && (
          <div className="mb-4">
            <div className="text-xs text-on-surface/60 space-y-1">
              {Object.entries(product.specifications).slice(0, 2).map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <span>{key}:</span>
                  <span className="font-medium">{value as string}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="space-y-2">
          <Button
            onClick={() => onAddToCart(product)}
            disabled={product.stock === 0}
            className="w-full bg-primary hover:bg-primary/90 text-on-primary rounded-2xl py-2"
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
          </Button>
          
          <Button
            variant="outline"
            className="w-full border-outline-variant text-on-surface hover:bg-surface-variant/50 rounded-2xl py-2"
            asChild
          >
            <Link href={`/supply/product/${product.id}`}>
              <ExternalLink className="mr-2 h-4 w-4" />
              View Details
            </Link>
          </Button>
        </div>

        {/* Compatibility Tags */}
        {product.compatibility && product.compatibility.length > 0 && (
          <div className="mt-4 pt-4 border-t border-outline-variant/20">
            <div className="text-xs text-on-surface/60 mb-2">Compatible with:</div>
            <div className="flex flex-wrap gap-1">
              {product.compatibility.slice(0, 3).map((item: string) => (
                <Badge key={item} className="bg-surface-variant text-on-surface-variant text-xs">
                  {item}
                </Badge>
              ))}
              {product.compatibility.length > 3 && (
                <Badge className="bg-surface-variant text-on-surface-variant text-xs">
                  +{product.compatibility.length - 3} more
                </Badge>
              )}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
} 