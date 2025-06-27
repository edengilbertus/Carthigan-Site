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
import { allMCUChips } from "@/lib/data/mcu-chips"

// Existing microcontroller board products data
const microcontrollerBoards = [
  {
    id: "mcu-arduino-uno-r4",
    name: "Arduino UNO R4 WiFi",
    description: "Latest Arduino UNO with built-in WiFi and enhanced performance",
    price: 195000,
    studentPrice: 165750,
    image: "/images/microcontrollers/arduino-uno-r4.jpg",
    inStock: true,
    stockLevel: 45,
    rating: 4.9,
    reviewCount: 234,
    category: "microcontrollers",
    subcategory: "arduino-boards",
    type: "board",
    specs: {
      processor: "Renesas RA4M1 ARM Cortex-M4",
      frequency: "48 MHz",
      memory: "256KB Flash, 32KB RAM",
      connectivity: "WiFi, USB-C",
      voltage: "5V/3.3V"
    },
    features: ["Built-in WiFi", "32-bit ARM processor", "USB-C connector", "Enhanced debugging"],
    tags: ["arduino", "wifi", "beginner-friendly", "usb-c"]
  },
  {
    id: "mcu-esp32-devkit",
    name: "ESP32 DevKit C V4",
    description: "Powerful WiFi + Bluetooth microcontroller for IoT projects",
    price: 62500,
    studentPrice: 53125,
    image: "/images/microcontrollers/esp32-devkit.jpg",
    inStock: true,
    stockLevel: 120,
    rating: 4.8,
    reviewCount: 456,
    category: "microcontrollers",
    subcategory: "esp32-boards",
    type: "board",
    specs: {
      processor: "Dual-core Xtensa LX6",
      frequency: "240 MHz",
      memory: "520KB SRAM, 4MB Flash",
      connectivity: "WiFi, Bluetooth",
      voltage: "3.3V"
    },
    features: ["Dual-core processor", "WiFi + Bluetooth", "Low power modes", "Rich peripherals"],
    tags: ["esp32", "wifi", "bluetooth", "iot", "dual-core"]
  },
  {
    id: "mcu-esp8266-nodemcu",
    name: "ESP8266 NodeMCU V3",
    description: "Cost-effective WiFi microcontroller board",
    price: 35000,
    studentPrice: 29750,
    image: "/images/microcontrollers/esp8266-nodemcu.jpg",
    inStock: true,
    stockLevel: 95,
    rating: 4.7,
    reviewCount: 312,
    category: "microcontrollers",
    subcategory: "esp8266-boards",
    type: "board",
    specs: {
      processor: "Tensilica L106 32-bit",
      frequency: "80 MHz",
      memory: "128KB RAM, 4MB Flash",
      connectivity: "WiFi 802.11 b/g/n",
      voltage: "3.3V"
    },
    features: ["Built-in WiFi", "Arduino IDE compatible", "USB programming", "Cost-effective"],
    tags: ["esp8266", "wifi", "budget", "iot", "arduino-compatible"]
  },
  {
    id: "mcu-stm32-nucleo-f446re",
    name: "STM32 Nucleo-F446RE",
    description: "High-performance ARM Cortex-M4 development board",
    price: 95000,
    studentPrice: 80750,
    image: "/images/microcontrollers/stm32-nucleo-f446re.jpg",
    inStock: true,
    stockLevel: 35,
    rating: 4.6,
    reviewCount: 128,
    category: "microcontrollers",
    subcategory: "stm32-boards",
    type: "board",
    specs: {
      processor: "ARM Cortex-M4F",
      frequency: "180 MHz",
      memory: "512KB Flash, 128KB RAM",
      connectivity: "USB, SWD",
      voltage: "3.3V"
    },
    features: ["FPU support", "Rich peripherals", "Arduino headers", "ST-LINK debugger"],
    tags: ["stm32", "arm", "cortex-m4", "high-performance", "professional"]
  },
  {
    id: "mcu-arduino-nano-esp32",
    name: "Arduino Nano ESP32",
    description: "Compact Arduino board with ESP32-S3 processor",
    price: 125000,
    studentPrice: 106250,
    image: "/images/microcontrollers/arduino-nano-esp32.jpg",
    inStock: true,
    stockLevel: 55,
    rating: 4.8,
    reviewCount: 189,
    category: "microcontrollers",
    subcategory: "arduino-boards",
    type: "board",
    specs: {
      processor: "ESP32-S3 dual-core",
      frequency: "240 MHz",
      memory: "512KB SRAM, 8MB Flash",
      connectivity: "WiFi, Bluetooth, USB-C",
      voltage: "3.3V"
    },
    features: ["Compact form factor", "WiFi + Bluetooth", "USB-C", "Arduino ecosystem"],
    tags: ["arduino", "esp32", "compact", "wifi", "bluetooth"]
  },
  {
    id: "mcu-rpi-pico",
    name: "Raspberry Pi Pico",
    description: "Low-cost microcontroller board with RP2040 chip",
    price: 28000,
    studentPrice: 23800,
    image: "/images/microcontrollers/rpi-pico.jpg",
    inStock: true,
    stockLevel: 150,
    rating: 4.7,
    reviewCount: 267,
    category: "microcontrollers",
    subcategory: "raspberry-pi-boards",
    type: "board",
    specs: {
      processor: "Dual-core ARM Cortex-M0+",
      frequency: "133 MHz",
      memory: "264KB SRAM, 2MB Flash",
      connectivity: "USB, SWD",
      voltage: "3.3V"
    },
    features: ["Dual-core M0+", "PIO state machines", "Low cost", "MicroPython support"],
    tags: ["raspberry-pi", "rp2040", "budget", "micropython", "pio"]
  },
  {
    id: "mcu-seeed-xiao-esp32c3",
    name: "Seeed XIAO ESP32C3",
    description: "Ultra-small ESP32-C3 development board",
    price: 45000,
    studentPrice: 38250,
    image: "/images/microcontrollers/seeed-xiao-esp32c3.jpg",
    inStock: true,
    stockLevel: 75,
    rating: 4.6,
    reviewCount: 142,
    category: "microcontrollers",
    subcategory: "seeed-boards",
    type: "board",
    specs: {
      processor: "RISC-V 32-bit",
      frequency: "160 MHz",
      memory: "400KB SRAM, 4MB Flash",
      connectivity: "WiFi, Bluetooth 5.0, USB-C",
      voltage: "3.3V"
    },
    features: ["Ultra-small size", "RISC-V processor", "WiFi + BLE 5.0", "USB-C"],
    tags: ["seeed", "xiao", "risc-v", "ultra-small", "wifi", "ble"]
  },
  {
    id: "mcu-teensy-41",
    name: "Teensy 4.1",
    description: "High-performance microcontroller with Ethernet",
    price: 185000,
    studentPrice: 157250,
    image: "/images/microcontrollers/teensy-41.jpg",
    inStock: true,
    stockLevel: 25,
    rating: 4.9,
    reviewCount: 98,
    category: "microcontrollers",
    subcategory: "teensy-boards",
    type: "board",
    specs: {
      processor: "ARM Cortex-M7",
      frequency: "600 MHz",
      memory: "8MB RAM, 7.75MB Flash",
      connectivity: "Ethernet, USB, CAN",
      voltage: "3.3V"
    },
    features: ["600 MHz Cortex-M7", "Built-in Ethernet", "High RAM", "Audio library"],
    tags: ["teensy", "cortex-m7", "high-performance", "ethernet", "audio"]
  }
]

