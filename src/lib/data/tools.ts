export interface ToolProduct {
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
  keySpecs: Record<string, string>
  bestFor: string
  proTip?: string
  specifications?: Record<string, string>
  features: string[]
  tags: string[]
  overview: {
    description: string
    importance: string
    whyEssential: string
  }
}

export const allTools: ToolProduct[] = [
  // Category 1: Soldering & Reworking
  {
    id: "tool-soldering-station-adjustable",
    name: "Adjustable Temperature Soldering Station",
    description: "Professional soldering station with precise temperature control for reliable electronics work",
    price: 265000,
    studentPrice: 225250,
    image: "/images/tools/soldering-station.jpg",
    inStock: true,
    stockLevel: 45,
    rating: 4.8,
    reviews: 156,
    category: "tools",
    subcategory: "soldering-reworking",
    keySpecs: {
      "Power": "60W-70W",
      "Temperature Range": "200°C - 480°C",
      "Display": "Digital LED",
      "Iron Type": "Ceramic Heating Element"
    },
    bestFor: "Hobbyists, students, and professionals performing any type of through-hole or surface-mount soldering",
    proTip: "Set your iron to around 320°C-360°C for leaded solder. A quality station heats up fast, so there's no need to leave it on at maximum temperature.",
    specifications: {
      "Power Output": "60W-70W",
      "Temperature Range": "200°C - 480°C",
      "Temperature Accuracy": "±2°C",
      "Heat-up Time": "< 30 seconds",
      "Display": "Digital LED",
      "Iron Tip": "Replaceable ceramic heating element",
      "Safety Features": "Auto sleep mode, overheating protection",
      "Dimensions": "180 x 120 x 90mm",
      "Weight": "1.2kg"
    },
    features: [
      "Precise temperature control",
      "Fast heat-up time", 
      "Digital display",
      "Auto sleep function",
      "Replaceable tips",
      "Ergonomic iron handle"
    ],
    tags: ["soldering", "station", "temperature-control", "professional", "beginner-friendly"],
    overview: {
      description: "A soldering station provides precise, stable temperature control for the soldering iron, which is critical for creating strong, reliable joints without damaging sensitive components.",
      importance: "Unlike simple plug-in irons, a station allows you to set the perfect temperature for different types of solder and components.",
      whyEssential: "The most essential tool for reliable electronics work - temperature control prevents component damage and ensures consistent solder joints."
    }
  },
  {
    id: "tool-hot-air-rework-station",
    name: "Hot Air Rework Station (SMD)",
    description: "Professional hot air station for surface-mount component work with adjustable airflow and temperature",
    price: 400000,
    studentPrice: 340000,
    image: "/images/tools/hot-air-station.jpg",
    inStock: true,
    stockLevel: 28,
    rating: 4.7,
    reviews: 89,
    category: "tools",
    subcategory: "soldering-reworking",
    keySpecs: {
      "Temperature Range": "100°C - 500°C",
      "Airflow": "Adjustable 1-30 L/min",
      "Power": "700W Hot Air + 60W Iron",
      "Nozzles": "Multiple sizes included"
    },
    bestFor: "Removing and soldering multi-pin SMD components like MCUs, replacing phone charging ports, and heat-shrinking tubing",
    proTip: "Apply flux paste to the pads before using hot air. It helps the solder flow evenly and prevents solder bridges between pins.",
    specifications: {
      "Hot Air Power": "700W",
      "Soldering Iron Power": "60W", 
      "Temperature Range": "100°C - 500°C",
      "Temperature Accuracy": "±3°C",
      "Airflow Range": "1-30 L/min",
      "Display": "Dual digital LED displays",
      "Nozzles Included": "5 different sizes",
      "Safety Features": "Auto cool-down, overheating protection",
      "Dimensions": "220 x 180 x 120mm",
      "Weight": "2.8kg"
    },
    features: [
      "Combo hot air + soldering iron",
      "Adjustable airflow control",
      "Multiple nozzle sizes",
      "Digital temperature display",
      "Auto cool-down function",
      "Professional grade performance"
    ],
    tags: ["hot-air", "smd", "rework", "professional", "combo-station"],
    overview: {
      description: "A hot air station is indispensable for working with Surface-Mount Devices (SMD/SMT). It uses a focused stream of hot air to heat all the pins of a component simultaneously.",
      importance: "Allows for easy placement and removal of chips without touching them directly. Many stations combine a hot air gun with a traditional soldering iron.",
      whyEssential: "The professional's tool for surface-mount components - essential for modern electronics repair and SMD assembly."
    }
  },
  {
    id: "tool-solder-wire-60-40",
    name: "Solder Wire (0.8mm, 60/40)",
    description: "High-quality rosin-core solder wire for general-purpose electronics soldering",
    price: 15000,
    studentPrice: 12750,
    image: "/images/tools/solder-wire.jpg",
    inStock: true,
    stockLevel: 120,
    rating: 4.9,
    reviews: 234,
    category: "tools",
    subcategory: "soldering-reworking",
    keySpecs: {
      "Diameter": "0.8mm",
      "Composition": "60% Tin, 40% Lead",
      "Core": "Rosin flux core",
      "Weight": "100g reel"
    },
    bestFor: "General-purpose soldering for beginners and professionals alike",
    proTip: "The smoke produced is from the flux, not the lead. Always work in a well-ventilated area or use a fume extractor.",
    specifications: {
      "Diameter": "0.8mm",
      "Alloy Composition": "60% Tin, 40% Lead",
      "Flux Core": "Rosin-based flux",
      "Melting Point": "183°C - 190°C",
      "Tensile Strength": "4.8 kg/mm²",
      "Reel Weight": "100g",
      "Length": "Approximately 30 meters",
      "Flux Content": "2.2%"
    },
    features: [
      "Easy to work with",
      "Rosin flux core",
      "Clean solder joints",
      "Excellent flow properties",
      "General purpose use",
      "Professional grade"
    ],
    tags: ["solder", "wire", "flux-core", "beginner-friendly", "general-purpose"],
    overview: {
      description: "This is a reel of solder wire, an alloy designed to melt at a low temperature. This 60/40 Rosin-Core solder is a classic choice, known for being very easy to work with.",
      importance: "The rosin core acts as a flux, cleaning the surfaces as you solder to ensure a good electrical connection.",
      whyEssential: "The 'glue' that holds your electronic circuits together - fundamental consumable for all electronics work."
    }
  },
  {
    id: "tool-solder-sucker",
    name: "Solder Sucker (Desoldering Pump)",
    description: "Spring-loaded vacuum tool for removing solder and correcting soldering mistakes",
    price: 25000,
    studentPrice: 21250,
    image: "/images/tools/solder-sucker.jpg",
    inStock: true,
    stockLevel: 85,
    rating: 4.6,
    reviews: 167,
    category: "tools",
    subcategory: "soldering-reworking",
    keySpecs: {
      "Type": "Spring-loaded plunger",
      "Tip": "Replaceable PTFE tip",
      "Length": "195mm",
      "Material": "Aluminum body"
    },
    bestFor: "Removing through-hole components and cleaning up excess solder",
    specifications: {
      "Length": "195mm",
      "Body Material": "Anodized aluminum",
      "Tip Material": "PTFE (Teflon)",
      "Plunger Type": "Spring-loaded",
      "Temperature Rating": "Up to 300°C",
      "Tip Replacement": "User replaceable",
      "Weight": "95g"
    },
    features: [
      "Spring-loaded action",
      "Replaceable tip",
      "Heat resistant",
      "Ergonomic grip",
      "Reliable vacuum",
      "Durable construction"
    ],
    tags: ["desoldering", "solder-removal", "repair", "mistake-correction"],
    overview: {
      description: "A desoldering pump, or solder sucker, is a spring-loaded vacuum tool. To use it, you melt the solder joint with your iron, then quickly place the tip over it and press the button.",
      importance: "The vacuum pulls the molten solder away from the joint, freeing the component for removal or replacement.",
      whyEssential: "The essential tool for correcting mistakes - every electronics workbench needs reliable desoldering capability."
    }
  },
  {
    id: "tool-brass-tip-cleaner",
    name: "Brass Wire Tip Cleaner",
    description: "Soft brass wire cleaner for maintaining soldering iron tips without thermal shock",
    price: 18000,
    studentPrice: 15300,
    image: "/images/tools/brass-cleaner.jpg",
    inStock: true,
    stockLevel: 95,
    rating: 4.8,
    reviews: 143,
    category: "tools",
    subcategory: "soldering-reworking",
    keySpecs: {
      "Material": "Soft brass wire",
      "Container": "Metal housing",
      "Wire Density": "High density coil",
      "Diameter": "75mm container"
    },
    bestFor: "Every soldering task. A must-have on every workbench",
    specifications: {
      "Wire Material": "Brass alloy",
      "Container Material": "Steel",
      "Container Diameter": "75mm",
      "Wire Gauge": "Fine brass strands",
      "Temperature Rating": "Up to 400°C",
      "Cleaning Method": "Mechanical scrubbing",
      "Lifespan": "1000+ cleanings"
    },
    features: [
      "No thermal shock",
      "Extends tip life",
      "No water needed",
      "Instant cleaning",
      "Soft brass wire",
      "Reusable design"
    ],
    tags: ["tip-cleaner", "brass", "maintenance", "soldering-care"],
    overview: {
      description: "A clean tip is the secret to good soldering. Dipping your hot iron into this soft brass wire ball effectively removes old solder and oxidation.",
      importance: "Does this without causing the thermal shock that a wet sponge does, which extends the life of your soldering tips significantly.",
      whyEssential: "The best way to keep your soldering iron tip clean - proper maintenance is key to professional results."
    }
  },

  // Category 2: Testing & Measurement
  {
    id: "tool-digital-multimeter",
    name: "Digital Multimeter (DMM)",
    description: "Auto-ranging digital multimeter for voltage, current, resistance, and continuity testing",
    price: 97500,
    studentPrice: 82875,
    image: "/images/tools/digital-multimeter.jpg",
    inStock: true,
    stockLevel: 67,
    rating: 4.7,
    reviews: 198,
    category: "tools",
    subcategory: "testing-measurement",
    keySpecs: {
      "Display": "4000 count LCD",
      "DC Voltage": "0.1mV - 1000V",
      "AC Voltage": "1V - 750V",
      "Current": "0.1µA - 10A"
    },
    bestFor: "Every electronics user, from beginner to expert. It's the first tool you should own",
    proTip: "When measuring current, ensure your probes are plugged into the correct current jacks (usually marked 'A' or 'mA') on the meter *before* connecting to the circuit.",
    specifications: {
      "Display": "4000 count LCD with backlight",
      "DC Voltage Range": "0.1mV - 1000V",
      "AC Voltage Range": "1V - 750V",
      "DC Current Range": "0.1µA - 10A",
      "AC Current Range": "0.1µA - 10A",
      "Resistance Range": "0.1Ω - 40MΩ",
      "Capacitance Range": "1nF - 100mF",
      "Frequency Range": "10Hz - 10MHz",
      "Temperature Range": "-40°C to 1000°C",
      "Auto Range": "Yes",
      "Data Hold": "Yes",
      "Continuity Beeper": "Yes",
      "Safety Rating": "CAT III 600V"
    },
    features: [
      "Auto-ranging function",
      "Backlit LCD display",
      "Data hold feature",
      "Continuity beeper",
      "Temperature probe included",
      "Safety rated design"
    ],
    tags: ["multimeter", "testing", "measurement", "diagnostic", "essential"],
    overview: {
      description: "A Digital Multimeter is your first-line diagnostic tool. It can measure a wide range of electrical properties, allowing you to check for continuity, measure battery voltage, test resistor values, and troubleshoot faulty circuits.",
      importance: "An auto-ranging model is highly recommended for ease of use, automatically selecting the appropriate measurement range.",
      whyEssential: "The most fundamental diagnostic tool for any electronics work - absolutely essential for troubleshooting and verification."
    }
  },
  {
    id: "tool-variable-dc-power-supply",
    name: "Variable DC Bench Power Supply",
    description: "Adjustable 0-30V DC power supply with current limiting for safe circuit testing",
    price: 350000,
    studentPrice: 297500,
    image: "/images/tools/power-supply.jpg",
    inStock: true,
    stockLevel: 32,
    rating: 4.9,
    reviews: 87,
    category: "tools",
    subcategory: "testing-measurement",
    keySpecs: {
      "Voltage Range": "0-30V adjustable",
      "Current Range": "0-5A adjustable",
      "Display": "Dual digital LED",
      "Regulation": "CV/CC operation"
    },
    bestFor: "Powering and testing prototypes, repairing electronics, and electroplating",
    proTip: "Before powering on a new board, set the voltage to the required level (e.g., 5V) and turn the current limit knob all the way down. Slowly turn the current up. If the voltage drops and the 'CC' (Constant Current) light comes on, you likely have a short circuit.",
    specifications: {
      "Voltage Range": "0-30V continuously adjustable",
      "Current Range": "0-5A continuously adjustable",
      "Voltage Accuracy": "±0.01V + 3 digits",
      "Current Accuracy": "±0.001A + 3 digits",
      "Ripple & Noise": "<1mVrms",
      "Load Regulation": "<0.01% + 3mV",
      "Line Regulation": "<0.01% + 3mV",
      "Display": "Dual 4-digit LED",
      "Protection": "OVP, OCP, OTP",
      "Cooling": "Temperature controlled fan",
      "Dimensions": "280 x 155 x 140mm",
      "Weight": "4.2kg"
    },
    features: [
      "Dual display (V & A)",
      "Current limiting protection",
      "CV/CC operation modes",
      "Fine/coarse adjustment",
      "Overload protection",
      "Low ripple output"
    ],
    tags: ["power-supply", "variable", "bench", "current-limiting", "professional"],
    overview: {
      description: "A bench power supply is a critical tool that provides a stable, adjustable DC voltage. Its most important feature is the adjustable current limit, which can prevent a new or faulty circuit from drawing too much current and destroying itself.",
      importance: "It's the professional way to power up a project for the first time, providing both voltage and current control with precision displays.",
      whyEssential: "Provides safe, controllable power to your projects - essential for testing and development work."
    }
  },
  {
    id: "tool-usb-logic-analyzer",
    name: "USB Logic Analyzer (8-Channel)",
    description: "8-channel logic analyzer for debugging digital communications and protocols",
    price: 125000,
    studentPrice: 106250,
    image: "/images/tools/logic-analyzer.jpg",
    inStock: true,
    stockLevel: 23,
    rating: 4.6,
    reviews: 56,
    category: "tools",
    subcategory: "testing-measurement",
    keySpecs: {
      "Channels": "8 digital inputs",
      "Sample Rate": "24MHz maximum",
      "Interface": "USB 2.0",
      "Software": "PulseView/Sigrok"
    },
    bestFor: "Debugging digital communications, reverse-engineering protocols, and analyzing complex digital logic",
    specifications: {
      "Input Channels": "8 digital",
      "Max Sample Rate": "24MHz",
      "Input Voltage Range": "0V to 5V",
      "Input Impedance": "1MΩ || 15pF",
      "Threshold Voltage": "1.4V (TTL)",
      "Buffer Memory": "256KB per channel",
      "Interface": "USB 2.0",
      "Software Support": "PulseView, Sigrok, OpenBench",
      "Protocol Decoders": "I2C, SPI, UART, CAN, etc.",
      "Trigger Types": "Simple, complex pattern",
      "Dimensions": "85 x 55 x 15mm",
      "Cable Length": "1.5m"
    },
    features: [
      "8 digital channels",
      "Protocol decoding",
      "Pattern triggering",
      "Open source software",
      "Compact USB design",
      "Multiple protocol support"
    ],
    tags: ["logic-analyzer", "digital", "protocol", "debugging", "usb"],
    overview: {
      description: "An oscilloscope shows you a signal's voltage over time, but a logic analyzer shows you the digital state (1 or 0) of multiple signals at once.",
      importance: "It's essential for debugging communication protocols like I2C, SPI, and UART, allowing you to see the exact data being sent between microcontrollers and peripherals.",
      whyEssential: "Decodes digital conversations between chips - critical for understanding and debugging digital communication protocols."
    }
  },

  // Category 3: Hand Tools & Prototyping
  {
    id: "tool-precision-screwdriver-set",
    name: "Precision Screwdriver Set",
    description: "Complete set of precision screwdrivers for electronics and device repair",
    price: 57500,
    studentPrice: 48875,
    image: "/images/tools/screwdriver-set.jpg",
    inStock: true,
    stockLevel: 76,
    rating: 4.8,
    reviews: 145,
    category: "tools",
    subcategory: "hand-tools-prototyping",
    keySpecs: {
      "Handle": "Ergonomic precision grip",
      "Bits Included": "32 piece set",
      "Types": "Phillips, Flathead, Torx, Hex",
      "Case": "Organized storage case"
    },
    bestFor: "Device repair, assembling project enclosures, and general electronics work",
    specifications: {
      "Bit Count": "32 precision bits",
      "Handle Material": "Anti-slip TPR grip",
      "Bit Material": "S2 steel, hardened",
      "Phillips Sizes": "PH000, PH00, PH0, PH1",
      "Flathead Sizes": "1.0, 1.5, 2.0, 2.5, 3.0mm",
      "Torx Sizes": "T3, T4, T5, T6, T7, T8, T9, T10",
      "Hex Sizes": "0.7, 0.9, 1.3, 1.5, 2.0, 2.5mm",
      "Special Bits": "Triangle, Y-type, Pentalobe",
      "Extension": "Flexible shaft included",
      "Case": "Blow-molded storage case",
      "Magnetism": "Magnetic tips"
    },
    features: [
      "32 precision bits",
      "Ergonomic handle",
      "Magnetic tips",
      "Flexible extension",
      "Organized case",
      "Device repair ready"
    ],
    tags: ["screwdrivers", "precision", "repair", "device-repair", "hand-tools"],
    overview: {
      description: "Standard screwdrivers are too large for electronic devices. A precision set includes a comfortable handle and a wide variety of interchangeable bits.",
      importance: "Includes small Phillips, flathead, Torx (star-shaped), and hex bits, needed to open laptops, phones, and other gadgets.",
      whyEssential: "For working with the small fasteners in modern electronics - absolutely necessary for device repair and assembly."
    }
  },
  {
    id: "tool-flush-cutters",
    name: "Flush Cutters (Side Cutters)",
    description: "Precision flush cutters for clean component lead trimming",
    price: 35000,
    studentPrice: 29750,
    image: "/images/tools/flush-cutters.jpg",
    inStock: true,
    stockLevel: 89,
    rating: 4.7,
    reviews: 123,
    category: "tools",
    subcategory: "hand-tools-prototyping",
    keySpecs: {
      "Cutting Edge": "Hardened steel",
      "Design": "Flush cutting",
      "Handle": "Spring-loaded",
      "Size": "125mm length"
    },
    bestFor: "Trimming component leads, cutting small wires, and removing zip ties",
    specifications: {
      "Overall Length": "125mm",
      "Cutting Capacity": "Up to 1.6mm wire",
      "Blade Material": "Hardened carbon steel",
      "Handle Material": "Anti-slip grip",
      "Spring": "Return spring included",
      "Cutting Style": "Flush cut",
      "Jaw Opening": "12mm maximum",
      "Weight": "85g"
    },
    features: [
      "Flush cutting action",
      "Hardened cutting edge",
      "Spring-loaded handle",
      "Clean precise cuts",
      "Ergonomic grip",
      "Durable construction"
    ],
    tags: ["cutters", "flush", "trimming", "precision", "hand-tools"],
    overview: {
      description: "Unlike standard wire cutters, flush cutters are designed to make a perfectly flat, clean cut.",
      importance: "This is essential for trimming the excess length from component leads after soldering them to a PCB, preventing sharp points and potential shorts.",
      whyEssential: "For clean, precise trimming of component leads - prevents damage and ensures professional results."
    }
  },
  {
    id: "tool-wire-strippers",
    name: "Wire Strippers",
    description: "Precision wire strippers for safely removing insulation without damaging conductors",
    price: 42500,
    studentPrice: 36125,
    image: "/images/tools/wire-strippers.jpg",
    inStock: true,
    stockLevel: 64,
    rating: 4.6,
    reviews: 98,
    category: "tools",
    subcategory: "hand-tools-prototyping",
    keySpecs: {
      "Wire Range": "10-22 AWG",
      "Design": "Self-adjusting",
      "Handle": "Ergonomic grip",
      "Length": "200mm"
    },
    bestFor: "Preparing wires for breadboarding, soldering, and connecting to terminals",
    specifications: {
      "Wire Range": "10-22 AWG (0.5-2.5mm²)",
      "Overall Length": "200mm",
      "Handle Material": "Non-slip TPR coating",
      "Jaw Material": "Hardened steel",
      "Cutting Edge": "Precision ground",
      "Stripping Length": "Adjustable",
      "Additional Features": "Wire crimping, bolt cutting",
      "Weight": "145g"
    },
    features: [
      "Self-adjusting design",
      "Multiple wire gauges",
      "Precision stripping",
      "No conductor damage",
      "Ergonomic handles",
      "Multi-function tool"
    ],
    tags: ["wire-strippers", "insulation", "preparation", "hand-tools"],
    overview: {
      description: "A dedicated wire stripper is much more effective and safer than using a knife or cutters.",
      importance: "This tool has precision-ground holes for various wire gauges, allowing you to cut through the plastic insulation without nicking the copper conductor inside.",
      whyEssential: "Safely remove insulation without damaging the wire - proper wire preparation is fundamental to reliable connections."
    }
  },
  {
    id: "tool-third-hand-pcb-holder",
    name: '"Third Hand" Tool / PCB Holder',
    description: "Adjustable helping hands with magnifier for holding PCBs and components during soldering",
    price: 57500,
    studentPrice: 48875,
    image: "/images/tools/third-hand.jpg",
    inStock: true,
    stockLevel: 52,
    rating: 4.5,
    reviews: 87,
    category: "tools",
    subcategory: "hand-tools-prototyping",
    keySpecs: {
      "Clips": "4 adjustable alligator clips",
      "Base": "Weighted cast iron",
      "Magnifier": "3.5x magnification",
      "Arms": "Flexible positioning"
    },
    bestFor: "Soldering components to a PCB, holding wires together for splicing",
    specifications: {
      "Clip Count": "4 alligator clips",
      "Base Material": "Cast iron weighted",
      "Base Weight": "850g",
      "Arm Material": "Flexible steel",
      "Magnifier": "3.5x with 12x spot lens",
      "Lens Diameter": "90mm main, 20mm spot",
      "Arm Length": "200mm each",
      "Clip Opening": "25mm maximum",
      "Adjustment": "Ball joints",
      "Dimensions": "200 x 150 x 300mm"
    },
    features: [
      "4 flexible arms",
      "Weighted stable base",
      "Dual magnification",
      "Full adjustment range",
      "Secure clip grip",
      "LED illumination ready"
    ],
    tags: ["helping-hands", "pcb-holder", "magnifier", "soldering-aid"],
    overview: {
      description: "This indispensable tool acts as a third hand on your workbench. It features a weighted base and adjustable alligator clips that can securely hold a circuit board, wires, or components in any position.",
      importance: "Frees up your hands for soldering while maintaining precise positioning. Many models also include a magnifying glass for detailed work.",
      whyEssential: "Holds your work steady so you have both hands free - absolutely essential for precision soldering work."
    }
  },
  {
    id: "tool-breadboard-830-point",
    name: "Solderless Breadboard (830 Point)",
    description: "Large solderless breadboard for electronics prototyping and circuit testing",
    price: 27500,
    studentPrice: 23375,
    image: "/images/tools/breadboard.jpg",
    inStock: true,
    stockLevel: 145,
    rating: 4.8,
    reviews: 267,
    category: "tools",
    subcategory: "hand-tools-prototyping",
    keySpecs: {
      "Tie Points": "830 connection points",
      "Power Rails": "4 power distribution rails",
      "Size": "165 x 55mm",
      "Material": "ABS plastic base"
    },
    bestFor: "Prototyping, learning electronics, and testing circuit designs",
    specifications: {
      "Total Tie Points": "830",
      "Main Area": "630 tie points (63 x 10)",
      "Power Rails": "4 rails x 50 points each",
      "Contact Material": "Nickel-plated phosphor bronze",
      "Base Material": "ABS plastic",
      "Dimensions": "165 x 55 x 8.5mm",
      "Hole Spacing": "2.54mm (0.1 inch)",
      "Wire Gauge": "20-29 AWG",
      "Current Rating": "1A per contact",
      "Voltage Rating": "500V",
      "Connection Life": "10,000+ insertions"
    },
    features: [
      "830 tie points",
      "Power distribution rails",
      "Standard spacing",
      "Reusable design",
      "High-quality contacts",
      "Large prototyping area"
    ],
    tags: ["breadboard", "prototyping", "solderless", "testing", "learning"],
    overview: {
      description: "A solderless breadboard is a reusable construction base for prototyping electronics. It allows you to build and test a circuit without any soldering.",
      importance: "Components and wires are simply pushed into the spring-loaded connection points. This 830-point board is a standard size with enough room for complex projects.",
      whyEssential: "The essential tool for electronics prototyping - allows rapid circuit development and testing without permanent connections."
    }
  },

  // Category 4: Safety & Workspace
  {
    id: "tool-safety-glasses",
    name: "Safety Glasses",
    description: "Impact-resistant safety glasses with wraparound design for eye protection",
    price: 22000,
    studentPrice: 18700,
    image: "/images/tools/safety-glasses.jpg",
    inStock: true,
    stockLevel: 110,
    rating: 4.7,
    reviews: 156,
    category: "tools",
    subcategory: "safety-workspace",
    keySpecs: {
      "Design": "Wraparound protection",
      "Material": "Impact-resistant polycarbonate",
      "Certification": "ANSI Z87.1",
      "UV Protection": "99.9% UV blocking"
    },
    bestFor: "Everyone. Safety is the first priority on the workbench",
    specifications: {
      "Lens Material": "Polycarbonate",
      "Frame Material": "Nylon",
      "UV Protection": "99.9%",
      "Impact Rating": "High velocity impact",
      "Optical Class": "Class 1",
      "Side Protection": "Wraparound design",
      "Weight": "28g",
      "Temple Style": "Straight",
      "Certification": "ANSI Z87.1, CE EN166"
    },
    features: [
      "Impact resistant lenses",
      "Wraparound protection",
      "UV filtering",
      "Lightweight design",
      "Anti-scratch coating",
      "Comfortable fit"
    ],
    tags: ["safety", "eye-protection", "glasses", "ppe", "workspace"],
    overview: {
      description: "Electronics work involves risks like flying component leads when cutting, splashing flux, and accidental solder flicks.",
      importance: "A simple pair of safety glasses provides crucial protection against these hazards and should be worn at all times when soldering or doing mechanical work.",
      whyEssential: "Non-negotiable protection for your eyes - safety should always be the top priority in any workspace."
    }
  },
  {
    id: "tool-esd-wrist-strap",
    name: "Anti-Static (ESD) Wrist Strap",
    description: "Adjustable ESD wrist strap with coiled cord for static electricity protection",
    price: 15000,
    studentPrice: 12750,
    image: "/images/tools/esd-strap.jpg",
    inStock: true,
    stockLevel: 87,
    rating: 4.6,
    reviews: 134,
    category: "tools",
    subcategory: "safety-workspace",
    keySpecs: {
      "Resistance": "1 Mega-ohm built-in",
      "Cord": "Coiled retractable",
      "Strap": "Adjustable wrist band",
      "Connection": "Alligator clip"
    },
    bestFor: "Handling any modern semiconductor, especially MOSFETs, MCUs, and SoCs",
    specifications: {
      "Wrist Strap": "Adjustable 150-280mm",
      "Cord Length": "1.8m coiled (extends to 3.6m)",
      "Resistance": "1MΩ ± 5%",
      "Connector": "4mm banana plug to alligator clip",
      "Strap Material": "Conductive fabric",
      "Cord Material": "PVC with conductive core",
      "Safety": "Current limiting resistor",
      "Standards": "IEC 61340-5-1"
    },
    features: [
      "1MΩ safety resistor",
      "Adjustable wrist strap",
      "Coiled cord design",
      "Secure connection",
      "Conductive fabric",
      "Safety compliance"
    ],
    tags: ["esd", "static", "protection", "wrist-strap", "safety"],
    overview: {
      description: "Your body can build up a significant static charge. Discharging this static through a sensitive component like a MOSFET or microcontroller can destroy it instantly and invisibly.",
      importance: "An ESD wrist strap safely connects you to a common ground point (like an ESD mat), continuously draining any static charge.",
      whyEssential: "Protect sensitive components from invisible damage - essential when working with modern semiconductors."
    }
  },
  {
    id: "tool-fume-extractor",
    name: "Fume Extractor",
    description: "Desktop fume extractor with activated carbon filter for soldering smoke removal",
    price: 185000,
    studentPrice: 157250,
    image: "/images/tools/fume-extractor.jpg",
    inStock: true,
    stockLevel: 34,
    rating: 4.8,
    reviews: 78,
    category: "tools",
    subcategory: "safety-workspace",
    keySpecs: {
      "Filter": "Activated carbon",
      "Fan": "Variable speed control",
      "Arm": "Adjustable positioning",
      "Power": "25W motor"
    },
    bestFor: "Anyone who solders regularly, especially in areas with limited ventilation",
    specifications: {
      "Motor Power": "25W",
      "Airflow": "15-45 CFM variable",
      "Filter Type": "Activated carbon + pre-filter",
      "Filter Life": "6-12 months typical",
      "Noise Level": "< 45dB",
      "Arm Length": "300mm flexible",
      "Intake Diameter": "75mm",
      "Power": "110-240V AC",
      "Dimensions": "250 x 180 x 120mm",
      "Weight": "2.1kg"
    },
    features: [
      "Variable speed fan",
      "Carbon filtration",
      "Flexible positioning",
      "Quiet operation",
      "Replaceable filters",
      "Desktop design"
    ],
    tags: ["fume-extractor", "ventilation", "air-filter", "soldering-safety"],
    overview: {
      description: "The smoke produced during soldering comes from the flux core and can be irritating and harmful to your respiratory system.",
      importance: "A fume extractor uses a fan to pull this smoke away from your face and through an activated carbon filter, which absorbs many of the harmful fumes.",
      whyEssential: "Breathe cleaner air while you work - protects your health during extended soldering sessions."
    }
  },

  // Additional Professional Tools (20 more tools)
  {
    id: "tool-hot-air-station",
    name: "Hot Air Rework Station",
    description: "Professional SMD rework station for surface-mount component removal and installation",
    price: 485000,
    studentPrice: 412250,
    image: "/images/tools/hot-air-station.jpg",
    inStock: true,
    stockLevel: 18,
    rating: 4.9,
    reviews: 67,
    category: "tools",
    subcategory: "soldering-reworking",
    keySpecs: {
      "Temperature Range": "100°C-500°C",
      "Airflow": "0.3-24 L/min",
      "Display": "Digital LED",
      "Nozzles": "Multiple sizes included"
    },
    bestFor: "SMD component replacement, PCB rework, and heat-shrink tubing",
    proTip: "Start with lower temperature and higher airflow. SMD components need gentle, even heating to avoid thermal shock.",
    specifications: {
      "Temperature Range": "100°C-500°C",
      "Temperature Stability": "±2°C",
      "Airflow Range": "0.3-24 L/min",
      "Power": "700W",
      "Display": "Digital LED with preset memory",
      "Nozzles": "5 sizes included",
      "Heat-up Time": "< 30 seconds",
      "Cooling": "Automatic cool-down cycle",
      "Safety": "Sleep mode, over-temperature protection"
    },
    features: [
      "Precise temperature control",
      "Variable airflow",
      "Multiple nozzle sizes",
      "Digital display",
      "Memory presets",
      "Safety features"
    ],
    tags: ["hot-air", "smd", "rework", "professional", "temperature-control"],
    overview: {
      description: "Essential for working with surface-mount components that cannot be soldered with a traditional iron.",
      importance: "Uses controlled hot air to heat components evenly, allowing safe removal and installation of SMD parts.",
      whyEssential: "Required for modern electronics repair and SMD component work - enables professional-level PCB rework."
    }
  },

  {
    id: "tool-oscilloscope-digital",
    name: "Digital Storage Oscilloscope (2-Channel)",
    description: "Entry-level digital oscilloscope for visualizing electrical signals and debugging circuits",
    price: 750000,
    studentPrice: 637500,
    image: "/images/tools/oscilloscope.jpg",
    inStock: true,
    stockLevel: 12,
    rating: 4.7,
    reviews: 45,
    category: "tools",
    subcategory: "testing-measurement",
    keySpecs: {
      "Channels": "2 analog channels",
      "Bandwidth": "20MHz",
      "Sample Rate": "100MS/s",
      "Screen": "7-inch color TFT"
    },
    bestFor: "Signal analysis, waveform measurement, and circuit debugging",
    specifications: {
      "Analog Channels": "2",
      "Bandwidth": "20MHz",
      "Sample Rate": "100MS/s real-time",
      "Memory Depth": "8K points per channel",
      "Vertical Resolution": "8-bit",
      "Time Base": "5ns/div - 50s/div",
      "Input Coupling": "AC, DC, Ground",
      "Trigger Types": "Edge, Pulse, Video",
      "Display": "7-inch 800x480 TFT",
      "Interface": "USB host/device",
      "Storage": "Internal memory + USB"
    },
    features: [
      "2-channel analysis",
      "Color display",
      "Multiple trigger modes",
      "USB connectivity",
      "Waveform storage",
      "Automatic measurements"
    ],
    tags: ["oscilloscope", "signal-analysis", "debugging", "waveform", "professional"],
    overview: {
      description: "An oscilloscope shows voltage changes over time, revealing the shape and characteristics of electrical signals.",
      importance: "Essential for debugging timing issues, measuring signal integrity, and understanding how circuits behave.",
      whyEssential: "See what's actually happening in your circuits - indispensable for serious electronics development."
    }
  },

  {
    id: "tool-function-generator",
    name: "Function Generator",
    description: "Signal generator producing sine, square, triangle, and arbitrary waveforms for testing",
    price: 320000,
    studentPrice: 272000,
    image: "/images/tools/function-generator.jpg",
    inStock: true,
    stockLevel: 15,
    rating: 4.6,
    reviews: 34,
    category: "tools",
    subcategory: "testing-measurement",
    keySpecs: {
      "Frequency Range": "0.1Hz - 2MHz",
      "Waveforms": "Sine, Square, Triangle, Pulse",
      "Output": "10Vpp maximum",
      "Accuracy": "±1% frequency"
    },
    bestFor: "Testing amplifiers, filters, and frequency-dependent circuits",
    specifications: {
      "Frequency Range": "0.1Hz - 2MHz",
      "Waveforms": "Sine, Square, Triangle, Pulse, Ramp, Noise",
      "Frequency Accuracy": "±1%",
      "Output Amplitude": "0-10Vpp into 50Ω",
      "Output Impedance": "50Ω",
      "Duty Cycle": "10%-90% (square wave)",
      "Rise Time": "<100ns",
      "Harmonic Distortion": "<1% (sine wave)",
      "Display": "4-digit LED",
      "Interface": "BNC output connector"
    },
    features: [
      "Multiple waveforms",
      "Wide frequency range",
      "Amplitude control",
      "Duty cycle adjustment",
      "Low distortion",
      "Professional output"
    ],
    tags: ["function-generator", "signal-source", "testing", "waveform", "frequency"],
    overview: {
      description: "Generates known test signals to evaluate how circuits respond to different input conditions.",
      importance: "Essential for testing amplifiers, filters, and any frequency-sensitive circuits by providing controlled input signals.",
      whyEssential: "Provides controlled test signals - crucial for characterizing and testing circuit behavior."
    }
  },

  {
    id: "tool-lcr-meter",
    name: "LCR Meter",
    description: "Precision meter for measuring inductance, capacitance, and resistance values",
    price: 185000,
    studentPrice: 157250,
    image: "/images/tools/lcr-meter.jpg",
    inStock: true,
    stockLevel: 28,
    rating: 4.8,
    reviews: 67,
    category: "tools",
    subcategory: "testing-measurement",
    keySpecs: {
      "Parameters": "L, C, R, Z, Q, D",
      "Accuracy": "0.2% basic accuracy",
      "Test Frequency": "100Hz, 120Hz, 1kHz, 10kHz",
      "Range": "Auto-ranging"
    },
    bestFor: "Component verification, quality control, and impedance measurements",
    specifications: {
      "Inductance Range": "1µH - 10H",
      "Capacitance Range": "1pF - 10mF", 
      "Resistance Range": "1mΩ - 10MΩ",
      "Test Frequencies": "100Hz, 120Hz, 1kHz, 10kHz",
      "Basic Accuracy": "0.2%",
      "Display": "4.3-inch color TFT",
      "Test Signal": "1V, 0.3V, 0.1V selectable",
      "Measurement Speed": "Fast/Medium/Slow",
      "Interface": "USB, RS-232",
      "Storage": "Internal memory + USB"
    },
    features: [
      "L, C, R measurement",
      "Multiple test frequencies",
      "High accuracy",
      "Auto-ranging",
      "Data logging",
      "Component sorting"
    ],
    tags: ["lcr-meter", "component-testing", "impedance", "precision", "measurement"],
    overview: {
      description: "Accurately measures the electrical properties of passive components beyond what a basic multimeter can do.",
      importance: "Essential for component verification, quality control, and troubleshooting reactive circuits.",
      whyEssential: "Verify component values with high precision - critical for quality control and component selection."
    }
  },

  {
    id: "tool-spectrum-analyzer",
    name: "USB Spectrum Analyzer",
    description: "Computer-based RF spectrum analyzer for frequency domain analysis up to 1.5GHz",
    price: 890000,
    studentPrice: 756500,
    image: "/images/tools/spectrum-analyzer.jpg",
    inStock: true,
    stockLevel: 8,
    rating: 4.5,
    reviews: 23,
    category: "tools",
    subcategory: "testing-measurement",
    keySpecs: {
      "Frequency Range": "1MHz - 1.5GHz",
      "Resolution": "1kHz minimum",
      "Interface": "USB 3.0",
      "Software": "Windows/Linux compatible"
    },
    bestFor: "RF design, EMI testing, and wireless communication development",
    specifications: {
      "Frequency Range": "1MHz - 1.5GHz",
      "Resolution Bandwidth": "1kHz - 3MHz",
      "Dynamic Range": ">70dB",
      "Amplitude Accuracy": "±2dB",
      "Phase Noise": "-90dBc/Hz @ 10kHz offset",
      "Sweep Speed": "1ms minimum",
      "Interface": "USB 3.0",
      "Power": "USB powered",
      "Software": "Comprehensive PC software",
      "Markers": "Peak, delta, harmonic"
    },
    features: [
      "Wide frequency coverage",
      "High dynamic range",
      "USB powered",
      "PC software included",
      "Real-time analysis",
      "Marker functions"
    ],
    tags: ["spectrum-analyzer", "rf", "frequency-domain", "emi", "wireless"],
    overview: {
      description: "Analyzes signals in the frequency domain, showing the spectral content and harmonics of RF signals.",
      importance: "Essential for RF circuit design, EMI compliance testing, and wireless system development.",
      whyEssential: "See signals in the frequency domain - crucial for RF design and electromagnetic compatibility testing."
    }
  },

  {
    id: "tool-pcb-drill-set",
    name: "PCB Drill Bit Set",
    description: "Precision carbide drill bits for PCB via drilling and component holes",
    price: 42000,
    studentPrice: 35700,
    image: "/images/tools/pcb-drill-bits.jpg",
    inStock: true,
    stockLevel: 65,
    rating: 4.7,
    reviews: 89,
    category: "tools",
    subcategory: "hand-tools-prototyping",
    keySpecs: {
      "Material": "Tungsten carbide",
      "Sizes": "0.3mm - 1.5mm (20 sizes)",
      "Shank": "3.175mm (1/8 inch)",
      "Coating": "TiN coated"
    },
    bestFor: "Drilling precise holes in PCBs for components and vias",
    specifications: {
      "Material": "Tungsten carbide",
      "Coating": "Titanium Nitride (TiN)",
      "Shank Diameter": "3.175mm (1/8 inch)",
      "Size Range": "0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5mm",
      "Total Length": "38mm",
      "Flute Length": "18mm",
      "Point Angle": "130°",
      "Helix Angle": "30°",
      "Cutting Speed": "High speed capable"
    },
    features: [
      "Tungsten carbide construction",
      "TiN coating for longevity",
      "Precision ground points",
      "Standard 1/8 inch shank",
      "Complete size range",
      "Professional quality"
    ],
    tags: ["drill-bits", "pcb", "precision", "carbide", "hole-drilling"],
    overview: {
      description: "High-precision drill bits specifically designed for the demanding requirements of PCB work.",
      importance: "Essential for creating clean, accurate holes without delamination or fiber pull-out in fiberglass PCBs.",
      whyEssential: "Create precise holes in PCBs - standard drill bits will chip and tear the copper and fiberglass."
    }
  },

  {
    id: "tool-hot-plate-preheater",
    name: "PCB Preheating Hot Plate",
    description: "Temperature-controlled hot plate for preheating PCBs during rework and soldering",
    price: 285000,
    studentPrice: 242250,
    image: "/images/tools/hot-plate.jpg",
    inStock: true,
    stockLevel: 22,
    rating: 4.6,
    reviews: 43,
    category: "tools",
    subcategory: "soldering-reworking",
    keySpecs: {
      "Temperature Range": "50°C-200°C",
      "Plate Size": "200 x 200mm",
      "Control": "Digital PID controller",
      "Power": "300W"
    },
    bestFor: "Preheating large PCBs before rework, reducing thermal stress on components",
    specifications: {
      "Temperature Range": "50°C-200°C",
      "Temperature Stability": "±2°C",
      "Plate Dimensions": "200 x 200mm",
      "Heating Element": "Aluminum plate with embedded heater",
      "Power": "300W",
      "Control": "Digital PID with display",
      "Heat-up Time": "5 minutes to 150°C",
      "Surface": "ESD-safe coating",
      "Safety": "Over-temperature protection"
    },
    features: [
      "Even heat distribution",
      "Digital temperature control",
      "ESD-safe surface",
      "Large working area",
      "Fast heat-up",
      "Safety protection"
    ],
    tags: ["preheater", "hot-plate", "pcb-rework", "temperature-control", "professional"],
    overview: {
      description: "Preheats PCBs to reduce thermal stress when performing component rework or removal.",
      importance: "Large multilayer PCBs act as heat sinks, making component removal difficult without preheating.",
      whyEssential: "Prevent thermal shock to PCBs during rework - essential for working with large or multilayer boards."
    }
  },

  {
    id: "tool-component-counter",
    name: "Electronic Component Counter",
    description: "Automatic counter for SMD components, resistors, and small electronic parts",
    price: 125000,
    studentPrice: 106250,
    image: "/images/tools/component-counter.jpg",
    inStock: true,
    stockLevel: 18,
    rating: 4.4,
    reviews: 29,
    category: "tools",
    subcategory: "hand-tools-prototyping",
    keySpecs: {
      "Counting Range": "1-9999 pieces",
      "Component Size": "0402 to large ICs",
      "Accuracy": "±1 count",
      "Display": "LCD with backlight"
    },
    bestFor: "Inventory management and production counting of small components",
    specifications: {
      "Count Range": "1-9999 pieces",
      "Component Size": "0.5mm x 0.25mm minimum",
      "Counting Accuracy": "±1 count",
      "Detection Method": "Vibration sensing",
      "Display": "LCD with backlight",
      "Power": "2 x AA batteries",
      "Bowl Capacity": "50ml",
      "Operating Temperature": "0°C to 40°C"
    },
    features: [
      "Automatic counting",
      "Wide size range",
      "High accuracy",
      "Battery powered",
      "Portable design",
      "Easy operation"
    ],
    tags: ["component-counter", "inventory", "smd", "counting", "production"],
    overview: {
      description: "Automatically counts small electronic components by detecting vibrations as they pass through.",
      importance: "Essential for inventory management and quality control in production environments.",
      whyEssential: "Accurate component counting - saves time and reduces errors in inventory and production."
    }
  },

  {
    id: "tool-pcb-vise",
    name: "PCB Holding Vise",
    description: "Adjustable vise specifically designed for securely holding PCBs during work",
    price: 75000,
    studentPrice: 63750,
    image: "/images/tools/pcb-vise.jpg",
    inStock: true,
    stockLevel: 45,
    rating: 4.8,
    reviews: 78,
    category: "tools",
    subcategory: "hand-tools-prototyping",
    keySpecs: {
      "PCB Width": "Up to 200mm",
      "Rotation": "360° rotation",
      "Tilt": "±45° tilt adjustment",
      "Jaws": "Non-marring soft jaws"
    },
    bestFor: "Holding PCBs securely for soldering, inspection, and rework",
    specifications: {
      "PCB Width Range": "10-200mm",
      "PCB Thickness": "0.5-5mm",
      "Rotation": "360° continuous",
      "Tilt Range": "±45°",
      "Jaw Material": "Soft plastic",
      "Base": "Heavy cast iron",
      "Clamping Force": "Adjustable",
      "Dimensions": "250 x 180 x 150mm"
    },
    features: [
      "Adjustable clamping",
      "360° rotation",
      "Tilt adjustment",
      "Non-marring jaws",
      "Stable base",
      "Precise positioning"
    ],
    tags: ["pcb-vise", "holding", "positioning", "soldering-aid", "workbench"],
    overview: {
      description: "Specialized vise designed to hold PCBs securely without damage while allowing optimal positioning.",
      importance: "Provides stable, adjustable positioning for precision work on circuit boards.",
      whyEssential: "Secure PCB positioning - essential for precision soldering and inspection work."
    }
  },

  {
    id: "tool-solder-paste-dispenser",
    name: "Solder Paste Dispenser",
    description: "Precision pneumatic dispenser for applying solder paste to PCB pads",
    price: 165000,
    studentPrice: 140250,
    image: "/images/tools/paste-dispenser.jpg",
    inStock: true,
    stockLevel: 12,
    rating: 4.5,
    reviews: 31,
    category: "tools",
    subcategory: "soldering-reworking",
    keySpecs: {
      "Pressure Range": "0.1-0.8 MPa",
      "Needle Sizes": "14G-25G",
      "Timer Control": "0.01-99.99 seconds",
      "Foot Pedal": "Included"
    },
    bestFor: "SMD assembly, prototyping, and small-scale production",
    specifications: {
      "Pressure Range": "0.1-0.8 MPa",
      "Pressure Accuracy": "±0.01 MPa",
      "Timer Range": "0.01-99.99 seconds",
      "Timer Accuracy": "±0.01 seconds",
      "Needle Sizes": "14G, 16G, 18G, 20G, 22G, 25G",
      "Syringe Size": "3cc, 5cc, 10cc, 30cc",
      "Control": "Digital display",
      "Operation": "Foot pedal or manual"
    },
    features: [
      "Precise pressure control",
      "Digital timer",
      "Multiple needle sizes",
      "Foot pedal operation",
      "Consistent dispensing",
      "Professional grade"
    ],
    tags: ["solder-paste", "dispenser", "smd-assembly", "precision", "pneumatic"],
    overview: {
      description: "Applies precise amounts of solder paste to PCB pads for SMD component assembly.",
      importance: "Essential for consistent, professional SMD assembly and prototyping work.",
      whyEssential: "Precise solder paste application - crucial for professional SMD assembly and prototyping."
    }
  },

  {
    id: "tool-inspection-microscope",
    name: "Stereo Inspection Microscope",
    description: "Stereo microscope with LED illumination for detailed PCB and component inspection",
    price: 425000,
    studentPrice: 361250,
    image: "/images/tools/stereo-microscope.jpg",
    inStock: true,
    stockLevel: 8,
    rating: 4.9,
    reviews: 34,
    category: "tools",
    subcategory: "testing-measurement",
    keySpecs: {
      "Magnification": "7x-45x zoom",
      "Working Distance": "100mm",
      "Illumination": "LED ring light",
      "Eyepieces": "Wide field 10x"
    },
    bestFor: "Quality inspection, rework verification, and failure analysis",
    specifications: {
      "Total Magnification": "7x-45x continuous zoom",
      "Objective Lens": "0.7x-4.5x",
      "Eyepieces": "WF10x/22mm",
      "Working Distance": "100mm",
      "Field of View": "31.4mm-4.9mm",
      "Illumination": "LED ring light with intensity control",
      "Head": "Binocular 45° inclined",
      "Stand": "Boom stand with heavy base",
      "Focus": "Coarse and fine adjustment"
    },
    features: [
      "Continuous zoom",
      "Stereo viewing",
      "LED illumination",
      "Large working distance",
      "Stable boom stand",
      "Professional optics"
    ],
    tags: ["microscope", "inspection", "magnification", "quality-control", "stereo"],
    overview: {
      description: "Provides magnified stereo vision for detailed inspection of PCBs and components.",
      importance: "Essential for quality control, rework verification, and detailed failure analysis.",
      whyEssential: "See fine details clearly - indispensable for quality inspection and precision rework."
    }
  },

  {
    id: "tool-ultrasonic-cleaner",
    name: "Ultrasonic PCB Cleaner",
    description: "Ultrasonic cleaning bath for removing flux, oils, and contaminants from PCBs",
    price: 195000,
    studentPrice: 165750,
    image: "/images/tools/ultrasonic-cleaner.jpg",
    inStock: true,
    stockLevel: 14,
    rating: 4.7,
    reviews: 52,
    category: "tools",
    subcategory: "hand-tools-prototyping",
    keySpecs: {
      "Capacity": "2.5 liters",
      "Frequency": "40kHz ultrasonic",
      "Heating": "Digital temp control",
      "Timer": "1-99 minutes"
    },
    bestFor: "Cleaning flux residue, oils, and contaminants from PCBs and components",
    specifications: {
      "Tank Capacity": "2.5 liters",
      "Internal Dimensions": "150 x 140 x 100mm",
      "Ultrasonic Frequency": "40kHz",
      "Ultrasonic Power": "60W",
      "Heating Power": "100W",
      "Temperature Range": "Room temp to 80°C",
      "Timer": "1-99 minutes digital",
      "Construction": "Stainless steel tank",
      "Features": "Degassing function"
    },
    features: [
      "40kHz ultrasonic action",
      "Digital heating control",
      "Programmable timer",
      "Stainless steel tank",
      "Degassing function",
      "Professional grade"
    ],
    tags: ["ultrasonic-cleaner", "pcb-cleaning", "flux-removal", "maintenance", "professional"],
    overview: {
      description: "Uses ultrasonic vibrations to remove flux residue and contaminants from PCBs and components.",
      importance: "Essential for professional cleaning and preparation of PCBs for conformal coating or high-reliability applications.",
      whyEssential: "Professional PCB cleaning - removes contaminants that can cause long-term reliability issues."
    }
  },

  {
    id: "tool-torque-screwdriver",
    name: "Precision Torque Screwdriver Set",
    description: "Calibrated torque screwdrivers for controlled tightening without over-torquing",
    price: 125000,
    studentPrice: 106250,
    image: "/images/tools/torque-screwdriver.jpg",
    inStock: true,
    stockLevel: 28,
    rating: 4.6,
    reviews: 67,
    category: "tools",
    subcategory: "hand-tools-prototyping",
    keySpecs: {
      "Torque Range": "0.05-0.8 Nm",
      "Accuracy": "±6%",
      "Bits": "15 precision bits",
      "Handle": "Ergonomic grip"
    },
    bestFor: "Precision assembly where over-tightening could damage components or housings",
    specifications: {
      "Torque Range": "0.05-0.8 Nm (0.44-7.08 in-lb)",
      "Accuracy": "±6% of set value",
      "Resolution": "0.01 Nm",
      "Bit Count": "15 precision bits",
      "Handle": "Ergonomic with torque scale",
      "Mechanism": "Cam-over clutch",
      "Calibration": "Traceable certificate",
      "Case": "Protective carrying case"
    },
    features: [
      "Precise torque control",
      "Cam-over mechanism",
      "Traceable calibration",
      "Multiple bit sizes",
      "Ergonomic design",
      "Professional accuracy"
    ],
    tags: ["torque-screwdriver", "precision", "controlled-tightening", "calibrated", "assembly"],
    overview: {
      description: "Provides controlled, repeatable torque for precision assembly work.",
      importance: "Prevents over-tightening that can damage delicate components or strip threads.",
      whyEssential: "Controlled fastening torque - prevents damage to delicate assemblies and ensures consistent results."
    }
  },

  {
    id: "tool-label-printer",
    name: "Electronic Label Printer",
    description: "Compact label printer for component identification and cable labeling",
    price: 85000,
    studentPrice: 72250,
    image: "/images/tools/label-printer.jpg",
    inStock: true,
    stockLevel: 35,
    rating: 4.5,
    reviews: 89,
    category: "tools",
    subcategory: "hand-tools-prototyping",
    keySpecs: {
      "Label Width": "6-24mm tapes",
      "Resolution": "180 dpi",
      "Interface": "USB connectivity",
      "Software": "PC/Mac compatible"
    },
    bestFor: "Cable labeling, component identification, and workshop organization",
    specifications: {
      "Label Widths": "6, 9, 12, 18, 24mm",
      "Print Resolution": "180 dpi",
      "Print Speed": "20mm/sec",
      "Connectivity": "USB 2.0",
      "Software": "Windows/Mac compatible",
      "Power": "AC adapter or USB powered",
      "Tape Types": "Laminated, strong adhesive",
      "Character Sets": "Multiple languages",
      "Symbols": "Electrical and safety symbols"
    },
    features: [
      "Multiple tape widths",
      "High resolution printing",
      "Durable laminated labels",
      "Symbol library",
      "Easy software",
      "Professional results"
    ],
    tags: ["label-printer", "organization", "cable-labeling", "identification", "workshop"],
    overview: {
      description: "Creates durable, professional labels for cables, components, and workshop organization.",
      importance: "Essential for maintaining organized, professional-looking installations and troubleshooting.",
      whyEssential: "Professional labeling and organization - crucial for maintaining and troubleshooting complex systems."
    }
  },

  {
    id: "tool-impedance-analyzer",
    name: "Impedance Analyzer",
    description: "Advanced impedance analyzer for complex component characterization and filter design",
    price: 1250000,
    studentPrice: 1062500,
    image: "/images/tools/impedance-analyzer.jpg",
    inStock: true,
    stockLevel: 5,
    rating: 4.8,
    reviews: 18,
    category: "tools",
    subcategory: "testing-measurement",
    keySpecs: {
      "Frequency Range": "20Hz-120MHz",
      "Impedance Range": "1mΩ-100MΩ",
      "Accuracy": "0.08% basic accuracy",
      "Measurement Speed": "25 points/second"
    },
    bestFor: "Advanced component characterization, filter design, and material analysis",
    specifications: {
      "Frequency Range": "20Hz-120MHz",
      "Impedance Range": "1mΩ-100MΩ",
      "Basic Accuracy": "0.08%",
      "Test Signal Level": "5mV-2V (13 levels)",
      "Measurement Parameters": "Z, Y, θ, R, X, G, B, L, C, D, Q",
      "Sweep Points": "2-1601 points",
      "Display": "8.4-inch color TFT",
      "Interface": "USB, LAN, GPIB",
      "Measurement Speed": "25 points/second maximum"
    },
    features: [
      "Wide frequency range",
      "High accuracy",
      "Multiple parameters",
      "Fast measurement",
      "Network connectivity",
      "Professional grade"
    ],
    tags: ["impedance-analyzer", "component-analysis", "filter-design", "professional", "advanced"],
    overview: {
      description: "Provides detailed impedance characterization across a wide frequency range for advanced analysis.",
      importance: "Essential for filter design, component characterization, and material property analysis.",
      whyEssential: "Advanced component analysis - required for sophisticated filter design and material characterization."
    }
  },

  {
    id: "tool-curve-tracer",
    name: "Semiconductor Curve Tracer",
    description: "Instrument for characterizing and testing semiconductor devices by plotting I-V curves",
    price: 950000,
    studentPrice: 807500,
    image: "/images/tools/curve-tracer.jpg",
    inStock: true,
    stockLevel: 6,
    rating: 4.7,
    reviews: 24,
    category: "tools",
    subcategory: "testing-measurement",
    keySpecs: {
      "Voltage Range": "±200V",
      "Current Range": "±2A",
      "Device Types": "Diodes, Transistors, FETs",
      "Display": "X-Y plotting"
    },
    bestFor: "Semiconductor device characterization, matching components, and failure analysis",
    specifications: {
      "Collector Voltage": "±200V",
      "Collector Current": "±2A",
      "Base/Gate Voltage": "±20V",
      "Base/Gate Current": "±200mA",
      "Device Types": "NPN, PNP, NMOS, PMOS, Diodes",
      "Measurement Modes": "Common emitter, common base, common collector",
      "Display": "Built-in oscilloscope with X-Y mode",
      "Step Generator": "10 current/voltage steps",
      "Protection": "Device protection circuits"
    },
    features: [
      "Complete I-V characterization",
      "Multiple device types",
      "Built-in protection",
      "X-Y display",
      "Step generation",
      "Professional analysis"
    ],
    tags: ["curve-tracer", "semiconductor-testing", "iv-curves", "component-matching", "analysis"],
    overview: {
      description: "Plots the current-voltage characteristics of semiconductor devices for analysis and matching.",
      importance: "Essential for component matching, failure analysis, and understanding device behavior.",
      whyEssential: "Semiconductor characterization - crucial for component matching and failure analysis in advanced designs."
    }
  },

  {
    id: "tool-network-analyzer",
    name: "Vector Network Analyzer",
    description: "Portable VNA for measuring S-parameters and impedance matching up to 3GHz",
    price: 1850000,
    studentPrice: 1572500,
    image: "/images/tools/network-analyzer.jpg",
    inStock: true,
    stockLevel: 3,
    rating: 4.9,
    reviews: 12,
    category: "tools",
    subcategory: "testing-measurement",
    keySpecs: {
      "Frequency Range": "10kHz-3GHz",
      "Dynamic Range": ">100dB",
      "S-Parameters": "S11, S21, S12, S22",
      "Calibration": "Full 2-port SOLT"
    },
    bestFor: "RF design, antenna analysis, filter characterization, and impedance matching",
    specifications: {
      "Frequency Range": "10kHz-3GHz",
      "Dynamic Range": ">100dB",
      "Measurement Points": "Up to 10,001 points",
      "S-Parameters": "S11, S21, S12, S22",
      "Calibration Standards": "SOL, SOLT, TRL",
      "Display": "High-resolution color LCD",
      "Interface": "USB, Ethernet",
      "Power": "USB powered or external adapter",
      "Connectors": "SMA female"
    },
    features: [
      "Wide frequency range",
      "High dynamic range",
      "Full 2-port measurement",
      "Multiple calibration options",
      "Portable design",
      "Professional accuracy"
    ],
    tags: ["network-analyzer", "rf-measurement", "s-parameters", "antenna-analysis", "professional"],
    overview: {
      description: "Measures reflection and transmission characteristics of RF networks and components.",
      importance: "Essential for RF design, antenna analysis, and filter characterization in high-frequency applications.",
      whyEssential: "RF network analysis - indispensable for high-frequency design and antenna work."
    }
  },

  {
    id: "tool-programmable-load",
    name: "Electronic Programmable Load",
    description: "Programmable DC load for testing power supplies and battery discharge testing",
    price: 425000,
    studentPrice: 361250,
    image: "/images/tools/programmable-load.jpg",
    inStock: true,
    stockLevel: 11,
    rating: 4.6,
    reviews: 38,
    category: "tools",
    subcategory: "testing-measurement",
    keySpecs: {
      "Voltage Range": "1-150V",
      "Current Range": "0-30A",
      "Power": "300W maximum",
      "Modes": "CC, CV, CR, CP"
    },
    bestFor: "Power supply testing, battery discharge testing, and load regulation analysis",
    specifications: {
      "Voltage Range": "1-150V",
      "Current Range": "0-30A",
      "Power Rating": "300W",
      "Load Modes": "CC, CV, CR, CP",
      "Resolution": "1mV, 0.1mA",
      "Accuracy": "±(0.02% + 2 digits)",
      "Slew Rate": "2.5A/µs",
      "Protection": "OVP, OCP, OPP, OTP",
      "Interface": "USB, RS-232, LAN",
      "Programming": "SCPI commands"
    },
    features: [
      "Multiple load modes",
      "High accuracy",
      "Fast transient response",
      "Remote programming",
      "Comprehensive protection",
      "Professional grade"
    ],
    tags: ["programmable-load", "power-testing", "battery-testing", "load-regulation", "professional"],
    overview: {
      description: "Provides controlled, programmable loading for testing power supplies and batteries.",
      importance: "Essential for power supply design validation and battery discharge characterization.",
      whyEssential: "Controlled load testing - crucial for power supply design and battery performance analysis."
    }
  },

  {
    id: "tool-insulation-tester",
    name: "Digital Insulation Tester",
    description: "High-voltage insulation and continuity tester for safety verification",
    price: 285000,
    studentPrice: 242250,
    image: "/images/tools/insulation-tester.jpg",
    inStock: true,
    stockLevel: 16,
    rating: 4.8,
    reviews: 45,
    category: "tools",
    subcategory: "safety-workspace",
    keySpecs: {
      "Test Voltages": "250V, 500V, 1000V",
      "Resistance Range": "0.01MΩ-10GΩ",
      "Safety": "CAT III 600V rated",
      "Display": "Large LCD"
    },
    bestFor: "Electrical safety testing, insulation verification, and compliance testing",
    specifications: {
      "Test Voltages": "250V, 500V, 1000V DC",
      "Insulation Range": "0.01MΩ-10GΩ",
      "Accuracy": "±5% (23°C ±5°C)",
      "Test Current": "1mA at 1000V",
      "Safety Rating": "CAT III 600V",
      "Display": "4000 count LCD with backlight",
      "Auto Discharge": "Automatic after test",
      "Alarms": "Audible and visual",
      "Power": "6 x AA batteries"
    },
    features: [
      "Multiple test voltages",
      "Wide resistance range",
      "Safety rated design",
      "Auto discharge circuit",
      "Audio/visual alarms",
      "Professional grade"
    ],
    tags: ["insulation-tester", "safety-testing", "high-voltage", "compliance", "electrical-safety"],
    overview: {
      description: "Tests insulation integrity and electrical safety of circuits and equipment.",
      importance: "Essential for safety compliance testing and verification of electrical insulation.",
      whyEssential: "Electrical safety verification - required for compliance testing and safety assurance."
    }
  },

  {
    id: "tool-environmental-chamber",
    name: "Environmental Test Chamber",
    description: "Temperature and humidity chamber for environmental stress testing of electronic products",
    price: 2850000,
    studentPrice: 2422500,
    image: "/images/tools/environmental-chamber.jpg",
    inStock: true,
    stockLevel: 2,
    rating: 4.9,
    reviews: 8,
    category: "tools",
    subcategory: "testing-measurement",
    keySpecs: {
      "Temperature Range": "-20°C to +150°C",
      "Humidity Range": "20% to 95% RH",
      "Chamber Volume": "64 liters",
      "Uniformity": "±1°C, ±3% RH"
    },
    bestFor: "Environmental stress testing, qualification testing, and reliability verification",
    specifications: {
      "Temperature Range": "-20°C to +150°C",
      "Temperature Accuracy": "±0.5°C",
      "Humidity Range": "20% to 95% RH",
      "Humidity Accuracy": "±2% RH",
      "Chamber Volume": "64 liters (400 x 400 x 400mm)",
      "Heating Rate": "3°C/min",
      "Cooling Rate": "2°C/min",
      "Uniformity": "±1°C, ±3% RH",
      "Control": "PID with color touchscreen",
      "Interface": "USB, Ethernet, RS-485"
    },
    features: [
      "Wide temperature range",
      "Humidity control",
      "Excellent uniformity",
      "Programmable cycles",
      "Data logging",
      "Remote monitoring"
    ],
    tags: ["environmental-chamber", "temperature-testing", "humidity-testing", "reliability", "qualification"],
    overview: {
      description: "Subjects electronic products to controlled temperature and humidity conditions for reliability testing.",
      importance: "Essential for qualification testing and understanding how products perform in extreme environments.",
      whyEssential: "Environmental qualification - critical for ensuring product reliability across operating conditions."
    }
  }
]

export const toolCategories = [
  {
    id: "soldering-reworking",
    name: "Soldering & Reworking",
    description: "The heart of electronics assembly, where components meet the circuit board",
    productCount: allTools.filter(tool => tool.subcategory === "soldering-reworking").length
  },
  {
    id: "testing-measurement", 
    name: "Testing & Measurement",
    description: "The eyes and ears of electronics, used to see what's happening in a circuit",
    productCount: allTools.filter(tool => tool.subcategory === "testing-measurement").length
  },
  {
    id: "hand-tools-prototyping",
    name: "Hand Tools & Prototyping", 
    description: "The gear needed to physically build and manipulate your creations",
    productCount: allTools.filter(tool => tool.subcategory === "hand-tools-prototyping").length
  },
  {
    id: "safety-workspace",
    name: "Safety & Workspace",
    description: "Essential equipment to protect you and your components",
    productCount: allTools.filter(tool => tool.subcategory === "safety-workspace").length
  }
]
