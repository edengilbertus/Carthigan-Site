export interface ElectronicComponent {
  id: string
  name: string
  description: string
  price: number
  studentPrice: number
  image: string
  inStock: boolean
  stockLevel: number
  rating: number
  reviews: number
  category: string
  subcategory: string
  specifications: Record<string, string>
  compatibility: string[]
  projects: string[]
  leadTime: string
  tags: string[]
  overview: {
    type: string
    keySpecs: string
    applications: string
    keyFeatures: string[]
  }
  supplier: string
  bestFor?: string
  keySpecs?: Record<string, string>
}

// Category 1: Passive Components
const passiveComponents: ElectronicComponent[] = [
  {
    id: "res-001",
    name: "Carbon Film Resistor 1/4W 5% - 220Ω",
    description: "Standard resistor for current limiting and voltage division applications",
    price: 150,
    studentPrice: 128,
    image: "/images/components/resistor-220.jpg",
    inStock: true,
    stockLevel: 500,
    rating: 4.8,
    reviews: 234,
    category: "Electronics & Components",
    subcategory: "Passive Components",
    specifications: {
      "Power Rating": "1/4 Watt (0.25W)",
      "Tolerance": "±5%",
      "Resistance": "220Ω",
      "Temperature Coefficient": "±350 ppm/°C",
      "Package": "Axial leaded"
    },
    compatibility: ["Breadboards", "PCBs", "Perfboards"],
    projects: ["LED current limiting", "Voltage dividers", "Pull-up/down resistors"],
    leadTime: "In Stock",
    tags: ["resistor", "passive", "220ohm", "carbon-film"],
    overview: {
      type: "Carbon Film Resistor",
      keySpecs: "220Ω, 1/4W, 5% tolerance",
      applications: "LED current limiting, voltage division, pull-up resistors",
      keyFeatures: ["Standard breadboard compatible", "Reliable carbon film construction", "Color coded for easy identification"]
    },
    supplier: "Standard component - multiple sources",
    bestFor: "Current limiting for LEDs, pull-up/pull-down resistors, building voltage dividers"
  },
  
  {
    id: "pot-001",
    name: "Linear Potentiometer 10kΩ",
    description: "Adjustable resistor for user control and variable voltage applications",
    price: 2500,
    studentPrice: 2125,
    image: "/images/components/potentiometer-10k.jpg",
    inStock: true,
    stockLevel: 75,
    rating: 4.7,
    reviews: 89,
    category: "Electronics & Components",
    subcategory: "Passive Components",
    specifications: {
      "Resistance": "10kΩ",
      "Taper": "Linear (B10K)",
      "Power Rating": "0.5W",
      "Shaft": "6mm D-shaft",
      "Mounting": "Panel mount with nut"
    },
    compatibility: ["Arduino analog inputs", "Audio circuits", "Control panels"],
    projects: ["Volume controls", "Brightness adjustment", "Motor speed control"],
    leadTime: "In Stock",
    tags: ["potentiometer", "variable-resistor", "10k", "linear"],
    overview: {
      type: "Linear Potentiometer",
      keySpecs: "10kΩ, Linear taper, Panel mount",
      applications: "User controls, voltage adjustment, calibration",
      keyFeatures: ["Smooth linear response", "Panel mountable", "Standard 10kΩ value"]
    },
    supplier: "Professional audio component grade",
    bestFor: "User inputs, calibration controls, and creating adjustable reference voltages"
  },

  {
    id: "cap-001",
    name: "100nF Ceramic Capacitor (104)",
    description: "Essential decoupling capacitor for digital electronics and power filtering",
    price: 200,
    studentPrice: 170,
    image: "/images/components/ceramic-cap-100nf.jpg",
    inStock: true,
    stockLevel: 1000,
    rating: 4.9,
    reviews: 456,
    category: "Electronics & Components",
    subcategory: "Passive Components",
    specifications: {
      "Capacitance": "100nF (0.1µF)",
      "Voltage Rating": "50V",
      "Tolerance": "±10%",
      "Dielectric": "X7R Ceramic",
      "Package": "Radial leaded"
    },
    compatibility: ["All ICs", "Microcontrollers", "Digital circuits"],
    projects: ["Power supply decoupling", "Noise filtering", "Timing circuits"],
    leadTime: "In Stock",
    tags: ["capacitor", "ceramic", "100nf", "decoupling", "104"],
    overview: {
      type: "Ceramic Decoupling Capacitor",
      keySpecs: "100nF, 50V, X7R ceramic",
      applications: "IC decoupling, high-frequency filtering, noise suppression",
      keyFeatures: ["Low ESR", "Temperature stable", "High frequency response"]
    },
    supplier: "High-reliability ceramic, multiple sources",
    bestFor: "Decoupling ICs, timing applications, signal filtering"
  },

  {
    id: "cap-002", 
    name: "1000µF Electrolytic Capacitor 25V",
    description: "High-capacity electrolytic capacitor for power supply filtering and energy storage",
    price: 1500,
    studentPrice: 1275,
    image: "/images/components/electrolytic-1000uf.jpg",
    inStock: true,
    stockLevel: 120,
    rating: 4.6,
    reviews: 78,
    category: "Electronics & Components",
    subcategory: "Passive Components",
    specifications: {
      "Capacitance": "1000µF",
      "Voltage Rating": "25V",
      "Tolerance": "±20%",
      "Type": "Aluminum Electrolytic",
      "Polarity": "Polarized - observe correct orientation"
    },
    compatibility: ["Power supplies", "Audio amplifiers", "Motor driver circuits"],
    projects: ["Power supply smoothing", "Audio coupling", "Energy storage"],
    leadTime: "In Stock",
    tags: ["capacitor", "electrolytic", "1000uf", "polarized", "power-supply"],
    overview: {
      type: "Aluminum Electrolytic Capacitor",
      keySpecs: "1000µF, 25V, Polarized",
      applications: "Power supply filtering, bulk energy storage, audio coupling",
      keyFeatures: ["High capacitance value", "Compact size", "Low cost per µF"]
    },
    supplier: "Reliable aluminum electrolytic construction",
    bestFor: "Power supply filtering, bulk energy storage, audio coupling"
  }
]

