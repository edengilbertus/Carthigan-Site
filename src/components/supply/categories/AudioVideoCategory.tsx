"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
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
  Volume2,
  Mic,
  Headphones,
  Camera,
  Speaker
} from "lucide-react"
import { getProductsByType } from "@/lib/data/unified-products"
import { useCartStore } from "@/lib/store/cart"

type ViewMode = 'grid' | 'list'
type SortOption = 'name' | 'price-low' | 'price-high' | 'rating'

export function AudioVideoCategory() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("all")
  const [viewMode, setViewMode] = useState<ViewMode>('grid')
  const [sortBy, setSortBy] = useState<SortOption>('name')
  const [showFilters, setShowFilters] = useState(false)

  const { addItem } = useCartStore()

  // Get all audio-video products
  const allAudioVideoData = getProductsByType('audio-video')
  
  // Get unique subcategories
  const audioVideoSubcategories = useMemo(() => {
    const cats = allAudioVideoData.map(p => p.subcategory)
    return [...new Set(cats)].sort()
  }, [allAudioVideoData])

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = allAudioVideoData

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
      price: product.studentPrice || product.price,
      image: product.image,
      sku: product.id
    })
  }

  const getSubcategoryIcon = (subcategory: string) => {
    switch (subcategory.toLowerCase()) {
      case 'speakers': return <Speaker className="h-4 w-4" />
      case 'microphones': return <Mic className="h-4 w-4" />
      case 'headphones': return <Headphones className="h-4 w-4" />
      case 'video equipment': return <Camera className="h-4 w-4" />
      default: return <Volume2 className="h-4 w-4" />
    }
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
          <Volume2 className="h-5 w-5 text-primary" />
          <span className="text-sm font-medium text-primary">Audio & Video Excellence</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-bold text-on-surface"
        >
          Audio & Video Equipment
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-on-surface/70 max-w-3xl mx-auto"
        >
          Professional audio and video equipment for content creation, education, and multimedia projects. 
          From speakers and microphones to capture cards and cameras.
        </motion.p>
      </div>

      {/* Filters and Search */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar Filters */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-surface rounded-3xl p-6 border border-outline-variant/20">
            <h3 className="font-semibold text-on-surface mb-4 flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </h3>
            
            {/* Search */}
            <div className="mb-6">
              <label className="text-sm font-medium text-on-surface/70 mb-2 block">Search Products</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-on-surface/40" />
                <Input
                  placeholder="Search audio & video..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Category */}
            <div className="mb-6">
              <label className="text-sm font-medium text-on-surface/70 mb-3 block">Category</label>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedSubcategory("all")}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    selectedSubcategory === "all" ? "bg-primary text-on-primary" : "hover:bg-surface-variant/50"
                  }`}
                >
                  All Categories
                </button>
                {audioVideoSubcategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedSubcategory(category)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center gap-2 ${
                      selectedSubcategory === category ? "bg-primary text-on-primary" : "hover:bg-surface-variant/50"
                    }`}
                  >
                    {getSubcategoryIcon(category)}
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Results Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h2 className="text-xl font-semibold text-on-surface">
                {filteredProducts.length} products available
              </h2>
              <span className="text-sm text-on-surface/60">• Professional audio & video solutions</span>
            </div>
            
            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="px-3 py-2 border border-outline-variant/20 rounded-lg bg-surface text-on-surface text-sm"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Sort by Rating</option>
              </select>
              
              <div className="flex items-center border border-outline-variant/20 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 ${viewMode === "grid" ? "bg-primary text-on-primary" : "hover:bg-surface-variant/50"}`}
                >
                  <Grid3X3 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 ${viewMode === "list" ? "bg-primary text-on-primary" : "hover:bg-surface-variant/50"}`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}>
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/supply/product/${product.id}`}>
                  <ProductCard
                    product={product}
                    onAddToCart={handleAddToCart}
                    viewMode={viewMode}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <Volume2 className="h-16 w-16 text-on-surface/20 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-on-surface mb-2">No products found</h3>
              <p className="text-on-surface/60">Try adjusting your filters or search terms</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Product Card Component
function ProductCard({ product, onAddToCart, viewMode }: { 
  product: any, 
  onAddToCart: (product: any) => void,
  viewMode: ViewMode 
}) {
  const getSubcategoryIcon = (subcategory: string) => {
    switch (subcategory.toLowerCase()) {
      case 'speakers': return <Speaker className="w-16 h-16 text-primary/40" />
      case 'microphones': return <Mic className="w-16 h-16 text-primary/40" />
      case 'headphones': return <Headphones className="w-16 h-16 text-primary/40" />
      case 'video equipment': return <Camera className="w-16 h-16 text-primary/40" />
      default: return <Volume2 className="w-16 h-16 text-primary/40" />
    }
  }

  return (
    <div className="bg-surface rounded-3xl border border-outline-variant/20 overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="aspect-video bg-surface-variant/30 p-6 flex items-center justify-center">
        {getSubcategoryIcon(product.subcategory)}
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
            UGX {(product.studentPrice || product.price).toLocaleString()}
          </div>
          {product.studentPrice && (
            <div className="text-xs text-success">
              Student: UGX {product.studentPrice.toLocaleString()}
            </div>
          )}
        </div>

        <Button
          onClick={(e) => {
            e.preventDefault()
            onAddToCart(product)
          }}
          className="w-full bg-primary hover:bg-primary/90 text-on-primary rounded-2xl"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </div>
    </div>
  )
}
