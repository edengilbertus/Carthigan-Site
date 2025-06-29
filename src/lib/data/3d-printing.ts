export interface ThreeDPrintingProduct {
  id: string
  name: string
  description: string
  category: string
  subcategory: string
  price: number
  studentPrice?: number
  image: string
  inStock: boolean
  stockLevel: number
  rating: number
  reviews: number
  compatibility: string[]
  features: string[]
  leadTime: string
  tags: string[]
  specifications: Record<string, string>
}

export const allThreeDPrintingProducts: ThreeDPrintingProduct[] = [
  {
    id: 'ender-3-v3-se',
    name: 'Creality Ender 3 V3 SE 3D Printer',
    description: 'Entry-level 3D printer perfect for beginners and educational use. Easy assembly and reliable printing.',
    category: '3D Printing',
    subcategory: '3D Printers',
    price: 850000,
    studentPrice: 750000,
    image: '/images/products/ender-3-v3-se.jpg',
    inStock: true,
    stockLevel: 12,
    rating: 4.6,
    reviews: 89,
    compatibility: ['PLA', 'PETG', 'ABS'],
    features: [
      'Auto bed leveling',
      'Resume printing',
      'Easy assembly',
      'Large community support',
      'Upgradeable platform'
    ],
    leadTime: 'In Stock',
    tags: ['beginner', 'fdm', 'education', 'reliable'],
    specifications: {
      'Build Volume': '220 x 220 x 250mm',
      'Layer Resolution': '0.1-0.3mm',
      'Printing Speed': '180mm/s max',
      'Nozzle Temperature': '260°C max',
      'Bed Temperature': '100°C max',
      'Connectivity': 'SD Card, USB'
    }
  },
  {
    id: 'pla-basic-filament-1kg',
    name: 'PLA 3D Printing Filament 1.75mm (1kg)',
    description: 'High-quality PLA filament perfect for beginners. Easy to print and environmentally friendly.',
    category: '3D Printing',
    subcategory: 'Filaments',
    price: 45000,
    studentPrice: 40000,
    image: '/images/products/pla-filament.jpg',
    inStock: true,
    stockLevel: 150,
    rating: 4.5,
    reviews: 234,
    compatibility: ['All FDM 3D Printers'],
    features: [
      'Low warping',
      'Easy to print',
      'Biodegradable',
      'No heated bed required',
      'Vibrant colors'
    ],
    leadTime: 'In Stock',
    tags: ['beginner-friendly', 'eco-friendly', 'reliable'],
    specifications: {
      'Diameter': '1.75mm ±0.02mm',
      'Print Temperature': '190-220°C',
      'Bed Temperature': '50-60°C (optional)',
      'Weight': '1kg',
      'Colors': '20+ available'
    }
  },
  {
    id: '3d-printer-tool-kit',
    name: 'Complete 3D Printer Tool Kit',
    description: 'Essential tools for 3D printer maintenance, bed leveling, and part removal.',
    category: '3D Printing',
    subcategory: 'Tools & Accessories',
    price: 75000,
    studentPrice: 65000,
    image: '/images/products/3d-tool-kit.jpg',
    inStock: true,
    stockLevel: 35,
    rating: 4.6,
    reviews: 123,
    compatibility: ['All 3D Printers'],
    features: [
      'Bed leveling tools',
      'Part removal spatulas',
      'Nozzle cleaning kit',
      'Hex key set',
      'Storage case included'
    ],
    leadTime: 'In Stock',
    tags: ['maintenance', 'essential', 'tools'],
    specifications: {
      'Kit Contents': '25+ tools',
      'Storage': 'Compact case',
      'Material': 'Hardened steel',
      'Compatibility': 'Universal',
      'Warranty': '1 year'
    }
  },
  {
    id: 'bl-touch-auto-leveling',
    name: 'BL-Touch Auto Bed Leveling Sensor',
    description: 'Automatic bed leveling sensor for consistent first layers and improved print success.',
    category: '3D Printing',
    subcategory: 'Sensors & Electronics',
    price: 125000,
    studentPrice: 110000,
    image: '/images/products/bl-touch.jpg',
    inStock: true,
    stockLevel: 32,
    rating: 4.7,
    reviews: 189,
    compatibility: ['Most 3D Printers', 'Marlin Firmware'],
    features: [
      'High precision',
      'Repeatable deployment',
      'Wide compatibility',
      'Easy calibration',
      'Z-offset adjustment'
    ],
    leadTime: 'In Stock',
    tags: ['auto-leveling', 'precision', 'upgrade'],
    specifications: {
      'Accuracy': '±0.005mm',
      'Voltage': '5V',
      'Interface': '3-wire servo',
      'Mounting': 'M3 screws',
      'Firmware': 'Marlin compatible'
    }
  },
  {
    id: 'elegoo-mars-4',
    name: 'Elegoo Mars 4 DLP 3D Printer',
    description: 'High-resolution resin 3D printer perfect for miniatures, jewelry, and detailed parts.',
    category: '3D Printing',
    subcategory: 'Resin Printers',
    price: 650000,
    studentPrice: 580000,
    image: '/images/products/elegoo-mars-4.jpg',
    inStock: true,
    stockLevel: 12,
    rating: 4.7,
    reviews: 145,
    compatibility: ['Standard 405nm Resins'],
    features: [
      'Ultra-high resolution',
      '6K monochrome screen',
      'Fast printing',
      'Easy resin handling',
      'Built-in air purifier'
    ],
    leadTime: 'In Stock',
    tags: ['resin', 'high-resolution', 'miniatures'],
    specifications: {
      'Build Volume': '153.36 x 77.76 x 175mm',
      'Layer Resolution': '0.01-0.2mm',
      'Print Speed': '30-70mm/h',
      'Screen': '6.6" 6K Mono',
      'Light Source': '405nm UV LED array'
    }
  }
]

export const threeDPrintingCategories = [
  "3D Printers",
  "Filaments", 
  "Resins",
  "Tools & Accessories",
  "Print Beds & Surfaces",
  "Extruder Parts",
  "Sensors & Electronics",
  "Heated Beds",
  "Enclosures",
  "Resin Printers",
  "Post-Processing",
  "Resin Printer Parts"
]
