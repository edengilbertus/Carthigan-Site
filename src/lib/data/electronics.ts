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
    bestFor?: string
  }
  supplier: string
  keySpecs?: Record<string, string>
  bestFor?: string
}

// INTEGRATED CIRCUITS (ICs)
const integratedCircuits: ElectronicComponent[] = [
  {
    id: "ic-ne555p",
    name: "NE555P Precision Timer",
    description: "The classic chip for timers, oscillators, and pulses - the legendary 555 timer IC",
    price: 2500,
    studentPrice: 2125,
    image: "/images/components/ne555p.jpg",
    inStock: true,
    stockLevel: 150,
    rating: 4.9,
    reviews: 245,
    category: "Electronics & Components",
    subcategory: "Integrated Circuits",
    specifications: {
      "Package": "8-pin DIP",
      "Supply Voltage": "4.5V to 15V",
      "Output Current": "200mA",
      "Operating Temperature": "-40°C to +125°C",
      "Timing Range": "Microseconds to hours"
    },
    compatibility: ["Arduino", "Breadboards", "Perfboards", "All MCUs"],
    projects: ["LED flashers", "PWM signals", "Time delays", "Square wave generators", "Astable/monostable circuits"],
    leadTime: "In Stock",
    tags: ["timer", "oscillator", "555", "classic-ic", "precision"],
    overview: {
      type: "Precision Timer IC",
      keySpecs: "8-pin DIP, 4.5V-15V supply, versatile timer/oscillator",
      applications: "Creating square waves, time delays, LED flashers, PWM signals, pulse generation",
      keyFeatures: ["Highly stable timing", "Wide supply voltage range", "High output current capability", "Millions of applications worldwide"],
      bestFor: "Any project requiring precise timing, oscillation, or pulse generation"
    },
    supplier: "Professional grade IC from major manufacturers",
    bestFor: "Creating square waves, time delays, LED flashers, PWM signals"
  },

  {
    id: "ic-l293d",
    name: "L293D Motor Driver",
    description: "Control the speed and direction of DC motors - essential IC for robotics projects",
    price: 4500,
    studentPrice: 3825,
    image: "/images/components/l293d.jpg",
    inStock: true,
    stockLevel: 120,
    rating: 4.8,
    reviews: 189,
    category: "Electronics & Components",
    subcategory: "Integrated Circuits",
    specifications: {
      "Package": "16-pin DIP",
      "Motor Channels": "2 independent channels",
      "Current per Channel": "600mA continuous",
      "Motor Voltage": "4.5V to 36V",
      "Logic Voltage": "5V TTL compatible"
    },
    compatibility: ["Arduino", "Raspberry Pi", "All 5V microcontrollers"],
    projects: ["Robot cars", "Motor control", "Stepper motor drivers", "Robotic arms"],
    leadTime: "In Stock",
    tags: ["motor-driver", "h-bridge", "robotics", "dual-motor"],
    overview: {
      type: "Dual H-Bridge Motor Driver",
      keySpecs: "Controls 2 DC motors, 600mA per channel, 4.5V-36V motor voltage",
      applications: "Small robotics projects, controlling DC motors and small stepper motors",
      keyFeatures: ["Two independent H-bridges", "Built-in protection diodes", "High-voltage capability", "Bidirectional control"],
      bestFor: "Small robotics projects, controlling DC motors and small stepper motors"
    },
    supplier: "Authentic STMicroelectronics or compatible",
    bestFor: "Small robotics projects, controlling DC motors and small stepper motors"
  },

  {
    id: "ic-lm358n",
    name: "LM358N Low-Power Dual Op-Amp",
    description: "A versatile dual operational amplifier for signal processing and sensor interfacing",
    price: 1800,
    studentPrice: 1530,
    image: "/images/components/lm358n.jpg",
    inStock: true,
    stockLevel: 180,
    rating: 4.7,
    reviews: 134,
    category: "Electronics & Components",
    subcategory: "Integrated Circuits",
    specifications: {
      "Package": "8-pin DIP",
      "Amplifiers": "2 independent op-amps",
      "Supply Voltage": "3V to 32V (single supply)",
      "Input Offset Voltage": "2mV typical",
      "Gain Bandwidth": "1.1MHz"
    },
    compatibility: ["Sensor circuits", "Arduino analog inputs", "Audio circuits"],
    projects: ["Sensor amplification", "Active filters", "Voltage followers", "Comparators"],
    leadTime: "In Stock",
    tags: ["op-amp", "amplifier", "dual", "low-power", "single-supply"],
    overview: {
      type: "Dual Operational Amplifier",
      keySpecs: "Two independent op-amps, single supply operation (3V-32V)",
      applications: "Sensor signal amplification, active filters, battery-powered analog circuits",
      keyFeatures: ["Single supply operation", "Low power consumption", "Wide supply range", "High input impedance"],
      bestFor: "Sensor signal amplification, active filters, battery-powered analog circuits"
    },
    supplier: "Texas Instruments or equivalent",
    bestFor: "Sensor signal amplification, active filters, battery-powered analog circuits"
  },

  {
    id: "ic-lm386n",
    name: "LM386N-4 Audio Power Amplifier",
    description: "A low-power audio amplifier for adding speaker output to your projects",
    price: 2200,
    studentPrice: 1870,
    image: "/images/components/lm386n.jpg",
    inStock: true,
    stockLevel: 95,
    rating: 4.6,
    reviews: 87,
    category: "Electronics & Components",
    subcategory: "Integrated Circuits",
    specifications: {
      "Package": "8-pin DIP",
      "Output Power": "200mW into 8Ω",
      "Supply Voltage": "4V to 12V",
      "Gain": "20 to 200 (adjustable)",
      "Input Impedance": "50kΩ"
    },
    compatibility: ["Audio projects", "MP3 players", "Intercom systems"],
    projects: ["Speaker drivers", "Audio amplifiers", "Intercoms", "Guitar practice amps"],
    leadTime: "In Stock",
    tags: ["audio", "amplifier", "speaker", "low-power"],
    overview: {
      type: "Audio Power Amplifier",
      keySpecs: "200mW output into 8Ω, 4-12V supply voltage, 8-pin DIP",
      applications: "Adding speaker output to projects, simple intercoms, guitar practice amps",
      keyFeatures: ["Low external component count", "Wide supply voltage range", "High gain capability", "Thermal protection"],
      bestFor: "Adding speaker output to projects, simple intercoms, guitar practice amps"
    },
    supplier: "National Semiconductor design",
    bestFor: "Adding speaker output to projects, simple intercoms, guitar practice amps"
  },

  {
    id: "ic-74hc595",
    name: "SN74HC595N Shift Register",
    description: "Expands microcontroller outputs using fewer pins - control 8 outputs with just 3 pins",
    price: 1500,
    studentPrice: 1275,
    image: "/images/components/74hc595.jpg",
    inStock: true,
    stockLevel: 200,
    rating: 4.8,
    reviews: 156,
    category: "Electronics & Components",
    subcategory: "Integrated Circuits",
    specifications: {
      "Package": "16-pin DIP",
      "Type": "8-bit Serial-to-Parallel",
      "Supply Voltage": "2V to 6V",
      "Output Current": "25mA per channel",
      "Cascade": "Multiple units chainable"
    },
    compatibility: ["Arduino", "All microcontrollers", "LED matrices"],
    projects: ["LED displays", "7-segment displays", "LED strips", "Output expansion"],
    leadTime: "In Stock",
    tags: ["shift-register", "output-expansion", "serial-parallel", "cascadable"],
    overview: {
      type: "8-bit Shift Register",
      keySpecs: "8-bit Serial-to-Parallel, 2-6V supply voltage, chainable",
      applications: "Driving multiple LEDs, controlling 7-segment displays, expanding MCU outputs",
      keyFeatures: ["3-pin control interface", "Cascadable design", "Built-in storage register", "High-speed operation"],
      bestFor: "Driving multiple LEDs, controlling 7-segment displays, expanding MCU outputs"
    },
    supplier: "Texas Instruments original design",
    bestFor: "Driving multiple LEDs, controlling 7-segment displays, expanding MCU outputs"
  },

  // Additional essential ICs from comprehensive catalog
  {
    id: "ic-cd4017",
    name: "CD4017 Decade Counter",
    description: "Johnson decade counter/divider with 10 decoded outputs, perfect for sequencing applications.",
    price: 2000,
    studentPrice: 1700,
    image: "/images/components/cd4017.jpg",
    inStock: true,
    stockLevel: 85,
    rating: 4.7,
    reviews: 89,
    category: "Electronics & Components",
    subcategory: "Integrated Circuits",
    specifications: {
      "Package": "16-pin DIP",
      "Type": "Decade Counter/Divider",
      "Supply Voltage": "3V to 18V",
      "Outputs": "10 decoded outputs",
      "Max Clock Frequency": "5MHz"
    },
    compatibility: ["LED chasers", "Sequencers", "Digital counters"],
    projects: ["LED chasers", "Knight Rider effects", "Digital displays", "Sequencing circuits"],
    leadTime: "In Stock",
    tags: ["counter", "decade", "sequencer", "cd4017", "johnson"],
    overview: {
      type: "Decade Counter IC",
      keySpecs: "10 decoded outputs, 3-18V supply, 5MHz max frequency",
      applications: "LED sequencing, digital counting, pattern generation",
      keyFeatures: ["10 decoded outputs", "Wide supply range", "Built-in reset", "Sequential operation"],
      bestFor: "LED sequencing, digital counting, pattern generation"
    },
    supplier: "Texas Instruments CD4017BE",
    bestFor: "LED sequencing, digital counting, pattern generation"
  },

  {
    id: "ic-pcf8574",
    name: "PCF8574 I2C I/O Expander",
    description: "8-bit I/O expander with I2C interface - add more digital pins to your microcontroller.",
    price: 3500,
    studentPrice: 2975,
    image: "/images/components/pcf8574.jpg",
    inStock: true,
    stockLevel: 120,
    rating: 4.6,
    reviews: 67,
    category: "Electronics & Components",
    subcategory: "Integrated Circuits",
    specifications: {
      "Package": "16-pin DIP",
      "Interface": "I2C (TWI)",
      "I/O Pins": "8 bidirectional",
      "Supply Voltage": "2.5V to 6V",
      "Address Range": "8 different addresses"
    },
    compatibility: ["Arduino", "I2C systems", "Port expansion"],
    projects: ["I/O expansion", "Keypad interfaces", "LCD control", "Sensor arrays"],
    leadTime: "In Stock",
    tags: ["i2c", "io-expander", "pcf8574", "port-expansion"],
    overview: {
      type: "I2C I/O Expander",
      keySpecs: "8 bidirectional I/O, I2C interface, 8 selectable addresses",
      applications: "Adding more digital pins, keypad interfaces, LCD control",
      keyFeatures: ["I2C bus interface", "Bidirectional I/O", "Multiple addresses", "Interrupt output"],
      bestFor: "Adding more digital pins, keypad interfaces, LCD control"
    },
    supplier: "NXP PCF8574 original",
    bestFor: "Adding more digital pins, keypad interfaces, LCD control"
  },

  // Additional ICs from comprehensive catalog
  {
    id: "ic-uln2003",
    name: "ULN2003 Darlington Array",
    description: "Seven-channel high-current Darlington array - perfect for driving relays, motors, and LEDs.",
    price: 2500,
    studentPrice: 2125,
    image: "/images/components/uln2003.jpg",
    inStock: true,
    stockLevel: 95,
    rating: 4.8,
    reviews: 134,
    category: "Electronics & Components",
    subcategory: "Integrated Circuits",
    specifications: {
      "Package": "16-pin DIP",
      "Channels": "7 Darlington pairs",
      "Max Current": "500mA per channel",
      "Max Voltage": "50V",
      "Built-in Flyback Diodes": "Yes"
    },
    compatibility: ["Stepper motors", "Relays", "LED arrays", "Solenoids"],
    projects: ["Stepper motor drivers", "Relay banks", "LED matrix control", "Solenoid drivers"],
    leadTime: "In Stock",
    tags: ["darlington", "driver", "uln2003", "high-current", "relay"],
    overview: {
      type: "Darlington Driver Array",
      keySpecs: "7 channels, 500mA per channel, built-in flyback diodes",
      applications: "Driving stepper motors, controlling multiple relays, LED matrix displays",
      keyFeatures: ["Built-in flyback diodes", "High current capability", "TTL compatible inputs", "Seven independent channels"],
      bestFor: "Driving stepper motors, controlling multiple relays, LED matrix displays"
    },
    supplier: "STMicroelectronics ULN2003A",
    bestFor: "Driving stepper motors, controlling multiple relays, LED matrix displays"
  },

  {
    id: "ic-lm741",
    name: "LM741 Op-Amp",
    description: "The classic operational amplifier - industry standard for analog signal processing and amplification.",
    price: 1800,
    studentPrice: 1530,
    image: "/images/components/lm741.jpg",
    inStock: true,
    stockLevel: 150,
    rating: 4.7,
    reviews: 198,
    category: "Electronics & Components",
    subcategory: "Integrated Circuits",
    specifications: {
      "Package": "8-pin DIP",
      "Supply Voltage": "±3V to ±18V",
      "Input Offset Voltage": "1mV typical",
      "Slew Rate": "0.5 V/μs",
      "Bandwidth": "1.5MHz"
    },
    compatibility: ["Audio circuits", "Signal processing", "Educational labs"],
    projects: ["Audio amplifiers", "Active filters", "Comparators", "Voltage followers"],
    leadTime: "In Stock",
    tags: ["op-amp", "lm741", "classic", "analog", "amplifier"],
    overview: {
      type: "Operational Amplifier",
      keySpecs: "Classic op-amp, ±18V supply, industry standard pinout",
      applications: "Audio amplification, active filters, analog signal processing",
      keyFeatures: ["Industry standard", "Dual supply operation", "High gain", "Stable operation"],
      bestFor: "Audio amplification, active filters, analog signal processing"
    },
    supplier: "Texas Instruments LM741CN",
    bestFor: "Audio amplification, active filters, analog signal processing"
  },

  {
    id: "ic-lm324",
    name: "LM324 Quad Op-Amp", 
    description: "Four operational amplifiers in one package - perfect for multi-channel signal processing.",
    price: 2200,
    studentPrice: 1870,
    image: "/images/components/lm324.jpg",
    inStock: true,
    stockLevel: 120,
    rating: 4.6,
    reviews: 156,
    category: "Electronics & Components",
    subcategory: "Integrated Circuits",
    specifications: {
      "Package": "14-pin DIP",
      "Amplifiers": "4 independent op-amps",
      "Supply Voltage": "3V to 32V (single supply)",
      "Input Offset Voltage": "2mV typical",
      "Bandwidth": "1.2MHz"
    },
    compatibility: ["Multi-channel sensors", "Audio mixers", "Signal conditioning"],
    projects: ["Sensor arrays", "Audio mixers", "Multi-channel filters", "Voltage comparators"],
    leadTime: "In Stock",
    tags: ["op-amp", "quad", "lm324", "multi-channel"],
    overview: {
      type: "Quad Operational Amplifier",
      keySpecs: "Four op-amps in one package, single supply operation",
      applications: "Multi-channel sensor processing, audio mixing, parallel signal conditioning",
      keyFeatures: ["Four independent op-amps", "Single supply operation", "Low power consumption", "Wide supply range"],
      bestFor: "Multi-channel sensor processing, audio mixing, parallel signal conditioning"
    },
    supplier: "Texas Instruments LM324N",
    bestFor: "Multi-channel sensor processing, audio mixing, parallel signal conditioning"
  },

  {
    id: "ic-74hc00",
    name: "74HC00 Quad NAND Gate",
    description: "Four 2-input NAND gates for digital logic projects - fundamental building block of digital circuits.",
    price: 1200,
    studentPrice: 1020,
    image: "/images/components/74hc00.jpg",
    inStock: true,
    stockLevel: 180,
    rating: 4.8,
    reviews: 145,
    category: "Electronics & Components",
    subcategory: "Integrated Circuits",
    specifications: {
      "Package": "14-pin DIP",
      "Logic Family": "74HC (High-speed CMOS)",
      "Supply Voltage": "2V to 6V",
      "Gates": "4 x 2-input NAND",
      "Propagation Delay": "8ns typical"
    },
    compatibility: ["Digital logic", "Clock circuits", "Educational projects"],
    projects: ["Logic circuits", "Clock generators", "Pulse shapers", "Digital experiments"],
    leadTime: "In Stock",
    tags: ["logic-gate", "nand", "74hc00", "digital", "cmos"],
    overview: {
      type: "Quad NAND Gate",
      keySpecs: "Four 2-input NAND gates, 2-6V operation, high-speed CMOS",
      applications: "Digital logic circuits, clock generation, basic computing elements",
      keyFeatures: ["Fast switching", "Low power consumption", "Wide voltage range", "Standard logic family"],
      bestFor: "Digital logic circuits, clock generation, basic computing elements"
    },
    supplier: "Texas Instruments 74HC00N",
    bestFor: "Digital logic circuits, clock generation, basic computing elements"
  },

  {
    id: "ic-pc817",
    name: "PC817 Optocoupler",
    description: "Optical isolator for safe signal transfer between circuits at different voltage levels.",
    price: 2000,
    studentPrice: 1700,
    image: "/images/components/pc817.jpg",
    inStock: true,
    stockLevel: 110,
    rating: 4.7,
    reviews: 89,
    category: "Electronics & Components",
    subcategory: "Integrated Circuits",
    specifications: {
      "Package": "4-pin DIP",
      "Isolation Voltage": "5000V",
      "Forward Voltage": "1.2V",
      "CTR": "50-300% (Current Transfer Ratio)",
      "Response Time": "18μs"
    },
    compatibility: ["AC circuits", "High voltage isolation", "Safety circuits"],
    projects: ["AC switching", "Voltage isolation", "Safety interlocks", "Signal isolation"],
    leadTime: "In Stock",
    tags: ["optocoupler", "isolation", "pc817", "safety", "high-voltage"],
    overview: {
      type: "Optical Isolator",
      keySpecs: "5000V isolation, 4-pin DIP, LED-phototransistor pair",
      applications: "Isolating microcontrollers from AC circuits, safety interlocks",
      keyFeatures: ["High voltage isolation", "Electrical isolation", "Fast response", "Industry standard"],
      bestFor: "Isolating microcontrollers from AC circuits, safety interlocks"
    },
    supplier: "Sharp PC817 optocoupler",
    bestFor: "Isolating microcontrollers from AC circuits, safety interlocks"
  }
]

