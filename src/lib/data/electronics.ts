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
  overview?: {
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
}

const passiveComponents: ElectronicComponent[] = [
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
    overview: {
      type: "Carbon Film Resistor",
      keySpecs: "1/4W power rating, ±5% tolerance, 1Ω to 10MΩ resistance range",
      applications: "Current limiting, voltage division, pull-up/pull-down networks",
      keyFeatures: "Low noise, stable temperature coefficient, cost-effective for general use",
      bestFor: "Basic electronics projects, Arduino circuits, breadboard prototyping, and educational purposes"
    },
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
  },

  // NEW PASSIVE COMPONENTS - Category 1: Passive Components
  {
    id: "res-003",
    name: "Carbon Film Resistor 1/4W 5% - 1kΩ",
    description: "Fundamental passive component for pull-up resistors and current limiting",
    category: "passive",
    subcategory: "resistors",
    price: 500,
    studentPrice: 425,
    image: "/images/components/resistor-1k.jpg",
    inStock: true,
    stockLevel: 300,
    rating: 4.8,
    reviews: 124,
    overview: {
      type: "Carbon Film Resistor",
      keySpecs: "1kΩ Resistance, 1/4 Watt Power Rating, 5% Tolerance",
      applications: "Pull-up/pull-down resistors, voltage dividers, current limiting for low-power LEDs",
      keyFeatures: "Versatile common value, perfect for digital logic pins, reliable performance",
      bestFor: "Pull-up/pull-down resistors for digital logic pins (like on buttons and sensors) and for current limiting in low-power applications"
    },
    specifications: {
      "Resistance": "1kΩ",
      "Power Rating": "0.25W",
      "Tolerance": "±5%",
      "Temperature Coefficient": "±200ppm/°C",
      "Package": "Axial"
    },
    compatibility: ["Arduino", "ESP32", "Digital circuits", "Breadboards"],
    projects: ["Button interfaces", "Sensor circuits", "LED drivers"],
    supplier: "Neriko Electronics",
    leadTime: "In Stock",
    tags: ["resistor", "1k", "pullup", "digital"]
  },

  {
    id: "res-004",
    name: "Carbon Film Resistor 1/4W 5% - 10kΩ",
    description: "Most common value for pull-up resistors in digital circuits",
    category: "passive",
    subcategory: "resistors", 
    price: 500,
    studentPrice: 425,
    image: "/images/components/resistor-10k.jpg",
    inStock: true,
    stockLevel: 400,
    rating: 4.9,
    reviews: 156,
    overview: {
      type: "Carbon Film Resistor",
      keySpecs: "10kΩ Resistance, 1/4 Watt Power Rating, 5% Tolerance",
      applications: "Pull-up resistors for buttons and switches, creating reference voltages with LDRs",
      keyFeatures: "Higher resistance means very low power consumption, ideal for battery-powered circuits",
      bestFor: "Pull-up resistors for buttons and switches, ensuring digital pins don't float"
    },
    specifications: {
      "Resistance": "10kΩ",
      "Power Rating": "0.25W", 
      "Tolerance": "±5%",
      "Temperature Coefficient": "±200ppm/°C",
      "Package": "Axial"
    },
    compatibility: ["Arduino", "ESP32", "Button circuits", "I2C lines"],
    projects: ["Button debouncing", "I2C pull-ups", "Sensor interfaces"],
    supplier: "Neriko Electronics",
    leadTime: "In Stock",
    tags: ["resistor", "10k", "pullup", "common"]
  },

  {
    id: "res-005",
    name: "Carbon Film Resistor 1/4W 5% - 220Ω",
    description: "Classic current-limiting resistor for standard LEDs",
    category: "passive",
    subcategory: "resistors",
    price: 500,
    studentPrice: 425,
    image: "/images/components/resistor-220.jpg",
    inStock: true,
    stockLevel: 250,
    rating: 4.7,
    reviews: 89,
    overview: {
      type: "Carbon Film Resistor", 
      keySpecs: "220Ω Resistance, 1/4 Watt Power Rating, 5% Tolerance",
      applications: "Current limiting for most 5V LEDs, basic voltage division",
      keyFeatures: "Perfect value for LED current limiting from 5V supply, safe illumination level",
      bestFor: "Current limiting for standard LEDs when powered from a 5V source"
    },
    specifications: {
      "Resistance": "220Ω",
      "Power Rating": "0.25W",
      "Tolerance": "±5%", 
      "Temperature Coefficient": "±200ppm/°C",
      "Package": "Axial"
    },
    compatibility: ["5V LED circuits", "Arduino", "Breadboards"],
    projects: ["LED indicators", "7-segment displays", "LED strips"],
    supplier: "TechHub Kampala",
    leadTime: "In Stock", 
    tags: ["resistor", "220", "led", "current-limiting"]
  },

  {
    id: "res-006",
    name: "Carbon Film Resistor 1/4W 5% - 330Ω",
    description: "Conservative current-limiting resistor for LED longevity",
    category: "passive",
    subcategory: "resistors",
    price: 500,
    studentPrice: 425,
    image: "/images/components/resistor-330.jpg",
    inStock: true,
    stockLevel: 200,
    rating: 4.6,
    reviews: 67,
    overview: {
      type: "Carbon Film Resistor",
      keySpecs: "330Ω Resistance, 1/4 Watt Power Rating, 5% Tolerance", 
      applications: "Current limiting for LEDs, providing more protection than 220Ω",
      keyFeatures: "Makes LEDs dimmer but extends lifespan, lower power consumption",
      bestFor: "Current limiting for LEDs with extended lifespan and lower power consumption"
    },
    specifications: {
      "Resistance": "330Ω",
      "Power Rating": "0.25W",
      "Tolerance": "±5%",
      "Temperature Coefficient": "±200ppm/°C", 
      "Package": "Axial"
    },
    compatibility: ["LED circuits", "Arduino", "Battery-powered projects"],
    projects: ["Low-power LED indicators", "Battery projects", "Status lights"],
    supplier: "TechHub Kampala",
    leadTime: "In Stock",
    tags: ["resistor", "330", "led", "low-power"]
  },

  {
    id: "res-007",
    name: "Carbon Film Resistor 1/4W 5% - 4.7kΩ",
    description: "Mid-range resistor for timing circuits and I2C pull-ups",
    category: "passive",
    subcategory: "resistors",
    price: 500,
    studentPrice: 425,
    image: "/images/components/resistor-4k7.jpg",
    inStock: true,
    stockLevel: 180,
    rating: 4.5,
    reviews: 45,
    overview: {
      type: "Carbon Film Resistor",
      keySpecs: "4.7kΩ Resistance, 1/4 Watt Power Rating, 5% Tolerance",
      applications: "I2C pull-up resistors, timing circuits, sensor interfacing",
      keyFeatures: "Common value for I2C communication lines, timing applications",
      bestFor: "I2C pull-up resistors, timing circuits with capacitors, and sensor interfacing"
    },
    specifications: {
      "Resistance": "4.7kΩ",
      "Power Rating": "0.25W",
      "Tolerance": "±5%",
      "Temperature Coefficient": "±200ppm/°C",
      "Package": "Axial"
    },
    compatibility: ["I2C devices", "Arduino", "ESP32", "Sensor modules"],
    projects: ["I2C communication", "RC timing circuits", "Sensor interfaces"],
    supplier: "EtechKampala",
    leadTime: "In Stock",
    tags: ["resistor", "4k7", "i2c", "timing"]
  },

  {
    id: "res-008", 
    name: "Carbon Film Resistor 1/4W 5% - 100kΩ",
    description: "High resistance for low-power and high-impedance applications",
    category: "passive",
    subcategory: "resistors",
    price: 600,
    studentPrice: 510,
    image: "/images/components/resistor-100k.jpg",
    inStock: true,
    stockLevel: 150,
    rating: 4.4,
    reviews: 32,
    overview: {
      type: "Carbon Film Resistor",
      keySpecs: "100kΩ Resistance, 1/4 Watt Power Rating, 5% Tolerance",
      applications: "Low-power battery circuits, high-impedance sensing, amplifier feedback",
      keyFeatures: "Very little current flow, ideal for ultra-low power applications",
      bestFor: "Low-power applications, high-gain amplifiers, and sensing circuits"
    },
    specifications: {
      "Resistance": "100kΩ",
      "Power Rating": "0.25W", 
      "Tolerance": "±5%",
      "Temperature Coefficient": "±200ppm/°C",
      "Package": "Axial"
    },
    compatibility: ["Op-amp circuits", "Battery projects", "High-impedance sensors"],
    projects: ["Op-amp feedback", "Touch sensors", "Battery monitoring"],
    supplier: "EtechKampala",
    leadTime: "In Stock",
    tags: ["resistor", "100k", "high-impedance", "low-power"]
  },

  {
    id: "res-009",
    name: "Carbon Film Resistor 1/4W 5% - 1MΩ", 
    description: "Very high resistance for specialized timing and amplifier circuits",
    category: "passive",
    subcategory: "resistors",
    price: 700,
    studentPrice: 595,
    image: "/images/components/resistor-1M.jpg",
    inStock: true,
    stockLevel: 100,
    rating: 4.3,
    reviews: 23,
    overview: {
      type: "Carbon Film Resistor",
      keySpecs: "1MΩ Resistance, 1/4 Watt Power Rating, 5% Tolerance",
      applications: "Long-duration timing circuits, ultra-high-gain op-amp circuits, static bleed",
      keyFeatures: "One million ohms resistance, ultra-low current applications",
      bestFor: "Long-duration timers, high-impedance circuits, and static bleed resistors"
    },
    specifications: {
      "Resistance": "1MΩ",
      "Power Rating": "0.25W",
      "Tolerance": "±5%",
      "Temperature Coefficient": "±200ppm/°C",
      "Package": "Axial"
    },
    compatibility: ["Long-duration timers", "Op-amp circuits", "Static protection"],
    projects: ["Long timers", "High-gain amplifiers", "Static discharge"],
    supplier: "Jumia Uganda",
    leadTime: "2-3 days",
    tags: ["resistor", "1M", "ultra-high", "timing"]
  },

  {
    id: "res-010",
    name: "Resistor Kit (300 pcs)",
    description: "Complete assortment of common resistor values for prototyping",
    category: "passive", 
    subcategory: "resistors",
    price: 25000,
    studentPrice: 21250,
    image: "/images/components/resistor-kit-300.jpg",
    inStock: true,
    stockLevel: 40,
    rating: 4.9,
    reviews: 178,
    overview: {
      type: "Resistor Assortment Kit",
      keySpecs: "~300 pieces, 1/4 Watt, 5% Tolerance, Multiple Values from 10Ω to 1MΩ",
      applications: "Hobbyists, students, prototyping labs, educational purposes",
      keyFeatures: "Wide range of values, organized storage, cost-effective for beginners",
      bestFor: "Hobbyists, students, and prototyping labs who need various resistor values on hand"
    },
    specifications: {
      "Quantity": "300 pieces",
      "Values": "10Ω to 1MΩ", 
      "Power Rating": "0.25W",
      "Tolerance": "±5%",
      "Storage": "Plastic organizer"
    },
    compatibility: ["All electronics projects", "Educational kits", "Prototyping"],
    projects: ["Learning electronics", "Arduino projects", "Circuit prototyping"],
    supplier: "Neriko Electronics",
    leadTime: "In Stock",
    tags: ["resistor", "kit", "assortment", "educational"]
  },

  {
    id: "pot-002",
    name: "Linear Potentiometer 10kΩ",
    description: "Three-terminal adjustable voltage divider for analog control",
    category: "passive",
    subcategory: "resistors",
    price: 4500,
    studentPrice: 3825,
    image: "/images/components/potentiometer-linear.jpg",
    inStock: true,
    stockLevel: 80,
    rating: 4.7,
    reviews: 95,
    overview: {
      type: "Linear Taper Potentiometer",
      keySpecs: "10kΩ Resistance, Linear Taper, 3 Pins, Rotating contact",
      applications: "User inputs, calibration controls, creating adjustable reference voltages",
      keyFeatures: "Smooth linear response, perfect for microcontroller analog inputs",
      bestFor: "Manual control input for microcontroller analog pins to control brightness, volume, or motor speed"
    },
    specifications: {
      "Resistance": "10kΩ",
      "Taper": "Linear",
      "Power Rating": "0.2W",
      "Shaft": "6mm",
      "Mounting": "Panel/PCB"
    },
    compatibility: ["Arduino analog inputs", "ESP32 ADC", "Audio circuits"],
    projects: ["Volume control", "LED dimmer", "Motor speed control", "User interface"],
    supplier: "TechHub Kampala",
    leadTime: "In Stock", 
    tags: ["potentiometer", "variable", "analog", "control"]
  },

  {
    id: "trim-002",
    name: "Trimmer Potentiometer 10kΩ",
    description: "Miniature adjustable resistor for circuit calibration",
    category: "passive",
    subcategory: "resistors",
    price: 2500,
    studentPrice: 2125,
    image: "/images/components/trimpot-10k.jpg",
    inStock: true,
    stockLevel: 120,
    rating: 4.6,
    reviews: 67,
    overview: {
      type: "Trimmer Potentiometer",
      keySpecs: "10kΩ Resistance, Breadboard-friendly pins, Screwdriver adjustment",
      applications: "Circuit calibration, setting reference voltages, fine-tune adjustments",
      keyFeatures: "Set once during calibration, miniature size, precise adjustment",
      bestFor: "Fine-tuning sensor thresholds, setting amplifier gain, or calibrating display contrast"
    },
    specifications: {
      "Resistance": "10kΩ",
      "Type": "Single-turn",
      "Power Rating": "0.1W",
      "Adjustment": "Screwdriver",
      "Pins": "3-pin breadboard"
    },
    compatibility: ["Breadboards", "PCB", "Calibration circuits"],
    projects: ["Sensor calibration", "Bias adjustment", "Reference voltage setting"],
    supplier: "EtechKampala",
    leadTime: "In Stock",
    tags: ["trimmer", "calibration", "adjustment", "miniature"]
  },

  {
    id: "ldr-002",
    name: "Photoresistor (LDR)",
    description: "Light-dependent resistor for ambient light sensing",
    category: "passive",
    subcategory: "resistors", 
    price: 2000,
    studentPrice: 1700,
    image: "/images/components/photoresistor-ldr.jpg",
    inStock: true,
    stockLevel: 200,
    rating: 4.8,
    reviews: 134,
    overview: {
      type: "Light-Dependent Resistor (LDR)",
      keySpecs: "~1kΩ in bright light, >200kΩ in darkness, CdS photocell",
      applications: "Automatic night lights, light-activated alarms, basic presence detection",
      keyFeatures: "Resistance decreases with light intensity, simple analog interface",
      bestFor: "Creating simple light sensors to detect ambient light levels or direct light sources"
    },
    specifications: {
      "Dark Resistance": ">200kΩ",
      "Light Resistance": "1-10kΩ", 
      "Response Time": "<30ms",
      "Peak Wavelength": "540nm",
      "Operating Temp": "-30°C to +75°C"
    },
    compatibility: ["Arduino analog inputs", "Voltage divider circuits", "Comparators"],
    projects: ["Automatic lighting", "Light alarms", "Solar tracker", "Twilight switch"],
    supplier: "Neriko Electronics",
    leadTime: "In Stock",
    tags: ["ldr", "light-sensor", "photoresistor", "analog"]
  },

  {
    id: "therm-001",
    name: "Thermistor NTC 10kΩ",
    description: "Temperature-sensitive resistor for thermal sensing",
    category: "passive",
    subcategory: "resistors",
    price: 3000,
    studentPrice: 2550,
    image: "/images/components/thermistor-ntc.jpg",
    inStock: true,
    stockLevel: 90,
    rating: 4.5,
    reviews: 56,
    overview: {
      type: "NTC Thermistor",
      keySpecs: "10kΩ resistance at 25°C, NTC Type (resistance decreases with temperature)",
      applications: "Temperature sensing, thermal protection circuits, simple thermometers",
      keyFeatures: "Negative temperature coefficient, high sensitivity, simple interface",
      bestFor: "Temperature measurement where resistance decreases as temperature increases"
    },
    specifications: {
      "Resistance @ 25°C": "10kΩ",
      "Type": "NTC",
      "Beta Value": "3977K",
      "Tolerance": "±5%",
      "Operating Range": "-55°C to +125°C"
    },
    compatibility: ["Arduino analog inputs", "Temperature controllers", "Voltage dividers"],
    projects: ["Digital thermometer", "Temperature alarms", "Thermal protection"],
    supplier: "TechHub Kampala",
    leadTime: "In Stock",
    tags: ["thermistor", "ntc", "temperature", "sensor"]
  },

  // NEW CAPACITORS
  {
    id: "cap-004", 
    name: "Ceramic Capacitor 22pF 50V",
    description: "Small value ceramic capacitor for crystal oscillator circuits",
    category: "passive",
    subcategory: "capacitors",
    price: 400,
    studentPrice: 340,
    image: "/images/components/ceramic-cap-22pf.jpg",
    inStock: true,
    stockLevel: 250,
    rating: 4.6,
    reviews: 78,
    overview: {
      type: "Ceramic Capacitor",
      keySpecs: "22pF, Ceramic, Non-polarized, 50V Rating",
      applications: "Crystal oscillator circuits, RF filtering, timing circuits",
      keyFeatures: "Essential for crystal oscillators, stable over temperature",
      bestFor: "Load capacitors for crystal oscillators in microcontroller circuits"
    },
    specifications: {
      "Capacitance": "22pF",
      "Voltage Rating": "50V",
      "Type": "Ceramic", 
      "Tolerance": "±5%",
      "Temperature Range": "-55°C to +125°C"
    },
    compatibility: ["Crystal oscillators", "ATmega328P", "Timing circuits"],
    projects: ["Arduino clones", "Microcontroller clocks", "RF circuits"],
    supplier: "EtechKampala",
    leadTime: "In Stock",
    tags: ["capacitor", "22pf", "crystal", "ceramic"]
  },

  {
    id: "cap-005",
    name: "Ceramic Capacitor 100nF (0.1µF) 50V", 
    description: "Essential decoupling capacitor for digital ICs",
    category: "passive",
    subcategory: "capacitors",
    price: 500,
    studentPrice: 425,
    image: "/images/components/ceramic-cap-100nf.jpg",
    inStock: true,
    stockLevel: 400,
    rating: 4.9,
    reviews: 245,
    overview: {
      type: "Ceramic Capacitor",
      keySpecs: "100nF / 0.1µF / Code: 104, Ceramic, Non-polarized",
      applications: "Decoupling ICs, timing applications, signal filtering",
      keyFeatures: "Most essential capacitor for digital electronics, fast energy reservoir",
      bestFor: "Placed close to power and ground pins of every IC for voltage smoothing"
    },
    specifications: {
      "Capacitance": "100nF (0.1µF)",
      "Voltage Rating": "50V",
      "Type": "Ceramic",
      "Code": "104",
      "ESR": "Very Low"
    },
    compatibility: ["All digital ICs", "Microcontrollers", "Logic circuits"],
    projects: ["IC decoupling", "Power supply filtering", "Digital circuits"],
    supplier: "Neriko Electronics", 
    leadTime: "In Stock",
    tags: ["capacitor", "100nf", "decoupling", "essential"]
  },

  {
    id: "cap-006",
    name: "Electrolytic Capacitor 10µF 25V",
    description: "Small electrolytic for signal coupling and timing",
    category: "passive",
    subcategory: "capacitors",
    price: 800,
    studentPrice: 680,
    image: "/images/components/electrolytic-10uf.jpg",
    inStock: true,
    stockLevel: 180,
    rating: 4.7,
    reviews: 89,
    overview: {
      type: "Electrolytic Capacitor",
      keySpecs: "10µF Capacitance, 25V Max Voltage, Polarized",
      applications: "Audio signal coupling, short-duration timing circuits",
      keyFeatures: "Blocks DC while passing AC signals, polarized device",
      bestFor: "Audio signal coupling to block DC while letting AC audio signals pass"
    },
    specifications: {
      "Capacitance": "10µF",
      "Voltage Rating": "25V",
      "Type": "Electrolytic",
      "Polarity": "Polarized", 
      "ESR": "Low"
    },
    compatibility: ["Audio circuits", "Timing circuits", "Coupling applications"],
    projects: ["Audio amplifiers", "Signal coupling", "RC timers"],
    supplier: "TechHub Kampala",
    leadTime: "In Stock",
    tags: ["capacitor", "electrolytic", "10uf", "audio"]
  },

  {
    id: "cap-007",
    name: "Electrolytic Capacitor 100µF 25V",
    description: "General-purpose electrolytic for power filtering",
    category: "passive",
    subcategory: "capacitors",
    price: 1200,
    studentPrice: 1020,
    image: "/images/components/electrolytic-100uf.jpg",
    inStock: true,
    stockLevel: 150,
    rating: 4.8,
    reviews: 123,
    overview: {
      type: "Electrolytic Capacitor",
      keySpecs: "100µF Capacitance, 25V Max Voltage, Polarized",
      applications: "Filtering for voltage regulators, medium-duration timing, small power buffers",
      keyFeatures: "Good filtering capacity, energy buffer for sudden current demands",
      bestFor: "Power supply filtering and providing energy buffer for components with varying current needs"
    },
    specifications: {
      "Capacitance": "100µF",
      "Voltage Rating": "25V",
      "Type": "Electrolytic",
      "Polarity": "Polarized",
      "Life": "2000 hours @ 85°C"
    },
    compatibility: ["Power supplies", "Voltage regulators", "Audio circuits"],
    projects: ["Power filtering", "DC supplies", "Audio power"],
    supplier: "EtechKampala",
    leadTime: "In Stock",
    tags: ["capacitor", "electrolytic", "100uf", "filtering"]
  },

  {
    id: "cap-008",
    name: "Electrolytic Capacitor 470µF 25V",
    description: "Mid-range high-capacity capacitor for power applications",
    category: "passive",
    subcategory: "capacitors",
    price: 1800,
    studentPrice: 1530,
    image: "/images/components/electrolytic-470uf.jpg",
    inStock: true,
    stockLevel: 100,
    rating: 4.6,
    reviews: 67,
    overview: {
      type: "Electrolytic Capacitor",
      keySpecs: "470µF Capacitance, 25V Max Voltage, Polarized",
      applications: "More robust power supply filtering, small audio amplifier power supplies",
      keyFeatures: "Substantial energy storage, good for medium-power motor applications",
      bestFor: "Smoothing output of bridge rectifiers and stable power for medium-power motors"
    },
    specifications: {
      "Capacitance": "470µF",
      "Voltage Rating": "25V",
      "Type": "Electrolytic",
      "Polarity": "Polarized",
      "ESR": "Low"
    },
    compatibility: ["Power supplies", "Motor drivers", "Audio amplifiers"],
    projects: ["DC power supplies", "Motor control", "Audio filtering"],
    supplier: "Jumia Uganda",
    leadTime: "2-3 days",
    tags: ["capacitor", "electrolytic", "470uf", "power"]
  },

  {
    id: "cap-009",
    name: "Electrolytic Capacitor 1000µF 25V",
    description: "High-capacity capacitor for substantial power filtering",
    category: "passive",
    subcategory: "capacitors", 
    price: 2500,
    studentPrice: 2125,
    image: "/images/components/electrolytic-1000uf.jpg",
    inStock: true,
    stockLevel: 80,
    rating: 4.7,
    reviews: 98,
    overview: {
      type: "Electrolytic Capacitor",
      keySpecs: "1000µF Capacitance, 25V Max Voltage, Polarized",
      applications: "Power supply smoothing, bulk energy storage, audio power supplies",
      keyFeatures: "High capacity for significant energy storage, prevents voltage sag",
      bestFor: "Power supply applications where high-current components like motors need stable voltage"
    },
    specifications: {
      "Capacitance": "1000µF",
      "Voltage Rating": "25V",
      "Type": "Electrolytic",
      "Polarity": "Polarized",
      "Ripple Current": "High"
    },
    compatibility: ["High-current applications", "Motor power supplies", "Audio systems"],
    projects: ["Motor power supplies", "Audio amplifiers", "High-current circuits"],
    supplier: "EtechKampala", 
    leadTime: "In Stock",
    tags: ["capacitor", "electrolytic", "1000uf", "high-power"]
  },

  {
    id: "cap-010",
    name: "Tantalum Capacitor 10µF 16V",
    description: "High-capacitance small-package capacitor for space-constrained applications",
    category: "passive",
    subcategory: "capacitors",
    price: 3500,
    studentPrice: 2975,
    image: "/images/components/tantalum-10uf.jpg",
    inStock: true,
    stockLevel: 60,
    rating: 4.5,
    reviews: 34,
    overview: {
      type: "Tantalum Capacitor",
      keySpecs: "10µF Capacitance, 16V Max Voltage, Polarized, Small size",
      applications: "Space-constrained power filtering, high-end audio circuits",
      keyFeatures: "High capacitance in small volume, stable characteristics, sensitive to overvoltage",
      bestFor: "Applications needing high capacitance and reliability in a small physical size"
    },
    specifications: {
      "Capacitance": "10µF",
      "Voltage Rating": "16V",
      "Type": "Tantalum",
      "Polarity": "Polarized",
      "ESR": "Very Low"
    },
    compatibility: ["High-frequency circuits", "Compact power supplies", "Audio circuits"],
    projects: ["Compact power filtering", "High-end audio", "Space-limited designs"],
    supplier: "Jumia Uganda",
    leadTime: "3-5 days",
    tags: ["capacitor", "tantalum", "10uf", "compact"]
  },

  // NEW INDUCTORS
  {
    id: "ind-002", 
    name: "Power Inductor 100µH",
    description: "Energy storage inductor for switching power supplies",
    category: "passive",
    subcategory: "inductors",
    price: 6500,
    studentPrice: 5525,
    image: "/images/components/inductor-100uh.jpg",
    inStock: true,
    stockLevel: 50,
    rating: 4.4,
    reviews: 45,
    overview: {
      type: "Power Inductor",
      keySpecs: "100µH Inductance, specific current rating (e.g., 1A), toroidal core",
      applications: "Building DC-DC converters, power filters, energy storage circuits",
      keyFeatures: "Stores energy in magnetic field, crucial for switching power supplies",
      bestFor: "Switching power supplies like buck and boost converters for efficient voltage conversion"
    },
    specifications: {
      "Inductance": "100µH",
      "Current Rating": "1A",
      "DC Resistance": "0.2Ω",
      "Self Resonant Freq": "2MHz",
      "Core": "Ferrite"
    },
    compatibility: ["DC-DC converters", "Switching regulators", "Power supplies"],
    projects: ["Buck converters", "Boost converters", "SMPS circuits"],
    supplier: "TechHub Kampala",
    leadTime: "5-7 days",
    tags: ["inductor", "100uh", "power", "switching"]
  },

  // NEW CRYSTAL
  {
    id: "cry-002",
    name: "Crystal Oscillator 16MHz",
    description: "Precision frequency reference for microcontroller timing",
    category: "passive",
    subcategory: "crystals",
    price: 4500,
    studentPrice: 3825,
    image: "/images/components/crystal-16mhz-hc49.jpg",
    inStock: true,
    stockLevel: 75,
    rating: 4.8,
    reviews: 112,
    overview: {
      type: "Crystal Oscillator",
      keySpecs: "16.000 MHz Frequency, Requires two ~22pF capacitors for operation",
      applications: "Providing stable clock source for MCUs like the ATmega328P",
      keyFeatures: "Highly accurate and stable frequency, essential for precise timing",
      bestFor: "Providing a stable clock signal for microcontrollers, timers, and digital communication protocols"
    },
    specifications: {
      "Frequency": "16.000MHz",
      "Tolerance": "±20ppm",
      "Load Capacitance": "18pF",
      "Package": "HC-49/S",
      "Stability": "±50ppm"
    },
    compatibility: ["ATmega328P", "Arduino", "Microcontrollers", "Timing circuits"],
    projects: ["Arduino clones", "Microcontroller clocks", "Precise timing"],
    supplier: "Neriko Electronics",
    leadTime: "In Stock",
    tags: ["crystal", "16mhz", "oscillator", "timing"]
  }
]

