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
    description: "Simple, reliable linear regulator providing a steady +5V supply from higher input voltages",
    category: "power-components",
    subcategory: "voltage-regulators",
    price: 2000,
    studentPrice: 1700,
    image: "/images/power/7805-regulator.jpg",
    inStock: true,
    stockLevel: 150,
    rating: 4.7,
    reviews: 324,
    overview: {
      type: "Linear Voltage Regulator",
      keySpecs: "5V Output, ~1A Max Output Current, TO-220 Package",
      applications: "Powering 5V logic, breadboard power supplies, on-board voltage regulation",
      keyFeatures: "Fixed 5V output, thermal protection, stable regulation, wide input range",
      bestFor: "Powering 5V logic, breadboard power supplies, on-board voltage regulation"
    },
    specifications: {
      "Output Voltage": "5V ±4%",
      "Maximum Output Current": "1A",
      "Input Voltage Range": "7V-25V",
      "Package": "TO-220",
      "Operating Temperature": "0°C to +125°C",
      "Dropout Voltage": "2V typical"
    },
    compatibility: ["5V Logic", "Arduino", "Breadboards", "Digital Circuits"],
    projects: ["Arduino power supplies", "5V breadboard rails", "Digital logic circuits", "LED drivers"],
    supplier: "Linear regulators distributor",
    leadTime: "1-2 days",
    tags: ["voltage-regulator", "5v", "linear", "to-220", "logic"],
    proTip: "Always place a 100nF ceramic capacitor on both the input and output pins to ground for stability. A larger electrolytic capacitor on the input is also recommended."
  },

  {
    id: "power-reg-7812",
    name: "7812 Fixed 12V Positive Voltage Regulator",
    description: "Fixed linear voltage regulator providing a steady +12V output for motors and industrial applications",
    category: "power-components",
    subcategory: "voltage-regulators",
    price: 2500,
    studentPrice: 2125,
    image: "/images/power/7812-regulator.jpg",
    inStock: true,
    stockLevel: 120,
    rating: 4.6,
    reviews: 198,
    overview: {
      type: "Linear Voltage Regulator",
      keySpecs: "12V Output, ~1A Max Output Current, TO-220 Package",
      applications: "Driving 12V motors and LED strips, automotive projects, industrial control circuits",
      keyFeatures: "Fixed 12V output, thermal protection, robust construction, automotive compatibility",
      bestFor: "Driving 12V motors and LED strips, automotive projects, industrial control circuits"
    },
    specifications: {
      "Output Voltage": "12V ±4%",
      "Maximum Output Current": "1A",
      "Input Voltage Range": "14V-27V",
      "Package": "TO-220",
      "Operating Temperature": "-40°C to +125°C",
      "Dropout Voltage": "2V typical"
    },
    compatibility: ["12V Motors", "LED Strips", "Automotive", "Industrial"],
    projects: ["12V motor drivers", "LED strip power", "Automotive accessories", "Industrial controls"],
    supplier: "Linear regulators distributor",
    leadTime: "2-3 days",
    tags: ["voltage-regulator", "12v", "linear", "to-220", "automotive"],
    proTip: "This regulator will get hot when dropping a large voltage difference (e.g., 24V in, 12V out). Always mount it to a metal heatsink for such applications."
  },

  {
    id: "power-reg-lm317",
    name: "LM317 Adjustable Positive Voltage Regulator",
    description: "Versatile adjustable positive voltage regulator with output from 1.25V to 37V",
    category: "power-components",
    subcategory: "voltage-regulators",
    price: 3500,
    studentPrice: 2975,
    image: "/images/power/lm317-regulator.jpg",
    inStock: true,
    stockLevel: 85,
    rating: 4.9,
    reviews: 267,
    overview: {
      type: "Adjustable Linear Voltage Regulator",
      keySpecs: "1.25V to 37V Adjustable Output, ~1.5A Max Current",
      applications: "Custom power supplies, variable voltage circuits",
      keyFeatures: "Adjustable output via resistor divider, thermal protection, current limiting",
      bestFor: "Building custom voltage power supplies, variable voltage circuits, lab projects"
    },
    specifications: {
      "Output Voltage Range": "1.25V-37V",
      "Maximum Output Current": "1.5A",
      "Input Voltage Range": "3V-40V",
      "Package": "TO-220",
      "Line Regulation": "0.01%/V typical",
      "Load Regulation": "0.1% typical"
    },
    compatibility: ["Custom PSU", "Lab Equipment", "Variable Supplies", "Adjustable Circuits"],
    projects: ["Variable power supplies", "Bench supplies", "Custom voltage rails", "Precision references"],
    supplier: "Linear regulators distributor",
    leadTime: "2-3 days",
    tags: ["voltage-regulator", "adjustable", "variable", "lm317", "lab"],
    proTip: "Use an online LM317 calculator to easily find the correct resistor values for your desired output voltage."
  },

  {
    id: "power-reg-lm1117-33",
    name: "LM1117T-3.3 LDO Voltage Regulator",
    description: "Low-Dropout linear voltage regulator providing fixed 3.3V output",
    category: "power-components",
    subcategory: "voltage-regulators",
    price: 2800,
    studentPrice: 2380,
    image: "/images/power/lm1117-regulator.jpg",
    inStock: true,
    stockLevel: 95,
    rating: 4.8,
    reviews: 189,
    overview: {
      type: "Low-Dropout Linear Voltage Regulator",
      keySpecs: "3.3V Output, 800mA Max Current, Low Dropout Voltage (~1.2V)",
      applications: "3.3V microcontrollers, battery-powered applications",
      keyFeatures: "Low dropout voltage, thermal protection, stable output",
      bestFor: "Powering modern 3.3V microcontrollers, battery-powered applications"
    },
    specifications: {
      "Output Voltage": "3.3V ±2%",
      "Maximum Output Current": "800mA",
      "Dropout Voltage": "1.2V @ 800mA",
      "Package": "SOT-223",
      "Operating Temperature": "-40°C to +125°C",
      "Quiescent Current": "5mA typical"
    },
    compatibility: ["ESP32", "ESP8266", "3.3V MCU", "LiPo Battery"],
    projects: ["ESP32 projects", "Battery-powered sensors", "3.3V logic circuits", "IoT devices"],
    supplier: "LDO regulators distributor",
    leadTime: "1-2 days",
    tags: ["ldo", "3.3v", "low-dropout", "esp32", "battery"]
  },

  {
    id: "power-reg-7905",
    name: "7905 Fixed -5V Negative Voltage Regulator",
    description: "Regulated negative voltage regulator providing -5V for dual-rail supplies",
    category: "power-components",
    subcategory: "voltage-regulators",
    price: 3200,
    studentPrice: 2720,
    image: "/images/power/7905-regulator.jpg",
    inStock: true,
    stockLevel: 45,
    rating: 4.6,
    reviews: 87,
    overview: {
      type: "Linear Negative Voltage Regulator",
      keySpecs: "-5V Output, ~1A Max Current, TO-220 Package",
      applications: "Dual-supply op-amps, analog audio circuits",
      keyFeatures: "Fixed -5V output, thermal protection, dual-rail supplies",
      bestFor: "Dual-supply power for op-amps, analog audio circuits, scientific instruments"
    },
    specifications: {
      "Output Voltage": "-5V ±4%",
      "Maximum Output Current": "1A",
      "Input Voltage Range": "-7V to -25V",
      "Package": "TO-220",
      "Operating Temperature": "-40°C to +125°C",
      "Dropout Voltage": "2V typical"
    },
    compatibility: ["Op-Amps", "Analog Circuits", "Audio Equipment", "Dual-Rail PSU"],
    projects: ["Op-amp circuits", "Audio amplifiers", "Analog signal processing", "Lab instruments"],
    supplier: "Linear regulators distributor",
    leadTime: "3-5 days",
    tags: ["voltage-regulator", "negative", "-5v", "dual-rail", "analog"]
  }
];

