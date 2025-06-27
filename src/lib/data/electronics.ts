export interface ElectronicComponent {
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
  specifications: Record<string, string>
  compatibility: string[]
  projects: string[]
  supplier: string
  leadTime: string
  tags: string[]
}

export const electronicsData: ElectronicComponent[] = [
  // PASSIVE COMPONENTS - Resistors
  {
    id: "res-001",
    name: "Carbon Film Resistors (1/4W, 5%)",
    description: "Standard carbon-film resistors for current limiting and voltage division",
    category: "passive",
    subcategory: "resistors",
    price: 300,
    studentPrice: 255,
    image: "/images/components/resistor-pack.jpg",
    inStock: true,
    stockLevel: 500,
    rating: 4.8,
    reviews: 145,
    specifications: {
      "Power Rating": "0.25W",
      "Tolerance": "±5%",
      "Temperature Coefficient": "±200ppm/°C",
      "Operating Temperature": "-55°C to +155°C",
      "Resistance Range": "1Ω to 10MΩ"
    },
    compatibility: ["Arduino", "ESP32", "STM32", "Breadboards"],
    projects: ["LED Circuits", "Voltage Dividers", "Pull-up/Pull-down Resistors"],
    supplier: "Neriko Electronics",
    leadTime: "In Stock",
    tags: ["resistor", "passive", "basic", "electronics"]
  },
  {
    id: "res-002",
    name: "Resistor Starter Kit (660 pieces)",
    description: "Complete collection of various resistor values for prototyping",
    category: "passive",
    subcategory: "resistors",
    price: 45000,
    studentPrice: 38250,
    image: "/images/components/resistor-kit.jpg",
    inStock: true,
    stockLevel: 25,
    rating: 4.9,
    reviews: 89,
    specifications: {
      "Quantity": "660 pieces",
      "Values": "1Ω to 10MΩ",
      "Power Rating": "0.25W",
      "Tolerance": "±5%",
      "Storage": "Plastic organizer box"
    },
    compatibility: ["All microcontrollers", "Breadboards", "PCB"],
    projects: ["Arduino Projects", "Educational Kits", "Prototyping"],
    supplier: "Jumia Uganda",
    leadTime: "In Stock",
    tags: ["resistor", "kit", "starter", "educational"]
  },
  {
    id: "pot-001",
    name: "Linear Potentiometer 10kΩ",
    description: "Variable resistor for adjustable control applications",
    category: "passive",
    subcategory: "resistors",
    price: 6000,
    studentPrice: 5100,
    image: "/images/components/potentiometer.jpg",
    inStock: true,
    stockLevel: 75,
    rating: 4.7,
    reviews: 62,
    specifications: {
      "Resistance": "10kΩ",
      "Type": "Linear",
      "Power Rating": "0.5W",
      "Shaft": "6mm",
      "Mounting": "PCB/Panel"
    },
    compatibility: ["Arduino", "ESP32", "Audio circuits"],
    projects: ["Volume Control", "LED Dimmer", "Motor Speed Control"],
    supplier: "Neriko Electronics",
    leadTime: "In Stock",
    tags: ["potentiometer", "variable", "control", "analog"]
  },
  {
    id: "trim-001",
    name: "Trimmer Potentiometer 10kΩ",
    description: "Small potentiometer for fine-tuning circuits",
    category: "passive",
    subcategory: "resistors",
    price: 3000,
    studentPrice: 2550,
    image: "/images/components/trimpot.jpg",
    inStock: true,
    stockLevel: 90,
    rating: 4.6,
    reviews: 45,
    specifications: {
      "Resistance": "10kΩ",
      "Type": "Single-turn",
      "Power Rating": "0.1W",
      "Adjustment": "Screwdriver",
      "Size": "3mm"
    },
    compatibility: ["PCB", "Calibration circuits"],
    projects: ["Sensor Calibration", "Bias Adjustment", "Fine Tuning"],
    supplier: "TechHub Kampala",
    leadTime: "2-3 days",
    tags: ["trimmer", "potentiometer", "calibration", "pcb"]
  },
  {
    id: "ldr-001",
    name: "Photoresistor (LDR) 5mm",
    description: "Light-dependent resistor for light-sensing applications",
    category: "passive",
    subcategory: "resistors",
    price: 2500,
    studentPrice: 2125,
    image: "/images/components/photoresistor.jpg",
    inStock: true,
    stockLevel: 120,
    rating: 4.6,
    reviews: 78,
    specifications: {
      "Dark Resistance": "1MΩ",
      "Light Resistance": "5-10kΩ",
      "Response Time": "<30ms",
      "Peak Wavelength": "540nm",
      "Operating Temp": "-30°C to +75°C"
    },
    compatibility: ["Arduino", "ESP32", "Analog circuits"],
    projects: ["Light Sensor", "Automatic Lighting", "Security Systems"],
    supplier: "TechHub Kampala",
    leadTime: "2-3 days",
    tags: ["sensor", "light", "photoresistor", "ldr"]
  },

  // PASSIVE COMPONENTS - Capacitors
  {
    id: "cap-001",
    name: "Ceramic Capacitor Kit (300pcs)",
    description: "High-frequency filtering capacitors in various values",
    category: "passive",
    subcategory: "capacitors",
    price: 15000,
    studentPrice: 12750,
    image: "/images/components/ceramic-cap-kit.jpg",
    inStock: true,
    stockLevel: 35,
    rating: 4.8,
    reviews: 94,
    specifications: {
      "Quantity": "300 pieces",
      "Values": "10pF to 1µF",
      "Voltage Rating": "50V",
      "Tolerance": "±20%",
      "Temperature Coefficient": "X7R"
    },
    compatibility: ["All circuits", "High frequency applications"],
    projects: ["Filter Circuits", "Decoupling", "Timing Circuits"],
    supplier: "Neriko Electronics",
    leadTime: "In Stock",
    tags: ["capacitor", "ceramic", "kit", "filtering"]
  },
  {
    id: "cap-002",
    name: "Electrolytic Capacitor 1000µF 25V",
    description: "Large value capacitor for power supply filtering",
    category: "passive",
    subcategory: "capacitors",
    price: 3000,
    studentPrice: 2550,
    image: "/images/components/electrolytic-cap.jpg",
    inStock: true,
    stockLevel: 90,
    rating: 4.7,
    reviews: 67,
    specifications: {
      "Capacitance": "1000µF",
      "Voltage": "25V",
      "Tolerance": "±20%",
      "ESR": "Low",
      "Life": "2000 hours @ 105°C"
    },
    compatibility: ["Power supplies", "Audio amplifiers"],
    projects: ["DC Power Supply", "Audio Filter", "Motor Drivers"],
    supplier: "EtechKampala",
    leadTime: "In Stock",
    tags: ["capacitor", "electrolytic", "power", "filtering"]
  },
  {
    id: "cap-003",
    name: "Tantalum Capacitor 100µF 16V",
    description: "High-capacitance, small-package applications",
    category: "passive",
    subcategory: "capacitors",
    price: 4000,
    studentPrice: 3400,
    image: "/images/components/tantalum-cap.jpg",
    inStock: true,
    stockLevel: 45,
    rating: 4.5,
    reviews: 32,
    specifications: {
      "Capacitance": "100µF",
      "Voltage": "16V",
      "Type": "Tantalum",
      "ESR": "Very Low",
      "Size": "Size D (7.3x4.3mm)"
    },
    compatibility: ["High-frequency circuits", "Power supplies"],
    projects: ["Switching Power Supplies", "RF Circuits", "Digital Systems"],
    supplier: "Jumia Uganda",
    leadTime: "3-5 days",
    tags: ["capacitor", "tantalum", "high-frequency", "small"]
  },

  // PASSIVE COMPONENTS - Inductors
  {
    id: "ind-001",
    name: "Power Inductor 100µH",
    description: "For energy storage and filtering in power supplies",
    category: "passive",
    subcategory: "inductors",
    price: 8000,
    studentPrice: 6800,
    image: "/images/components/power-inductor.jpg",
    inStock: true,
    stockLevel: 40,
    rating: 4.4,
    reviews: 28,
    specifications: {
      "Inductance": "100µH",
      "Current Rating": "2A",
      "DC Resistance": "0.1Ω",
      "Self Resonant Frequency": "2.5MHz",
      "Size": "10x10x6mm"
    },
    compatibility: ["Switching power supplies", "DC-DC converters"],
    projects: ["Buck Converter", "Boost Converter", "Power Supply"],
    supplier: "TechHub Kampala",
    leadTime: "5-7 days",
    tags: ["inductor", "power", "switching", "energy-storage"]
  },
  {
    id: "fer-001",
    name: "Ferrite Bead Ring",
    description: "To suppress high-frequency noise in circuits",
    category: "passive",
    subcategory: "inductors",
    price: 1500,
    studentPrice: 1275,
    image: "/images/components/ferrite-bead.jpg",
    inStock: true,
    stockLevel: 100,
    rating: 4.3,
    reviews: 19,
    specifications: {
      "Impedance": "1000Ω @ 100MHz",
      "Inner Diameter": "3mm",
      "Outer Diameter": "6mm",
      "Material": "Ferrite",
      "Frequency Range": "10MHz-1GHz"
    },
    compatibility: ["Cable filtering", "EMI suppression"],
    projects: ["EMI Filter", "Cable Choke", "Noise Suppression"],
    supplier: "Neriko Electronics",
    leadTime: "In Stock",
    tags: ["ferrite", "emi", "noise", "suppression"]
  },

  // PASSIVE COMPONENTS - Crystals
  {
    id: "cry-001",
    name: "16MHz Crystal Oscillator",
    description: "Precise clock signal for microcontrollers",
    category: "passive",
    subcategory: "crystals",
    price: 5000,
    studentPrice: 4250,
    image: "/images/components/crystal-16mhz.jpg",
    inStock: true,
    stockLevel: 60,
    rating: 4.8,
    reviews: 76,
    specifications: {
      "Frequency": "16MHz",
      "Tolerance": "±20ppm",
      "Load Capacitance": "18pF",
      "Package": "HC-49/S",
      "Stability": "±50ppm"
    },
    compatibility: ["Arduino", "ATmega", "PIC microcontrollers"],
    projects: ["Arduino Clone", "Microcontroller Clock", "Timing Circuits"],
    supplier: "EtechKampala",
    leadTime: "In Stock",
    tags: ["crystal", "oscillator", "clock", "timing"]
  }
]

