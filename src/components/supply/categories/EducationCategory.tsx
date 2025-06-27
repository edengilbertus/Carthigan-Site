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
  GraduationCap,
  Code,
  Cpu,
  Wifi,
  Wrench,
  Clock,
  Users,
  BookOpen
} from "lucide-react"
import { useCartStore } from "@/lib/store/cart"
import { allEducationalKits, kitCategories, difficultyLevels } from "@/lib/data/educational-kits"

type ViewMode = "grid" | "list"
type SortOption = "name" | "price" | "rating" | "difficulty"

export function EducationCategory() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSubcategory, setSelectedSubcategory] = useState("all")
  const [selectedDifficulty, setSelectedDifficulty] = useState("all")
  const [priceRange, setPriceRange] = useState([0, 800000])
  const [viewMode, setViewMode] = useState<ViewMode>("grid")
  const [sortBy, setSortBy] = useState<SortOption>("name")
  const addToCart = useCartStore((state) => state.addItem)

  const filteredKits = useMemo(() => {
    return allEducationalKits.filter(kit => {
      const matchesSearch = kit.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          kit.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          kit.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      
      const matchesSubcategory = selectedSubcategory === "all" || kit.subcategory === selectedSubcategory
      const matchesDifficulty = selectedDifficulty === "all" || kit.difficultyLevel === selectedDifficulty
      const matchesPrice = kit.studentPrice >= priceRange[0] && kit.studentPrice <= priceRange[1]
      
      return matchesSearch && matchesSubcategory && matchesDifficulty && matchesPrice
    })
  }, [searchTerm, selectedSubcategory, selectedDifficulty, priceRange])

  const sortedKits = useMemo(() => {
    return [...filteredKits].sort((a, b) => {
      switch (sortBy) {
        case "price":
          return a.studentPrice - b.studentPrice
        case "rating":
          return b.rating - a.rating
        case "difficulty":
          const difficultyOrder = { "Beginner": 1, "Intermediate": 2, "Advanced": 3 }
          return difficultyOrder[a.difficultyLevel] - difficultyOrder[b.difficultyLevel]
        default:
          return a.name.localeCompare(b.name)
      }
    })
  }, [filteredKits, sortBy])

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-100 text-green-800"
      case "Intermediate": return "bg-yellow-100 text-yellow-800"
      case "Advanced": return "bg-red-100 text-red-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  const getCategoryIcon = (subcategory: string) => {
    switch (subcategory) {
      case "Foundational Electronics": return <Package className="h-4 w-4" />
      case "Arduino & Programming": return <Code className="h-4 w-4" />
      case "Robotics & Motion": return <Cpu className="h-4 w-4" />
      case "IoT & Connectivity": return <Wifi className="h-4 w-4" />
      case "Specialized Learning": return <Wrench className="h-4 w-4" />
      default: return <GraduationCap className="h-4 w-4" />
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
          <GraduationCap className="h-5 w-5 text-primary" />
          <span className="text-sm font-medium text-primary">Educational Excellence</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-bold text-on-surface"
        >
          Educational Kits
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-on-surface/70 max-w-3xl mx-auto"
        >
          Curated learning kits designed to guide students from their first circuit to advanced IoT and robotics. 
          Empowering Uganda's next generation of innovators with hands-on STEM education.
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
              <label className="text-sm font-medium text-on-surface/70 mb-2 block">Search Kits</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-on-surface/40" />
                <Input
                  placeholder="Search educational kits..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Difficulty Level */}
            <div className="mb-6">
              <label className="text-sm font-medium text-on-surface/70 mb-3 block">Difficulty Level</label>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedDifficulty("all")}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    selectedDifficulty === "all" ? "bg-primary text-on-primary" : "hover:bg-surface-variant/50"
                  }`}
                >
                  All Levels
                </button>
                {difficultyLevels.map((level) => (
                  <button
                    key={level}
                    onClick={() => setSelectedDifficulty(level)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      selectedDifficulty === level ? "bg-primary text-on-primary" : "hover:bg-surface-variant/50"
                    }`}
                  >
                    {level}
                  </button>
                ))}
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
                {kitCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedSubcategory(category)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center gap-2 ${
                      selectedSubcategory === category ? "bg-primary text-on-primary" : "hover:bg-surface-variant/50"
                    }`}
                  >
                    {getCategoryIcon(category)}
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
                {sortedKits.length} educational kits available
              </h2>
              <span className="text-sm text-on-surface/60">• Building tomorrow's innovators</span>
            </div>
            
            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="px-3 py-2 border border-outline-variant/20 rounded-lg bg-surface text-on-surface text-sm"
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="rating">Sort by Rating</option>
                <option value="difficulty">Sort by Difficulty</option>
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

          {/* Educational Kits Grid */}
          <div className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}>
            {sortedKits.map((kit, index) => (
              <motion.div
                key={kit.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/supply/product/${kit.id}`}>
                  <div className="bg-surface rounded-3xl border border-outline-variant/20 overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="aspect-video bg-surface-variant/30 p-6 flex items-center justify-center">
                      <GraduationCap className="w-16 h-16 text-primary/40" />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <Badge className={`${getDifficultyColor(kit.difficultyLevel)} text-xs mb-2`}>
                          {kit.difficultyLevel}
                        </Badge>
                        <div className="flex items-center gap-1">
                          {getCategoryIcon(kit.subcategory)}
                          <span className="text-xs text-on-surface/60">{kit.subcategory}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold text-on-surface mb-2 line-clamp-2">
                        {kit.name}
                      </h3>
                      
                      <p className="text-sm text-on-surface/70 mb-4 line-clamp-2">
                        {kit.description}
                      </p>

                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`h-3 w-3 ${i < Math.floor(kit.rating) ? "fill-warning text-warning" : "text-outline"}`} />
                          ))}
                        </div>
                        <span className="text-xs text-on-surface/60">({kit.reviews})</span>
                      </div>

                      <div className="flex items-center gap-4 mb-4 text-xs text-on-surface/60">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{kit.estimatedProjectTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          <span>{kit.ageRange}</span>
                        </div>
                      </div>

                      <Badge className="bg-success text-on-success text-xs mb-4">
                        In Stock
                      </Badge>

                      <div className="mb-4">
                        <div className="text-xl font-bold text-primary">
                          UGX {kit.studentPrice.toLocaleString()}
                        </div>
                        <div className="text-xs text-success">
                          Student: UGX {kit.studentPrice.toLocaleString()}
                        </div>
                      </div>

                      <Button
                        onClick={(e) => {
                          e.preventDefault()
                          addToCart({
                            id: kit.id,
                            name: kit.name,
                            price: kit.studentPrice,
                            image: kit.image,
                            quantity: 1
                          })
                        }}
                        className="w-full bg-primary hover:bg-primary/90 text-on-primary rounded-2xl"
                      >
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {sortedKits.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-on-surface/20 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-on-surface mb-2">No kits found</h3>
              <p className="text-on-surface/60">Try adjusting your filters or search terms</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
