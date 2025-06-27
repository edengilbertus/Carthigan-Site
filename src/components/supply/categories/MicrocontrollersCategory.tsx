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
  CheckCircle,
  AlertCircle,
  Package,
  Cpu,
  Wifi,
  Bluetooth,
  Zap,
  CircuitBoard,
  Brain
} from "lucide-react"
import { useCartStore } from "@/lib/store/cart"
import { CategoryHeader } from "./CategoryHeader"
import { getProductsByType } from "@/lib/data/unified-products"

type ViewMode = "grid" | "list"
type SortOption = "name" | "price" | "rating" | "popularity"

export function MicrocontrollersCategory() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSubcategory, setSelectedSubcategory] = useState("all")
  const [selectedType, setSelectedType] = useState("all")
  const [priceRange, setPriceRange] = useState([0, 1000000])
  const [viewMode, setViewMode] = useState<ViewMode>("grid")
  const [sortBy, setSortBy] = useState<SortOption>("popularity")
  const [availabilityFilter, setAvailabilityFilter] = useState("all")

  const { addItem, toggleCart } = useCartStore()

  // Get all microcontroller products from unified system
  const allMicrocontrollerProducts = getProductsByType('mcu-chip')

  // Get unique subcategories and types
  const subcategories = useMemo(() => {
    const cats = allMicrocontrollerProducts.map(p => p.subcategory)
    return [...new Set(cats)]
  }, [allMicrocontrollerProducts])

  const productTypes = useMemo(() => {
    const types = allMicrocontrollerProducts.map(p => p.type || 'chip')
    return [...new Set(types)]
  }, [allMicrocontrollerProducts])

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = allMicrocontrollerProducts.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (product.tags || []).some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      
      const matchesSubcategory = selectedSubcategory === "all" || product.subcategory === selectedSubcategory
      const matchesType = selectedType === "all" || (product.type || 'chip') === selectedType
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
      
      const matchesAvailability = (() => {
        if (availabilityFilter === "in-stock") return product.inStock && product.stockLevel > 0
        if (availabilityFilter === "out-of-stock") return !product.inStock || product.stockLevel === 0
        if (availabilityFilter === "low-stock") return product.inStock && product.stockLevel > 0 && product.stockLevel <= 30
        return true
      })()

      return matchesSearch && matchesSubcategory && matchesType && matchesPrice && matchesAvailability
    })

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name": return a.name.localeCompare(b.name)
        case "price": return a.price - b.price
        case "rating": return b.rating - a.rating
        case "popularity": return b.reviews - a.reviews
        default: return 0
      }
    })

    return filtered
  }, [searchTerm, selectedSubcategory, selectedType, priceRange, sortBy, availabilityFilter, allMicrocontrollerProducts])

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      sku: product.id
    })
    toggleCart()
  }

  const getStockStatus = (product: any) => {
    if (!product.inStock || product.stockLevel === 0) return { text: "Out of Stock", color: "bg-error text-on-error" }
    if (product.stockLevel <= 30) return { text: "Low Stock", color: "bg-warning text-on-warning" }
    return { text: "In Stock", color: "bg-success text-on-success" }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "chip": return <CircuitBoard className="h-4 w-4" />
      case "board": return <Cpu className="h-4 w-4" />
      default: return <Package className="h-4 w-4" />
    }
  }

  const getCategoryDisplayName = (subcategory: string) => {
    const displayNames: Record<string, string> = {
      "8bit-avr": "8-bit AVR Chips",
      "arm-cortex-m4": "ARM Cortex-M4 Chips", 
      "arm-cortex-m0plus": "ARM Cortex-M0+ Chips",
      "wifi-bluetooth-soc": "Wi-Fi + Bluetooth SoCs",
      "wifi-soc": "Wi-Fi SoCs",
      "risc-v": "RISC-V Chips",
      "high-performance-soc": "High-Performance SoCs",
      "media-soc": "Media SoCs",
      "arduino-boards": "Arduino Boards",
      "esp32-boards": "ESP32 Boards",
      "esp8266-boards": "ESP8266 Boards",
      "stm32-boards": "STM32 Boards",
      "raspberry-pi-boards": "Raspberry Pi Boards",
      "seeed-boards": "Seeed Boards",
      "teensy-boards": "Teensy Boards"
    }
    return displayNames[subcategory] || subcategory.charAt(0).toUpperCase() + subcategory.slice(1).replace('-', ' ')
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Category Header */}
      <CategoryHeader
        title="Microcontrollers & MCU Chips"
        description="Complete microcontroller ecosystem - from development boards to bare silicon chips"
        productCount={allMicrocontrollerProducts.length}
        backgroundGradient="from-blue-600 via-purple-600 to-indigo-700"
        icon={<Cpu className="h-8 w-8" />}
      />

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-80 space-y-6"
          >
            <div className="bg-surface rounded-3xl border border-outline-variant/20 p-6">
              <h3 className="text-lg font-semibold text-on-surface mb-4 flex items-center gap-2">
                <Filter className="h-5 w-5 text-primary" />
                Filters
              </h3>

              <div className="space-y-4">
                {/* Search */}
                <div>
                  <label className="text-sm font-medium text-on-surface mb-2 block">Search</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-on-surface/40" />
                    <Input
                      placeholder="Search microcontrollers..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Product Type Filter */}
                <div>
                  <label className="text-sm font-medium text-on-surface mb-2 block">Product Type</label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full p-2 border border-outline-variant rounded-lg bg-surface"
                  >
                    <option value="all">All Types</option>
                    <option value="board">Development Boards</option>
                    <option value="chip">MCU Chips & SoCs</option>
                  </select>
                </div>

                {/* Subcategory Filter */}
                <div>
                  <label className="text-sm font-medium text-on-surface mb-2 block">Category</label>
                  <select
                    value={selectedSubcategory}
                    onChange={(e) => setSelectedSubcategory(e.target.value)}
                    className="w-full p-2 border border-outline-variant rounded-lg bg-surface"
                  >
                    <option value="all">All Categories</option>
                    {subcategories.map(cat => (
                      <option key={cat} value={cat}>
                        {getCategoryDisplayName(cat)}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Availability Filter */}
                <div>
                  <label className="text-sm font-medium text-on-surface mb-2 block">Availability</label>
                  <select
                    value={availabilityFilter}
                    onChange={(e) => setAvailabilityFilter(e.target.value)}
                    className="w-full p-2 border border-outline-variant rounded-lg bg-surface"
                  >
                    <option value="all">All Products</option>
                    <option value="in-stock">In Stock</option>
                    <option value="low-stock">Low Stock</option>
                    <option value="out-of-stock">Out of Stock</option>
                  </select>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-sm font-medium text-on-surface mb-3">Key Features</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Wifi className="h-4 w-4 text-primary" />
                      <span className="text-sm">WiFi Capable</span>
                      <Badge className="bg-primary/10 text-primary text-xs">
                        {allMicrocontrollerProducts.filter(p => 
                          (p.specifications?.["Connectivity"] || "").toLowerCase().includes('wifi') ||
                          (p.tags || []).some(t => t.toLowerCase().includes('wifi'))
                        ).length}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bluetooth className="h-4 w-4 text-secondary" />
                      <span className="text-sm">Bluetooth</span>
                      <Badge className="bg-secondary/10 text-secondary text-xs">
                        {allMicrocontrollerProducts.filter(p => 
                          (p.specifications?.["Connectivity"] || "").toLowerCase().includes('bluetooth') ||
                          p.subcategory?.includes('bluetooth')
                        ).length}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <Brain className="h-4 w-4 text-purple-600" />
                      <span className="text-sm">RISC-V</span>
                      <Badge className="bg-purple-100 text-purple-600 text-xs">
                        {allMicrocontrollerProducts.filter(p => 
                          p.subcategory === 'risc-v' ||
                          (p.specifications?.["Architecture"] || "").toLowerCase().includes('risc-v') ||
                          (p.tags || []).some(t => t.toLowerCase().includes('risc-v'))
                        ).length}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <label className="text-sm font-medium text-on-surface mb-2 block">
                    Price Range: {priceRange[0].toLocaleString()} - {priceRange[1].toLocaleString()} UGX
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="1000000"
                    step="10000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          
            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-6 border border-outline-variant/20">
              <h4 className="font-semibold text-on-surface mb-4">Quick Stats</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-on-surface/70">Total Products</span>
                  <Badge className="bg-primary/10 text-primary">{allMicrocontrollerProducts.length}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-on-surface/70">In Stock</span>
                  <Badge className="bg-success/10 text-success">
                    {allMicrocontrollerProducts.filter(p => p.inStock && p.stockLevel > 0).length}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-on-surface/70">Categories</span>
                  <Badge className="bg-secondary/10 text-secondary">{subcategories.length}</Badge>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Products Section */}
          <div className="flex-1">
            {/* Controls Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="flex items-center gap-4">
                <span className="text-sm text-on-surface/60">
                  Showing {filteredProducts.length} of {allMicrocontrollerProducts.length} products
                </span>
              </div>

              <div className="flex items-center gap-4">
                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="px-3 py-2 border border-outline-variant rounded-lg bg-surface text-sm"
                >
                  <option value="popularity">Most Popular</option>
                  <option value="name">Name A-Z</option>
                  <option value="price">Price Low-High</option>
                  <option value="rating">Highest Rated</option>
                </select>

                {/* View Mode */}
                <div className="flex bg-surface-variant rounded-lg p-1">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="rounded-md"
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="rounded-md"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
                        </div>
                      </div>

            {/* Products Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-on-surface mb-2">No products found</h3>
                <p className="text-on-surface/60 mb-6">
                  Try adjusting your search criteria or filters
                </p>
                          <Button
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedSubcategory("all")
                    setSelectedType("all")
                    setAvailabilityFilter("all")
                  }}
                  className="bg-primary hover:bg-primary/90 text-on-primary rounded-2xl"
                >
                  Clear All Filters
                          </Button>
                        </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={viewMode === "grid" 
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  : "space-y-4"
                }
              >
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link href={`/supply/product/${product.id}`}>
                      <ProductCard
                        product={product}
                        onAddToCart={handleAddToCart}
                        viewMode={viewMode}
                        getStockStatus={getStockStatus}
                        getTypeIcon={getTypeIcon}
                      />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// Product Card Component
function ProductCard({ product, onAddToCart, viewMode, getStockStatus, getTypeIcon }: { 
  product: any
  onAddToCart: (product: any) => void
  viewMode: ViewMode
  getStockStatus: (product: any) => { text: string; color: string }
  getTypeIcon: (type: string) => JSX.Element
}) {
  const stockStatus = getStockStatus(product)
  const type = product.type || 'chip'

  if (viewMode === "list") {
    return (
      <div className="bg-surface rounded-3xl border border-outline-variant/20 p-6 hover:shadow-lg transition-all duration-300">
        <div className="flex gap-6">
          <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
            {getTypeIcon(type)}
          </div>
          
          <div className="flex-1">
            <div className="flex items-start gap-2 mb-2">
              <h3 className="text-lg font-bold text-on-surface">{product.name}</h3>
              <Badge className="bg-primary/10 text-primary text-xs">
                {type === 'chip' ? 'MCU Chip' : 'Dev Board'}
              </Badge>
            </div>
            
            <p className="text-sm text-on-surface/70 mb-3 line-clamp-2">{product.description}</p>
            
            <div className="flex items-center gap-3 mb-2">
              <Badge className={`${stockStatus.color} text-xs`}>
                {stockStatus.text}
              </Badge>
              <Badge className="bg-secondary/10 text-secondary text-xs">
                {product.subcategory.replace('-', ' ')}
              </Badge>
            </div>

            {/* Specifications */}
            <div className="text-xs text-on-surface/60 mb-2">
              <span>{product.specifications?.["Architecture"] || "N/A"}</span>
              {product.specifications?.["Clock Speed"] && (
                <span> • {product.specifications["Clock Speed"]}</span>
              )}
              {product.specifications?.["Flash Memory"] && (
                <span> • {product.specifications["Flash Memory"]} Flash</span>
              )}
            </div>
          </div>
          
          <div className="text-right">
            <div className="flex items-center gap-1 mb-2">
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
              <span className="text-xs text-on-surface/60 ml-1">({product.reviews})</span>
            </div>
            
            <div className="text-xl font-bold text-primary mb-1">
              UGX {product.price.toLocaleString()}
            </div>
            {product.studentPrice && (
              <div className="text-sm text-success mb-3">
                Student: UGX {product.studentPrice.toLocaleString()}
              </div>
            )}
            
            <Button
              onClick={(e) => {
                e.preventDefault()
                onAddToCart(product)
              }}
              disabled={!product.inStock || product.stockLevel === 0}
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
    <div className="bg-surface rounded-3xl border border-outline-variant/20 overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="aspect-square bg-gradient-to-br from-primary/5 to-secondary/5 p-6 flex items-center justify-center relative">
        <div className="text-4xl text-primary/30 group-hover:scale-110 transition-transform duration-300">
          {getTypeIcon(type)}
        </div>
        <Badge className="absolute top-3 right-3 bg-primary/10 text-primary text-xs">
          {type === 'chip' ? 'Chip' : 'Board'}
        </Badge>
      </div>
      
      <div className="p-4">
        <Badge className="bg-secondary/10 text-secondary text-xs mb-2">
          {product.subcategory.replace('-', ' ')}
        </Badge>
        
        <h3 className="text-lg font-bold text-on-surface mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        
        <p className="text-sm text-on-surface/70 mb-3 line-clamp-3">
          {product.description}
        </p>

        {/* Key Specs */}
        <div className="text-xs text-on-surface/60 mb-3 space-y-1">
          <div>{product.specifications?.["Architecture"] || "N/A"}</div>
          <div className="flex justify-between">
            <span>{product.specifications?.["Clock Speed"] || "N/A"}</span>
            <span>{product.specifications?.["Flash Memory"] || "N/A"}</span>
          </div>
        </div>

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
          <span className="text-xs text-on-surface/60">({product.reviews})</span>
        </div>

        <Badge className={`${stockStatus.color} text-xs mb-4`}>
          {stockStatus.text}
        </Badge>

        <div className="mb-4">
          <div className="text-xl font-bold text-primary">
            UGX {product.price.toLocaleString()}
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
          disabled={!product.inStock || product.stockLevel === 0}
          className="w-full bg-primary hover:bg-primary/90 text-on-primary rounded-2xl group-hover:bg-secondary group-hover:text-on-secondary transition-colors"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          {(!product.inStock || product.stockLevel === 0) ? 'Out of Stock' : 'Add to Cart'}
        </Button>
      </div>
    </div>
  )
}