// Additional comprehensive semiconductor components 
const newSemiconductorData: ElectronicComponent[] = [
  // NEW COMPREHENSIVE SEMICONDUCTORS - Category 2: Diodes & LEDs
  {
    id: "diode-003",
    name: "1N4007 Rectifier Diode",
    description: "Standard workhorse diode for power rectification and protection",
    category: "semiconductors",
    subcategory: "diodes",
    price: 800,
    studentPrice: 680,
    image: "/images/components/1n4007-rectifier.jpg",
    inStock: true,
    stockLevel: 300,
    rating: 4.9,
    reviews: 189,
    overview: {
      type: "Silicon Rectifier Diode",
      keySpecs: "1000V Reverse Voltage, 1A Forward Current, Standard workhorse diode",
      applications: "Power rectification, reverse polarity protection, flyback suppression",
      keyFeatures: "High voltage capability, robust construction, handles up to 1000V and 1A",
      bestFor: "Power supply bridge rectifiers and protection against reverse voltage"
    },
    specifications: {
      "Reverse Voltage": "1000V",
      "Forward Current": "1A",
      "Forward Voltage": "1.1V",
      "Package": "DO-41",
      "Recovery Time": "30µs"
    },
    compatibility: ["Bridge rectifiers", "Power supplies", "Protection circuits"],
    projects: ["AC-DC conversion", "Reverse protection", "Power rectification"],
    supplier: "Neriko Electronics",
    leadTime: "In Stock",
    tags: ["diode", "rectifier", "1n4007", "power"]
  }
  // Add remaining components here as needed
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
    overview: {
      type: "Silicon Rectifier Diode",
      keySpecs: "1A forward current, 1000V reverse voltage, 1.1V forward voltage drop",
      applications: "AC to DC conversion, bridge rectifiers, reverse polarity protection",
      keyFeatures: "High current capability, excellent reverse voltage blocking, standard DO-41 package",
      bestFor: "Power supply design, battery chargers, AC-DC converters, and protection circuits"
    },
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
  },
  {
    id: "schottky-001",
    name: "1N5819 Schottky Diode",
    description: "Low voltage drop, high-speed switching diode",
    category: "semiconductors",
    subcategory: "diodes",
    price: 3000,
    studentPrice: 2550,
    image: "/images/components/schottky.jpg",
    inStock: true,
    stockLevel: 85,
    rating: 4.5,
    reviews: 43,
    specifications: {
      "Forward Voltage": "0.4V",
      "Current Rating": "1A",
      "Reverse Voltage": "40V",
      "Package": "DO-41",
      "Recovery Time": "Fast"
    },
    compatibility: ["Switch-mode power supplies", "High-frequency circuits"],
    projects: ["SMPS", "RF Circuits", "Fast Switching"],
    supplier: "EtechKampala",
    leadTime: "In Stock",
    tags: ["schottky", "fast-switching", "low-drop", "high-frequency"]
  },

  // LEDs
  {
    id: "led-001",
    name: "5mm Red LED",
    description: "Standard 5mm red light-emitting diode",
    category: "semiconductors",
    subcategory: "leds",
    price: 800,
    studentPrice: 680,
    image: "/images/components/led-red.jpg",
    inStock: true,
    stockLevel: 500,
    rating: 4.8,
    reviews: 234,
    specifications: {
      "Color": "Red",
      "Forward Voltage": "2.0V",
      "Forward Current": "20mA",
      "Luminous Intensity": "15-20mcd",
      "Viewing Angle": "30°"
    },
    compatibility: ["Arduino", "All microcontrollers", "Indicators"],
    projects: ["Status Indicators", "Displays", "Decorative Lighting"],
    supplier: "Neriko Electronics",
    leadTime: "In Stock",
    tags: ["led", "red", "indicator", "lighting"]
  },
  {
    id: "led-002",
    name: "RGB LED Common Cathode",
    description: "Color-changing LED with red, green, blue elements",
    category: "semiconductors",
    subcategory: "leds",
    price: 3500,
    studentPrice: 2975,
    image: "/images/components/rgb-led.jpg",
    inStock: true,
    stockLevel: 120,
    rating: 4.6,
    reviews: 89,
    specifications: {
      "Colors": "Red, Green, Blue",
      "Forward Voltage": "2.0-3.4V",
      "Forward Current": "20mA per color",
      "Configuration": "Common Cathode",
      "Package": "5mm"
    },
    compatibility: ["Arduino", "PWM controllers", "LED controllers"],
    projects: ["Color Displays", "Mood Lighting", "Status Indicators"],
    supplier: "TechHub Kampala",
    leadTime: "2-3 days",
    tags: ["rgb", "led", "color", "pwm"]
  },

  // Transistors
  {
    id: "bjt-001",
    name: "BC547 NPN Transistor",
    description: "General-purpose small signal NPN transistor",
    category: "semiconductors",
    subcategory: "transistors",
    price: 800,
    studentPrice: 680,
    image: "/images/components/bc547.jpg",
    inStock: true,
    stockLevel: 200,
    rating: 4.7,
    reviews: 156,
    specifications: {
      "Type": "NPN",
      "Collector Current": "100mA",
      "Collector-Emitter Voltage": "45V",
      "DC Current Gain": "110-800",
      "Package": "TO-92"
    },
    compatibility: ["Arduino", "Signal amplification", "Switching"],
    projects: ["LED Drivers", "Signal Amplifiers", "Logic Level Converters"],
    supplier: "Neriko Electronics",
    leadTime: "In Stock",
    tags: ["transistor", "npn", "bc547", "switching"]
  },
  {
    id: "bjt-002",
    name: "2N2222 NPN Transistor",
    description: "General-purpose NPN switching transistor",
    category: "semiconductors",
    subcategory: "transistors",
    price: 1200,
    studentPrice: 1020,
    image: "/images/components/2n2222.jpg",
    inStock: true,
    stockLevel: 150,
    rating: 4.6,
    reviews: 98,
    specifications: {
      "Type": "NPN",
      "Collector Current": "800mA",
      "Collector-Emitter Voltage": "30V",
      "DC Current Gain": "100-300",
      "Package": "TO-18"
    },
    compatibility: ["High-speed switching", "Audio amplifiers"],
    projects: ["Motor Drivers", "Audio Amplifiers", "Oscillators"],
    supplier: "TechHub Kampala",
    leadTime: "In Stock",
    tags: ["transistor", "npn", "2n2222", "audio"]
  },
  {
    id: "power-trans-001",
    name: "TIP120 Power Transistor",
    description: "High-power NPN Darlington transistor",
    category: "semiconductors",
    subcategory: "transistors",
    price: 8000,
    studentPrice: 6800,
    image: "/images/components/tip120.jpg",
    inStock: true,
    stockLevel: 45,
    rating: 4.5,
    reviews: 67,
    specifications: {
      "Type": "NPN Darlington",
      "Collector Current": "5A",
      "Collector-Emitter Voltage": "60V",
      "DC Current Gain": "1000+",
      "Package": "TO-220"
    },
    compatibility: ["Motor control", "High-power switching"],
    projects: ["DC Motor Drivers", "Solenoid Control", "High-Power LED"],
    supplier: "EtechKampala",
    leadTime: "3-5 days",
    tags: ["power-transistor", "darlington", "tip120", "motor-driver"]
  },

  // MOSFETs
  {
    id: "mosfet-001",
    name: "IRF540N N-Channel MOSFET",
    description: "High-power N-channel MOSFET for switching applications",
    category: "semiconductors",
    subcategory: "mosfets",
    price: 12000,
    studentPrice: 10200,
    image: "/images/components/irf540n.jpg",
    inStock: true,
    stockLevel: 35,
    rating: 4.7,
    reviews: 89,
    specifications: {
      "Type": "N-Channel",
      "Drain Current": "27A",
      "Drain-Source Voltage": "100V",
      "Gate Threshold": "2-4V",
      "Package": "TO-220"
    },
    compatibility: ["High-power switching", "Motor control"],
    projects: ["Motor Controllers", "Power Switches", "DC-DC Converters"],
    supplier: "Jumia Uganda",
    leadTime: "5-7 days",
    tags: ["mosfet", "n-channel", "high-power", "switching"]
  },

  // Voltage Regulators
  {
    id: "vreg-001",
    name: "7805 Voltage Regulator (5V)",
    description: "Fixed 5V positive voltage regulator",
    category: "semiconductors",
    subcategory: "voltage-regulators",
    price: 4000,
    studentPrice: 3400,
    image: "/images/components/7805.jpg",
    inStock: true,
    stockLevel: 80,
    rating: 4.8,
    reviews: 145,
    specifications: {
      "Output Voltage": "5V",
      "Input Voltage": "7-35V",
      "Output Current": "1A",
      "Dropout Voltage": "2V",
      "Package": "TO-220"
    },
    compatibility: ["Arduino power", "5V systems"],
    projects: ["Power Supplies", "Arduino Projects", "5V Circuits"],
    supplier: "Neriko Electronics",
    leadTime: "In Stock",
    tags: ["voltage-regulator", "7805", "5v", "linear"]
  },
  {
    id: "vreg-002",
    name: "LM317 Adjustable Voltage Regulator",
    description: "Adjustable positive voltage regulator 1.2V-37V",
    category: "semiconductors",
    subcategory: "voltage-regulators",
    price: 6500,
    studentPrice: 5525,
    image: "/images/components/lm317.jpg",
    inStock: true,
    stockLevel: 60,
    rating: 4.6,
    reviews: 78,
    specifications: {
      "Output Voltage": "1.2-37V",
      "Input Voltage": "3-40V",
      "Output Current": "1.5A",
      "Adjustment": "External resistors",
      "Package": "TO-220"
    },
    compatibility: ["Variable power supplies", "Adjustable circuits"],
    projects: ["Variable PSU", "Battery Chargers", "LED Drivers"],
    supplier: "TechHub Kampala",
    leadTime: "2-3 days",
    tags: ["voltage-regulator", "lm317", "adjustable", "variable"]
  }
]

// Integrated Circuits
const integratedCircuitsData: ElectronicComponent[] = [
  {
    id: "ic-001",
    name: "NE555 Timer IC",
    description: "Classic timer IC for oscillators, timers, and pulse generation",
    category: "integrated-circuits",
    subcategory: "timers",
    price: 3000,
    studentPrice: 2550,
    image: "/images/components/ne555.jpg",
    inStock: true,
    stockLevel: 150,
    rating: 4.9,
    reviews: 234,
    specifications: {
      "Supply Voltage": "4.5-16V",
      "Output Current": "200mA",
      "Frequency Range": "0.1Hz-500kHz",
      "Temperature Range": "0-70°C",
      "Package": "DIP-8"
    },
    compatibility: ["Arduino", "Breadboards", "Timing circuits"],
    projects: ["LED Blinker", "PWM Generator", "Astable Oscillator"],
    supplier: "Neriko Electronics",
    leadTime: "In Stock",
    tags: ["timer", "555", "oscillator", "pwm"]
  },
  {
    id: "ic-002",
    name: "LM358 Dual Op-Amp",
    description: "Dual operational amplifier for signal conditioning",
    category: "integrated-circuits",
    subcategory: "op-amps",
    price: 4500,
    studentPrice: 3825,
    image: "/images/components/lm358.jpg",
    inStock: true,
    stockLevel: 120,
    rating: 4.7,
    reviews: 156,
    specifications: {
      "Supply Voltage": "3-32V",
      "Input Offset": "7mV",
      "Gain Bandwidth": "1MHz",
      "Slew Rate": "0.6V/µs",
      "Package": "DIP-8"
    },
    compatibility: ["Audio amplifiers", "Signal conditioning"],
    projects: ["Audio Amplifier", "Comparator", "Filter Circuits"],
    supplier: "TechHub Kampala",
    leadTime: "In Stock",
    tags: ["op-amp", "lm358", "amplifier", "analog"]
  },
  {
    id: "ic-003",
    name: "LM741 Op-Amp",
    description: "Classic general-purpose operational amplifier",
    category: "integrated-circuits",
    subcategory: "op-amps",
    price: 3500,
    studentPrice: 2975,
    image: "/images/components/lm741.jpg",
    inStock: true,
    stockLevel: 90,
    rating: 4.6,
    reviews: 98,
    specifications: {
      "Supply Voltage": "±15V",
      "Input Offset": "5mV",
      "Gain Bandwidth": "1MHz",
      "Slew Rate": "0.5V/µs",
      "Package": "DIP-8"
    },
    compatibility: ["Analog circuits", "Signal processing"],
    projects: ["Inverting Amplifier", "Voltage Follower", "Integrator"],
    supplier: "EtechKampala",
    leadTime: "2-3 days",
    tags: ["op-amp", "lm741", "analog", "classic"]
  },
  {
    id: "ic-004",
    name: "74HC00 Quad NAND Gate",
    description: "Quad 2-input NAND gate digital logic IC",
    category: "integrated-circuits",
    subcategory: "logic-gates",
    price: 4000,
    studentPrice: 3400,
    image: "/images/components/74hc00.jpg",
    inStock: true,
    stockLevel: 100,
    rating: 4.8,
    reviews: 123,
    specifications: {
      "Supply Voltage": "2-6V",
      "Input Current": "±1µA",
      "Output Current": "±25mA",
      "Propagation Delay": "9ns",
      "Package": "DIP-14"
    },
    compatibility: ["Digital logic", "Microcontrollers"],
    projects: ["Logic Circuits", "Oscillators", "Digital Systems"],
    supplier: "Neriko Electronics",
    leadTime: "In Stock",
    tags: ["logic-gate", "nand", "74hc00", "digital"]
  },
  {
    id: "ic-005",
    name: "L293D Motor Driver IC",
    description: "Dual H-bridge motor driver for DC motors and steppers",
    category: "integrated-circuits",
    subcategory: "motor-drivers",
    price: 15000,
    studentPrice: 12750,
    image: "/images/components/l293d.jpg",
    inStock: true,
    stockLevel: 65,
    rating: 4.7,
    reviews: 189,
    specifications: {
      "Supply Voltage": "4.5-36V",
      "Output Current": "600mA per channel",
      "Peak Current": "1.2A",
      "Channels": "2",
      "Package": "DIP-16"
    },
    compatibility: ["Arduino", "DC motors", "Stepper motors"],
    projects: ["Robot Cars", "Motor Control", "Arduino Projects"],
    supplier: "Jumia Uganda",
    leadTime: "In Stock",
    tags: ["motor-driver", "l293d", "h-bridge", "robotics"]
  },
  {
    id: "ic-006",
    name: "ATmega328P Microcontroller",
    description: "8-bit microcontroller - the heart of Arduino Uno",
    category: "integrated-circuits",
    subcategory: "microcontrollers",
    price: 25000,
    studentPrice: 21250,
    image: "/images/components/atmega328p.jpg",
    inStock: true,
    stockLevel: 40,
    rating: 4.9,
    reviews: 267,
    specifications: {
      "Architecture": "8-bit AVR",
      "Flash Memory": "32KB",
      "SRAM": "2KB",
      "EEPROM": "1KB",
      "I/O Pins": "23",
      "Package": "DIP-28"
    },
    compatibility: ["Arduino IDE", "AVR programmers"],
    projects: ["Arduino Clone", "Custom Controllers", "Embedded Systems"],
    supplier: "EtechKampala",
    leadTime: "5-7 days",
    tags: ["microcontroller", "atmega328p", "arduino", "avr"]
  },
  {
    id: "ic-007",
    name: "74HC595 Shift Register",
    description: "8-bit serial-in parallel-out shift register",
    category: "integrated-circuits",
    subcategory: "shift-registers",
    price: 6000,
    studentPrice: 5100,
    image: "/images/components/74hc595.jpg",
    inStock: true,
    stockLevel: 85,
    rating: 4.6,
    reviews: 134,
    specifications: {
      "Supply Voltage": "2-6V",
      "Output Current": "35mA",
      "Shift Clock": "Up to 100MHz",
      "Outputs": "8",
      "Package": "DIP-16"
    },
    compatibility: ["Arduino", "LED matrices", "7-segment displays"],
    projects: ["LED Matrix", "Multiple LEDs", "Display Drivers"],
    supplier: "TechHub Kampala",
    leadTime: "2-3 days",
    tags: ["shift-register", "74hc595", "led-driver", "expansion"]
  },
  {
    id: "ic-008",
    name: "24LC256 EEPROM IC",
    description: "256Kb (32KB) Serial EEPROM memory",
    category: "integrated-circuits",
    subcategory: "memory",
    price: 8000,
    studentPrice: 6800,
    image: "/images/components/24lc256.jpg",
    inStock: true,
    stockLevel: 50,
    rating: 4.5,
    reviews: 67,
    specifications: {
      "Capacity": "256Kb (32KB)",
      "Interface": "I2C",
      "Supply Voltage": "1.8-5.5V",
      "Write Cycles": "1M",
      "Package": "DIP-8"
    },
    compatibility: ["Arduino", "I2C devices", "Data logging"],
    projects: ["Data Logger", "Settings Storage", "Sensor Data"],
    supplier: "EtechKampala",
    leadTime: "3-5 days",
    tags: ["eeprom", "memory", "i2c", "storage"]
  }
]

// Optoelectronics & Display
const optoelectronicsData: ElectronicComponent[] = [
  {
    id: "display-001",
    name: "7-Segment Display (Common Cathode)",
    description: "Single digit 7-segment display for numbers and some characters",
    category: "optoelectronics",
    subcategory: "displays",
    price: 6500,
    studentPrice: 5525,
    image: "/images/components/7segment.jpg",
    inStock: true,
    stockLevel: 75,
    rating: 4.6,
    reviews: 89,
    specifications: {
      "Size": "0.56 inch",
      "Color": "Red",
      "Type": "Common Cathode",
      "Forward Voltage": "2.0V",
      "Forward Current": "20mA per segment"
    },
    compatibility: ["Arduino", "Microcontrollers", "Counter circuits"],
    projects: ["Digital Clock", "Counter", "Temperature Display"],
    supplier: "TechHub Kampala",
    leadTime: "In Stock",
    tags: ["7-segment", "display", "digital", "counter"]
  },
  {
    id: "display-002",
    name: "16x2 Character LCD Display",
    description: "Standard LCD for displaying text information",
    category: "optoelectronics",
    subcategory: "displays",
    price: 32500,
    studentPrice: 27625,
    image: "/images/components/lcd16x2.jpg",
    inStock: true,
    stockLevel: 45,
    rating: 4.8,
    reviews: 156,
    specifications: {
      "Size": "16 characters x 2 lines",
      "Interface": "Parallel/I2C",
      "Supply Voltage": "5V",
      "Character Size": "5x8 dots",
      "Backlight": "Blue/Green"
    },
    compatibility: ["Arduino", "Raspberry Pi", "Microcontrollers"],
    projects: ["Data Display", "Menu Systems", "Status Monitor"],
    supplier: "Neriko Electronics",
    leadTime: "In Stock",
    tags: ["lcd", "display", "text", "16x2"]
  },
  {
    id: "display-003",
    name: "0.96\" OLED Display I2C",
    description: "High-contrast, low-power OLED display",
    category: "optoelectronics",
    subcategory: "displays",
    price: 52500,
    studentPrice: 44625,
    image: "/images/components/oled096.jpg",
    inStock: true,
    stockLevel: 30,
    rating: 4.7,
    reviews: 134,
    specifications: {
      "Size": "0.96 inch",
      "Resolution": "128x64",
      "Interface": "I2C",
      "Supply Voltage": "3.3-5V",
      "Color": "White/Blue"
    },
    compatibility: ["Arduino", "ESP32", "Raspberry Pi"],
    projects: ["Wearables", "Sensors Display", "IoT Devices"],
    supplier: "Jumia Uganda",
    leadTime: "3-5 days",
    tags: ["oled", "display", "i2c", "low-power"]
  },
  {
    id: "opto-001",
    name: "PC817 Optocoupler",
    description: "Optical isolator for electrical isolation",
    category: "optoelectronics",
    subcategory: "optocouplers",
    price: 3500,
    studentPrice: 2975,
    image: "/images/components/pc817.jpg",
    inStock: true,
    stockLevel: 90,
    rating: 4.5,
    reviews: 67,
    specifications: {
      "CTR": "50-600%",
      "Input Current": "50mA",
      "Output Voltage": "35V",
      "Isolation Voltage": "5000V",
      "Package": "DIP-4"
    },
    compatibility: ["Isolation circuits", "AC control"],
    projects: ["AC Control", "Signal Isolation", "Safety Circuits"],
    supplier: "EtechKampala",
    leadTime: "2-3 days",
    tags: ["optocoupler", "isolation", "pc817", "safety"]
  },
  {
    id: "ir-001",
    name: "IR Emitter & Receiver Pair",
    description: "Infrared LED and photodiode pair for remote controls",
    category: "optoelectronics",
    subcategory: "infrared",
    price: 5000,
    studentPrice: 4250,
    image: "/images/components/ir-pair.jpg",
    inStock: true,
    stockLevel: 80,
    rating: 4.6,
    reviews: 98,
    specifications: {
      "Wavelength": "940nm",
      "Forward Voltage": "1.2V (IR LED)",
      "Forward Current": "100mA",
      "Range": "5-10 meters",
      "Package": "5mm"
    },
    compatibility: ["Arduino", "Remote controls", "Line following"],
    projects: ["Remote Control", "Line Following Robot", "Proximity Sensor"],
    supplier: "TechHub Kampala",
    leadTime: "In Stock",
    tags: ["infrared", "ir", "remote", "sensor"]
  }
]

// Electromechanical Components
const electromechanicalData: ElectronicComponent[] = [
  {
    id: "relay-001",
    name: "5V Relay Module",
    description: "Single channel relay module for controlling AC/DC loads",
    category: "electromechanical",
    subcategory: "relays",
    price: 12000,
    studentPrice: 10200,
    image: "/images/components/relay5v.jpg",
    inStock: true,
    stockLevel: 60,
    rating: 4.7,
    reviews: 123,
    specifications: {
      "Coil Voltage": "5V",
      "Contact Rating": "10A 250V AC",
      "Contact Type": "SPDT",
      "Trigger": "Low level",
      "Size": "43x18x27mm"
    },
    compatibility: ["Arduino", "Home automation", "Motor control"],
    projects: ["Home Automation", "Motor Control", "AC Appliance Control"],
    supplier: "Neriko Electronics",
    leadTime: "In Stock",
    tags: ["relay", "5v", "ac-control", "automation"]
  },
  {
    id: "switch-001",
    name: "Tactile Push Button Switch",
    description: "Momentary tactile switch for user input",
    category: "electromechanical",
    subcategory: "switches",
    price: 800,
    studentPrice: 680,
    image: "/images/components/tactile-switch.jpg",
    inStock: true,
    stockLevel: 300,
    rating: 4.8,
    reviews: 234,
    specifications: {
      "Type": "Momentary",
      "Contact Rating": "50mA 12V DC",
      "Operating Force": "2.55N",
      "Travel": "0.25mm",
      "Size": "6x6mm"
    },
    compatibility: ["Arduino", "All microcontrollers", "User interface"],
    projects: ["User Input", "Menu Navigation", "Control Panels"],
    supplier: "Neriko Electronics",
    leadTime: "In Stock",
    tags: ["switch", "tactile", "button", "momentary"]
  },
  {
    id: "switch-002",
    name: "Toggle Switch SPDT",
    description: "Single pole double throw toggle switch",
    category: "electromechanical",
    subcategory: "switches",
    price: 6000,
    studentPrice: 5100,
    image: "/images/components/toggle-switch.jpg",
    inStock: true,
    stockLevel: 80,
    rating: 4.6,
    reviews: 89,
    specifications: {
      "Type": "Latching",
      "Contact Rating": "6A 125V AC",
      "Positions": "3 (ON-OFF-ON)",
      "Mounting": "Panel Mount",
      "Thread": "6mm"
    },
    compatibility: ["Power switching", "Mode selection"],
    projects: ["Power Control", "Mode Selection", "Manual Switches"],
    supplier: "TechHub Kampala",
    leadTime: "2-3 days",
    tags: ["toggle", "switch", "spdt", "latching"]
  },
  {
    id: "buzzer-001",
    name: "Active Buzzer 5V",
    description: "Piezo buzzer for producing audible tones and alarms",
    category: "electromechanical",
    subcategory: "audio",
    price: 4000,
    studentPrice: 3400,
    image: "/images/components/active-buzzer.jpg",
    inStock: true,
    stockLevel: 120,
    rating: 4.5,
    reviews: 156,
    specifications: {
      "Type": "Active (with oscillator)",
      "Operating Voltage": "3-5V",
      "Sound Pressure": "85dB",
      "Frequency": "2.3kHz",
      "Current": "30mA"
    },
    compatibility: ["Arduino", "Alarm systems", "Notifications"],
    projects: ["Alarm System", "Timer Notification", "Door Bell"],
    supplier: "EtechKampala",
    leadTime: "In Stock",
    tags: ["buzzer", "active", "alarm", "audio"]
  },
  {
    id: "motor-001",
    name: "DC Hobby Motor 3-6V",
    description: "Small DC motor for robotics and hobby projects",
    category: "electromechanical",
    subcategory: "motors",
    price: 15000,
    studentPrice: 12750,
    image: "/images/components/dc-motor.jpg",
    inStock: true,
    stockLevel: 45,
    rating: 4.6,
    reviews: 98,
    specifications: {
      "Voltage": "3-6V",
      "Current": "200-300mA",
      "Speed": "16500 RPM @ 6V",
      "Torque": "25g.cm",
      "Shaft": "2mm diameter"
    },
    compatibility: ["Arduino", "Motor drivers", "Robotics"],
    projects: ["Robot Car", "Fan", "Mechanical Projects"],
    supplier: "Jumia Uganda",
    leadTime: "3-5 days",
    tags: ["motor", "dc", "hobby", "robotics"]
  },
  {
    id: "servo-001",
    name: "SG90 Micro Servo Motor",
    description: "Small servo motor for precise positional control",
    category: "electromechanical",
    subcategory: "motors",
    price: 37500,
    studentPrice: 31875,
    image: "/images/components/sg90.jpg",
    inStock: true,
    stockLevel: 35,
    rating: 4.7,
    reviews: 167,
    specifications: {
      "Voltage": "4.8-6V",
      "Torque": "1.8kg.cm @ 4.8V",
      "Speed": "0.1s/60° @ 4.8V",
      "Rotation": "180°",
      "Weight": "9g"
    },
    compatibility: ["Arduino", "Raspberry Pi", "RC projects"],
    projects: ["Robot Arm", "Camera Pan/Tilt", "RC Planes"],
    supplier: "TechHub Kampala",
    leadTime: "5-7 days",
    tags: ["servo", "sg90", "robotics", "precise-control"]
  }
]

// Connectors & Sockets
const connectorsData: ElectronicComponent[] = [
  {
    id: "conn-001",
    name: "Male Pin Headers (40 pins)",
    description: "40-pin breakable male pin headers for connections",
    category: "connectors",
    subcategory: "headers",
    price: 4000,
    studentPrice: 3400,
    image: "/images/components/pin-headers-male.jpg",
    inStock: true,
    stockLevel: 150,
    rating: 4.8,
    reviews: 234,
    specifications: {
      "Pins": "40 (breakable)",
      "Pitch": "2.54mm",
      "Length": "11.6mm",
      "Material": "Plastic + Tin plated",
      "Current": "3A per pin"
    },
    compatibility: ["Breadboards", "PCB", "Arduino", "Modules"],
    projects: ["Breadboard Connections", "PCB Assembly", "Module Connections"],
    supplier: "Neriko Electronics",
    leadTime: "In Stock",
    tags: ["pin-headers", "male", "connector", "breadboard"]
  },
  {
    id: "conn-006",
    name: "Female Pin Headers (40 pins)",
    description: "40-pin breakable female pin headers for socket connections",
    category: "connectors",
    subcategory: "headers",
    price: 5000,
    studentPrice: 4250,
    image: "/images/components/pin-headers-female.jpg",
    inStock: true,
    stockLevel: 120,
    rating: 4.7,
    reviews: 189,
    specifications: {
      "Pins": "40 (breakable)",
      "Pitch": "2.54mm",
      "Height": "8.5mm",
      "Material": "Plastic + Tin plated",
      "Current": "3A per pin"
    },
    compatibility: ["Arduino shields", "Module sockets", "PCB"],
    projects: ["Arduino Shields", "Module Sockets", "Stackable Headers"],
    supplier: "TechHub Kampala",
    leadTime: "In Stock",
    tags: ["pin-headers", "female", "socket", "shield"]
  },
  {
    id: "conn-003",
    name: "IC Socket DIP-8",
    description: "8-pin DIP IC socket to avoid direct soldering",
    category: "connectors",
    subcategory: "sockets",
    price: 2000,
    studentPrice: 1700,
    image: "/images/components/ic-socket-8.jpg",
    inStock: true,
    stockLevel: 100,
    rating: 4.6,
    reviews: 134,
    specifications: {
      "Pins": "8",
      "Package": "DIP",
      "Pitch": "2.54mm",
      "Material": "Plastic + Gold plated",
      "Temperature": "-55°C to +125°C"
    },
    compatibility: ["DIP-8 ICs", "NE555", "LM358"],
    projects: ["IC Prototyping", "Timer Circuits", "Op-amp Circuits"],
    supplier: "EtechKampala",
    leadTime: "In Stock",
    tags: ["ic-socket", "dip-8", "socket", "prototyping"]
  },
  {
    id: "conn-004",
    name: "Jumper Wires M-M (40pcs)",
    description: "Male-to-Male jumper wires for breadboard connections",
    category: "connectors",
    subcategory: "wires",
    price: 10000,
    studentPrice: 8500,
    image: "/images/components/jumper-wires-mm.jpg",
    inStock: true,
    stockLevel: 80,
    rating: 4.8,
    reviews: 267,
    specifications: {
      "Quantity": "40 pieces",
      "Length": "20cm",
      "Type": "Male-to-Male",
      "Colors": "10 colors x 4 pieces",
      "Wire Gauge": "24AWG"
    },
    compatibility: ["Breadboards", "Arduino", "Prototyping"],
    projects: ["Breadboard Prototyping", "Arduino Projects", "Circuit Testing"],
    supplier: "Neriko Electronics",
    leadTime: "In Stock",
    tags: ["jumper-wires", "male-male", "breadboard", "prototyping"]
  },
  {
    id: "conn-008",
    name: "Jumper Wires M-M (40pcs)",
    description: "Male-to-Male jumper wires for breadboard connections",
    category: "connectors",
    subcategory: "wires",
    price: 10000,
    studentPrice: 8500,
    image: "/images/components/jumper-wires-mm.jpg",
    inStock: true,
    stockLevel: 80,
    rating: 4.8,
    reviews: 267,
    specifications: {
      "Quantity": "40 pieces",
      "Length": "20cm",
      "Type": "Male-to-Male",
      "Colors": "10 colors x 4 pieces",
      "Wire Gauge": "24AWG"
    },
    compatibility: ["Breadboards", "Arduino", "Prototyping"],
    projects: ["Breadboard Prototyping", "Arduino Projects", "Circuit Testing"],
    supplier: "Neriko Electronics",
    leadTime: "In Stock",
    tags: ["jumper-wires", "male-male", "breadboard", "prototyping"]
  }
]

