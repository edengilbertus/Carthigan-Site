import { ElectronicComponent, allElectronicsData, microcontrollerExtensions, devBoardExtensions } from './electronics'
import { DevelopmentBoard, allDevelopmentBoards } from './dev-boards'
import { MCUChip, allMCUChips } from './mcu-chips'
import { ToolProduct, allTools } from './tools'
import { EducationalKit, allEducationalKits } from './educational-kits'
import { SensorModule, allSensorsModules } from './sensors-modules'
import { PowerComponent, allPowerComponents } from './power-components'
import { AudioVideoProduct, allAudioVideoProducts } from './audio-video'
import { ThreeDPrintingProduct, allThreeDPrintingProducts } from './3d-printing'

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
  type: 'electronics' | 'development-board' | 'mcu-chip' | 'tool' | 'educational-kit' | 'sensor-module' | 'power-component' | 'audio-video' | '3d-printing'
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

// Convert dev boards to unified format
const devBoardsAsUnified: UnifiedProduct[] = allDevelopmentBoards.map(board => ({
  ...board,
  type: 'development-board' as const,
  supplier: `Lead time: ${board.leadTime}`,
  specifications: board.specifications || {},
  overview: board.overview ? {
    type: `${board.category} Development Board`,
    keySpecs: board.overview.processor ? `${board.overview.processor}, ${board.overview.memory}` : 'Development Board',
    applications: 'Development Projects',
    keyFeatures: typeof board.overview.keyFeatures === 'string' ? board.overview.keyFeatures : 'Advanced Features',
    bestFor: board.overview.bestFor || 'Development Projects'
  } : undefined
}))

// Convert MCU chips to unified format
const mcuChipsAsUnified: UnifiedProduct[] = allMCUChips.map(chip => ({
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

// Convert power components to unified format
const powerComponentsAsUnified: UnifiedProduct[] = allPowerComponents.map(component => ({
  ...component,
  type: 'power-component' as const,
  specifications: component.specifications || {}
}))

// Convert audio-video products to unified format
const audioVideoAsUnified: UnifiedProduct[] = allAudioVideoProducts.map(product => ({
  ...product,
  type: 'audio-video' as const,
  studentPrice: product.studentPrice || product.price,
  compatibility: product.compatibility || [],
  projects: [],
  leadTime: product.leadTime || 'In Stock',
  specifications: product.specifications || {}
}))

// Convert 3D printing products to unified format
const threeDPrintingAsUnified: UnifiedProduct[] = allThreeDPrintingProducts.map(product => ({
  ...product,
  type: '3d-printing' as const,
  studentPrice: product.studentPrice || product.price,
  compatibility: product.compatibility || [],
  projects: [],
  leadTime: product.leadTime || 'In Stock',
  specifications: product.specifications || {}
}))

// All products combined
export const allProducts: UnifiedProduct[] = [
  ...electronicsAsUnified,
  ...devBoardsAsUnified,
  ...mcuChipsAsUnified,
  ...toolsAsUnified,
  ...educationalKitsAsUnified,
  ...sensorsModulesAsUnified,
  ...powerComponentsAsUnified,
  ...audioVideoAsUnified,
  ...threeDPrintingAsUnified
]

// Helper functions
export function getProductById(id: string): UnifiedProduct | undefined {
  return allProducts.find(product => product.id === id)
}

export function getProductsByCategory(category: string): UnifiedProduct[] {
  return allProducts.filter(product => product.category === category)
}

export function getProductsByType(type: 'electronics' | 'development-board' | 'mcu-chip' | 'tool' | 'educational-kit' | 'sensor-module' | 'power-component' | 'audio-video' | '3d-printing'): UnifiedProduct[] {
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
  },
  'power-components': {
    name: 'Power Components',
    count: powerComponentsAsUnified.length,
    href: '/supply/category/power'
  },
  'audio-video': {
    name: 'Audio & Video',
    count: audioVideoAsUnified.length,
    href: '/supply/category/audio-video'
  },
  '3d-printing': {
    name: '3D Printing',
    count: threeDPrintingAsUnified.length,
    href: '/supply/category/3d-printing'
  }
}
