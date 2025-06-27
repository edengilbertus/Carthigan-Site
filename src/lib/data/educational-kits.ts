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