// Category 2: Power Conversion ICs & Modules
const powerConversion: PowerComponent[] = [
  {
    id: "power-conv-lm2596",
    name: "LM2596 Buck Converter Module (Step-Down)",
    description: "Highly efficient switching power supply module for stepping down voltage",
    category: "power-components",
    subcategory: "power-conversion",
    price: 9500,
    studentPrice: 8075,
    image: "/images/power/lm2596-buck.jpg",
    inStock: true,
    stockLevel: 78,
    rating: 4.8,
    reviews: 445,
    overview: {
      type: "DC-DC Buck Converter",
      keySpecs: "DC-DC Step-Down, adjustable output (1.25V-30V), ~2A output current",
      applications: "Efficiently creating a lower voltage, powering 5V devices from a 12V or 24V source",
      keyFeatures: "High efficiency switching conversion, adjustable output, thermal protection",
      bestFor: "Efficiently creating a lower voltage, powering 5V devices from a 12V or 24V source"
    },
    specifications: {
      "Input Voltage": "4V-40V",
      "Output Voltage": "1.25V-37V (adjustable)",
      "Output Current": "2A max",
      "Efficiency": "Up to 92%",
      "Switching Frequency": "150kHz",
      "Package": "Module with inductor"
    },
    compatibility: ["12V Systems", "24V Systems", "Automotive", "Solar Systems"],
    projects: ["12V to 5V conversion", "Battery voltage regulation", "Automotive electronics", "Solar charge controllers"],
    supplier: "Switching converter distributors",
    leadTime: "2-4 days",
    tags: ["buck-converter", "step-down", "switching", "efficient", "adjustable"],
    proTip: "Unlike linear regulators, switching converters are highly efficient and produce very little heat, often eliminating the need for a heatsink."
  },

  {
    id: "power-conv-xl6009",
    name: "XL6009 Boost Converter Module (Step-Up)",
    description: "Step-up converter taking lower input voltage to higher stable output",
    category: "power-components",
    subcategory: "power-conversion",
    price: 11500,
    studentPrice: 9775,
    image: "/images/power/xl6009-boost.jpg",
    inStock: true,
    stockLevel: 52,
    rating: 4.7,
    reviews: 298,
    overview: {
      type: "DC-DC Boost Converter",
      keySpecs: "DC-DC Step-Up, adjustable output (5V-35V), ~2A output current",
      applications: "Creating higher voltage from lower voltage source",
      keyFeatures: "High efficiency boost conversion, adjustable output, protection circuits",
      bestFor: "Creating a higher voltage from a lower voltage source, battery-powered projects that need to drive 12V components"
    },
    specifications: {
      "Input Voltage": "3V-32V",
      "Output Voltage": "5V-35V (adjustable)",
      "Output Current": "2A max",
      "Efficiency": "Up to 94%",
      "Switching Frequency": "400kHz",
      "Package": "Module with inductor"
    },
    compatibility: ["Li-ion Batteries", "USB Power", "Solar Cells", "Low Voltage Sources"],
    projects: ["USB to 12V conversion", "Battery voltage boosting", "Solar panel systems", "LED strip drivers"],
    supplier: "Switching converter distributors",
    leadTime: "3-5 days",
    tags: ["boost-converter", "step-up", "switching", "battery", "usb"]
  },

  {
    id: "power-conv-tp4056",
    name: "TP4056 Li-ion Battery Charger Module",
    description: "Single-cell lithium battery charging module with protection",
    category: "power-components",
    subcategory: "power-conversion",
    price: 5000,
    studentPrice: 4250,
    image: "/images/power/tp4056-charger.jpg",
    inStock: true,
    stockLevel: 125,
    rating: 4.8,
    reviews: 567,
    overview: {
      type: "Li-ion Battery Charger",
      keySpecs: "Micro USB input, 1A charge current, integrated protection circuit",
      applications: "Charging single-cell Li-ion or LiPo batteries",
      keyFeatures: "USB charging, protection circuits, status LEDs, compact design",
      bestFor: "Charging single-cell Li-ion or LiPo batteries for any portable project"
    },
    specifications: {
      "Input Voltage": "4V-8V (Micro USB 5V)",
      "Charge Current": "1A (adjustable)",
      "Battery Type": "Single-cell Li-ion/LiPo",
      "Protection": "Over-charge, over-discharge, short-circuit",
      "Status Indicators": "Charging/Done LEDs",
      "Dimensions": "26mm x 17mm"
    },
    compatibility: ["18650 Batteries", "LiPo Batteries", "3.7V Li-ion", "Portable Projects"],
    projects: ["Power banks", "Portable devices", "IoT sensors", "Drone batteries"],
    supplier: "Battery management distributors",
    leadTime: "1-3 days",
    tags: ["battery-charger", "li-ion", "usb", "protection", "portable"],
    proTip: "Solder your battery to the B+ and B- pads, and connect your project's load to the OUT+ and OUT- pads. This allows the protection circuit to manage the battery correctly."
  },

  {
    id: "power-conv-bms-3s",
    name: "3S 20A Li-ion BMS Module",
    description: "Battery Management System for 3-cell lithium-ion battery packs",
    category: "power-components",
    subcategory: "power-conversion",
    price: 24500,
    studentPrice: 20825,
    image: "/images/power/3s-bms.jpg",
    inStock: true,
    stockLevel: 28,
    rating: 4.9,
    reviews: 156,
    overview: {
      type: "Battery Management System",
      keySpecs: "For 3-cell (11.1V/12.6V) Li-ion packs, 20A max continuous current",
      applications: "Multi-cell battery pack management and protection",
      keyFeatures: "Cell balancing, over-charge protection, over-discharge protection, temperature monitoring",
      bestFor: "Building custom 12V battery packs for drills, e-bikes, and robotics"
    },
    specifications: {
      "Battery Configuration": "3S (3 cells in series)",
      "Nominal Voltage": "11.1V (12.6V max)",
      "Continuous Current": "20A",
      "Over-voltage Protection": "4.25V ±0.05V per cell",
      "Under-voltage Protection": "2.4V ±0.1V per cell",
      "Balance Current": "60mA per cell"
    },
    compatibility: ["18650 Packs", "Li-ion Battery Packs", "E-bike Batteries", "Power Tools"],
    projects: ["Custom battery packs", "E-bike batteries", "Power tool batteries", "Energy storage"],
    supplier: "Battery management specialists",
    leadTime: "5-7 days",
    tags: ["bms", "battery-management", "3s", "protection", "balancing"]
  }
];