// TRANSISTORS & REGULATORS
const transistorsRegulators: ElectronicComponent[] = [
  {
    id: "trans-bc547",
    name: "BC547 NPN Transistor",
    description: "General-purpose transistor for low-power switching and signal amplification",
    price: 300,
    studentPrice: 255,
    image: "/images/components/bc547.jpg",
    inStock: true,
    stockLevel: 500,
    rating: 4.9,
    reviews: 312,
    category: "Electronics & Components",
    subcategory: "Transistors & Regulators",
    specifications: {
      "Type": "NPN Bipolar Junction Transistor",
      "Max Collector Voltage": "45V",
      "Max Collector Current": "100mA",
      "Power Dissipation": "500mW",
      "Package": "TO-92"
    },
    compatibility: ["Microcontroller outputs", "LED drivers", "Relay drivers"],
    projects: ["LED switching", "Relay control", "Signal amplification", "Logic level conversion"],
    leadTime: "In Stock",
    tags: ["npn", "transistor", "switching", "general-purpose"],
    overview: {
      type: "NPN Bipolar Junction Transistor",
      keySpecs: "NPN BJT, 45V max VCE, 100mA max collector current",
      applications: "Switching small loads, signal amplification, educational circuits",
      keyFeatures: ["Low saturation voltage", "High current gain", "Fast switching", "Wide temperature range"],
      bestFor: "Switching small loads, signal amplification, educational circuits"
    },
    supplier: "Standard semiconductor manufacturers",
    bestFor: "Switching small loads, signal amplification, educational circuits"
  },

  {
    id: "trans-bc327",
    name: "BC327 PNP Transistor",
    description: "The essential complement to NPN transistors for high-side switching applications",
    price: 350,
    studentPrice: 298,
    image: "/images/components/bc327.jpg",
    inStock: true,
    stockLevel: 400,
    rating: 4.7,
    reviews: 198,
    category: "Electronics & Components",
    subcategory: "Transistors & Regulators",
    specifications: {
      "Type": "PNP Bipolar Junction Transistor",
      "Max Collector Voltage": "-45V",
      "Max Collector Current": "-800mA",
      "Power Dissipation": "625mW",
      "Package": "TO-92"
    },
    compatibility: ["High-side switching", "Push-pull circuits", "Audio amplifiers"],
    projects: ["High-side switches", "Audio drivers", "Complementary circuits", "Current sources"],
    leadTime: "In Stock",
    tags: ["pnp", "transistor", "high-side", "complementary"],
    overview: {
      type: "PNP Bipolar Junction Transistor",
      keySpecs: "PNP BJT, 45V max VCE, -800mA max collector current",
      applications: "High-side switching, driver stages in audio amplifiers, push-pull circuits",
      keyFeatures: ["High current capability", "Complement to BC547", "Low noise", "High gain"],
      bestFor: "High-side switching, driver stages in audio amplifiers, push-pull circuits"
    },
    supplier: "Standard semiconductor manufacturers",
    bestFor: "High-side switching, driver stages in audio amplifiers, push-pull circuits"
  },

  {
    id: "trans-irf540",
    name: "IRF540 N-Channel MOSFET",
    description: "A high-power switch for large DC loads with minimal power loss",
    price: 3500,
    studentPrice: 2975,
    image: "/images/components/irf540.jpg",
    inStock: true,
    stockLevel: 85,
    rating: 4.9,
    reviews: 143,
    category: "Electronics & Components",
    subcategory: "Transistors & Regulators",
    specifications: {
      "Type": "N-Channel Power MOSFET",
      "Max Drain Voltage": "100V",
      "Max Drain Current": "33A",
      "On-Resistance": "77mΩ",
      "Package": "TO-220"
    },
    compatibility: ["PWM controllers", "Motor drivers", "Power switching"],
    projects: ["High-power PWM", "Motor speed control", "Solenoid drivers", "Power inverters"],
    leadTime: "In Stock",
    tags: ["mosfet", "n-channel", "high-power", "switching"],
    overview: {
      type: "N-Channel Power MOSFET",
      keySpecs: "N-Channel MOSFET, 100V max VDS, 33A max drain current",
      applications: "High-power PWM speed control, solenoid drivers, power inverters",
      keyFeatures: ["Very low on-resistance", "Fast switching", "High current capability", "Avalanche rated"],
      bestFor: "High-power PWM speed control, solenoid drivers, power inverters"
    },
    supplier: "International Rectifier design",
    bestFor: "High-power PWM speed control, solenoid drivers, power inverters"
  },

  {
    id: "reg-7805",
    name: "7805 Voltage Regulator",
    description: "Provides a stable 5V output from higher input voltages",
    price: 1200,
    studentPrice: 1020,
    image: "/images/components/7805.jpg",
    inStock: true,
    stockLevel: 250,
    rating: 4.8,
    reviews: 287,
    category: "Electronics & Components",
    subcategory: "Transistors & Regulators",
    specifications: {
      "Type": "Linear Voltage Regulator",
      "Output Voltage": "5V ±4%",
      "Max Output Current": "1A",
      "Input Voltage": "7V to 35V",
      "Package": "TO-220"
    },
    compatibility: ["5V logic circuits", "Arduino power", "Breadboard supplies"],
    projects: ["Breadboard power supplies", "Arduino power", "5V circuit regulation"],
    leadTime: "In Stock",
    tags: ["voltage-regulator", "5v", "linear", "power-supply"],
    overview: {
      type: "Linear Voltage Regulator",
      keySpecs: "5V output, 1A max current, TO-220 package",
      applications: "Powering logic circuits, breadboard power supplies, on-board voltage regulation",
      keyFeatures: ["Built-in thermal protection", "Short circuit protection", "Simple 3-pin design", "Excellent regulation"],
      bestFor: "Powering logic circuits, breadboard power supplies, on-board voltage regulation"
    },
    supplier: "Multiple manufacturers - industry standard",
    bestFor: "Powering logic circuits, breadboard power supplies, on-board voltage regulation"
  },

  {
    id: "reg-lm317",
    name: "LM317 Adjustable Voltage Regulator",
    description: "Popular adjustable linear voltage regulator capable of supplying 1.5A over a wide output voltage range.",
    price: 2200,
    studentPrice: 1870,
    image: "/images/components/lm317.jpg",
    inStock: true,
    stockLevel: 75,
    rating: 4.7,
    reviews: 143,
    category: "Electronics & Components",
    subcategory: "Transistors & Regulators",
    specifications: {
      "Type": "Adjustable Linear Voltage Regulator",
      "Output Voltage Range": "1.2V - 37V",
      "Output Current": "1.5A",
      "Input Voltage": "3V - 40V",
      "Package": "TO-220"
    },
    compatibility: ["Adjustable power supplies", "Variable voltage sources", "Battery chargers"],
    projects: ["Variable power supplies", "LED current regulation", "Battery charging circuits"],
    leadTime: "In Stock",
    tags: ["regulator", "adjustable", "lm317", "linear", "power"],
    overview: {
      type: "Adjustable Voltage Regulator",
      keySpecs: "1.2-37V output, 1.5A current, adjustable with resistors",
      applications: "Variable power supplies, current regulation, voltage references",
      keyFeatures: ["Wide voltage range", "Current limiting", "Thermal protection", "Easy adjustment"],
      bestFor: "Variable power supplies, current regulation, voltage references"
    },
    supplier: "Texas Instruments LM317 or equivalent",
    bestFor: "Variable power supplies, current regulation, voltage references"
  },

  // Additional transistors and regulators from comprehensive catalog
  {
    id: "trans-2n2222",
    name: "2N2222 NPN Transistor",
    description: "High-speed switching transistor - ideal for fast switching applications and RF circuits.",
    price: 400,
    studentPrice: 340,
    image: "/images/components/2n2222.jpg",
    inStock: true,
    stockLevel: 350,
    rating: 4.8,
    reviews: 234,
    category: "Electronics & Components",
    subcategory: "Transistors & Regulators",
    specifications: {
      "Type": "NPN Bipolar Junction Transistor",
      "Max Collector Voltage": "40V",
      "Max Collector Current": "800mA", 
      "Power Dissipation": "500mW",
      "Package": "TO-92"
    },
    compatibility: ["High-speed switching", "RF circuits", "Amplifiers"],
    projects: ["Fast switching", "RF oscillators", "High-frequency amplifiers", "Timer circuits"],
    leadTime: "In Stock",
    tags: ["npn", "transistor", "high-speed", "2n2222", "rf"],
    overview: {
      type: "High-Speed NPN Transistor",
      keySpecs: "NPN BJT, 40V max VCE, 800mA max collector current, high-speed",
      applications: "Fast switching circuits, RF oscillators, high-frequency applications",
      keyFeatures: ["High-speed switching", "Good frequency response", "Higher current capability", "Industry standard"],
      bestFor: "Fast switching circuits, RF oscillators, high-frequency applications"
    },
    supplier: "Standard semiconductor manufacturers",
    bestFor: "Fast switching circuits, RF oscillators, high-frequency applications"
  },

  {
    id: "trans-irfz44n",
    name: "IRFZ44N N-Channel MOSFET",
    description: "High-power N-channel MOSFET for heavy-duty switching applications and motor control.",
    price: 4200,
    studentPrice: 3570,
    image: "/images/components/irfz44n.jpg",
    inStock: true,
    stockLevel: 65,
    rating: 4.9,
    reviews: 156,
    category: "Electronics & Components",
    subcategory: "Transistors & Regulators",
    specifications: {
      "Type": "N-Channel Power MOSFET",
      "Max Drain Voltage": "55V",
      "Max Drain Current": "49A",
      "On-Resistance": "17.5mΩ",
      "Package": "TO-220"
    },
    compatibility: ["High-power switching", "Motor controllers", "Power supplies"],
    projects: ["Motor speed control", "High-power LED drivers", "DC motor controllers", "Power switching"],
    leadTime: "In Stock",
    tags: ["mosfet", "n-channel", "high-power", "irfz44n", "motor-control"],
    overview: {
      type: "High-Power N-Channel MOSFET",
      keySpecs: "N-Channel MOSFET, 55V max VDS, 49A max drain current, ultra-low RDS",
      applications: "High-power motor control, LED drivers, switching power supplies",
      keyFeatures: ["Very high current capability", "Ultra-low on-resistance", "Fast switching", "High efficiency"],
      bestFor: "High-power motor control, LED drivers, switching power supplies"
    },
    supplier: "International Rectifier IRFZ44N",
    bestFor: "High-power motor control, LED drivers, switching power supplies"
  },

  {
    id: "trans-irf9540",
    name: "IRF9540 P-Channel MOSFET",
    description: "P-channel power MOSFET for high-side switching and complementary circuits.",
    price: 4500,
    studentPrice: 3825,
    image: "/images/components/irf9540.jpg",
    inStock: true,
    stockLevel: 55,
    rating: 4.7,
    reviews: 98,
    category: "Electronics & Components",
    subcategory: "Transistors & Regulators",
    specifications: {
      "Type": "P-Channel Power MOSFET",
      "Max Drain Voltage": "-100V",
      "Max Drain Current": "-23A", 
      "On-Resistance": "117mΩ",
      "Package": "TO-220"
    },
    compatibility: ["High-side switching", "Complementary circuits", "Protection circuits"],
    projects: ["High-side power switches", "Reverse polarity protection", "Load switches"],
    leadTime: "In Stock",
    tags: ["mosfet", "p-channel", "high-side", "irf9540", "protection"],
    overview: {
      type: "P-Channel Power MOSFET",
      keySpecs: "P-Channel MOSFET, 100V max VDS, 23A max drain current",
      applications: "High-side switching, reverse polarity protection, complementary switching",
      keyFeatures: ["High-side switching capability", "High voltage rating", "Complementary to N-channel", "Protection applications"],
      bestFor: "High-side switching, reverse polarity protection, complementary switching"
    },
    supplier: "International Rectifier IRF9540",
    bestFor: "High-side switching, reverse polarity protection, complementary switching"
  },

  {
    id: "trans-2n7000",
    name: "2N7000 N-Channel MOSFET",
    description: "Small signal N-channel MOSFET perfect for logic level switching and low-power applications.",
    price: 800,
    studentPrice: 680,
    image: "/images/components/2n7000.jpg",
    inStock: true,
    stockLevel: 200,
    rating: 4.8,
    reviews: 167,
    category: "Electronics & Components",
    subcategory: "Transistors & Regulators",
    specifications: {
      "Type": "N-Channel Small Signal MOSFET",
      "Max Drain Voltage": "60V",
      "Max Drain Current": "200mA",
      "On-Resistance": "5.1Ω",
      "Package": "TO-92"
    },
    compatibility: ["Logic level switching", "Arduino outputs", "Low-power circuits"],
    projects: ["Logic level switching", "LED drivers", "Small motor control", "Interface circuits"],
    leadTime: "In Stock",
    tags: ["mosfet", "n-channel", "small-signal", "logic-level", "2n7000"],
    overview: {
      type: "Small Signal N-Channel MOSFET",
      keySpecs: "N-Channel MOSFET, 60V max VDS, 200mA max current, logic level",
      applications: "Logic level switching from microcontrollers, small load switching",
      keyFeatures: ["Logic level gate voltage", "Small TO-92 package", "Low power consumption", "Direct MCU drive"],
      bestFor: "Logic level switching from microcontrollers, small load switching"
    },
    supplier: "Fairchild/ON Semiconductor 2N7000",
    bestFor: "Logic level switching from microcontrollers, small load switching"
  },

  {
    id: "reg-7809",
    name: "7809 Voltage Regulator",
    description: "Fixed 9V linear voltage regulator for powering 9V circuits and systems.",
    price: 1300,
    studentPrice: 1105,
    image: "/images/components/7809.jpg",
    inStock: true,
    stockLevel: 120,
    rating: 4.7,
    reviews: 89,
    category: "Electronics & Components",
    subcategory: "Transistors & Regulators",
    specifications: {
      "Type": "Linear Voltage Regulator",
      "Output Voltage": "9V ±4%",
      "Max Output Current": "1A",
      "Input Voltage": "11.5V to 35V",
      "Package": "TO-220"
    },
    compatibility: ["9V systems", "Audio circuits", "Sensor supplies"],
    projects: ["9V power supplies", "Audio amplifier supplies", "Sensor power rails"],
    leadTime: "In Stock",
    tags: ["voltage-regulator", "9v", "linear", "7809"],
    overview: {
      type: "9V Linear Voltage Regulator",
      keySpecs: "9V output, 1A max current, TO-220 package",
      applications: "Powering 9V circuits, audio equipment, sensor systems",
      keyFeatures: ["Fixed 9V output", "Thermal protection", "Short circuit protection", "Standard TO-220"],
      bestFor: "Powering 9V circuits, audio equipment, sensor systems"
    },
    supplier: "Multiple manufacturers - industry standard",
    bestFor: "Powering 9V circuits, audio equipment, sensor systems"
  },

  {
    id: "reg-7812",
    name: "7812 Voltage Regulator",
    description: "Fixed 12V linear voltage regulator for powering 12V systems and motor drivers.",
    price: 1400,
    studentPrice: 1190,
    image: "/images/components/7812.jpg",
    inStock: true,
    stockLevel: 100,
    rating: 4.8,
    reviews: 112,
    category: "Electronics & Components",
    subcategory: "Transistors & Regulators",
    specifications: {
      "Type": "Linear Voltage Regulator",
      "Output Voltage": "12V ±4%",
      "Max Output Current": "1A",
      "Input Voltage": "14.5V to 35V",
      "Package": "TO-220"
    },
    compatibility: ["12V systems", "Motor drivers", "Op-amp supplies"],
    projects: ["12V power supplies", "Motor driver supplies", "Op-amp dual supplies"],
    leadTime: "In Stock",
    tags: ["voltage-regulator", "12v", "linear", "7812"],
    overview: {
      type: "12V Linear Voltage Regulator",
      keySpecs: "12V output, 1A max current, TO-220 package",
      applications: "Powering 12V circuits, motor drivers, op-amp supplies",
      keyFeatures: ["Fixed 12V output", "Thermal protection", "Short circuit protection", "Motor driver compatible"],
      bestFor: "Powering 12V circuits, motor drivers, op-amp supplies"
    },
    supplier: "Multiple manufacturers - industry standard",
    bestFor: "Powering 12V circuits, motor drivers, op-amp supplies"
  }
]

