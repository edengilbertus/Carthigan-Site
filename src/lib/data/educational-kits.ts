export interface EducationalKit {
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
  targetAudience: string
  whatYouLearn: string[]
  kitContents: string[]
  estimatedProjectTime: string
  difficultyLevel: 'Beginner' | 'Intermediate' | 'Advanced'
  ageRange: string
  features: string[]
  tags: string[]
  overview: {
    description: string
    learningObjectives: string
    skillsAcquired: string
    recommendedPrerequisites?: string
  }
  specifications?: Record<string, string>
  proTip?: string
}

export const allEducationalKits: EducationalKit[] = [
  // Category 1: Foundational Electronics & Arduino Kits
  {
    id: "edu-carthigan-discovery-kit",
    name: "Carthigan Electronics Discovery Kit",
    description: "Your first step into the world of circuits - designed for absolute beginners to learn fundamental electronics principles",
    price: 120000,
    studentPrice: 102000,
    image: "/images/education/discovery-kit.jpg",
    inStock: true,
    stockLevel: 25,
    rating: 4.8,
    reviews: 156,
    category: "Educational Kits",
    subcategory: "Foundational Electronics",
    targetAudience: "Young students (primary and early secondary), parents and children, and anyone who wants to understand electronics before starting with coding",
    whatYouLearn: [
      "Basic circuit theory (series vs. parallel circuits)",
      "Ohm's Law and fundamental electrical principles",
      "How to use a breadboard safely and effectively",
      "Function of core components: resistors, capacitors, LEDs, and transistors",
      "Building simple circuits without programming",
      "Reading circuit diagrams and schematics"
    ],
    kitContents: [
      "830-point solderless breadboard",
      "65 pre-cut jumper wires (various lengths and colors)",
      "Assorted resistors (10Ω to 1MΩ, 20 values, 5 each)",
      "Ceramic capacitors (22pF to 100nF, 8 values)",
      "Electrolytic capacitors (1µF to 1000µF, 6 values)",
      "LEDs: Red, Green, Blue, Yellow, White (5 each)",
      "Push button switches (4 pieces)",
      "NPN transistors BC547 (5 pieces)",
      "PNP transistors BC557 (5 pieces)",
      "Signal diodes 1N4148 (10 pieces)",
      "9V battery snap connector",
      "Detailed 40-page experiment guide with 15 projects"
    ],
    estimatedProjectTime: "2-4 weeks (1-2 hours per session)",
    difficultyLevel: "Beginner",
    ageRange: "10+ years (with adult guidance for younger children)",
    features: [
      "No programming required - pure electronics focus",
      "Progressive difficulty - builds knowledge step by step",
      "Includes multimeter usage guide",
      "Safety-first approach with clear warnings",
      "Colorful, illustrated project manual",
      "Components organized in labeled storage box"
    ],
    tags: ["electronics", "circuits", "education", "beginner", "breadboard", "components"],
    overview: {
      description: "This kit focuses exclusively on teaching the fundamental principles of electricity and electronics through hands-on experiments. Without the complexity of programming, students can concentrate on understanding how electricity flows, how components work together, and how to build reliable circuits.",
      learningObjectives: "Students will understand voltage, current, and resistance relationships, learn to read circuit diagrams, and gain confidence in building electronic circuits safely and systematically.",
      skillsAcquired: "Circuit analysis, component identification, breadboard prototyping, multimeter usage, basic troubleshooting, and understanding of fundamental electrical principles.",
      recommendedPrerequisites: "Basic math skills (addition, multiplication). No prior electronics experience required."
    },
    specifications: {
      "Components": "Over 150 individual components",
      "Projects": "15 guided experiments + open exploration",
      "Manual": "40 pages, full-color illustrations",
      "Storage": "Organized compartment box included",
      "Age Suitability": "10+ (8+ with adult supervision)"
    },
    proTip: "Start with the LED experiments to build confidence, then progress to the transistor circuits. Take time to predict what will happen before building each circuit!"
  },
  
  {
    id: "edu-arduino-starter-classic",
    name: "Arduino Starter Kit - The Classic",
    description: "The world's most popular gateway to physical computing - learn electronics and programming together",
    price: 315000,
    studentPrice: 267750,
    image: "/images/education/arduino-starter.jpg",
    inStock: true,
    stockLevel: 18,
    rating: 4.9,
    reviews: 342,
    category: "Educational Kits",
    subcategory: "Arduino & Programming",
    targetAudience: "Secondary school students, university students, hobbyists, and aspiring inventors ready to combine electronics with programming",
    whatYouLearn: [
      "C++ programming fundamentals for Arduino",
      "Digital and analog input/output control",
      "Pulse Width Modulation (PWM) for motor speed and LED brightness",
      "Serial communication for debugging and data logging",
      "Sensor interfacing and data processing",
      "Motor control and robotics basics",
      "LCD display programming and user interfaces"
    ],
    kitContents: [
      "Arduino UNO R3 compatible board with USB cable",
      "830-point breadboard with power rails",
      "16x2 LCD display with I2C backpack",
      "SG90 micro servo motor",
      "DC geared motor with propeller",
      "5V relay module for controlling AC devices",
      "DHT11 temperature and humidity sensor",
      "HC-SR04 ultrasonic distance sensor",
      "Photoresistor (LDR) for light sensing",
      "Potentiometer for analog input",
      "Piezo buzzer for sound generation",
      "RGB LED (common cathode)",
      "Standard LEDs: Red, Green, Blue, Yellow (5 each)",
      "Push buttons and toggle switch",
      "Jumper wires: Male-to-Male, Male-to-Female, Female-to-Female",
      "Resistors: 220Ω, 1kΩ, 10kΩ (10 each)",
      "Comprehensive project book with 25 guided projects"
    ],
    estimatedProjectTime: "6-8 weeks (2-3 hours per session)",
    difficultyLevel: "Intermediate",
    ageRange: "14+ years",
    features: [
      "Arduino IDE programming environment included",
      "25 progressive projects from basic to advanced",
      "Online community support and forums",
      "Compatible with thousands of Arduino libraries",
      "Expandable - works with additional sensors and modules",
      "Professional-quality components"
    ],
    tags: ["arduino", "programming", "sensors", "motors", "microcontroller", "C++"],
    overview: {
      description: "This comprehensive kit bridges the gap between electronics and programming, teaching students how to create interactive devices that respond to the physical world. Projects range from simple LED control to complex sensor-driven systems.",
      learningObjectives: "Students will master Arduino programming, understand sensor integration, learn motor control principles, and develop skills to create their own interactive electronic projects.",
      skillsAcquired: "C++ programming for embedded systems, circuit design and analysis, sensor calibration and data processing, motor control techniques, and systematic debugging skills.",
      recommendedPrerequisites: "Basic understanding of electronics (or completion of Discovery Kit). Some programming experience helpful but not required."
    },
    specifications: {
      "Microcontroller": "ATmega328P-based Arduino UNO compatible",
      "Projects": "25 guided projects + unlimited creativity",
      "Sensors": "5 different sensor types included",
      "Actuators": "Servo motor, DC motor, buzzer, LEDs",
      "Programming": "Arduino IDE (C/C++)",
      "Documentation": "60-page full-color project book"
    },
    proTip: "Master the serial monitor early - it's your best debugging tool. Start with simple LED projects before moving to sensors, and always double-check your wiring before powering up!"
  },

  // Category 2: Robotics & Motion Kits
  {
    id: "edu-2wd-robot-car-kit",
    name: "2WD Smart Robot Car Kit",
    description: "Build your first autonomous robot - learn motor control, sensors, and robotics programming",
    price: 365000,
    studentPrice: 310250,
    image: "/images/education/robot-car.jpg",
    inStock: true,
    stockLevel: 12,
    rating: 4.7,
    reviews: 89,
    category: "Educational Kits",
    subcategory: "Robotics & Motion",
    targetAudience: "Intermediate students and hobbyists interested in robotics, autonomous systems, and mechanical engineering principles",
    whatYouLearn: [
      "Motor control with H-bridge driver circuits",
      "Sensor fusion for autonomous navigation",
      "PID control algorithms for smooth movement",
      "Obstacle avoidance programming",
      "Line following algorithms and sensor calibration",
      "Wireless control via Bluetooth or WiFi",
      "Basic robotics kinematics and movement planning"
    ],
    kitContents: [
      "Laser-cut acrylic robot chassis (black)",
      "2x N20 geared DC motors (6V, 200 RPM)",
      "2x Robot wheels (65mm diameter)",
      "1x Universal caster wheel (rear support)",
      "Arduino UNO R3 compatible board",
      "L298N dual motor driver module",
      "HC-SR04 ultrasonic sensor with mounting bracket",
      "5x IR line following sensors with PCB",
      "HC-05 Bluetooth module for wireless control",
      "Servo motor SG90 for sensor pan/tilt",
      "4x AA battery holder with switch",
      "Jumper wires and connection cables",
      "Screws, nuts, and assembly hardware",
      "Programming guide with 10 robot projects"
    ],
    estimatedProjectTime: "4-6 weeks (3-4 hours per session)",
    difficultyLevel: "Intermediate",
    ageRange: "16+ years",
    features: [
      "Tool-free assembly with pre-drilled chassis",
      "Modular design - easy to add more sensors",
      "Remote control via smartphone app",
      "Open-source software with example code",
      "Expandable platform for advanced projects",
      "Durable construction for repeated use"
    ],
    tags: ["robotics", "autonomous", "motors", "sensors", "navigation", "programming"],
    overview: {
      description: "This robot car kit provides hands-on experience with autonomous robotics, teaching students how to integrate multiple sensors and actuators to create intelligent behavior. The robot can navigate obstacles, follow lines, and respond to remote commands.",
      learningObjectives: "Students will understand robotics fundamentals, master sensor integration techniques, learn autonomous navigation algorithms, and develop skills in mechanical assembly and programming.",
      skillsAcquired: "Motor control programming, sensor data processing, autonomous navigation algorithms, mechanical assembly, wireless communication, and systematic robot debugging.",
      recommendedPrerequisites: "Arduino programming experience (Arduino Starter Kit recommended). Basic understanding of motors and sensors."
    },
    specifications: {
      "Chassis": "Laser-cut acrylic, 170mm x 130mm",
      "Motors": "N20 geared DC motors, 6V, 200 RPM",
      "Sensors": "Ultrasonic distance, IR line following, Bluetooth",
      "Battery": "4x AA batteries (not included)",
      "Speed": "Adjustable, up to 1 m/s",
      "Programming": "Arduino IDE with provided libraries"
    },
    proTip: "Start with basic forward movement, then add steering. Calibrate your line sensors on the surface you'll use. The ultrasonic sensor works best between 2cm and 400cm - test the range for your specific projects!"
  },

  {
    id: "edu-robotic-arm-kit",
    name: "4-DOF Robotic Arm Kit",
    description: "Explore kinematics and industrial automation with a desktop robotic arm",
    price: 400000,
    studentPrice: 340000,
    image: "/images/education/robotic-arm.jpg",
    inStock: true,
    stockLevel: 8,
    rating: 4.6,
    reviews: 67,
    category: "Educational Kits",
    subcategory: "Robotics & Motion",
    targetAudience: "High school students, university engineering students, and advanced hobbyists interested in mechanical engineering and automation",
    whatYouLearn: [
      "Forward and inverse kinematics calculations",
      "Servo motor control and positioning",
      "Coordinate transformation and workspace analysis",
      "Path planning and trajectory generation",
      "Mechanical advantage and gear ratios",
      "Industrial automation programming concepts",
      "Human-machine interface design"
    ],
    kitContents: [
      "Precision laser-cut acrylic arm components",
      "4x SG90 micro servo motors (base, shoulder, elbow, gripper)",
      "Arduino UNO R3 compatible board",
      "16-channel servo motor driver shield",
      "Analog joystick module for manual control",
      "Push buttons for preset positions",
      "0.96\" OLED display for status feedback",
      "All mounting screws and bearings",
      "Gripper assembly with rubber pads",
      "Power supply adapter (6V, 3A)",
      "Assembly manual with kinematic equations",
      "Programming examples and control software"
    ],
    estimatedProjectTime: "5-7 weeks (4-5 hours per session)",
    difficultyLevel: "Advanced",
    ageRange: "16+ years",
    features: [
      "4 degrees of freedom for complex movements",
      "Precision servo control with 1-degree accuracy",
      "Multiple control modes: joystick, preset, programmed",
      "Real-time position feedback and display",
      "Expandable - can add vision or sensor systems",
      "Professional-grade servo motors"
    ],
    tags: ["robotics", "kinematics", "servos", "automation", "mechanical", "engineering"],
    overview: {
      description: "This robotic arm kit teaches fundamental concepts of industrial automation and mechanical engineering. Students learn to control a multi-degree-of-freedom system while understanding the mathematics and programming behind robotic movement.",
      learningObjectives: "Students will master servo motor control, understand kinematic principles, learn coordinate transformation techniques, and develop skills in mechanical assembly and automation programming.",
      skillsAcquired: "Kinematics calculations, servo programming, mechanical assembly, coordinate geometry, automation sequencing, and industrial robotics concepts.",
      recommendedPrerequisites: "Arduino programming experience and basic trigonometry. Understanding of coordinate systems helpful."
    },
    specifications: {
      "Degrees of Freedom": "4 (base rotation, shoulder, elbow, gripper)",
      "Reach": "Approximately 300mm from base",
      "Payload": "Up to 50g at full extension",
      "Servo Resolution": "1 degree accuracy",
      "Control Interface": "Joystick + buttons + programmatic",
      "Power": "6V, 3A external supply"
    },
    proTip: "Assemble carefully and test each joint individually before connecting all servos. Learn the kinematics equations - they're the key to smooth, predictable movement. Start with simple pick-and-place operations before attempting complex paths!"
  },

  // Category 3: IoT & Connectivity Kits
  {
    id: "edu-esp32-iot-starter",
    name: "ESP32 IoT Starter Kit",
    description: "Your gateway to the connected world - build IoT devices that connect to the internet",
    price: 285000,
    studentPrice: 242250,
    image: "/images/education/esp32-iot.jpg",
    inStock: true,
    stockLevel: 15,
    rating: 4.8,
    reviews: 124,
    category: "Educational Kits",
    subcategory: "IoT & Connectivity",
    targetAudience: "University students, web developers curious about hardware, and anyone wanting to build smart-home or environmental monitoring projects",
    whatYouLearn: [
      "WiFi connectivity and network protocols",
      "Cloud platforms integration (ThingSpeak, Blynk)",
      "Web server creation on microcontrollers",
      "MQTT messaging for IoT communication",
      "Bluetooth Low Energy (BLE) programming",
      "Real-time data visualization and logging",
      "Remote device control via mobile apps"
    ],
    kitContents: [
      "ESP32 DevKitC development board",
      "DHT22 high-precision temperature/humidity sensor",
      "BMP280 atmospheric pressure sensor",
      "Light-dependent resistor (LDR) with 10kΩ resistor",
      "Soil moisture sensor with analog output",
      "PIR motion sensor for occupancy detection",
      "5V relay module for controlling AC devices",
      "0.96\" OLED display (I2C interface)",
      "RGB LED strip (WS2812B, 8 LEDs)",
      "Push buttons and pull-up resistors",
      "Breadboard and jumper wires",
      "Micro-USB cable for programming",
      "Project guide with cloud integration tutorials"
    ],
    estimatedProjectTime: "6-8 weeks (2-3 hours per session)",
    difficultyLevel: "Intermediate",
    ageRange: "16+ years",
    features: [
      "Built-in WiFi and Bluetooth capabilities",
      "Compatible with Arduino IDE and MicroPython",
      "Cloud dashboard creation tutorials",
      "Mobile app integration examples",
      "Low-power design techniques included",
      "Professional IoT sensor selection"
    ],
    tags: ["iot", "wifi", "bluetooth", "esp32", "cloud", "sensors", "connectivity"],
    overview: {
      description: "This kit focuses on Internet of Things development, teaching students how to create connected devices that can send data to the cloud, receive remote commands, and integrate with web services and mobile applications.",
      learningObjectives: "Students will master WiFi programming, understand cloud service integration, learn IoT communication protocols, and develop skills to create comprehensive connected device solutions.",
      skillsAcquired: "WiFi and Bluetooth programming, cloud platform integration, web server development, IoT protocols (MQTT, HTTP), mobile app integration, and connected device architecture.",
      recommendedPrerequisites: "Basic programming skills (Arduino or Python). Understanding of basic networking concepts helpful."
    },
    specifications: {
      "Microcontroller": "ESP32 dual-core, 240MHz, WiFi + Bluetooth",
      "Sensors": "6 different environmental and motion sensors",
      "Connectivity": "WiFi 802.11 b/g/n, Bluetooth 4.2",
      "Cloud Platforms": "ThingSpeak, Blynk, custom web services",
      "Programming": "Arduino IDE, MicroPython support",
      "Power": "USB powered or external 3.3V-5V"
    },
    proTip: "Set up your WiFi credentials as constants at the start. Test sensor readings locally before adding cloud connectivity. The OLED display is perfect for debugging - use it to show connection status and sensor values!"
  },

  {
    id: "edu-lorawan-environmental",
    name: "LoRaWAN Environmental Sensing Kit",
    description: "Build long-range, low-power sensor networks for real-world applications",
    price: 675000,
    studentPrice: 573750,
    image: "/images/education/lorawan-kit.jpg",
    inStock: true,
    stockLevel: 6,
    rating: 4.5,
    reviews: 34,
    category: "Educational Kits",
    subcategory: "IoT & Connectivity",
    targetAudience: "Professionals, university researchers, and entrepreneurs developing solutions for agriculture (AgriTech) and smart city applications",
    whatYouLearn: [
      "LoRaWAN protocol and network architecture",
      "Long-range wireless communication principles",
      "Low-power design and battery optimization",
      "Environmental sensor calibration and accuracy",
      "The Things Network (TTN) gateway integration",
      "Solar charging and energy harvesting",
      "Real-world deployment considerations"
    ],
    kitContents: [
      "2x ESP32 LoRa development boards (915MHz)",
      "2x High-gain LoRa antennas (915MHz, 3dBi)",
      "High-precision BME280 sensor (temperature, humidity, pressure)",
      "UV index sensor (VEML6070)",
      "Soil moisture sensor with waterproof probe",
      "3.7V LiPo battery (2000mAh)",
      "Solar panel (6V, 2W) with charge controller",
      "Waterproof project enclosure (IP65 rated)",
      "Cable glands and mounting hardware",
      "Real-time clock module (DS3231)",
      "MicroSD card module for data logging",
      "Professional deployment guide and case studies"
    ],
    estimatedProjectTime: "8-10 weeks (3-4 hours per session)",
    difficultyLevel: "Advanced",
    ageRange: "18+ years",
    features: [
      "Long-range communication (up to 15km line-of-sight)",
      "Ultra-low power consumption (months on battery)",
      "Professional-grade environmental sensors",
      "Solar charging for autonomous operation",
      "Weatherproof enclosure for outdoor deployment",
      "Integration with The Things Network"
    ],
    tags: ["lorawan", "environmental", "sensors", "solar", "agriculture", "monitoring"],
    overview: {
      description: "This advanced kit teaches professional IoT deployment techniques, focusing on long-range, low-power sensor networks suitable for agricultural monitoring, environmental research, and smart city applications.",
      learningObjectives: "Students will master LoRaWAN technology, understand professional sensor deployment, learn energy-efficient design principles, and develop skills for real-world IoT system implementation.",
      skillsAcquired: "LoRaWAN programming and configuration, professional sensor integration, solar power system design, weatherproof deployment techniques, and large-scale IoT network planning.",
      recommendedPrerequisites: "IoT programming experience (ESP32 IoT Kit recommended). Understanding of wireless communication principles and basic electronics."
    },
    specifications: {
      "Communication": "LoRaWAN 915MHz, up to 15km range",
      "Sensors": "BME280, UV, soil moisture, high precision",
      "Power": "Solar + battery, months of autonomous operation",
      "Enclosure": "IP65 waterproof rating",
      "Data Logging": "MicroSD card + cloud transmission",
      "Network": "The Things Network compatible"
    },
    proTip: "Start indoors with short-range tests before outdoor deployment. Plan your LoRaWAN gateway coverage carefully - use online mapping tools. The BME280 needs proper ventilation while staying waterproof - study the enclosure design carefully!"
  },

  // Category 4: Specialized Learning Kits
  {
    id: "edu-electronics-repair-kit",
    name: "Electronics Technician Repair Kit",
    description: "The essential toolset for diagnostics and repair - learn professional electronics troubleshooting",
    price: 390000,
    studentPrice: 331500,
    image: "/images/education/repair-kit.jpg",
    inStock: true,
    stockLevel: 10,
    rating: 4.7,
    reviews: 78,
    category: "Educational Kits",
    subcategory: "Specialized Learning",
    targetAudience: "Vocational students, aspiring repair technicians, and anyone wanting a comprehensive set of tools for electronics maintenance and troubleshooting",
    whatYouLearn: [
      "Multimeter usage for comprehensive diagnostics",
      "Professional soldering and desoldering techniques",
      "Component testing and replacement procedures",
      "Circuit analysis and fault finding methods",
      "Safe handling of electronic devices and components",
      "Quality control and testing procedures",
      "Professional repair documentation and practices"
    ],
    kitContents: [
      "Professional digital multimeter (auto-ranging, 6000 counts)",
      "Adjustable temperature soldering station (60W, 200-480°C)",
      "Desoldering pump with replaceable tips",
      "Precision screwdriver set (26 pieces, electronics grade)",
      "Flush cutters (electronics grade, small profile)",
      "Wire strippers (automatic, 10-24 AWG)",
      "ESD-safe tweezers set (straight, curved, pointed)",
      "Component tester (capacitor, inductor, resistor, diode)",
      "Anti-static wrist strap and mat",
      "Solder (60/40, 0.8mm, rosin core)",
      "Desoldering braid (copper wick)",
      "Flux paste and cleaning brushes",
      "Magnifying glass with LED lights",
      "Professional troubleshooting guide and repair procedures manual"
    ],
    estimatedProjectTime: "Ongoing - professional skill development",
    difficultyLevel: "Intermediate",
    ageRange: "16+ years",
    features: [
      "Professional-grade tools suitable for commercial use",
      "Comprehensive troubleshooting methodology included",
      "ESD protection for sensitive component handling",
      "Suitable for phone, radio, and appliance repair",
      "Includes component testing and identification guide",
      "Professional carrying case for organization"
    ],
    tags: ["repair", "troubleshooting", "multimeter", "soldering", "professional", "tools"],
    overview: {
      description: "This comprehensive toolkit teaches professional electronics repair techniques, providing students with both the tools and knowledge needed for systematic troubleshooting and repair of electronic devices.",
      learningObjectives: "Students will master professional diagnostic techniques, understand component testing procedures, learn proper repair methodologies, and develop skills for systematic electronics troubleshooting.",
      skillsAcquired: "Advanced multimeter techniques, professional soldering skills, component identification and testing, circuit analysis, fault diagnosis, and repair documentation practices.",
      recommendedPrerequisites: "Basic electronics knowledge (Discovery Kit recommended). Understanding of circuit fundamentals and safety procedures."
    },
    specifications: {
      "Multimeter": "6000 counts, auto-ranging, AC/DC voltage, current, resistance, capacitance, frequency",
      "Soldering Station": "60W, temperature controlled 200-480°C, ESD safe",
      "Precision Tools": "26-piece screwdriver set, ESD-safe tweezers",
      "Safety": "Anti-static equipment, proper grounding",
      "Documentation": "Professional repair procedures manual",
      "Storage": "Professional carrying case with foam inserts"
    },
    proTip: "Always start diagnostics with visual inspection, then power measurements, then signal tracing. Keep detailed repair logs - they become invaluable reference material. Practice on old, broken devices before working on valuable equipment!"
  },

  // Additional 22 Educational Kits to reach 29 total
  {
    id: "edu-pcb-design-kit",
    name: "PCB Design & Fabrication Kit",
    description: "Learn professional PCB design from schematic to finished board",
    price: 185000,
    studentPrice: 157250,
    image: "/images/education/pcb-design-kit.jpg",
    inStock: true,
    stockLevel: 14,
    rating: 4.8,
    reviews: 56,
    category: "Educational Kits",
    subcategory: "Advanced Electronics",
    targetAudience: "Engineering students and professionals wanting to learn PCB design",
    whatYouLearn: [
      "Schematic capture and component libraries",
      "PCB layout rules and design constraints",
      "Signal integrity and EMI considerations",
      "Manufacturing processes and requirements",
      "Surface mount and through-hole design",
      "Testing and validation procedures"
    ],
    kitContents: [
      "Professional PCB design software license",
      "Sample PCBs for analysis",
      "SMD and THT component samples",
      "PCB fabrication guidelines",
      "Design rule manual",
      "Project templates and examples"
    ],
    estimatedProjectTime: "8-10 weeks",
    difficultyLevel: "Advanced",
    ageRange: "18+ years",
    features: [
      "Professional software included",
      "Real fabrication examples",
      "Industry-standard practices",
      "Manufacturing guidelines",
      "Signal integrity analysis",
      "Cost optimization techniques"
    ],
    tags: ["pcb", "design", "fabrication", "professional", "manufacturing", "smd"],
    overview: {
      description: "Complete PCB design course from concept to manufactured board.",
      learningObjectives: "Master professional PCB design tools and manufacturing processes.",
      skillsAcquired: "Schematic capture, PCB layout, manufacturing knowledge, signal integrity analysis.",
      recommendedPrerequisites: "Solid electronics background and circuit design experience."
    }
  },

  {
    id: "edu-power-electronics-kit",
    name: "Power Electronics Learning Kit",
    description: "Understand switching power supplies, motor drives, and power conversion",
    price: 295000,
    studentPrice: 250750,
    image: "/images/education/power-electronics.jpg",
    inStock: true,
    stockLevel: 12,
    rating: 4.7,
    reviews: 43,
    category: "Educational Kits",
    subcategory: "Power Systems",
    targetAudience: "Engineering students focusing on power systems and motor control",
    whatYouLearn: [
      "Switching power supply design",
      "DC-DC converter topologies",
      "Motor drive principles",
      "PWM control techniques",
      "Feedback and control systems",
      "Thermal management"
    ],
    kitContents: [
      "Buck converter module",
      "Boost converter module",
      "H-bridge motor driver",
      "MOSFET switches and drivers",
      "Control ICs and references",
      "Test loads and measurement tools"
    ],
    estimatedProjectTime: "6-8 weeks",
    difficultyLevel: "Advanced",
    ageRange: "18+ years",
    features: [
      "Real power conversion circuits",
      "Safety-designed modules",
      "Measurement and analysis tools",
      "Thermal imaging exercises",
      "Efficiency calculations",
      "Professional components"
    ],
    tags: ["power", "switching", "motor-control", "converters", "efficiency", "advanced"],
    overview: {
      description: "Hands-on learning of power electronics principles and applications.",
      learningObjectives: "Understand power conversion, motor control, and efficiency optimization.",
      skillsAcquired: "Power supply design, motor control, thermal management, efficiency analysis.",
      recommendedPrerequisites: "Advanced electronics knowledge and AC/DC circuit analysis."
    }
  },

  {
    id: "edu-radio-frequency-kit",
    name: "RF & Microwave Fundamentals Kit",
    description: "Explore high-frequency electronics, antennas, and wireless communication",
    price: 425000,
    studentPrice: 361250,
    image: "/images/education/rf-kit.jpg",
    inStock: true,
    stockLevel: 8,
    rating: 4.6,
    reviews: 31,
    category: "Educational Kits",
    subcategory: "RF & Wireless",
    targetAudience: "Electrical engineering students and RF professionals",
    whatYouLearn: [
      "RF circuit analysis and design",
      "Antenna theory and measurements",
      "Transmission line principles",
      "S-parameter measurements",
      "Filter design and implementation",
      "Wireless communication protocols"
    ],
    kitContents: [
      "VNA (Vector Network Analyzer) module",
      "RF signal generator",
      "Antenna measurement kit",
      "Transmission line samples",
      "RF components and connectors",
      "Smith chart and calculation tools"
    ],
    estimatedProjectTime: "10-12 weeks",
    difficultyLevel: "Advanced",
    ageRange: "20+ years",
    features: [
      "Professional RF instruments",
      "Real antenna measurements",
      "S-parameter analysis",
      "Filter design software",
      "Smith chart tutorials",
      "Wireless protocol analysis"
    ],
    tags: ["rf", "microwave", "antenna", "wireless", "s-parameters", "transmission-lines"],
    overview: {
      description: "Comprehensive RF and microwave engineering fundamentals course.",
      learningObjectives: "Master RF circuit design, antenna theory, and measurement techniques.",
      skillsAcquired: "RF design, antenna analysis, network analysis, wireless systems design.",
      recommendedPrerequisites: "Strong background in AC circuits and electromagnetic theory."
    }
  },

  {
    id: "edu-digital-signal-processing",
    name: "Digital Signal Processing Kit",
    description: "Learn DSP algorithms, filters, and real-time audio processing",
    price: 385000,
    studentPrice: 327250,
    image: "/images/education/dsp-kit.jpg",
    inStock: true,
    stockLevel: 10,
    rating: 4.8,
    reviews: 47,
    category: "Educational Kits",
    subcategory: "Signal Processing",
    targetAudience: "Computer engineering and signal processing students",
    whatYouLearn: [
      "Digital filter design and implementation",
      "FFT and frequency domain analysis",
      "Real-time audio processing",
      "Adaptive filtering algorithms",
      "MATLAB/Python DSP programming",
      "Hardware acceleration techniques"
    ],
    kitContents: [
      "DSP development board",
      "Audio codec and I/O",
      "MATLAB/Simulink interface",
      "Filter design software",
      "Algorithm libraries",
      "Real-time debugging tools"
    ],
    estimatedProjectTime: "8-10 weeks",
    difficultyLevel: "Advanced",
    ageRange: "19+ years",
    features: [
      "Real-time DSP processor",
      "Audio input/output",
      "MATLAB integration",
      "Algorithm libraries",
      "Performance profiling",
      "Hardware optimization"
    ],
    tags: ["dsp", "filters", "audio", "fft", "matlab", "real-time"],
    overview: {
      description: "Hands-on digital signal processing with real-time implementation.",
      learningObjectives: "Master DSP algorithms and real-time implementation techniques.",
      skillsAcquired: "Filter design, FFT analysis, real-time programming, audio processing.",
      recommendedPrerequisites: "Strong programming skills and understanding of signal theory."
    }
  },

  {
    id: "edu-machine-learning-edge",
    name: "Edge AI & Machine Learning Kit",
    description: "Deploy AI models on microcontrollers for real-world applications",
    price: 465000,
    studentPrice: 395250,
    image: "/images/education/edge-ai-kit.jpg",
    inStock: true,
    stockLevel: 7,
    rating: 4.9,
    reviews: 38,
    category: "Educational Kits",
    subcategory: "AI & Machine Learning",
    targetAudience: "Computer science students and AI developers",
    whatYouLearn: [
      "TensorFlow Lite model optimization",
      "Edge inference and quantization",
      "Computer vision on microcontrollers",
      "Voice recognition and NLP",
      "Model deployment strategies",
      "Performance optimization techniques"
    ],
    kitContents: [
      "ESP32-S3 with AI acceleration",
      "Camera module for vision tasks",
      "Microphone array for audio",
      "TensorFlow Lite libraries",
      "Pre-trained model examples",
      "Development environment setup"
    ],
    estimatedProjectTime: "6-8 weeks",
    difficultyLevel: "Advanced",
    ageRange: "19+ years",
    features: [
      "AI-optimized hardware",
      "Pre-trained models included",
      "Computer vision examples",
      "Voice processing demos",
      "Model optimization tools",
      "Performance benchmarking"
    ],
    tags: ["ai", "machine-learning", "tensorflow", "edge-computing", "vision", "voice"],
    overview: {
      description: "Learn to deploy AI models on resource-constrained edge devices.",
      learningObjectives: "Master edge AI deployment and optimization techniques.",
      skillsAcquired: "Model optimization, edge deployment, computer vision, voice processing.",
      recommendedPrerequisites: "Programming experience and basic machine learning knowledge."
    }
  },

  {
    id: "edu-automotive-electronics",
    name: "Automotive Electronics Kit",
    description: "Learn CAN bus, automotive sensors, and vehicle communication systems",
    price: 385000,
    studentPrice: 327250,
    image: "/images/education/automotive-kit.jpg",
    inStock: true,
    stockLevel: 9,
    rating: 4.7,
    reviews: 42,
    category: "Educational Kits",
    subcategory: "Automotive Systems",
    targetAudience: "Automotive engineering students and technicians",
    whatYouLearn: [
      "CAN bus protocol and implementation",
      "Automotive sensor interfacing",
      "OBD-II diagnostics",
      "ECU simulation and testing",
      "Vehicle network analysis",
      "Safety and reliability standards"
    ],
    kitContents: [
      "CAN bus interface modules",
      "Automotive sensors (pressure, temperature, speed)",
      "OBD-II connector and simulator",
      "ECU simulation board",
      "Network analysis software",
      "Automotive-grade connectors"
    ],
    estimatedProjectTime: "6-8 weeks",
    difficultyLevel: "Intermediate",
    ageRange: "18+ years",
    features: [
      "Real automotive protocols",
      "Industry-standard connectors",
      "OBD-II compatibility",
      "Network analysis tools",
      "Safety compliance focus",
      "Professional diagnostics"
    ],
    tags: ["automotive", "can-bus", "obd2", "sensors", "diagnostics", "vehicle"],
    overview: {
      description: "Comprehensive automotive electronics and communication systems course.",
      learningObjectives: "Understand automotive networks, sensors, and diagnostic systems.",
      skillsAcquired: "CAN bus programming, automotive diagnostics, sensor integration.",
      recommendedPrerequisites: "Basic electronics knowledge and programming skills."
    }
  },

  {
    id: "edu-renewable-energy-kit",
    name: "Solar & Wind Energy Systems Kit",
    description: "Design and build renewable energy harvesting and storage systems",
    price: 425000,
    studentPrice: 361250,
    image: "/images/education/renewable-energy.jpg",
    inStock: true,
    stockLevel: 11,
    rating: 4.6,
    reviews: 35,
    category: "Educational Kits",
    subcategory: "Energy Systems",
    targetAudience: "Environmental engineering students and renewable energy enthusiasts",
    whatYouLearn: [
      "Solar panel characteristics and modeling",
      "Maximum Power Point Tracking (MPPT)",
      "Battery management systems",
      "Wind turbine design principles",
      "Grid-tie and off-grid systems",
      "Energy storage optimization"
    ],
    kitContents: [
      "Solar panels (various sizes)",
      "MPPT charge controller",
      "Battery management system",
      "Small wind turbine kit",
      "Load testing equipment",
      "Monitoring and data logging system"
    ],
    estimatedProjectTime: "8-10 weeks",
    difficultyLevel: "Intermediate",
    ageRange: "16+ years",
    features: [
      "Real solar and wind components",
      "MPPT algorithms included",
      "Battery management focus",
      "Performance monitoring",
      "Efficiency calculations",
      "Grid integration concepts"
    ],
    tags: ["solar", "wind", "renewable", "mppt", "battery", "energy-storage"],
    overview: {
      description: "Hands-on renewable energy system design and optimization.",
      learningObjectives: "Understand renewable energy harvesting and storage systems.",
      skillsAcquired: "Solar system design, MPPT control, battery management, energy optimization.",
      recommendedPrerequisites: "Basic electronics and power systems knowledge."
    }
  },

  {
    id: "edu-industrial-automation",
    name: "Industrial Automation & PLC Kit",
    description: "Learn programmable logic controllers and industrial control systems",
    price: 485000,
    studentPrice: 412250,
    image: "/images/education/industrial-automation.jpg",
    inStock: true,
    stockLevel: 6,
    rating: 4.8,
    reviews: 29,
    category: "Educational Kits",
    subcategory: "Industrial Systems",
    targetAudience: "Industrial engineering students and automation technicians",
    whatYouLearn: [
      "PLC programming languages (Ladder Logic, ST)",
      "Industrial communication protocols",
      "Process control and monitoring",
      "Safety systems and interlocks",
      "HMI design and implementation",
      "SCADA system basics"
    ],
    kitContents: [
      "Compact PLC with I/O modules",
      "Industrial sensors and actuators",
      "HMI touch panel",
      "Communication modules",
      "Process simulation hardware",
      "Programming software license"
    ],
    estimatedProjectTime: "8-10 weeks",
    difficultyLevel: "Intermediate",
    ageRange: "18+ years",
    features: [
      "Real industrial PLC",
      "Multiple programming languages",
      "Industrial communication",
      "Safety system design",
      "HMI development",
      "Process simulation"
    ],
    tags: ["plc", "automation", "industrial", "ladder-logic", "hmi", "scada"],
    overview: {
      description: "Complete industrial automation programming and system design course.",
      learningObjectives: "Master PLC programming and industrial automation concepts.",
      skillsAcquired: "PLC programming, industrial networking, HMI design, process control.",
      recommendedPrerequisites: "Basic programming knowledge and control system understanding."
    }
  },

  {
    id: "edu-medical-electronics",
    name: "Biomedical Electronics Kit",
    description: "Design medical devices and learn biomedical signal processing",
    price: 395000,
    studentPrice: 335750,
    image: "/images/education/medical-electronics.jpg",
    inStock: true,
    stockLevel: 8,
    rating: 4.7,
    reviews: 33,
    category: "Educational Kits",
    subcategory: "Medical Devices",
    targetAudience: "Biomedical engineering students and medical device developers",
    whatYouLearn: [
      "ECG and EMG signal acquisition",
      "Biomedical signal filtering",
      "Medical device safety standards",
      "Pulse oximetry principles",
      "Temperature monitoring systems",
      "Regulatory compliance basics"
    ],
    kitContents: [
      "Biomedical amplifier circuits",
      "ECG electrodes and leads",
      "Pulse oximetry sensor",
      "Temperature sensors",
      "Signal conditioning modules",
      "Safety isolation circuits"
    ],
    estimatedProjectTime: "8-10 weeks",
    difficultyLevel: "Advanced",
    ageRange: "19+ years",
    features: [
      "Medical-grade components",
      "Safety isolation design",
      "Real biomedical signals",
      "Regulatory guidelines",
      "Signal processing focus",
      "Device safety emphasis"
    ],
    tags: ["biomedical", "ecg", "medical-devices", "safety", "signal-processing", "healthcare"],
    overview: {
      description: "Learn biomedical electronics design with safety and regulatory focus.",
      learningObjectives: "Understand medical device design principles and safety requirements.",
      skillsAcquired: "Biomedical signal processing, medical device safety, regulatory compliance.",
      recommendedPrerequisites: "Electronics background and basic physiology knowledge helpful."
    }
  },

  {
    id: "edu-drone-flight-controller",
    name: "Drone Flight Controller Kit",
    description: "Build and program autonomous drones with custom flight controllers",
    price: 465000,
    studentPrice: 395250,
    image: "/images/education/drone-kit.jpg",
    inStock: true,
    stockLevel: 9,
    rating: 4.8,
    reviews: 51,
    category: "Educational Kits",
    subcategory: "Aerospace Systems",
    targetAudience: "Aerospace engineering students and drone enthusiasts",
    whatYouLearn: [
      "Flight dynamics and control theory",
      "IMU sensor fusion algorithms",
      "PID control implementation",
      "GPS navigation and waypoints",
      "Autonomous flight programming",
      "Safety and failsafe systems"
    ],
    kitContents: [
      "Quadcopter frame and motors",
      "Custom flight controller board",
      "IMU with gyroscope and accelerometer",
      "GPS module for navigation",
      "Barometric pressure sensor",
      "RC transmitter and receiver"
    ],
    estimatedProjectTime: "10-12 weeks",
    difficultyLevel: "Advanced",
    ageRange: "18+ years",
    features: [
      "Complete quadcopter platform",
      "Custom flight controller",
      "Autonomous navigation",
      "Safety systems included",
      "Real flight testing",
      "Professional software tools"
    ],
    tags: ["drone", "flight-controller", "autonomous", "gps", "pid-control", "aerospace"],
    overview: {
      description: "Design and build autonomous drones with custom flight control systems.",
      learningObjectives: "Master flight control theory and autonomous navigation systems.",
      skillsAcquired: "Flight control programming, sensor fusion, PID tuning, autonomous navigation.",
      recommendedPrerequisites: "Programming skills and basic control theory knowledge."
    }
  },

  {
    id: "edu-quantum-electronics",
    name: "Quantum Electronics Fundamentals Kit",
    description: "Explore quantum effects in electronics and photonic devices",
    price: 685000,
    studentPrice: 582250,
    image: "/images/education/quantum-kit.jpg",
    inStock: true,
    stockLevel: 4,
    rating: 4.9,
    reviews: 18,
    category: "Educational Kits",
    subcategory: "Advanced Physics",
    targetAudience: "Advanced physics and engineering students",
    whatYouLearn: [
      "Quantum tunneling effects",
      "Photonic device principles",
      "Quantum measurement techniques",
      "Single photon detection",
      "Quantum communication basics",
      "Superconducting electronics"
    ],
    kitContents: [
      "Quantum demonstration apparatus",
      "Photonic components",
      "Single photon detectors",
      "Quantum measurement setup",
      "Cryogenic temperature sensors",
      "Specialized measurement software"
    ],
    estimatedProjectTime: "12-15 weeks",
    difficultyLevel: "Advanced",
    ageRange: "20+ years",
    features: [
      "Real quantum effects",
      "Photonic demonstrations",
      "Single photon detection",
      "Precision measurements",
      "Research-grade equipment",
      "Cutting-edge technology"
    ],
    tags: ["quantum", "photonics", "advanced-physics", "research", "measurement", "cutting-edge"],
    overview: {
      description: "Explore quantum effects in electronic devices and photonic systems.",
      learningObjectives: "Understand quantum electronics and photonic device principles.",
      skillsAcquired: "Quantum measurement, photonic systems, precision instrumentation.",
      recommendedPrerequisites: "Advanced physics and electronics background required."
    }
  },

  {
    id: "edu-satellite-communication",
    name: "Satellite Communication Kit",
    description: "Design satellite communication links and ground station equipment",
    price: 585000,
    studentPrice: 497250,
    image: "/images/education/satellite-kit.jpg",
    inStock: true,
    stockLevel: 5,
    rating: 4.7,
    reviews: 24,
    category: "Educational Kits",
    subcategory: "Space Systems",
    targetAudience: "Aerospace and telecommunications engineering students",
    whatYouLearn: [
      "Satellite communication principles",
      "Link budget calculations",
      "Antenna tracking systems",
      "Digital modulation techniques",
      "Ground station design",
      "Space environment effects"
    ],
    kitContents: [
      "Software Defined Radio (SDR)",
      "Directional antenna system",
      "Antenna rotator controller",
      "RF amplifiers and filters",
      "Satellite tracking software",
      "Communication protocol modules"
    ],
    estimatedProjectTime: "10-12 weeks",
    difficultyLevel: "Advanced",
    ageRange: "19+ years",
    features: [
      "Real satellite communication",
      "Antenna tracking system",
      "Software defined radio",
      "Professional protocols",
      "Link budget analysis",
      "Space-qualified components"
    ],
    tags: ["satellite", "communication", "sdr", "antenna", "space", "telecommunications"],
    overview: {
      description: "Learn satellite communication system design and implementation.",
      learningObjectives: "Master satellite communication principles and ground station design.",
      skillsAcquired: "Satellite communication, antenna systems, SDR programming, link analysis.",
      recommendedPrerequisites: "RF engineering knowledge and communication system understanding."
    }
  },

  {
    id: "edu-neural-networks-hardware",
    name: "Neural Network Hardware Kit",
    description: "Build dedicated neural network processors and accelerators",
    price: 525000,
    studentPrice: 446250,
    image: "/images/education/neural-hardware.jpg",
    inStock: true,
    stockLevel: 6,
    rating: 4.8,
    reviews: 27,
    category: "Educational Kits",
    subcategory: "AI Hardware",
    targetAudience: "Computer engineering students and AI hardware developers",
    whatYouLearn: [
      "Neural network architectures",
      "Hardware acceleration techniques",
      "FPGA-based AI processors",
      "Parallel processing concepts",
      "Memory optimization strategies",
      "AI chip design principles"
    ],
    kitContents: [
      "FPGA development board",
      "Neural network IP cores",
      "High-speed memory modules",
      "AI acceleration libraries",
      "Hardware design tools",
      "Performance profiling software"
    ],
    estimatedProjectTime: "10-12 weeks",
    difficultyLevel: "Advanced",
    ageRange: "20+ years",
    features: [
      "FPGA-based AI acceleration",
      "Neural network IP cores",
      "High-performance computing",
      "Memory optimization focus",
      "Professional design tools",
      "Performance benchmarking"
    ],
    tags: ["neural-networks", "fpga", "ai-hardware", "acceleration", "parallel-processing", "performance"],
    overview: {
      description: "Design and implement hardware-accelerated neural network processors.",
      learningObjectives: "Understand AI hardware acceleration and parallel processing techniques.",
      skillsAcquired: "FPGA design, neural network implementation, hardware optimization.",
      recommendedPrerequisites: "Digital design knowledge and neural network understanding."
    }
  },

  {
    id: "edu-cybersecurity-hardware",
    name: "Hardware Security & Cryptography Kit",
    description: "Learn hardware-based security and cryptographic implementations",
    price: 445000,
    studentPrice: 378250,
    image: "/images/education/security-kit.jpg",
    inStock: true,
    stockLevel: 7,
    rating: 4.6,
    reviews: 32,
    category: "Educational Kits",
    subcategory: "Security Systems",
    targetAudience: "Cybersecurity and computer engineering students",
    whatYouLearn: [
      "Hardware security modules (HSM)",
      "Cryptographic algorithm implementation",
      "Side-channel attack mitigation",
      "Secure boot and attestation",
      "Random number generation",
      "Hardware trojans and detection"
    ],
    kitContents: [
      "Secure microcontroller",
      "Cryptographic coprocessor",
      "Hardware security modules",
      "Side-channel analysis tools",
      "Secure communication modules",
      "Cryptographic libraries"
    ],
    estimatedProjectTime: "8-10 weeks",
    difficultyLevel: "Advanced",
    ageRange: "19+ years",
    features: [
      "Hardware security focus",
      "Cryptographic implementations",
      "Side-channel analysis",
      "Secure boot mechanisms",
      "Professional security tools",
      "Threat modeling exercises"
    ],
    tags: ["security", "cryptography", "hardware-security", "side-channel", "secure-boot", "hsm"],
    overview: {
      description: "Learn hardware-based security implementations and cryptographic systems.",
      learningObjectives: "Understand hardware security principles and cryptographic implementations.",
      skillsAcquired: "Hardware security design, cryptographic programming, threat analysis.",
      recommendedPrerequisites: "Computer architecture knowledge and basic cryptography understanding."
    }
  },

  {
    id: "edu-optical-communication",
    name: "Fiber Optic Communication Kit",
    description: "Design optical communication systems and fiber optic networks",
    price: 485000,
    studentPrice: 412250,
    image: "/images/education/fiber-optic.jpg",
    inStock: true,
    stockLevel: 8,
    rating: 4.7,
    reviews: 28,
    category: "Educational Kits",
    subcategory: "Optical Systems",
    targetAudience: "Telecommunications and optical engineering students",
    whatYouLearn: [
      "Fiber optic transmission principles",
      "Optical transmitters and receivers",
      "Wavelength division multiplexing",
      "Optical amplification techniques",
      "Network topology design",
      "Loss and dispersion analysis"
    ],
    kitContents: [
      "Fiber optic cables and connectors",
      "Optical transmitters and receivers",
      "Optical power meter",
      "OTDR (Optical Time Domain Reflectometer)",
      "Splicing and termination tools",
      "Network analysis software"
    ],
    estimatedProjectTime: "8-10 weeks",
    difficultyLevel: "Intermediate",
    ageRange: "18+ years",
    features: [
      "Real fiber optic components",
      "Professional test equipment",
      "Network design software",
      "Splicing practice tools",
      "Loss measurement focus",
      "Industry-standard procedures"
    ],
    tags: ["fiber-optic", "optical", "telecommunications", "networking", "otdr", "wavelength"],
    overview: {
      description: "Learn fiber optic communication system design and testing.",
      learningObjectives: "Understand optical communication principles and network design.",
      skillsAcquired: "Fiber optic installation, optical measurements, network design.",
      recommendedPrerequisites: "Basic telecommunications and wave physics knowledge."
    }
  },

  {
    id: "edu-green-electronics",
    name: "Sustainable Electronics Design Kit",
    description: "Learn eco-friendly design practices and lifecycle assessment",
    price: 285000,
    studentPrice: 242250,
    image: "/images/education/green-electronics.jpg",
    inStock: true,
    stockLevel: 12,
    rating: 4.5,
    reviews: 36,
    category: "Educational Kits",
    subcategory: "Environmental Design",
    targetAudience: "Environmental engineering and sustainable design students",
    whatYouLearn: [
      "Lifecycle assessment (LCA) principles",
      "Material selection for sustainability",
      "Energy-efficient design techniques",
      "Recycling and end-of-life planning",
      "Carbon footprint analysis",
      "Green manufacturing processes"
    ],
    kitContents: [
      "Sustainable material samples",
      "Energy measurement tools",
      "LCA software tools",
      "Recycling process demos",
      "Efficiency testing equipment",
      "Environmental impact calculator"
    ],
    estimatedProjectTime: "6-8 weeks",
    difficultyLevel: "Intermediate",
    ageRange: "16+ years",
    features: [
      "Sustainability focus",
      "LCA analysis tools",
      "Material comparison",
      "Energy efficiency emphasis",
      "Recycling process education",
      "Environmental impact assessment"
    ],
    tags: ["sustainability", "green-design", "lca", "recycling", "efficiency", "environmental"],
    overview: {
      description: "Learn sustainable electronics design and environmental impact assessment.",
      learningObjectives: "Understand sustainable design principles and environmental assessment.",
      skillsAcquired: "LCA analysis, sustainable material selection, efficiency design.",
      recommendedPrerequisites: "Basic electronics knowledge and environmental awareness."
    }
  },

  {
    id: "edu-wearable-electronics",
    name: "Wearable Technology Design Kit",
    description: "Create smart textiles and body-worn electronic devices",
    price: 325000,
    studentPrice: 276250,
    image: "/images/education/wearable-kit.jpg",
    inStock: true,
    stockLevel: 10,
    rating: 4.7,
    reviews: 44,
    category: "Educational Kits",
    subcategory: "Wearable Technology",
    targetAudience: "Fashion technology and biomedical engineering students",
    whatYouLearn: [
      "Conductive textile integration",
      "Flexible circuit design",
      "Body area network protocols",
      "Power management for wearables",
      "User interface design",
      "Comfort and ergonomics"
    ],
    kitContents: [
      "Conductive threads and fabrics",
      "Flexible PCB materials",
      "Wearable microcontrollers",
      "Physiological sensors",
      "Wireless charging modules",
      "Textile integration tools"
    ],
    estimatedProjectTime: "6-8 weeks",
    difficultyLevel: "Intermediate",
    ageRange: "16+ years",
    features: [
      "Textile integration focus",
      "Flexible electronics",
      "Physiological monitoring",
      "Wireless power transfer",
      "Ergonomic design emphasis",
      "Fashion technology fusion"
    ],
    tags: ["wearable", "textiles", "flexible", "physiological", "wireless-charging", "ergonomics"],
    overview: {
      description: "Design wearable electronics with textile integration and comfort focus.",
      learningObjectives: "Understand wearable technology design and textile integration.",
      skillsAcquired: "Flexible circuit design, textile electronics, physiological monitoring.",
      recommendedPrerequisites: "Basic electronics and interest in fashion technology."
    }
  },

  {
    id: "edu-space-electronics",
    name: "Space-Grade Electronics Kit",
    description: "Design electronics for extreme space environments",
    price: 685000,
    studentPrice: 582250,
    image: "/images/education/space-electronics.jpg",
    inStock: true,
    stockLevel: 4,
    rating: 4.9,
    reviews: 16,
    category: "Educational Kits",
    subcategory: "Space Systems",
    targetAudience: "Aerospace engineering students and space technology developers",
    whatYouLearn: [
      "Radiation hardening techniques",
      "Thermal management in space",
      "Space-qualified components",
      "Reliability and redundancy",
      "Vacuum and outgassing effects",
      "Spacecraft power systems"
    ],
    kitContents: [
      "Radiation-hardened components",
      "Thermal testing equipment",
      "Space-grade connectors",
      "Reliability testing tools",
      "Environmental simulation chamber",
      "Qualification test procedures"
    ],
    estimatedProjectTime: "12-15 weeks",
    difficultyLevel: "Advanced",
    ageRange: "20+ years",
    features: [
      "Space-qualified components",
      "Radiation testing equipment",
      "Thermal management focus",
      "Reliability engineering",
      "Environmental simulation",
      "Professional standards"
    ],
    tags: ["space", "radiation-hardened", "thermal", "reliability", "vacuum", "spacecraft"],
    overview: {
      description: "Learn space-grade electronics design for extreme environments.",
      learningObjectives: "Understand space electronics requirements and qualification processes.",
      skillsAcquired: "Radiation hardening, thermal design, reliability engineering.",
      recommendedPrerequisites: "Advanced electronics knowledge and space systems understanding."
    }
  },

  {
    id: "edu-brain-computer-interface",
    name: "Brain-Computer Interface Kit",
    description: "Explore neural signal processing and brain-controlled devices",
    price: 565000,
    studentPrice: 480250,
    image: "/images/education/bci-kit.jpg",
    inStock: true,
    stockLevel: 5,
    rating: 4.8,
    reviews: 21,
    category: "Educational Kits",
    subcategory: "Neurotechnology",
    targetAudience: "Neuroscience and biomedical engineering students",
    whatYouLearn: [
      "EEG signal acquisition and processing",
      "Neural signal filtering techniques",
      "Machine learning for BCI",
      "Real-time signal processing",
      "Neurofeedback systems",
      "Brain-controlled interfaces"
    ],
    kitContents: [
      "EEG headset with electrodes",
      "Neural signal amplifiers",
      "Real-time processing unit",
      "Machine learning software",
      "BCI control examples",
      "Signal analysis tools"
    ],
    estimatedProjectTime: "10-12 weeks",
    difficultyLevel: "Advanced",
    ageRange: "19+ years",
    features: [
      "Real EEG signal acquisition",
      "Neural signal processing",
      "Machine learning integration",
      "Real-time control systems",
      "Neurofeedback applications",
      "Research-grade equipment"
    ],
    tags: ["bci", "eeg", "neural-signals", "machine-learning", "neurofeedback", "brain-control"],
    overview: {
      description: "Learn brain-computer interface design and neural signal processing.",
      learningObjectives: "Understand BCI principles and neural signal processing techniques.",
      skillsAcquired: "EEG processing, machine learning for BCI, real-time signal analysis.",
      recommendedPrerequisites: "Signal processing knowledge and basic neuroscience understanding."
    }
  },

  {
    id: "edu-haptic-feedback",
    name: "Haptic Feedback Systems Kit",
    description: "Design tactile feedback devices and force-sensing systems",
    price: 385000,
    studentPrice: 327250,
    image: "/images/education/haptic-kit.jpg",
    inStock: true,
    stockLevel: 8,
    rating: 4.6,
    reviews: 31,
    category: "Educational Kits",
    subcategory: "Human Interface",
    targetAudience: "Mechanical and electrical engineering students",
    whatYouLearn: [
      "Haptic feedback principles",
      "Force and tactile sensors",
      "Actuator control systems",
      "Psychophysics of touch",
      "Virtual reality integration",
      "Medical rehabilitation applications"
    ],
    kitContents: [
      "Force feedback motors",
      "Tactile actuator arrays",
      "Force and pressure sensors",
      "Haptic controller board",
      "VR integration software",
      "Psychophysics testing tools"
    ],
    estimatedProjectTime: "8-10 weeks",
    difficultyLevel: "Advanced",
    ageRange: "18+ years",
    features: [
      "Multi-modal haptic feedback",
      "Force and tactile sensing",
      "VR/AR integration",
      "Psychophysics experiments",
      "Medical applications focus",
      "Professional actuators"
    ],
    tags: ["haptic", "force-feedback", "tactile", "vr", "sensors", "rehabilitation"],
    overview: {
      description: "Learn haptic feedback system design and human-computer interaction.",
      learningObjectives: "Understand haptic principles and tactile interface design.",
      skillsAcquired: "Haptic system design, force control, tactile sensing, VR integration.",
      recommendedPrerequisites: "Control systems knowledge and understanding of human factors."
    }
  },

  {
    id: "edu-high-voltage-safety",
    name: "High Voltage Safety & Testing Kit",
    description: "Learn high-voltage safety protocols and testing procedures",
    price: 485000,
    studentPrice: 412250,
    image: "/images/education/high-voltage-safety.jpg",
    inStock: true,
    stockLevel: 6,
    rating: 4.8,
    reviews: 25,
    category: "Educational Kits",
    subcategory: "Safety & Testing",
    targetAudience: "Electrical engineering students and high-voltage technicians",
    whatYouLearn: [
      "High-voltage safety protocols",
      "Arc flash protection requirements",
      "Insulation testing procedures",
      "Personal protective equipment",
      "Lockout/tagout procedures",
      "Emergency response protocols"
    ],
    kitContents: [
      "Safety training materials",
      "Insulation testing equipment",
      "High-voltage safety gear",
      "Arc flash calculator",
      "Testing procedures manual",
      "Emergency response guide"
    ],
    estimatedProjectTime: "4-6 weeks",
    difficultyLevel: "Advanced",
    ageRange: "18+ years",
    features: [
      "Professional safety protocols",
      "Real testing procedures",
      "Safety certification prep",
      "Emergency response training",
      "Industry-standard practices",
      "Comprehensive safety focus"
    ],
    tags: ["high-voltage", "safety", "testing", "arc-flash", "certification", "emergency"],
    overview: {
      description: "Learn critical high-voltage safety protocols and testing procedures.",
      learningObjectives: "Understand high-voltage safety requirements and emergency procedures.",
      skillsAcquired: "Safety protocols, testing procedures, emergency response, certification preparation.",
      recommendedPrerequisites: "Electrical engineering background and safety awareness."
    }
  },

  {
    id: "edu-embedded-linux-kit",
    name: "Embedded Linux Development Kit",
    description: "Learn embedded Linux development on ARM processors",
    price: 425000,
    studentPrice: 361250,
    image: "/images/education/embedded-linux.jpg",
    inStock: true,
    stockLevel: 9,
    rating: 4.7,
    reviews: 39,
    category: "Educational Kits",
    subcategory: "Embedded Systems",
    targetAudience: "Software and computer engineering students",
    whatYouLearn: [
      "Linux kernel configuration",
      "Device driver development",
      "Cross-compilation toolchains",
      "Bootloader customization",
      "Real-time system programming",
      "Hardware abstraction layers"
    ],
    kitContents: [
      "ARM-based single board computer",
      "Development toolchain setup",
      "Linux kernel source code",
      "Driver development examples",
      "Real-time extensions",
      "Hardware interface modules"
    ],
    estimatedProjectTime: "8-10 weeks",
    difficultyLevel: "Advanced",
    ageRange: "19+ years",
    features: [
      "Real embedded Linux system",
      "Kernel development environment",
      "Driver development focus",
      "Cross-compilation setup",
      "Real-time capabilities",
      "Professional development tools"
    ],
    tags: ["embedded-linux", "kernel", "drivers", "arm", "real-time", "cross-compilation"],
    overview: {
      description: "Learn embedded Linux development and kernel programming.",
      learningObjectives: "Master embedded Linux development and driver programming.",
      skillsAcquired: "Linux kernel development, device drivers, real-time programming.",
      recommendedPrerequisites: "Strong programming skills and Linux system administration knowledge."
    }
  }
]

export const kitCategories = [
  "Foundational Electronics",
  "Arduino & Programming", 
  "Robotics & Motion",
  "IoT & Connectivity",
  "Specialized Learning"
]

export const difficultyLevels = ["Beginner", "Intermediate", "Advanced"]
