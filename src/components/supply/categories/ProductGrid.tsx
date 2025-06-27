"use client"

import { motion } from "framer-motion"
import { ProductCard } from "./ProductCard"
import { ProductListItem } from "./ProductListItem"

interface ProductGridProps {
  products: any[]
  viewMode: 'grid' | 'list'
  onAddToCart: (product: any) => void
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
}

export function ProductGrid({ products, viewMode, onAddToCart }: ProductGridProps) {
  if (viewMode === 'list') {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-4"
      >
        {products.map((product) => (
          <motion.div key={product.id} variants={itemVariants}>
            <ProductListItem
              product={product}
              onAddToCart={onAddToCart}
            />
          </motion.div>
        ))}
      </motion.div>
    )
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      {products.map((product) => (
        <motion.div key={product.id} variants={itemVariants}>
          <ProductCard
            product={product}
            onAddToCart={onAddToCart}
          />
        </motion.div>
      ))}
    </motion.div>
  )
} 