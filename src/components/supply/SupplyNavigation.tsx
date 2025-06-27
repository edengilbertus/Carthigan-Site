"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCartStore } from "@/lib/store/cart"
import { ShoppingCart, Search, Menu, User } from "lucide-react"

const categories = [
  { name: "Electronics & Components", href: "/supply/category/electronics" },
  { name: "Sensors & Modules", href: "/supply/category/sensors" },
  { name: "Microcontrollers", href: "/supply/category/microcontrollers" },
  { name: "Development Boards", href: "/supply/category/dev-boards" },
  { name: "Tools & Equipment", href: "/supply/category/tools" },
  { name: "Educational Kits", href: "/supply/category/education" },
]

export function SupplyNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isHydrated, setIsHydrated] = useState(false)
  const { getTotalItems, toggleCart } = useCartStore()
  
  // Only show cart count after hydration to prevent mismatch
  const cartItemCount = isHydrated ? getTotalItems() : 0

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-6 py-2">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4 text-gray-600">
              <span>📞 +256 (0) 123 456 789</span>
              <span>✈️ Free delivery in Kampala</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/supply/track-order" className="text-gray-600 hover:text-black">
                Track Order
              </Link>
              <Link href="/supply/help" className="text-gray-600 hover:text-black">
                Help
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50"
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/supply" className="flex items-center space-x-3">
              <div className="text-2xl font-display font-bold text-black">
                CARTHIGAN
              </div>
              <div className="bg-orange-500 text-white px-2 py-1 rounded text-sm font-medium">
                SUPPLY
              </div>
            </Link>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search electronics, components, tools..."
                  className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <Button
                  size="sm"
                  className="absolute right-1 top-1 bg-orange-500 hover:bg-orange-600"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              {/* Account */}
              <Link href="/supply/account" className="hidden md:flex items-center space-x-2 text-gray-600 hover:text-black">
                <User className="h-5 w-5" />
                <span className="text-sm">Account</span>
              </Link>

              {/* Cart */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleCart}
                className="relative flex items-center space-x-2"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="hidden md:inline text-sm">Cart</span>
                {cartItemCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-orange-500 text-white text-xs">
                    {cartItemCount}
                  </Badge>
                )}
              </Button>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Categories Navigation */}
          <div className="hidden md:flex border-t border-gray-100 py-3">
            <div className="flex items-center space-x-8">
              <Button
                variant="ghost"
                className="flex items-center space-x-1 text-sm font-medium"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-4 w-4" />
                <span>All Categories</span>
              </Button>
              {categories.slice(0, 5).map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="text-sm text-gray-600 hover:text-black transition-colors"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-gray-100 bg-white"
          >
            <div className="container mx-auto px-6 py-4">
              {/* Mobile Search */}
              <div className="mb-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg"
                  />
                  <Button size="sm" className="absolute right-1 top-1 bg-orange-500">
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Mobile Categories */}
              <div className="space-y-2">
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    href={category.href}
                    className="block py-2 text-gray-600 hover:text-black"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </motion.header>
    </>
  )
} 