// Sensors and Modules
const sensorsData: ElectronicComponent[] = [
  {
    id: "sensor-001",
    name: "HC-SR04 Ultrasonic Sensor",
    description: "Ultrasonic distance sensor for measuring distance up to 4m",
    category: "sensors",
    subcategory: "distance",
    price: 17500,
    studentPrice: 14875,
    image: "/images/components/hc-sr04.jpg",
    inStock: true,
    stockLevel: 85,
    rating: 4.8,
    reviews: 234,
    overview: {
      type: "Ultrasonic Distance Sensor",
      keySpecs: "2cm to 4m range, ±3mm accuracy, 40kHz frequency, 5V operation",
      applications: "Distance measurement, object detection, robot navigation, parking assistance",
      keyFeatures: "Non-contact measurement, digital interface, weatherproof design, easy Arduino integration",
      bestFor: "Robotics projects, automated parking systems, security perimeters, and IoT distance monitoring"
    },
    specifications: {
      "Range": "2cm - 4m",
      "Accuracy": "±3mm",
      "Operating Voltage": "5V",
      "Current": "15mA",
      "Frequency": "40kHz"
    },
    compatibility: ["Arduino", "Raspberry Pi", "Microcontrollers"],
    projects: ["Distance Measurement", "Robot Navigation", "Parking Sensor"],
    supplier: "Neriko Electronics",
    leadTime: "In Stock",
    tags: ["ultrasonic", "distance", "sensor", "hc-sr04"]
  },
  {
    id: "sensor-002",
    name: "PIR Motion Sensor HC-SR501",
    description: "Passive infrared motion sensor for detecting human movement",
    category: "sensors",
    subcategory: "motion",
    price: 21000,
    studentPrice: 17850,
    image: "/images/components/pir-hc-sr501.jpg",
    inStock: true,
    stockLevel: 60,
    rating: 4.7,
    reviews: 189,
    specifications: {
      "Detection Range": "3-7m",
      "Detection Angle": "120°",
      "Operating Voltage": "5-20V",
      "Output": "High/Low 3.3V",
      "Delay Time": "5s-300s"
    },
    compatibility: ["Arduino", "Security systems", "Automation"],
    projects: ["Security System", "Auto Lighting", "Motion Detection"],
    supplier: "TechHub Kampala",
    leadTime: "In Stock",
    tags: ["pir", "motion", "sensor", "security"]
  },
  {
    id: "sensor-003",
    name: "DHT22 Temperature & Humidity Sensor",
    description: "Digital temperature and humidity sensor with high accuracy",
    category: "sensors",
    subcategory: "environmental",
    price: 25000,
    studentPrice: 21250,
    image: "/images/components/dht22.jpg",
    inStock: true,
    stockLevel: 75,
    rating: 4.6,
    reviews: 156,
    overview: {
      type: "Digital Environmental Sensor",
      keySpecs: "-40°C to 80°C temperature range, 0-100% RH humidity, ±0.5°C accuracy",
      applications: "Weather monitoring, environmental control, HVAC systems, data logging",
      keyFeatures: "High precision, single-wire digital interface, calibrated output, low power consumption",
      bestFor: "Professional weather stations, greenhouse monitoring, smart home climate control, and research applications"
    },
    specifications: {
      "Temperature Range": "-40°C to 80°C",
      "Humidity Range": "0-100% RH",
      "Temperature Accuracy": "±0.5°C",
      "Humidity Accuracy": "±2-5% RH",
      "Interface": "Single wire digital"
    },
    compatibility: ["Arduino", "ESP32", "Weather stations"],
    projects: ["Weather Station", "Environmental Monitor", "Smart Home"],
    supplier: "Jumia Uganda",
    leadTime: "3-5 days",
    tags: ["dht22", "temperature", "humidity", "environmental"]
  },
  {
    id: "sensor-004",
    name: "DHT11 Temperature & Humidity Sensor",
    description: "Basic digital temperature and humidity sensor",
    category: "sensors",
    subcategory: "environmental",
    price: 15000,
    studentPrice: 12750,
    image: "/images/components/dht11.jpg",
    inStock: true,
    stockLevel: 90,
    rating: 4.4,
    reviews: 198,
    specifications: {
      "Temperature Range": "0°C to 50°C",
      "Humidity Range": "20-90% RH",
      "Temperature Accuracy": "±2°C",
      "Humidity Accuracy": "±5% RH",
      "Interface": "Single wire digital"
    },
    compatibility: ["Arduino", "Basic projects", "Learning"],
    projects: ["Simple Weather Station", "Room Monitor", "Educational"],
    supplier: "Neriko Electronics",
    leadTime: "In Stock",
    tags: ["dht11", "temperature", "humidity", "basic"]
  },
  {
    id: "sensor-005",
    name: "Soil Moisture Sensor",
    description: "Analog soil moisture sensor for agricultural projects",
    category: "sensors",
    subcategory: "environmental",
    price: 16500,
    studentPrice: 14025,
    image: "/images/components/soil-moisture.jpg",
    inStock: true,
    stockLevel: 65,
    rating: 4.5,
    reviews: 123,
    specifications: {
      "Output": "Analog 0-3V",
      "Operating Voltage": "3.3-5V",
      "Current": "35mA",
      "Probe Material": "Nickel plated",
      "Size": "60x20mm"
    },
    compatibility: ["Arduino", "Agricultural IoT", "Garden automation"],
    projects: ["Smart Garden", "Plant Monitor", "Irrigation Control"],
    supplier: "EtechKampala",
    leadTime: "2-3 days",
    tags: ["soil", "moisture", "agriculture", "analog"]
  },
  {
    id: "sensor-006",
    name: "MQ-2 Gas/Smoke Sensor",
    description: "Gas sensor for detecting LPG, smoke, alcohol, propane",
    category: "sensors",
    subcategory: "gas",
    price: 27500,
    studentPrice: 23375,
    image: "/images/components/mq2.jpg",
    inStock: true,
    stockLevel: 40,
    rating: 4.6,
    reviews: 98,
    specifications: {
      "Detection": "LPG, Smoke, Alcohol, Propane",
      "Concentration": "300-10000ppm",
      "Operating Voltage": "5V",
      "Heating Voltage": "5V",
      "Output": "Analog + Digital"
    },
    compatibility: ["Arduino", "Gas leak detection", "Safety systems"],
    projects: ["Gas Leak Detector", "Smoke Alarm", "Safety Monitor"],
    supplier: "TechHub Kampala",
    leadTime: "5-7 days",
    tags: ["gas-sensor", "mq2", "smoke", "safety"]
  },
  {
    id: "sensor-007",
    name: "ACS712 Current Sensor 5A",
    description: "Hall effect current sensor for measuring AC/DC current",
    category: "sensors",
    subcategory: "electrical",
    price: 25000,
    studentPrice: 21250,
    image: "/images/components/acs712.jpg",
    inStock: true,
    stockLevel: 35,
    rating: 4.5,
    reviews: 87,
    specifications: {
      "Current Range": "±5A",
      "Sensitivity": "185mV/A",
      "Supply Voltage": "5V",
      "Bandwidth": "80kHz",
      "Output": "Analog voltage"
    },
    compatibility: ["Arduino", "Power monitoring", "Energy meters"],
    projects: ["Power Monitor", "Energy Meter", "Current Measurement"],
    supplier: "Jumia Uganda",
    leadTime: "5-7 days",
    tags: ["current-sensor", "acs712", "power", "measurement"]
  },
  {
    id: "rfid-001",
    name: "MFRC522 RFID Kit",
    description: "13.56MHz RFID reader with cards and tags",
    category: "sensors",
    subcategory: "communication",
    price: 37500,
    studentPrice: 31875,
    image: "/images/components/mfrc522.jpg",
    inStock: true,
    stockLevel: 30,
    rating: 4.7,
    reviews: 145,
    overview: {
      type: "RFID Reader/Writer Module",
      keySpecs: "13.56MHz frequency, SPI interface, 3.3V operation, 5cm read range",
      applications: "Access control, asset tracking, attendance systems, contactless payments",
      keyFeatures: "Complete kit with cards and tags, Arduino libraries available, easy SPI integration, secure encryption",
      bestFor: "Security systems, student attendance tracking, inventory management, and smart lock applications"
    },
    specifications: {
      "Frequency": "13.56MHz",
      "Interface": "SPI",
      "Operating Voltage": "3.3V",
      "Range": "5cm",
      "Included": "Reader + 2 cards + 2 tags"
    },
    compatibility: ["Arduino", "ESP32", "Access control"],
    projects: ["Access Control", "Attendance System", "Smart Lock"],
    supplier: "TechHub Kampala",
    leadTime: "3-5 days",
    tags: ["rfid", "mfrc522", "access-control", "nfc"]
  },
  {
    id: "gps-001",
    name: "NEO-6M GPS Module",
    description: "GPS receiver module for obtaining location data",
    category: "sensors",
    subcategory: "communication",
    price: 50000,
    studentPrice: 42500,
    image: "/images/components/neo6m.jpg",
    inStock: true,
    stockLevel: 25,
    rating: 4.6,
    reviews: 89,
    specifications: {
      "Channels": "50",
      "Update Rate": "1Hz",
      "Accuracy": "2.5m",
      "Interface": "UART",
      "Supply Voltage": "3.3-5V"
    },
    compatibility: ["Arduino", "ESP32", "Vehicle tracking"],
    projects: ["GPS Tracker", "Navigation System", "Fleet Management"],
    supplier: "EtechKampala",
    leadTime: "7-10 days",
    tags: ["gps", "neo6m", "location", "tracking"]
  },
  {
    id: "gsm-001",
    name: "SIM800L GSM Module",
    description: "GSM/GPRS module for cellular communication",
    category: "sensors",
    subcategory: "communication",
    price: 57500,
    studentPrice: 48875,
    image: "/images/components/sim800l.jpg",
    inStock: true,
    stockLevel: 20,
    rating: 4.4,
    reviews: 67,
    specifications: {
      "Frequency": "Quad-band 850/900/1800/1900MHz",
      "Interface": "UART",
      "Supply Voltage": "3.4-4.4V",
      "Current": "2A peak",
      "Features": "SMS, Voice, GPRS"
    },
    compatibility: ["Arduino", "ESP32", "IoT projects"],
    projects: ["SMS Alerts", "Remote Monitoring", "IoT Communication"],
    supplier: "Jumia Uganda",
    leadTime: "7-10 days",
    tags: ["gsm", "sim800l", "cellular", "sms"]
  }
]

// DISPLAYS & OPTOELECTRONICS
const displayComponents: ElectronicComponent[] = [
  {
    id: "display-oled-001",
    name: "0.96\" OLED Display I2C",
    description: "High-contrast, low-power OLED display",
    category: "displays",
    subcategory: "oled",
    price: 25000,
    studentPrice: 21250,
    image: "/images/components/oled-096-i2c.jpg",
    inStock: true,
    stockLevel: 65,
    rating: 4.8,
    reviews: 189,
    overview: {
      type: "Organic Light-Emitting Diode Display",
      keySpecs: "128x64 pixels, I2C interface, 3.3V-5V logic, 0.96 inch diagonal",
      applications: "Sensor data display, status messages, small graphical interfaces, IoT device screens",
      keyFeatures: "Self-illuminating pixels, high contrast, low power consumption, no backlight required",
      bestFor: "Displaying sensor data, status messages, or creating small graphical interfaces for IoT devices and wearables"
    },
    specifications: {
      "Resolution": "128x64 pixels",
      "Size": "0.96 inch",
      "Interface": "I2C (SDA, SCL)",
      "Logic Voltage": "3.3V - 5V",
      "Driver IC": "SSD1306",
      "Viewing Angle": "160°"
    },
    compatibility: ["Arduino", "ESP32", "STM32", "I2C compatible MCUs"],
    projects: ["Weather stations", "IoT dashboards", "Wearable displays", "System monitors"],
    supplier: "Neriko Electronics",
    leadTime: "In Stock",
    tags: ["OLED", "display", "I2C", "graphics", "low-power"]
  },

  {
    id: "display-lcd-001",
    name: "16x2 Character LCD Display",
    description: "Standard LCD for displaying text information",
    category: "displays",
    subcategory: "lcd",
    price: 18000,
    studentPrice: 15300,
    image: "/images/components/lcd-16x2.jpg",
    inStock: true,
    stockLevel: 85,
    rating: 4.6,
    reviews: 156,
    overview: {
      type: "Character-Based Liquid Crystal Display",
      keySpecs: "16 characters x 2 lines, HD44780 compatible, parallel interface, blue backlight",
      applications: "Menu displays, debugging information, user prompts, simple text interfaces",
      keyFeatures: "Clear character display, adjustable contrast, built-in character generator, reliable operation",
      bestFor: "Menus, debugging information, user prompts, and any application where simple text feedback is needed"
    },
    specifications: {
      "Display": "16x2 Characters",
      "Controller": "HD44780 Compatible",
      "Interface": "Parallel (6-pin minimum)",
      "Backlight": "Blue LED",
      "Operating Voltage": "5V",
      "Character Size": "5x8 dots"
    },
    compatibility: ["Arduino", "Raspberry Pi", "Any 5V microcontroller"],
    projects: ["Digital clocks", "Temperature displays", "Menu systems", "Data loggers"],
    supplier: "TechHub Kampala",
    leadTime: "In Stock",
    tags: ["LCD", "character", "display", "text", "parallel"]
  },

  {
    id: "display-7seg-001",
    name: "7-Segment Display (Common Cathode)",
    description: "Single digit 7-segment display for numbers and some characters",
    category: "displays",
    subcategory: "seven-segment",
    price: 3500,
    studentPrice: 2975,
    image: "/images/components/7-segment.jpg",
    inStock: true,
    stockLevel: 120,
    rating: 4.7,
    reviews: 94,
    overview: {
      type: "Numeric LED Display",
      keySpecs: "Single digit, 7 segments + decimal point, common cathode, red color",
      applications: "Digital clocks, counters, voltmeters, temperature displays, numeric readouts",
      keyFeatures: "Bright red segments, low power consumption, easy to read, direct drive capability",
      bestFor: "Digital clocks, counters, voltmeters, and basic numeric readouts"
    },
    specifications: {
      "Digits": "1",
      "Type": "Common Cathode",
      "Color": "Red",
      "Forward Voltage": "~2.1V per segment",
      "Forward Current": "20mA per segment",
      "Size": "0.56 inch"
    },
    compatibility: ["Shift registers", "Decoder ICs", "Direct microcontroller drive"],
    projects: ["Digital clocks", "Counters", "Scoreboards", "Measurement displays"],
    supplier: "Neriko Electronics",
    leadTime: "In Stock",
    tags: ["7-segment", "LED", "numeric", "display", "counter"]
  },

  {
    id: "led-red-5mm",
    name: "5mm Red LED",
    description: "Standard 5mm red light-emitting diode",
    category: "optoelectronics",
    subcategory: "leds",
    price: 500,
    studentPrice: 425,
    image: "/images/components/led-red-5mm.jpg",
    inStock: true,
    stockLevel: 500,
    rating: 4.9,
    reviews: 245,
    overview: {
      type: "Light-Emitting Diode",
      keySpecs: "5mm diameter, red color, ~2.0V forward voltage, 20mA max current",
      applications: "Power indicators, status lights, debugging aids, simple lighting effects",
      keyFeatures: "Bright illumination, long lifespan, low power consumption, easy to use",
      bestFor: "Power indicators, status lights, debugging, and educational circuits"
    },
    specifications: {
      "Diameter": "5mm",
      "Color": "Red (620-625nm)",
      "Forward Voltage": "2.0-2.2V",
      "Forward Current": "20mA (max)",
      "Luminous Intensity": "150-200mcd",
      "Viewing Angle": "30°"
    },
    compatibility: ["Any microcontroller", "Breadboards", "PCB applications"],
    projects: ["Status indicators", "Learning circuits", "Decorative lighting", "Alert systems"],
    supplier: "Neriko Electronics",
    leadTime: "In Stock",
    tags: ["LED", "red", "5mm", "indicator", "basic"]
  },

  {
    id: "led-rgb-5mm",
    name: "RGB LED (Common Cathode)",
    description: "Color-changing LED with red, green, and blue elements",
    category: "optoelectronics",
    subcategory: "leds",
    price: 2500,
    studentPrice: 2125,
    image: "/images/components/led-rgb-5mm.jpg",
    inStock: true,
    stockLevel: 85,
    rating: 4.8,
    reviews: 134,
    overview: {
      type: "Multi-Color Light-Emitting Diode",
      keySpecs: "5mm diameter, common cathode, 4 pins (R, G, B, GND), PWM controllable",
      applications: "Dynamic status indicators, mood lighting, colorful visual effects, color mixing demonstrations",
      keyFeatures: "Full color spectrum capability, individual color control, PWM dimmable, compact package",
      bestFor: "Creating dynamic status indicators, mood lighting, and colorful visual effects"
    },
    specifications: {
      "Diameter": "5mm",
      "Type": "Common Cathode",
      "Pins": "4 (Red, Green, Blue, Common)",
      "Forward Voltage": "2.0-3.4V (varies by color)",
      "Forward Current": "20mA per color",
      "Colors": "16.7 million (with PWM)"
    },
    compatibility: ["Arduino PWM pins", "PWM controllers", "LED drivers"],
    projects: ["Mood lighting", "Status indicators", "Color displays", "Interactive art"],
    supplier: "TechHub Kampala",
    leadTime: "In Stock",
    tags: ["RGB", "LED", "color", "PWM", "multicolor"]
  }
]

// SEMICONDUCTORS - Enhanced with comprehensive overview
const enhancedSemiconductorData: ElectronicComponent[] = [
  {
    id: "diode-004",
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
    overview: {
      type: "Power Rectification Diode",
      keySpecs: "1000V reverse voltage, 1A forward current, 1.1V forward voltage drop",
      applications: "AC to DC conversion, bridge rectifiers, reverse polarity protection",
      keyFeatures: "High current capability, excellent reverse voltage blocking, standard DO-41 package",
      bestFor: "Power rectification, reverse polarity protection, and flyback suppression"
    },
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
    id: "diode-signal-001",
    name: "1N4148 Signal Diode",
    description: "High-speed signal diode for switching applications",
    category: "semiconductors",
    subcategory: "diodes",
    price: 400,
    studentPrice: 340,
    image: "/images/components/1n4148.jpg",
    inStock: true,
    stockLevel: 300,
    rating: 4.8,
    reviews: 124,
    overview: {
      type: "High-Speed Switching Diode",
      keySpecs: "100V reverse voltage, 200mA forward current, 4ns reverse recovery time",
      applications: "Digital logic circuits, signal processing, fast switching, input protection",
      keyFeatures: "Very fast switching speed, low capacitance, small signal capability, reliable operation",
      bestFor: "Digital logic circuits, signal processing, and protecting input pins"
    },
    specifications: {
      "Reverse Voltage": "100V",
      "Forward Current": "200mA",
      "Forward Voltage": "0.7V",
      "Reverse Recovery": "4ns",
      "Package": "DO-35"
    },
    compatibility: ["Digital circuits", "Signal processing", "Logic protection"],
    projects: ["Logic circuits", "Signal clipping", "Input protection", "Fast switching"],
    supplier: "Neriko Electronics",
    leadTime: "In Stock",
    tags: ["diode", "signal", "fast", "switching", "1n4148"]
  },

  {
    id: "transistor-npn-001",
    name: "BC547 NPN Transistor",
    description: "General-purpose small signal NPN transistor",
    category: "semiconductors",
    subcategory: "transistors",
    price: 800,
    studentPrice: 680,
    image: "/images/components/bc547.jpg",
    inStock: true,
    stockLevel: 250,
    rating: 4.9,
    reviews: 198,
    overview: {
      type: "Small Signal NPN Bipolar Junction Transistor",
      keySpecs: "45V max VCE, 100mA max collector current, high current gain",
      applications: "Small load switching, signal amplification, LED drivers, relay drivers",
      keyFeatures: "High current gain, low saturation voltage, excellent switching characteristics, TO-92 package",
      bestFor: "Switching small loads, signal amplification, and educational circuits"
    },
    specifications: {
      "Type": "NPN BJT",
      "Max VCE": "45V",
      "Max IC": "100mA",
      "hFE": "110-800",
      "Package": "TO-92",
      "Max Power": "500mW"
    },
    compatibility: ["5V logic", "Small loads", "Signal circuits"],
    projects: ["LED drivers", "Relay control", "Audio amplifiers", "Switching circuits"],
    supplier: "Neriko Electronics",
    leadTime: "In Stock",
    tags: ["transistor", "NPN", "BC547", "switching", "amplifier"]
  },

  {
    id: "ic-timer-555",
    name: "NE555 Timer IC",
    description: "Classic timer IC for oscillators, timers, and pulse generation",
    category: "semiconductors",
    subcategory: "integrated-circuits",
    price: 3500,
    studentPrice: 2975,
    image: "/images/components/ne555.jpg",
    inStock: true,
    stockLevel: 150,
    rating: 4.9,
    reviews: 267,
    overview: {
      type: "Precision Timer Integrated Circuit",
      keySpecs: "8-pin DIP, 4.5V to 15V supply, three operating modes (astable, monostable, bistable)",
      applications: "Square wave generation, time delays, LED flashers, PWM signal generation, timing circuits",
      keyFeatures: "Highly stable operation, temperature independent, easy to configure, versatile design",
      bestFor: "Creating square waves, time delays, LED flashers, and pulse width modulation (PWM) signals"
    },
    specifications: {
      "Package": "8-pin DIP",
      "Supply Voltage": "4.5V to 15V",
      "Output Current": "200mA",
      "Temperature Range": "0°C to 70°C",
      "Frequency Range": "DC to 500kHz"
    },
    compatibility: ["Breadboards", "All microcontrollers", "Analog circuits"],
    projects: ["LED flashers", "Tone generators", "PWM controllers", "Timing circuits"],
    supplier: "TechHub Kampala",
    leadTime: "In Stock",
    tags: ["555", "timer", "oscillator", "PWM", "classic"]
  },

  {
    id: "ic-opamp-741",
    name: "LM741 Op-Amp",
    description: "Classic general-purpose operational amplifier",
    category: "semiconductors",
    subcategory: "integrated-circuits",
    price: 2500,
    studentPrice: 2125,
    image: "/images/components/lm741.jpg",
    inStock: true,
    stockLevel: 120,
    rating: 4.7,
    reviews: 89,
    overview: {
      type: "General-Purpose Operational Amplifier",
      keySpecs: "8-pin DIP, high voltage gain, single or dual supply operation, compensation included",
      applications: "Signal amplification, active filters, voltage followers, mathematical operations",
      keyFeatures: "Internal frequency compensation, high gain, versatile design, educational standard",
      bestFor: "Educational circuits, audio pre-amplifiers, and basic signal conditioning"
    },
    specifications: {
      "Package": "8-pin DIP",
      "Supply Voltage": "±5V to ±18V",
      "Input Offset Voltage": "2mV max",
      "Slew Rate": "0.5V/µs",
      "Gain Bandwidth": "1MHz"
    },
    compatibility: ["Analog circuits", "Audio applications", "Educational projects"],
    projects: ["Audio amplifiers", "Active filters", "Voltage followers", "Analog computers"],
    supplier: "Electronics Supply Co",
    leadTime: "In Stock",
    tags: ["op-amp", "741", "amplifier", "analog", "classic"]
  }
]

// ADDITIONAL SENSORS with comprehensive overview
const additionalSensorsData: ElectronicComponent[] = [
  {
    id: "sensor-pir-001",
    name: "PIR Motion Sensor HC-SR501",
    description: "Passive infrared motion sensor for detecting human movement",
    category: "sensors",
    subcategory: "motion",
    price: 12500,
    studentPrice: 10625,
    image: "/images/components/pir-hc-sr501.jpg",
    inStock: true,
    stockLevel: 95,
    rating: 4.8,
    reviews: 167,
    overview: {
      type: "Passive Infrared Motion Detector",
      keySpecs: "~7m detection range, adjustable sensitivity and time delay, 3.3V-5V operation",
      applications: "Automatic lighting, security alarms, presence detection, occupancy sensing",
      keyFeatures: "Low power consumption, adjustable detection range, time delay control, wide angle coverage",
      bestFor: "Automatic lighting, security alarms, and presence-activated projects"
    },
    specifications: {
      "Detection Range": "3-7 meters",
      "Detection Angle": "100-110°",
      "Operating Voltage": "3.3V - 5V",
      "Output": "Digital HIGH/LOW",
      "Delay Time": "5s - 300s (adjustable)",
      "Dimensions": "32x24mm"
    },
    compatibility: ["Arduino", "ESP32", "Raspberry Pi", "Any digital input"],
    projects: ["Security systems", "Automatic lights", "Occupancy sensors", "Energy saving"],
    supplier: "TechHub Kampala",
    leadTime: "In Stock",
    tags: ["PIR", "motion", "sensor", "security", "automatic"]
  },

  {
    id: "sensor-dht11",
    name: "DHT11 Temperature & Humidity Sensor",
    description: "Basic digital temperature and humidity sensor",
    category: "sensors",
    subcategory: "environmental",
    price: 8000,
    studentPrice: 6800,
    image: "/images/components/dht11.jpg",
    inStock: true,
    stockLevel: 120,
    rating: 4.5,
    reviews: 145,
    overview: {
      type: "Digital Environmental Sensor",
      keySpecs: "20-80% humidity range, 0-50°C temperature range, single-wire digital protocol",
      applications: "Weather monitoring, HVAC control, environmental data logging, greenhouse automation",
      keyFeatures: "Calibrated digital output, single-wire communication, low cost, easy integration",
      bestFor: "Simple weather stations, environmental monitoring, and HVAC control prototypes"
    },
    specifications: {
      "Humidity Range": "20-80% RH",
      "Humidity Accuracy": "±5% RH",
      "Temperature Range": "0-50°C",
      "Temperature Accuracy": "±2°C",
      "Operating Voltage": "3.3V - 5V",
      "Interface": "Single-wire digital"
    },
    compatibility: ["Arduino", "ESP32", "Any microcontroller with GPIO"],
    projects: ["Weather stations", "Smart thermostats", "Data loggers", "Plant monitors"],
    supplier: "Neriko Electronics",
    leadTime: "In Stock",
    tags: ["DHT11", "temperature", "humidity", "environmental", "digital"]
  },

  {
    id: "sensor-soil-001",
    name: "Soil Moisture Sensor",
    description: "Analog soil moisture sensor for agricultural projects",
    category: "sensors",
    subcategory: "agricultural",
    price: 6500,
    studentPrice: 5525,
    image: "/images/components/soil-moisture.jpg",
    inStock: true,
    stockLevel: 85,
    rating: 4.6,
    reviews: 98,
    overview: {
      type: "Capacitive Soil Moisture Sensor",
      keySpecs: "Analog voltage output, corrosion-resistant probes, 3.3V-5V operation",
      applications: "Automated irrigation, plant monitoring, agricultural research, smart gardening",
      keyFeatures: "Waterproof design, analog output for precise readings, long probe life, easy calibration",
      bestFor: "Automated plant watering systems, agricultural monitoring, and smart garden projects"
    },
    specifications: {
      "Output": "Analog voltage",
      "Operating Voltage": "3.3V - 5V",
      "Probe Material": "Corrosion resistant",
      "Sensing Depth": "0-7cm",
      "Response Time": "<1s",
      "Interface": "Analog pin"
    },
    compatibility: ["Arduino analog pins", "ESP32 ADC", "Any ADC interface"],
    projects: ["Auto watering", "Plant monitors", "Agricultural IoT", "Garden automation"],
    supplier: "AgriTech Solutions",
    leadTime: "In Stock",
    tags: ["soil", "moisture", "agricultural", "analog", "irrigation"]
  },

  {
    id: "sensor-gas-mq2",
    name: "MQ-2 Gas/Smoke Sensor",
    description: "Gas sensor for detecting LPG, smoke, alcohol, propane",
    category: "sensors",
    subcategory: "gas",
    price: 15000,
    studentPrice: 12750,
    image: "/images/components/mq2-gas.jpg",
    inStock: true,
    stockLevel: 45,
    rating: 4.7,
    reviews: 78,
    overview: {
      type: "Semiconductor Gas Detection Sensor",
      keySpecs: "Detects methane, butane, LPG, smoke, analog output, 5V operation",
      applications: "Gas leak detection, smoke alarms, air quality monitoring, safety systems",
      keyFeatures: "Wide detection range, analog output for concentration measurement, fast response time, reliable operation",
      bestFor: "Air quality monitoring, smoke detectors, and gas leak alarms"
    },
    specifications: {
      "Detection Gases": "LPG, Butane, Propane, Methane, Alcohol, Smoke",
      "Operating Voltage": "5V",
      "Sensitivity": "300-10000ppm",
      "Response Time": "<10s",
      "Recovery Time": "<30s",
      "Output": "Analog + Digital"
    },
    compatibility: ["Arduino", "ESP32", "Gas detection systems"],
    projects: ["Gas leak alarms", "Air quality monitors", "Safety systems", "Smart kitchens"],
    supplier: "Safety Systems Ltd",
    leadTime: "2-3 days",
    tags: ["gas", "smoke", "MQ2", "safety", "detection"]
  }
]