// DIODES & LEDS
const diodesLEDs: ElectronicComponent[] = [
  {
    id: "diode-1n4007",
    name: "1N4007 Rectifier Diode",
    description: "General-purpose high-voltage diode for power applications and protection circuits",
    price: 300,
    studentPrice: 255,
    image: "/images/components/1n4007.jpg",
    inStock: true,
    stockLevel: 1000,
    rating: 4.8,
    reviews: 167,
    category: "Electronics & Components",
    subcategory: "Diodes & LEDs",
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
      keyFeatures: ["High voltage rating", "Robust construction", "Standard industry part", "Low leakage current"],
      bestFor: "Power rectification, reverse polarity protection, flyback suppression"
    },
    supplier: "Industrial grade silicon diode",
    bestFor: "Power rectification, reverse polarity protection, flyback suppression"
  },

  {
    id: "led-5mm-diffused",
    name: "5mm Diffused LED",
    description: "The classic indicator light with a soft, even glow - available in multiple colors",
    price: 250,
    studentPrice: 213,
    image: "/images/components/led-5mm-diffused.jpg",
    inStock: true,
    stockLevel: 500,
    rating: 4.9,
    reviews: 289,
    category: "Electronics & Components",
    subcategory: "Diodes & LEDs",
    specifications: {
      "Size": "5mm diameter",
      "Lens": "Diffused",
      "Forward Voltage": "2.0V (Red), 3.2V (Blue/White)",
      "Forward Current": "20mA maximum",
      "Viewing Angle": "50°"
    },
    compatibility: ["Microcontrollers", "Breadboards", "Indicator panels"],
    projects: ["Status indicators", "Educational circuits", "Debugging aids", "Panel indicators"],
    leadTime: "In Stock",
    tags: ["led", "5mm", "diffused", "indicator", "status"],
    overview: {
      type: "Light Emitting Diode",
      keySpecs: "5mm diameter, diffused lens, various colors available",
      applications: "Status indication, debugging, educational demonstrations, panel lighting",
      keyFeatures: ["Soft, even light distribution", "Standard 5mm package", "Long lifespan", "Low power consumption"],
      bestFor: "Power indicators, status lights, debugging, educational circuits"
    },
    supplier: "High-brightness LED, standard T1¾ package",
    bestFor: "Status indication, debugging, educational demonstrations"
  },

  {
    id: "led-rgb-common-cathode",
    name: "5mm 4Pin Common Cathode RGB LED",
    description: "A multi-color LED in a single package - create any color by mixing red, green, and blue",
    price: 800,
    studentPrice: 680,
    image: "/images/components/led-rgb.jpg",
    inStock: true,
    stockLevel: 180,
    rating: 4.7,
    reviews: 145,
    category: "Electronics & Components",
    subcategory: "Diodes & LEDs",
    specifications: {
      "Size": "5mm diameter",
      "Type": "Common Cathode RGB",
      "Pins": "4 pins (R, G, B, Common)",
      "Forward Voltage": "2.0V (Red), 3.2V (Green), 3.2V (Blue)",
      "Forward Current": "20mA per color"
    },
    compatibility: ["PWM controllers", "Arduino", "Color mixing circuits"],
    projects: ["Dynamic indicators", "Mood lighting", "Color displays", "Visual effects"],
    leadTime: "In Stock",
    tags: ["led", "rgb", "multi-color", "pwm", "common-cathode"],
    overview: {
      type: "RGB Multi-Color LED",
      keySpecs: "5mm diameter, Common Cathode, 4 pins",
      applications: "Creating dynamic status indicators, mood lighting, visual effects",
      keyFeatures: ["Three LEDs in one package", "Full color spectrum capability", "PWM compatible", "Common cathode design"],
      bestFor: "Creating dynamic status indicators, mood lighting, visual effects"
    },
    supplier: "High-quality RGB LED with clear lens",
    bestFor: "Creating dynamic status indicators, mood lighting, visual effects"
  },

  // Additional diodes and LEDs from comprehensive catalog
  {
    id: "diode-1n4148",
    name: "1N4148 Signal Diode",
    description: "While the 1N4007 is for power, the 1N4148 is for speed. It's a small signal diode designed for fast switching applications where high frequency or quick response is needed. It cannot handle much current but switches much faster than a rectifier diode.",
    price: 200,
    studentPrice: 170,
    image: "/images/components/1n4148.jpg",
    inStock: true,
    stockLevel: 800,
    rating: 4.7,
    reviews: 234,
    category: "Electronics & Components",
    subcategory: "Diodes & LEDs",
    specifications: {
      "Type": "Small Signal Diode",
      "Reverse Voltage": "100V",
      "Forward Current": "200mA",
      "Reverse Recovery Time": "4ns",
      "Package": "DO-35 Axial"
    },
    compatibility: ["Digital logic circuits", "Signal processing", "Protection circuits"],
    projects: ["Digital logic circuits", "Signal processing", "Protecting input pins"],
    leadTime: "In Stock",
    tags: ["diode", "signal", "1n4148", "fast-switching", "logic"],
    overview: {
      type: "Fast Signal Diode",
      keySpecs: "100V, 200mA, 4ns recovery time, fast switching",
      applications: "Digital logic circuits, signal processing, protecting input pins",
      keyFeatures: ["Very fast switching", "Small signal applications", "Logic compatible", "Low capacitance"],
      bestFor: "Digital logic circuits, signal processing, protecting input pins"
    },
    supplier: "High-speed silicon signal diode",
    bestFor: "Digital logic circuits, signal processing, protecting input pins"
  },

  {
    id: "diode-1n5819",
    name: "1N5819 Schottky Diode",
    description: "A Schottky diode has a very low forward voltage drop (typically 0.2V-0.3V) compared to regular diodes (~0.7V). This makes it much more efficient in low-voltage applications, such as solar panel blocking or protecting circuits from reverse voltage with minimal power loss.",
    price: 400,
    studentPrice: 340,
    image: "/images/components/1n5819.jpg",
    inStock: true,
    stockLevel: 300,
    rating: 4.8,
    reviews: 156,
    category: "Electronics & Components",
    subcategory: "Diodes & LEDs",
    specifications: {
      "Type": "Schottky Barrier Diode",
      "Reverse Voltage": "40V",
      "Forward Current": "1A",
      "Forward Voltage Drop": "0.2V-0.3V typical",
      "Package": "DO-41 Axial"
    },
    compatibility: ["Low-voltage circuits", "Solar panels", "Battery protection", "High-efficiency supplies"],
    projects: ["High-efficiency power supplies", "Reverse polarity protection in battery circuits", "Solar panel applications"],
    leadTime: "In Stock",
    tags: ["diode", "schottky", "1n5819", "low-drop", "efficient"],
    overview: {
      type: "Schottky Barrier Diode",
      keySpecs: "40V, 1A, 0.2-0.3V forward drop, high efficiency",
      applications: "High-efficiency power supplies, reverse polarity protection, solar applications",
      keyFeatures: ["Very low forward voltage", "High efficiency", "Fast switching", "Low power loss"],
      bestFor: "High-efficiency power supplies, reverse polarity protection in battery circuits, solar panel applications"
    },
    supplier: "Schottky barrier diode for efficiency",
    bestFor: "High-efficiency power supplies, reverse polarity protection in battery circuits, solar panel applications"
  },

  {
    id: "zener-5v1",
    name: "5.1V Zener Diode",
    description: "A Zener diode is a special type of diode that is designed to reliably allow current to flow 'backwards' when a specific breakdown voltage (the Zener voltage) is reached. This makes it incredibly useful for creating a stable voltage reference from a higher, less stable voltage source. This 5.1V Zener is perfect for protecting 5V logic from overvoltage.",
    price: 300,
    studentPrice: 255,
    image: "/images/components/zener-5v1.jpg",
    inStock: true,
    stockLevel: 200,
    rating: 4.6,
    reviews: 123,
    category: "Electronics & Components",
    subcategory: "Diodes & LEDs",
    specifications: {
      "Type": "Zener Voltage Regulator Diode",
      "Zener Voltage": "5.1V",
      "Power Rating": "1 Watt",
      "Tolerance": "±5%",
      "Package": "DO-41 Axial"
    },
    compatibility: ["Voltage regulation", "Overvoltage protection", "Reference circuits"],
    projects: ["Voltage regulation", "Overvoltage protection", "Signal clipping", "Reference voltages"],
    leadTime: "In Stock",
    tags: ["zener", "voltage-regulator", "5v1", "protection", "reference"],
    overview: {
      type: "Zener Voltage Regulator Diode",
      keySpecs: "5.1V Zener voltage, 1 Watt power rating, ±5% tolerance",
      applications: "Voltage regulation, overvoltage protection, signal clipping",
      keyFeatures: ["Precise voltage reference", "Overvoltage protection", "Signal clipping", "5V logic protection"],
      bestFor: "Voltage regulation, overvoltage protection, signal clipping"
    },
    supplier: "Precision Zener diode",
    bestFor: "Voltage regulation, overvoltage protection, signal clipping"
  },

  {
    id: "led-5mm-red",
    name: "5mm Red LED",
    description: "A bright, clear red LED. The clear lens focuses the light into a more intense, narrow beam. This is useful for applications where brightness is more important than viewing angle, such as in simple flashlight projects or as a high-visibility warning light.",
    price: 250,
    studentPrice: 213,
    image: "/images/components/led-5mm-red.jpg",
    inStock: true,
    stockLevel: 400,
    rating: 4.8,
    reviews: 312,
    category: "Electronics & Components",
    subcategory: "Diodes & LEDs",
    specifications: {
      "Size": "5mm diameter",
      "Color": "Red",
      "Lens": "Clear (focused beam)",
      "Forward Voltage": "2.0V typical",
      "Forward Current": "20mA maximum",
      "Luminous Intensity": "8000-12000 mcd"
    },
    compatibility: ["Indicator circuits", "Display panels", "Warning systems"],
    projects: ["High-visibility indicators", "Simple flashlight projects", "Warning lights", "Status displays"],
    leadTime: "In Stock",
    tags: ["led", "red", "5mm", "clear", "high-brightness"],
    overview: {
      type: "High-Brightness Red LED",
      keySpecs: "5mm diameter, clear lens, red color, 2.0V forward voltage",
      applications: "High-visibility indicators, warning lights, status displays",
      keyFeatures: ["Focused bright beam", "High visibility", "Standard package", "Reliable operation"],
      bestFor: "High-visibility indicators, simple flashlight projects, warning lights"
    },
    supplier: "High-brightness clear red LED",
    bestFor: "High-visibility indicators, simple flashlight projects, warning lights"
  },

  {
    id: "led-5mm-green",
    name: "5mm Green LED",
    description: "A bright, clear green LED, commonly used as a 'power on' or 'OK' status indicator. Its clear lens provides a focused, intense light.",
    price: 250,
    studentPrice: 213,
    image: "/images/components/led-5mm-green.jpg",
    inStock: true,
    stockLevel: 350,
    rating: 4.8,
    reviews: 287,
    category: "Electronics & Components",
    subcategory: "Diodes & LEDs",
    specifications: {
      "Size": "5mm diameter",
      "Color": "Green",
      "Lens": "Clear (focused beam)",
      "Forward Voltage": "2.2V typical",
      "Forward Current": "20mA maximum",
      "Luminous Intensity": "8000-12000 mcd"
    },
    compatibility: ["Status indicators", "Power-on displays", "Success signals"],
    projects: ["Power On indicators", "Success/ready status lights", "Go/OK signals"],
    leadTime: "In Stock",
    tags: ["led", "green", "5mm", "clear", "status", "power-on"],
    overview: {
      type: "High-Brightness Green LED",
      keySpecs: "5mm diameter, clear lens, green color, 2.2V forward voltage",
      applications: "Power-on indicators, success status lights, go/ready signals",
      keyFeatures: ["Clear focused beam", "Standard OK color", "High visibility", "Reliable indication"],
      bestFor: "Power On indicators, success/ready status lights"
    },
    supplier: "High-brightness clear green LED",
    bestFor: "Power On indicators, success/ready status lights"
  },

  {
    id: "led-5mm-blue",
    name: "5mm Blue LED",
    description: "A bright, clear blue LED. Blue LEDs have a higher forward voltage than red or green LEDs and are popular for creating a modern aesthetic in project enclosures.",
    price: 300,
    studentPrice: 255,
    image: "/images/components/led-5mm-blue.jpg",
    inStock: true,
    stockLevel: 250,
    rating: 4.7,
    reviews: 198,
    category: "Electronics & Components",
    subcategory: "Diodes & LEDs",
    specifications: {
      "Size": "5mm diameter",
      "Color": "Blue",
      "Lens": "Clear (focused beam)",
      "Forward Voltage": "3.2V typical",
      "Forward Current": "20mA maximum",
      "Luminous Intensity": "6000-8000 mcd"
    },
    compatibility: ["Modern interfaces", "Decorative lighting", "Custom displays"],
    projects: ["Modern user interfaces", "Custom case lighting", "Accent lighting", "Contemporary displays"],
    leadTime: "In Stock",
    tags: ["led", "blue", "5mm", "clear", "modern", "aesthetic"],
    overview: {
      type: "High-Brightness Blue LED",
      keySpecs: "5mm diameter, clear lens, blue color, 3.2V forward voltage",
      applications: "Modern user interfaces, decorative lighting, contemporary displays",
      keyFeatures: ["Modern aesthetic appeal", "Higher voltage operation", "Distinctive color", "Sharp focused beam"],
      bestFor: "Modern user interfaces, custom case lighting, accent lighting"
    },
    supplier: "High-brightness clear blue LED",
    bestFor: "Modern user interfaces, custom case lighting, accent lighting"
  },

  {
    id: "led-5mm-white",
    name: "5mm White LED",
    description: "A bright white LED suitable for illumination. Unlike colored LEDs, white LEDs are excellent for use in small flashlights, backlights, or for lighting up a small area.",
    price: 400,
    studentPrice: 340,
    image: "/images/components/led-5mm-white.jpg",
    inStock: true,
    stockLevel: 300,
    rating: 4.9,
    reviews: 245,
    category: "Electronics & Components",
    subcategory: "Diodes & LEDs",
    specifications: {
      "Size": "5mm diameter",
      "Color": "White (Cool White)",
      "Lens": "Clear (focused beam)",
      "Forward Voltage": "3.3V typical",
      "Forward Current": "20mA maximum",
      "Luminous Intensity": "10000-15000 mcd"
    },
    compatibility: ["Illumination projects", "Flashlights", "Backlighting"],
    projects: ["Small flashlights", "Task lighting", "Backlighting for custom displays", "Work area illumination"],
    leadTime: "In Stock",
    tags: ["led", "white", "5mm", "clear", "illumination", "flashlight"],
    overview: {
      type: "High-Brightness White LED",
      keySpecs: "5mm diameter, clear lens, white color, 3.3V forward voltage",
      applications: "Small flashlights, task lighting, display backlighting",
      keyFeatures: ["True illumination capability", "High brightness", "Cool white light", "Versatile lighting"],
      bestFor: "Small flashlights, task lighting, backlighting for custom displays"
    },
    supplier: "High-brightness cool white LED",
    bestFor: "Small flashlights, task lighting, backlighting for custom displays"
  },

  {
    id: "led-3mm-red",
    name: "3mm Red LED",
    description: "A smaller version of the classic indicator light. Its 3mm diameter makes it perfect for compact designs, such as small handheld devices or for adding multiple indicators on a crowded panel where space is at a premium.",
    price: 200,
    studentPrice: 170,
    image: "/images/components/led-3mm-red.jpg",
    inStock: true,
    stockLevel: 300,
    rating: 4.6,
    reviews: 178,
    category: "Electronics & Components",
    subcategory: "Diodes & LEDs",
    specifications: {
      "Size": "3mm diameter",
      "Color": "Red",
      "Lens": "Clear",
      "Forward Voltage": "2.0V typical",
      "Forward Current": "20mA maximum",
      "Luminous Intensity": "4000-6000 mcd"
    },
    compatibility: ["Compact designs", "Dense indicator panels", "Small devices"],
    projects: ["Compact designs", "Crowded indicator panels", "Model making", "Small device status"],
    leadTime: "In Stock",
    tags: ["led", "3mm", "red", "compact", "small", "indicator"],
    overview: {
      type: "Compact Red LED",
      keySpecs: "3mm diameter, red color, 2.0V forward voltage",
      applications: "Compact designs, dense indicator panels, small device status",
      keyFeatures: ["Space-saving design", "Standard brightness", "Compact form factor", "Multiple indicator panels"],
      bestFor: "Compact designs, crowded indicator panels, model making"
    },
    supplier: "Compact 3mm red LED",
    bestFor: "Compact designs, crowded indicator panels, model making"
  },

  {
    id: "led-10mm-red",
    name: "10mm Red LED",
    description: "A large, high-visibility LED. Its 10mm lens makes it impossible to miss, which is ideal for creating bold indicators, large custom displays, or for educational purposes where visibility is key.",
    price: 500,
    studentPrice: 425,
    image: "/images/components/led-10mm-red.jpg",
    inStock: true,
    stockLevel: 150,
    rating: 4.8,
    reviews: 134,
    category: "Electronics & Components",
    subcategory: "Diodes & LEDs",
    specifications: {
      "Size": "10mm diameter",
      "Color": "Red",
      "Lens": "Clear",
      "Forward Voltage": "2.0V typical",
      "Forward Current": "20mA maximum",
      "Luminous Intensity": "15000-20000 mcd"
    },
    compatibility: ["Large displays", "High-visibility applications", "Educational demonstrations"],
    projects: ["Large displays", "Educational demonstrations", "High-visibility warning signals", "Bold indicators"],
    leadTime: "In Stock",
    tags: ["led", "10mm", "red", "large", "high-visibility", "educational"],
    overview: {
      type: "Large High-Visibility Red LED",
      keySpecs: "10mm diameter, red color, 2.0V forward voltage, ultra-bright",
      applications: "Large displays, educational demonstrations, high-visibility warning signals",
      keyFeatures: ["Ultra-large size", "Impossible to miss", "Very high brightness", "Educational friendly"],
      bestFor: "Large displays, educational demonstrations, high-visibility warning signals"
    },
    supplier: "Large 10mm high-brightness red LED",
    bestFor: "Large displays, educational demonstrations, high-visibility warning signals"
  },

  {
    id: "led-ir-emitter",
    name: "IR Emitter LED",
    description: "An Infrared (IR) LED emits light in the infrared spectrum, which is invisible to the human eye but detectable by IR receiver photodiodes. It's the core component used in all standard remote controls.",
    price: 400,
    studentPrice: 340,
    image: "/images/components/led-ir-emitter.jpg",
    inStock: true,
    stockLevel: 200,
    rating: 4.7,
    reviews: 167,
    category: "Electronics & Components",
    subcategory: "Diodes & LEDs",
    specifications: {
      "Wavelength": "940nm",
      "Size": "5mm package",
      "Forward Voltage": "1.2V typical",
      "Forward Current": "100mA maximum",
      "Radiant Intensity": "20-40 mW/sr"
    },
    compatibility: ["Remote controls", "IR communication", "Proximity sensors"],
    projects: ["Building custom remote controls", "Data transmission", "Security systems", "Proximity detection"],
    leadTime: "In Stock",
    tags: ["led", "ir", "infrared", "940nm", "remote-control", "invisible"],
    overview: {
      type: "Infrared Emitter LED",
      keySpecs: "940nm wavelength, 5mm package, invisible to human eye",
      applications: "Custom remote controls, IR data transmission, security systems",
      keyFeatures: ["Invisible infrared light", "Standard remote frequency", "High radiant output", "Reliable communication"],
      bestFor: "Building custom remote controls, data transmission, security systems"
    },
    supplier: "940nm infrared emitter LED",
    bestFor: "Building custom remote controls, data transmission, security systems"
  },

  {
    id: "photodiode-ir-receiver",
    name: "IR Receiver Photodiode",
    description: "This is the sensor that detects the signals sent by an IR Emitter LED. It's tuned to the same wavelength and is the 'eye' in any IR-based communication system, like a television set receiving commands from a remote.",
    price: 450,
    studentPrice: 383,
    image: "/images/components/photodiode-ir.jpg",
    inStock: true,
    stockLevel: 180,
    rating: 4.6,
    reviews: 145,
    category: "Electronics & Components",
    subcategory: "Diodes & LEDs",
    specifications: {
      "Wavelength": "940nm detection",
      "Size": "5mm package",
      "Dark Current": "2nA typical",
      "Sensitivity": "High",
      "Response Time": "Fast"
    },
    compatibility: ["IR receivers", "Remote controls", "Break-beam sensors"],
    projects: ["Receiving signals from remote controls", "Building break-beam sensors", "Robotics proximity detection"],
    leadTime: "In Stock",
    tags: ["photodiode", "ir-receiver", "940nm", "detector", "remote", "sensor"],
    overview: {
      type: "Infrared Receiver Photodiode",
      keySpecs: "940nm detection, 5mm package, high sensitivity, fast response",
      applications: "IR remote receivers, break-beam sensors, proximity detection",
      keyFeatures: ["Tuned to IR emitters", "High sensitivity", "Fast response", "Low dark current"],
      bestFor: "Receiving signals from remote controls, building break-beam sensors, robotics"
    },
    supplier: "940nm infrared receiver photodiode",
    bestFor: "Receiving signals from remote controls, building break-beam sensors, robotics"
  }
]

