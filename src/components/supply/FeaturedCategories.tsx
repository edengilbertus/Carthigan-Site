"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  Cpu, 
  Wrench, 
  GraduationCap, 
  Music, 
  Camera, 
  Box,
  Zap,
  Headphones
} from "lucide-react"

const categories = [
  {
    name: "Electronics & Components",
    slug: "electronics",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
    description: "Resistors, capacitors, ICs, and more",
    productCount: 150
  },
  {
    name: "Development Boards",
    slug: "dev-boards", 
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?w=400&h=300&fit=crop",
    description: "Arduino, Raspberry Pi, Orange Pi, ESP32",
    productCount: 45
  },
  {
    name: "Tools & Equipment",
    slug: "tools",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=400&h=300&fit=crop",
    description: "Soldering, testing, and workshop tools",
    productCount: 80
  },
  {
    name: "Educational Kits",
    slug: "education",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=400&h=300&fit=crop",
    description: "Learn electronics, programming, robotics",
    productCount: 35
  },
  {
    name: "Audio & Video",
    slug: "audio-video",
    icon: Music,
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
    description: "Microphones, speakers, recording gear",
    productCount: 42
  },
  {
    name: "3D Printing",
    slug: "3d-printing",
    icon: Box,
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop",
    description: "Printers, filaments, and accessories",
    productCount: 28
  }
]

export function FeaturedCategories() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of electronics, tools, and educational materials
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon
            
            return (
              <motion.div
                key={category.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/supply/category/${category.slug}`}>
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group-hover:border-orange-200">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                      
                      <div className="absolute top-4 left-4">
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                          <IconComponent className="h-6 w-6 text-orange-500" />
                        </div>
                      </div>

                      <div className="absolute top-4 right-4">
                        <div className="bg-orange-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                          {category.productCount}+ items
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {category.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-orange-500">
                          Explore Category
                        </span>
                        <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                          <svg 
                            className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Can't find what you're looking for?
          </p>
          <Link
            href="/supply/categories"
            className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium"
          >
            Browse All Categories
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}