// ELECTROMECHANICAL & PROTOTYPING components
const electromechanicalComponents: ElectronicComponent[] = [
  {
    id: "relay-5v-001",
    name: "5V Relay Module",
    description: "Single channel relay module for controlling AC/DC loads",
    category: "electromechanical",
    subcategory: "relays",
    price: 8500,
    studentPrice: 7225,
    image: "/images/components/relay-5v.jpg",
    inStock: true,
    stockLevel: 75,
    rating: 4.8,
    reviews: 134,
    overview: {
      type: "Electrically Operated Switch Module",
      keySpecs: "5V control signal, switches up to 250V AC @ 10A, includes driver circuit",
      applications: "Home automation, AC appliance control, high-power DC switching, isolation switching",
      keyFeatures: "Optical isolation, protection diode included, easy microcontroller interface, LED status indicator",
      bestFor: "Home automation, switching AC appliances, and controlling high-power DC loads"
    },
    specifications: {
      "Control Voltage": "5V DC",
      "Contact Rating": "10A @ 250V AC / 10A @ 30V DC",
      "Coil Resistance": "70Ω",
      "Contact Type": "SPDT (NO/NC)",
      "Isolation": "4000V",
      "Dimensions": "51x26x20mm"
    },
    compatibility: ["Arduino", "ESP32", "Any 5V microcontroller"],
    projects: ["Smart switches", "Appliance control", "Motor control", "Lighting automation"],
    supplier: "AutoTech Solutions",
    leadTime: "In Stock",
    tags: ["relay", "switching", "automation", "high-voltage", "isolation"]
  },

  {
    id: "buzzer-active-5v",
    name: "Active Buzzer 5V",
    description: "Piezo buzzer for producing audible tones and alarms",
    category: "electromechanical",
    subcategory: "audio",
    price: 2500,
    studentPrice: 2125,
    image: "/images/components/buzzer-5v.jpg",
    inStock: true,
    stockLevel: 200,
    rating: 4.7,
    reviews: 89,
    overview: {
      type: "Active Piezoelectric Sound Generator",
      keySpecs: "5V operation, built-in oscillator, 85dB sound output, simple on/off control",
      applications: "Alarms, user feedback, notification sounds, alert systems, doorbells",
      keyFeatures: "Built-in frequency generation, loud output, simple digital control, reliable operation",
      bestFor: "Alarms, user feedback clicks, and simple sound effects"
    },
    specifications: {
      "Operating Voltage": "5V DC",
      "Sound Output": "85dB @ 10cm",
      "Frequency": "2.3kHz ± 300Hz",
      "Current": "30mA",
      "Interface": "Digital ON/OFF",
      "Dimensions": "12x9.5mm"
    },
    compatibility: ["Any digital output pin", "Arduino", "ESP32", "Logic circuits"],
    projects: ["Alarm systems", "Notification devices", "Game buzzers", "User interfaces"],
    supplier: "Audio Components Co",
    leadTime: "In Stock",
    tags: ["buzzer", "active", "sound", "alarm", "audio"]
  },

  {
    id: "motor-servo-sg90",
    name: "SG90 Micro Servo Motor",
    description: "Small servo motor for precise positional control",
    category: "electromechanical",
    subcategory: "motors",
    price: 37500,
    studentPrice: 31875,
    image: "/images/components/sg90-servo.jpg",
    inStock: true,
    stockLevel: 65,
    rating: 4.9,
    reviews: 198,
    overview: {
      type: "Precision Position Control Servo Motor",
      keySpecs: "180-degree rotation, PWM control, 4.8V-6V operation, 2.5kg⋅cm torque",
      applications: "Robotics arms, steering mechanisms, camera gimbals, automated actuators",
      keyFeatures: "Precise angle control, feedback control system, lightweight design, standard PWM interface",
      bestFor: "Robotics arms, steering systems in RC cars, and remote-controlled switches"
    },
    specifications: {
      "Rotation": "180° (90° in each direction)",
      "Operating Voltage": "4.8V - 6V",
      "Torque": "2.5kg⋅cm @ 4.8V",
      "Speed": "0.1s/60° @ 4.8V",
      "Control": "PWM (20ms period)",
      "Weight": "9g"
    },
    compatibility: ["Arduino servo library", "ESP32 PWM", "Any PWM-capable MCU"],
    projects: ["Robot arms", "Camera pan/tilt", "RC vehicles", "Automated switches"],
    supplier: "Robotics Supply Co",
    leadTime: "In Stock",
    tags: ["servo", "motor", "robotics", "PWM", "precision"]
  },

  {
    id: "switch-tactile-001",
    name: "Tactile Push Button Switch",
    description: "Momentary tactile switch for user input",
    category: "electromechanical",
    subcategory: "switches",
    price: 500,
    studentPrice: 425,
    image: "/images/components/tactile-switch.jpg",
    inStock: true,
    stockLevel: 300,
    rating: 4.8,
    reviews: 156,
    overview: {
      type: "Momentary Contact Switch",
      keySpecs: "Momentary operation, tactile feedback, 12mm height, through-hole mounting",
      applications: "Reset buttons, user inputs, menu navigation, interrupt triggers",
      keyFeatures: "Distinct tactile feedback, reliable contact, breadboard compatible, long life cycle",
      bestFor: "Reset buttons, user inputs, and triggering events in electronic projects"
    },
    specifications: {
      "Type": "Momentary (SPST-NO)",
      "Actuation Force": "2.55N ± 0.69N",
      "Contact Rating": "12V 50mA",
      "Life Cycle": "1,000,000 cycles",
      "Operating Temperature": "-20°C to +70°C",
      "Mounting": "Through-hole"
    },
    compatibility: ["Breadboards", "PCBs", "All microcontrollers"],
    projects: ["User interfaces", "Reset circuits", "Menu systems", "Game controllers"],
    supplier: "Component Warehouse",
    leadTime: "In Stock",
    tags: ["switch", "button", "tactile", "momentary", "input"]
  },

  {
    id: "breadboard-830",
    name: "Solderless Breadboard (830 Point)",
    description: "The essential tool for electronics prototyping",
    category: "prototyping",
    subcategory: "breadboards",
    price: 12000,
    studentPrice: 10200,
    image: "/images/components/breadboard-830.jpg",
    inStock: true,
    stockLevel: 55,
    rating: 4.9,
    reviews: 234,
    overview: {
      type: "Solderless Circuit Construction Platform",
      keySpecs: "830 tie-points, dual power rails, standard size, reusable connections",
      applications: "Circuit prototyping, educational projects, testing designs, component evaluation",
      keyFeatures: "No soldering required, reusable, spring-loaded contacts, standard layout, durable construction",
      bestFor: "Prototyping, learning electronics, and testing circuit designs before permanent assembly"
    },
    specifications: {
      "Tie Points": "830",
      "Terminal Strips": "2 x 30 rows",
      "Power Rails": "4 (2 per side)",
      "Dimensions": "165 x 55 x 10mm",
      "Contact Material": "Phosphor bronze",
      "Wire Gauge": "20-29 AWG"
    },
    compatibility: ["All through-hole components", "Jumper wires", "Development boards"],
    projects: ["All prototyping work", "Educational circuits", "Testing designs"],
    supplier: "Prototyping Supplies",
    leadTime: "In Stock",
    tags: ["breadboard", "prototyping", "solderless", "essential", "reusable"]
  }
]

// POWER COMPONENTS & VOLTAGE REGULATORS
const powerComponents: ElectronicComponent[] = [
  {
    id: "power-reg-7805",
    name: "7805 Voltage Regulator IC",
    description: "Fixed 5V positive voltage regulator",
    category: "power",
    subcategory: "regulators",
    price: 3500,
    studentPrice: 2975,
    image: "/images/components/7805-regulator.jpg",
    inStock: true,
    stockLevel: 150,
    rating: 4.9,
    reviews: 203,
    overview: {
      type: "Linear Voltage Regulator",
      keySpecs: "Input: 7V-35V, Output: 5V ±4%, Max current: 1A, TO-220 package",
      applications: "Power supply circuits, microcontroller power, LED driver circuits, battery-powered projects",
      keyFeatures: "Built-in thermal shutdown, short circuit protection, no external components required",
      bestFor: "Converting higher voltages to stable 5V for digital circuits and sensors"
    },
    specifications: {
      "Input Voltage": "7V-35V",
      "Output Voltage": "5V ±4%",
      "Output Current": "1A",
      "Dropout Voltage": "2V",
      "Package": "TO-220"
    },
    compatibility: ["Arduino", "ESP32", "STM32", "General 5V circuits"],
    projects: ["Power Supply", "Voltage Regulation", "Battery Projects"],
    supplier: "Neriko Electronics",
    leadTime: "In Stock",
    tags: ["regulator", "7805", "power", "5v"]
  },
  {
    id: "power-reg-3v3",
    name: "AMS1117-3.3V Regulator",
    description: "Low dropout 3.3V voltage regulator",
    category: "power",
    subcategory: "regulators",
    price: 4200,
    studentPrice: 3570,
    image: "/images/components/ams1117-3v3.jpg",
    inStock: true,
    stockLevel: 120,
    rating: 4.7,
    reviews: 156,
    overview: {
      type: "Low Dropout (LDO) Voltage Regulator",
      keySpecs: "Input: 4.75V-15V, Output: 3.3V ±1%, Max current: 1A, SOT-223 package",
      applications: "ESP32/ESP8266 power supply, 3.3V sensor circuits, WiFi module power, battery regulation",
      keyFeatures: "Low dropout voltage (1.3V), excellent line regulation, thermal protection",
      bestFor: "Powering 3.3V microcontrollers and modern sensors from 5V or battery sources"
    },
    specifications: {
      "Input Voltage": "4.75V-15V",
      "Output Voltage": "3.3V ±1%",
      "Output Current": "1A",
      "Dropout Voltage": "1.3V",
      "Package": "SOT-223"
    },
    compatibility: ["ESP32", "ESP8266", "3.3V sensors", "WiFi modules"],
    projects: ["ESP32 Power", "3.3V Circuits", "Battery Projects"],
    supplier: "TechHub Kampala", 
    leadTime: "In Stock",
    tags: ["regulator", "3v3", "ldo", "esp32"]
  }
];

// CONNECTORS & HEADERS
const connectorComponents: ElectronicComponent[] = [
  {
    id: "conn-005",
    name: "Male Pin Headers (40 pins)",
    description: "40-pin breakable male pin headers for connections",
    category: "connectors",
    subcategory: "headers",
    price: 4000,
    studentPrice: 3400,
    image: "/images/components/pin-headers-male.jpg",
    inStock: true,
    stockLevel: 150,
    rating: 4.8,
    reviews: 234,
    specifications: {
      "Pins": "40 (breakable)",
      "Pitch": "2.54mm",
      "Length": "11.6mm",
      "Material": "Plastic + Tin plated",
      "Current": "3A per pin"
    },
    compatibility: ["Breadboards", "PCB", "Arduino", "Modules"],
    projects: ["Breadboard Connections", "PCB Assembly", "Module Connections"],
    supplier: "Neriko Electronics",
    leadTime: "In Stock",
    tags: ["pin-headers", "male", "connector", "breadboard"]
  },
  {
    id: "conn-007",
    name: "Female Pin Headers (40 pins)",
    description: "40-pin breakable female pin headers for socket connections",
    category: "connectors",
    subcategory: "headers",
    price: 5000,
    studentPrice: 4250,
    image: "/images/components/pin-headers-female.jpg",
    inStock: true,
    stockLevel: 120,
    rating: 4.7,
    reviews: 189,
    specifications: {
      "Pins": "40 (breakable)",
      "Pitch": "2.54mm",
      "Height": "8.5mm",
      "Material": "Plastic + Tin plated",
      "Current": "3A per pin"
    },
    compatibility: ["Arduino shields", "Module sockets", "PCB"],
    projects: ["Arduino Shields", "Module Sockets", "Stackable Headers"],
    supplier: "TechHub Kampala",
    leadTime: "In Stock",
    tags: ["pin-headers", "female", "socket", "shield"]
  },
  {
    id: "conn-009",
    name: "IC Socket DIP-8",
    description: "8-pin DIP IC socket to avoid direct soldering",
    category: "connectors",
    subcategory: "sockets",
    price: 2000,
    studentPrice: 1700,
    image: "/images/components/ic-socket-8.jpg",
    inStock: true,
    stockLevel: 100,
    rating: 4.6,
    reviews: 134,
    specifications: {
      "Pins": "8",
      "Package": "DIP",
      "Pitch": "2.54mm",
      "Material": "Plastic + Gold plated",
      "Temperature": "-55°C to +125°C"
    },
    compatibility: ["DIP-8 ICs", "NE555", "LM358"],
    projects: ["IC Prototyping", "Timer Circuits", "Op-amp Circuits"],
    supplier: "EtechKampala",
    leadTime: "In Stock",
    tags: ["ic-socket", "dip-8", "socket", "prototyping"]
  },
  {
    id: "conn-010",
    name: "Jumper Wires M-M (40pcs)",
    description: "Male-to-Male jumper wires for breadboard connections",
    category: "connectors",
    subcategory: "wires",
    price: 10000,
    studentPrice: 8500,
    image: "/images/components/jumper-wires-mm.jpg",
    inStock: true,
    stockLevel: 80,
    rating: 4.8,
    reviews: 267,
    specifications: {
      "Quantity": "40 pieces",
      "Length": "20cm",
      "Type": "Male-to-Male",
      "Colors": "10 colors x 4 pieces",
      "Wire Gauge": "24AWG"
    },
    compatibility: ["Breadboards", "Arduino", "Prototyping"],
    projects: ["Breadboard Prototyping", "Arduino Projects", "Circuit Testing"],
    supplier: "Neriko Electronics",
    leadTime: "In Stock",
    tags: ["jumper-wires", "male-male", "breadboard", "prototyping"]
  },
  {
    id: "conn-011",
    name: "Jumper Wires M-M (40pcs)",
    description: "Male-to-Male jumper wires for breadboard connections",
    category: "connectors",
    subcategory: "wires",
    price: 10000,
    studentPrice: 8500,
    image: "/images/components/jumper-wires-mm.jpg",
    inStock: true,
    stockLevel: 80,
    rating: 4.8,
    reviews: 267,
    specifications: {
      "Quantity": "40 pieces",
      "Length": "20cm",
      "Type": "Male-to-Male",
      "Colors": "10 colors x 4 pieces",
      "Wire Gauge": "24AWG"
    },
    compatibility: ["Breadboards", "Arduino", "Prototyping"],
    projects: ["Breadboard Prototyping", "Arduino Projects", "Circuit Testing"],
    supplier: "Neriko Electronics",
    leadTime: "In Stock",
    tags: ["jumper-wires", "male-male", "breadboard", "prototyping"]
  }
]

// SPECIALTY ICs & COMMUNICATION
const specialtyICs: ElectronicComponent[] = [
  {
    id: "ic-esp8266-01",
    name: "ESP8266-01 WiFi Module",
    description: "Ultra-low power WiFi SoC for IoT applications",
    category: "modules",
    subcategory: "wifi",
    price: 18500,
    studentPrice: 15725,
    image: "/images/components/esp8266-01.jpg",
    inStock: true,
    stockLevel: 85,
    rating: 4.8,
    reviews: 278,
    overview: {
      type: "WiFi System-on-Chip Module",
      keySpecs: "32-bit RISC CPU, 802.11 b/g/n WiFi, 1MB flash, 3.3V operation, 8 GPIO pins",
      applications: "IoT devices, home automation, remote sensors, WiFi-enabled projects",
      keyFeatures: "Built-in TCP/IP stack, AT command interface, programmable with Arduino IDE",
      bestFor: "Adding WiFi connectivity to any microcontroller project"
    },
    specifications: {
      "CPU": "32-bit RISC",
      "WiFi": "802.11 b/g/n",
      "Flash Memory": "1MB",
      "Operating Voltage": "3.3V",
      "GPIO Pins": "8"
    },
    compatibility: ["Arduino IDE", "ESP-IDF", "AT Commands", "3.3V systems"],
    projects: ["IoT Sensors", "Home Automation", "WiFi Control", "Remote Monitoring"],
    supplier: "EtechKampala",
    leadTime: "2-3 days",
    tags: ["esp8266", "wifi", "iot", "wireless"]
  },
  {
    id: "ic-nrf24l01",
    name: "nRF24L01+ Wireless Module",
    description: "2.4GHz wireless transceiver for long-range communication",
    category: "modules",
    subcategory: "wireless",
    price: 15800,
    studentPrice: 13430,
    image: "/images/components/nrf24l01.jpg",
    inStock: true,
    stockLevel: 65,
    rating: 4.6,
    reviews: 134,
    overview: {
      type: "2.4GHz Wireless Transceiver",
      keySpecs: "2.4GHz ISM band, 250kbps-2Mbps data rate, 100m range, SPI interface",
      applications: "Wireless sensor networks, remote controls, drone communication, mesh networks",
      keyFeatures: "Low power consumption, multiple communication modes, 125 channels",
      bestFor: "Creating wireless sensor networks and remote control systems"
    },
    specifications: {
      "Frequency": "2.4GHz ISM",
      "Data Rate": "250kbps-2Mbps",
      "Range": "Up to 100m",
      "Interface": "SPI",
      "Channels": "125"
    },
    compatibility: ["Arduino", "ESP32", "STM32", "SPI controllers"],
    projects: ["Wireless Sensors", "Remote Control", "Mesh Networks", "Drone Communication"],
    supplier: "TechHub Kampala",
    leadTime: "3-5 days",
    tags: ["nrf24l01", "wireless", "2.4ghz", "transceiver"]
  },
  {
    id: "ic-rtc-ds3231",
    name: "DS3231 Real-Time Clock Module",
    description: "Precision real-time clock with temperature compensation",
    category: "modules",
    subcategory: "timing",
    price: 22500,
    studentPrice: 19125,
    image: "/images/components/ds3231-rtc.jpg",
    inStock: true,
    stockLevel: 45,
    rating: 4.9,
    reviews: 167,
    overview: {
      type: "Real-Time Clock Module",
      keySpecs: "±2ppm accuracy, I2C interface, integrated crystal, battery backup, alarm functions",
      applications: "Data loggers, scheduled automation, timestamping, clock projects",
      keyFeatures: "Temperature-compensated crystal oscillator, 32kHz output, low power",
      bestFor: "Projects requiring precise timekeeping even when main power is off"
    },
    specifications: {
      "Accuracy": "±2ppm",
      "Interface": "I2C",
      "Battery Backup": "CR2032",
      "Temperature Range": "-40°C to +85°C",
      "Output": "32kHz square wave"
    },
    compatibility: ["Arduino", "ESP32", "I2C systems", "Data loggers"],
    projects: ["Data Logger", "Alarm Clock", "Scheduled Automation", "Timestamping"],
    supplier: "Neriko Electronics",
    leadTime: "In Stock",
    tags: ["rtc", "clock", "timing", "ds3231"]
  }
]

// CATEGORY 3: Transistors & Regulators
const transistorsAndRegulators: ElectronicComponent[] = [
  {
    id: "trans-001",
    name: "BC547 NPN Transistor",
    description: "Classic NPN BJT for low-power switching and amplification",
    category: "semiconductors",
    subcategory: "transistors",
    price: 800,
    studentPrice: 680,
    image: "/images/components/bc547-npn.jpg",
    inStock: true,
    stockLevel: 300,
    rating: 4.8,
    reviews: 167,
    overview: {
      type: "NPN Bipolar Junction Transistor",
      keySpecs: "45V Max VCE, 100mA Max Collector Current, TO-92 package",
      applications: "Switching small loads, signal amplification, educational circuits",
      keyFeatures: "Low-power switching, reliable performance, standard TO-92 package",
      bestFor: "Turning on a relay, driving an LED from a microcontroller pin, or building simple audio amplifiers"
    },
    specifications: {
      "Type": "NPN BJT",
      "Max VCE": "45V",
      "Max Collector Current": "100mA",
      "Package": "TO-92",
      "Gain (hFE)": "110-450"
    },
    compatibility: ["Arduino", "General switching", "Signal amplification"],
    projects: ["LED drivers", "Relay drivers", "Audio amplifiers"],
    supplier: "Neriko Electronics",
    leadTime: "In Stock",
    tags: ["transistor", "npn", "bc547", "switching"]
  },

  {
    id: "trans-002", 
    name: "BC327 PNP Transistor",
    description: "General-purpose PNP transistor complementary to NPN types",
    category: "semiconductors",
    subcategory: "transistors",
    price: 800,
    studentPrice: 680,
    image: "/images/components/bc327-pnp.jpg",
    inStock: true,
    stockLevel: 250,
    rating: 4.7,
    reviews: 134,
    overview: {
      type: "PNP Bipolar Junction Transistor",
      keySpecs: "45V Max VCE, -800mA Max Collector Current, TO-92 package",
      applications: "High-side switching, driver stages in audio amplifiers, creating push-pull circuits",
      keyFeatures: "Complementary to NPN types, excellent for high-side switching applications",
      bestFor: "High-side switching where you connect the load to the positive voltage rail"
    },
    specifications: {
      "Type": "PNP BJT",
      "Max VCE": "45V",
      "Max Collector Current": "-800mA",
      "Package": "TO-92",
      "Gain (hFE)": "100-630"
    },
    compatibility: ["High-side switching", "Audio amplifiers", "Push-pull circuits"],
    projects: ["High-side drivers", "Audio stages", "Complementary pairs"],
    supplier: "TechHub Kampala",
    leadTime: "In Stock",
    tags: ["transistor", "pnp", "bc327", "high-side"]
  },

  {
    id: "trans-003",
    name: "2N2222 NPN Transistor", 
    description: "Robust general-purpose NPN transistor for higher current applications",
    category: "semiconductors",
    subcategory: "transistors",
    price: 1200,
    studentPrice: 1020,
    image: "/images/components/2n2222-npn.jpg",
    inStock: true,
    stockLevel: 200,
    rating: 4.8,
    reviews: 145,
    overview: {
      type: "NPN Bipolar Junction Transistor",
      keySpecs: "40V Max VCE, ~600mA Max Collector Current, TO-18 or TO-92 package",
      applications: "Driving small motors, relays, and medium-power switching applications",
      keyFeatures: "Higher current capability than BC547, more robust construction",
      bestFor: "Switching small DC motors, multiple LEDs, or other slightly larger loads"
    },
    specifications: {
      "Type": "NPN BJT",
      "Max VCE": "40V",
      "Max Collector Current": "600mA",
      "Package": "TO-92",
      "Power Dissipation": "625mW"
    },
    compatibility: ["Motor control", "Relay drivers", "Medium-power switching"],
    projects: ["Small motor drivers", "Relay control", "LED arrays"],
    supplier: "EtechKampala",
    leadTime: "In Stock",
    tags: ["transistor", "npn", "2n2222", "medium-power"]
  },

  {
    id: "trans-004",
    name: "TIP120 NPN Darlington Power Transistor",
    description: "High-current Darlington pair for controlling heavy loads",
    category: "semiconductors",
    subcategory: "transistors",
    price: 3500,
    studentPrice: 2975,
    image: "/images/components/tip120-darlington.jpg",
    inStock: true,
    stockLevel: 100,
    rating: 4.9,
    reviews: 89,
    overview: {
      type: "NPN Darlington Power Transistor",
      keySpecs: "60V Max VCE, 5A Max Collector Current, TO-220 package",
      applications: "High-current DC load control, motor speed control (PWM), power switching",
      keyFeatures: "Very high current gain, allows small microcontroller current to control large loads",
      bestFor: "Controlling DC motors, large LED strips, and solenoids from microcontroller pins"
    },
    specifications: {
      "Type": "NPN Darlington",
      "Max VCE": "60V",
      "Max Collector Current": "5A",
      "Package": "TO-220",
      "Current Gain": "1000+"
    },
    compatibility: ["Arduino", "High-current loads", "Motor control"],
    projects: ["DC motor control", "LED strip drivers", "Solenoid control"],
    supplier: "Jumia Uganda",
    leadTime: "2-3 days",
    tags: ["transistor", "darlington", "tip120", "high-current"]
  },

  {
    id: "mosfet-005",
    name: "IRF540 N-Channel MOSFET",
    description: "High-power N-Channel MOSFET for switching large DC currents",
    category: "semiconductors", 
    subcategory: "mosfets",
    price: 4500,
    studentPrice: 3825,
    image: "/images/components/irf540-mosfet.jpg",
    inStock: true,
    stockLevel: 80,
    rating: 4.7,
    reviews: 112,
    overview: {
      type: "N-Channel Power MOSFET",
      keySpecs: "100V Max VDS, ~33A Max Drain Current, TO-220 package",
      applications: "High-power PWM speed control, solenoid drivers, power inverters",
      keyFeatures: "Voltage-controlled, very high-speed switching, minimal power loss",
      bestFor: "High-speed, high-power switching with very large DC currents and minimal losses"
    },
    specifications: {
      "Type": "N-Channel MOSFET",
      "Max VDS": "100V",
      "Max Drain Current": "33A",
      "Package": "TO-220",
      "RDS(on)": "0.044Ω"
    },
    compatibility: ["High-power PWM", "Inverters", "Motor control"],
    projects: ["High-power PWM", "Solenoid drivers", "Power inverters"],
    supplier: "TechHub Kampala",
    leadTime: "3-5 days",
    tags: ["mosfet", "n-channel", "irf540", "high-power"]
  },

  {
    id: "mosfet-002",
    name: "IRFZ44N N-Channel MOSFET",
    description: "Logic-level N-Channel MOSFET for easy microcontroller interfacing",
    category: "semiconductors",
    subcategory: "mosfets", 
    price: 5000,
    studentPrice: 4250,
    image: "/images/components/irfz44n-mosfet.jpg",
    inStock: true,
    stockLevel: 70,
    rating: 4.9,
    reviews: 145,
    overview: {
      type: "Logic-Level N-Channel MOSFET",
      keySpecs: "55V Max VDS, ~49A Max Drain Current, Logic-level gate",
      applications: "Interfacing high-current loads directly with microcontrollers, robotics, PWM control",
      keyFeatures: "Can be fully turned on by 5V signal, extremely easy to use with microcontrollers",
      bestFor: "High-current switching directly from microcontroller pins without additional driver circuits"
    },
    specifications: {
      "Type": "Logic-Level N-Channel",
      "Max VDS": "55V",
      "Max Drain Current": "49A",
      "Gate Threshold": "2-4V",
      "Package": "TO-220"
    },
    compatibility: ["Arduino direct drive", "ESP32", "High-current PWM"],
    projects: ["Direct motor control", "High-current PWM", "Robotics"],
    supplier: "EtechKampala",
    leadTime: "In Stock", 
    tags: ["mosfet", "logic-level", "irfz44n", "microcontroller"]
  },

  {
    id: "mosfet-003",
    name: "IRF9540 P-Channel MOSFET",
    description: "P-Channel MOSFET for high-side switching applications",
    category: "semiconductors",
    subcategory: "mosfets",
    price: 5500,
    studentPrice: 4675,
    image: "/images/components/irf9540-mosfet.jpg",
    inStock: true,
    stockLevel: 60,
    rating: 4.6,
    reviews: 67,
    overview: {
      type: "P-Channel Power MOSFET",
      keySpecs: "-100V Max VDS, ~-23A Max Drain Current, TO-220 package",
      applications: "High-side load switching, creating H-bridges, battery protection circuits",
      keyFeatures: "Complements N-Channel MOSFETs, essential for full H-bridge motor control",
      bestFor: "High-side switching and creating full H-bridges for motor control when paired with N-Channel MOSFETs"
    },
    specifications: {
      "Type": "P-Channel MOSFET",
      "Max VDS": "-100V",
      "Max Drain Current": "-23A",
      "Package": "TO-220",
      "RDS(on)": "0.117Ω"
    },
    compatibility: ["H-bridge circuits", "High-side switching", "Motor control"],
    projects: ["H-bridge motor drivers", "High-side switches", "Battery protection"],
    supplier: "Jumia Uganda",
    leadTime: "3-5 days",
    tags: ["mosfet", "p-channel", "irf9540", "high-side"]
  },

  {
    id: "mosfet-004",
    name: "2N7000 N-Channel MOSFET",
    description: "Small-signal N-Channel MOSFET for low-power switching",
    category: "semiconductors",
    subcategory: "mosfets",
    price: 1500,
    studentPrice: 1275,
    image: "/images/components/2n7000-mosfet.jpg",
    inStock: true,
    stockLevel: 150,
    rating: 4.5,
    reviews: 78,
    overview: {
      type: "Small-Signal N-Channel MOSFET",
      keySpecs: "60V Max VDS, ~200mA Max Drain Current, TO-92 package",
      applications: "Low-power switching from MCU pins, driving other transistors, signal switching",
      keyFeatures: "Very low gate current, MOSFET equivalent of BC547 transistor",
      bestFor: "Applications needing very low gate current of a MOSFET but not switching large loads"
    },
    specifications: {
      "Type": "N-Channel MOSFET",
      "Max VDS": "60V", 
      "Max Drain Current": "200mA",
      "Package": "TO-92",
      "RDS(on)": "5.3Ω"
    },
    compatibility: ["Low-power switching", "Signal circuits", "Driver stages"],
    projects: ["Low-power switching", "Signal switching", "Driver circuits"],
    supplier: "TechHub Kampala",
    leadTime: "In Stock",
    tags: ["mosfet", "small-signal", "2n7000", "low-power"]
  },

  // VOLTAGE REGULATORS
  {
    id: "reg-001",
    name: "7805 Voltage Regulator",
    description: "Fixed +5V linear voltage regulator for stable power supplies",
    category: "semiconductors",
    subcategory: "voltage-regulators",
    price: 3000,
    studentPrice: 2550,
    image: "/images/components/7805-regulator.jpg",
    inStock: true,
    stockLevel: 200,
    rating: 4.9,
    reviews: 198,
    overview: {
      type: "Linear Voltage Regulator",
      keySpecs: "5V Output, ~1A Max Output Current, TO-220 package",
      applications: "Powering 5V logic, breadboard power supplies, on-board voltage regulation",
      keyFeatures: "Simple and reliable, requires couple of capacitors for stable operation",
      bestFor: "Converting higher input voltage (7V-25V) to constant 5V for microcontrollers and logic ICs"
    },
    specifications: {
      "Output Voltage": "5V",
      "Input Voltage": "7V-35V",
      "Output Current": "1A",
      "Package": "TO-220",
      "Dropout Voltage": "2V"
    },
    compatibility: ["Arduino", "5V logic circuits", "Breadboard supplies"],
    projects: ["Arduino power supplies", "5V regulation", "Breadboard power"],
    supplier: "Neriko Electronics",
    leadTime: "In Stock",
    tags: ["regulator", "7805", "5v", "linear"]
  },

  {
    id: "reg-002",
    name: "7809 Voltage Regulator",
    description: "Fixed +9V voltage regulator for higher voltage applications",
    category: "semiconductors",
    subcategory: "voltage-regulators",
    price: 3200,
    studentPrice: 2720,
    image: "/images/components/7809-regulator.jpg",
    inStock: true,
    stockLevel: 120,
    rating: 4.7,
    reviews: 89,
    overview: {
      type: "Linear Voltage Regulator",
      keySpecs: "9V Output, ~1A Max Output Current, TO-220 package",
      applications: "Powering guitar effects pedals, certain types of motors, projects requiring 9V rail",
      keyFeatures: "Standard voltage for many consumer electronics, reliable linear regulation",
      bestFor: "Powering devices that need higher voltage than 5V logic, like guitar pedals and some motors"
    },
    specifications: {
      "Output Voltage": "9V",
      "Input Voltage": "11V-35V", 
      "Output Current": "1A",
      "Package": "TO-220",
      "Dropout Voltage": "2V"
    },
    compatibility: ["Guitar pedals", "9V motors", "Higher voltage circuits"],
    projects: ["Guitar effects", "9V motor drivers", "Audio circuits"],
    supplier: "TechHub Kampala",
    leadTime: "In Stock",
    tags: ["regulator", "7809", "9v", "audio"]
  },

  {
    id: "reg-003",
    name: "7812 Voltage Regulator",
    description: "Fixed +12V voltage regulator for automotive and industrial applications",
    category: "semiconductors",
    subcategory: "voltage-regulators",
    price: 3500,
    studentPrice: 2975,
    image: "/images/components/7812-regulator.jpg",
    inStock: true,
    stockLevel: 100,
    rating: 4.8,
    reviews: 134,
    overview: {
      type: "Linear Voltage Regulator", 
      keySpecs: "12V Output, ~1A Max Output Current, TO-220 package",
      applications: "Driving 12V motors and LED strips, automotive projects, industrial control circuits",
      keyFeatures: "Common industrial voltage standard, robust regulation for 12V systems",
      bestFor: "Providing stable 12V for motors, LED strips, and automotive/industrial applications"
    },
    specifications: {
      "Output Voltage": "12V",
      "Input Voltage": "14V-35V",
      "Output Current": "1A", 
      "Package": "TO-220",
      "Dropout Voltage": "2V"
    },
    compatibility: ["12V motors", "LED strips", "Automotive circuits"],
    projects: ["12V motor drivers", "LED strip power", "Automotive projects"],
    supplier: "EtechKampala",
    leadTime: "In Stock",
    tags: ["regulator", "7812", "12v", "automotive"]
  },

  {
    id: "reg-004",
    name: "LM317 Adjustable Voltage Regulator",
    description: "Versatile adjustable positive voltage regulator for custom voltages",
    category: "semiconductors",
    subcategory: "voltage-regulators",
    price: 4000,
    studentPrice: 3400,
    image: "/images/components/lm317-regulator.jpg",
    inStock: true,
    stockLevel: 80,
    rating: 4.8,
    reviews: 156,
    overview: {
      type: "Adjustable Linear Voltage Regulator",
      keySpecs: "1.25V to 37V Adjustable Output, ~1.5A Max Output Current",
      applications: "Building custom voltage power supplies, variable voltage circuits",
      keyFeatures: "Output voltage set by simple resistor divider, very versatile and reliable",
      bestFor: "Creating custom power supplies or variable benchtop supplies with any voltage between 1.25V and 37V"
    },
    specifications: {
      "Output Voltage": "1.25V-37V",
      "Input Voltage": "3V-40V",
      "Output Current": "1.5A",
      "Package": "TO-220",
      "Line Regulation": "0.01%"
    },
    compatibility: ["Custom power supplies", "Variable voltage sources", "Benchtop supplies"],
    projects: ["Variable power supplies", "Custom voltage rails", "Adjustable voltage"],
    supplier: "Jumia Uganda",
    leadTime: "2-3 days", 
    tags: ["regulator", "lm317", "adjustable", "variable"]
  }
]