// PASSIVE COMPONENTS (Essential resistors, capacitors, etc.)
const passiveComponents: ElectronicComponent[] = [
  {
    id: "res-1k",
    name: "Carbon Film Resistor 1/4W 5% - 1kΩ",
    description: "A fundamental passive component that resists the flow of current. The 1kΩ resistor is a versatile and common value, perfect for use as a pull-up resistor for digital logic pins (like on buttons and sensors) and for current limiting in low-power applications.",
    price: 150,
    studentPrice: 128,
    image: "/images/components/resistor-1k.jpg",
    inStock: true,
    stockLevel: 1000,
    rating: 4.8,
    reviews: 456,
    category: "Electronics & Components",
    subcategory: "Passive Components",
    specifications: {
      "Resistance": "1kΩ",
      "Power Rating": "1/4 Watt (0.25W)",
      "Tolerance": "±5%",
      "Temperature Coefficient": "±350 ppm/°C",
      "Package": "Axial leaded"
    },
    compatibility: ["Breadboards", "PCBs", "Digital logic", "Pull-up/down circuits"],
    projects: ["Pull-up/pull-down resistors", "Voltage dividers", "Current limiting for low-power LEDs"],
    leadTime: "In Stock",
    tags: ["resistor", "passive", "1k", "pull-up", "general-purpose"],
    overview: {
      type: "Carbon Film Resistor",
      keySpecs: "1kΩ, 1/4W, 5% tolerance - fundamental resistor value",
      applications: "Pull-up/pull-down resistors for digital logic pins, voltage dividers, current limiting",
      keyFeatures: ["Safe choice for pull-ups", "Low power consumption", "Standard breadboard compatible", "Color coded identification"],
      bestFor: "Pull-up/pull-down resistors, voltage dividers, current limiting for low-power LEDs"
    },
    supplier: "Standard component - multiple sources",
    bestFor: "Pull-up/pull-down resistors, voltage dividers, current limiting for low-power LEDs"
  },

  {
    id: "res-10k",
    name: "Carbon Film Resistor 1/4W 5% - 10kΩ",
    description: "The 10kΩ resistor is the most common value for pull-up resistors in digital circuits. It provides a weak 'pull' to a known voltage state (usually HIGH) for input pins, ensuring they don't 'float' and cause unpredictable behavior.",
    price: 150,
    studentPrice: 128,
    image: "/images/components/resistor-10k.jpg",
    inStock: true,
    stockLevel: 800,
    rating: 4.9,
    reviews: 567,
    category: "Electronics & Components",
    subcategory: "Passive Components",
    specifications: {
      "Resistance": "10kΩ",
      "Power Rating": "1/4 Watt (0.25W)",
      "Tolerance": "±5%",
      "Temperature Coefficient": "±350 ppm/°C",
      "Package": "Axial leaded"
    },
    compatibility: ["Digital circuits", "Arduino", "Pull-up/down applications", "I2C circuits"],
    projects: ["I2C pull-ups", "Button circuits", "Voltage dividers", "Biasing circuits"],
    leadTime: "In Stock",
    tags: ["resistor", "passive", "10k", "pull-up", "most-common", "i2c"],
    overview: {
      type: "Carbon Film Resistor",
      keySpecs: "10kΩ, 1/4W, 5% tolerance - the most versatile resistor value",
      applications: "Pull-up resistors for I2C, button debouncing, general purpose voltage division",
      keyFeatures: ["Industry standard value", "Perfect for digital circuits", "Arduino compatible", "Excellent reliability"],
      bestFor: "I2C pull-up resistors, button circuits, voltage dividers, biasing circuits"
    },
    supplier: "Professional grade resistor",
    bestFor: "I2C pull-up resistors, button circuits, voltage dividers, biasing circuits"
  },

  {
    id: "res-220",
    name: "Carbon Film Resistor 1/4W 5% - 220Ω",
    description: "The 220Ω resistor is the classic, go-to choice for limiting current to standard LEDs (like red or green) when powered from a 5V source. It provides a safe level of current to illuminate the LED brightly without burning it out.",
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
      "Resistance": "220Ω",
      "Power Rating": "1/4 Watt (0.25W)",
      "Tolerance": "±5%",
      "Temperature Coefficient": "±350 ppm/°C",
      "Package": "Axial leaded"
    },
    compatibility: ["Breadboards", "PCBs", "LED circuits", "5V systems"],
    projects: ["LED current limiting", "Voltage dividers", "Basic electronics projects"],
    leadTime: "In Stock",
    tags: ["resistor", "passive", "220ohm", "led-current-limiting", "classic"],
    overview: {
      type: "Carbon Film Resistor",
      keySpecs: "220Ω, 1/4W, 5% tolerance - classic LED current limiter",
      applications: "LED current limiting, voltage division, basic electronics projects",
      keyFeatures: ["Standard breadboard compatible", "Reliable carbon film construction", "Color coded for easy identification", "Perfect for 5V LED circuits"],
      bestFor: "Current limiting for LEDs, pull-up/pull-down resistors, building voltage dividers"
    },
    supplier: "Standard component - multiple sources",
    bestFor: "Current limiting for LEDs, pull-up/pull-down resistors, building voltage dividers"
  },

  {
    id: "res-330",
    name: "Carbon Film Resistor 1/4W 5% - 330Ω",
    description: "Ideal current-limiting resistor for most standard 5V LEDs, providing extra protection.",
    price: 150,
    studentPrice: 128,
    image: "/images/components/resistor-330.jpg",
    inStock: true,
    stockLevel: 600,
    rating: 4.8,
    reviews: 189,
    category: "Electronics & Components",
    subcategory: "Passive Components",
    specifications: {
      "Resistance": "330Ω",
      "Power Rating": "1/4 Watt",
      "Tolerance": "±5%",
      "Temperature Coefficient": "±350 ppm/°C",
      "Package": "Axial leaded"
    },
    compatibility: ["LED circuits", "5V systems", "Battery-powered projects"],
    projects: ["LED current limiting", "Low-power applications", "Battery circuits"],
    leadTime: "In Stock",
    tags: ["resistor", "passive", "330ohm", "led-protection", "conservative"],
    overview: {
      type: "Carbon Film Resistor",
      keySpecs: "330Ω, 1/4W, 5% tolerance - conservative LED protection",
      applications: "LED current limiting with extended lifespan, low-power circuits",
      keyFeatures: ["Extended LED life", "Lower power consumption", "Conservative choice", "Reliable operation"],
      bestFor: "Current limiting for LEDs, providing extra protection"
    },
    supplier: "Standard component - multiple sources",
    bestFor: "Current limiting for LEDs, providing extra protection"
  },

  {
    id: "res-4k7",
    name: "Carbon Film Resistor 1/4W 5% - 4.7kΩ",
    description: "Common value used in timing circuits and sensor interfaces.",
    price: 150,
    studentPrice: 128,
    image: "/images/components/resistor-4k7.jpg",
    inStock: true,
    stockLevel: 400,
    rating: 4.7,
    reviews: 156,
    category: "Electronics & Components",
    subcategory: "Passive Components",
    specifications: {
      "Resistance": "4.7kΩ",
      "Power Rating": "1/4 Watt",
      "Tolerance": "±5%",
      "Temperature Coefficient": "±350 ppm/°C",
      "Package": "Axial leaded"
    },
    compatibility: ["I2C circuits", "Timing circuits", "Sensor interfaces"],
    projects: ["I2C pull-up resistors", "Timing circuits", "Sensor interfacing"],
    leadTime: "In Stock",
    tags: ["resistor", "passive", "4k7", "timing", "i2c", "sensors"],
    overview: {
      type: "Carbon Film Resistor",
      keySpecs: "4.7kΩ, 1/4W, 5% tolerance - versatile mid-range value",
      applications: "I2C pull-up resistors, timing circuits, sensor interfacing",
      keyFeatures: ["Common timing value", "I2C compatible", "Sensor interfacing", "Mid-range resistance"],
      bestFor: "I2C pull-up resistors, timing circuits, sensor interfacing"
    },
    supplier: "Standard component - multiple sources",
    bestFor: "I2C pull-up resistors, timing circuits, sensor interfacing"
  },

  {
    id: "res-100k",
    name: "Carbon Film Resistor 1/4W 5% - 100kΩ",
    description: "High resistance value for low-power applications and sensing circuits.",
    price: 150,
    studentPrice: 128,
    image: "/images/components/resistor-100k.jpg",
    inStock: true,
    stockLevel: 300,
    rating: 4.6,
    reviews: 89,
    category: "Electronics & Components",
    subcategory: "Passive Components",
    specifications: {
      "Resistance": "100kΩ",
      "Power Rating": "1/4 Watt",
      "Tolerance": "±5%",
      "Temperature Coefficient": "±350 ppm/°C",
      "Package": "Axial leaded"
    },
    compatibility: ["Low-power circuits", "High-impedance applications", "Amplifier feedback"],
    projects: ["Low-power applications", "High-gain amplifiers", "Sensing circuits"],
    leadTime: "In Stock",
    tags: ["resistor", "passive", "100k", "high-impedance", "low-power"],
    overview: {
      type: "Carbon Film Resistor",
      keySpecs: "100kΩ, 1/4W, 5% tolerance - high resistance value",
      applications: "Low-power battery circuits, high-impedance sensing, amplifier feedback",
      keyFeatures: ["Very low current", "High impedance", "Battery friendly", "Amplifier applications"],
      bestFor: "Low-power applications, high-gain amplifiers, sensing circuits"
    },
    supplier: "Standard component - multiple sources",
    bestFor: "Low-power applications, high-gain amplifiers, sensing circuits"
  },

  {
    id: "res-1m",
    name: "Carbon Film Resistor 1/4W 5% - 1MΩ",
    description: "Very high resistance, often used in long-duration timing and high-impedance circuits.",
    price: 150,
    studentPrice: 128,
    image: "/images/components/resistor-1m.jpg",
    inStock: true,
    stockLevel: 200,
    rating: 4.5,
    reviews: 67,
    category: "Electronics & Components",
    subcategory: "Passive Components",
    specifications: {
      "Resistance": "1MΩ",
      "Power Rating": "1/4 Watt",
      "Tolerance": "±5%",
      "Temperature Coefficient": "±350 ppm/°C",
      "Package": "Axial leaded"
    },
    compatibility: ["Ultra-high impedance circuits", "Long-duration timers", "High-gain op-amps"],
    projects: ["Long-duration timers", "High-impedance circuits", "Static bleed resistors"],
    leadTime: "In Stock",
    tags: ["resistor", "passive", "1meg", "ultra-high-impedance", "timing"],
    overview: {
      type: "Carbon Film Resistor",
      keySpecs: "1MΩ, 1/4W, 5% tolerance - ultra-high resistance",
      applications: "Very long-duration timing circuits, ultra-high-gain op-amp feedback, static bleed",
      keyFeatures: ["Ultra-high impedance", "Long timing constants", "Minimal current flow", "Specialized applications"],
      bestFor: "Long-duration timers, high-impedance circuits, static bleed resistors"
    },
    supplier: "Standard component - multiple sources",
    bestFor: "Long-duration timers, high-impedance circuits, static bleed resistors"
  },

  {
    id: "res-kit-300",
    name: "Resistor Kit (300 pcs)",
    description: "A curated assortment of the most common resistor values for any workbench.",
    price: 12000,
    studentPrice: 10200,
    image: "/images/components/resistor-kit-300.jpg",
    inStock: true,
    stockLevel: 50,
    rating: 4.9,
    reviews: 178,
    category: "Electronics & Components",
    subcategory: "Passive Components",
    specifications: {
      "Quantity": "~300 pieces",
      "Power Rating": "1/4 Watt",
      "Tolerance": "5%",
      "Range": "10Ω to 1MΩ",
      "Package": "Organized strips"
    },
    compatibility: ["All electronic projects", "Breadboards", "PCBs", "Educational use"],
    projects: ["Prototyping", "Learning electronics", "Repair work", "General electronics"],
    leadTime: "In Stock",
    tags: ["resistor-kit", "assortment", "300-pieces", "prototyping", "educational"],
    overview: {
      type: "Resistor Assortment Kit",
      keySpecs: "300 pieces, multiple values 10Ω-1MΩ, organized strips",
      applications: "Prototyping, educational projects, electronics repair, general electronics work",
      keyFeatures: ["Complete value range", "Organized packaging", "Cost effective", "Always have the right value"],
      bestFor: "Hobbyists, students, and prototyping labs"
    },
    supplier: "Curated electronics component kit",
    bestFor: "Hobbyists, students, and prototyping labs"
  },

  {
    id: "pot-10k-linear",
    name: "Linear Potentiometer 10kΩ",
    description: "An adjustable resistor for user input, perfect for controlling volume or brightness.",
    price: 2500,
    studentPrice: 2125,
    image: "/images/components/pot-10k-linear.jpg",
    inStock: true,
    stockLevel: 120,
    rating: 4.7,
    reviews: 145,
    category: "Electronics & Components",
    subcategory: "Passive Components",
    specifications: {
      "Resistance": "10kΩ",
      "Taper": "Linear",
      "Pins": "3 terminals",
      "Rotation": "~270 degrees",
      "Power": "0.5W"
    },
    compatibility: ["Analog inputs", "Volume controls", "Brightness controls", "User interfaces"],
    projects: ["User inputs", "Calibration controls", "Creating adjustable reference voltages"],
    leadTime: "In Stock",
    tags: ["potentiometer", "variable-resistor", "10k", "linear", "user-input"],
    overview: {
      type: "Linear Potentiometer",
      keySpecs: "10kΩ resistance, linear taper, 3 terminals, 270° rotation",
      applications: "Manual control inputs, volume/brightness controls, variable voltage references",
      keyFeatures: ["Smooth linear response", "Standard mounting", "Reliable wiper contact", "User-friendly control"],
      bestFor: "User inputs, calibration controls, creating adjustable reference voltages"
    },
    supplier: "Quality potentiometer with smooth action",
    bestFor: "User inputs, calibration controls, creating adjustable reference voltages"
  },

  {
    id: "trim-10k",
    name: "Trimmer Potentiometer 10kΩ",
    description: "A miniature adjustable resistor designed to be set once during calibration or testing and then left alone.",
    price: 1500,
    studentPrice: 1275,
    image: "/images/components/trim-10k.jpg",
    inStock: true,
    stockLevel: 150,
    rating: 4.6,
    reviews: 98,
    category: "Electronics & Components",
    subcategory: "Passive Components",
    specifications: {
      "Resistance": "10kΩ",
      "Type": "Single-turn trimmer",
      "Adjustment": "Top adjustment",
      "Mounting": "PCB through-hole",
      "Size": "6mm x 6mm"
    },
    compatibility: ["Calibration circuits", "Threshold adjustments", "Gain controls"],
    projects: ["Circuit calibration", "Setting reference voltages", "Fine-tune adjustments"],
    leadTime: "In Stock",
    tags: ["trimmer", "trimpot", "calibration", "fine-tuning", "pcb-mount"],
    overview: {
      type: "Trimmer Potentiometer",
      keySpecs: "10kΩ resistance, single-turn, top-adjust, PCB mount",
      applications: "Circuit calibration, sensor threshold setting, amplifier gain adjustment",
      keyFeatures: ["Precise adjustment", "Set-and-forget design", "Compact size", "Reliable contact"],
      bestFor: "Circuit calibration, setting reference voltages, fine-tune adjustments"
    },
    supplier: "Precision trimmer potentiometer",
    bestFor: "Circuit calibration, setting reference voltages, fine-tune adjustments"
  },

  {
    id: "ldr-5mm",
    name: "Photoresistor (LDR)",
    description: "A Light-Dependent Resistor (LDR) is a special type of resistor whose resistance decreases as the intensity of light falling on it increases. By using it in a voltage divider, you can create a simple light sensor to detect ambient light levels or the presence of a direct light source.",
    price: 1200,
    studentPrice: 1020,
    image: "/images/components/ldr-5mm.jpg",
    inStock: true,
    stockLevel: 200,
    rating: 4.5,
    reviews: 167,
    category: "Electronics & Components",
    subcategory: "Passive Components",
    specifications: {
      "Type": "Cadmium Sulfide (CdS)",
      "Dark Resistance": ">200kΩ",
      "Bright Resistance": "~1kΩ",
      "Response Time": "~30ms",
      "Size": "5mm diameter"
    },
    compatibility: ["Light sensing circuits", "Automatic lighting", "Security systems"],
    projects: ["Automatic night lights", "Light-activated alarms", "Basic presence detection"],
    leadTime: "In Stock",
    tags: ["ldr", "photoresistor", "light-sensor", "cds", "automatic"],
    overview: {
      type: "Light-Dependent Resistor",
      keySpecs: "CdS photoresistor, ~1kΩ in bright light, >200kΩ in darkness",
      applications: "Automatic night lights, light-activated switches, ambient light detection",
      keyFeatures: ["Simple light sensing", "Wide resistance range", "No external power needed", "Analog output"],
      bestFor: "Automatic night lights, light-activated alarms, basic presence detection"
    },
    supplier: "Standard CdS photoresistor",
    bestFor: "Automatic night lights, light-activated alarms, basic presence detection"
  },

  // Additional resistor values from comprehensive catalog
  {
    id: "cap-22pf",
    name: "Ceramic Capacitor 22pF 50V",
    description: "This small value ceramic capacitor is most famously used as a load capacitor for crystal oscillators. Microcontrollers like the ATmega328P require a crystal for a stable clock, and that crystal needs two 22pF capacitors (one from each leg to ground) to oscillate correctly.",
    price: 200,
    studentPrice: 170,
    image: "/images/components/cap-22pf.jpg",
    inStock: true,
    stockLevel: 500,
    rating: 4.7,
    reviews: 89,
    category: "Electronics & Components",
    subcategory: "Passive Components",
    specifications: {
      "Capacitance": "22pF",
      "Voltage Rating": "50V",
      "Type": "Ceramic (Non-polarized)",
      "Tolerance": "±5%",
      "Temperature Coefficient": "C0G/NP0"
    },
    compatibility: ["Crystal oscillators", "RF circuits", "Timing circuits"],
    projects: ["Crystal oscillator circuits", "RF filtering", "Timing applications"],
    leadTime: "In Stock",
    tags: ["capacitor", "22pf", "ceramic", "crystal", "oscillator"],
    overview: {
      type: "Ceramic Capacitor",
      keySpecs: "22pF, Ceramic, Non-polarized, 50V rating",
      applications: "Crystal oscillator circuits, RF filtering",
      keyFeatures: ["Small value precision", "Low loss", "Temperature stable", "Non-polarized"],
      bestFor: "Crystal oscillator circuits, RF filtering"
    },
    supplier: "High-quality ceramic capacitor",
    bestFor: "Crystal oscillator circuits, RF filtering"
  },

  {
    id: "cap-100nf",
    name: "Ceramic Capacitor 100nF (0.1µF) 50V",
    description: "Also known as a '104' cap, this is the most essential capacitor for digital electronics. One of these should be placed as close as possible to the power and ground pins of every single integrated circuit in your project. It acts as a tiny, fast energy reservoir to smooth out voltage dips caused by the IC's switching.",
    price: 250,
    studentPrice: 213,
    image: "/images/components/cap-100nf.jpg",
    inStock: true,
    stockLevel: 800,
    rating: 4.9,
    reviews: 234,
    category: "Electronics & Components",
    subcategory: "Passive Components",
    specifications: {
      "Capacitance": "100nF / 0.1µF",
      "Code": "104",
      "Voltage Rating": "50V",
      "Type": "Ceramic (Non-polarized)",
      "Tolerance": "±10%"
    },
    compatibility: ["All integrated circuits", "Digital electronics", "Power supply decoupling"],
    projects: ["Decoupling ICs", "Timing applications", "Signal filtering", "Power supply bypass"],
    leadTime: "In Stock",
    tags: ["capacitor", "100nf", "104", "ceramic", "decoupling", "bypass"],
    overview: {
      type: "Ceramic Decoupling Capacitor",
      keySpecs: "100nF / 0.1µF / Code: 104, Ceramic, Non-polarized",
      applications: "Decoupling ICs, timing applications, signal filtering",
      keyFeatures: ["Essential for digital circuits", "Fast response", "Low ESR", "Standard value"],
      bestFor: "Decoupling ICs, timing applications, signal filtering"
    },
    supplier: "Professional grade ceramic capacitor",
    bestFor: "Decoupling ICs, timing applications, signal filtering"
  },

  {
    id: "cap-10uf-elec",
    name: "Electrolytic Capacitor 10µF 25V",
    description: "A small-capacity electrolytic capacitor. It's often used for signal coupling in audio circuits (to block DC while letting the AC audio signal pass) and for timing applications that require a longer duration than ceramic capacitors can provide. Note: It is polarized.",
    price: 400,
    studentPrice: 340,
    image: "/images/components/cap-10uf.jpg",
    inStock: true,
    stockLevel: 300,
    rating: 4.6,
    reviews: 167,
    category: "Electronics & Components",
    subcategory: "Passive Components",
    specifications: {
      "Capacitance": "10µF",
      "Voltage Rating": "25V",
      "Type": "Electrolytic (Polarized)",
      "ESR": "Low",
      "Temperature Range": "-40°C to +85°C"
    },
    compatibility: ["Audio circuits", "Timing circuits", "Power filtering"],
    projects: ["Audio signal coupling", "Short-duration timing circuits", "Power supply filtering"],
    leadTime: "In Stock",
    tags: ["capacitor", "10uf", "electrolytic", "polarized", "audio"],
    overview: {
      type: "Electrolytic Capacitor",
      keySpecs: "10µF Capacitance, 25V Max Voltage, Polarized",
      applications: "Audio signal coupling, short-duration timing circuits",
      keyFeatures: ["Polarized design", "Good for audio", "Timing applications", "Compact size"],
      bestFor: "Audio signal coupling, short-duration timing circuits"
    },
    supplier: "Quality electrolytic capacitor",
    bestFor: "Audio signal coupling, short-duration timing circuits"
  },

  {
    id: "cap-100uf-elec",
    name: "Electrolytic Capacitor 100µF 25V",
    description: "A very common general-purpose electrolytic capacitor. It's large enough to provide good filtering for small power supply circuits and can act as a small energy buffer for components that have sudden current demands. Note: It is polarized.",
    price: 600,
    studentPrice: 510,
    image: "/images/components/cap-100uf.jpg",
    inStock: true,
    stockLevel: 250,
    rating: 4.8,
    reviews: 145,
    category: "Electronics & Components",
    subcategory: "Passive Components",
    specifications: {
      "Capacitance": "100µF",
      "Voltage Rating": "25V",
      "Type": "Electrolytic (Polarized)",
      "ESR": "Low",
      "Ripple Current": "High"
    },
    compatibility: ["Power supplies", "Motor drivers", "Audio amplifiers"],
    projects: ["Filtering for voltage regulators", "Medium-duration timing", "Small power buffers"],
    leadTime: "In Stock",
    tags: ["capacitor", "100uf", "electrolytic", "polarized", "power"],
    overview: {
      type: "Electrolytic Capacitor",
      keySpecs: "100µF Capacitance, 25V Max Voltage, Polarized",
      applications: "Filtering for voltage regulators, medium-duration timing, small power buffers",
      keyFeatures: ["Good filtering capacity", "Energy storage", "Low ESR", "Reliable"],
      bestFor: "Filtering for voltage regulators, medium-duration timing, small power buffers"
    },
    supplier: "Industrial grade electrolytic capacitor",
    bestFor: "Filtering for voltage regulators, medium-duration timing, small power buffers"
  },

  {
    id: "cap-470uf-elec",
    name: "Electrolytic Capacitor 470µF 25V",
    description: "A mid-range, high-capacity capacitor. It provides more substantial energy storage and filtering than smaller values, making it suitable for smoothing the output of bridge rectifiers or providing a stable power rail for medium-power motors. Note: It is polarized.",
    price: 800,
    studentPrice: 680,
    image: "/images/components/cap-470uf.jpg",
    inStock: true,
    stockLevel: 180,
    rating: 4.7,
    reviews: 98,
    category: "Electronics & Components",
    subcategory: "Passive Components",
    specifications: {
      "Capacitance": "470µF",
      "Voltage Rating": "25V",
      "Type": "Electrolytic (Polarized)",
      "ESR": "Low",
      "Ripple Current": "High"
    },
    compatibility: ["Power supplies", "Motor circuits", "Audio systems"],
    projects: ["More robust power supply filtering", "Small audio amplifier power supplies", "Motor power smoothing"],
    leadTime: "In Stock",
    tags: ["capacitor", "470uf", "electrolytic", "polarized", "high-capacity"],
    overview: {
      type: "High-Capacity Electrolytic Capacitor",
      keySpecs: "470µF Capacitance, 25V Max Voltage, Polarized",
      applications: "More robust power supply filtering, small audio amplifier power supplies",
      keyFeatures: ["High capacity", "Good ripple handling", "Motor applications", "Power smoothing"],
      bestFor: "More robust power supply filtering, small audio amplifier power supplies"
    },
    supplier: "High-capacity electrolytic capacitor",
    bestFor: "More robust power supply filtering, small audio amplifier power supplies"
  },

  {
    id: "cap-1000uf-elec",
    name: "Electrolytic Capacitor 1000µF 25V",
    description: "A high-capacity electrolytic capacitor perfect for power supply applications. It's excellent at smoothing out rectified DC and can act as a significant temporary energy reservoir for high-current components like motors, preventing voltage sag across the rest of the circuit. Note: It is polarized.",
    price: 1200,
    studentPrice: 1020,
    image: "/images/components/cap-1000uf.jpg",
    inStock: true,
    stockLevel: 120,
    rating: 4.8,
    reviews: 134,
    category: "Electronics & Components",
    subcategory: "Passive Components",
    specifications: {
      "Capacitance": "1000µF",
      "Voltage Rating": "25V",
      "Type": "Electrolytic (Polarized)",
      "ESR": "Very Low",
      "Ripple Current": "Very High"
    },
    compatibility: ["Power supplies", "Motor drivers", "Audio power amplifiers"],
    projects: ["Power supply smoothing", "Bulk energy storage", "Audio power supplies", "Motor drive circuits"],
    leadTime: "In Stock",
    tags: ["capacitor", "1000uf", "electrolytic", "polarized", "bulk-storage"],
    overview: {
      type: "Bulk Storage Electrolytic Capacitor",
      keySpecs: "1000µF Capacitance, 25V Max Voltage, Polarized",
      applications: "Power supply smoothing, bulk energy storage, audio power supplies",
      keyFeatures: ["Very high capacity", "Excellent smoothing", "Energy reservoir", "Motor applications"],
      bestFor: "Power supply smoothing, bulk energy storage, audio power supplies"
    },
    supplier: "Professional power supply capacitor",
    bestFor: "Power supply smoothing, bulk energy storage, audio power supplies"
  },

  {
    id: "cap-10uf-tantalum",
    name: "Tantalum Capacitor 10µF 16V",
    description: "Tantalum capacitors offer high capacitance in a small volume and have more stable characteristics than aluminum electrolytic capacitors. They are used in applications where high capacitance and reliability are needed in a small physical size. Note: They are polarized and sensitive.",
    price: 1500,
    studentPrice: 1275,
    image: "/images/components/cap-tantalum-10uf.jpg",
    inStock: true,
    stockLevel: 100,
    rating: 4.6,
    reviews: 67,
    category: "Electronics & Components",
    subcategory: "Passive Components",
    specifications: {
      "Capacitance": "10µF",
      "Voltage Rating": "16V",
      "Type": "Tantalum (Polarized)",
      "ESR": "Very Low",
      "Size": "Compact"
    },
    compatibility: ["Space-constrained designs", "High-end audio", "Precision circuits"],
    projects: ["Space-constrained power filtering", "High-end audio circuits", "Precision applications"],
    leadTime: "In Stock",
    tags: ["capacitor", "10uf", "tantalum", "polarized", "compact"],
    overview: {
      type: "Tantalum Capacitor",
      keySpecs: "10µF Capacitance, 16V Max Voltage, Polarized",
      applications: "Space-constrained power filtering, high-end audio circuits",
      keyFeatures: ["High capacitance density", "Stable characteristics", "Low ESR", "Compact size"],
      bestFor: "Space-constrained power filtering, high-end audio circuits"
    },
    supplier: "Premium tantalum capacitor",
    bestFor: "Space-constrained power filtering, high-end audio circuits"
  },

  {
    id: "inductor-100uh",
    name: "Power Inductor 100µH",
    description: "An inductor is a passive component that stores energy in a magnetic field when electric current flows through it. Power inductors are crucial components in switching power supplies, such as buck and boost converters, where they are used to efficiently step voltage up or down.",
    price: 1800,
    studentPrice: 1530,
    image: "/images/components/inductor-100uh.jpg",
    inStock: true,
    stockLevel: 150,
    rating: 4.7,
    reviews: 89,
    category: "Electronics & Components",
    subcategory: "Passive Components",
    specifications: {
      "Inductance": "100µH",
      "Current Rating": "1A",
      "DC Resistance": "0.5Ω",
      "Tolerance": "±20%",
      "Core Material": "Ferrite"
    },
    compatibility: ["DC-DC converters", "Power supplies", "Filter circuits"],
    projects: ["Building DC-DC converters", "Power filters", "Energy storage circuits", "Switching supplies"],
    leadTime: "In Stock",
    tags: ["inductor", "100uh", "power", "switching", "converter"],
    overview: {
      type: "Power Inductor",
      keySpecs: "100µH Inductance, specific current rating (e.g., 1A)",
      applications: "Building DC-DC converters, power filters, energy storage circuits",
      keyFeatures: ["Energy storage", "Current smoothing", "Low DC resistance", "Power applications"],
      bestFor: "Building DC-DC converters, power filters, energy storage circuits"
    },
    supplier: "Power inductor for switching supplies",
    bestFor: "Building DC-DC converters, power filters, energy storage circuits"
  },

  {
    id: "crystal-16mhz",
    name: "Crystal Oscillator 16MHz",
    description: "A crystal oscillator provides a highly accurate and stable clock signal, which is essential for the precise operation of microcontrollers, timers, and digital communication protocols. This 16MHz crystal is the standard frequency used for many Arduino-compatible projects built around the ATmega328P microcontroller.",
    price: 1200,
    studentPrice: 1020,
    image: "/images/components/crystal-16mhz.jpg",
    inStock: true,
    stockLevel: 200,
    rating: 4.8,
    reviews: 156,
    category: "Electronics & Components",
    subcategory: "Passive Components",
    specifications: {
      "Frequency": "16.000 MHz",
      "Load Capacitance": "22pF",
      "Tolerance": "±50 ppm",
      "Package": "HC-49/S",
      "ESR": "60Ω max"
    },
    compatibility: ["ATmega328P", "Arduino", "Microcontrollers", "Digital systems"],
    projects: ["Providing a stable clock source for MCUs like the ATmega328P", "Precision timing", "Communication protocols"],
    leadTime: "In Stock",
    tags: ["crystal", "16mhz", "oscillator", "atmega328p", "arduino"],
    overview: {
      type: "Crystal Oscillator",
      keySpecs: "16.000 MHz Frequency, Requires two ~22pF capacitors for operation",
      applications: "Providing a stable clock source for MCUs like the ATmega328P",
      keyFeatures: ["High accuracy", "Stable frequency", "Low jitter", "Standard frequency"],
      bestFor: "Providing a stable clock source for MCUs like the ATmega328P"
    },
    supplier: "Precision quartz crystal",
    bestFor: "Providing a stable clock source for MCUs like the ATmega328P"
  },

  {
    id: "therm-ntc-10k",
    name: "Thermistor NTC 10kΩ",
    description: "A resistor whose resistance changes significantly with temperature. This NTC (Negative Temperature Coefficient) type means its resistance decreases as the temperature goes up. It's a simple and effective way to measure temperature.",
    price: 1800,
    studentPrice: 1530,
    image: "/images/components/therm-ntc-10k.jpg",
    inStock: true,
    stockLevel: 180,
    rating: 4.7,
    reviews: 123,
    category: "Electronics & Components",
    subcategory: "Passive Components",
    specifications: {
      "Type": "NTC (Negative Temperature Coefficient)",
      "Resistance": "10kΩ at 25°C",
      "Temperature Range": "-55°C to +125°C",
      "Accuracy": "±1°C",
      "Beta Value": "3950K"
    },
    compatibility: ["Temperature sensing", "Thermal protection", "MCU analog inputs"],
    projects: ["Temperature sensing", "Thermal protection circuits", "Simple thermometers"],
    leadTime: "In Stock",
    tags: ["thermistor", "ntc", "temperature-sensor", "10k", "thermal"],
    overview: {
      type: "NTC Thermistor",
      keySpecs: "10kΩ at 25°C, NTC type, -55°C to +125°C range",
      applications: "Temperature sensing, thermal protection, simple thermometer circuits",
      keyFeatures: ["High sensitivity", "Fast response", "Wide temperature range", "Simple interfacing"],
      bestFor: "Temperature sensing, thermal protection circuits, simple thermometers"
    },
    supplier: "Precision NTC thermistor",
    bestFor: "Temperature sensing, thermal protection circuits, simple thermometers"
  }
]

