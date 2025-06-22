"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Menu, User, BookOpen, Calendar, Trophy, Bell } from "lucide-react"

const schools = [
  { name: "Software & IT", href: "/education/software" },
  { name: "Engineering & Hardware", href: "/education/engineering" },
  { name: "Digital Arts & Media", href: "/education/design" },
  { name: "Languages", href: "/education/languages" },
  { name: "Professional Development", href: "/education/business" },
]

export function EducationNavigation() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white/80 backdrop-blur-lg border-b border-gray-100 sticky top-0 z-50"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/education" className="flex items-center space-x-3">
            <div className="text-2xl font-display font-bold text-black">
              CARTHIGAN
            </div>
            <Badge className="bg-green-500 text-white border-0 text-xs">
              EDUCATION
            </Badge>
          </Link>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/education" className="text-gray-600 hover:text-black transition-colors font-medium">
              Dashboard
            </Link>
            <Link href="/education/browse" className="text-gray-600 hover:text-black transition-colors font-medium">
              Browse Courses
            </Link>
            <Link href="/education/my-courses" className="text-gray-600 hover:text-black transition-colors font-medium">
              My Learning
            </Link>
            <Link href="/education/certificates" className="text-gray-600 hover:text-black transition-colors font-medium">
              Certificates
            </Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Search className="h-5 w-5 text-gray-600" />
            </Button>

            {/* Notifications */}
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-5 w-5 text-gray-600" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
            </Button>

            {/* Profile */}
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center cursor-pointer">
              <span className="text-white font-semibold text-sm">S</span>
            </div>

            {/* Mobile Menu */}
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  )
} 