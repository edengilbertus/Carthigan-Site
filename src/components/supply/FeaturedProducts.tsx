"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Star, ShoppingCart, Heart, Eye } from "lucide-react"
import { useCartStore } from "@/lib/store/cart"
import { useState } from "react"

const featuredProducts = [
  {
    id: "1",
    name: "Orange Pi 5 Plus 16GB",
    category: "Single-Board Computers",
    price: 245000,
    originalPrice: 280000,
    rating: 4.8,
    reviews: 124,
    image: "🔧",
    badge: "BESTSELLER",
    description: "Most powerful Orange Pi with 16GB RAM for AI and edge computing",
    detailedDescription: "The Orange Pi 5 Plus 16GB is a high-performance single-board computer featuring RK3588 8-core 64-bit processor, 16GB LPDDR4X RAM, and Mali-G610 MP4 GPU. Perfect for AI development, edge computing, and professional applications in Uganda.",
    specifications: [
      "RK3588 Octa-core ARM Cortex-A76/A55 CPU",
      "16GB LPDDR4X RAM",
      "Mali-G610 MP4 GPU",
      "eMMC/microSD support",
      "WiFi 6 & Bluetooth 5.0",
      "Multiple USB 3.0 & 2.0 ports"
    ]
  },
  {
    id: "2",
    name: "ESP32-S3 DevKit",
    category: "Microcontrollers",
    price: 45000,
    originalPrice: 55000,
    rating: 4.9,
    reviews: 89,
    image: "📡",
    badge: "NEW",
    description: "Advanced ESP32 with WiFi, Bluetooth, and AI acceleration",
    detailedDescription: "The ESP32-S3 development kit combines powerful dual-core processing with advanced connectivity options and AI acceleration capabilities, making it ideal for IoT projects and smart device development.",
    specifications: [
      "Xtensa dual-core 32-bit LX7 microprocessor",
      "512KB SRAM, 384KB ROM",
      "WiFi 802.11 b/g/n & Bluetooth 5 LE",
      "Vector instructions for AI acceleration",
      "Rich peripheral interfaces",
      "Low power consumption modes"
    ]
  },
  {
    id: "3",
    name: "Professional Soldering Station",
    category: "Tools & Equipment",
    price: 125000,
    originalPrice: 150000,
    rating: 4.7,
    reviews: 67,
    image: "🔥",
    badge: "FEATURED",
    description: "Temperature-controlled station with digital display",
    detailedDescription: "Professional-grade soldering station with precise temperature control, digital display, and ergonomic design. Essential for electronics manufacturing and repair work in Uganda.",
    specifications: [
      "Temperature range: 200°C - 480°C",
      "Digital temperature display",
      "Anti-static design",
      "Quick heating (30 seconds)",
      "Replaceable soldering tips",
      "Auto sleep mode"
    ]
  },
  {
    id: "4",
    name: "Arduino Learning Kit",
    category: "Educational Kits",
    price: 85000,
    originalPrice: 95000,
    rating: 4.9,
    reviews: 156,
    image: "🎓",
    badge: "STUDENT PICK",
    description: "Complete starter kit with sensors, actuators, and tutorials",
    detailedDescription: "Comprehensive Arduino learning kit designed for students and beginners. Includes Arduino Uno, breadboard, sensors, actuators, and step-by-step tutorials in both English and Luganda.",
    specifications: [
      "Arduino Uno R3 microcontroller",
      "Breadboard and jumper wires",
      "LED lights, resistors, sensors",
      "Servo motor and buzzer",
      "Comprehensive tutorial book",
      "Online video tutorials"
    ]
  },
  {
    id: "5",
    name: "3D Printer Filament Bundle",
    category: "3D Printing",
    price: 65000,
    originalPrice: 75000,
    rating: 4.6,
    reviews: 43,
    image: "🖨️",
    badge: "BUNDLE",
    description: "5 colors of premium PLA filament for your projects",
    detailedDescription: "High-quality PLA filament bundle featuring 5 vibrant colors. Perfect for 3D printing projects, prototyping, and creative applications. Compatible with most FDM 3D printers.",
    specifications: [
      "Premium PLA material",
      "5 colors: Red, Blue, Green, Yellow, Black",
      "1.75mm diameter",
      "1kg per spool (5kg total)",
      "Low warping and easy printing",
      "Eco-friendly and biodegradable"
    ]
  },
  {
    id: "6",
    name: "Digital Oscilloscope 100MHz",
    category: "Test Equipment",
    price: 320000,
    originalPrice: 380000,
    rating: 4.8,
    reviews: 29,
    image: "📊",
    badge: "PRO",
    description: "Professional oscilloscope for circuit analysis and debugging",
    detailedDescription: "Professional 100MHz digital oscilloscope with 2-channel input, high-resolution display, and advanced triggering capabilities. Essential for electronics design and debugging.",
    specifications: [
      "100MHz bandwidth, 2 channels",
      "1 GSa/s real-time sampling rate",
      "7-inch color TFT display",
      "Advanced triggering modes",
      "USB connectivity and data storage",
      "Built-in signal generator"
    ]
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
    },
  },
}