// SENSORS & DETECTION
const sensorsDetection: ElectronicComponent[] = [
  // Note: LDR, thermistor, and trimmer components are already included in the passive components section above
]

// ELECTROMECHANICAL COMPONENTS  
const electromechanicalComponents: ElectronicComponent[] = [
  {
    id: "motor-sg90",
    name: "SG90 9g Micro Servo Motor",
    description: "Popular tiny servo motor for robotics and RC projects, offering precise angular control.",
    price: 3500,
    studentPrice: 2975,
    image: "/images/components/servo-sg90.jpg",
    inStock: true,
    stockLevel: 120,
    rating: 4.7,
    reviews: 189,
    category: "Electronics & Components",
    subcategory: "Electromechanical",
    specifications: {
      "Torque": "1.8 kg⋅cm (4.8V)",
      "Speed": "0.1 s/60° (4.8V)",
      "Operating Voltage": "4.8V - 6V",
      "Control Signal": "PWM (1-2ms pulse width)",
      "Rotation": "180° (±90°)"
    },
    compatibility: ["Arduino", "Raspberry Pi", "RC systems", "Robotics platforms"],
    projects: ["Robot arms", "Camera gimbals", "RC planes", "Automated systems"],
    leadTime: "In Stock",
    tags: ["servo", "motor", "sg90", "micro", "robotics"],
    overview: {
      type: "Micro Servo Motor",
      keySpecs: "9g weight, 1.8kg⋅cm torque, 180° rotation, PWM control",
      applications: "Robotics projects, RC applications, automation, precise positioning",
      keyFeatures: ["Lightweight design", "Precise control", "Standard connector", "High reliability"],
      bestFor: "Robotics projects, RC applications, automation systems"
    },
    supplier: "TowerPro SG90 or compatible",
    bestFor: "Robotics projects, RC applications, automation systems"
  },

  {
    id: "motor-dc-tt",
    name: "TT Gear Motor DC 3-6V",
    description: "Dual-shaft geared DC motor perfect for robot wheels and small mechanical projects.",
    price: 4500,
    studentPrice: 3825,
    image: "/images/components/tt-motor.jpg",
    inStock: true,
    stockLevel: 85,
    rating: 4.6,
    reviews: 134,
    category: "Electronics & Components",
    subcategory: "Electromechanical",
    specifications: {
      "Operating Voltage": "3V - 6V",
      "Gear Ratio": "1:48",
      "RPM": "90 RPM (6V)",
      "Current": "120mA (no load)",
      "Shaft": "Dual shaft design"
    },
    compatibility: ["Robot chassis", "L293D motor driver", "Arduino projects"],
    projects: ["Robot cars", "Wheeled vehicles", "Simple automation", "Mechanical projects"],
    leadTime: "In Stock",
    tags: ["dc-motor", "geared", "tt-motor", "robot", "wheels"],
    overview: {
      type: "Geared DC Motor",
      keySpecs: "3-6V operation, 1:48 gear ratio, dual shaft, 90 RPM at 6V",
      applications: "Robot wheels, small mechanical drives, educational robotics",
      keyFeatures: ["Dual shaft output", "Built-in gearbox", "Low voltage operation", "Easy mounting"],
      bestFor: "Robot wheels, small mechanical drives, educational robotics"
    },
    supplier: "Standard TT motor with metal gears",
    bestFor: "Robot wheels, small mechanical drives, educational robotics"
  },

  {
    id: "buzzer-passive-5v",
    name: "Passive Buzzer 5V",
    description: "A passive buzzer that requires an AC signal to produce sound - great for creating custom tones and melodies.",
    price: 1200,
    studentPrice: 1020,
    image: "/images/components/buzzer-passive.jpg",
    inStock: true,
    stockLevel: 200,
    rating: 4.5,
    reviews: 156,
    category: "Electronics & Components",
    subcategory: "Electromechanical",
    specifications: {
      "Type": "Passive (requires AC signal)",
      "Operating Voltage": "3V - 12V",
      "Frequency Range": "2kHz - 5kHz",
      "Sound Level": "85dB at 10cm",
      "Size": "12mm diameter"
    },
    compatibility: ["PWM outputs", "Tone generation", "Arduino", "Music projects"],
    projects: ["Alarms", "Musical projects", "Notification sounds", "Beepers"],
    leadTime: "In Stock",
    tags: ["buzzer", "passive", "audio", "alarm", "tone"],
    overview: {
      type: "Passive Buzzer",
      keySpecs: "Requires AC signal, 2-5kHz range, 85dB output, 12mm size",
      applications: "Custom tones, melodies, alarms, notification systems",
      keyFeatures: ["Frequency control", "PWM compatible", "Custom tones possible", "Compact design"],
      bestFor: "Custom tones, melodies, alarms, notification systems"
    },
    supplier: "Electromagnetic passive buzzer",
    bestFor: "Custom tones, melodies, alarms, notification systems"
  }
]