// Category 2: Semiconductors - Diodes & LEDs  
const semiconductorComponents: ElectronicComponent[] = [
  {
    id: "diode-001",
    name: "1N4007 Rectifier Diode",
    description: "General-purpose high-voltage diode for power applications and protection",
    price: 300,
    studentPrice: 255,
    image: "/images/components/1n4007.jpg",
    inStock: true,
    stockLevel: 200,
    rating: 4.8,
    reviews: 167,
    category: "Electronics & Components", 
    subcategory: "Semiconductors",
    specifications: {
      "Type": "Silicon Rectifier Diode",
      "Reverse Voltage": "1000V",
      "Forward Current": "1A",
      "Forward Voltage Drop": "0.7V typical",
      "Package": "DO-41 Axial"
    },
    compatibility: ["Power supplies", "Protection circuits", "Bridge rectifiers"],
    projects: ["AC to DC conversion", "Reverse polarity protection", "Flyback diodes"],
    leadTime: "In Stock",
    tags: ["diode", "rectifier", "1n4007", "power", "protection"],
    overview: {
      type: "High-Voltage Rectifier Diode",
      keySpecs: "1000V, 1A, Silicon construction",
      applications: "Power rectification, reverse polarity protection, flyback suppression",
      keyFeatures: ["High voltage rating", "Robust construction", "Standard industry part"]
    },
    supplier: "Industrial grade silicon diode",
    bestFor: "Power rectification, reverse polarity protection, flyback suppression"
  },

  {
    id: "led-001",
    name: "5mm Red LED",
    description: "Classic indicator LED for status displays and educational projects",
    price: 250,
    studentPrice: 213,
    image: "/images/components/led-red-5mm.jpg",
    inStock: true,
    stockLevel: 300,
    rating: 4.9,
    reviews: 289,
    category: "Electronics & Components",
    subcategory: "Semiconductors", 
    specifications: {
      "Color": "Red",
      "Forward Voltage": "2.0V typical",
      "Forward Current": "20mA maximum",
      "Luminous Intensity": "8000-12000 mcd",
      "Viewing Angle": "30°",
      "Package": "5mm through-hole"
    },
    compatibility: ["Microcontrollers", "Breadboards", "Indicator panels"],
    projects: ["Status indicators", "Educational circuits", "Debugging aids"],
    leadTime: "In Stock",
    tags: ["led", "red", "5mm", "indicator", "status"],
    overview: {
      type: "Light Emitting Diode",
      keySpecs: "Red, 5mm, 2V forward voltage",
      applications: "Status indication, debugging, educational demonstrations",
      keyFeatures: ["High brightness", "Standard 5mm package", "Long lifespan"]
    },
    supplier: "High-brightness LED, standard T1¾ package",
    bestFor: "Power indicators, status lights, debugging, educational circuits"
  }
]

// Combine all electronics components
export const allElectronicsData: ElectronicComponent[] = [
  ...passiveComponents,
  ...semiconductorComponents,
  // Keep existing components for compatibility
  {
    id: "res-002",
    name: "Resistor Starter Kit (660 pieces)",
    description: "Complete collection of various resistor values for prototyping",
    price: 45000,
    studentPrice: 38250,
    image: "/images/components/resistor-kit.jpg",
    inStock: true,
    stockLevel: 25,
    rating: 4.8,
    reviews: 89,
    category: "Electronics & Components",
    subcategory: "Resistors",
    specifications: {
      "Quantity": "660 pieces",
      "Values": "1Ω to 10MΩ (E12 series)",
      "Power Rating": "1/4W",
      "Tolerance": "±5%",
      "Type": "Carbon Film"
    },
    compatibility: ["All breadboard projects", "PCB prototyping", "Educational use"],
    projects: ["Any electronics project", "Learning Ohm's law", "Circuit analysis"],
    leadTime: "In Stock",
    tags: ["resistors", "kit", "assortment", "prototyping"],
    overview: {
      type: "Resistor Assortment Kit",
      keySpecs: "660 pieces, 1Ω-10MΩ range, organized storage",
      applications: "General prototyping, education, circuit design",
      keyFeatures: ["Complete value range", "Organized storage box", "Educational guide included"]
    },
    supplier: "Curated selection for education and prototyping"
  }
]

// Export subcategories for filtering
export const electronicsSubcategories = [
  "Passive Components",
  "Semiconductors", 
  "Resistors",
  "Capacitors",
  "Inductors",
  "Diodes & LEDs",
  "Transistors",
  "Integrated Circuits",
  "Connectors & Sockets",
  "Switches & Buttons",
  "Sensors",
  "Power Components",
  "Communication Modules"
]