// Category 3: Power Transistors & MOSFETs
const powerSemiconductors: PowerComponent[] = [
  {
    id: "power-semi-tip120",
    name: "TIP120 NPN Darlington Power Transistor",
    description: "High-current gain Darlington transistor for controlling large loads",
    category: "power-components",
    subcategory: "power-semiconductors",
    price: 4000,
    studentPrice: 3400,
    image: "/images/power/tip120-transistor.jpg",
    inStock: true,
    stockLevel: 89,
    rating: 4.7,
    reviews: 234,
    overview: {
      type: "NPN Darlington Power Transistor",
      keySpecs: "NPN Darlington, 60V Max VCE, 5A Max Collector Current",
      applications: "High-current load control, motor speed control",
      keyFeatures: "Very high current gain, TO-220 package, built-in protection diodes",
      bestFor: "High-current DC load control, motor speed control (PWM), and power switching"
    },
    specifications: {
      "Collector-Emitter Voltage": "60V max",
      "Collector Current": "5A max",
      "Current Gain": "1000 min",
      "Power Dissipation": "65W",
      "Package": "TO-220",
      "Saturation Voltage": "1.2V typical"
    },
    compatibility: ["Arduino", "Microcontrollers", "Motor Control", "PWM Circuits"],
    projects: ["Motor speed control", "Solenoid drivers", "Relay drivers", "High-current switches"],
    supplier: "Power semiconductor distributors",
    leadTime: "2-3 days",
    tags: ["darlington", "transistor", "high-current", "motor-control", "power"],
    proTip: "While easy to drive, Darlington transistors have a higher voltage drop (~1.2V-2V) than MOSFETs, so they will generate more heat for the same amount of current."
  },

  {
    id: "power-semi-irf540n",
    name: "IRF540N N-Channel Power MOSFET",
    description: "High-power MOSFET switch for efficient high-current control",
    category: "power-components",
    subcategory: "power-semiconductors",
    price: 4800,
    studentPrice: 4080,
    image: "/images/power/irf540n-mosfet.jpg",
    inStock: true,
    stockLevel: 76,
    rating: 4.8,
    reviews: 387,
    overview: {
      type: "N-Channel Power MOSFET",
      keySpecs: "N-Channel MOSFET, 100V Max VDS, ~33A Max Drain Current, Low Rds(on)",
      applications: "High-power switching, PWM control, power inverters",
      keyFeatures: "Very low on-resistance, high switching speed, TO-220 package",
      bestFor: "High-power PWM speed control, solenoid drivers, power inverters, and automotive switching"
    },
    specifications: {
      "Drain-Source Voltage": "100V max",
      "Drain Current": "33A max",
      "Gate-Source Voltage": "±20V",
      "On-Resistance": "44mΩ max",
      "Package": "TO-220",
      "Gate Threshold": "2V-4V"
    },
    compatibility: ["High Voltage", "Power Inverters", "Motor Control", "Automotive"],
    projects: ["Power inverters", "Motor controllers", "High-power LED drivers", "Switching supplies"],
    supplier: "Power semiconductor distributors",
    leadTime: "2-4 days",
    tags: ["mosfet", "high-power", "switching", "inverter", "automotive"],
    proTip: "MOSFET gates are sensitive to static electricity. Always handle them with care or use an ESD wrist strap."
  },

  {
    id: "power-semi-irfz44n",
    name: "IRFZ44N Logic-Level N-Channel Power MOSFET",
    description: "Logic-level MOSFET that can be driven directly by 5V microcontrollers",
    category: "power-components",
    subcategory: "power-semiconductors",
    price: 4500,
    studentPrice: 3825,
    image: "/images/power/irfz44n-mosfet.jpg",
    inStock: true,
    stockLevel: 94,
    rating: 4.9,
    reviews: 521,
    overview: {
      type: "Logic-Level N-Channel Power MOSFET",
      keySpecs: "Logic-Level N-Channel MOSFET, 55V Max VDS, ~49A Max Drain Current",
      applications: "Direct microcontroller interfacing, high-current switching",
      keyFeatures: "Logic-level gate (5V compatible), very low on-resistance, high current capability",
      bestFor: "Interfacing high-current loads (like large motors or LED strips) directly with Arduino or other 5V microcontrollers"
    },
    specifications: {
      "Drain-Source Voltage": "55V max",
      "Drain Current": "49A max",
      "Gate-Source Voltage": "±20V",
      "On-Resistance": "17.5mΩ max @ Vgs=10V",
      "Gate Threshold": "2V-4V",
      "Package": "TO-220"
    },
    compatibility: ["Arduino", "5V Logic", "ESP32", "Microcontrollers"],
    projects: ["Arduino motor control", "LED strip drivers", "High-current switches", "Robotics"],
    supplier: "Power semiconductor distributors",
    leadTime: "1-3 days",
    tags: ["mosfet", "logic-level", "arduino", "high-current", "5v"]
  }
];