// CATEGORY 4: Integrated Circuits (ICs) - The "brains" and functional blocks
const newIntegratedCircuitsData: ElectronicComponent[] = [
  {
    id: "ic-timer-001",
    name: "NE555P Precision Timer",
    description: "Versatile and stable timer IC for oscillators and timing circuits",
    category: "integrated-circuits",
    subcategory: "timers",
    price: 2500,
    studentPrice: 2125,
    image: "/images/components/ne555-timer.jpg",
    inStock: true,
    stockLevel: 250,
    rating: 4.9,
    reviews: 234,
    overview: {
      type: "Precision Timer IC",
      keySpecs: "8-pin DIP, 4.5V to 15V Supply Voltage, Three operating modes",
      applications: "Creating square waves, time delays, LED flashers, PWM signals",
      keyFeatures: "Highly versatile, can operate as astable, monostable, or bistable",
      bestFor: "Creating square waves, time delays, LED flashers, and pulse width modulation (PWM) signals"
    },
    specifications: {
      "Supply Voltage": "4.5V-15V",
      "Package": "8-pin DIP",
      "Output Current": "200mA",
      "Frequency Range": "0.1Hz-500kHz",
      "Operating Modes": "3"
    },
    compatibility: ["Timing circuits", "Oscillators", "PWM generators"],
    projects: ["LED flashers", "PWM generators", "Timing circuits", "Oscillators"],
    supplier: "Neriko Electronics",
    leadTime: "In Stock",
    tags: ["ic", "timer", "555", "oscillator"]
  },

  {
    id: "ic-motor-001",
    name: "L293D Motor Driver",
    description: "Dual H-bridge motor driver for controlling DC and stepper motors",
    category: "integrated-circuits",
    subcategory: "motor-drivers",
    price: 8500,
    studentPrice: 7225,
    image: "/images/components/l293d-motor-driver.jpg",
    inStock: true,
    stockLevel: 150,
    rating: 4.8,
    reviews: 189,
    overview: {
      type: "Dual H-Bridge Motor Driver IC",
      keySpecs: "Controls 2 DC Motors, 600mA per channel, 4.5V to 36V motor voltage",
      applications: "Small robotics projects, controlling DC motors, driving small stepper motors",
      keyFeatures: "Contains two H-bridges, includes internal protection diodes",
      bestFor: "Controlling speed and direction of two DC motors independently, or one bipolar stepper motor"
    },
    specifications: {
      "Motor Channels": "2",
      "Output Current": "600mA per channel",
      "Motor Voltage": "4.5V-36V",
      "Logic Voltage": "5V",
      "Package": "16-pin DIP"
    },
    compatibility: ["Arduino", "Small DC motors", "Stepper motors"],
    projects: ["Robot cars", "Motor control", "Stepper drivers"],
    supplier: "TechHub Kampala",
    leadTime: "In Stock",
    tags: ["ic", "motor-driver", "l293d", "h-bridge"]
  }
]

// NEW MASSIVE EXPANSION: Electronics & Components (269 Products)
// Category 1: Passive Components (80 Products)

const massivePassiveComponents: ElectronicComponent[] = [
  // RESISTORS - Carbon Film (1/4W, 5%) - Items 1-18
  {
    id: "res-basic-001",
    name: "10Ω Resistor (1/4W, 5%)",
    description: "Low value for current sensing and load applications",
    category: "passive",
    subcategory: "resistors",
    price: 150,
    studentPrice: 128,
    image: "/images/components/resistor-10ohm.jpg",
    inStock: true,
    stockLevel: 500,
    rating: 4.8,
    reviews: 45,
    specifications: {
      "Resistance": "10Ω",
      "Power Rating": "0.25W",
      "Tolerance": "±5%"
    },
    compatibility: ["Current sensing", "Load testing"],
    projects: ["Current measurement", "Load resistors"],
    supplier: "",
    leadTime: "",
    tags: ["resistor", "10ohm", "current"]
  },
  {
    id: "res-basic-002", 
    name: "47Ω Resistor (1/4W, 5%)",
    description: "Common value in filter and impedance matching circuits",
    category: "passive",
    subcategory: "resistors",
    price: 150,
    studentPrice: 128,
    image: "/images/components/resistor-47ohm.jpg",
    inStock: true,
    stockLevel: 400,
    rating: 4.7,
    reviews: 32,
    specifications: {
      "Resistance": "47Ω",
      "Power Rating": "0.25W",
      "Tolerance": "±5%"
    },
    compatibility: ["Filter circuits", "Impedance matching"],
    projects: ["Audio filters", "Signal conditioning"],
    supplier: "",
    leadTime: "",
    tags: ["resistor", "47ohm", "filter"]
  },
  {
    id: "res-basic-003",
    name: "100Ω Resistor (1/4W, 5%)",
    description: "Standard value for various digital and analog circuits",
    category: "passive",
    subcategory: "resistors",
    price: 150,
    studentPrice: 128,
    image: "/images/components/resistor-100ohm.jpg",
    inStock: true,
    stockLevel: 600,
    rating: 4.8,
    reviews: 67,
    specifications: {
      "Resistance": "100Ω",
      "Power Rating": "0.25W",
      "Tolerance": "±5%"
    },
    compatibility: ["Digital circuits", "Analog circuits"],
    projects: ["LED current limiting", "Voltage dividers"],
    supplier: "",
    leadTime: "",
    tags: ["resistor", "100ohm", "standard"]
  },
  {
    id: "res-basic-004",
    name: "220Ω Resistor (1/4W, 5%)",
    description: "Classic current-limiting resistor for standard LEDs",
    category: "passive",
    subcategory: "resistors",
    price: 150,
    studentPrice: 128,
    image: "/images/components/resistor-220ohm.jpg",
    inStock: true,
    stockLevel: 800,
    rating: 4.9,
    reviews: 123,
    specifications: {
      "Resistance": "220Ω",
      "Power Rating": "0.25W",
      "Tolerance": "±5%"
    },
    compatibility: ["LED circuits", "5V logic"],
    projects: ["LED indicators", "Status lights"],
    supplier: "",
    leadTime: "",
    tags: ["resistor", "220ohm", "led"]
  },
  {
    id: "res-basic-005",
    name: "330Ω Resistor (1/4W, 5%)",
    description: "Conservative current-limiting resistor for LED longevity",
    category: "passive",
    subcategory: "resistors",
    price: 150,
    studentPrice: 128,
    image: "/images/components/resistor-330ohm.jpg",
    inStock: true,
    stockLevel: 700,
    rating: 4.8,
    reviews: 89,
    specifications: {
      "Resistance": "330Ω",
      "Power Rating": "0.25W",
      "Tolerance": "±5%"
    },
    compatibility: ["LED circuits", "Low power"],
    projects: ["LED indicators", "Battery projects"],
    supplier: "",
    leadTime: "",
    tags: ["resistor", "330ohm", "led"]
  },
  {
    id: "res-basic-006",
    name: "470Ω Resistor (1/4W, 5%)",
    description: "Often used with Zener diodes and in transistor biasing",
    category: "passive",
    subcategory: "resistors",
    price: 150,
    studentPrice: 128,
    image: "/images/components/resistor-470ohm.jpg",
    inStock: true,
    stockLevel: 350,
    rating: 4.7,
    reviews: 45,
    specifications: {
      "Resistance": "470Ω",
      "Power Rating": "0.25W",
      "Tolerance": "±5%"
    },
    compatibility: ["Zener circuits", "Transistor biasing"],
    projects: ["Voltage regulation", "Transistor circuits"],
    supplier: "",
    leadTime: "",
    tags: ["resistor", "470ohm", "zener"]
  },
  {
    id: "res-basic-007",
    name: "680Ω Resistor (1/4W, 5%)",
    description: "Common value in pull-up networks and filters",
    category: "passive",
    subcategory: "resistors",
    price: 150,
    studentPrice: 128,
    image: "/images/components/resistor-680ohm.jpg",
    inStock: true,
    stockLevel: 300,
    rating: 4.6,
    reviews: 34,
    specifications: {
      "Resistance": "680Ω",
      "Power Rating": "0.25W",
      "Tolerance": "±5%"
    },
    compatibility: ["Pull-up circuits", "Filters"],
    projects: ["Pull-up networks", "Active filters"],
    supplier: "",
    leadTime: "",
    tags: ["resistor", "680ohm", "pullup"]
  },
  {
    id: "res-basic-008",
    name: "1kΩ Resistor (1/4W, 5%)",
    description: "A fundamental resistor value, perfect for pull-up applications",
    category: "passive",
    subcategory: "resistors",
    price: 150,
    studentPrice: 128,
    image: "/images/components/resistor-1kohm.jpg",
    inStock: true,
    stockLevel: 1000,
    rating: 4.9,
    reviews: 234,
    specifications: {
      "Resistance": "1kΩ",
      "Power Rating": "0.25W",
      "Tolerance": "±5%"
    },
    compatibility: ["Digital circuits", "Pull-up resistors"],
    projects: ["Button interfaces", "Digital I/O"],
    supplier: "",
    leadTime: "",
    tags: ["resistor", "1k", "pullup"]
  },
  {
    id: "res-basic-009",
    name: "2.2kΩ Resistor (1/4W, 5%)",
    description: "Used in timing circuits and interfacing with sensors",
    category: "passive",
    subcategory: "resistors",
    price: 150,
    studentPrice: 128,
    image: "/images/components/resistor-2k2.jpg",
    inStock: true,
    stockLevel: 400,
    rating: 4.7,
    reviews: 56,
    specifications: {
      "Resistance": "2.2kΩ",
      "Power Rating": "0.25W",
      "Tolerance": "±5%"
    },
    compatibility: ["Timing circuits", "Sensor interfaces"],
    projects: ["RC timing", "Sensor circuits"],
    supplier: "",
    leadTime: "",
    tags: ["resistor", "2k2", "timing"]
  },
  {
    id: "res-basic-010",
    name: "4.7kΩ Resistor (1/4W, 5%)",
    description: "Mid-range resistor for timing circuits and I2C pull-ups",
    category: "passive",
    subcategory: "resistors",
    price: 150,
    studentPrice: 128,
    image: "/images/components/resistor-4k7.jpg",
    inStock: true,
    stockLevel: 500,
    rating: 4.8,
    reviews: 78,
    specifications: {
      "Resistance": "4.7kΩ",
      "Power Rating": "0.25W",
      "Tolerance": "±5%"
    },
    compatibility: ["I2C circuits", "Timing circuits"],
    projects: ["I2C communication", "RC timing"],
    supplier: "",
    leadTime: "",
    tags: ["resistor", "4k7", "i2c"]
  },
  {
    id: "res-basic-011",
    name: "10kΩ Resistor (1/4W, 5%)",
    description: "The most common value for pull-up resistors in digital circuits",
    category: "passive",
    subcategory: "resistors",
    price: 150,
    studentPrice: 128,
    image: "/images/components/resistor-10kohm.jpg",
    inStock: true,
    stockLevel: 1200,
    rating: 4.9,
    reviews: 345,
    specifications: {
      "Resistance": "10kΩ",
      "Power Rating": "0.25W",
      "Tolerance": "±5%"
    },
    compatibility: ["Digital circuits", "Arduino", "ESP32"],
    projects: ["Button circuits", "Digital I/O"],
    supplier: "",
    leadTime: "",
    tags: ["resistor", "10k", "pullup"]
  },
  {
    id: "res-basic-012",
    name: "22kΩ Resistor (1/4W, 5%)",
    description: "Common value in op-amp feedback loops and voltage dividers",
    category: "passive",
    subcategory: "resistors",
    price: 150,
    studentPrice: 128,
    image: "/images/components/resistor-22kohm.jpg",
    inStock: true,
    stockLevel: 300,
    rating: 4.7,
    reviews: 43,
    specifications: {
      "Resistance": "22kΩ",
      "Power Rating": "0.25W",
      "Tolerance": "±5%"
    },
    compatibility: ["Op-amp circuits", "Voltage dividers"],
    projects: ["Op-amp circuits", "Voltage references"],
    supplier: "",
    leadTime: "",
    tags: ["resistor", "22k", "opamp"]
  },
  {
    id: "res-basic-013",
    name: "47kΩ Resistor (1/4W, 5%)",
    description: "Used in audio circuits and timing applications",
    category: "passive",
    subcategory: "resistors",
    price: 150,
    studentPrice: 128,
    image: "/images/components/resistor-47kohm.jpg",
    inStock: true,
    stockLevel: 250,
    rating: 4.6,
    reviews: 37,
    specifications: {
      "Resistance": "47kΩ",
      "Power Rating": "0.25W",
      "Tolerance": "±5%"
    },
    compatibility: ["Audio circuits", "High impedance circuits"],
    projects: ["Audio amplifiers", "High-Z inputs"],
    supplier: "",
    leadTime: "",
    tags: ["resistor", "47k", "audio"]
  },
  {
    id: "res-basic-014",
    name: "100kΩ Resistor (1/4W, 5%)",
    description: "High resistance for low-power and high-impedance applications",
    category: "passive",
    subcategory: "resistors",
    price: 150,
    studentPrice: 128,
    image: "/images/components/resistor-100kohm.jpg",
    inStock: true,
    stockLevel: 400,
    rating: 4.8,
    reviews: 67,
    specifications: {
      "Resistance": "100kΩ",
      "Power Rating": "0.25W",
      "Tolerance": "±5%"
    },
    compatibility: ["High impedance circuits", "Low power"],
    projects: ["High-Z amplifiers", "Low power circuits"],
    supplier: "",
    leadTime: "",
    tags: ["resistor", "100k", "high-impedance"]
  },
  {
    id: "res-basic-015",
    name: "220kΩ Resistor (1/4W, 5%)",
    description: "High resistance value for biasing and low-power circuits",
    category: "passive",
    subcategory: "resistors",
    price: 150,
    studentPrice: 128,
    image: "/images/components/resistor-220kohm.jpg",
    inStock: true,
    stockLevel: 200,
    rating: 4.7,
    reviews: 28,
    specifications: {
      "Resistance": "220kΩ",
      "Power Rating": "0.25W",
      "Tolerance": "±5%"
    },
    compatibility: ["Bias circuits", "Low power"],
    projects: ["Bias networks", "Low power amplifiers"],
    supplier: "",
    leadTime: "",
    tags: ["resistor", "220k", "bias"]
  },
  {
    id: "res-basic-016",
    name: "470kΩ Resistor (1/4W, 5%)",
    description: "Very high resistance used in sensitive amplifier circuits",
    category: "passive",
    subcategory: "resistors",
    price: 150,
    studentPrice: 128,
    image: "/images/components/resistor-470kohm.jpg",
    inStock: true,
    stockLevel: 150,
    rating: 4.6,
    reviews: 19,
    specifications: {
      "Resistance": "470kΩ",
      "Power Rating": "0.25W",
      "Tolerance": "±5%",
      "Package": "Axial Lead"
    },
    compatibility: ["Sensitive amplifiers", "Very high impedance", "Low noise"],
    projects: ["Sensitive amplifiers", "Low noise circuits", "High-Z inputs"],
    supplier: "",
    leadTime: "",
    tags: ["resistor", "470k", "sensitive", "high-impedance"]
  },
  {
    id: "res-basic-017",
    name: "1MΩ Resistor (1/4W, 5%)",
    description: "Very high resistance for specialized timing and amplifier circuits",
    category: "passive",
    subcategory: "resistors",
    price: 150,
    studentPrice: 128,
    image: "/images/components/resistor-1mohm.jpg",
    inStock: true,
    stockLevel: 100,
    rating: 4.5,
    reviews: 15,
    specifications: {
      "Resistance": "1MΩ",
      "Power Rating": "0.25W",
      "Tolerance": "±5%",
      "Package": "Axial Lead"
    },
    compatibility: ["Ultra high impedance", "Timing circuits", "Sensitive inputs"],
    projects: ["Ultra high-Z inputs", "Long timing circuits", "Sensitive amplifiers"],
    supplier: "",
    leadTime: "",
    tags: ["resistor", "1meg", "ultra-high-impedance", "timing"]
  },
  {
    id: "res-kit-001",
    name: "Resistor Kit (600 pcs)",
    description: "A curated assortment of the most common resistor values",
    category: "passive",
    subcategory: "resistors",
    price: 25000,
    studentPrice: 21250,
    image: "/images/components/resistor-kit-600.jpg",
    inStock: true,
    stockLevel: 50,
    rating: 4.9,
    reviews: 78,
    overview: {
      type: "Resistor Assortment Kit",
      keySpecs: "600 pieces, 30 values, 20 pieces each, organized storage box",
      applications: "Complete range for prototyping, education, and general electronics work",
      keyFeatures: "All standard values from 10Ω to 1MΩ, clearly labeled, organized storage",
      bestFor: "Students, hobbyists, and engineers who need a comprehensive resistor collection"
    },
    specifications: {
      "Quantity": "600 pieces",
      "Values": "30 different values",
      "Range": "10Ω to 1MΩ",
      "Power Rating": "0.25W",
      "Tolerance": "±5%",
      "Storage": "Organized plastic box"
    },
    compatibility: ["All electronics projects", "Educational use", "Prototyping"],
    projects: ["Arduino projects", "Electronic circuits", "Educational kits"],
    supplier: "",
    leadTime: "",
    tags: ["resistor", "kit", "assortment", "educational"]
  },

  // POTENTIOMETERS & TRIMMERS - Items 19-26
  {
    id: "pot-linear-001",
    name: "1kΩ Linear Potentiometer",
    description: "Adjustable control for lower resistance applications",
    category: "passive",
    subcategory: "resistors",
    price: 2500,
    studentPrice: 2125,
    image: "/images/components/pot-1k.jpg",
    inStock: true,
    stockLevel: 80,
    rating: 4.7,
    reviews: 45,
    specifications: {
      "Resistance": "1kΩ",
      "Type": "Linear taper",
      "Power Rating": "0.5W",
      "Shaft": "6mm round",
      "Mounting": "PCB or panel mount"
    },
    compatibility: ["Audio circuits", "Control circuits", "Variable resistors"],
    projects: ["Volume controls", "Speed controls", "Variable references"],
    supplier: "",
    leadTime: "",
    tags: ["potentiometer", "1k", "linear", "control"]
  },
  {
    id: "pot-linear-002",
    name: "10kΩ Linear Potentiometer",
    description: "Three-terminal adjustable voltage divider for analog control",
    category: "passive",
    subcategory: "resistors",
    price: 2500,
    studentPrice: 2125,
    image: "/images/components/pot-10k.jpg",
    inStock: true,
    stockLevel: 100,
    rating: 4.8,
    reviews: 67,
    specifications: {
      "Resistance": "10kΩ",
      "Type": "Linear taper",
      "Power Rating": "0.5W",
      "Shaft": "6mm round",
      "Mounting": "PCB or panel mount"
    },
    compatibility: ["Analog controls", "Voltage dividers", "Variable inputs"],
    projects: ["Analog input controls", "Variable voltage sources", "Sensor calibration"],
    supplier: "",
    leadTime: "",
    tags: ["potentiometer", "10k", "linear", "analog"]
  },
  {
    id: "pot-linear-003",
    name: "100kΩ Linear Potentiometer",
    description: "Adjustable control for high-impedance circuits",
    category: "passive",
    subcategory: "resistors",
    price: 2500,
    studentPrice: 2125,
    image: "/images/components/pot-100k.jpg",
    inStock: true,
    stockLevel: 60,
    rating: 4.6,
    reviews: 34,
    specifications: {
      "Resistance": "100kΩ",
      "Type": "Linear taper",
      "Power Rating": "0.5W",
      "Shaft": "6mm round",
      "Mounting": "PCB or panel mount"
    },
    compatibility: ["High impedance circuits", "Audio applications", "Variable bias"],
    projects: ["Audio controls", "High-Z circuits", "Variable bias networks"],
    supplier: "",
    leadTime: "",
    tags: ["potentiometer", "100k", "linear", "high-impedance"]
  },
  {
    id: "trim-004",
    name: "1kΩ Trimmer Potentiometer",
    description: "Miniature adjustable resistor for fine-tuning circuits",
    category: "passive",
    subcategory: "resistors",
    price: 1500,
    studentPrice: 1275,
    image: "/images/components/trim-1k.jpg",
    inStock: true,
    stockLevel: 120,
    rating: 4.7,
    reviews: 42,
    specifications: {
      "Resistance": "1kΩ",
      "Type": "Single-turn",
      "Power Rating": "0.1W",
      "Adjustment": "Screwdriver",
      "Size": "3296 style"
    },
    compatibility: ["PCB circuits", "Calibration", "Fine adjustment"],
    projects: ["Circuit calibration", "Bias adjustment", "Fine tuning"],
    supplier: "",
    leadTime: "",
    tags: ["trimmer", "1k", "calibration", "pcb"]
  },
  {
    id: "trim-005",
    name: "10kΩ Trimmer Potentiometer",
    description: "Miniature adjustable resistor for circuit calibration",
    category: "passive",
    subcategory: "resistors",
    price: 1500,
    studentPrice: 1275,
    image: "/images/components/trim-10k.jpg",
    inStock: true,
    stockLevel: 150,
    rating: 4.8,
    reviews: 56,
    specifications: {
      "Resistance": "10kΩ",
      "Type": "Single-turn",
      "Power Rating": "0.1W",
      "Adjustment": "Screwdriver",
      "Size": "3296 style"
    },
    compatibility: ["PCB circuits", "Calibration", "Precision adjustment"],
    projects: ["Sensor calibration", "Offset adjustment", "Precision circuits"],
    supplier: "",
    leadTime: "",
    tags: ["trimmer", "10k", "calibration", "precision"]
  },
  {
    id: "trim-003",
    name: "100kΩ Trimmer Potentiometer",
    description: "High-resistance trimpot for sensitive circuits",
    category: "passive",
    subcategory: "resistors",
    price: 1500,
    studentPrice: 1275,
    image: "/images/components/trim-100k.jpg",
    inStock: true,
    stockLevel: 80,
    rating: 4.6,
    reviews: 23,
    specifications: {
      "Resistance": "100kΩ",
      "Type": "Single-turn",
      "Power Rating": "0.1W",
      "Adjustment": "Screwdriver",
      "Size": "3296 style"
    },
    compatibility: ["High impedance circuits", "Sensitive circuits", "Audio applications"],
    projects: ["Audio circuits", "High-Z calibration", "Sensitive adjustments"],
    supplier: "",
    leadTime: "",
    tags: ["trimmer", "100k", "high-impedance", "sensitive"]
  },

  // SPECIALTY RESISTORS - Items 25-26
  {
    id: "ldr-003",
    name: "Photoresistor (LDR)",
    description: "Light-dependent resistor for ambient light sensing",
    category: "passive",
    subcategory: "resistors",
    price: 1200,
    studentPrice: 1020,
    image: "/images/components/ldr-5mm.jpg",
    inStock: true,
    stockLevel: 200,
    rating: 4.7,
    reviews: 89,
    specifications: {
      "Dark Resistance": "1MΩ (typical)",
      "Light Resistance": "5-10kΩ",
      "Response Time": "<30ms",
      "Peak Wavelength": "540nm",
      "Size": "5mm diameter"
    },
    compatibility: ["Light sensors", "Arduino", "Automatic lighting"],
    projects: ["Light sensors", "Automatic lighting", "Day/night detection"],
    supplier: "",
    leadTime: "",
    tags: ["ldr", "photoresistor", "light", "sensor"]
  },
  {
    id: "thermistor-001",
    name: "Thermistor NTC 10kΩ",
    description: "Temperature-sensitive resistor for thermal sensing",
    category: "passive",
    subcategory: "resistors",
    price: 1800,
    studentPrice: 1530,
    image: "/images/components/thermistor-10k.jpg",
    inStock: true,
    stockLevel: 150,
    rating: 4.8,
    reviews: 67,
    specifications: {
      "Resistance @ 25°C": "10kΩ",
      "Type": "NTC (Negative Temperature Coefficient)",
      "Beta Value": "3950K",
      "Temperature Range": "-40°C to +125°C",
      "Accuracy": "±1%"
    },
    compatibility: ["Temperature sensing", "Arduino", "Thermal control"],
    projects: ["Temperature sensors", "Thermal protection", "HVAC control"],
    supplier: "",
    leadTime: "",
    tags: ["thermistor", "ntc", "temperature", "sensor"]
  }
]

