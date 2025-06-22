"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCartStore } from "@/lib/store/cart"
import { Star, ShoppingCart, Heart, Eye } from "lucide-react"

// Mock popular products data
const popularProducts = [
  {
    id: "1",
    name: "Orange Pi 5 Plus",
    price: 245000,
    originalPrice: 280000,
    image: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 124,
    badge: "BESTSELLER",
    inStock: true,
    sku: "OPI-5PLUS-8GB"
  },
  {
    id: "2",
    name: "Arduino Mega 2560 R3",
    price: 85000,
    originalPrice: 95000,
    image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 89,
    badge: "POPULAR",
    inStock: true,
    sku: "ARD-MEGA-2560"
  },
  {
    id: "3",
    name: "Soldering Station 60W",
    price: 120000,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 67,
    badge: null,
    inStock: true,
    sku: "SOLDER-60W-STN"
  },
  {
    id: "4",
    name: "ESP32 Development Kit",
    price: 45000,
    originalPrice: 55000,
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 156,
    badge: "NEW",
    inStock: true,
    sku: "ESP32-DEVKIT-V1"
  },
  {
    id: "5",
    name: "3D Printer Filament PLA",
    price: 65000,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 43,
    badge: null,
    inStock: false,
    sku: "PLA-1KG-WHITE"
  },
  {
    id: "6",
    name: "Electronics Learning Kit",
    price: 180000,
    originalPrice: 220000,
    image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 78,
    badge: "EDUCATIONAL",
    inStock: true,
    sku: "LEARN-KIT-ADV"
  }
]

export function PopularProducts() {
  const { addItem } = useCartStore()

  const handleAddToCart = (product: typeof popularProducts[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      sku: product.sku
    })
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Popular Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most loved electronics and components, trusted by makers across Uganda
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Product Image */}
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1">
                  {product.badge && (
                    <Badge 
                      className={`text-xs font-medium ${
                        product.badge === 'BESTSELLER' ? 'bg-orange-500 text-white' :
                        product.badge === 'POPULAR' ? 'bg-green-500 text-white' :
                        product.badge === 'NEW' ? 'bg-blue-500 text-white' :
                        product.badge === 'EDUCATIONAL' ? 'bg-purple-500 text-white' :
                        'bg-gray-500 text-white'
                      }`}
                    >
                      {product.badge}
                    </Badge>
                  )}
                  {!product.inStock && (
                    <Badge className="bg-red-500 text-white text-xs">
                      OUT OF STOCK
                    </Badge>
                  )}
                </div>

                {/* Quick Actions */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors">
                    <Heart className="h-4 w-4 text-gray-600" />
                  </button>
                  <Link 
                    href={`/supply/product/${product.id}`}
                    className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                  >
                    <Eye className="h-4 w-4 text-gray-600" />
                  </Link>
                </div>

                {/* Discount Badge */}
                {product.originalPrice && (
                  <div className="absolute bottom-3 left-3">
                    <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                    </div>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-4">
                <div className="mb-2">
                  <h3 className="font-semibold text-gray-900 text-sm group-hover:text-orange-500 transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">SKU: {product.sku}</p>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-600">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-lg font-bold text-gray-900">
                      UGX {product.price.toLocaleString()}
                    </div>
                    {product.originalPrice && (
                      <div className="text-sm text-gray-500 line-through">
                        UGX {product.originalPrice.toLocaleString()}
                      </div>
                    )}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <Button
                  onClick={() => handleAddToCart(product)}
                  disabled={!product.inStock}
                  className={`w-full ${
                    product.inStock
                      ? 'bg-orange-500 hover:bg-orange-600 text-white'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                  size="sm"
                >
                  {product.inStock ? (
                    <>
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </>
                  ) : (
                    'Out of Stock'
                  )}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Products CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            asChild
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4"
          >
            <Link href="/supply/products">
              View All Products
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
} 