// Category 4: Power Diodes & Rectifiers
const powerDiodes: PowerComponent[] = [
  {
    id: "power-diode-1n4007",
    name: "1N4007 Rectifier Diode",
    description: "General purpose high-voltage rectifier diode for AC-DC conversion",
    category: "power-components",
    subcategory: "power-diodes",
    price: 600,
    studentPrice: 510,
    image: "/images/power/1n4007-diode.jpg",
    inStock: true,
    stockLevel: 500,
    rating: 4.6,
    reviews: 189,
    overview: {
      type: "Silicon Rectifier Diode",
      keySpecs: "1000V Reverse Voltage, 1A Forward Current",
      applications: "AC-DC rectification, reverse polarity protection",
      keyFeatures: "High voltage rating, robust construction, low cost",
      bestFor: "Power rectification, reverse polarity protection, flyback suppression in relay circuits"
    },
    specifications: {
      "Peak Inverse Voltage": "1000V",
      "Average Forward Current": "1A",
      "Forward Voltage Drop": "1.1V @ 1A",
      "Reverse Current": "5µA @ 1000V",
      "Package": "DO-41",
      "Operating Temperature": "-65°C to +175°C"
    },
    compatibility: ["AC-DC Supplies", "Protection Circuits", "Rectifiers", "General Purpose"],
    projects: ["AC-DC power supplies", "Reverse protection", "Relay flyback protection", "Rectifier bridges"],
    supplier: "Diode distributors",
    leadTime: "1-2 days",
    tags: ["diode", "rectifier", "1000v", "protection", "ac-dc"]
  },

  {
    id: "power-diode-1n5408",
    name: "1N5408 High Current Rectifier Diode",
    description: "High-current rectifier diode for power supply applications",
    category: "power-components",
    subcategory: "power-diodes",
    price: 900,
    studentPrice: 765,
    image: "/images/power/1n5408-diode.jpg",
    inStock: true,
    stockLevel: 280,
    rating: 4.7,
    reviews: 156,
    overview: {
      type: "High Current Silicon Rectifier Diode",
      keySpecs: "1000V Reverse Voltage, 3A Forward Current",
      applications: "Higher-power rectification, battery chargers",
      keyFeatures: "High current capability, robust package, excellent thermal characteristics",
      bestFor: "Higher-power DC power supplies, automotive applications, battery chargers"
    },
    specifications: {
      "Peak Inverse Voltage": "1000V",
      "Average Forward Current": "3A",
      "Forward Voltage Drop": "1.2V @ 3A",
      "Reverse Current": "10µA @ 1000V",
      "Package": "DO-201AD",
      "Operating Temperature": "-65°C to +175°C"
    },
    compatibility: ["High-Power PSU", "Battery Chargers", "Automotive", "Industrial"],
    projects: ["High-power supplies", "Battery charging systems", "Automotive electronics", "Industrial rectifiers"],
    supplier: "Power diode distributors",
    leadTime: "2-3 days",
    tags: ["diode", "high-current", "3amp", "power-supply", "automotive"]
  },

  {
    id: "power-diode-1n5819",
    name: "1N5819 Schottky Diode",
    description: "Low forward voltage drop Schottky diode for high-efficiency applications",
    category: "power-components",
    subcategory: "power-diodes",
    price: 750,
    studentPrice: 638,
    image: "/images/power/1n5819-schottky.jpg",
    inStock: true,
    stockLevel: 340,
    rating: 4.8,
    reviews: 278,
    overview: {
      type: "Schottky Barrier Diode",
      keySpecs: "40V Reverse Voltage, 1A Forward Current, Low Forward Voltage Drop",
      applications: "High-efficiency rectification, solar panel blocking",
      keyFeatures: "Very low forward voltage drop (0.3V), fast switching, high efficiency",
      bestFor: "High-efficiency power supplies, reverse polarity protection in battery circuits, solar panel blocking"
    },
    specifications: {
      "Peak Inverse Voltage": "40V",
      "Average Forward Current": "1A",
      "Forward Voltage Drop": "0.3V @ 1A",
      "Reverse Current": "1mA @ 40V",
      "Package": "DO-41",
      "Recovery Time": "Fast (Schottky)"
    },
    compatibility: ["Low Voltage", "Solar Panels", "Battery Circuits", "Efficiency Critical"],
    projects: ["Solar charge controllers", "Battery protection", "High-efficiency supplies", "Low-dropout circuits"],
    supplier: "Schottky diode distributors",
    leadTime: "1-2 days",
    tags: ["schottky", "low-drop", "efficient", "solar", "battery"]
  },

  {
    id: "power-diode-bridge-w10",
    name: "Bridge Rectifier (W10)",
    description: "Four-diode bridge rectifier for full-wave AC-DC conversion",
    category: "power-components",
    subcategory: "power-diodes",
    price: 3200,
    studentPrice: 2720,
    image: "/images/power/w10-bridge.jpg",
    inStock: true,
    stockLevel: 95,
    rating: 4.7,
    reviews: 123,
    overview: {
      type: "Bridge Rectifier Assembly",
      keySpecs: "~1.5A, 1000V. Contains 4 diodes in one package",
      applications: "Full-wave AC-DC rectification",
      keyFeatures: "Complete bridge in single package, thermal pad, compact design",
      bestFor: "Building linear AC-to-DC power supplies"
    },
    specifications: {
      "Peak Inverse Voltage": "1000V",
      "Average Output Current": "1.5A",
      "Forward Voltage Drop": "1.1V per diode",
      "Configuration": "4 diodes in bridge",
      "Package": "W10 (TO-269AA)",
      "Mounting": "Through-hole with heat tab"
    },
    compatibility: ["AC-DC Supplies", "Transformers", "Linear PSU", "Full-Wave Rectification"],
    projects: ["Linear power supplies", "AC-DC converters", "Transformer rectification", "Bench supplies"],
    supplier: "Rectifier bridge distributors",
    leadTime: "2-4 days",
    tags: ["bridge-rectifier", "ac-dc", "full-wave", "power-supply", "transformer"]
  }
];

