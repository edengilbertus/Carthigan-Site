import { ElectronicComponent, allElectronicsData, microcontrollerExtensions, devBoardExtensions } from './electronics'
import { DevelopmentBoard, allDevelopmentBoards } from './dev-boards'
import { MCUChip, allMCUChips } from './mcu-chips'
import { ToolProduct, allTools } from './tools'
import { EducationalKit, allEducationalKits } from './educational-kits'
import { SensorModule, allSensorsModules } from './sensors-modules'

// Unified product interface
export interface UnifiedProduct {
  id: string
  name: string
  description: string
  category: string
  subcategory: string
  price: number
  studentPrice: number
  image: string
  inStock: boolean
  stockLevel: number
  rating: number
  reviews: number
  specifications?: Record<string, string>
  compatibility: string[]
  projects: string[]
  leadTime: string
  tags: string[]
  type: 'electronics' | 'development-board' | 'mcu-chip' | 'tool' | 'educational-kit' | 'sensor-module'
  // Additional fields that may exist in some products
  supplier?: string
  keyFeatures?: string[]
  overview?: {
    type: string
    keySpecs: string
    applications: string
    keyFeatures?: string | string[]
    bestFor?: string
  }
  // Tool-specific fields
  keySpecs?: Record<string, string>
  bestFor?: string
  proTip?: string
  features?: string[]
  // Educational kit specific fields
  targetAudience?: string
  whatYouLearn?: string[]
  kitContents?: string[]
  estimatedProjectTime?: string
  difficultyLevel?: string
  ageRange?: string
}

// Convert electronics to unified format
const electronicsAsUnified: UnifiedProduct[] = allElectronicsData.map(item => ({
  ...item,
  type: 'electronics' as const,
  specifications: item.specifications || {}
}))

// Convert dev boards to unified format (including extensions from electronics)  
const devBoardsAsUnified: UnifiedProduct[] = [...allDevelopmentBoards, ...devBoardExtensions].map(board => ({
  ...board,
  type: 'development-board' as const,
  supplier: `Lead time: ${board.leadTime}`,
  specifications: board.specifications || {},
  overview: board.overview ? {
    type: `${board.category} Development Board`,
    keySpecs: 'processor' in board.overview ? `${board.overview.processor}, ${board.overview.memory}` : board.overview.keySpecs,
    applications: (board.projects || []).join(', '),
    keyFeatures: typeof board.overview.keyFeatures === 'string' ? board.overview.keyFeatures : board.overview.keyFeatures?.join(', ') || '',
    bestFor: board.overview.bestFor
  } : undefined
}))

// Convert MCU chips to unified format (including extensions from electronics)
const mcuChipsAsUnified: UnifiedProduct[] = [...allMCUChips, ...microcontrollerExtensions].map(chip => ({
  ...chip,
  type: 'mcu-chip' as const,
  specifications: chip.specifications || {}
}))

// Convert tools to unified format
const toolsAsUnified: UnifiedProduct[] = allTools.map(tool => ({
  ...tool,
  type: 'tool' as const,
  compatibility: [],
  projects: [],
  leadTime: 'In Stock',
  specifications: tool.specifications || {},
  overview: tool.overview ? {
    type: `Electronics Tool`,
    keySpecs: Object.entries(tool.keySpecs || {}).map(([key, value]) => `${key}: ${value}`).join(', '),
    applications: tool.bestFor || 'General electronics work',
    keyFeatures: tool.features?.join(', ') || '',
    bestFor: tool.bestFor || 'Electronics enthusiasts and professionals'
  } : undefined
}))

// Convert educational kits to unified format
const educationalKitsAsUnified: UnifiedProduct[] = allEducationalKits.map(kit => ({
  ...kit,
  type: 'educational-kit' as const,
  compatibility: [],
  projects: kit.whatYouLearn || [],
  leadTime: 'In Stock',
  specifications: kit.specifications || {},
  overview: {
    type: `Educational Kit - ${kit.difficultyLevel}`,
    keySpecs: `${kit.estimatedProjectTime}, ${kit.ageRange}`,
    applications: kit.targetAudience || 'Educational use',
    keyFeatures: (kit.features || []).join(', '),
    bestFor: kit.targetAudience || 'Students and educators'
  }
}))

// Convert sensors and modules to unified format
const sensorsModulesAsUnified: UnifiedProduct[] = allSensorsModules.map(sensor => ({
  ...sensor,
  type: 'sensor-module' as const,
  specifications: sensor.specifications || {}
}))

// All products combined
export const allProducts: UnifiedProduct[] = [
  ...electronicsAsUnified,
  ...devBoardsAsUnified,
  ...mcuChipsAsUnified,
  ...toolsAsUnified,
  ...educationalKitsAsUnified,
  ...sensorsModulesAsUnified
]

// Helper functions
export function getProductById(id: string): UnifiedProduct | undefined {
  return allProducts.find(product => product.id === id)
}

export function getProductsByCategory(category: string): UnifiedProduct[] {
  return allProducts.filter(product => product.category === category)
}

export function getProductsByType(type: 'electronics' | 'development-board' | 'mcu-chip' | 'tool' | 'educational-kit' | 'sensor-module'): UnifiedProduct[] {
  return allProducts.filter(product => product.type === type)
}

export function getRelatedProducts(productId: string, limit: number = 8): UnifiedProduct[] {
  const product = getProductById(productId)
  if (!product) return []
  
  return allProducts
    .filter(p => 
      p.id !== productId && 
      (p.category === product.category || p.subcategory === product.subcategory)
    )
    .slice(0, limit)
}

// Export categories info
export const productCategories = {
  electronics: {
    name: 'Electronics & Components',
    count: electronicsAsUnified.length,
    href: '/supply/category/electronics'
  },
  'development-boards': {
    name: 'Development Boards', 
    count: devBoardsAsUnified.length,
    href: '/supply/category/dev-boards'
  },
  'mcu-chips': {
    name: 'MCU Chips & SoCs',
    count: mcuChipsAsUnified.length,
    href: '/supply/category/mcu-chips'
  },
  tools: {
    name: 'Tools & Equipment',
    count: toolsAsUnified.length,
    href: '/supply/category/tools'
  },
  'educational-kits': {
    name: 'Educational Kits',
    count: educationalKitsAsUnified.length,
    href: '/supply/category/education'
  },
  'sensors-modules': {
    name: 'Sensors & Modules',
    count: sensorsModulesAsUnified.length,
    href: '/supply/category/sensors'
  }
}
