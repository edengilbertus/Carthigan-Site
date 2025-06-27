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
    id: "conn-002",
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
    id: "conn-header-male",
    name: "Male Header Pins (40-pin strip)",
    description: "2.54mm pitch male header pins for breadboard connections",
    category: "connectors",
    subcategory: "headers",
    price: 2500,
    studentPrice: 2125,
    image: "/images/components/male-header-40pin.jpg",
    inStock: true,
    stockLevel: 200,
    rating: 4.6,
    reviews: 89,
    overview: {
      type: "Male Pin Header Connector",
      keySpecs: "40 pins, 2.54mm (0.1 inch) pitch, gold-plated contacts, plastic housing",
      applications: "Arduino shields, breadboard connections, PCB connectors, prototype boards",
      keyFeatures: "Break-away design, standard 0.1 inch spacing, reliable electrical contact",
      bestFor: "Creating custom connections between boards, modules, and breadboards"
    },
    specifications: {
      "Pin Count": "40",
      "Pitch": "2.54mm (0.1 inch)",
      "Material": "Gold-plated brass",
      "Housing": "Black plastic",
      "Current Rating": "3A per pin"
    },
    compatibility: ["Arduino", "Breadboards", "PCB", "Prototype boards"],
    projects: ["Arduino Projects", "PCB Prototyping", "Custom Connectors"],
    supplier: "Neriko Electronics",
    leadTime: "In Stock",
    tags: ["header", "male", "connector", "breadboard"]
  },
  {
    id: "conn-header-female",
    name: "Female Header Sockets (40-pin strip)",
    description: "2.54mm pitch female header sockets for module connections",
    category: "connectors",
    subcategory: "headers",
    price: 3200,
    studentPrice: 2720,
    image: "/images/components/female-header-40pin.jpg",
    inStock: true,
    stockLevel: 180,
    rating: 4.7,
    reviews: 94,
    overview: {
      type: "Female Socket Header Connector",
      keySpecs: "40 sockets, 2.54mm pitch, phosphor bronze contacts, black housing",
      applications: "Arduino connections, module sockets, shield interfaces, stackable headers",
      keyFeatures: "Secure grip on male pins, break-away sections, low contact resistance",
      bestFor: "Creating sockets for removable modules and Arduino-style connections"
    },
    specifications: {
      "Socket Count": "40",
      "Pitch": "2.54mm",
      "Contact Material": "Phosphor bronze",
      "Housing": "Black plastic",
      "Insertion Force": "Medium"
    },
    compatibility: ["Arduino", "Modules", "Shields", "Stackable headers"],
    projects: ["Arduino Shields", "Module Sockets", "Stackable Systems"],
    supplier: "TechHub Kampala",
    leadTime: "In Stock",
    tags: ["header", "female", "socket", "arduino"]
  },
  {
    id: "conn-jumper-mm",
    name: "Jumper Wires Male-to-Male (40pcs)",
    description: "Flexible connection wires for breadboard prototyping",
    category: "connectors",
    subcategory: "jumpers",
    price: 8500,
    studentPrice: 7225,
    image: "/images/components/jumper-wires-mm.jpg",
    inStock: true,
    stockLevel: 75,
    rating: 4.5,
    reviews: 156,
    overview: {
      type: "Flexible Connection Wires",
      keySpecs: "40 pieces, 20cm length, male pins both ends, multiple colors",
      applications: "Breadboard prototyping, Arduino connections, sensor wiring, circuit testing",
      keyFeatures: "Color-coded for easy identification, flexible wire, reliable connections",
      bestFor: "Quick prototyping and connecting components without soldering"
    },
    specifications: {
      "Quantity": "40 pieces",
      "Length": "20cm",
      "Wire Gauge": "26AWG",
      "Connector Type": "Male-to-Male",
      "Colors": "10 colors"
    },
    compatibility: ["Breadboards", "Arduino", "All development boards"],
    projects: ["Breadboard Prototyping", "Arduino Projects", "Circuit Testing"],
    supplier: "Jumia Uganda",
    leadTime: "In Stock",
    tags: ["jumper", "wires", "breadboard", "prototyping"]
  }
];

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

// Merge all data
export const allElectronicsData: ElectronicComponent[] = [
  ...passiveComponents,
  ...displayComponents,
  ...semiconductorData,
  ...sensorsData,
  ...additionalSensorsData,
  ...electromechanicalComponents,
  ...powerComponents,
  ...connectorComponents,
  ...specialtyICs
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
    count: semiconductorData.length 
  },
  { 
    id: "integrated-circuits", 
    name: "Integrated Circuits", 
    count: integratedCircuitsData.length 
  },
  { 
    id: "optoelectronics", 
    name: "Optoelectronics & Display", 
    count: optoelectronicsData.length 
  },
  { 
    id: "electromechanical", 
    name: "Electromechanical", 
    count: electromechanicalData.length 
  },
  { 
    id: "sensors", 
    name: "Sensors & Modules", 
    count: sensorsData.length 
  },
  { 
    id: "connectors", 
    name: "Connectors & Accessories", 
    count: connectorsData.length 
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
  { id: "infrared", name: "Infrared", category: "optoelectronics" },
  
  // Electromechanical
  { id: "relays", name: "Relays", category: "electromechanical" },
  { id: "switches", name: "Switches", category: "electromechanical" },
  { id: "audio", name: "Audio Components", category: "electromechanical" },
  { id: "motors", name: "Motors", category: "electromechanical" },
  
  // Sensors & Modules
  { id: "distance", name: "Distance Sensors", category: "sensors" },
  { id: "motion", name: "Motion Sensors", category: "sensors" },
  { id: "environmental", name: "Environmental", category: "sensors" },
  { id: "gas", name: "Gas/Smoke Sensors", category: "sensors" },
  { id: "electrical", name: "Electrical Sensors", category: "sensors" },
  { id: "communication", name: "Communication Modules", category: "sensors" },
  
  // Connectors
  { id: "headers", name: "Pin Headers", category: "connectors" },
  { id: "sockets", name: "IC Sockets", category: "connectors" },
  { id: "wires", name: "Jumper Wires", category: "connectors" }
]

// Updated price ranges
export const priceRanges = [
  { id: "under-5k", name: "Under 5,000 UGX", min: 0, max: 5000 },
  { id: "5k-15k", name: "5,000 - 15,000 UGX", min: 5000, max: 15000 },
  { id: "15k-30k", name: "15,000 - 30,000 UGX", min: 15000, max: 30000 },
  { id: "30k-50k", name: "30,000 - 50,000 UGX", min: 30000, max: 50000 },
  { id: "over-50k", name: "Over 50,000 UGX", min: 50000, max: Infinity }
] 