// ADDITIONAL SEMICONDUCTORS
const semiconductors: ElectronicComponent[] = [
  {
    id: "trans-tip120",
    name: "TIP120 NPN Darlington Transistor",
    description: "High-power Darlington transistor for switching heavy loads like motors and solenoids.",
    price: 1500,
    studentPrice: 1275,
    image: "/images/components/tip120.jpg",
    inStock: true,
    stockLevel: 120,
    rating: 4.8,
    reviews: 167,
    category: "Electronics & Components",
    subcategory: "Transistors & Regulators",
    specifications: {
      "Type": "NPN Darlington Transistor",
      "Max Collector Voltage": "60V",
      "Max Collector Current": "5A",
      "Power Dissipation": "65W",
      "Package": "TO-220"
    },
    compatibility: ["High-power switching", "Motor control", "Relay drivers"],
    projects: ["Motor control", "Solenoid drivers", "High-power LED strips", "Relay switching"],
    leadTime: "In Stock",
    tags: ["darlington", "npn", "high-power", "tip120", "motor-driver"],
    overview: {
      type: "High-Power Darlington Transistor",
      keySpecs: "NPN Darlington, 60V, 5A, high current gain, TO-220 package",
      applications: "High-power switching, motor control, solenoid drivers",
      keyFeatures: ["Very high current gain", "High power capability", "Built-in protection diode", "Easy heat sinking"],
      bestFor: "High-power switching, motor control, solenoid drivers"
    },
    supplier: "Standard high-power Darlington transistor",
    bestFor: "High-power switching, motor control, solenoid drivers"
  },

  {
    id: "reg-lm317",
    name: "LM317 Adjustable Voltage Regulator",
    description: "Popular adjustable linear voltage regulator capable of supplying 1.5A over a wide output voltage range.",
    price: 2200,
    studentPrice: 1870,
    image: "/images/components/lm317.jpg",
    inStock: true,
    stockLevel: 75,
    rating: 4.7,
    reviews: 143,
    category: "Electronics & Components",
    subcategory: "Transistors & Regulators",
    specifications: {
      "Type": "Adjustable Linear Voltage Regulator",
      "Output Voltage Range": "1.2V - 37V",
      "Output Current": "1.5A",
      "Input Voltage": "3V - 40V",
      "Package": "TO-220"
    },
    compatibility: ["Adjustable power supplies", "Variable voltage sources", "Battery chargers"],
    projects: ["Variable power supplies", "LED current regulation", "Battery charging circuits"],
    leadTime: "In Stock",
    tags: ["regulator", "adjustable", "lm317", "linear", "power"],
    overview: {
      type: "Adjustable Voltage Regulator",
      keySpecs: "1.2-37V output, 1.5A current, adjustable with resistors",
      applications: "Variable power supplies, current regulation, voltage references",
      keyFeatures: ["Wide voltage range", "Current limiting", "Thermal protection", "Easy adjustment"],
      bestFor: "Variable power supplies, current regulation, voltage references"
    },
    supplier: "Texas Instruments LM317 or equivalent",
    bestFor: "Variable power supplies, current regulation, voltage references"
  },

  // Additional transistors and regulators from comprehensive catalog
  {
    id: "trans-2n2222",
    name: "2N2222 NPN Transistor",
    description: "High-speed switching transistor - ideal for fast switching applications and RF circuits.",
    price: 400,
    studentPrice: 340,
    image: "/images/components/2n2222.jpg",
    inStock: true,
    stockLevel: 350,
    rating: 4.8,
    reviews: 234,
    category: "Electronics & Components",
    subcategory: "Transistors & Regulators",
    specifications: {
      "Type": "NPN Bipolar Junction Transistor",
      "Max Collector Voltage": "40V",
      "Max Collector Current": "800mA", 
      "Power Dissipation": "500mW",
      "Package": "TO-92"
    },
    compatibility: ["High-speed switching", "RF circuits", "Amplifiers"],
    projects: ["Fast switching", "RF oscillators", "High-frequency amplifiers", "Timer circuits"],
    leadTime: "In Stock",
    tags: ["npn", "transistor", "high-speed", "2n2222", "rf"],
    overview: {
      type: "High-Speed NPN Transistor",
      keySpecs: "NPN BJT, 40V max VCE, 800mA max collector current, high-speed",
      applications: "Fast switching circuits, RF oscillators, high-frequency applications",
      keyFeatures: ["High-speed switching", "Good frequency response", "Higher current capability", "Industry standard"],
      bestFor: "Fast switching circuits, RF oscillators, high-frequency applications"
    },
    supplier: "Standard semiconductor manufacturers",
    bestFor: "Fast switching circuits, RF oscillators, high-frequency applications"
  },

  {
    id: "trans-irfz44n",
    name: "IRFZ44N N-Channel MOSFET",
    description: "High-power N-channel MOSFET for heavy-duty switching applications and motor control.",
    price: 4200,
    studentPrice: 3570,
    image: "/images/components/irfz44n.jpg",
    inStock: true,
    stockLevel: 65,
    rating: 4.9,
    reviews: 156,
    category: "Electronics & Components",
    subcategory: "Transistors & Regulators",
    specifications: {
      "Type": "N-Channel Power MOSFET",
      "Max Drain Voltage": "55V",
      "Max Drain Current": "49A",
      "On-Resistance": "17.5mΩ",
      "Package": "TO-220"
    },
    compatibility: ["High-power switching", "Motor controllers", "Power supplies"],
    projects: ["Motor speed control", "High-power LED drivers", "DC motor controllers", "Power switching"],
    leadTime: "In Stock",
    tags: ["mosfet", "n-channel", "high-power", "irfz44n", "motor-control"],
    overview: {
      type: "High-Power N-Channel MOSFET",
      keySpecs: "N-Channel MOSFET, 55V max VDS, 49A max drain current, ultra-low RDS",
      applications: "High-power motor control, LED drivers, switching power supplies",
      keyFeatures: ["Very high current capability", "Ultra-low on-resistance", "Fast switching", "High efficiency"],
      bestFor: "High-power motor control, LED drivers, switching power supplies"
    },
    supplier: "International Rectifier IRFZ44N",
    bestFor: "High-power motor control, LED drivers, switching power supplies"
  },

  {
    id: "trans-irf9540",
    name: "IRF9540 P-Channel MOSFET",
    description: "P-channel power MOSFET for high-side switching and complementary circuits.",
    price: 4500,
    studentPrice: 3825,
    image: "/images/components/irf9540.jpg",
    inStock: true,
    stockLevel: 55,
    rating: 4.7,
    reviews: 98,
    category: "Electronics & Components",
    subcategory: "Transistors & Regulators",
    specifications: {
      "Type": "P-Channel Power MOSFET",
      "Max Drain Voltage": "-100V",
      "Max Drain Current": "-23A", 
      "On-Resistance": "117mΩ",
      "Package": "TO-220"
    },
    compatibility: ["High-side switching", "Complementary circuits", "Protection circuits"],
    projects: ["High-side power switches", "Reverse polarity protection", "Load switches"],
    leadTime: "In Stock",
    tags: ["mosfet", "p-channel", "high-side", "irf9540", "protection"],
    overview: {
      type: "P-Channel Power MOSFET",
      keySpecs: "P-Channel MOSFET, 100V max VDS, 23A max drain current",
      applications: "High-side switching, reverse polarity protection, complementary switching",
      keyFeatures: ["High-side switching capability", "High voltage rating", "Complementary to N-channel", "Protection applications"],
      bestFor: "High-side switching, reverse polarity protection, complementary switching"
    },
    supplier: "International Rectifier IRF9540",
    bestFor: "High-side switching, reverse polarity protection, complementary switching"
  },

  {
    id: "trans-2n7000",
    name: "2N7000 N-Channel MOSFET",
    description: "Small signal N-channel MOSFET perfect for logic level switching and low-power applications.",
    price: 800,
    studentPrice: 680,
    image: "/images/components/2n7000.jpg",
    inStock: true,
    stockLevel: 200,
    rating: 4.8,
    reviews: 167,
    category: "Electronics & Components",
    subcategory: "Transistors & Regulators",
    specifications: {
      "Type": "N-Channel Small Signal MOSFET",
      "Max Drain Voltage": "60V",
      "Max Drain Current": "200mA",
      "On-Resistance": "5.1Ω",
      "Package": "TO-92"
    },
    compatibility: ["Logic level switching", "Arduino outputs", "Low-power circuits"],
    projects: ["Logic level switching", "LED drivers", "Small motor control", "Interface circuits"],
    leadTime: "In Stock",
    tags: ["mosfet", "n-channel", "small-signal", "logic-level", "2n7000"],
    overview: {
      type: "Small Signal N-Channel MOSFET",
      keySpecs: "N-Channel MOSFET, 60V max VDS, 200mA max current, logic level",
      applications: "Logic level switching from microcontrollers, small load switching",
      keyFeatures: ["Logic level gate voltage", "Small TO-92 package", "Low power consumption", "Direct MCU drive"],
      bestFor: "Logic level switching from microcontrollers, small load switching"
    },
    supplier: "Fairchild/ON Semiconductor 2N7000",
    bestFor: "Logic level switching from microcontrollers, small load switching"
  },

  {
    id: "reg-7809",
    name: "7809 Voltage Regulator",
    description: "Fixed 9V linear voltage regulator for powering 9V circuits and systems.",
    price: 1300,
    studentPrice: 1105,
    image: "/images/components/7809.jpg",
    inStock: true,
    stockLevel: 120,
    rating: 4.7,
    reviews: 89,
    category: "Electronics & Components",
    subcategory: "Transistors & Regulators",
    specifications: {
      "Type": "Linear Voltage Regulator",
      "Output Voltage": "9V ±4%",
      "Max Output Current": "1A",
      "Input Voltage": "11.5V to 35V",
      "Package": "TO-220"
    },
    compatibility: ["9V systems", "Audio circuits", "Sensor supplies"],
    projects: ["9V power supplies", "Audio amplifier supplies", "Sensor power rails"],
    leadTime: "In Stock",
    tags: ["voltage-regulator", "9v", "linear", "7809"],
    overview: {
      type: "9V Linear Voltage Regulator",
      keySpecs: "9V output, 1A max current, TO-220 package",
      applications: "Powering 9V circuits, audio equipment, sensor systems",
      keyFeatures: ["Fixed 9V output", "Thermal protection", "Short circuit protection", "Standard TO-220"],
      bestFor: "Powering 9V circuits, audio equipment, sensor systems"
    },
    supplier: "Multiple manufacturers - industry standard",
    bestFor: "Powering 9V circuits, audio equipment, sensor systems"
  },

  {
    id: "reg-7812",
    name: "7812 Voltage Regulator",
    description: "Fixed 12V linear voltage regulator for powering 12V systems and motor drivers.",
    price: 1400,
    studentPrice: 1190,
    image: "/images/components/7812.jpg",
    inStock: true,
    stockLevel: 100,
    rating: 4.8,
    reviews: 112,
    category: "Electronics & Components",
    subcategory: "Transistors & Regulators",
    specifications: {
      "Type": "Linear Voltage Regulator",
      "Output Voltage": "12V ±4%",
      "Max Output Current": "1A",
      "Input Voltage": "14.5V to 35V",
      "Package": "TO-220"
    },
    compatibility: ["12V systems", "Motor drivers", "Op-amp supplies"],
    projects: ["12V power supplies", "Motor driver supplies", "Op-amp dual supplies"],
    leadTime: "In Stock",
    tags: ["voltage-regulator", "12v", "linear", "7812"],
    overview: {
      type: "12V Linear Voltage Regulator",
      keySpecs: "12V output, 1A max current, TO-220 package",
      applications: "Powering 12V circuits, motor drivers, op-amp supplies",
      keyFeatures: ["Fixed 12V output", "Thermal protection", "Short circuit protection", "Motor driver compatible"],
      bestFor: "Powering 12V circuits, motor drivers, op-amp supplies"
    },
    supplier: "Multiple manufacturers - industry standard",
    bestFor: "Powering 12V circuits, motor drivers, op-amp supplies"
  }
]