// Category 5: Batteries & Holders
const batteries: PowerComponent[] = [
  {
    id: "power-batt-18650",
    name: "18650 Li-ion Battery",
    description: "High-capacity rechargeable lithium-ion battery cell",
    category: "power-components",
    subcategory: "batteries",
    price: 20000,
    studentPrice: 17000,
    image: "/images/power/18650-battery.jpg",
    inStock: true,
    stockLevel: 78,
    rating: 4.8,
    reviews: 445,
    overview: {
      type: "Lithium-Ion Rechargeable Battery",
      keySpecs: "3.7V Nominal Voltage, ~2200mAh-3400mAh Capacity, Rechargeable",
      applications: "Power banks, high-powered flashlights, custom battery packs",
      keyFeatures: "High energy density, rechargeable, standard size, long cycle life",
      bestFor: "Power banks, high-powered flashlights, custom battery packs"
    },
    specifications: {
      "Nominal Voltage": "3.7V",
      "Capacity": "2600mAh (typical)",
      "Max Discharge Current": "5A",
      "Dimensions": "18mm x 65mm",
      "Chemistry": "Li-ion",
      "Cycle Life": "500+ cycles"
    },
    compatibility: ["Power Banks", "Flashlights", "E-cigarettes", "Laptops"],
    projects: ["DIY power banks", "High-power flashlights", "Portable projects", "Battery packs"],
    supplier: "Battery distributors",
    leadTime: "3-5 days",
    tags: ["18650", "li-ion", "rechargeable", "high-capacity", "power-bank"]
  },

  {
    id: "power-batt-holder-18650",
    name: "18650 Battery Holder",
    description: "Secure holder for 18650 batteries with wire leads",
    category: "power-components",
    subcategory: "batteries",
    price: 5500,
    studentPrice: 4675,
    image: "/images/power/18650-holder.jpg",
    inStock: true,
    stockLevel: 125,
    rating: 4.6,
    reviews: 234,
    overview: {
      type: "Battery Holder/Connector",
      keySpecs: "Available in 1, 2, 3, or 4 cell configurations",
      applications: "Creating custom battery packs, portable projects",
      keyFeatures: "Spring contacts, wire leads, multiple configurations, secure mounting",
      bestFor: "Creating custom battery packs, portable projects"
    },
    specifications: {
      "Cell Configurations": "1S, 2S, 3S, 4S available",
      "Contact Material": "Spring steel",
      "Wire Gauge": "22AWG leads",
      "Mounting": "PCB mount or enclosure",
      "Current Rating": "5A continuous",
      "Material": "ABS plastic"
    },
    compatibility: ["18650 Batteries", "DIY Battery Packs", "Portable Devices", "Power Systems"],
    projects: ["Custom battery packs", "Portable power supplies", "Backup power systems", "Mobile projects"],
    supplier: "Battery accessory distributors",
    leadTime: "2-3 days",
    tags: ["battery-holder", "18650", "diy", "portable", "custom"]
  },

  {
    id: "power-batt-9v",
    name: "9V Alkaline Battery",
    description: "Standard 9V rectangular alkaline battery for general use",
    category: "power-components",
    subcategory: "batteries",
    price: 6500,
    studentPrice: 5525,
    image: "/images/power/9v-battery.jpg",
    inStock: true,
    stockLevel: 156,
    rating: 4.4,
    reviews: 167,
    overview: {
      type: "Alkaline Primary Battery",
      keySpecs: "9V, Non-rechargeable",
      applications: "Arduino power, guitar pedals, smoke alarms",
      keyFeatures: "Standard connector, widely available, good shelf life",
      bestFor: "Powering Arduinos, guitar pedals, smoke alarms"
    },
    specifications: {
      "Nominal Voltage": "9V",
      "Capacity": "~400mAh",
      "Chemistry": "Alkaline",
      "Connector": "Standard 9V snap",
      "Shelf Life": "5+ years",
      "Operating Temperature": "-18°C to +55°C"
    },
    compatibility: ["Arduino", "Guitar Pedals", "Smoke Detectors", "Portable Devices"],
    projects: ["Arduino prototyping", "Guitar effect pedals", "Portable circuits", "Test equipment"],
    supplier: "Battery distributors",
    leadTime: "1-2 days",
    tags: ["9v", "alkaline", "arduino", "guitar", "standard"]
  }
];

