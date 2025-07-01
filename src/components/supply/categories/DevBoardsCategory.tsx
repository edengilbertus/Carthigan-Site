"use client"

import { useState, useMemo, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Search, Grid, List, Filter, SortAsc, Package, AlertCircle } from "lucide-react"
import { CategoryHeader } from "./CategoryHeader"
import { productApi } from "@/lib/api"
import { useCartStore } from "@/lib/store/cart"

type ViewMode = 'grid' | 'list'
type SortOption = 'name' | 'price' | 'rating' | 'availability'

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
  rating: number
  reviews: number
  tags: string[]
  specifications: Record<string, string>
}

export function DevBoardsCategory() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
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
          type: 'dev-board',
          limit: 1000
        })
        
        if (response.success && response.data) {
          const mappedProducts = response.data.items.map(item => ({
            ...item,
            subcategory: item.subcategory || '',
            student_price: item.student_price || undefined,
            rating: 0,
            reviews: 0,
            tags: [],
            specifications: {}
          }))
          setProducts(mappedProducts)
          console.log('Loaded dev board products:', mappedProducts.length)
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

  // Get all development board products from unified system
  const allDevelopmentBoards = products

  // Get unique categories from the unified data
  const categories = useMemo(() => {
    const cats = allDevelopmentBoards.map(p => ({ id: p.subcategory, name: p.subcategory.replace('-', ' ') }))
    return [...new Map(cats.map(cat => [cat.id, cat])).values()].sort((a, b) => a.name.localeCompare(b.name))
  }, [allDevelopmentBoards])

  // Filter and sort boards
  const filteredBoards = useMemo(() => {
    let filtered = allDevelopmentBoards

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(board =>
        board.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        board.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (board.tags || []).some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    // Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter(board => board.subcategory === selectedCategory)
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name)
        case 'price':
          return a.price - b.price
        case 'rating':
          return b.rating - a.rating
        case 'availability':
          return b.stock_quantity - a.stock_quantity
        default:
          return 0
      }
    })

    return filtered
  }, [searchTerm, selectedCategory, sortBy, allDevelopmentBoards])

  const handleAddToCart = (board: Product) => {
    addItem({
      id: board.id,
      name: board.name,
      price: board.price,
      image: board.images?.[0] || '',
      sku: board.id
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-on-surface/60">Loading development boards...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="h-12 w-12 text-error mx-auto mb-4" />
          <h2 className="text-xl font-bold text-on-surface mb-2">Error Loading Products</h2>
          <p className="text-on-surface/60">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <CategoryHeader 
        title="Development Boards"
        description="Comprehensive catalog of microcontrollers, single-board computers, and AI development platforms"
        productCount={filteredBoards.length}
        totalProducts={allDevelopmentBoards.length}
      />

      {/* Search and Filter Bar */}
      <div className="bg-surface-container rounded-3xl p-6 mb-8 border border-outline-variant/20">
        <div className="flex flex-col lg:flex-row gap-4 items-center">
          {/* Search */}
          <div className="relative flex-1 min-w-0">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-on-surface-variant w-5 h-5" />
            <input
              type="text"
              placeholder="Search development boards..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-surface-variant rounded-2xl border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary text-on-surface placeholder:text-on-surface-variant"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-on-surface-variant" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-surface-variant rounded-2xl border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary text-on-surface"
            >
              <option value="all">All Categories</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <SortAsc className="w-5 h-5 text-on-surface-variant" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="px-4 py-3 bg-surface-variant rounded-2xl border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary text-on-surface"
            >
              <option value="name">Name</option>
              <option value="price">Price</option>
              <option value="rating">Rating</option>
              <option value="availability">Availability</option>
            </select>
          </div>

          {/* View Toggle */}
          <div className="flex bg-surface-variant rounded-2xl p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-xl transition-colors ${
                viewMode === 'grid' 
                  ? 'bg-primary text-on-primary' 
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-xl transition-colors ${
                viewMode === 'list' 
                  ? 'bg-primary text-on-primary' 
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Results */}
      <motion.div
        key={`${viewMode}-${filteredBoards.length}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={
          viewMode === 'grid'
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            : "space-y-4"
        }
      >
        {filteredBoards.map((board) => (
          <DevBoardCard
            key={board.id}
            board={board}
            onAddToCart={handleAddToCart}
            viewMode={viewMode}
          />
        ))}
      </motion.div>

      {filteredBoards.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-on-surface-variant">
            No development boards found matching your criteria.
          </p>
        </div>
      )}
    </div>
  )
}

// Development Board Card Component
function DevBoardCard({ board, onAddToCart, viewMode }: { 
  board: any, 
  onAddToCart: (board: any) => void,
  viewMode: ViewMode 
}) {
  const getStockStatus = () => {
    if (!board.is_active || board.stock_quantity === 0) return { text: "Out of Stock", color: "bg-error text-on-error" }
    if (board.stock_quantity <= 10) return { text: "Low Stock", color: "bg-warning text-on-warning" }
    return { text: "In Stock", color: "bg-success text-on-success" }
  }

  const stockStatus = getStockStatus()

  if (viewMode === 'list') {
    return (
      <div className="bg-surface rounded-3xl border border-outline-variant/20 p-6 hover:shadow-lg transition-all duration-300">
        <div className="flex gap-6">
          <div className="w-24 h-24 bg-surface-variant rounded-2xl flex items-center justify-center relative overflow-hidden">
            {board.images && board.images.length > 0 ? (
              <Image
                src={board.images[0]}
                alt={board.name}
                fill
                className="object-contain p-2"
                sizes="96px"
              />
            ) : (
              <Package className="w-8 h-8 text-primary/40" />
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="font-semibold text-lg text-on-surface mb-1">{board.name}</h3>
                <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-sm font-medium">
                  {board.subcategory.replace('-', ' ')}
                </span>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-primary">
                  UGX {board.price.toLocaleString()}
                </p>
                {board.student_price && (
                  <p className="text-sm text-success">
                  Student: UGX {board.student_price.toLocaleString()}
                </p>
                )}
              </div>
            </div>
            
            <p className="text-on-surface-variant mb-3">{board.description}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${stockStatus.color}`}>
                  {stockStatus.text}
                </span>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500">★</span>
                  <span className="text-sm text-on-surface-variant">
                    {board.rating} ({board.reviews})
                  </span>
                </div>
              </div>
              
              <button
                onClick={() => onAddToCart(board)}
                disabled={!board.is_active || board.stock_quantity === 0}
                className="px-6 py-2 bg-primary text-on-primary rounded-2xl font-medium hover:bg-primary/90 disabled:bg-surface-variant disabled:text-on-surface-variant transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-surface rounded-3xl border border-outline-variant/20 overflow-hidden hover:shadow-lg transition-all duration-300"
    >
      <div className="aspect-square bg-surface-variant relative">
        {board.images && board.images.length > 0 ? (
          <Image
            src={board.images[0]}
            alt={board.name}
            fill
            className="object-contain p-4"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Package className="w-16 h-16 text-primary/40" />
          </div>
        )}
        <span className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${stockStatus.color}`}>
          {stockStatus.text}
        </span>
      </div>
      
      <div className="p-4">
        <div className="mb-2">
          <span className="inline-block px-2 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-medium mb-2">
            {board.subcategory.replace('-', ' ')}
          </span>
          <Link href={`/supply/product/${board.id}`} className="font-semibold text-on-surface hover:text-primary transition-colors">
            {board.name}
          </Link>
        </div>
        
        <p className="text-sm text-on-surface-variant mb-3">
          {board.description.substring(0, 100)}...
        </p>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1">
            <span className="text-yellow-500">★</span>
            <span className="text-sm text-on-surface-variant">
              {board.rating} ({board.reviews})
            </span>
          </div>
          <span className="text-sm text-on-surface-variant">
            {board.leadTime}
          </span>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-lg font-bold text-primary">
              UGX {board.price.toLocaleString()}
            </p>
            {board.student_price && (
              <p className="text-xs text-success">
              Student: UGX {board.student_price.toLocaleString()}
            </p>
            )}
          </div>
        </div>
        
        <button
          onClick={() => onAddToCart(board)}
          disabled={!board.is_active || board.stock_quantity === 0}
          className="w-full py-2 bg-primary text-on-primary rounded-2xl font-medium hover:bg-primary/90 disabled:bg-surface-variant disabled:text-on-surface-variant transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  )
} 