export function FeaturedProducts() {
  const { addItem } = useCartStore()
  const [quickViewProduct, setQuickViewProduct] = useState<typeof featuredProducts[0] | null>(null)

  const handleAddToCart = (product: typeof featuredProducts[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      sku: product.id
    })
  }

  const handleQuickView = (product: typeof featuredProducts[0]) => {
    setQuickViewProduct(product)
  }

  return (
    <section className="py-24 bg-surface-variant/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="bg-secondary/10 text-secondary mb-4 px-4 py-2 rounded-full">
            ⭐ Top Picks
          </Badge>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-on-surface mb-6">
            Featured Products
          </h2>
          <p className="text-xl text-on-surface/70 max-w-3xl mx-auto">
            Hand-picked products loved by makers, students, and professionals across Uganda
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-surface rounded-3xl shadow-md border border-outline-variant/20 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Product Badge */}
              <div className="relative p-6 pb-4">
                <Badge className={`
                  absolute top-4 right-4 rounded-full text-xs
                  ${product.badge === 'NEW' ? 'bg-tertiary text-on-tertiary' :
                    product.badge === 'BESTSELLER' ? 'bg-primary text-on-primary' :
                    product.badge === 'FEATURED' ? 'bg-secondary text-on-secondary' :
                    product.badge === 'STUDENT PICK' ? 'bg-success text-on-success' :
                    product.badge === 'BUNDLE' ? 'bg-warning text-on-warning' :
                    'bg-error text-on-error'
                  }
                `}>
                  {product.badge}
                </Badge>

                {/* Product Image */}
                <div className="aspect-square bg-surface-variant rounded-2xl flex items-center justify-center mb-4">
                  <div className="text-6xl">{product.image}</div>
                </div>

                {/* Product Info */}
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-on-surface/60">{product.category}</p>
                    <h3 className="text-xl font-bold text-on-surface">{product.name}</h3>
                  </div>

                  <p className="text-sm text-on-surface/70 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) 
                              ? 'fill-warning text-warning' 
                              : 'text-outline'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-on-surface/60">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-primary">
                      UGX {product.price.toLocaleString()}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-on-surface/50 line-through">
                        UGX {product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="p-6 pt-0 space-y-3">
                <Button
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-primary hover:bg-primary/90 text-on-primary rounded-2xl py-3"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
                
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-outline-variant text-on-surface hover:bg-surface-variant/50 rounded-xl"
                    onClick={() => handleQuickView(product)}
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    Quick View
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-outline-variant text-on-surface hover:bg-surface-variant/50 rounded-xl px-3"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Products CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary/5 px-12 py-4 text-lg rounded-full"
          >
            View All Products
          </Button>
        </motion.div>
      </div>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <Dialog open={!!quickViewProduct} onOpenChange={() => setQuickViewProduct(null)}>
          <DialogContent className="sm:max-w-[700px]">
            <DialogHeader>
              <div className="flex items-start justify-between">
                <div>
                  <DialogTitle className="text-2xl font-bold">{quickViewProduct.name}</DialogTitle>
                  <p className="text-on-surface/60 mt-1">{quickViewProduct.category}</p>
                </div>
                <Badge className={`
                  rounded-full text-xs
                  ${quickViewProduct.badge === 'NEW' ? 'bg-tertiary text-on-tertiary' :
                    quickViewProduct.badge === 'BESTSELLER' ? 'bg-primary text-on-primary' :
                    quickViewProduct.badge === 'FEATURED' ? 'bg-secondary text-on-secondary' :
                    quickViewProduct.badge === 'STUDENT PICK' ? 'bg-success text-on-success' :
                    quickViewProduct.badge === 'BUNDLE' ? 'bg-warning text-on-warning' :
                    'bg-error text-on-error'
                  }
                `}>
                  {quickViewProduct.badge}
                </Badge>
              </div>
            </DialogHeader>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Product Image */}
              <div className="aspect-square bg-surface-variant rounded-2xl flex items-center justify-center">
                <div className="text-8xl">{quickViewProduct.image}</div>
              </div>
              
              {/* Product Details */}
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Description</h3>
                  <p className="text-on-surface/70 text-sm leading-relaxed">
                    {quickViewProduct.detailedDescription}
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">Specifications</h3>
                  <ul className="text-sm text-on-surface/70 space-y-1">
                    {quickViewProduct.specifications.map((spec, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(quickViewProduct.rating) 
                            ? 'fill-warning text-warning' 
                            : 'text-outline'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-on-surface/60">
                    {quickViewProduct.rating} ({quickViewProduct.reviews} reviews)
                  </span>
                </div>
                
                {/* Price */}
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-primary">
                    UGX {quickViewProduct.price.toLocaleString()}
                  </span>
                  {quickViewProduct.originalPrice > quickViewProduct.price && (
                    <span className="text-sm text-on-surface/50 line-through">
                      UGX {quickViewProduct.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                
                {/* Add to Cart Button */}
                <Button
                  onClick={() => {
                    handleAddToCart(quickViewProduct)
                    setQuickViewProduct(null)
                  }}
                  className="w-full bg-primary hover:bg-primary/90 text-on-primary rounded-2xl py-3"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
} 