// Category 6: Protection & Connectors
const protectionConnectors: PowerComponent[] = [
  {
    id: "power-prot-fuse-glass",
    name: "Glass Fuse (5x20mm)",
    description: "Glass tube fuse for overcurrent protection in various ratings",
    category: "power-components",
    subcategory: "protection",
    price: 1800,
    studentPrice: 1530,
    image: "/images/power/glass-fuse.jpg",
    inStock: true,
    stockLevel: 300,
    rating: 4.5,
    reviews: 198,
    overview: {
      type: "Glass Tube Fuse",
      keySpecs: "5x20mm Glass Tube, specific current rating",
      applications: "Overcurrent protection in AC and DC circuits",
      keyFeatures: "Visual inspection, various current ratings, standard size",
      bestFor: "Overcurrent protection in AC and DC circuits"
    },
    specifications: {
      "Dimensions": "5mm x 20mm",
      "Voltage Rating": "250V AC",
      "Current Ratings": "0.5A, 1A, 2A, 3A, 5A available",
      "Breaking Capacity": "35A @ 250V AC",
      "Type": "Fast-blow",
      "Material": "Glass tube with metal caps"
    },
    compatibility: ["Power Supplies", "Protection Circuits", "AC/DC Circuits", "General Purpose"],
    projects: ["Power supply protection", "Circuit protection", "Equipment safety", "Overcurrent protection"],
    supplier: "Fuse distributors",
    leadTime: "1-2 days",
    tags: ["fuse", "protection", "overcurrent", "glass", "safety"]
  },

  {
    id: "power-prot-fuse-holder",
    name: "Panel Mount Fuse Holder",
    description: "Panel-mountable holder for 5x20mm glass fuses",
    category: "power-components",
    subcategory: "protection",
    price: 3800,
    studentPrice: 3230,
    image: "/images/power/fuse-holder.jpg",
    inStock: true,
    stockLevel: 89,
    rating: 4.7,
    reviews: 145,
    overview: {
      type: "Panel Mount Fuse Holder",
      keySpecs: "For 5x20mm fuses, Panel Mount",
      applications: "Adding user-replaceable fuse protection to finished projects",
      keyFeatures: "Panel mounting, easy fuse replacement, secure contacts",
      bestFor: "Adding user-replaceable fuse protection to finished projects"
    },
    specifications: {
      "Fuse Size": "5x20mm",
      "Mounting": "Panel mount (threaded)",
      "Current Rating": "10A max",
      "Voltage Rating": "250V AC",
      "Contact Material": "Brass",
      "Thread": "M12 x 0.75"
    },
    compatibility: ["5x20mm Fuses", "Project Enclosures", "Panel Mounting", "Safety Systems"],
    projects: ["Project enclosures", "Equipment panels", "Safety systems", "Power distribution"],
    supplier: "Fuse holder distributors",
    leadTime: "2-4 days",
    tags: ["fuse-holder", "panel-mount", "protection", "replaceable", "safety"]
  },

  {
    id: "power-conn-barrel-jack",
    name: "DC Barrel Jack (Female, Panel Mount)",
    description: "Panel-mount female DC barrel connector for external power input",
    category: "power-components",
    subcategory: "connectors",
    price: 3200,
    studentPrice: 2720,
    image: "/images/power/barrel-jack.jpg",
    inStock: true,
    stockLevel: 145,
    rating: 4.8,
    reviews: 287,
    overview: {
      type: "DC Power Connector",
      keySpecs: "Fits 5.5mm x 2.1mm plugs, Panel Mount",
      applications: "External power input for project enclosures",
      keyFeatures: "Standard size, panel mounting, secure connection, switching contacts",
      bestFor: "Adding an external power input jack to project enclosures"
    },
    specifications: {
      "Inner Diameter": "2.1mm",
      "Outer Diameter": "5.5mm",
      "Current Rating": "5A max",
      "Voltage Rating": "24V DC",
      "Mounting": "Panel mount (threaded)",
      "Contact Material": "Nickel-plated brass"
    },
    compatibility: ["Wall Adapters", "Power Supplies", "DC Input", "Project Enclosures"],
    projects: ["Project power inputs", "Equipment enclosures", "Benchtop supplies", "Portable devices"],
    supplier: "Connector distributors",
    leadTime: "1-3 days",
    tags: ["barrel-jack", "dc-input", "panel-mount", "power-connector", "5.5mm"]
  },

  {
    id: "power-conn-terminal-high",
    name: "High-Current Screw Terminal Block",
    description: "Robust screw terminals for high-current power connections",
    category: "power-components",
    subcategory: "connectors",
    price: 4800,
    studentPrice: 4080,
    image: "/images/power/screw-terminal.jpg",
    inStock: true,
    stockLevel: 67,
    rating: 4.9,
    reviews: 156,
    overview: {
      type: "High-Current Terminal Block",
      keySpecs: "2-position, high current rating (e.g., 15A)",
      applications: "Main power connections, battery terminals",
      keyFeatures: "High current capability, secure screw connections, multiple positions",
      bestFor: "Main power connections, battery terminals, high-power motor connections"
    },
    specifications: {
      "Positions": "2",
      "Current Rating": "15A per terminal",
      "Voltage Rating": "300V",
      "Wire Gauge": "12-22 AWG",
      "Screw Type": "Phillips head",
      "Pitch": "5.08mm"
    },
    compatibility: ["High Current", "Power Distribution", "Battery Systems", "Motor Control"],
    projects: ["Power distribution", "Battery connections", "Motor terminals", "High-current switching"],
    supplier: "Terminal block distributors",
    leadTime: "2-3 days",
    tags: ["terminal-block", "high-current", "screw", "power-distribution", "15amp"]
  },

  {
    id: "power-switch-rocker",
    name: "Rocker Switch (Power Rated)",
    description: "AC-rated latching rocker switch for main power control",
    category: "power-components",
    subcategory: "connectors",
    price: 3800,
    studentPrice: 3230,
    image: "/images/power/rocker-switch.jpg",
    inStock: true,
    stockLevel: 78,
    rating: 4.6,
    reviews: 234,
    overview: {
      type: "AC Power Switch",
      keySpecs: "Latching, panel mount, AC rated (e.g., 250V AC, 6A)",
      applications: "Main power on/off for projects and power supplies",
      keyFeatures: "AC voltage rating, latching action, panel mounting, illuminated option",
      bestFor: "Project enclosure main power switches, power strip projects"
    },
    specifications: {
      "Voltage Rating": "250V AC",
      "Current Rating": "6A",
      "Action": "Latching (ON/OFF)",
      "Mounting": "Panel mount",
      "Terminal": "SPST",
      "Illumination": "Available with LED"
    },
    compatibility: ["AC Power", "Main Switches", "Project Enclosures", "Power Control"],
    projects: ["Power supplies", "Project enclosures", "Equipment controls", "Safety switching"],
    supplier: "Switch distributors",
    leadTime: "2-4 days",
    tags: ["rocker-switch", "ac-rated", "power-switch", "latching", "panel-mount"]
  }
];