// MODULES & BREAKOUTS  
const modules: ElectronicComponent[] = [
  {
    id: "mod-rtc-ds1307",
    name: "DS1307 Real Time Clock Module",
    description: "Keep accurate time in your projects with this battery-backed RTC module",
    price: 4500,
    studentPrice: 3825,
    image: "/images/components/ds1307-rtc.jpg",
    inStock: true,
    stockLevel: 75,
    rating: 4.8,
    reviews: 134,
    category: "Electronics & Components",
    subcategory: "Modules",
    specifications: {
      "Chip": "DS1307 RTC + 24C32 EEPROM",
      "Interface": "I2C (SDA, SCL)",
      "Voltage": "5V supply",
      "Battery": "CR2032 coin cell (included)",
      "Accuracy": "±2 minutes per month"
    },
    compatibility: ["Arduino", "Raspberry Pi", "Any I2C microcontroller"],
    projects: ["Data loggers", "Clocks", "Scheduling systems", "Time-stamped projects"],
    leadTime: "In Stock",
    tags: ["rtc", "real-time-clock", "i2c", "ds1307", "time"],
    overview: {
      type: "Real Time Clock Module", 
      keySpecs: "DS1307 chip, I2C interface, battery backup, 32KB EEPROM",
      applications: "Data logging with timestamps, digital clocks, scheduling systems",
      keyFeatures: ["Battery backup maintains time", "Built-in EEPROM storage", "Simple I2C interface", "Arduino libraries available"],
      bestFor: "Data logging with timestamps, digital clocks, scheduling systems"
    },
    supplier: "Pre-assembled module with battery",
    bestFor: "Data logging with timestamps, digital clocks, scheduling systems"
  },

  {
    id: "mod-sd-card",
    name: "MicroSD Card Reader Module", 
    description: "Add file storage capabilities to your microcontroller projects",
    price: 3500,
    studentPrice: 2975,
    image: "/images/components/sd-card-module.jpg",
    inStock: true,
    stockLevel: 95,
    rating: 4.7,
    reviews: 167,
    category: "Electronics & Components", 
    subcategory: "Modules",
    specifications: {
      "Interface": "SPI (MISO, MOSI, SCK, CS)",
      "Voltage": "3.3V/5V compatible",
      "Card Support": "MicroSD up to 32GB",
      "File Systems": "FAT16, FAT32",
      "Size": "15mm x 20mm"
    },
    compatibility: ["Arduino", "ESP32", "STM32", "Any SPI microcontroller"],
    projects: ["Data logging", "Music players", "File storage", "Configuration backup"],
    leadTime: "In Stock", 
    tags: ["sd-card", "storage", "spi", "file-system", "data-logging"],
    overview: {
      type: "MicroSD Storage Module",
      keySpecs: "SPI interface, 3.3V/5V operation, supports up to 32GB cards",
      applications: "Data logging, storing configuration files, audio file playback",
      keyFeatures: ["Standard SPI interface", "Voltage level conversion", "Arduino SD library compatible", "Hot-swap capability"],
      bestFor: "Data logging, storing configuration files, audio file playback"
    },
    supplier: "Professional breakout module",
    bestFor: "Data logging, storing configuration files, audio file playback"
  },

  {
    id: "mod-adc-ads1115",
    name: "ADS1115 16-Bit ADC Module",
    description: "High-precision analog-to-digital converter for accurate sensor readings",
    price: 8500,
    studentPrice: 7225,
    image: "/images/components/ads1115-adc.jpg",
    inStock: true,
    stockLevel: 45,
    rating: 4.9,
    reviews: 89,
    category: "Electronics & Components",
    subcategory: "Modules", 
    specifications: {
      "Resolution": "16-bit ADC",
      "Channels": "4 single-ended or 2 differential",
      "Interface": "I2C",
      "Voltage": "2V to 5.5V",
      "Sample Rate": "Up to 860 SPS"
    },
    compatibility: ["Arduino", "Raspberry Pi", "ESP32", "Professional instruments"],
    projects: ["High-precision sensors", "Battery monitoring", "Industrial control", "Scientific instruments"],
    leadTime: "In Stock",
    tags: ["adc", "16-bit", "precision", "i2c", "ads1115"],
    overview: {
      type: "16-Bit Precision ADC",
      keySpecs: "16-bit resolution, 4 channels, I2C interface, programmable gain",
      applications: "High-precision sensor readings, battery monitoring, scientific measurements",
      keyFeatures: ["16-bit precision", "Programmable gain amplifier", "Low power consumption", "Multiple input configurations"],
      bestFor: "High-precision sensor readings, battery monitoring, scientific measurements"
    },
    supplier: "Texas Instruments ADS1115 chip",
    bestFor: "High-precision sensor readings, battery monitoring, scientific measurements"
  },

  // Additional essential modules from comprehensive catalog
  {
    id: "sensor-dht22",
    name: "DHT22 Temperature & Humidity Sensor",
    description: "High-precision digital temperature and humidity sensor with better accuracy than DHT11.",
    price: 6500,
    studentPrice: 5525,
    image: "/images/components/dht22.jpg",
    inStock: true,
    stockLevel: 85,
    rating: 4.8,
    reviews: 234,
    category: "Electronics & Components",
    subcategory: "Sensors & Detection",
    specifications: {
      "Temperature Range": "-40°C to +80°C",
      "Humidity Range": "0-100% RH",
      "Temperature Accuracy": "±0.5°C",
      "Humidity Accuracy": "±2-5% RH",
      "Interface": "Single-wire digital"
    },
    compatibility: ["Arduino", "ESP32", "Raspberry Pi", "Most microcontrollers"],
    projects: ["Weather stations", "Environmental monitoring", "HVAC systems", "Greenhouse automation"],
    leadTime: "In Stock",
    tags: ["dht22", "temperature", "humidity", "environmental", "digital"],
    overview: {
      type: "Digital Temperature & Humidity Sensor",
      keySpecs: "±0.5°C temp accuracy, ±2-5% humidity accuracy, single-wire interface",
      applications: "Weather monitoring, environmental control systems, HVAC automation",
      keyFeatures: ["High accuracy", "Digital output", "Low power consumption", "Calibrated and compensated"],
      bestFor: "Weather monitoring, environmental control systems, HVAC automation"
    },
    supplier: "ASAIR DHT22 sensor",
    bestFor: "Weather monitoring, environmental control systems, HVAC automation"
  },

  {
    id: "sensor-hc-sr04",
    name: "HC-SR04 Ultrasonic Distance Sensor",
    description: "Popular ultrasonic sensor for distance measurement from 2cm to 4m with high accuracy.",
    price: 4500,
    studentPrice: 3825,
    image: "/images/components/hc-sr04.jpg",
    inStock: true,
    stockLevel: 120,
    rating: 4.7,
    reviews: 378,
    category: "Electronics & Components",
    subcategory: "Sensors & Detection",
    specifications: {
      "Range": "2cm to 400cm",
      "Accuracy": "±3mm",
      "Working Voltage": "5V DC",
      "Working Current": "15mA",
      "Frequency": "40KHz"
    },
    compatibility: ["Arduino", "Raspberry Pi", "All 5V microcontrollers"],
    projects: ["Obstacle avoidance robots", "Parking sensors", "Liquid level monitoring", "Security systems"],
    leadTime: "In Stock",
    tags: ["ultrasonic", "distance", "hc-sr04", "sonar", "ranging"],
    overview: {
      type: "Ultrasonic Distance Sensor",
      keySpecs: "2-400cm range, ±3mm accuracy, 40KHz ultrasonic, 5V operation",
      applications: "Robot navigation, parking assistance, liquid level sensing, security systems",
      keyFeatures: ["Non-contact measurement", "High accuracy", "Wide detection range", "Easy interface"],
      bestFor: "Robot navigation, parking assistance, liquid level sensing"
    },
    supplier: "HC-SR04 ultrasonic ranging module",
    bestFor: "Robot navigation, parking assistance, liquid level sensing"
  },

  {
    id: "motor-driver-l298n",
    name: "L298N Motor Driver Module",
    description: "Dual H-bridge motor driver module capable of controlling two DC motors or one stepper motor.",
    price: 8500,
    studentPrice: 7225,
    image: "/images/components/l298n-module.jpg",
    inStock: true,
    stockLevel: 75,
    rating: 4.9,
    reviews: 267,
    category: "Electronics & Components",
    subcategory: "Modules",
    specifications: {
      "Motor Channels": "2 independent channels",
      "Motor Voltage": "5V to 35V",
      "Logic Voltage": "5V",
      "Current per Channel": "2A continuous, 3A peak",
      "Size": "43mm x 43mm"
    },
    compatibility: ["Arduino", "Raspberry Pi", "ESP32", "DC motors", "Stepper motors"],
    projects: ["Robot cars", "Rover platforms", "Automated systems", "Motor speed control"],
    leadTime: "In Stock",
    tags: ["motor-driver", "l298n", "h-bridge", "robotics", "dual-motor"],
    overview: {
      type: "Dual H-Bridge Motor Driver",
      keySpecs: "Controls 2 DC motors, 2A per channel, 5-35V motor voltage",
      applications: "Robot vehicles, automated systems, motor speed and direction control",
      keyFeatures: ["Built-in voltage regulator", "LED indicators", "Heat sink included", "Enable pins for PWM"],
      bestFor: "Robot vehicles, automated systems, motor speed and direction control"
    },
    supplier: "L298N dual H-bridge module",
    bestFor: "Robot vehicles, automated systems, motor speed and direction control"
  },

  {
    id: "sensor-mpu6050",
    name: "MPU6050 6-Axis Gyroscope & Accelerometer",
    description: "6-axis motion tracking device combining 3-axis gyroscope and 3-axis accelerometer with I2C interface.",
    price: 7500,
    studentPrice: 6375,
    image: "/images/components/mpu6050.jpg",
    inStock: true,
    stockLevel: 95,
    rating: 4.8,
    reviews: 189,
    category: "Electronics & Components",
    subcategory: "Sensors & Detection", 
    specifications: {
      "Gyroscope": "3-axis, ±250, ±500, ±1000, ±2000°/sec",
      "Accelerometer": "3-axis, ±2g, ±4g, ±8g, ±16g",
      "Interface": "I2C",
      "Supply Voltage": "3-5V",
      "Built-in DMP": "Digital Motion Processor"
    },
    compatibility: ["Arduino", "ESP32", "Raspberry Pi", "Motion control systems"],
    projects: ["Quadcopters", "Self-balancing robots", "Gesture control", "Motion tracking"],
    leadTime: "In Stock",
    tags: ["mpu6050", "gyroscope", "accelerometer", "motion", "6-axis"],
    overview: {
      type: "6-Axis Motion Sensor",
      keySpecs: "3-axis gyro + 3-axis accelerometer, I2C interface, built-in DMP",
      applications: "Quadcopter stabilization, self-balancing robots, motion tracking",
      keyFeatures: ["Built-in Digital Motion Processor", "Configurable sensitivity", "Low power modes", "Temperature sensor"],
      bestFor: "Quadcopter stabilization, self-balancing robots, motion tracking"
    },
    supplier: "InvenSense MPU-6050 module",
    bestFor: "Quadcopter stabilization, self-balancing robots, motion tracking"
  },

  {
    id: "module-ds3231",
    name: "DS3231 Precision RTC Module",
    description: "High-precision real-time clock with crystal oscillator and temperature compensation.",
    price: 7500,
    studentPrice: 6375,
    image: "/images/components/ds3231.jpg",
    inStock: true,
    stockLevel: 65,
    rating: 4.9,
    reviews: 145,
    category: "Electronics & Components",
    subcategory: "Modules",
    specifications: {
      "Accuracy": "±2ppm (±1 minute per year)",
      "Interface": "I2C",
      "Battery": "CR2032 (included)",
      "Temperature Sensor": "Built-in ±3°C accuracy",
      "Alarms": "2 programmable alarms"
    },
    compatibility: ["Arduino", "Raspberry Pi", "All I2C systems"],
    projects: ["Precision clocks", "Data loggers", "Scheduling systems", "Alarm systems"],
    leadTime: "In Stock",
    tags: ["ds3231", "rtc", "precision", "temperature-compensated", "crystal"],
    overview: {
      type: "Precision Real-Time Clock",
      keySpecs: "±2ppm accuracy, temperature compensated, I2C interface, 2 alarms",
      applications: "High-precision timekeeping, precision data logging, scheduling systems",
      keyFeatures: ["Temperature compensation", "Crystal oscillator", "Battery backup", "Programmable alarms"],
      bestFor: "High-precision timekeeping, precision data logging, scheduling systems"
    },
    supplier: "Maxim DS3231 precision RTC",
    bestFor: "High-precision timekeeping, precision data logging, scheduling systems"
  }
]