// ADDITIONAL CATEGORIES TO REACH 269 ELECTRONICS PRODUCTS

// More Advanced ICs & Microcontrollers
const advancedICs: ElectronicComponent[] = [
  {
    id: "ic-shift-595",
    name: "74HC595 8-bit Shift Register",
    description: "Serial-to-parallel shift register for expanding digital outputs",
    category: "integrated-circuits",
    subcategory: "shift-registers",
    price: 3500,
    studentPrice: 2975,
    image: "/images/components/74hc595.jpg",
    inStock: true,
    stockLevel: 80,
    rating: 4.8,
    reviews: 134,
    overview: {
      type: "8-bit Serial-to-Parallel Shift Register",
      keySpecs: "8 outputs, 3-wire control, cascadable, LED driver current",
      applications: "LED displays, digital output expansion, seven-segment displays",
      keyFeatures: "Cascadable design, 3-wire serial interface, output enable",
      bestFor: "Expanding digital outputs from microcontrollers"
    },
    specifications: {
      "Outputs": "8 parallel",
      "Interface": "Serial (3-wire)",
      "Package": "16-pin DIP",
      "Operating Voltage": "2V-6V",
      "Output Current": "35mA per output"
    },
    compatibility: ["Arduino", "ESP32", "LED displays", "Seven-segment"],
    projects: ["LED matrices", "Seven-segment displays", "Digital output expansion"],
    supplier: "",
    leadTime: "",
    tags: ["shift-register", "74hc595", "led-driver", "output-expansion"]
  },

  {
    id: "ic-shift-165",
    name: "74HC165 8-bit Shift Register",
    description: "Parallel-to-serial shift register for expanding digital inputs",
    category: "integrated-circuits",
    subcategory: "shift-registers",
    price: 3500,
    studentPrice: 2975,
    image: "/images/components/74hc165.jpg",
    inStock: true,
    stockLevel: 60,
    rating: 4.7,
    reviews: 87,
    specifications: {
      "Inputs": "8 parallel",
      "Interface": "Serial (3-wire)",
      "Package": "16-pin DIP",
      "Operating Voltage": "2V-6V",
      "Input Current": "1μA"
    },
    compatibility: ["Arduino", "ESP32", "Button matrices", "Switch arrays"],
    projects: ["Button matrices", "Switch arrays", "Digital input expansion"],
    supplier: "",
    leadTime: "",
    tags: ["shift-register", "74hc165", "input-expansion", "parallel-to-serial"]
  },

  {
    id: "ic-memory-24c32",
    name: "24C32 EEPROM Memory",
    description: "32Kbit I2C EEPROM for non-volatile data storage",
    category: "integrated-circuits",
    subcategory: "memory",
    price: 4500,
    studentPrice: 3825,
    image: "/images/components/24c32-eeprom.jpg",
    inStock: true,
    stockLevel: 40,
    rating: 4.6,
    reviews: 52,
    specifications: {
      "Capacity": "32Kbit (4KB)",
      "Interface": "I2C",
      "Package": "8-pin DIP",
      "Operating Voltage": "1.8V-5.5V",
      "Write Cycles": "1 million"
    },
    compatibility: ["Arduino", "ESP32", "Data logging", "Configuration storage"],
    projects: ["Data logging", "Settings storage", "Calibration data"],
    supplier: "",
    leadTime: "",
    tags: ["eeprom", "memory", "i2c", "non-volatile"]
  },

  {
    id: "ic-adc-mcp3008",
    name: "MCP3008 8-Channel ADC",
    description: "8-channel 10-bit ADC with SPI interface",
    category: "integrated-circuits",
    subcategory: "data-conversion",
    price: 8500,
    studentPrice: 7225,
    image: "/images/components/mcp3008.jpg",
    inStock: true,
    stockLevel: 35,
    rating: 4.9,
    reviews: 76,
    specifications: {
      "Channels": "8 single-ended",
      "Resolution": "10-bit",
      "Interface": "SPI",
      "Sample Rate": "200ksps",
      "Operating Voltage": "2.7V-5.5V"
    },
    compatibility: ["Arduino", "Raspberry Pi", "Analog sensors"],
    projects: ["Multi-sensor monitoring", "Data acquisition", "Analog multiplexing"],
    supplier: "",
    leadTime: "",
    tags: ["adc", "analog", "spi", "multi-channel"]
  },

  {
    id: "ic-counter-4017",
    name: "CD4017 Decade Counter",
    description: "10-stage decade counter with decoded outputs",
    category: "integrated-circuits",
    subcategory: "counters",
    price: 3000,
    studentPrice: 2550,
    image: "/images/components/cd4017.jpg",
    inStock: true,
    stockLevel: 70,
    rating: 4.7,
    reviews: 98,
    specifications: {
      "Outputs": "10 decoded",
      "Count Range": "0-9",
      "Package": "16-pin DIP",
      "Operating Voltage": "3V-15V",
      "Clock Frequency": "5MHz max"
    },
    compatibility: ["LED chasers", "Sequential circuits", "Timing circuits"],
    projects: ["LED chasers", "Sequential lighting", "Digital counters"],
    supplier: "",
    leadTime: "",
    tags: ["counter", "cd4017", "decade", "sequential"]
  },

  {
    id: "ic-dac-mcp4725",
    name: "MCP4725 12-bit DAC",
    description: "12-bit digital-to-analog converter with I2C interface",
    category: "integrated-circuits",
    subcategory: "data-conversion",
    price: 9500,
    studentPrice: 8075,
    image: "/images/components/mcp4725.jpg",
    inStock: true,
    stockLevel: 25,
    rating: 4.8,
    reviews: 43,
    specifications: {
      "Resolution": "12-bit",
      "Interface": "I2C",
      "Output Range": "0V to VDD",
      "Settling Time": "6μs",
      "Operating Voltage": "2.7V-5.5V"
    },
    compatibility: ["Arduino", "ESP32", "Analog outputs", "Waveform generation"],
    projects: ["Analog signal generation", "Audio synthesis", "Control voltage"],
    supplier: "",
    leadTime: "",
    tags: ["dac", "analog-output", "i2c", "12-bit"]
  },

  {
    id: "ic-pwm-pca9685",
    name: "PCA9685 16-Channel PWM Driver",
    description: "16-channel 12-bit PWM/servo driver with I2C interface",
    category: "integrated-circuits",
    subcategory: "pwm-drivers",
    price: 12000,
    studentPrice: 10200,
    image: "/images/components/pca9685.jpg",
    inStock: true,
    stockLevel: 30,
    rating: 4.9,
    reviews: 87,
    specifications: {
      "Channels": "16",
      "Resolution": "12-bit",
      "Interface": "I2C",
      "Frequency Range": "40Hz-1kHz",
      "Output Current": "25mA per channel"
    },
    compatibility: ["Servo motors", "LED drivers", "Arduino", "Raspberry Pi"],
    projects: ["Servo control", "LED strips", "Motor control", "Robotics"],
    supplier: "",
    leadTime: "",
    tags: ["pwm", "servo-driver", "i2c", "16-channel"]
  },

  {
    id: "ic-can-mcp2515",
    name: "MCP2515 CAN Controller",
    description: "CAN bus controller with SPI interface for automotive communication",
    category: "integrated-circuits",
    subcategory: "communication",
    price: 15000,
    studentPrice: 12750,
    image: "/images/components/mcp2515.jpg",
    inStock: true,
    stockLevel: 20,
    rating: 4.7,
    reviews: 34,
    specifications: {
      "Protocol": "CAN 2.0B",
      "Interface": "SPI",
      "Baud Rate": "Up to 1Mbps",
      "Package": "18-pin DIP",
      "Operating Voltage": "4.5V-5.5V"
    },
    compatibility: ["Automotive systems", "Industrial control", "Arduino CAN shields"],
    projects: ["Automotive diagnostics", "Industrial networks", "CAN bus communication"],
    supplier: "",
    leadTime: "",
    tags: ["can-bus", "automotive", "spi", "communication"]
  }
]

// More Capacitors
const advancedCapacitors: ElectronicComponent[] = [
  {
    id: "cap-film-001",
    name: "100nF Film Capacitor",
    description: "High-quality polyester film capacitor for coupling and filtering",
    category: "passive",
    subcategory: "capacitors",
    price: 800,
    studentPrice: 680,
    image: "/images/components/film-cap-100nf.jpg",
    inStock: true,
    stockLevel: 200,
    rating: 4.8,
    reviews: 67,
    specifications: {
      "Capacitance": "100nF (0.1μF)",
      "Voltage Rating": "630V",
      "Tolerance": "±5%",
      "Type": "Polyester film",
      "Temperature Coefficient": "±5%"
    },
    compatibility: ["AC circuits", "Audio circuits", "Power supplies"],
    projects: ["Audio coupling", "Power supply filtering", "EMI suppression"],
    supplier: "",
    leadTime: "",
    tags: ["capacitor", "film", "100nf", "coupling"]
  },

  {
    id: "cap-film-002",
    name: "220nF Film Capacitor",
    description: "Medium-value film capacitor for timing and filtering",
    category: "passive",
    subcategory: "capacitors",
    price: 1000,
    studentPrice: 850,
    image: "/images/components/film-cap-220nf.jpg",
    inStock: true,
    stockLevel: 150,
    rating: 4.7,
    reviews: 43,
    specifications: {
      "Capacitance": "220nF (0.22μF)",
      "Voltage Rating": "630V",
      "Tolerance": "±5%",
      "Type": "Polyester film",
      "Temperature Coefficient": "±5%"
    },
    compatibility: ["Timing circuits", "Filters", "Audio circuits"],
    projects: ["RC timing", "Audio filters", "Power conditioning"],
    supplier: "",
    leadTime: "",
    tags: ["capacitor", "film", "220nf", "timing"]
  },

  {
    id: "cap-film-003",
    name: "470nF Film Capacitor",
    description: "Larger film capacitor for power filtering and coupling",
    category: "passive",
    subcategory: "capacitors",
    price: 1200,
    studentPrice: 1020,
    image: "/images/components/film-cap-470nf.jpg",
    inStock: true,
    stockLevel: 120,
    rating: 4.6,
    reviews: 34,
    specifications: {
      "Capacitance": "470nF (0.47μF)",
      "Voltage Rating": "630V",
      "Tolerance": "±5%",
      "Type": "Polyester film",
      "Temperature Coefficient": "±5%"
    },
    compatibility: ["Power filters", "Audio circuits", "Motor drives"],
    projects: ["Power supply filtering", "Motor drives", "Audio crossovers"],
    supplier: "",
    leadTime: "",
    tags: ["capacitor", "film", "470nf", "power"]
  },

  {
    id: "cap-super-001",
    name: "1F Super Capacitor",
    description: "High-capacity supercapacitor for energy storage and backup power",
    category: "passive",
    subcategory: "capacitors",
    price: 15000,
    studentPrice: 12750,
    image: "/images/components/supercap-1f.jpg",
    inStock: true,
    stockLevel: 25,
    rating: 4.8,
    reviews: 45,
    specifications: {
      "Capacitance": "1F",
      "Voltage Rating": "5.5V",
      "ESR": "<100mΩ",
      "Temperature Range": "-25°C to 70°C",
      "Life": "1000 hours @ 70°C"
    },
    compatibility: ["Backup power", "Energy storage", "Power buffering"],
    projects: ["Backup power", "Energy harvesting", "Power buffering"],
    supplier: "",
    leadTime: "",
    tags: ["supercapacitor", "energy-storage", "backup", "1farad"]
  },

  {
    id: "cap-tantalum-001",
    name: "10μF Tantalum Capacitor",
    description: "High-quality tantalum capacitor for low-noise power supplies",
    category: "passive",
    subcategory: "capacitors",
    price: 3500,
    studentPrice: 2975,
    image: "/images/components/tantalum-10uf.jpg",
    inStock: true,
    stockLevel: 60,
    rating: 4.7,
    reviews: 45,
    specifications: {
      "Capacitance": "10μF",
      "Voltage Rating": "35V",
      "Tolerance": "±10%",
      "Type": "Tantalum",
      "ESR": "<3Ω"
    },
    compatibility: ["Low-noise supplies", "Audio circuits", "High-frequency filtering"],
    projects: ["Audio power supplies", "Low-noise circuits", "High-frequency filters"],
    supplier: "",
    leadTime: "",
    tags: ["capacitor", "tantalum", "10uf", "low-noise"]
  }
]

// More Diodes & Protection Components
const advancedDiodes: ElectronicComponent[] = [
  {
    id: "diode-schottky-001",
    name: "1N5819 Schottky Diode",
    description: "Low forward voltage drop Schottky diode for efficient rectification",
    category: "semiconductors",
    subcategory: "diodes",
    price: 1500,
    studentPrice: 1275,
    image: "/images/components/1n5819.jpg",
    inStock: true,
    stockLevel: 150,
    rating: 4.8,
    reviews: 89,
    specifications: {
      "Forward Voltage": "0.45V @ 1A",
      "Reverse Voltage": "40V",
      "Forward Current": "1A",
      "Package": "DO-41",
      "Recovery Time": "Fast"
    },
    compatibility: ["Switching supplies", "Flyback protection", "Low voltage rectification"],
    projects: ["SMPS design", "Battery protection", "Flyback diodes"],
    supplier: "",
    leadTime: "",
    tags: ["diode", "schottky", "low-drop", "efficient"]
  },

  {
    id: "diode-zener-5v1",
    name: "5.1V Zener Diode",
    description: "Precision voltage reference and regulation diode",
    category: "semiconductors",
    subcategory: "diodes",
    price: 800,
    studentPrice: 680,
    image: "/images/components/zener-5v1.jpg",
    inStock: true,
    stockLevel: 200,
    rating: 4.7,
    reviews: 67,
    specifications: {
      "Zener Voltage": "5.1V ±5%",
      "Power Rating": "0.5W",
      "Tolerance": "±5%",
      "Package": "DO-35",
      "Temperature Coefficient": "+2mV/°C"
    },
    compatibility: ["Voltage regulation", "Reference circuits", "Protection"],
    projects: ["Voltage references", "Simple regulators", "Protection circuits"],
    supplier: "",
    leadTime: "",
    tags: ["zener", "voltage-reference", "5v1", "regulation"]
  },

  {
    id: "diode-tvs-001",
    name: "TVS Diode 15V",
    description: "Transient voltage suppressor for ESD and overvoltage protection",
    category: "semiconductors",
    subcategory: "diodes",
    price: 2500,
    studentPrice: 2125,
    image: "/images/components/tvs-15v.jpg",
    inStock: true,
    stockLevel: 80,
    rating: 4.9,
    reviews: 34,
    specifications: {
      "Standoff Voltage": "15V",
      "Breakdown Voltage": "16.7V",
      "Clamping Voltage": "24.4V",
      "Peak Power": "600W",
      "Response Time": "<1ps"
    },
    compatibility: ["ESD protection", "Input protection", "Power line protection"],
    projects: ["Input protection", "ESD protection", "Power line conditioning"],
    supplier: "",
    leadTime: "",
    tags: ["tvs", "protection", "esd", "transient"]
  },

  {
    id: "diode-bridge-001",
    name: "Bridge Rectifier 1A",
    description: "Full-wave bridge rectifier for AC to DC conversion",
    category: "semiconductors",
    subcategory: "diodes",
    price: 2800,
    studentPrice: 2380,
    image: "/images/components/bridge-rectifier.jpg",
    inStock: true,
    stockLevel: 40,
    rating: 4.6,
    reviews: 56,
    specifications: {
      "Forward Current": "1A",
      "Peak Reverse Voltage": "400V",
      "Forward Voltage": "1.1V",
      "Package": "DIP-4",
      "Configuration": "Full bridge"
    },
    compatibility: ["AC-DC conversion", "Power supplies", "Rectification"],
    projects: ["Linear power supplies", "AC-DC conversion", "Rectifier circuits"],
    supplier: "",
    leadTime: "",
    tags: ["bridge-rectifier", "ac-dc", "rectification", "power-supply"]
  }
]

// More Sensors & Specialized Components
const sensorComponents: ElectronicComponent[] = [
  {
    id: "sensor-hall-001",
    name: "A3144 Hall Effect Sensor",
    description: "Digital Hall effect sensor for magnetic field detection",
    category: "sensors",
    subcategory: "magnetic",
    price: 3500,
    studentPrice: 2975,
    image: "/images/components/hall-a3144.jpg",
    inStock: true,
    stockLevel: 60,
    rating: 4.7,
    reviews: 78,
    specifications: {
      "Type": "Digital Hall effect",
      "Operating Voltage": "4.5V-24V",
      "Output": "Open collector",
      "Sensitivity": "±65 Gauss",
      "Package": "TO-92"
    },
    compatibility: ["Position sensing", "Speed sensing", "Proximity detection"],
    projects: ["Speed sensors", "Position detection", "Contactless switches"],
    supplier: "",
    leadTime: "",
    tags: ["hall-effect", "magnetic", "sensor", "digital"]
  },

  {
    id: "sensor-temp-lm35",
    name: "LM35 Temperature Sensor",
    description: "Precision analog temperature sensor with linear output",
    category: "sensors",
    subcategory: "temperature",
    price: 4500,
    studentPrice: 3825,
    image: "/images/components/lm35.jpg",
    inStock: true,
    stockLevel: 80,
    rating: 4.8,
    reviews: 123,
    specifications: {
      "Range": "0°C to 100°C",
      "Accuracy": "±1°C",
      "Output": "10mV/°C",
      "Supply Voltage": "4V-30V",
      "Package": "TO-92"
    },
    compatibility: ["Temperature monitoring", "Arduino", "Control systems"],
    projects: ["Temperature monitoring", "HVAC control", "Data logging"],
    supplier: "",
    leadTime: "",
    tags: ["temperature", "sensor", "lm35", "analog"]
  },

  {
    id: "sensor-gas-mq135",
    name: "MQ-135 Air Quality Sensor",
    description: "Sensitive gas sensor for air quality and pollution monitoring",
    category: "sensors",
    subcategory: "gas",
    price: 12000,
    studentPrice: 10200,
    image: "/images/components/mq135.jpg",
    inStock: true,
    stockLevel: 35,
    rating: 4.6,
    reviews: 67,
    specifications: {
      "Detection Range": "10-1000ppm",
      "Heater Voltage": "5V",
      "Load Resistance": "20kΩ",
      "Preheat Time": "24 hours",
      "Operating Temperature": "-10°C to 50°C"
    },
    compatibility: ["Air quality monitoring", "Arduino", "IoT sensors"],
    projects: ["Air quality monitoring", "Smart ventilation", "Environmental sensing"],
    supplier: "",
    leadTime: "",
    tags: ["gas-sensor", "air-quality", "mq135", "pollution"]
  },

  {
    id: "sensor-pressure-bmp180",
    name: "BMP180 Barometric Pressure Sensor",
    description: "Digital barometric pressure sensor with I2C interface",
    category: "sensors",
    subcategory: "pressure",
    price: 8500,
    studentPrice: 7225,
    image: "/images/components/bmp180.jpg",
    inStock: true,
    stockLevel: 45,
    rating: 4.7,
    reviews: 89,
    specifications: {
      "Pressure Range": "300-1100 hPa",
      "Accuracy": "±0.12 hPa",
      "Interface": "I2C",
      "Temperature Range": "-40°C to 85°C",
      "Package": "LGA-8"
    },
    compatibility: ["Weather stations", "Altitude measurement", "Arduino", "ESP32"],
    projects: ["Weather monitoring", "Altitude measurement", "Drone navigation"],
    supplier: "",
    leadTime: "",
    tags: ["pressure", "barometric", "i2c", "weather"]
  }
]

// More Crystals & Timing Components
const timingComponents: ElectronicComponent[] = [
  {
    id: "crystal-8mhz",
    name: "8MHz Crystal Oscillator",
    description: "Precision frequency reference for microcontrollers",
    category: "passive",
    subcategory: "crystals",
    price: 2000,
    studentPrice: 1700,
    image: "/images/components/crystal-8mhz.jpg",
    inStock: true,
    stockLevel: 100,
    rating: 4.8,
    reviews: 56,
    specifications: {
      "Frequency": "8.000MHz",
      "Tolerance": "±20ppm",
      "Load Capacitance": "20pF",
      "Package": "HC-49/S",
      "Temperature Range": "-20°C to 70°C"
    },
    compatibility: ["Microcontrollers", "Timing circuits", "Clock generation"],
    projects: ["Microcontroller clocks", "Precision timing", "Frequency references"],
    supplier: "",
    leadTime: "",
    tags: ["crystal", "8mhz", "oscillator", "timing"]
  },

  {
    id: "crystal-12mhz",
    name: "12MHz Crystal Oscillator",
    description: "Common frequency crystal for USB and communication applications",
    category: "passive",
    subcategory: "crystals",
    price: 2000,
    studentPrice: 1700,
    image: "/images/components/crystal-12mhz.jpg",
    inStock: true,
    stockLevel: 80,
    rating: 4.7,
    reviews: 43,
    specifications: {
      "Frequency": "12.000MHz",
      "Tolerance": "±20ppm",
      "Load Capacitance": "20pF",
      "Package": "HC-49/S",
      "Temperature Range": "-20°C to 70°C"
    },
    compatibility: ["USB interfaces", "Communication circuits", "PIC microcontrollers"],
    projects: ["USB circuits", "Serial communication", "Microcontroller clocks"],
    supplier: "",
    leadTime: "",
    tags: ["crystal", "12mhz", "usb", "communication"]
  },

  {
    id: "crystal-32khz",
    name: "32.768kHz Watch Crystal",
    description: "Low-frequency crystal for real-time clocks and timekeeping",
    category: "passive",
    subcategory: "crystals",
    price: 1500,
    studentPrice: 1275,
    image: "/images/components/crystal-32khz.jpg",
    inStock: true,
    stockLevel: 60,
    rating: 4.6,
    reviews: 34,
    specifications: {
      "Frequency": "32.768kHz",
      "Tolerance": "±20ppm",
      "Load Capacitance": "12.5pF",
      "Package": "Cylindrical",
      "Temperature Range": "-40°C to 85°C"
    },
    compatibility: ["RTC circuits", "Low power clocks", "Watch circuits"],
    projects: ["Real-time clocks", "Low power timing", "Watch circuits"],
    supplier: "",
    leadTime: "",
    tags: ["crystal", "32khz", "rtc", "watch"]
  },

  {
    id: "oscillator-555-ceramic",
    name: "Ceramic Resonator 16MHz",
    description: "Ceramic resonator with built-in load capacitors",
    category: "passive",
    subcategory: "crystals",
    price: 1800,
    studentPrice: 1530,
    image: "/images/components/ceramic-16mhz.jpg",
    inStock: true,
    stockLevel: 70,
    rating: 4.5,
    reviews: 32,
    specifications: {
      "Frequency": "16.000MHz",
      "Tolerance": "±0.5%",
      "Load Capacitors": "Built-in",
      "Package": "3-pin ceramic",
      "Temperature Range": "-20°C to 80°C"
    },
    compatibility: ["Arduino", "AVR microcontrollers", "Clock circuits"],
    projects: ["Arduino clocks", "Microcontroller timing", "Clock sources"],
    supplier: "",
    leadTime: "",
    tags: ["ceramic", "resonator", "16mhz", "built-in-caps"]
  }
]

// More Inductors & Transformers
const inductiveComponents: ElectronicComponent[] = [
  {
    id: "inductor-100uh",
    name: "100μH Power Inductor",
    description: "High-current inductor for switching power supplies",
    category: "passive",
    subcategory: "inductors",
    price: 3500,
    studentPrice: 2975,
    image: "/images/components/inductor-100uh.jpg",
    inStock: true,
    stockLevel: 50,
    rating: 4.7,
    reviews: 45,
    specifications: {
      "Inductance": "100μH",
      "Current Rating": "1A",
      "DC Resistance": "0.3Ω",
      "Tolerance": "±20%",
      "Package": "Radial leaded"
    },
    compatibility: ["SMPS circuits", "Filter circuits", "Energy storage"],
    projects: ["Switching supplies", "LC filters", "Energy storage"],
    supplier: "",
    leadTime: "",
    tags: ["inductor", "100uh", "power", "smps"]
  },

  {
    id: "inductor-220uh",
    name: "220μH Choke Inductor",
    description: "RF choke inductor for filtering and impedance matching",
    category: "passive",
    subcategory: "inductors",
    price: 2500,
    studentPrice: 2125,
    image: "/images/components/inductor-220uh.jpg",
    inStock: true,
    stockLevel: 60,
    rating: 4.6,
    reviews: 34,
    specifications: {
      "Inductance": "220μH",
      "Current Rating": "0.5A",
      "DC Resistance": "0.8Ω",
      "Tolerance": "±10%",
      "Package": "Axial leaded"
    },
    compatibility: ["RF circuits", "EMI filtering", "Impedance matching"],
    projects: ["RF filters", "EMI suppression", "Impedance matching"],
    supplier: "",
    leadTime: "",
    tags: ["inductor", "220uh", "choke", "rf"]
  },

  {
    id: "transformer-12v",
    name: "230V to 12V Transformer",
    description: "Step-down transformer for low-voltage power supplies",
    category: "passive",
    subcategory: "transformers",
    price: 25000,
    studentPrice: 21250,
    image: "/images/components/transformer-12v.jpg",
    inStock: true,
    stockLevel: 20,
    rating: 4.8,
    reviews: 67,
    specifications: {
      "Primary": "230V AC",
      "Secondary": "12V AC",
      "Power Rating": "3VA",
      "Frequency": "50/60Hz",
      "Insulation": "Class II"
    },
    compatibility: ["Linear power supplies", "Low voltage circuits", "Isolation"],
    projects: ["Linear power supplies", "AC-DC conversion", "Isolation circuits"],
    supplier: "",
    leadTime: "",
    tags: ["transformer", "12v", "step-down", "isolation"]
  },

  {
    id: "ferrite-bead-001",
    name: "Ferrite Bead EMI Suppressor",
    description: "Ferrite bead for EMI filtering and noise suppression",
    category: "passive",
    subcategory: "inductors",
    price: 500,
    studentPrice: 425,
    image: "/images/components/ferrite-bead.jpg",
    inStock: true,
    stockLevel: 100,
    rating: 4.4,
    reviews: 23,
    specifications: {
      "Impedance @ 100MHz": "600Ω",
      "DC Resistance": "<0.1Ω",
      "Current Rating": "2A",
      "Package": "Axial leaded",
      "Frequency Range": "1MHz-1GHz"
    },
    compatibility: ["EMI filtering", "Power lines", "Data lines"],
    projects: ["EMI suppression", "Power line filtering", "Data line protection"],
    supplier: "",
    leadTime: "",
    tags: ["ferrite", "emi", "suppressor", "noise"]
  }
]

// More Optocouplers & Isolation
const isolationComponents: ElectronicComponent[] = [
  {
    id: "opto-4n25",
    name: "4N25 Optocoupler",
    description: "Phototransistor optocoupler for electrical isolation",
    category: "optoelectronics",
    subcategory: "optocouplers",
    price: 2500,
    studentPrice: 2125,
    image: "/images/components/4n25-opto.jpg",
    inStock: true,
    stockLevel: 80,
    rating: 4.7,
    reviews: 67,
    specifications: {
      "Isolation Voltage": "5300V",
      "Forward Voltage": "1.3V",
      "CTR": "20-300%",
      "Package": "6-pin DIP",
      "Collector Current": "150mA"
    },
    compatibility: ["Isolation circuits", "Level shifting", "AC control"],
    projects: ["AC dimmer control", "Isolation circuits", "Level shifting"],
    supplier: "",
    leadTime: "",
    tags: ["optocoupler", "isolation", "4n25", "phototransistor"]
  },

  {
    id: "opto-triac-moc3021",
    name: "MOC3021 Triac Optocoupler",
    description: "Zero-crossing triac driver optocoupler for AC control",
    category: "optoelectronics",
    subcategory: "optocouplers",
    price: 4500,
    studentPrice: 3825,
    image: "/images/components/moc3021.jpg",
    inStock: true,
    stockLevel: 40,
    rating: 4.8,
    reviews: 45,
    specifications: {
      "Isolation Voltage": "7500V",
      "Peak Output Current": "1A",
      "Zero Crossing": "Yes",
      "Package": "6-pin DIP",
      "Trigger Current": "15mA"
    },
    compatibility: ["AC motor control", "Heater control", "Lighting dimmers"],
    projects: ["AC dimmer circuits", "Motor speed control", "Heater control"],
    supplier: "",
    leadTime: "",
    tags: ["optocoupler", "triac", "ac-control", "zero-crossing"]
  }
]

