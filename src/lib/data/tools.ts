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