// Export all power components
export const allPowerComponents: PowerComponent[] = [
  ...voltageRegulators,
  ...powerConversion,
  ...powerSemiconductors,
  ...powerDiodes,
  ...batteries,
  ...protectionConnectors
];

// Export categories for filtering
export const powerCategories = [
  { id: "voltage-regulators", name: "Voltage Regulators", category: "power-components" },
  { id: "power-conversion", name: "Power Conversion", category: "power-components" },
  { id: "power-semiconductors", name: "Power Semiconductors", category: "power-components" },
  { id: "power-diodes", name: "Power Diodes & Rectifiers", category: "power-components" },
  { id: "batteries", name: "Batteries & Holders", category: "power-components" },
  { id: "protection", name: "Protection & Connectors", category: "power-components" }
];

export const powerPriceRanges = [
  { id: "under-2k", name: "Under 2,000 UGX", min: 0, max: 2000 },
  { id: "2k-5k", name: "2,000 - 5,000 UGX", min: 2000, max: 5000 },
  { id: "5k-10k", name: "5,000 - 10,000 UGX", min: 5000, max: 10000 },
  { id: "10k-25k", name: "10,000 - 25,000 UGX", min: 10000, max: 25000 },
  { id: "over-25k", name: "Over 25,000 UGX", min: 25000, max: Infinity }
];