// Additional arrays for larger dataset (continuing with semiconductors, etc.)
const semiconductorData: ElectronicComponent[] = [
  // DISCRETE SEMICONDUCTORS - Diodes
  {
    id: "diode-001",
    name: "1N4007 Rectifier Diode",
    description: "General-purpose rectifier diode for AC to DC conversion",
    category: "semiconductors",
    subcategory: "diodes",
    price: 600,
    studentPrice: 510,
    image: "/images/components/1n4007.jpg",
    inStock: true,
    stockLevel: 200,
    rating: 4.9,
    reviews: 156,
    specifications: {
      "Forward Voltage": "1.1V",
      "Current Rating": "1A",
      "Reverse Voltage": "1000V",
      "Package": "DO-41",
      "Recovery Time": "30µs"
    },
    compatibility: ["AC/DC converters", "Bridge rectifiers"],
    projects: ["Power Supply", "Battery Charger", "AC to DC Converter"],
    supplier: "Neriko Electronics",
    leadTime: "In Stock",
    tags: ["diode", "rectifier", "power", "1n4007"]
  },
  {
    id: "diode-002",
    name: "1N4148 Signal Diode",
    description: "High-speed signal diode for switching applications",
    category: "semiconductors",
    subcategory: "diodes",
    price: 500,
    studentPrice: 425,
    image: "/images/components/1n4148.jpg",
    inStock: true,
    stockLevel: 300,
    rating: 4.7,
    reviews: 89,
    specifications: {
      "Forward Voltage": "0.7V",
      "Current Rating": "300mA",
      "Reverse Voltage": "100V",
      "Package": "DO-35",
      "Recovery Time": "4ns"
    },
    compatibility: ["High-speed switching", "Logic circuits"],
    projects: ["Signal Switching", "Logic Circuits", "High-frequency Applications"],
    supplier: "TechHub Kampala",
    leadTime: "In Stock",
    tags: ["diode", "signal", "high-speed", "switching"]
  },
  {
    id: "zener-001",
    name: "5.1V Zener Diode (1W)",
    description: "Voltage regulator diode for creating stable voltage reference",
    category: "semiconductors",
    subcategory: "diodes",
    price: 1500,
    studentPrice: 1275,
    image: "/images/components/zener-5v1.jpg",
    inStock: true,
    stockLevel: 120,
    rating: 4.6,
    reviews: 67,
    specifications: {
      "Zener Voltage": "5.1V",
      "Power Rating": "1W",
      "Tolerance": "±5%",
      "Package": "DO-41",
      "Temperature Coefficient": "+2mV/°C"
    },
    compatibility: ["Voltage regulation", "Reference circuits"],
    projects: ["Voltage Regulator", "Reference Voltage", "Overvoltage Protection"],
    supplier: "Jumia Uganda",
    leadTime: "2-3 days",
    tags: ["zener", "voltage-regulator", "reference", "protection"]
  }
]

