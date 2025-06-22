"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Truck, Shield, Headphones } from "lucide-react"

const featuredProducts = [
  {
    id: "1",
    name: "Orange Pi 5 Plus",
    price: 245000,
    originalPrice: 280000,
    image: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=400&h=300&fit=crop",
    badge: "FEATURED"
  },
  {
    id: "2", 
    name: "Arduino Mega 2560",
    price: 85000,
    originalPrice: 95000,
    image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?w=400&h=300&fit=crop",
    badge: "BESTSELLER"
  }
]

export function SupplyHero() {
  return (
    <section className="bg-gradient-to-br from-orange-50 to-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <Badge className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm">
                🚀 Now Live in Uganda
              </Badge>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 leading-tight">
                Your Complete
                <span className="text-orange-500 block">Tech Ecosystem</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                From Arduino boards to 3D printers. Everything you need to build, learn, and innovate. 
                Made for African makers.
              </p>
            </div>

            {/* Value Propositions */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Truck className="h-5 w-5 text-orange-500" />
                <span>Same-day delivery in Kampala</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Shield className="h-5 w-5 text-orange-500" />
                <span>1-year warranty</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Headphones className="h-5 w-5 text-orange-500" />
                <span>Local tech support</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg"
                asChild
              >
                <Link href="/supply/category/electronics">
                  Browse Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-4 text-lg"
                asChild
              >
                <Link href="/supply/education">View Educational Kits</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">300+</div>
                <div className="text-sm text-gray-600">Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Universities</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">24h</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Featured Products */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Main Featured Product */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex justify-between items-start mb-4">
                <Badge className="bg-orange-500 text-white">
                  {featuredProducts[0].badge}
                </Badge>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">
                    UGX {featuredProducts[0].price.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-500 line-through">
                    UGX {featuredProducts[0].originalPrice.toLocaleString()}
                  </div>
                </div>
              </div>
              
              <div className="aspect-[4/3] relative mb-4 rounded-xl overflow-hidden">
                <Image
                  src={featuredProducts[0].image}
                  alt={featuredProducts[0].name}
                  fill
                  className="object-cover"
                />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {featuredProducts[0].name}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Powerful single-board computer perfect for AI projects and edge computing applications.
              </p>
              
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                Add to Cart
              </Button>
            </div>

            {/* Secondary Featured Product */}
            <div className="bg-white rounded-xl shadow-md p-4 border border-gray-100">
              <div className="flex gap-4">
                <div className="w-20 h-20 relative rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={featuredProducts[1].image}
                    alt={featuredProducts[1].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <Badge className="bg-green-500 text-white text-xs mb-1">
                    {featuredProducts[1].badge}
                  </Badge>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    {featuredProducts[1].name}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-bold text-gray-900">
                      UGX {featuredProducts[1].price.toLocaleString()}
                    </span>
                    <span className="text-xs text-gray-500 line-through">
                      UGX {featuredProducts[1].originalPrice.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Promotion Banner */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-6 text-white">
              <div className="text-center">
                <div className="text-sm font-medium opacity-90 mb-1">Limited Time Offer</div>
                <div className="text-lg font-bold mb-2">Student Discount 15% OFF</div>
                <div className="text-sm opacity-90">Valid with university ID verification</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 