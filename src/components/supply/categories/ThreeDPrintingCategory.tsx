"use client"

import { useState, useMemo, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { 
  Search, 
  Filter, 
  Grid3X3, 
  List, 
  Star,
  ShoppingCart,
  Printer,
  Package,
  Wrench,
  Zap,
  Layers,
  AlertCircle
} from "lucide-react"
import { productApi } from "@/lib/api"
import { useCartStore } from "@/lib/store/cart"

type ViewMode = 'grid' | 'list'
type SortOption = 'name' | 'price-low' | 'price-high' | 'rating'

interface Product {
  id: string
  name: string
  description: string
  price: number
  student_price?: number
  product_type: string
  subcategory: string
  stock_quantity: number
  stock_status: string
  is_active: boolean
  images?: string[]
  features?: string[]
}

export function ThreeDPrintingCategory() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("all")
  const [viewMode, setViewMode] = useState<ViewMode>('grid')
  const [sortBy, setSortBy] = useState<SortOption>('name')

  // Database state
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const { addItem } = useCartStore()

  // Load products from database
  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const response = await productApi.getProducts({
          type: '3d-printing',
          limit: 1000
        })
        
        if (response.success && response.data) {
          setProducts(response.data.items)
          console.log('Loaded 3d-printing products:', response.data.items.length)
        } else {
          setError('Failed to load products')
        }
      } catch (error) {
        console.error('Error loading products:', error)
        setError('Failed to load products')
      } finally {
        setLoading(false)
      }
    }
    
    loadProducts()
  }, [])

  // Get all 3D printing products
  const allThreeDPrintingData = products
  
  // Get unique subcategories
  const threeDPrintingSubcategories = useMemo(() => {
    const cats = allThreeDPrintingData.map(p => p.subcategory)
    return [...new Set(cats)].sort()
  }, [allThreeDPrintingData])

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = allThreeDPrintingData

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.subcategory.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Subcategory filter
    if (selectedSubcategory !== "all") {
      filtered = filtered.filter(product => product.subcategory === selectedSubcategory)
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name)
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'rating':
          return b.rating - a.rating
        default:
          return 0
      }
    })

    return filtered
  }, [searchQuery, selectedSubcategory, sortBy])

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.student_price || product.price,
      image: product.images?.[0],
      sku: product.id
    })
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full"
        >
          <Printer className="h-5 w-5 text-primary" />
          <span className="text-sm font-medium text-primary">Additive Manufacturing</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-bold text-on-surface"
        >
          3D Printing Solutions
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-on-surface/70 max-w-3xl mx-auto"
        >
          Complete 3D printing ecosystem from entry-level printers to professional materials. 
          Build prototypes, educational models, and production parts with precision and reliability.
        </motion.p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-surface rounded-3xl border border-outline-variant/20 overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="aspect-video bg-surface-variant/30 p-6 flex items-center justify-center">
              <Printer className="w-16 h-16 text-primary/40" />
            </div>
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <Badge className="bg-secondary/10 text-secondary text-xs mb-2">
                  {product.subcategory}
                </Badge>
                <Badge className="bg-success text-on-success text-xs">
                  In Stock
                </Badge>
              </div>
              
              <h3 className="text-lg font-bold text-on-surface mb-2 line-clamp-2">
                {product.name}
              </h3>
              
              <p className="text-sm text-on-surface/70 mb-4 line-clamp-2">
                {product.description}
              </p>

              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-3 w-3 ${i < Math.floor(product.rating) ? "fill-warning text-warning" : "text-outline"}`} />
                  ))}
                </div>
                <span className="text-xs text-on-surface/60">({product.reviews})</span>
              </div>

              <div className="mb-4">
                <div className="text-xl font-bold text-primary">
                  UGX {(product.student_price || product.price).toLocaleString()}
                </div>
                {product.student_price && (
                  <div className="text-xs text-success">
                    Student: UGX {product.student_price.toLocaleString()}
                  </div>
                )}
              </div>

              <Button
                onClick={(e) => {
                  e.preventDefault()
                  handleAddToCart(product)
                }}
                className="w-full bg-primary hover:bg-primary/90 text-on-primary rounded-2xl"
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <Printer className="h-16 w-16 text-on-surface/20 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-on-surface mb-2">No products found</h3>
          <p className="text-on-surface/60">Try adjusting your filters or search terms</p>
        </div>
      )}
    </div>
  )
}