// Merge all data
export const allElectronicsData = [...electronicsData, ...semiconductorData]

// Category definitions for filtering
export const categories = [
  { id: "passive", name: "Passive Components", count: electronicsData.filter(p => p.category === "passive").length },
  { id: "semiconductors", name: "Semiconductors", count: semiconductorData.length },
  { id: "integrated-circuits", name: "Integrated Circuits", count: 0 },
  { id: "electromechanical", name: "Electromechanical", count: 0 },
  { id: "sensors", name: "Sensors & Modules", count: 0 },
  { id: "communication", name: "Communication", count: 0 },
  { id: "connectors", name: "Connectors & Accessories", count: 0 }
]

export const subcategories = [
  // Passive Components
  { id: "resistors", name: "Resistors", category: "passive" },
  { id: "capacitors", name: "Capacitors", category: "passive" },
  { id: "inductors", name: "Inductors", category: "passive" },
  { id: "crystals", name: "Crystals", category: "passive" },
  
  // Semiconductors
  { id: "diodes", name: "Diodes", category: "semiconductors" },
  { id: "transistors", name: "Transistors", category: "semiconductors" },
  { id: "leds", name: "LEDs", category: "semiconductors" },
  
  // Integrated Circuits
  { id: "microcontrollers", name: "Microcontrollers", category: "integrated-circuits" },
  { id: "op-amps", name: "Op-Amps", category: "integrated-circuits" },
  { id: "timers", name: "Timers", category: "integrated-circuits" },
  { id: "motor-drivers", name: "Motor Drivers", category: "integrated-circuits" },
  
  // Electromechanical
  { id: "switches", name: "Switches", category: "electromechanical" },
  { id: "relays", name: "Relays", category: "electromechanical" },
  { id: "audio", name: "Audio Components", category: "electromechanical" },
  
  // Sensors
  { id: "environmental", name: "Environmental", category: "sensors" },
  { id: "motion", name: "Motion", category: "sensors" },
  { id: "distance", name: "Distance", category: "sensors" },
  { id: "gas", name: "Gas/Smoke", category: "sensors" },
  
  // Communication
  { id: "wireless", name: "Wireless", category: "communication" },
  { id: "cellular", name: "Cellular", category: "communication" },
  
  // Connectors
  { id: "wires", name: "Wires", category: "connectors" },
  { id: "breadboards", name: "Breadboards", category: "connectors" }
]

// Price ranges based on the provided data
export const priceRanges = [
  { id: "under-5k", name: "Under 5,000 UGX", min: 0, max: 5000 },
  { id: "5k-15k", name: "5,000 - 15,000 UGX", min: 5000, max: 15000 },
  { id: "15k-30k", name: "15,000 - 30,000 UGX", min: 15000, max: 30000 },
  { id: "30k-50k", name: "30,000 - 50,000 UGX", min: 30000, max: 50000 },
  { id: "over-50k", name: "Over 50,000 UGX", min: 50000, max: Infinity }
] 