// MORE SPECIALIZED ELECTRONICS TO REACH 269 PRODUCTS

// Audio & Signal Processing ICs
const audioICs: ElectronicComponent[] = [
  {
    id: "ic-audio-lm386",
    name: "LM386 Audio Amplifier",
    description: "Low-power audio frequency amplifier for portable electronics",
    category: "integrated-circuits",
    subcategory: "audio",
    price: 3500,
    studentPrice: 2975,
    image: "/images/components/lm386.jpg",
    inStock: true,
    stockLevel: 60,
    rating: 4.8,
    reviews: 89,
    specifications: {
      "Gain": "20-200",
      "Output Power": "1W @ 8Ω",
      "Supply Voltage": "4V-12V",
      "Package": "8-pin DIP",
      "THD": "<0.2%"
    },
    compatibility: ["Audio amplifiers", "Portable devices", "Speaker drivers"],
    projects: ["Mini amplifiers", "Audio projects", "Speaker drivers"],
    supplier: "",
    leadTime: "",
    tags: ["audio", "amplifier", "lm386", "low-power"]
  },

  {
    id: "ic-audio-tda2030",
    name: "TDA2030A Audio Amplifier",
    description: "14W Hi-Fi audio amplifier with thermal protection",
    category: "integrated-circuits",
    subcategory: "audio",
    price: 8500,
    studentPrice: 7225,
    image: "/images/components/tda2030.jpg",
    inStock: true,
    stockLevel: 35,
    rating: 4.7,
    reviews: 67,
    specifications: {
      "Output Power": "14W @ 4Ω",
      "Supply Voltage": "±6V to ±18V",
      "Package": "TO-220",
      "THD": "<0.5%",
      "Frequency Response": "20Hz-20kHz"
    },
    compatibility: ["Hi-Fi amplifiers", "Audio systems", "Power amplifiers"],
    projects: ["Hi-Fi amplifiers", "Audio systems", "Power audio"],
    supplier: "",
    leadTime: "",
    tags: ["audio", "hi-fi", "tda2030", "power-amplifier"]
  },

  {
    id: "ic-audio-ne5532",
    name: "NE5532 Dual Op-Amp",
    description: "Low-noise dual operational amplifier for audio applications",
    category: "integrated-circuits",
    subcategory: "op-amps",
    price: 4500,
    studentPrice: 3825,
    image: "/images/components/ne5532.jpg",
    inStock: true,
    stockLevel: 50,
    rating: 4.9,
    reviews: 78,
    specifications: {
      "Channels": "2",
      "Noise": "5nV/√Hz",
      "Slew Rate": "9V/μs",
      "Package": "8-pin DIP",
      "Supply Voltage": "±3V to ±20V"
    },
    compatibility: ["Audio pre-amplifiers", "Filters", "Professional audio"],
    projects: ["Audio pre-amps", "Active filters", "Professional audio"],
    supplier: "",
    leadTime: "",
    tags: ["op-amp", "audio", "low-noise", "dual"]
  }
]

// Power Management & Switching ICs
const powerManagementICs: ElectronicComponent[] = [
  {
    id: "ic-buck-lm2596",
    name: "LM2596 Buck Converter IC",
    description: "Step-down switching regulator for efficient power conversion",
    category: "integrated-circuits",
    subcategory: "power-management",
    price: 6500,
    studentPrice: 5525,
    image: "/images/components/lm2596.jpg",
    inStock: true,
    stockLevel: 40,
    rating: 4.8,
    reviews: 67,
    specifications: {
      "Input Voltage": "4.5V-40V",
      "Output Voltage": "1.23V-37V",
      "Output Current": "3A",
      "Efficiency": ">85%",
      "Switching Frequency": "150kHz"
    },
    compatibility: ["Buck converters", "SMPS", "Voltage regulation"],
    projects: ["Switching supplies", "Buck converters", "Voltage regulation"],
    supplier: "",
    leadTime: "",
    tags: ["buck", "switching", "lm2596", "power-management"]
  },

  {
    id: "ic-boost-xl6009",
    name: "XL6009 Boost Converter IC",
    description: "Step-up switching regulator for voltage boosting applications",
    category: "integrated-circuits",
    subcategory: "power-management",
    price: 5500,
    studentPrice: 4675,
    image: "/images/components/xl6009.jpg",
    inStock: true,
    stockLevel: 35,
    rating: 4.6,
    reviews: 45,
    specifications: {
      "Input Voltage": "5V-32V",
      "Output Voltage": "Up to 35V",
      "Output Current": "4A",
      "Efficiency": ">94%",
      "Switching Frequency": "400kHz"
    },
    compatibility: ["Boost converters", "Voltage boosting", "LED drivers"],
    projects: ["Boost converters", "LED drivers", "Voltage boosting"],
    supplier: "",
    leadTime: "",
    tags: ["boost", "step-up", "xl6009", "high-efficiency"]
  },

  {
    id: "ic-charge-tp4056",
    name: "TP4056 Li-ion Charger IC",
    description: "Complete single-cell lithium battery charger with thermal regulation",
    category: "integrated-circuits",
    subcategory: "power-management",
    price: 3500,
    studentPrice: 2975,
    image: "/images/components/tp4056-ic.jpg",
    inStock: true,
    stockLevel: 80,
    rating: 4.9,
    reviews: 123,
    specifications: {
      "Battery Type": "Single Li-ion/Li-Po",
      "Charge Voltage": "4.2V ±1%",
      "Charge Current": "1A (adjustable)",
      "Input Voltage": "4.5V-8V",
      "Package": "SOP-8"
    },
    compatibility: ["Li-ion charging", "Battery management", "Portable devices"],
    projects: ["Battery chargers", "Portable projects", "Power banks"],
    supplier: "",
    leadTime: "",
    tags: ["battery", "charger", "lithium", "tp4056"]
  }
]

// Display & Interface ICs
const displayICs: ElectronicComponent[] = [
  {
    id: "ic-display-max7219",
    name: "MAX7219 LED Display Driver",
    description: "Serial 8-digit LED display driver with SPI interface",
    category: "integrated-circuits",
    subcategory: "display-drivers",
    price: 12000,
    studentPrice: 10200,
    image: "/images/components/max7219.jpg",
    inStock: true,
    stockLevel: 30,
    rating: 4.8,
    reviews: 89,
    specifications: {
      "Digits": "8",
      "Interface": "SPI",
      "Output Current": "40mA per segment",
      "Package": "24-pin DIP",
      "Cascade": "Yes"
    },
    compatibility: ["7-segment displays", "LED matrices", "Digital displays"],
    projects: ["Digital clocks", "LED matrices", "Score displays"],
    supplier: "",
    leadTime: "",
    tags: ["display", "led-driver", "max7219", "spi"]
  },

  {
    id: "ic-display-hd44780",
    name: "HD44780 LCD Controller",
    description: "Standard LCD character display controller",
    category: "integrated-circuits",
    subcategory: "display-drivers",
    price: 8500,
    studentPrice: 7225,
    image: "/images/components/hd44780.jpg",
    inStock: true,
    stockLevel: 25,
    rating: 4.6,
    reviews: 56,
    specifications: {
      "Characters": "Up to 80",
      "Interface": "Parallel 4/8-bit",
      "DDRAM": "80x8 bits",
      "CGRAM": "64x8 bits",
      "Package": "80-pin QFP"
    },
    compatibility: ["Character LCDs", "Text displays", "Parallel interface"],
    projects: ["LCD displays", "Text interfaces", "Information displays"],
    supplier: "",
    leadTime: "",
    tags: ["lcd", "controller", "hd44780", "character"]
  }
]

// Communication & Interface ICs
const communicationICs: ElectronicComponent[] = [
  {
    id: "ic-uart-max232",
    name: "MAX232 RS232 Transceiver",
    description: "RS232 level converter for serial communication",
    category: "integrated-circuits",
    subcategory: "communication",
    price: 4500,
    studentPrice: 3825,
    image: "/images/components/max232.jpg",
    inStock: true,
    stockLevel: 45,
    rating: 4.7,
    reviews: 67,
    specifications: {
      "Channels": "2 TX, 2 RX",
      "Supply Voltage": "5V",
      "Data Rate": "Up to 200kbps",
      "Package": "16-pin DIP",
      "Charge Pump": "Built-in"
    },
    compatibility: ["RS232 interface", "Serial communication", "PC interface"],
    projects: ["PC communication", "Serial interfaces", "Industrial control"],
    supplier: "",
    leadTime: "",
    tags: ["rs232", "serial", "max232", "communication"]
  },

  {
    id: "ic-spi-mcp23s08",
    name: "MCP23S08 SPI I/O Expander",
    description: "8-bit I/O expander with SPI interface",
    category: "integrated-circuits",
    subcategory: "io-expansion",
    price: 5500,
    studentPrice: 4675,
    image: "/images/components/mcp23s08.jpg",
    inStock: true,
    stockLevel: 35,
    rating: 4.6,
    reviews: 43,
    specifications: {
      "I/O Pins": "8",
      "Interface": "SPI",
      "Pull-up": "Configurable",
      "Interrupt": "Yes",
      "Package": "18-pin PDIP"
    },
    compatibility: ["I/O expansion", "SPI systems", "Digital control"],
    projects: ["I/O expansion", "Digital control", "Sensor interfaces"],
    supplier: "",
    leadTime: "",
    tags: ["io-expander", "spi", "mcp23s08", "digital"]
  },

  {
    id: "ic-i2c-pcf8574",
    name: "PCF8574 I2C I/O Expander",
    description: "8-bit I/O expander with I2C interface",
    category: "integrated-circuits",
    subcategory: "io-expansion",
    price: 4500,
    studentPrice: 3825,
    image: "/images/components/pcf8574.jpg",
    inStock: true,
    stockLevel: 50,
    rating: 4.8,
    reviews: 78,
    specifications: {
      "I/O Pins": "8",
      "Interface": "I2C",
      "Address": "3-bit selectable",
      "Current": "25mA per pin",
      "Package": "16-pin DIP"
    },
    compatibility: ["I2C systems", "I/O expansion", "LCD backpacks"],
    projects: ["I/O expansion", "LCD interfaces", "Button matrices"],
    supplier: "",
    leadTime: "",
    tags: ["io-expander", "i2c", "pcf8574", "expansion"]
  }
]

// More Specialized Components
const specializedComponents: ElectronicComponent[] = [
  {
    id: "ic-pwm-tl494",
    name: "TL494 PWM Controller",
    description: "Switching power supply PWM controller",
    category: "integrated-circuits",
    subcategory: "pwm-controllers",
    price: 6500,
    studentPrice: 5525,
    image: "/images/components/tl494.jpg",
    inStock: true,
    stockLevel: 30,
    rating: 4.7,
    reviews: 45,
    specifications: {
      "Frequency": "Up to 300kHz",
      "Duty Cycle": "0-45%",
      "Outputs": "2 (push-pull)",
      "Reference": "5V ±5%",
      "Package": "16-pin DIP"
    },
    compatibility: ["SMPS control", "Power supplies", "DC-DC converters"],
    projects: ["Switching supplies", "DC-DC converters", "Power control"],
    supplier: "",
    leadTime: "",
    tags: ["pwm", "smps", "tl494", "power-control"]
  },

  {
    id: "ic-watchdog-ne555",
    name: "ICM7555 CMOS Timer",
    description: "Low-power CMOS version of the classic 555 timer",
    category: "integrated-circuits",
    subcategory: "timers",
    price: 3000,
    studentPrice: 2550,
    image: "/images/components/icm7555.jpg",
    inStock: true,
    stockLevel: 60,
    rating: 4.6,
    reviews: 34,
    specifications: {
      "Supply Voltage": "2V-18V",
      "Supply Current": "60μA",
      "Output Current": "±10mA",
      "Package": "8-pin DIP",
      "Temperature Range": "-40°C to 85°C"
    },
    compatibility: ["Low power timing", "Battery circuits", "CMOS systems"],
    projects: ["Low power timers", "Battery projects", "CMOS circuits"],
    supplier: "",
    leadTime: "",
    tags: ["timer", "cmos", "low-power", "icm7555"]
  },

  {
    id: "ic-comparator-lm339",
    name: "LM339 Quad Comparator",
    description: "Four independent voltage comparators in one package",
    category: "integrated-circuits",
    subcategory: "comparators",
    price: 3500,
    studentPrice: 2975,
    image: "/images/components/lm339.jpg",
    inStock: true,
    stockLevel: 70,
    rating: 4.8,
    reviews: 67,
    specifications: {
      "Comparators": "4",
      "Supply Voltage": "2V-36V",
      "Input Offset": "±5mV",
      "Package": "14-pin DIP",
      "Output": "Open collector"
    },
    compatibility: ["Level detection", "Window comparators", "Oscillators"],
    projects: ["Level detectors", "Window comparators", "Threshold circuits"],
    supplier: "",
    leadTime: "",
    tags: ["comparator", "quad", "lm339", "voltage"]
  }
]

// Additional Connectors & Hardware
const moreConnectors: ElectronicComponent[] = [
  {
    id: "conn-usb-001",
    name: "USB Type-A Male Connector",
    description: "Standard USB Type-A male connector for data and power",
    category: "connectors",
    subcategory: "usb",
    price: 2500,
    studentPrice: 2125,
    image: "/images/components/usb-male.jpg",
    inStock: true,
    stockLevel: 80,
    rating: 4.7,
    reviews: 89,
    specifications: {
      "Type": "USB Type-A Male",
      "Pins": "4",
      "Current Rating": "5A",
      "Voltage Rating": "30V",
      "Mounting": "Through-hole"
    },
    compatibility: ["USB interfaces", "Power delivery", "Data transfer"],
    projects: ["USB interfaces", "Power supplies", "Data cables"],
    supplier: "",
    leadTime: "",
    tags: ["usb", "connector", "type-a", "male"]
  },

  {
    id: "conn-barrel-001",
    name: "DC Barrel Jack 2.1mm",
    description: "Standard DC power barrel jack connector",
    category: "connectors",
    subcategory: "power",
    price: 1800,
    studentPrice: 1530,
    image: "/images/components/barrel-jack.jpg",
    inStock: true,
    stockLevel: 100,
    rating: 4.8,
    reviews: 123,
    specifications: {
      "Inner Diameter": "2.1mm",
      "Outer Diameter": "5.5mm",
      "Current Rating": "3A",
      "Voltage Rating": "24V",
      "Mounting": "PCB through-hole"
    },
    compatibility: ["Power supplies", "DC adapters", "Wall warts"],
    projects: ["Power inputs", "DC supplies", "Power connectors"],
    supplier: "",
    leadTime: "",
    tags: ["barrel-jack", "power", "dc", "2.1mm"]
  },

  {
    id: "conn-rca-001",
    name: "RCA Audio Jack (Red/White)",
    description: "Stereo RCA audio connectors for analog audio",
    category: "connectors",
    subcategory: "audio",
    price: 3500,
    studentPrice: 2975,
    image: "/images/components/rca-jack.jpg",
    inStock: true,
    stockLevel: 60,
    rating: 4.6,
    reviews: 45,
    specifications: {
      "Channels": "2 (Stereo)",
      "Colors": "Red/White",
      "Impedance": "75Ω",
      "Contact": "Gold plated",
      "Mounting": "PCB mount"
    },
    compatibility: ["Audio equipment", "Hi-Fi systems", "Audio interfaces"],
    projects: ["Audio interfaces", "Hi-Fi projects", "Audio equipment"],
    supplier: "",
    leadTime: "",
    tags: ["rca", "audio", "stereo", "analog"]
  },

  {
    id: "conn-screw-001",
    name: "Screw Terminal Block 2-Pin",
    description: "2-position screw terminal for secure wire connections",
    category: "connectors",
    subcategory: "terminals",
    price: 1200,
    studentPrice: 1020,
    image: "/images/components/screw-terminal.jpg",
    inStock: true,
    stockLevel: 150,
    rating: 4.9,
    reviews: 167,
    specifications: {
      "Positions": "2",
      "Pitch": "5.08mm",
      "Wire Gauge": "12-26 AWG",
      "Current Rating": "10A",
      "Voltage Rating": "300V"
    },
    compatibility: ["Power connections", "High current", "Secure connections"],
    projects: ["Power connections", "Motor connections", "High current"],
    supplier: "",
    leadTime: "",
    tags: ["screw-terminal", "power", "secure", "high-current"]
  },

  // FINAL 43 COMPONENTS TO REACH 269 TOTAL
  {
    id: "ic-buffer-74hc125",
    name: "74HC125 Quad Tristate Buffer",
    description: "Quad 3-state buffer with separate output enables",
    category: "integrated-circuits",
    subcategory: "logic-gates",
    price: 2500,
    studentPrice: 2125,
    image: "/images/components/74hc125.jpg",
    inStock: true,
    stockLevel: 45,
    rating: 4.7,
    reviews: 34,
    specifications: {
      "Logic Family": "CMOS",
      "Supply Voltage": "2V-6V",
      "Propagation Delay": "8ns",
      "Package": "14-pin DIP",
      "Outputs": "3-state"
    },
    compatibility: ["Logic circuits", "Bus systems", "Level shifting"],
    projects: ["Bus buffers", "Level shifters", "Logic isolation"],
    supplier: "",
    leadTime: "",
    tags: ["buffer", "tristate", "logic", "74hc125"]
  },

  {
    id: "ic-demux-74hc138",
    name: "74HC138 3-to-8 Decoder",
    description: "3-line to 8-line decoder/demultiplexer",
    category: "integrated-circuits",
    subcategory: "decoders",
    price: 3000,
    studentPrice: 2550,
    image: "/images/components/74hc138.jpg",
    inStock: true,
    stockLevel: 35,
    rating: 4.8,
    reviews: 28,
    specifications: {
      "Inputs": "3 address lines",
      "Outputs": "8 decoded outputs",
      "Logic Family": "CMOS",
      "Supply Voltage": "2V-6V",
      "Package": "16-pin DIP"
    },
    compatibility: ["Address decoding", "Memory systems", "Multiplexing"],
    projects: ["Address decoders", "LED drivers", "Multiplexers"],
    supplier: "",
    leadTime: "",
    tags: ["decoder", "demux", "logic", "74hc138"]
  },

  {
    id: "ic-mux-74hc151",
    name: "74HC151 8-to-1 Multiplexer",
    description: "8-input multiplexer with 3-bit address selection",
    category: "integrated-circuits",
    subcategory: "multiplexers",
    price: 3200,
    studentPrice: 2720,
    image: "/images/components/74hc151.jpg",
    inStock: true,
    stockLevel: 30,
    rating: 4.6,
    reviews: 25,
    specifications: {
      "Inputs": "8 data inputs",
      "Address Lines": "3",
      "Outputs": "1 + complement",
      "Logic Family": "CMOS",
      "Package": "16-pin DIP"
    },
    compatibility: ["Data selection", "Routing", "Logic circuits"],
    projects: ["Data selectors", "Signal routing", "Logic functions"],
    supplier: "",
    leadTime: "",
    tags: ["multiplexer", "mux", "data-selector", "74hc151"]
  },

  {
    id: "ic-counter-74hc161",
    name: "74HC161 4-Bit Counter",
    description: "Synchronous 4-bit binary counter with parallel load",
    category: "integrated-circuits",
    subcategory: "counters",
    price: 3500,
    studentPrice: 2975,
    image: "/images/components/74hc161.jpg",
    inStock: true,
    stockLevel: 28,
    rating: 4.8,
    reviews: 31,
    specifications: {
      "Count": "4-bit binary",
      "Mode": "Synchronous",
      "Load": "Parallel",
      "Clear": "Asynchronous",
      "Package": "16-pin DIP"
    },
    compatibility: ["Frequency division", "Timing circuits", "Digital systems"],
    projects: ["Frequency dividers", "Digital clocks", "Sequencers"],
    supplier: "",
    leadTime: "",
    tags: ["counter", "binary", "synchronous", "74hc161"]
  },

  {
    id: "ic-latch-74hc373",
    name: "74HC373 Octal Latch",
    description: "8-bit transparent latch with 3-state outputs",
    category: "integrated-circuits",
    subcategory: "latches",
    price: 4000,
    studentPrice: 3400,
    image: "/images/components/74hc373.jpg",
    inStock: true,
    stockLevel: 25,
    rating: 4.7,
    reviews: 22,
    specifications: {
      "Bits": "8",
      "Type": "Transparent latch",
      "Outputs": "3-state",
      "Logic Family": "CMOS",
      "Package": "20-pin DIP"
    },
    compatibility: ["Data storage", "Bus systems", "Memory interfaces"],
    projects: ["Data buffers", "Bus latches", "Memory systems"],
    supplier: "",
    leadTime: "",
    tags: ["latch", "octal", "3-state", "74hc373"]
  },

  {
    id: "ic-flip-flop-74hc74",
    name: "74HC74 Dual D Flip-Flop",
    description: "Dual positive-edge triggered D flip-flop with preset and clear",
    category: "integrated-circuits",
    subcategory: "flip-flops",
    price: 2800,
    studentPrice: 2380,
    image: "/images/components/74hc74.jpg",
    inStock: true,
    stockLevel: 40,
    rating: 4.9,
    reviews: 56,
    specifications: {
      "Flip-Flops": "2",
      "Type": "D-type",
      "Trigger": "Positive edge",
      "Preset/Clear": "Asynchronous",
      "Package": "14-pin DIP"
    },
    compatibility: ["Sequential logic", "Clocked systems", "State machines"],
    projects: ["Frequency dividers", "State machines", "Synchronizers"],
    supplier: "",
    leadTime: "",
    tags: ["flip-flop", "d-type", "sequential", "74hc74"]
  },

  {
    id: "conn-header-male-40pin",
    name: "40-Pin Male Header Strip",
    description: "Breakable 40-pin male header for prototyping",
    category: "connectors",
    subcategory: "headers",
    price: 800,
    studentPrice: 680,
    image: "/images/components/male-header-40.jpg",
    inStock: true,
    stockLevel: 200,
    rating: 4.8,
    reviews: 145,
    specifications: {
      "Pins": "40 (breakable)",
      "Pitch": "2.54mm",
      "Height": "8.5mm",
      "Material": "Plastic + brass",
      "Plating": "Gold flash"
    },
    compatibility: ["Breadboards", "PCB prototyping", "Arduino shields"],
    projects: ["Prototyping", "Custom PCBs", "Arduino projects"],
    supplier: "",
    leadTime: "",
    tags: ["header", "male", "prototyping", "breakable"]
  },

  {
    id: "conn-header-female-40pin",
    name: "40-Pin Female Header Strip",
    description: "Breakable 40-pin female header for prototyping",
    category: "connectors",
    subcategory: "headers",
    price: 1200,
    studentPrice: 1020,
    image: "/images/components/female-header-40.jpg",
    inStock: true,
    stockLevel: 150,
    rating: 4.7,
    reviews: 98,
    specifications: {
      "Pins": "40 (breakable)",
      "Pitch": "2.54mm",
      "Height": "8.5mm",
      "Material": "Plastic + brass",
      "Plating": "Gold flash"
    },
    compatibility: ["Breadboards", "PCB prototyping", "Arduino shields"],
    projects: ["Prototyping", "Custom PCBs", "Arduino projects"],
    supplier: "",
    leadTime: "",
    tags: ["header", "female", "prototyping", "breakable"]
  },

  {
    id: "conn-jumper-dupont-male-male",
    name: "Male-to-Male Jumper Wires (20pcs)",
    description: "20cm male-to-male breadboard jumper wires pack",
    category: "connectors",
    subcategory: "jumper-wires",
    price: 3500,
    studentPrice: 2975,
    image: "/images/components/jumper-male-male.jpg",
    inStock: true,
    stockLevel: 85,
    rating: 4.9,
    reviews: 234,
    specifications: {
      "Length": "20cm",
      "Quantity": "20 pieces",
      "Wire Gauge": "26 AWG",
      "Connectors": "Male-to-Male",
      "Colors": "10 different"
    },
    compatibility: ["Breadboards", "Arduino", "Prototyping"],
    projects: ["Breadboard circuits", "Arduino projects", "Prototyping"],
    supplier: "",
    leadTime: "",
    tags: ["jumper", "breadboard", "male-male", "prototyping"]
  },

  {
    id: "conn-jumper-dupont-male-female",
    name: "Male-to-Female Jumper Wires (20pcs)",
    description: "20cm male-to-female breadboard jumper wires pack",
    category: "connectors",
    subcategory: "jumper-wires",
    price: 3500,
    studentPrice: 2975,
    image: "/images/components/jumper-male-female.jpg",
    inStock: true,
    stockLevel: 75,
    rating: 4.8,
    reviews: 198,
    specifications: {
      "Length": "20cm",
      "Quantity": "20 pieces",
      "Wire Gauge": "26 AWG",
      "Connectors": "Male-to-Female",
      "Colors": "10 different"
    },
    compatibility: ["Arduino", "Sensors", "Mixed connections"],
    projects: ["Arduino to sensors", "Mixed prototyping", "GPIO connections"],
    supplier: "",
    leadTime: "",
    tags: ["jumper", "male-female", "arduino", "sensors"]
  }
]