// PROTOTYPING & CONNECTORS
const prototypingConnectors: ElectronicComponent[] = [
  {
    id: "proto-breadboard-830",
    name: "830-Point Solderless Breadboard",
    description: "The essential prototyping tool - build circuits without soldering",
    price: 6500,
    studentPrice: 5525,
    image: "/images/components/breadboard-830.jpg",
    inStock: true,
    stockLevel: 120,
    rating: 4.8,
    reviews: 456,
    category: "Electronics & Components",
    subcategory: "Prototyping & Connectors",
    specifications: {
      "Tie Points": "830 total points",
      "Power Rails": "4 power distribution strips", 
      "Spacing": "0.1 inch (2.54mm)",
      "Size": "165mm x 55mm",
      "Wire Gauge": "22-29 AWG solid wire"
    },
    compatibility: ["DIP packages", "Through-hole components", "Jumper wires"],
    projects: ["Circuit prototyping", "Educational labs", "Quick testing", "Arduino projects"],
    leadTime: "In Stock",
    tags: ["breadboard", "prototyping", "solderless", "830-point"],
    overview: {
      type: "Solderless Breadboard",
      keySpecs: "830 tie points, 4 power rails, standard 0.1 inch spacing",
      applications: "Circuit prototyping, educational experiments, quick circuit testing",
      keyFeatures: ["No soldering required", "Reusable connections", "Standard DIP spacing", "Power distribution rails"],
      bestFor: "Circuit prototyping, educational experiments, quick circuit testing"
    },
    supplier: "High-quality breadboard with reliable connections",
    bestFor: "Circuit prototyping, educational experiments, quick circuit testing"
  },

  {
    id: "proto-pcb-perfboard",
    name: "Perfboard PCB 5x7cm",
    description: "Universal prototyping board for permanent soldered circuits",
    price: 1800,
    studentPrice: 1530,
    image: "/images/components/perfboard-5x7.jpg",
    inStock: true,
    stockLevel: 200,
    rating: 4.7,
    reviews: 189,
    category: "Electronics & Components",
    subcategory: "Prototyping & Connectors",
    specifications: {
      "Size": "5cm x 7cm (50mm x 70mm)",
      "Hole Spacing": "0.1 inch (2.54mm)",
      "Thickness": "1.6mm FR4",
      "Holes": "Plated through-holes",
      "Grid": "Standard breadboard layout"
    },
    compatibility: ["Through-hole components", "DIP packages", "Discrete components"],
    projects: ["Permanent circuits", "Custom PCBs", "Student projects", "One-off designs"],
    leadTime: "In Stock",
    tags: ["perfboard", "pcb", "prototyping", "soldering", "permanent"],
    overview: {
      type: "Universal Prototyping PCB",
      keySpecs: "5x7cm size, 0.1 inch grid, plated through-holes",
      applications: "Creating permanent prototypes, educational soldering practice, custom circuits",
      keyFeatures: ["Standard breadboard layout", "Plated through-holes", "High-quality FR4", "Easy component mounting"],
      bestFor: "Creating permanent prototypes, educational soldering practice, custom circuits"
    },
    supplier: "Professional grade FR4 PCB",
    bestFor: "Creating permanent prototypes, educational soldering practice, custom circuits"
  },

  {
    id: "conn-jumper-wires-mm",
    name: "Male-Male Jumper Wires (40pcs)",
    description: "Essential connections for breadboard circuits - 40 pieces in various colors",
    price: 2500,
    studentPrice: 2125,
    image: "/images/components/jumper-wires-mm.jpg",
    inStock: true,
    stockLevel: 180,
    rating: 4.9,
    reviews: 298,
    category: "Electronics & Components",
    subcategory: "Prototyping & Connectors",
    specifications: {
      "Quantity": "40 pieces",
      "Length": "20cm (8 inches)",
      "Connector": "Male-to-Male",
      "Wire Gauge": "26 AWG",
      "Colors": "10 different colors"
    },
    compatibility: ["Breadboards", "Arduino headers", "Development boards"],
    projects: ["Breadboard connections", "Sensor wiring", "LED arrays", "All prototyping"],
    leadTime: "In Stock", 
    tags: ["jumper-wires", "male-male", "breadboard", "connections"],
    overview: {
      type: "Jumper Wire Set",
      keySpecs: "40 pieces, 20cm length, male-to-male connectors",
      applications: "Making connections on breadboards, wiring between development boards",
      keyFeatures: ["Multiple colors for organization", "Flexible silicone wire", "Gold-plated connectors", "Standard 0.1 inch spacing"],
      bestFor: "Making connections on breadboards, wiring between development boards"
    },
    supplier: "High-quality dupont-style connectors",
    bestFor: "Making connections on breadboards, wiring between development boards"
  },

  // Additional connectors and displays from comprehensive catalog
  {
    id: "conn-header-pins-40",
    name: "40-Pin Breakaway Male Headers",
    description: "Standard 0.1 inch male pin headers that can be broken apart to any length needed.",
    price: 800,
    studentPrice: 680,
    image: "/images/components/male-headers-40.jpg",
    inStock: true,
    stockLevel: 250,
    rating: 4.8,
    reviews: 156,
    category: "Electronics & Components",
    subcategory: "Prototyping & Connectors",
    specifications: {
      "Pins": "40 pins (breakable)",
      "Pitch": "0.1 inch (2.54mm)",
      "Height": "11mm",
      "Contact": "Gold-plated",
      "Current": "3A per pin"
    },
    compatibility: ["PCBs", "Shields", "Modules", "Custom boards"],
    projects: ["PCB headers", "Shield connectors", "Module interfaces", "Custom connections"],
    leadTime: "In Stock",
    tags: ["headers", "male-pins", "breakaway", "pcb", "connectors"],
    overview: {
      type: "Breakaway Pin Headers",
      keySpecs: "40 pins, 0.1 inch pitch, gold-plated contacts, breakaway design",
      applications: "PCB headers, module connections, shield interfaces",
      keyFeatures: ["Breakaway design", "Gold-plated contacts", "Standard pitch", "High current rating"],
      bestFor: "PCB headers, module connections, shield interfaces"
    },
    supplier: "Professional grade pin headers",
    bestFor: "PCB headers, module connections, shield interfaces"
  },

  {
    id: "disp-lcd-16x2",
    name: "16x2 LCD Display Module",
    description: "Standard character LCD display with backlight - perfect for displaying sensor readings and menu systems.",
    price: 8500,
    studentPrice: 7225,
    image: "/images/components/lcd-16x2.jpg",
    inStock: true,
    stockLevel: 95,
    rating: 4.7,
    reviews: 189,
    category: "Electronics & Components",
    subcategory: "Modules",
    specifications: {
      "Display": "16 columns x 2 rows",
      "Controller": "HD44780 compatible",
      "Interface": "Parallel (4-bit/8-bit)",
      "Backlight": "Blue LED backlight",
      "Supply Voltage": "5V"
    },
    compatibility: ["Arduino", "Raspberry Pi", "Any 5V microcontroller"],
    projects: ["Data displays", "Menu systems", "Sensor readouts", "Clock displays"],
    leadTime: "In Stock",
    tags: ["lcd", "display", "16x2", "hd44780", "character"],
    overview: {
      type: "Character LCD Display",
      keySpecs: "16x2 characters, HD44780 controller, blue backlight, 5V operation",
      applications: "Displaying sensor data, menu interfaces, digital clock displays",
      keyFeatures: ["HD44780 compatibility", "Blue LED backlight", "Clear character display", "Standard interface"],
      bestFor: "Displaying sensor data, menu interfaces, digital clock displays"
    },
    supplier: "Standard HD44780 LCD module",
    bestFor: "Displaying sensor data, menu interfaces, digital clock displays"
  },

  {
    id: "disp-oled-128x64",
    name: "0.96\" OLED Display 128x64 I2C",
    description: "Small, bright OLED display with I2C interface - perfect for portable projects and clear graphics.",
    price: 12500,
    studentPrice: 10625,
    image: "/images/components/oled-128x64.jpg",
    inStock: true,
    stockLevel: 75,
    rating: 4.9,
    reviews: 234,
    category: "Electronics & Components",
    subcategory: "Modules",
    specifications: {
      "Resolution": "128x64 pixels",
      "Size": "0.96 inch diagonal",
      "Interface": "I2C (SDA, SCL)",
      "Controller": "SSD1306",
      "Supply Voltage": "3.3V - 5V"
    },
    compatibility: ["Arduino", "ESP32", "Raspberry Pi", "I2C systems"],
    projects: ["Portable displays", "Wearables", "IoT dashboards", "Graphics projects"],
    leadTime: "In Stock",
    tags: ["oled", "display", "128x64", "i2c", "ssd1306"],
    overview: {
      type: "OLED Graphic Display",
      keySpecs: "128x64 pixels, 0.96 inch, I2C interface, SSD1306 controller",
      applications: "Portable electronics, wearables, IoT status displays, graphics projects",
      keyFeatures: ["High contrast", "Wide viewing angle", "No backlight needed", "I2C interface"],
      bestFor: "Portable electronics, wearables, IoT status displays"
    },
    supplier: "SSD1306 OLED module",
    bestFor: "Portable electronics, wearables, IoT status displays"
  },

  {
    id: "conn-terminal-2pin",
    name: "2-Pin Screw Terminal Block",
    description: "Secure wire connections for power supplies and permanent installations.",
    price: 800,
    studentPrice: 680,
    image: "/images/components/terminal-2pin.jpg",
    inStock: true,
    stockLevel: 200,
    rating: 4.6,
    reviews: 87,
    category: "Electronics & Components",
    subcategory: "Prototyping & Connectors",
    specifications: {
      "Pins": "2 positions",
      "Pitch": "5.08mm (0.2 inch)",
      "Wire Gauge": "12-22 AWG",
      "Current": "15A per terminal",
      "Voltage": "300V max"
    },
    compatibility: ["Power supplies", "Motors", "High-current connections"],
    projects: ["Power connections", "Motor terminals", "External wiring", "Panel connections"],
    leadTime: "In Stock",
    tags: ["terminal", "screw", "power", "connections", "high-current"],
    overview: {
      type: "Screw Terminal Block",
      keySpecs: "2 positions, 5.08mm pitch, 15A current rating, secure connections",
      applications: "Power supply connections, motor terminals, external wiring",
      keyFeatures: ["High current capacity", "Secure screw connections", "Wide wire gauge range", "Panel mountable"],
      bestFor: "Power supply connections, motor terminals, external wiring"
    },
    supplier: "Professional terminal block",
    bestFor: "Power supply connections, motor terminals, external wiring"
  }
]

// ADDITIONAL MICROCONTROLLERS (for existing Microcontrollers category)
const additionalMicrocontrollers: ElectronicComponent[] = [
  {
    id: "mcu-attiny85",
    name: "ATtiny85 Microcontroller",
    description: "Tiny 8-bit microcontroller perfect for simple, space-constrained projects",
    price: 3500,
    studentPrice: 2975,
    image: "/images/components/attiny85.jpg",
    inStock: true,
    stockLevel: 150,
    rating: 4.8,
    reviews: 167,
    category: "Electronics & Components",
    subcategory: "Microcontrollers",
    specifications: {
      "Architecture": "8-bit AVR",
      "Flash Memory": "8KB",
      "SRAM": "512 bytes",
      "EEPROM": "512 bytes",
      "Package": "8-pin DIP/SOIC"
    },
    compatibility: ["Arduino IDE", "Breadboards", "Small projects"],
    projects: ["LED controllers", "Simple sensors", "Wearables", "Battery projects"],
    leadTime: "In Stock",
    tags: ["attiny", "8-bit", "small", "low-power", "arduino-compatible"],
    overview: {
      type: "8-bit Microcontroller",
      keySpecs: "8KB Flash, 512B SRAM, 8-pin package, Arduino IDE compatible",
      applications: "Simple automation, LED effects, small sensor projects, wearable electronics",
      keyFeatures: ["Ultra-small footprint", "Low power consumption", "Arduino IDE support", "Built-in oscillator"],
      bestFor: "Simple automation, LED effects, small sensor projects, wearable electronics"
    },
    supplier: "Microchip ATtiny85 original",
    bestFor: "Simple automation, LED effects, small sensor projects, wearable electronics"
  }
]

// ADDITIONAL DEVELOPMENT BOARDS (for existing Dev Boards category)
const additionalDevBoards: ElectronicComponent[] = [
  {
    id: "dev-esp32-cam",
    name: "ESP32-CAM Development Board",
    description: "ESP32 with built-in camera for IoT vision projects and remote monitoring",
    price: 18500,
    studentPrice: 15725,
    image: "/images/components/esp32-cam.jpg",
    inStock: true,
    stockLevel: 65,
    rating: 4.7,
    reviews: 123,
    category: "Electronics & Components", 
    subcategory: "Development Boards",
    specifications: {
      "MCU": "ESP32-S Dual Core",
      "Camera": "OV2640 2MP",
      "WiFi": "802.11 b/g/n",
      "Bluetooth": "4.2 BR/EDR + BLE",
      "Flash": "4MB"
    },
    compatibility: ["Arduino IDE", "ESP-IDF", "PlatformIO"],
    projects: ["Security cameras", "IoT monitoring", "Time-lapse", "Remote surveillance"],
    leadTime: "In Stock",
    tags: ["esp32", "camera", "wifi", "iot", "vision"],
    overview: {
      type: "WiFi Camera Development Board",
      keySpecs: "ESP32-S + OV2640 camera, WiFi/Bluetooth, 4MB Flash",
      applications: "IoT camera projects, home security, remote monitoring, time-lapse photography",
      keyFeatures: ["Built-in 2MP camera", "WiFi connectivity", "MicroSD card slot", "Low power modes"],
      bestFor: "IoT camera projects, home security, remote monitoring, time-lapse photography"
    },
    supplier: "AI-Thinker ESP32-CAM module",
    bestFor: "IoT camera projects, home security, remote monitoring, time-lapse photography"
  }
]



// Combine all electronics components
export const allElectronicsData: ElectronicComponent[] = [
  ...integratedCircuits,
  ...transistorsRegulators,
  ...semiconductors,
  ...diodesLEDs,
  ...modules,
  ...prototypingConnectors,
  ...passiveComponents,
  ...sensorsDetection,
  ...electromechanicalComponents
]

// Export cross-reference data for other categories
export const microcontrollerExtensions: ElectronicComponent[] = [
  ...additionalMicrocontrollers
]

export const devBoardExtensions: ElectronicComponent[] = [
  ...additionalDevBoards
]

// Export subcategories for filtering
export const electronicsSubcategories = [
  "Integrated Circuits",
  "Transistors & Regulators", 
  "Diodes & LEDs",
  "Modules",
  "Prototyping & Connectors",
  "Passive Components",
  "Sensors & Detection",
  "Electromechanical"
]