// Convert MCU chips to compatible format and add type field
const mcuChips = allMCUChips.map(chip => ({
  ...chip,
  reviewCount: chip.reviews,
  type: "chip",
  specs: {
    processor: chip.specifications?.["Architecture"] || "N/A",
    frequency: chip.specifications?.["Clock Speed"] || "N/A",
    memory: `${chip.specifications?.["Flash Memory"] || "N/A"} Flash, ${chip.specifications?.["SRAM"] || chip.specifications?.["RAM"] || "N/A"} RAM`,
    connectivity: chip.specifications?.["Connectivity"] || "N/A",
    voltage: "3.3V"
  },
  features: Object.keys(chip.specifications || {}).slice(0, 4)
}))

// Combined products array
const allMicrocontrollerProducts = [...microcontrollerBoards, ...mcuChips]

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

  // Get unique subcategories and types
  const subcategories = useMemo(() => {
    const cats = allMicrocontrollerProducts.map(p => p.subcategory)
    return [...new Set(cats)]
  }, [])

  const productTypes = useMemo(() => {
    const types = allMicrocontrollerProducts.map(p => p.type)
    return [...new Set(types)]
  }, [])

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = allMicrocontrollerProducts.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      
      const matchesSubcategory = selectedSubcategory === "all" || product.subcategory === selectedSubcategory
      const matchesType = selectedType === "all" || product.type === selectedType
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
        case "popularity": return b.reviewCount - a.reviewCount
        default: return 0
      }
    })

    return filtered
  }, [searchTerm, selectedSubcategory, selectedType, priceRange, sortBy, availabilityFilter])

  const handleAddToCart = (product: typeof allMicrocontrollerProducts[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      sku: product.id
    })
    toggleCart()
  }

  const getStockStatus = (product: typeof allMicrocontrollerProducts[0]) => {
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
                          p.features?.some(f => f.toLowerCase().includes('wifi')) ||
                          p.specs?.connectivity?.toLowerCase().includes('wifi') ||
                          p.tags?.some(t => t.toLowerCase().includes('wifi'))
                        ).length}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bluetooth className="h-4 w-4 text-secondary" />
                      <span className="text-sm">Bluetooth</span>
                      <Badge className="bg-secondary/10 text-secondary text-xs">
                        {allMicrocontrollerProducts.filter(p => 
                          p.features?.some(f => f.toLowerCase().includes('bluetooth')) ||
                          p.specs?.connectivity?.toLowerCase().includes('bluetooth') ||
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
                          p.specs?.processor?.toLowerCase().includes('risc-v') ||
                          p.tags?.some(t => t.toLowerCase().includes('risc-v'))
                        ).length}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <CircuitBoard className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Bare Chips</span>
                      <Badge className="bg-green-100 text-green-600 text-xs">
                        {allMicrocontrollerProducts.filter(p => p.type === 'chip').length}
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
          </motion.div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-on-surface">
                  {filteredProducts.length} Microcontroller Products
                </h2>
                <p className="text-on-surface/60">Development boards and MCU chips for every project</p>
              </div>

              <div className="flex items-center gap-4">
                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="px-3 py-2 border border-outline-variant rounded-lg bg-surface"
                >
                  <option value="popularity">Most Popular</option>
                  <option value="name">Name A-Z</option>
                  <option value="price">Price Low-High</option>
                  <option value="rating">Highest Rated</option>
                </select>

                {/* View Mode */}
                <div className="flex border border-outline-variant rounded-lg overflow-hidden">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="rounded-none"
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="rounded-none"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Products */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredProducts.map((product, index) => {
                const stockStatus = getStockStatus(product)
                
                return (
                  <Link key={product.id} href={`/supply/product/${product.id}`}>
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="bg-surface rounded-3xl border border-outline-variant/20 overflow-hidden hover:shadow-lg transition-all duration-300 group"
                    >
                      {/* Product Image */}
                      <div className="aspect-square bg-surface-variant/30 p-6 flex items-center justify-center relative">
                        <div className="w-full h-full flex items-center justify-center">
                          {product.type === 'chip' ? (
                            <CircuitBoard className="w-16 h-16 text-primary/40" />
                          ) : (
                            <Cpu className="w-16 h-16 text-primary/40" />
                          )}
                        </div>
                        <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${stockStatus.color}`}>
                          {stockStatus.text}
                        </div>
                        <div className="absolute top-3 left-3 flex gap-1">
                          {getTypeIcon(product.type)}
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <Badge className="bg-primary/10 text-primary mb-2 text-xs">
                            {getCategoryDisplayName(product.subcategory)}
                          </Badge>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-warning text-warning" />
                            <span className="text-sm text-on-surface/70">{product.rating}</span>
                          </div>
                        </div>

                        <h3 className="text-lg font-semibold text-on-surface mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {product.name}
                        </h3>
                        
                        <p className="text-sm text-on-surface/60 mb-4 line-clamp-2">{product.description}</p>

                        {/* Key Specs */}
                        <div className="space-y-1 mb-4 text-xs">
                          <div>
                            <span className="font-medium">Processor:</span>
                            <span className="text-on-surface/60 ml-1 line-clamp-1">{product.specs.processor}</span>
                          </div>
                          <div>
                            <span className="font-medium">Frequency:</span>
                            <span className="text-on-surface/60 ml-1">{product.specs.frequency}</span>
                          </div>
                        </div>

                        {/* Price and Actions */}
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-lg font-bold text-primary">
                              {product.studentPrice.toLocaleString()} UGX
                            </div>
                            <div className="text-xs text-on-surface/50 line-through">
                              {product.price.toLocaleString()} UGX
                            </div>
                          </div>
                          <Button
                            size="sm"
                            onClick={(e) => {
                              e.preventDefault()
                              handleAddToCart(product)
                            }}
                            disabled={!product.inStock}
                            className="shrink-0"
                          >
                            <ShoppingCart className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                )
              })}
            </motion.div>

            {filteredProducts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-12"
              >
                <Package className="h-16 w-16 text-on-surface/30 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-on-surface mb-2">No products found</h3>
                <p className="text-on-surface/70">Try adjusting your filters or search term</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}