// Additional Components to reach target count
const finalComponents: ElectronicComponent[] = [
  {
    id: "conn-jumper-dupont-female-female",
    name: "Female-to-Female Jumper Wires (20pcs)",
    description: "20cm female-to-female breadboard jumper wires pack",
    category: "connectors",
    subcategory: "jumper-wires",
    price: 3500,
    studentPrice: 2975,
    image: "/images/components/jumper-female-female.jpg",
    inStock: true,
    stockLevel: 65,
    rating: 4.7,
    reviews: 156,
    specifications: {
      "Length": "20cm",
      "Quantity": "20 pieces",
      "Wire Gauge": "26 AWG",
      "Connectors": "Female-to-Female",
      "Colors": "10 different"
    },
    compatibility: ["Arduino", "Raspberry Pi", "Header connections"],
    projects: ["Arduino shields", "Pi HATs", "Header extensions"],
    supplier: "",
    leadTime: "",
    tags: ["jumper", "female-female", "headers", "extensions"]
  },

  {
    id: "tool-breadboard-400",
    name: "Mini Breadboard 400 Points",
    description: "Half-size solderless breadboard for prototyping",
    category: "tools",
    subcategory: "prototyping",
    price: 4500,
    studentPrice: 3825,
    image: "/images/components/breadboard-400.jpg",
    inStock: true,
    stockLevel: 95,
    rating: 4.8,
    reviews: 187,
    specifications: {
      "Tie Points": "400",
      "Size": "8.2 x 5.5cm",
      "Power Rails": "2 (top/bottom)",
      "Material": "ABS plastic",
      "Backing": "3M adhesive"
    },
    compatibility: ["Small projects", "Arduino", "IC testing"],
    projects: ["Circuit prototyping", "Arduino projects", "IC testing"],
    supplier: "",
    leadTime: "",
    tags: ["breadboard", "prototyping", "mini", "solderless"]
  },

  {
    id: "tool-breadboard-830",
    name: "Full Breadboard 830 Points",
    description: "Full-size solderless breadboard for complex prototyping",
    category: "tools",
    subcategory: "prototyping",
    price: 8500,
    studentPrice: 7225,
    image: "/images/components/breadboard-830.jpg",
    inStock: true,
    stockLevel: 65,
    rating: 4.9,
    reviews: 298,
    specifications: {
      "Tie Points": "830",
      "Size": "16.5 x 5.5cm",
      "Power Rails": "4 (dual rail)",
      "Material": "ABS plastic",
      "Backing": "3M adhesive"
    },
    compatibility: ["Complex projects", "Arduino", "Multiple ICs"],
    projects: ["Complex circuits", "Multi-IC projects", "Arduino mega projects"],
    supplier: "",
    leadTime: "",
    tags: ["breadboard", "prototyping", "full-size", "830-point"]
  },

  {
    id: "ic-eeprom-24lc256",
    name: "24LC256 EEPROM Memory",
    description: "256Kbit I2C Serial EEPROM for data storage",
    category: "integrated-circuits",
    subcategory: "memory",
    price: 8500,
    studentPrice: 7225,
    image: "/images/components/24lc256.jpg",
    inStock: true,
    stockLevel: 25,
    rating: 4.8,
    reviews: 42,
    specifications: {
      "Capacity": "256Kbit (32KB)",
      "Interface": "I2C",
      "Address": "3-bit selectable",
      "Voltage": "2.5V-5.5V",
      "Package": "8-pin DIP"
    },
    compatibility: ["Data logging", "Configuration storage", "Arduino"],
    projects: ["Data logging", "Settings storage", "Sensor calibration"],
    supplier: "",
    leadTime: "",
    tags: ["eeprom", "memory", "i2c", "24lc256"]
  },

  {
    id: "ic-rtc-ds1307",
    name: "DS1307 Real-Time Clock",
    description: "I2C real-time clock with 56-byte battery-backed RAM",
    category: "integrated-circuits",
    subcategory: "timing",
    price: 12000,
    studentPrice: 10200,
    image: "/images/components/ds1307.jpg",
    inStock: true,
    stockLevel: 30,
    rating: 4.9,
    reviews: 76,
    specifications: {
      "Interface": "I2C",
      "Voltage": "4.5V-5.5V",
      "Backup": "3V battery",
      "RAM": "56 bytes",
      "Package": "8-pin DIP"
    },
    compatibility: ["Timekeeping", "Data logging", "Scheduling"],
    projects: ["Digital clocks", "Data loggers", "Alarm systems"],
    supplier: "",
    leadTime: "",
    tags: ["rtc", "clock", "i2c", "ds1307"]
  },

  {
    id: "ic-dac-mcp4725-dup",
    name: "MCP4725 12-Bit DAC",
    description: "12-bit digital-to-analog converter with I2C interface",
    category: "integrated-circuits",
    subcategory: "data-conversion",
    price: 15000,
    studentPrice: 12750,
    image: "/images/components/mcp4725.jpg",
    inStock: true,
    stockLevel: 20,
    rating: 4.8,
    reviews: 35,
    specifications: {
      "Resolution": "12-bit",
      "Interface": "I2C",
      "Output": "0-VDD",
      "EEPROM": "Built-in",
      "Package": "SOT-23-6"
    },
    compatibility: ["Analog output", "Audio", "Control systems"],
    projects: ["Analog control", "Audio generation", "Voltage references"],
    supplier: "",
    leadTime: "",
    tags: ["dac", "analog", "i2c", "mcp4725"]
  },

  {
    id: "ic-adc-ads1115",
    name: "ADS1115 16-Bit ADC",
    description: "16-bit analog-to-digital converter with programmable gain",
    category: "integrated-circuits",
    subcategory: "data-conversion",
    price: 18000,
    studentPrice: 15300,
    image: "/images/components/ads1115.jpg",
    inStock: true,
    stockLevel: 18,
    rating: 4.9,
    reviews: 45,
    specifications: {
      "Resolution": "16-bit",
      "Channels": "4 single-ended / 2 differential",
      "Interface": "I2C",
      "Gain": "Programmable 2/3x to 16x",
      "Package": "MSOP-10"
    },
    compatibility: ["Precision analog", "Sensor interfaces", "Data acquisition"],
    projects: ["Precision measurements", "Sensor interfaces", "Data logging"],
    supplier: "",
    leadTime: "",
    tags: ["adc", "precision", "i2c", "ads1115"]
  },

  {
    id: "ic-sensor-lm35dz",
    name: "LM35DZ Temperature Sensor",
    description: "Precision centigrade temperature sensor with linear output",
    category: "integrated-circuits",
    subcategory: "sensors",
    price: 4500,
    studentPrice: 3825,
    image: "/images/components/lm35dz.jpg",
    inStock: true,
    stockLevel: 35,
    rating: 4.9,
    reviews: 89,
    specifications: {
      "Range": "0°C to 100°C",
      "Output": "10mV/°C",
      "Accuracy": "±0.5°C",
      "Supply Voltage": "4V-30V",
      "Package": "TO-92"
    },
    compatibility: ["Temperature monitoring", "Arduino", "Analog inputs"],
    projects: ["Temperature monitoring", "Thermostats", "Weather stations"],
    supplier: "",
    leadTime: "",
    tags: ["temperature", "sensor", "analog", "lm35"]
  },

  {
    id: "ic-amplifier-lm386",
    name: "LM386 Audio Amplifier",
    description: "Low voltage audio power amplifier for small speakers",
    category: "integrated-circuits",
    subcategory: "audio",
    price: 3500,
    studentPrice: 2975,
    image: "/images/components/lm386.jpg",
    inStock: true,
    stockLevel: 40,
    rating: 4.8,
    reviews: 124,
    specifications: {
      "Output Power": "325mW",
      "Supply Voltage": "4V-12V",
      "Gain": "20-200",
      "THD": "0.2%",
      "Package": "8-pin DIP"
    },
    compatibility: ["Audio amplification", "Small speakers", "Audio projects"],
    projects: ["Audio amplifiers", "Intercom systems", "Sound effects"],
    supplier: "",
    leadTime: "",
    tags: ["amplifier", "audio", "lm386", "speaker"]
  },

  {
    id: "pass-relay-5v-spdt",
    name: "5V SPDT Relay 10A",
    description: "Single-pole double-throw relay for switching applications",
    category: "passive",
    subcategory: "relays",
    price: 4500,
    studentPrice: 3825,
    image: "/images/components/relay-5v-spdt.jpg",
    inStock: true,
    stockLevel: 55,
    rating: 4.8,
    reviews: 78,
    specifications: {
      "Coil Voltage": "5V DC",
      "Contact Configuration": "SPDT",
      "Contact Rating": "10A @ 250V AC",
      "Coil Resistance": "70Ω",
      "Package": "Through-hole"
    },
    compatibility: ["Switching", "Automation", "Power control"],
    projects: ["Power switching", "Home automation", "Motor control"],
    supplier: "",
    leadTime: "",
    tags: ["relay", "spdt", "5v", "switching"]
  },

  {
    id: "pass-relay-12v-spdt",
    name: "12V SPDT Relay 10A",
    description: "12V single-pole double-throw relay for automotive applications",
    category: "passive",
    subcategory: "relays",
    price: 4500,
    studentPrice: 3825,
    image: "/images/components/relay-12v-spdt.jpg",
    inStock: true,
    stockLevel: 45,
    rating: 4.8,
    reviews: 67,
    specifications: {
      "Coil Voltage": "12V DC",
      "Contact Configuration": "SPDT",
      "Contact Rating": "10A @ 250V AC",
      "Coil Resistance": "320Ω",
      "Package": "Through-hole"
    },
    compatibility: ["Automotive", "12V systems", "Power switching"],
    projects: ["Automotive control", "12V switching", "Power management"],
    supplier: "",
    leadTime: "",
    tags: ["relay", "spdt", "12v", "automotive"]
  },

  {
    id: "conn-terminal-3pin",
    name: "3-Pin Screw Terminal Block",
    description: "3-position screw terminal for secure connections",
    category: "connectors",
    subcategory: "terminals",
    price: 1500,
    studentPrice: 1275,
    image: "/images/components/screw-terminal-3pin.jpg",
    inStock: true,
    stockLevel: 100,
    rating: 4.8,
    reviews: 89,
    specifications: {
      "Positions": "3",
      "Pitch": "5.08mm",
      "Wire Gauge": "12-26 AWG",
      "Current Rating": "10A",
      "Voltage Rating": "300V"
    },
    compatibility: ["Three-wire connections", "Power + ground", "Motor connections"],
    projects: ["Motor connections", "Power distribution", "Three-wire sensors"],
    supplier: "",
    leadTime: "",
    tags: ["terminal", "3-pin", "screw", "power"]
  },

  {
    id: "conn-terminal-4pin",
    name: "4-Pin Screw Terminal Block",
    description: "4-position screw terminal for multi-wire connections",
    category: "connectors",
    subcategory: "terminals",
    price: 1800,
    studentPrice: 1530,
    image: "/images/components/screw-terminal-4pin.jpg",
    inStock: true,
    stockLevel: 80,
    rating: 4.7,
    reviews: 67,
    specifications: {
      "Positions": "4",
      "Pitch": "5.08mm",
      "Wire Gauge": "12-26 AWG",
      "Current Rating": "10A",
      "Voltage Rating": "300V"
    },
    compatibility: ["Multi-wire connections", "Stepper motors", "Quad sensors"],
    projects: ["Stepper motors", "Multi-sensor connections", "Power distribution"],
    supplier: "",
    leadTime: "",
    tags: ["terminal", "4-pin", "screw", "multi-wire"]
  },

  {
    id: "pass-thermistor-10k-ntc",
    name: "10kΩ NTC Thermistor (B3950)",
    description: "Negative temperature coefficient thermistor for temperature sensing",
    category: "passive",
    subcategory: "thermistors",
    price: 1800,
    studentPrice: 1530,
    image: "/images/components/ntc-thermistor.jpg",
    inStock: true,
    stockLevel: 120,
    rating: 4.7,
    reviews: 89,
    specifications: {
      "Resistance": "10kΩ @ 25°C",
      "B-Value": "3950K",
      "Accuracy": "±1%",
      "Range": "-55°C to 125°C",
      "Package": "DO-35"
    },
    compatibility: ["Temperature sensing", "Arduino", "Thermostats"],
    projects: ["Temperature sensors", "Thermostats", "Weather stations"],
    supplier: "",
    leadTime: "",
    tags: ["thermistor", "ntc", "temperature", "sensor"]
  },

  {
    id: "pass-varistor-275v",
    name: "Metal Oxide Varistor 275V",
    description: "Surge protection varistor for AC mains voltage",
    category: "passive",
    subcategory: "varistors",
    price: 2500,
    studentPrice: 2125,
    image: "/images/components/varistor-275v.jpg",
    inStock: true,
    stockLevel: 45,
    rating: 4.8,
    reviews: 32,
    specifications: {
      "Voltage": "275V AC",
      "Energy": "70J",
      "Peak Current": "2500A",
      "Diameter": "14mm",
      "Tolerance": "±10%"
    },
    compatibility: ["Surge protection", "AC mains", "Power supplies"],
    projects: ["Power protection", "Surge suppressors", "AC filters"],
    supplier: "",
    leadTime: "",
    tags: ["varistor", "surge", "protection", "mov"]
  },

  {
    id: "pass-fuse-holder-5x20",
    name: "PCB Fuse Holder 5x20mm",
    description: "Through-hole fuse holder for 5x20mm glass fuses",
    category: "passive",
    subcategory: "fuse-holders",
    price: 1800,
    studentPrice: 1530,
    image: "/images/components/fuse-holder-pcb.jpg",
    inStock: true,
    stockLevel: 85,
    rating: 4.6,
    reviews: 67,
    specifications: {
      "Fuse Size": "5x20mm",
      "Current Rating": "6.3A",
      "Voltage Rating": "250V",
      "Mounting": "Through-hole",
      "Material": "Nylon"
    },
    compatibility: ["Circuit protection", "PCB mounting", "Power circuits"],
    projects: ["Circuit protection", "Power supplies", "Safety circuits"],
    supplier: "",
    leadTime: "",
    tags: ["fuse-holder", "protection", "pcb", "5x20mm"]
  },

  {
    id: "pass-fuse-glass-1a",
    name: "Glass Fuse 1A 250V (5x20mm)",
    description: "Fast-blow glass fuse for circuit protection",
    category: "passive",
    subcategory: "fuses",
    price: 500,
    studentPrice: 425,
    image: "/images/components/glass-fuse-1a.jpg",
    inStock: true,
    stockLevel: 200,
    rating: 4.7,
    reviews: 145,
    specifications: {
      "Current": "1A",
      "Voltage": "250V",
      "Type": "Fast-blow",
      "Size": "5x20mm",
      "Breaking Capacity": "35A"
    },
    compatibility: ["Low power circuits", "Electronics", "Safety protection"],
    projects: ["Circuit protection", "Power supplies", "Electronics"],
    supplier: "",
    leadTime: "",
    tags: ["fuse", "glass", "1amp", "protection"]
  },

  {
    id: "pass-fuse-glass-3a",
    name: "Glass Fuse 3A 250V (5x20mm)",
    description: "Fast-blow glass fuse for higher current protection",
    category: "passive",
    subcategory: "fuses",
    price: 500,
    studentPrice: 425,
    image: "/images/components/glass-fuse-3a.jpg",
    inStock: true,
    stockLevel: 150,
    rating: 4.7,
    reviews: 98,
    specifications: {
      "Current": "3A",
      "Voltage": "250V",
      "Type": "Fast-blow",
      "Size": "5x20mm",
      "Breaking Capacity": "35A"
    },
    compatibility: ["Power circuits", "Motor drives", "Higher current"],
    projects: ["Power protection", "Motor circuits", "Higher power"],
    supplier: "",
    leadTime: "",
    tags: ["fuse", "glass", "3amp", "protection"]
  },

  {
    id: "conn-db9-male",
    name: "DB9 Male Connector",
    description: "9-pin D-sub male connector for serial communication",
    category: "connectors",
    subcategory: "d-sub",
    price: 2800,
    studentPrice: 2380,
    image: "/images/components/db9-male.jpg",
    inStock: true,
    stockLevel: 45,
    rating: 4.7,
    reviews: 56,
    specifications: {
      "Pins": "9",
      "Gender": "Male",
      "Mounting": "Through-hole",
      "Shell": "Metal",
      "Plating": "Nickel"
    },
    compatibility: ["RS232", "Serial communication", "Industrial"],
    projects: ["Serial interfaces", "Industrial communication", "Legacy systems"],
    supplier: "",
    leadTime: "",
    tags: ["db9", "serial", "rs232", "d-sub"]
  },

  {
    id: "conn-db9-female",
    name: "DB9 Female Connector",
    description: "9-pin D-sub female connector for serial communication",
    category: "connectors",
    subcategory: "d-sub",
    price: 2800,
    studentPrice: 2380,
    image: "/images/components/db9-female.jpg",
    inStock: true,
    stockLevel: 40,
    rating: 4.7,
    reviews: 48,
    specifications: {
      "Pins": "9",
      "Gender": "Female",
      "Mounting": "Through-hole",
      "Shell": "Metal",
      "Plating": "Nickel"
    },
    compatibility: ["RS232", "Serial communication", "Industrial"],
    projects: ["Serial interfaces", "Industrial communication", "Legacy systems"],
    supplier: "",
    leadTime: "",
    tags: ["db9", "serial", "rs232", "d-sub"]
  },

  {
    id: "ic-driver-uln2803",
    name: "ULN2803 Darlington Array",
    description: "8-channel Darlington transistor array for driving loads",
    category: "integrated-circuits",
    subcategory: "drivers",
    price: 6500,
    studentPrice: 5525,
    image: "/images/components/uln2803.jpg",
    inStock: true,
    stockLevel: 25,
    rating: 4.8,
    reviews: 67,
    specifications: {
      "Channels": "8",
      "Output Current": "500mA per channel",
      "Input Voltage": "5V TTL/CMOS",
      "Output Voltage": "50V max",
      "Package": "18-pin DIP"
    },
    compatibility: ["Relay driving", "LED arrays", "Motor control"],
    projects: ["Relay arrays", "LED displays", "Stepper motor drivers"],
    supplier: "",
    leadTime: "",
    tags: ["darlington", "driver", "array", "uln2803"]
  },

  {
    id: "ic-isolator-6n137",
    name: "6N137 High-Speed Optocoupler",
    description: "High-speed optocoupler with transistor output",
    category: "integrated-circuits",
    subcategory: "optocouplers",
    price: 8500,
    studentPrice: 7225,
    image: "/images/components/6n137.jpg",
    inStock: true,
    stockLevel: 20,
    rating: 4.7,
    reviews: 34,
    specifications: {
      "Speed": "10Mbps",
      "CTR": "19% minimum",
      "Isolation": "5000V",
      "Input": "LED",
      "Output": "Phototransistor"
    },
    compatibility: ["Digital isolation", "High-speed signals", "Safety isolation"],
    projects: ["Digital isolation", "UART isolation", "High-speed coupling"],
    supplier: "",
    leadTime: "",
    tags: ["optocoupler", "high-speed", "isolation", "6n137"]
  },

  {
    id: "ic-power-tps54531",
    name: "TPS54531 Buck Converter",
    description: "5A synchronous step-down DC-DC converter",
    category: "integrated-circuits",
    subcategory: "power-management",
    price: 15000,
    studentPrice: 12750,
    image: "/images/components/tps54531.jpg",
    inStock: true,
    stockLevel: 12,
    rating: 4.9,
    reviews: 23,
    specifications: {
      "Input Voltage": "3.5V-28V",
      "Output Current": "5A",
      "Efficiency": "95%",
      "Frequency": "570kHz",
      "Package": "HTSSOP-14"
    },
    compatibility: ["Step-down conversion", "High efficiency", "Point-of-load"],
    projects: ["DC-DC converters", "Power supplies", "Efficient regulation"],
    supplier: "",
    leadTime: "",
    tags: ["buck", "step-down", "5amp", "tps54531"]
  },

  {
    id: "pass-ferrite-bead-600ohm",
    name: "Ferrite Bead 600Ω @ 100MHz",
    description: "Through-hole ferrite bead for EMI suppression",
    category: "passive",
    subcategory: "ferrites",
    price: 800,
    studentPrice: 680,
    image: "/images/components/ferrite-bead.jpg",
    inStock: true,
    stockLevel: 150,
    rating: 4.6,
    reviews: 45,
    specifications: {
      "Impedance": "600Ω @ 100MHz",
      "DC Resistance": "0.3Ω",
      "Current Rating": "500mA",
      "Package": "Through-hole",
      "Material": "Ferrite"
    },
    compatibility: ["EMI suppression", "Power lines", "Signal lines"],
    projects: ["EMI filtering", "Power supply cleanup", "Signal conditioning"],
    supplier: "",
    leadTime: "",
    tags: ["ferrite", "bead", "emi", "filter"]
  },

  {
    id: "pass-choke-100uh",
    name: "Common Mode Choke 100µH",
    description: "Dual-winding common mode choke for differential signals",
    category: "passive",
    subcategory: "chokes",
    price: 3500,
    studentPrice: 2975,
    image: "/images/components/common-mode-choke.jpg",
    inStock: true,
    stockLevel: 35,
    rating: 4.7,
    reviews: 23,
    specifications: {
      "Inductance": "100µH",
      "Current Rating": "1A",
      "Windings": "2 (bifilar)",
      "Coupling": ">0.95",
      "Package": "Through-hole"
    },
    compatibility: ["Differential signals", "USB lines", "Communication"],
    projects: ["USB filtering", "Differential line filtering", "EMI suppression"],
    supplier: "",
    leadTime: "",
    tags: ["choke", "common-mode", "differential", "filter"]
  },

  {
    id: "ic-frequency-lm565",
    name: "LM565 Phase-Locked Loop",
    description: "General purpose phase-locked loop integrated circuit",
    category: "integrated-circuits",
    subcategory: "pll",
    price: 12000,
    studentPrice: 10200,
    image: "/images/components/lm565.jpg",
    inStock: true,
    stockLevel: 15,
    rating: 4.9,
    reviews: 18,
    specifications: {
      "Frequency Range": "0.001Hz-500kHz",
      "Supply Voltage": "±6V to ±12V",
      "Lock Range": "±60%",
      "Capture Range": "±30%",
      "Package": "14-pin DIP"
    },
    compatibility: ["Frequency synthesis", "Demodulation", "Signal recovery"],
    projects: ["FM demodulation", "Frequency synthesis", "Signal recovery"],
    supplier: "",
    leadTime: "",
    tags: ["pll", "phase-locked", "frequency", "lm565"]
  },

  {
    id: "ic-level-shifter-74lvc245",
    name: "74LVC245 Octal Bus Transceiver",
    description: "8-bit bidirectional level shifter with 3-state outputs",
    category: "integrated-circuits",
    subcategory: "level-shifters",
    price: 4500,
    studentPrice: 3825,
    image: "/images/components/74lvc245.jpg",
    inStock: true,
    stockLevel: 25,
    rating: 4.7,
    reviews: 28,
    specifications: {
      "Channels": "8",
      "Direction": "Bidirectional",
      "Voltage": "1.65V-5.5V",
      "Output": "3-state",
      "Package": "20-pin DIP"
    },
    compatibility: ["Level shifting", "Bus interfaces", "Mixed voltage"],
    projects: ["Level translation", "Bus buffers", "Mixed voltage systems"],
    supplier: "",
    leadTime: "",
    tags: ["level-shifter", "bidirectional", "bus", "74lvc245"]
  },

  {
    id: "ic-reference-lm336-2.5",
    name: "LM336-2.5V Voltage Reference",
    description: "Precision 2.5V voltage reference diode",
    category: "integrated-circuits",
    subcategory: "references",
    price: 4500,
    studentPrice: 3825,
    image: "/images/components/lm336.jpg",
    inStock: true,
    stockLevel: 25,
    rating: 4.8,
    reviews: 23,
    specifications: {
      "Reference Voltage": "2.5V",
      "Accuracy": "±0.4%",
      "Temperature Coefficient": "20ppm/°C",
      "Current Range": "0.4mA-10mA",
      "Package": "TO-92"
    },
    compatibility: ["Voltage reference", "ADC reference", "Precision circuits"],
    projects: ["Voltage references", "ADC calibration", "Precision measurements"],
    supplier: "",
    leadTime: "",
    tags: ["reference", "voltage", "precision", "lm336"]
  }
]

// Final 5 components to reach exactly 269
const final5Components: ElectronicComponent[] = [
  {
    id: "ic-analog-switch-cd4066",
    name: "CD4066 Quad Bilateral Switch",
    description: "CMOS quad bilateral switch for analog signal routing",
    category: "integrated-circuits",
    subcategory: "analog-switches",
    price: 3500,
    studentPrice: 2975,
    image: "/images/components/cd4066.jpg",
    inStock: true,
    stockLevel: 30,
    rating: 4.8,
    reviews: 42,
    specifications: {
      "Switches": "4 bidirectional",
      "On Resistance": "80Ω typical",
      "Supply Voltage": "3V-18V",
      "Control": "Digital CMOS",
      "Package": "14-pin DIP"
    },
    compatibility: ["Analog switching", "Signal routing", "Audio applications"],
    projects: ["Audio mixers", "Signal routing", "Analog multiplexers"],
    supplier: "",
    leadTime: "",
    tags: ["analog-switch", "bilateral", "cd4066", "cmos"]
  },

  {
    id: "ic-counter-cd4017",
    name: "CD4017 Decade Counter",
    description: "CMOS decade counter with 10 decoded outputs",
    category: "integrated-circuits",
    subcategory: "counters",
    price: 4500,
    studentPrice: 3825,
    image: "/images/components/cd4017.jpg",
    inStock: true,
    stockLevel: 25,
    rating: 4.9,
    reviews: 78,
    specifications: {
      "Outputs": "10 decoded",
      "Clock Input": "Positive edge triggered",
      "Supply Voltage": "3V-18V",
      "Reset": "Active high",
      "Package": "16-pin DIP"
    },
    compatibility: ["LED sequencing", "Timing circuits", "Sequential logic"],
    projects: ["LED chasers", "Sequential circuits", "Timing applications"],
    supplier: "",
    leadTime: "",
    tags: ["counter", "decade", "cd4017", "sequential"]
  },

  {
    id: "ic-memory-74hc373",
    name: "74HC373 Octal Latch",
    description: "Octal D-type transparent latch with 3-state outputs",
    category: "integrated-circuits",
    subcategory: "latches",
    price: 3800,
    studentPrice: 3230,
    image: "/images/components/74hc373.jpg",
    inStock: true,
    stockLevel: 20,
    rating: 4.7,
    reviews: 34,
    specifications: {
      "Latches": "8",
      "Type": "D-type transparent",
      "Outputs": "3-state",
      "Supply Voltage": "2V-6V",
      "Package": "20-pin DIP"
    },
    compatibility: ["Data storage", "Bus interfaces", "Memory applications"],
    projects: ["Data latching", "Bus systems", "Memory interfaces"],
    supplier: "",
    leadTime: "",
    tags: ["latch", "octal", "74hc373", "3-state"]
  },

  {
    id: "ic-multiplexer-74hc4051",
    name: "74HC4051 8-Channel Analog Multiplexer",
    description: "Single 8-channel analog multiplexer/demultiplexer",
    category: "integrated-circuits",
    subcategory: "multiplexers",
    price: 5500,
    studentPrice: 4675,
    image: "/images/components/74hc4051.jpg",
    inStock: true,
    stockLevel: 18,
    rating: 4.8,
    reviews: 28,
    specifications: {
      "Channels": "8",
      "Type": "Analog multiplexer",
      "On Resistance": "80Ω",
      "Supply Voltage": "2V-10V",
      "Package": "16-pin DIP"
    },
    compatibility: ["Analog switching", "Sensor multiplexing", "Data acquisition"],
    projects: ["Sensor multiplexing", "Analog switching", "Data acquisition"],
    supplier: "",
    leadTime: "",
    tags: ["multiplexer", "analog", "74hc4051", "8-channel"]
  },

  {
    id: "ic-comparator-lm393",
    name: "LM393 Dual Comparator",
    description: "Dual differential comparator with open collector output",
    category: "integrated-circuits",
    subcategory: "comparators",
    price: 2800,
    studentPrice: 2380,
    image: "/images/components/lm393.jpg",
    inStock: true,
    stockLevel: 35,
    rating: 4.9,
    reviews: 56,
    specifications: {
      "Comparators": "2",
      "Output": "Open collector",
      "Supply Voltage": "2V-36V",
      "Input Offset": "±2mV",
      "Package": "8-pin DIP"
    },
    compatibility: ["Voltage comparison", "Window comparator", "Level detection"],
    projects: ["Voltage monitoring", "Level detection", "Window comparators"],
    supplier: "",
    leadTime: "",
    tags: ["comparator", "dual", "lm393", "open-collector"]
  }
];

// Merge all data including the massive expansion
export const allElectronicsData: ElectronicComponent[] = [
  ...passiveComponents,
  ...newSemiconductorData,
  ...semiconductorData,
  ...integratedCircuitsData,
  ...newIntegratedCircuitsData,
  ...optoelectronicsData,
  ...massivePassiveComponents,
  ...transistorsAndRegulators,
  ...connectorComponents,
  ...specialtyICs,
  ...advancedICs,
  ...advancedCapacitors,
  ...advancedDiodes,
  ...sensorComponents,
  ...timingComponents,
  ...inductiveComponents,
  ...isolationComponents,
  ...audioICs,
  ...powerManagementICs,
  ...displayICs,
  ...communicationICs,
  ...specializedComponents,
  ...moreConnectors,
  ...finalComponents,
  ...final5Components,  // Add the previously missing arrays
  ...electromechanicalData,
  ...connectorsData,
  ...sensorsData,
  ...displayComponents,
  ...enhancedSemiconductorData,
  ...additionalSensorsData,
  ...electromechanicalComponents,
  ...powerComponents
];

// Export with products property for backward compatibility
export const electronicsData = {
  products: allElectronicsData
}

// Updated category definitions for filtering
export const categories = [
  { 
    id: "passive", 
    name: "Passive Components", 
    count: passiveComponents.length 
  },
  { 
    id: "semiconductors", 
    name: "Semiconductors", 
    count: semiconductorData.length + newSemiconductorData.length
  },
  { 
    id: "integrated-circuits", 
    name: "Integrated Circuits", 
    count: integratedCircuitsData.length + newIntegratedCircuitsData.length
  },
  { 
    id: "optoelectronics", 
    name: "Optoelectronics & Display", 
    count: optoelectronicsData.length 
  }
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
  { id: "mosfets", name: "MOSFETs", category: "semiconductors" },
  { id: "voltage-regulators", name: "Voltage Regulators", category: "semiconductors" },
  
  // Integrated Circuits
  { id: "timers", name: "Timers", category: "integrated-circuits" },
  { id: "op-amps", name: "Op-Amps", category: "integrated-circuits" },
  { id: "logic-gates", name: "Logic Gates", category: "integrated-circuits" },
  { id: "motor-drivers", name: "Motor Drivers", category: "integrated-circuits" },
  { id: "microcontrollers", name: "Microcontrollers", category: "integrated-circuits" },
  { id: "shift-registers", name: "Shift Registers", category: "integrated-circuits" },
  { id: "memory", name: "Memory", category: "integrated-circuits" },
  
  // Optoelectronics
  { id: "displays", name: "Displays", category: "optoelectronics" },
  { id: "optocouplers", name: "Optocouplers", category: "optoelectronics" },
  { id: "infrared", name: "Infrared", category: "optoelectronics" }
]

// Updated price ranges
export const priceRanges = [
  { id: "under-5k", name: "Under 5,000 UGX", min: 0, max: 5000 },
  { id: "5k-15k", name: "5,000 - 15,000 UGX", min: 5000, max: 15000 },
  { id: "15k-30k", name: "15,000 - 30,000 UGX", min: 15000, max: 30000 },
  { id: "30k-50k", name: "30,000 - 50,000 UGX", min: 30000, max: 50000 },
  { id: "over-50k", name: "Over 50,000 UGX", min: 50000, max: Infinity }
] 

// Export subcategories for filtering
export const electronicsSubcategories = [
  "Passive Components",
  "Semiconductors", 
  "Integrated Circuits",
  "Optoelectronics & Display"
]

// Placeholder arrays for compatibility with unified-products.ts
export const microcontrollerExtensions: ElectronicComponent[] = []
export const devBoardExtensions: ElectronicComponent[] = []
