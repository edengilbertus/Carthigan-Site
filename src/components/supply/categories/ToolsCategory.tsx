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
  Package,
  Wrench,
  Zap,
  Shield,
  Settings,
  Eye,
  TestTube
} from "lucide-react"
import { useCartStore } from "@/lib/store/cart"
import { allTools, toolCategories } from "@/lib/data/tools"

type ViewMode = "grid" | "list"
type SortOption = "name" | "price" | "rating" | "popularity"

export function ToolsCategory() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSubcategory, setSelectedSubcategory] = useState("all")
  const [priceRange, setPriceRange] = useState([0, 600000])
  const [sortBy, setSortBy] = useState<SortOption>("popularity")
  const [viewMode, setViewMode] = useState<ViewMode>("grid")
  const addToCart = useCartStore((state) => state.addItem)

  const filteredTools = useMemo(() => {
    let filtered = allTools.filter(tool => {
      const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          tool.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      
      const matchesSubcategory = selectedSubcategory === "all" || tool.subcategory === selectedSubcategory
      const matchesPrice = tool.studentPrice >= priceRange[0] && tool.studentPrice <= priceRange[1]
      
      return matchesSearch && matchesSubcategory && matchesPrice
    })

    // Sort the filtered results
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name)
        case "price":
          return a.studentPrice - b.studentPrice
        case "rating":
          return b.rating - a.rating
        case "popularity":
          return b.reviews - a.reviews
        default:
          return 0
      }
    })

    return filtered
  }, [searchTerm, selectedSubcategory, priceRange, sortBy])

  const handleAddToCart = (tool: any) => {
    addToCart({
      id: tool.id,
      name: tool.name,
      price: tool.studentPrice,
      image: tool.image,
      quantity: 1
    })
  }

  const subcategoryIcons = {
    "soldering-reworking": Wrench,
    "testing-measurement": TestTube,
    "hand-tools-prototyping": Settings,
    "safety-workspace": Shield
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Tools & Equipment
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {filteredTools.length} essential tools available • The fundamental gear for building, testing, and bringing electronic projects to life
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:w-80 space-y-6"
        >
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search tools..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Subcategories */}
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Categories
            </h3>
            <div className="space-y-2">
              <button
                onClick={() => setSelectedSubcategory("all")}
                className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                  selectedSubcategory === "all"
                    ? "bg-blue-50 text-blue-700 font-medium"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                All Tools ({allTools.length})
              </button>
              {toolCategories.map((category) => {
                const IconComponent = subcategoryIcons[category.id as keyof typeof subcategoryIcons]
                const count = allTools.filter(tool => tool.subcategory === category.id).length
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedSubcategory(category.id)}
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors flex items-center gap-2 ${
                      selectedSubcategory === category.id
                        ? "bg-blue-50 text-blue-700 font-medium"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {IconComponent && <IconComponent className="h-4 w-4" />}
                    {category.name} ({count})
                  </button>
                )
              })}
            </div>
          </div>

          {/* Key Features */}
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-3">Why These Tools?</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-start gap-2">
                <Shield className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Professional grade quality for reliable results</span>
              </div>
              <div className="flex items-start gap-2">
                <Zap className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Essential for electronics development & repair</span>
              </div>
              <div className="flex items-start gap-2">
                <Eye className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <span>Detailed specifications and pro tips included</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="px-3 py-2 border rounded-md bg-white"
              >
                <option value="popularity">Most Popular</option>
                <option value="price">Price: Low to High</option>
                <option value="rating">Highest Rated</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Products Grid */}
          <motion.div
            layout
            className={viewMode === "grid" 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              : "space-y-4"
            }
          >
            {filteredTools.map((tool) => (
              <motion.div
                key={tool.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className={`bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow ${
                  viewMode === "list" ? "flex gap-4 p-4" : "overflow-hidden"
                }`}
              >
                {viewMode === "grid" ? (
                  <>
                    <div className="aspect-square bg-gray-100 flex items-center justify-center">
                      <Package className="h-16 w-16 text-gray-400" />
                    </div>
                    <div className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-gray-900 text-sm leading-tight">
                          {tool.name}
                        </h3>
                        <Badge 
                          variant={tool.inStock ? "default" : "secondary"}
                          className="ml-2 text-xs"
                        >
                          {tool.inStock ? "In Stock" : "Out of Stock"}
                        </Badge>
                      </div>
                      
                      <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                        {tool.description}
                      </p>

                      <div className="flex items-center gap-1 mb-3">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${
                                i < Math.floor(tool.rating)
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-gray-500">
                          ({tool.reviews})
                        </span>
                      </div>

                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <div className="text-lg font-bold text-gray-900">
                            {tool.studentPrice.toLocaleString()} UGX
                          </div>
                          {tool.studentPrice < tool.price && (
                            <div className="text-xs text-gray-500 line-through">
                              {tool.price.toLocaleString()} UGX
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Link href={`/supply/product/${tool.id}`} className="flex-1">
                          <Button variant="outline" size="sm" className="w-full">
                            View Details
                          </Button>
                        </Link>
                        <Button
                          size="sm"
                          onClick={() => handleAddToCart(tool)}
                          disabled={!tool.inStock}
                          className="px-3"
                        >
                          <ShoppingCart className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Package className="h-8 w-8 text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">
                          {tool.name}
                        </h3>
                        <Badge 
                          variant={tool.inStock ? "default" : "secondary"}
                        >
                          {tool.inStock ? "In Stock" : "Out of Stock"}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        {tool.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="text-xl font-bold text-gray-900">
                            {tool.studentPrice.toLocaleString()} UGX
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-sm text-gray-600">
                              {tool.rating} ({tool.reviews})
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Link href={`/supply/product/${tool.id}`}>
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                          </Link>
                          <Button
                            size="sm"
                            onClick={() => handleAddToCart(tool)}
                            disabled={!tool.inStock}
                          >
                            <ShoppingCart className="h-4 w-4 mr-1" />
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </motion.div>

          {filteredTools.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No tools found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
