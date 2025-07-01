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
  Zap,
  Battery,
  CircuitBoard,
  Shield,
  Package,
  AlertCircle
} from "lucide-react"
import { CategoryHeader } from "./CategoryHeader"
import { productApi } from "@/lib/api"
import { useCartStore } from "@/lib/store/cart"

type ViewMode = 'grid' | 'list'
type SortOption = 'name' | 'price-low' | 'price-high' | 'rating' | 'availability'

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
  tags: string[]
  specifications: Record<string, string>
}

export function PowerCategory() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("all")
  const [availabilityFilter, setAvailabilityFilter] = useState<string>("all")
  const [viewMode, setViewMode] = useState<ViewMode>('grid')
  const [sortBy, setSortBy] = useState<SortOption>('name')
  const [showFilters, setShowFilters] = useState(false)

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
          type: 'power',
          limit: 1000
        })
        
        if (response.success && response.data) {
          const mappedProducts = response.data.items.map(item => ({
            ...item,
            subcategory: item.subcategory || '',
            student_price: item.student_price || undefined,
            tags: [],
            specifications: {}
          }))
          setProducts(mappedProducts)
          console.log('Loaded power products:', mappedProducts.length)
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

  // Get all power components from unified system
  const allPowerData = products
  
  // Get unique subcategories from the unified data
  const powerSubcategories = useMemo(() => {
    const cats = allPowerData.map(p => p.subcategory)
    return [...new Set(cats)].sort()
  }, [allPowerData])

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = allPowerData

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.subcategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.tags && product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())))
      )
    }

    // Subcategory filter
    if (selectedSubcategory !== "all") {
      filtered = filtered.filter(product => product.subcategory === selectedSubcategory)
    }

    // Availability filter
    if (availabilityFilter !== "all") {
      filtered = filtered.filter(product => {
        if (availabilityFilter === "in-stock") return product.stock_status === "in-stock"
        if (availabilityFilter === "out-of-stock") return product.stock_status === "out-of-stock"
        if (availabilityFilter === "low-stock") return product.stock_status === "low-stock"
        return true
      })
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
        case 'availability':
          return b.stock_quantity - a.stock_quantity
        default:
          return 0
      }
    })

    return filtered
  }, [searchQuery, selectedSubcategory, availabilityFilter, sortBy, allPowerData])

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images?.[0] || '',
      sku: product.id
    })
  }

  const getCategoryIcon = (subcategory: string) => {
    switch (subcategory) {
      case 'voltage-regulators':
        return <CircuitBoard className="w-5 h-5" />
      case 'power-conversion':
        return <Zap className="w-5 h-5" />
      case 'batteries':
        return <Battery className="w-5 h-5" />
      case 'protection':
        return <Shield className="w-5 h-5" />
      default:
        return <Zap className="w-5 h-5" />
    }
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Category Header */}
        <CategoryHeader 
          title="Power Components"
          description="The definitive collection of components for power regulation, conversion, protection, and delivery"
          productCount={filteredProducts.length}
          totalProducts={allPowerData.length}
        />

        {/* Search and Controls */}
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          {/* Search Bar */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-on-surface/40" />
            <Input
              type="text"
              placeholder="Search power components, voltage regulators, converters..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-3 text-lg border-outline-variant/30 rounded-2xl focus:border-primary focus:ring-primary"
            />
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4">
            {/* Filter Toggle */}
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="border-outline-variant text-on-surface hover:bg-surface-variant/50 rounded-xl"
            >
              <Filter className="mr-2 h-4 w-4" />
              Filters
              {(selectedSubcategory !== "all" || availabilityFilter !== "all") && (
                <Badge className="ml-2 bg-primary text-on-primary rounded-full px-2 py-1 text-xs">
                  Active
                </Badge>
              )}
            </Button>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="px-4 py-2 border border-outline-variant rounded-xl bg-surface text-on-surface focus:border-primary focus:ring-1 focus:ring-primary"
            >
              <option value="name">Sort by Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="availability">Most Available</option>
            </select>

            {/* View Mode Toggle */}
            <div className="flex bg-surface-variant rounded-xl p-1">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="rounded-lg"
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="rounded-lg"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="lg:w-80"
            >
              <div className="bg-surface rounded-3xl p-6 border border-outline-variant/20 sticky top-32">
                <h3 className="text-xl font-bold text-on-surface mb-6">Filters</h3>
                
                {/* Subcategory Filter */}
                <div className="mb-6">
                  <h4 className="font-semibold text-on-surface mb-3">Category</h4>
                  <select 
                    value={selectedSubcategory} 
                    onChange={(e) => setSelectedSubcategory(e.target.value)}
                    className="w-full px-3 py-2 border border-outline-variant rounded-xl bg-surface text-on-surface"
                  >
                    <option value="all">All Categories</option>
                    {powerSubcategories.map((subcategory) => (
                      <option key={subcategory} value={subcategory}>
                        {subcategory.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Availability Filter */}
                <div className="mb-6">
                  <h4 className="font-semibold text-on-surface mb-3">Availability</h4>
                  <select 
                    value={availabilityFilter} 
                    onChange={(e) => setAvailabilityFilter(e.target.value)}
                    className="w-full px-3 py-2 border border-outline-variant rounded-xl bg-surface text-on-surface"
                  >
                    <option value="all">All Products</option>
                    <option value="in-stock">In Stock</option>
                    <option value="low-stock">Low Stock</option>
                    <option value="out-of-stock">Out of Stock</option>
                  </select>
                </div>

                {/* Clear Filters */}
                <Button
                  onClick={() => {
                    setSelectedSubcategory("all")
                    setAvailabilityFilter("all")
                    setSearchQuery("")
                  }}
                  variant="outline"
                  className="w-full"
                >
                  Clear All Filters
                </Button>

                {/* Student Discount Info */}
                <div className="bg-success-container/20 rounded-2xl p-4 mt-6">
                  <h4 className="font-semibold text-success mb-2 text-sm">🎓 Student Discount</h4>
                  <p className="text-xs text-success/80">
                    Show your university ID for 15% off eligible items
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Products Grid/List */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold text-on-surface mb-2">No power components found</h3>
                <p className="text-on-surface/60 mb-6">
                  Try adjusting your search criteria or filters
                </p>
                <Button
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedSubcategory("all")
                    setAvailabilityFilter("all")
                  }}
                  className="bg-primary hover:bg-primary/90 text-on-primary rounded-2xl"
                >
                  Clear All Filters
                </Button>
              </div>
            ) : (
              <div className={viewMode === 'grid' 
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                : "space-y-4"
              }>
                {filteredProducts.map((product) => (
                  <Link key={product.id} href={`/supply/product/${product.id}`}>
                    <PowerProductCard
                      product={product}
                      onAddToCart={handleAddToCart}
                      viewMode={viewMode}
                      getCategoryIcon={getCategoryIcon}
                    />
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// Product Card Component
function PowerProductCard({ 
  product, 
  onAddToCart, 
  viewMode,
  getCategoryIcon 
}: { 
  product: any, 
  onAddToCart: (product: any) => void,
  viewMode: ViewMode,
  getCategoryIcon: (subcategory: string) => JSX.Element
}) {
  const getStockStatus = () => {
    if (product.stock_status === "out-of-stock") return { text: "Out of Stock", color: "bg-error text-on-error" }
    if (product.stock_status === "low-stock") return { text: "Low Stock", color: "bg-warning text-on-warning" }
    return { text: "In Stock", color: "bg-success text-on-success" }
  }

  const stockStatus = getStockStatus()

  if (viewMode === 'list') {
    return (
      <div className="bg-surface rounded-3xl border border-outline-variant/20 p-6 hover:shadow-lg transition-all duration-300">
        <div className="flex gap-6">
          <div className="w-24 h-24 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl flex items-center justify-center">
            <Zap className="w-8 h-8 text-yellow-600" />
          </div>
          
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              {getCategoryIcon(product.subcategory)}
              <Badge className="bg-yellow-100 text-yellow-800 text-xs">
                {product.subcategory.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </Badge>
            </div>
            <h3 className="text-lg font-bold text-on-surface mb-2">{product.name}</h3>
            <p className="text-sm text-on-surface/70 mb-2">{product.description}</p>
            <div className="flex items-center gap-2 mb-2">
              <Badge className={`${stockStatus.color} text-xs`}>
                {stockStatus.text}
              </Badge>
              <span className="text-xs text-on-surface/60">ID: {product.id}</span>
            </div>
          </div>
          
          <div className="text-right">
            <div className="text-xl font-bold text-primary mb-2">
              UGX {product.price.toLocaleString()}
            </div>
            {product.student_price && (
              <div className="text-sm text-success mb-2">
                Student: UGX {product.student_price.toLocaleString()}
              </div>
            )}
            <Button
              onClick={(e) => {
                e.preventDefault()
                onAddToCart(product)
              }}
              disabled={product.stock_status === "out-of-stock"}
              className="bg-primary hover:bg-primary/90 text-on-primary rounded-2xl"
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-surface rounded-3xl border border-outline-variant/20 overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="aspect-square bg-gradient-to-br from-yellow-100 to-orange-100 p-4 flex items-center justify-center">
        <Zap className="w-16 h-16 text-yellow-600" />
      </div>
      
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          {getCategoryIcon(product.subcategory)}
          <Badge className="bg-yellow-100 text-yellow-800 text-xs">
            {product.subcategory.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </Badge>
        </div>
        
        <h3 className="text-lg font-bold text-on-surface mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        <p className="text-sm text-on-surface/70 mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center gap-2 mb-3">
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
            ({product.reviews})
          </span>
        </div>

        <Badge className={`${stockStatus.color} text-xs mb-3`}>
          {stockStatus.text}
        </Badge>

        <div className="mb-4">
          <div className="text-xl font-bold text-primary">
            UGX {product.price.toLocaleString()}
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
            onAddToCart(product)
          }}
          disabled={product.stock_status === "out-of-stock"}
          className="w-full bg-primary hover:bg-primary/90 text-on-primary rounded-2xl"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          {product.stock_status === "out-of-stock" ? 'Out of Stock' : 'Add to Cart'}
        </Button>
      </div>
    </div>
  )
}
