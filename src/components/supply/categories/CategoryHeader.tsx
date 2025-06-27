"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Package } from "lucide-react"

interface CategoryHeaderProps {
  title: string
  description: string
  productCount: number
  totalProducts: number
}

export function CategoryHeader({ title, description, productCount, totalProducts }: CategoryHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-12"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="p-4 bg-primary/10 rounded-2xl">
          <Package className="h-8 w-8 text-primary" />
        </div>
        <div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-on-surface">
            {title}
          </h1>
          <p className="text-xl text-on-surface/70 mt-2">
            {description}
          </p>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <Badge className="bg-primary/10 text-primary px-4 py-2 rounded-full">
          {productCount} of {totalProducts} products
        </Badge>
        {productCount < totalProducts && (
          <Badge className="bg-secondary/10 text-secondary px-4 py-2 rounded-full">
            Filters Active
          </Badge>
        )}
      </div>
    </motion.div>
  )
} 