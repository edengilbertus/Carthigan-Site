export interface PowerComponent {
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
  overview: {
    type: string
    keySpecs: string
    applications: string
    keyFeatures: string
    bestFor: string
  }
  specifications: Record<string, string>
  compatibility: string[]
  projects: string[]
  supplier: string
  leadTime: string
  tags: string[]
  proTip?: string
}

// Category 1: Voltage Regulators
const voltageRegulators: PowerComponent[] = [
  {
    id: "power-reg-7805",
    name: "7805 Fixed 5V Positive Voltage Regulator",
    description: "A simple, reliable, and ubiquitous component for providing a steady +5V supply",
    category: "power-components",
    subcategory: "voltage-regulators", 
    price: 2000,
    studentPrice: 1700,
    image: "/images/power/7805-regulator.jpg",
    inStock: true,
    stockLevel: 150,
    rating: 4.8,
    reviews: 324,
    overview: {
      type: "Linear Voltage Regulator",
      keySpecs: "5V Output, ~1A Max Current, TO-220 Package",
      applications: "5V logic circuits, breadboard supplies, microcontroller power",
      keyFeatures: "Fixed 5V output, thermal protection, short circuit protection",
      bestFor: "Powering 5V logic, breadboard power supplies, on-board voltage regulation"
    },
    specifications: {
      "Output Voltage": "5V ±4%",
      "Maximum Output Current": "1A",
      "Input Voltage Range": "7V-25V",
      "Package": "TO-220",
      "Operating Temperature": "-40°C to +125°C",
      "Dropout Voltage": "2V typical"
    },
    compatibility: ["Arduino", "5V Logic", "Breadboards", "Digital Circuits"],
    projects: ["Arduino power supplies", "Breadboard circuits", "5V LED drivers", "Logic level conversion"],
    supplier: "Linear regulators distributor",
    leadTime: "1-2 days",
    tags: ["voltage-regulator", "5v", "linear", "to-220", "fixed"],
    proTip: "Always place a 100nF ceramic capacitor on both the input and output pins to ground for stability. A larger electrolytic capacitor on the input is also recommended."
  },
  {
    id: "power-reg-7812", 
    name: "7812 Fixed 12V Positive Voltage Regulator",
    description: "A fixed linear voltage regulator that provides a steady +12V output",
    category: "power-components",
    subcategory: "voltage-regulators",
    price: 2500,
    studentPrice: 2125,
    image: "/images/power/7812-regulator.jpg", 
    inStock: true,
    stockLevel: 120,
    rating: 4.7,
    reviews: 198,
    overview: {
      type: "Linear Voltage Regulator",
      keySpecs: "12V Output, ~1A Max Current, TO-220 Package",
      applications: "12V motors, LED strips, automotive projects",
      keyFeatures: "Fixed 12V output, thermal protection, robust design",
      bestFor: "Driving 12V motors and LED strips, automotive projects, industrial control circuits"
    },
    specifications: {
      "Output Voltage": "12V ±4%",
      "Maximum Output Current": "1A", 
      "Input Voltage Range": "14.5V-35V",
      "Package": "TO-220",
      "Operating Temperature": "-40°C to +125°C",
      "Dropout Voltage": "2V typical"
    },
    compatibility: ["12V Motors", "LED Strips", "Automotive", "Industrial"],
    projects: ["12V LED strips", "Motor drivers", "Automotive accessories", "Industrial controls"],
    supplier: "Linear regulators distributor",
    leadTime: "1-2 days", 
    tags: ["voltage-regulator", "12v", "linear", "to-220", "automotive"],
    proTip: "This regulator will get hot when dropping a large voltage difference (e.g., 24V in, 12V out). Always mount it to a metal heatsink for such applications."
  }
];

// Category 2: Power Conversion ICs & Modules  
const powerConversion: PowerComponent[] = [
  {
    id: "power-conv-lm2596",
    name: "LM2596 Buck Converter Module (Step-Down)",
    description: "Highly efficient switching power supply module for step-down conversion",
    category: "power-components",
    subcategory: "power-conversion",
    price: 9500,
    studentPrice: 8075,
    image: "/images/power/lm2596-buck.jpg",
    inStock: true,
    stockLevel: 68,
    rating: 4.9,
    reviews: 445,
    overview: {
      type: "DC-DC Buck Converter",
      keySpecs: "DC-DC Step-Down, adjustable output (1.25V-30V), ~2A output current",
      applications: "Efficient voltage stepping down, battery-powered systems",
      keyFeatures: "High efficiency (92%), adjustable output, thermal protection",
      bestFor: "Efficiently creating a lower voltage, powering 5V devices from a 12V or 24V source"
    },
    specifications: {
      "Input Voltage": "3.2V-40V",
      "Output Voltage": "1.25V-35V (adjustable)",
      "Output Current": "2A max",
      "Efficiency": "Up to 92%",
      "Switching Frequency": "150kHz",
      "Package": "Module with heat sink"
    },
    compatibility: ["12V Batteries", "24V Systems", "Solar Panels", "Automotive"],
    projects: ["Solar charge controllers", "12V to 5V conversion", "Battery systems", "Automotive electronics"],
    supplier: "Switching converter distributors",
    leadTime: "2-4 days",
    tags: ["buck-converter", "step-down", "switching", "efficient", "adjustable"],
    proTip: "Unlike linear regulators, switching converters are highly efficient and produce very little heat, often eliminating the need for a heatsink."
  }
];

// Combine all power component arrays
export const allPowerComponents: PowerComponent[] = [
  ...voltageRegulators,
  ...powerConversion
];

// Export categories for filtering
export const powerCategories = [
  { id: "voltage-regulators", name: "Voltage Regulators", category: "power-components" },
  { id: "power-conversion", name: "Power Conversion", category: "power-components" }
];

export const powerPriceRanges = [
  { id: "under-2k", name: "Under 2,000 UGX", min: 0, max: 2000 },
  { id: "2k-5k", name: "2,000 - 5,000 UGX", min: 2000, max: 5000 },
  { id: "5k-10k", name: "5,000 - 10,000 UGX", min: 5000, max: 10000 },
  { id: "10k-25k", name: "10,000 - 25,000 UGX", min: 10000, max: 25000 },
  { id: "over-25k", name: "Over 25,000 UGX", min: 25000, max: Infinity }
];
