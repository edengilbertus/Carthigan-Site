export interface EducationalKit {
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
  compatibility: string[]
  projects: string[]
  leadTime: string
  tags: string[]
  targetAudience: string
  whatYouLearn: string[]
  kitContents: string[]
  estimatedProjectTime: string
  difficultyLevel: string
  ageRange: string
  features: string[]
  specifications?: Record<string, string>
}

// Kit categories for filtering
export const kitCategories = [
  "Arduino Kits",
  "Raspberry Pi Kits", 
  "Electronics Fundamentals",
  "IoT & Connectivity",
  "Robotics & Motion",
  "Specialized Learning"
]

// Difficulty levels for filtering
export const difficultyLevels = [
  "Beginner",
  "Intermediate", 
  "Advanced"
]

export const allEducationalKits: EducationalKit[] = [
  {
    id: 'electronics-discovery-kit',
    name: 'Electronics Discovery Kit',
    description: 'Your first step into circuits. Learn fundamental electronics principles without needing a computer.',
    category: 'Educational Kits',
    subcategory: 'Electronics Fundamentals',
    price: 102000,
    studentPrice: 90000,
    image: '/images/products/discovery-kit.jpg',
    inStock: true,
    stockLevel: 25,
    rating: 4.8,
    reviews: 156,
    compatibility: ['9V Battery', 'Breadboard'],
    projects: ['Basic LED Circuits', 'Transistor Switches', 'Light Sensors'],
    leadTime: 'In Stock',
    tags: ['electronics', 'fundamentals', 'beginner', 'circuits'],
    targetAudience: 'Absolute beginners, students aged 10+',
    whatYouLearn: [
      'Basic electronics principles',
      'Circuit building',
      'Voltage, current, and resistance',
      'LED control',
      'Sensor basics'
    ],
    kitContents: [
      'Solderless Breadboard',
      '9V Battery Snap',
      'Assorted LEDs (Red, Green, Blue)',
      'Assorted Resistors (220Ω, 1kΩ, 10kΩ)',
      'Assorted Capacitors',
      'Push Buttons',
      'BC547 NPN Transistors',
      '1N4007 Diodes',
      'Photoresistor (LDR)',
      'Jumper Wire Pack',
      'Experiment Guidebook'
    ],
    estimatedProjectTime: '2-4 weeks',
    difficultyLevel: 'Beginner',
    ageRange: '10+ years',
    features: [
      'No computer required',
      'Hands-on learning',
      'Step-by-step guide',
      'Safe components',
      'Reusable parts'
    ]
  },
  {
    id: 'arduino-starter-classic',
    name: 'Arduino Starter Kit - The Classic',
    description: 'The world\'s most popular gateway to physical computing. Learn electronics and programming together.',
    category: 'Educational Kits',
    subcategory: 'Arduino Kits',
    price: 267750,
    studentPrice: 240000,
    image: '/images/products/arduino-starter.jpg',
    inStock: true,
    stockLevel: 30,
    rating: 4.9,
    reviews: 342,
    compatibility: ['Arduino IDE', 'Windows', 'Mac', 'Linux'],
    projects: ['Blinking LED', 'Interactive Dashboard', 'Motor Control', 'Sensor Networks'],
    leadTime: 'In Stock',
    tags: ['arduino', 'programming', 'microcontroller', 'beginner'],
    targetAudience: 'Students and makers aged 14+',
    whatYouLearn: [
      'Arduino programming (C/C++)',
      'Electronic circuit design',
      'Sensor integration',
      'Motor control',
      'LCD displays',
      'Interactive devices'
    ],
    kitContents: [
      'Arduino UNO R3 (compatible)',
      'USB Cable',
      '830-Point Breadboard',
      'Jumper Wires Pack',
      '16x2 LCD Display',
      'DC Motor & Fan',
      'SG90 Servo Motor',
      '5V Relay Module',
      'DHT11 Sensor',
      'Ultrasonic Sensor',
      'L298N Motor Driver',
      'Assortment of LEDs, Resistors, Capacitors, Buttons'
    ],
    estimatedProjectTime: '6-8 weeks',
    difficultyLevel: 'Beginner',
    ageRange: '14+ years',
    features: [
      'Official Arduino compatible',
      'Comprehensive project book',
      'USB connectivity',
      'No soldering required',
      'Expandable platform'
    ]
  },
  {
    id: 'digital-logic-fundamentals',
    name: 'Digital Logic Fundamentals Kit',
    description: 'Explore the world of digital electronics with logic gates, flip-flops, and counters.',
    category: 'Educational Kits',
    subcategory: 'Electronics Fundamentals',
    price: 175000,
    studentPrice: 155000,
    image: '/images/products/digital-logic.jpg',
    inStock: true,
    stockLevel: 20,
    rating: 4.8,
    reviews: 78,
    compatibility: ['Logic Probes', 'Oscilloscopes'],
    projects: ['Logic Gates', 'Flip-Flops', 'Counters', 'Digital Clocks'],
    leadTime: 'In Stock',
    tags: ['digital', 'logic', 'gates', 'computer-science'],
    targetAudience: 'Students learning computer science fundamentals',
    whatYouLearn: [
      'Boolean algebra',
      'Logic gate operations',
      'Combinational logic',
      'Sequential logic',
      'Digital system design'
    ],
    kitContents: [
      'Breadboards',
      'Logic Gate ICs (AND, OR, NOT, NAND, XOR)',
      '555 Timer IC',
      'Decade Counter IC',
      'LEDs',
      'Switches',
      '7-Segment Display',
      'Wires',
      'Experiment Guide'
    ],
    estimatedProjectTime: '4-6 weeks',
    difficultyLevel: 'Intermediate',
    ageRange: '16+ years',
    features: [
      'Fundamental computer logic',
      'No microcontroller needed',
      'Visual LED feedback',
      'Professional components',
      'Theory-to-practice approach'
    ]
  },
  {
    id: 'arduino-engineering-kit-r2',
    name: 'Arduino Engineering Kit R2',
    description: 'Build three advanced projects to explore mechatronics, control theory, and image processing.',
    category: 'Educational Kits',
    subcategory: 'Arduino Kits',
    price: 950000,
    studentPrice: 850000,
    image: '/images/products/arduino-eng.jpg',
    inStock: true,
    stockLevel: 8,
    rating: 4.7,
    reviews: 56,
    compatibility: ['MATLAB', 'Simulink', 'Arduino IDE'],
    projects: ['Self-Balancing Motorcycle', 'Mobile Rover', 'Whiteboard Robot'],
    leadTime: 'In Stock',
    tags: ['arduino', 'engineering', 'advanced', 'mechatronics'],
    targetAudience: 'University engineering students',
    whatYouLearn: [
      'Control theory',
      'Image processing',
      'Mechatronics',
      'System integration',
      'Advanced programming'
    ],
    kitContents: [
      'Arduino Nano 33 IoT',
      'Custom Engineering Shield',
      'DC Motors with Encoders',
      'Li-ion Battery Pack',
      'Webcam',
      'Servo Motor',
      'Wheels & Mechanical Parts',
      'MATLAB & Simulink Online Access'
    ],
    estimatedProjectTime: '10-12 weeks',
    difficultyLevel: 'Advanced',
    ageRange: '18+ years',
    features: [
      'University-level curriculum',
      'MATLAB integration',
      'Professional components',
      'Three major projects',
      'Industry-standard tools'
    ]
  },
  {
    id: '2wd-smart-robot-car',
    name: '2WD Smart Robot Car Kit',
    description: 'Build your first autonomous robot. Learn motor control, sensors, and robotics programming.',
    category: 'Educational Kits',
    subcategory: 'Robotics & Motion',
    price: 310250,
    studentPrice: 275000,
    image: '/images/products/robot-car.jpg',
    inStock: true,
    stockLevel: 15,
    rating: 4.7,
    reviews: 89,
    compatibility: ['Arduino IDE', 'Bluetooth Apps'],
    projects: ['Remote Control', 'Obstacle Avoidance', 'Line Following', 'Maze Solving'],
    leadTime: 'In Stock',
    tags: ['robotics', 'autonomous', 'sensors', 'programming'],
    targetAudience: 'Robotics enthusiasts aged 16+',
    whatYouLearn: [
      'Motor control programming',
      'Sensor integration',
      'Autonomous navigation',
      'Bluetooth communication',
      'Path planning algorithms'
    ],
    kitContents: [
      'Robot Chassis (Acrylic)',
      '2x Geared DC Motors & Wheels',
      'Ball Caster Wheel',
      'Arduino UNO (compatible)',
      'L298N Motor Driver',
      'Ultrasonic Sensor',
      '2x IR Line Following Sensors',
      'SG90 Servo Mount',
      '18650 Battery Holder'
    ],
    estimatedProjectTime: '4-6 weeks',
    difficultyLevel: 'Intermediate',
    ageRange: '16+ years',
    features: [
      'Programmable autonomy',
      'Multiple sensors',
      'Expandable platform',
      'Wireless control',
      'Educational projects'
    ]
  },
  {
    id: '4dof-robotic-arm',
    name: '4-DOF Robotic Arm Kit',
    description: 'Explore kinematics and industrial automation with a desktop robotic arm controlled by servos.',
    category: 'Educational Kits',
    subcategory: 'Robotics & Motion',
    price: 340000,
    studentPrice: 300000,
    image: '/images/products/robotic-arm.jpg',
    inStock: true,
    stockLevel: 12,
    rating: 4.6,
    reviews: 67,
    compatibility: ['Arduino IDE', 'Servo Control Libraries'],
    projects: ['Pick and Place', 'Object Sorting', 'Drawing Robot', 'Assembly Line'],
    leadTime: 'In Stock',
    tags: ['robotics', 'automation', 'kinematics', 'industrial'],
    targetAudience: 'Engineering students interested in automation',
    whatYouLearn: [
      'Robotic kinematics',
      'Servo motor control',
      'Coordinate systems',
      'Industrial automation',
      'Precision control'
    ],
    kitContents: [
      'Laser-cut Acrylic Arm Parts',
      '4x SG90 Micro Servos',
      'Arduino Nano (compatible)',
      'Nano Sensor Shield',
      'Screws and Fasteners',
      'Control Potentiometers'
    ],
    estimatedProjectTime: '5-7 weeks',
    difficultyLevel: 'Intermediate',
    ageRange: '16+ years',
    features: [
      '4 degrees of freedom',
      'Precision control',
      'Industrial concepts',
      'Modular design',
      'Educational automation'
    ]
  },
  {
    id: 'self-balancing-robot',
    name: 'Self-Balancing Robot Kit',
    description: 'A challenging and rewarding kit to build a two-wheeled robot that balances itself using an IMU.',
    category: 'Educational Kits',
    subcategory: 'Robotics & Motion',
    price: 480000,
    studentPrice: 425000,
    image: '/images/products/balancing-robot.jpg',
    inStock: true,
    stockLevel: 10,
    rating: 4.8,
    reviews: 41,
    compatibility: ['Arduino IDE', 'IMU Libraries'],
    projects: ['Self-Balancing', 'Remote Control', 'Smartphone Control', 'PID Tuning'],
    leadTime: 'In Stock',
    tags: ['robotics', 'balancing', 'control-systems', 'advanced'],
    targetAudience: 'Advanced makers and engineering students',
    whatYouLearn: [
      'PID control systems',
      'IMU sensor data',
      'Dynamic stability',
      'Control theory',
      'Advanced programming'
    ],
    kitContents: [
      'Acrylic Chassis',
      'High-Torque Geared Motors & Wheels',
      'Arduino Nano (compatible)',
      'MPU-6050 IMU Sensor',
      'L298N Motor Driver',
      '18650 Batteries & Holder'
    ],
    estimatedProjectTime: '8-10 weeks',
    difficultyLevel: 'Advanced',
    ageRange: '18+ years',
    features: [
      'Dynamic balancing',
      'Advanced control theory',
      'IMU integration',
      'Engineering challenge',
      'Smartphone connectivity'
    ]
  },
  {
    id: 'drone-engineering-kit',
    name: 'Drone Engineering Kit',
    description: 'Build, program, and fly your own quadcopter. Learn about flight dynamics, PID control, and wireless communication.',
    category: 'Educational Kits',
    subcategory: 'Robotics & Motion',
    price: 1100000,
    studentPrice: 980000,
    image: '/images/products/drone-kit.jpg',
    inStock: true,
    stockLevel: 5,
    rating: 4.6,
    reviews: 32,
    compatibility: ['Flight Control Software', 'Radio Systems'],
    projects: ['Quadcopter Build', 'Flight Programming', 'Autonomous Flight', 'FPV System'],
    leadTime: 'In Stock',
    tags: ['drone', 'aerospace', 'flight-control', 'advanced'],
    targetAudience: 'Advanced engineering students and professionals',
    whatYouLearn: [
      'Flight dynamics',
      'PID control for flight',
      'Radio communication',
      'Aerospace engineering',
      'Safety protocols'
    ],
    kitContents: [
      'Drone Frame',
      '4x Brushless Motors',
      '4x Electronic Speed Controllers (ESCs)',
      'Flight Controller Board (e.g., KK2.1.5)',
      'Propellers',
      'Radio Transmitter & Receiver',
      'LiPo Battery & Charger'
    ],
    estimatedProjectTime: '10-14 weeks',
    difficultyLevel: 'Advanced',
    ageRange: '18+ years',
    features: [
      'Complete drone build',
      'Flight control programming',
      'Professional components',
      'Safety training included',
      'Autonomous capabilities'
    ]
  },
  {
    id: 'esp32-iot-starter',
    name: 'ESP32 IoT Starter Kit',
    description: 'Your gateway to the connected world. Build IoT devices that connect to the internet via Wi-Fi.',
    category: 'Educational Kits',
    subcategory: 'IoT & Connectivity',
    price: 242250,
    studentPrice: 215000,
    image: '/images/products/iot-starter.jpg',
    inStock: true,
    stockLevel: 22,
    rating: 4.8,
    reviews: 124,
    compatibility: ['Arduino IDE', 'WiFi Networks', 'Cloud Services'],
    projects: ['Weather Station', 'Home Automation', 'Data Logging', 'Remote Monitoring'],
    leadTime: 'In Stock',
    tags: ['iot', 'wifi', 'cloud', 'sensors'],
    targetAudience: 'IoT enthusiasts and developers',
    whatYouLearn: [
      'IoT fundamentals',
      'WiFi connectivity',
      'Cloud integration',
      'Sensor networks',
      'Data visualization'
    ],
    kitContents: [
      'ESP32 DevKitC Board',
      'Micro USB Cable',
      'DHT11 Sensor',
      'Soil Moisture Sensor',
      '0.96" OLED Display',
      'Photoresistor (LDR)',
      'Relay Module',
      'Breadboard & Wires',
      'Assorted LEDs, Resistors, Buttons'
    ],
    estimatedProjectTime: '6-8 weeks',
    difficultyLevel: 'Intermediate',
    ageRange: '16+ years',
    features: [
      'WiFi connectivity',
      'Cloud integration',
      'Multiple sensors',
      'Real-time data',
      'Mobile app control'
    ]
  },
  {
    id: 'lorawan-environmental-sensing',
    name: 'LoRaWAN Environmental Sensing Kit',
    description: 'Build long-range, low-power sensor networks for real-world agricultural and environmental applications.',
    category: 'Educational Kits',
    subcategory: 'IoT & Connectivity',
    price: 573750,
    studentPrice: 510000,
    image: '/images/products/lorawan-kit.jpg',
    inStock: true,
    stockLevel: 8,
    rating: 4.7,
    reviews: 34,
    compatibility: ['LoRaWAN Networks', 'Agricultural Systems'],
    projects: ['Environmental Monitoring', 'Agricultural Sensors', 'Smart City', 'Long-range Communication'],
    leadTime: 'In Stock',
    tags: ['lorawan', 'long-range', 'sensors', 'agriculture'],
    targetAudience: 'Professional developers and researchers',
    whatYouLearn: [
      'LoRaWAN protocol',
      'Long-range communication',
      'Low-power design',
      'Environmental monitoring',
      'Agricultural applications'
    ],
    kitContents: [
      '2x LoRa-capable ESP32 Boards',
      '2x Antennas',
      'High-precision BME280 Sensor',
      'DS18B20 Waterproof Sensor',
      'Soil Moisture Sensor',
      'Solar Charging Module',
      'LiPo Battery'
    ],
    estimatedProjectTime: '8-10 weeks',
    difficultyLevel: 'Advanced',
    ageRange: '18+ years',
    features: [
      'Long-range communication',
      'Low power consumption',
      'Solar powered',
      'Professional sensors',
      'Real-world applications'
    ]
  },
  {
    id: 'smart-home-automation',
    name: 'Smart Home Automation Kit',
    description: 'Learn to automate your home using relays, sensors, and wireless communication with an ESP32 hub.',
    category: 'Educational Kits',
    subcategory: 'IoT & Connectivity',
    price: 320000,
    studentPrice: 285000,
    image: '/images/products/smart-home.jpg',
    inStock: true,
    stockLevel: 18,
    rating: 4.9,
    reviews: 95,
    compatibility: ['Home Networks', 'Mobile Apps', 'Voice Assistants'],
    projects: ['Light Control', 'Security System', 'Climate Control', 'Energy Monitoring'],
    leadTime: 'In Stock',
    tags: ['smart-home', 'automation', 'iot', 'controls'],
    targetAudience: 'Home automation enthusiasts',
    whatYouLearn: [
      'Home automation concepts',
      'Relay control',
      'Sensor integration',
      'Web interfaces',
      'Mobile app development'
    ],
    kitContents: [
      'ESP32 DevKitC Board',
      '4-Channel Relay Module',
      'PIR Motion Sensor',
      'DHT11 Sensor',
      'Photoresistor (LDR)',
      'AC-DC Power Module',
      'Breadboard & Wires'
    ],
    estimatedProjectTime: '5-7 weeks',
    difficultyLevel: 'Intermediate',
    ageRange: '16+ years',
    features: [
      'Real home automation',
      'Mobile control',
      'Multiple sensors',
      'Safety features',
      'Expandable system'
    ]
  },
  {
    id: 'ble-innovator-kit',
    name: 'Bluetooth (BLE) Innovator Kit',
    description: 'Create battery-powered BLE devices like beacons, wearables, and custom remote controls.',
    category: 'Educational Kits',
    subcategory: 'IoT & Connectivity',
    price: 290000,
    studentPrice: 260000,
    image: '/images/products/ble-kit.jpg',
    inStock: true,
    stockLevel: 16,
    rating: 4.7,
    reviews: 68,
    compatibility: ['Smartphones', 'Tablets', 'BLE Central Devices'],
    projects: ['Beacon System', 'Wearable Device', 'Remote Control', 'Sensor Network'],
    leadTime: 'In Stock',
    tags: ['bluetooth', 'ble', 'wearable', 'beacon'],
    targetAudience: 'Mobile and wearable developers',
    whatYouLearn: [
      'BLE protocol',
      'Low-power design',
      'Mobile app integration',
      'Beacon technology',
      'Wearable electronics'
    ],
    kitContents: [
      'Nordic or ESP32 BLE Board',
      'Coin Cell Battery Holder',
      'Various Sensors (Temp, Accel)',
      'Buttons & LEDs',
      'Programming Guide'
    ],
    estimatedProjectTime: '4-6 weeks',
    difficultyLevel: 'Intermediate',
    ageRange: '16+ years',
    features: [
      'Battery powered',
      'Mobile integration',
      'Multiple sensors',
      'Compact design',
      'Professional protocols'
    ]
  },
  {
    id: 'weather-station-kit',
    name: 'Weather Station Kit',
    description: 'Build a comprehensive weather station that measures multiple environmental parameters and displays them.',
    category: 'Educational Kits',
    subcategory: 'IoT & Connectivity',
    price: 290000,
    studentPrice: 260000,
    image: '/images/products/weather-station.jpg',
    inStock: true,
    stockLevel: 18,
    rating: 4.9,
    reviews: 102,
    compatibility: ['Weather APIs', 'Data Logging Systems'],
    projects: ['Environmental Monitoring', 'Data Logging', 'Weather Prediction', 'Climate Analysis'],
    leadTime: 'In Stock',
    tags: ['weather', 'sensors', 'monitoring', 'data'],
    targetAudience: 'Environmental science students and weather enthusiasts',
    whatYouLearn: [
      'Environmental monitoring',
      'Sensor calibration',
      'Data logging',
      'Weather analysis',
      'Long-term monitoring'
    ],
    kitContents: [
      'Arduino Uno (compatible)',
      'BME280 Sensor',
      'Rain Sensor',
      '16x2 LCD Display with I2C',
      'DS1307 RTC Module',
      'Breadboard & Wires'
    ],
    estimatedProjectTime: '5-7 weeks',
    difficultyLevel: 'Intermediate',
    ageRange: '16+ years',
    features: [
      'Multiple sensors',
      'Real-time display',
      'Data logging',
      'Weather tracking',
      'Educational value'
    ]
  },
  {
    id: 'electronics-technician-repair',
    name: 'Electronics Technician Repair Kit',
    description: 'The essential toolset for diagnostics and repair. Learn professional electronics troubleshooting.',
    category: 'Educational Kits',
    subcategory: 'Specialized Learning',
    price: 331500,
    studentPrice: 295000,
    image: '/images/products/repair-kit.jpg',
    inStock: true,
    stockLevel: 14,
    rating: 4.8,
    reviews: 78,
    compatibility: ['Various Electronic Devices', 'Test Equipment'],
    projects: ['Device Diagnosis', 'Component Testing', 'Repair Practice', 'Troubleshooting'],
    leadTime: 'In Stock',
    tags: ['repair', 'diagnostics', 'professional', 'tools'],
    targetAudience: 'Aspiring technicians and repair professionals',
    whatYouLearn: [
      'Electronics troubleshooting',
      'Component testing',
      'Repair techniques',
      'Safety procedures',
      'Professional practices'
    ],
    kitContents: [
      'Auto-ranging Digital Multimeter',
      'Adjustable Temperature Soldering Iron',
      'Desoldering Pump',
      'Precision Screwdriver Set',
      'Flush Cutters',
      'Wire Strippers',
      'ESD-safe Tweezers Set',
      'Alligator Clip Test Leads'
    ],
    estimatedProjectTime: 'Ongoing',
    difficultyLevel: 'Intermediate',
    ageRange: '16+ years',
    features: [
      'Professional tools',
      'Diagnostic equipment',
      'Repair techniques',
      'Safety focused',
      'Industry standard'
    ]
  },
  {
    id: 'ai-vision-starter',
    name: 'AI & Vision Starter Kit (ESP32-CAM)',
    description: 'Step into Artificial Intelligence by learning image recognition and computer vision on a microcontroller.',
    category: 'Educational Kits',
    subcategory: 'Specialized Learning',
    price: 350000,
    studentPrice: 315000,
    image: '/images/products/ai-vision.jpg',
    inStock: true,
    stockLevel: 12,
    rating: 4.6,
    reviews: 55,
    compatibility: ['AI Frameworks', 'Computer Vision Libraries'],
    projects: ['Face Detection', 'Object Recognition', 'Security Camera', 'AI Processing'],
    leadTime: 'In Stock',
    tags: ['ai', 'computer-vision', 'machine-learning', 'camera'],
    targetAudience: 'AI and computer vision enthusiasts',
    whatYouLearn: [
      'Computer vision basics',
      'AI on microcontrollers',
      'Image processing',
      'Machine learning',
      'Edge AI concepts'
    ],
    kitContents: [
      'ESP32-CAM Board with Camera',
      'FTDI USB-to-Serial Programmer',
      'Breadboard and Jumper Wires',
      'Ring Light LED Module',
      'Power Supply',
      'Project Guide'
    ],
    estimatedProjectTime: '6-9 weeks',
    difficultyLevel: 'Intermediate',
    ageRange: '16+ years',
    features: [
      'AI on microcontroller',
      'Real-time processing',
      'Camera integration',
      'Edge computing',
      'Machine learning'
    ]
  },
  {
    id: 'audio-sound-synthesis',
    name: 'Audio & Sound Synthesis Kit',
    description: 'Explore digital audio by building synthesizers, sound effect generators, and voice changers.',
    category: 'Educational Kits',
    subcategory: 'Specialized Learning',
    price: 420000,
    studentPrice: 375000,
    image: '/images/products/audio-kit.jpg',
    inStock: true,
    stockLevel: 10,
    rating: 4.7,
    reviews: 49,
    compatibility: ['Audio Software', 'MIDI Controllers'],
    projects: ['Synthesizer', 'Sound Effects', 'Voice Changer', 'Audio Processor'],
    leadTime: 'In Stock',
    tags: ['audio', 'synthesizer', 'dsp', 'music'],
    targetAudience: 'Audio engineers and musicians',
    whatYouLearn: [
      'Digital signal processing',
      'Audio synthesis',
      'Sound generation',
      'Audio effects',
      'Music technology'
    ],
    kitContents: [
      'Teensy or similar powerful MCU',
      'Audio Adapter Shield',
      'Potentiometers & Buttons',
      'Speaker',
      'Microphone',
      'Headphone Jack',
      'Breadboard & Wires'
    ],
    estimatedProjectTime: '7-10 weeks',
    difficultyLevel: 'Advanced',
    ageRange: '18+ years',
    features: [
      'Real-time audio processing',
      'Professional audio quality',
      'Music synthesis',
      'DSP programming',
      'Creative applications'
    ]
  },
  {
    id: 'orange-pi-server-nas',
    name: 'Orange Pi 5 Server & NAS Kit',
    description: 'Build a powerful and compact home server or Network Attached Storage using the Orange Pi 5.',
    category: 'Educational Kits',
    subcategory: 'Specialized Learning',
    price: 650000,
    studentPrice: 580000,
    image: '/images/products/nas-kit.jpg',
    inStock: true,
    stockLevel: 8,
    rating: 4.9,
    reviews: 29,
    compatibility: ['Linux', 'Network Storage Protocols', 'Docker'],
    projects: ['Home Server', 'NAS Setup', 'Media Server', 'Network Services'],
    leadTime: 'In Stock',
    tags: ['server', 'nas', 'linux', 'networking'],
    targetAudience: 'Network administrators and power users',
    whatYouLearn: [
      'Linux server administration',
      'Network storage',
      'Docker containers',
      'Network services',
      'System optimization'
    ],
    kitContents: [
      'Orange Pi 5 SBC',
      'Power Supply',
      'Case with Fan',
      'Heatsinks',
      'M.2 NVMe SSD (optional add-on)',
      'Ethernet Cable',
      'Setup Guide'
    ],
    estimatedProjectTime: '4-6 weeks',
    difficultyLevel: 'Advanced',
    ageRange: '18+ years',
    features: [
      'High-performance SBC',
      'Network storage',
      'Linux server',
      'Docker support',
      'Professional applications'
    ]
  },
  {
    id: 'wearable-tech-development',
    name: 'Wearable Tech Development Kit',
    description: 'Design and build your own smartwatch or fitness tracker with compact boards and sensors.',
    category: 'Educational Kits',
    subcategory: 'Specialized Learning',
    price: 380000,
    studentPrice: 340000,
    image: '/images/products/wearable-kit.jpg',
    inStock: true,
    stockLevel: 12,
    rating: 4.5,
    reviews: 72,
    compatibility: ['Fitness Apps', 'Smartwatch Platforms'],
    projects: ['Smartwatch', 'Fitness Tracker', 'Health Monitor', 'Notification Device'],
    leadTime: 'In Stock',
    tags: ['wearable', 'smartwatch', 'fitness', 'health'],
    targetAudience: 'Wearable technology developers',
    whatYouLearn: [
      'Wearable electronics',
      'Health monitoring',
      'Low-power design',
      'User interface design',
      'Compact systems'
    ],
    kitContents: [
      'Seeed Studio XIAO or similar small board',
      'Small LiPo Battery',
      'OLED Display (0.96")',
      'MPU-6050 Accelerometer/Gyro',
      'Vibration Motor',
      'TP4056 Charger',
      'Wrist Strap'
    ],
    estimatedProjectTime: '6-8 weeks',
    difficultyLevel: 'Intermediate',
    ageRange: '16+ years',
    features: [
      'Compact wearable design',
      'Health sensors',
      'Battery powered',
      'Wireless connectivity',
      'Custom applications'
    ]
  },
  {
    id: '3d-printing-electronics',
    name: '3D Printing & Electronics Kit',
    description: 'Combine 3D printing and electronics to build custom interactive objects and enclosures.',
    category: 'Educational Kits',
    subcategory: 'Specialized Learning',
    price: 295000,
    studentPrice: 265000,
    image: '/images/products/3dprint-kit.jpg',
    inStock: true,
    stockLevel: 15,
    rating: 4.8,
    reviews: 81,
    compatibility: ['3D Printers', 'CAD Software', 'Electronics'],
    projects: ['Custom Enclosures', 'Interactive Objects', 'LED Displays', 'Sensor Housings'],
    leadTime: 'In Stock',
    tags: ['3d-printing', 'electronics', 'custom', 'interactive'],
    targetAudience: 'Makers combining 3D printing with electronics',
    whatYouLearn: [
      'Electronics integration',
      '3D design for electronics',
      'Custom enclosures',
      'Interactive objects',
      'LED programming'
    ],
    kitContents: [
      'Arduino Nano (compatible)',
      'Addressable RGB LED Strip (Neopixels)',
      'Micro Servo Motor',
      'Capacitive Touch Sensor',
      'Speaker',
      'LiPo Battery & Charger',
      'Switches & Wires'
    ],
    estimatedProjectTime: '5-7 weeks',
    difficultyLevel: 'Intermediate',
    ageRange: '16+ years',
    features: [
      'Custom 3D designs',
      'Electronics integration',
      'Interactive lighting',
      'Touch interfaces',
      'Professional finish'
    ]
  },
  {
    id: 'beginner-soldering-practice',
    name: 'Beginner Soldering Practice Kit',
    description: 'Master the essential skill of soldering with a simple, fun kit that results in a flashing badge.',
    category: 'Educational Kits',
    subcategory: 'Electronics Fundamentals',
    price: 45000,
    studentPrice: 40000,
    image: '/images/products/soldering-kit.jpg',
    inStock: true,
    stockLevel: 35,
    rating: 4.9,
    reviews: 210,
    compatibility: ['Soldering Irons', 'Basic Tools'],
    projects: ['LED Badge', 'Blinking Circuits', 'Practice Projects'],
    leadTime: 'In Stock',
    tags: ['soldering', 'practice', 'beginner', 'badge'],
    targetAudience: 'Anyone learning to solder',
    whatYouLearn: [
      'Soldering techniques',
      'Component placement',
      'Safety procedures',
      'Circuit building',
      'Quality control'
    ],
    kitContents: [
      'Custom PCB Badge',
      'Assorted LEDs',
      'Resistors',
      'Capacitors',
      'NE555 Timer IC',
      '9V Battery Snap',
      'Safety Pin',
      'Instructions'
    ],
    estimatedProjectTime: '1-2 hours',
    difficultyLevel: 'Beginner',
    ageRange: '12+ years',
    features: [
      'Beginner friendly',
      'Fun project outcome',
      'Safety focused',
      'Skill building',
      'Wearable result'
    ]
  },
  {
    id: 'home-security-alarm',
    name: 'Home Security Alarm Kit',
    description: 'Learn about security systems by building your own alarm with multiple sensors and alerts.',
    category: 'Educational Kits',
    subcategory: 'Specialized Learning',
    price: 250000,
    studentPrice: 225000,
    image: '/images/products/home-security.jpg',
    inStock: true,
    stockLevel: 20,
    rating: 4.7,
    reviews: 65,
    compatibility: ['Security Systems', 'Mobile Alerts'],
    projects: ['Intrusion Detection', 'Access Control', 'Alert System', 'Remote Monitoring'],
    leadTime: 'In Stock',
    tags: ['security', 'alarm', 'sensors', 'monitoring'],
    targetAudience: 'Security system enthusiasts',
    whatYouLearn: [
      'Security system design',
      'Sensor integration',
      'Alert mechanisms',
      'Access control',
      'System reliability'
    ],
    kitContents: [
      'Arduino Uno (compatible)',
      'PIR Motion Sensor',
      'Magnetic Door Switch Sensor',
      'Keypad',
      'Active Buzzer',
      'Strobe LED',
      'Breadboard & Wires'
    ],
    estimatedProjectTime: '4-6 weeks',
    difficultyLevel: 'Intermediate',
    ageRange: '16+ years',
    features: [
      'Multiple security sensors',
      'Access control',
      'Visual and audio alerts',
      'Expandable system',
      'Real security concepts'
    ]
  },
  {
    id: 'advanced-analog-electronics',
    name: 'Advanced Analog Electronics Lab',
    description: 'Dive deep into op-amps, filters, and oscillators. A comprehensive kit for understanding analog circuits.',
    category: 'Educational Kits',
    subcategory: 'Electronics Fundamentals',
    price: 280000,
    studentPrice: 250000,
    image: '/images/products/analog-lab.jpg',
    inStock: true,
    stockLevel: 12,
    rating: 4.7,
    reviews: 45,
    compatibility: ['Function Generators', 'Oscilloscopes', 'Lab Equipment'],
    projects: ['Op-Amp Circuits', 'Active Filters', 'Oscillators', 'Amplifier Design'],
    leadTime: 'In Stock',
    tags: ['analog', 'op-amps', 'advanced', 'lab'],
    targetAudience: 'Advanced electronics students and engineers',
    whatYouLearn: [
      'Advanced analog design',
      'Op-amp applications',
      'Filter design',
      'Oscillator circuits',
      'Professional techniques'
    ],
    kitContents: [
      'Function Generator Module (optional)',
      'Breadboards',
      'Op-Amps (LM741, LM358)',
      'Assorted Transistors (NPN, PNP)',
      'Assorted Diodes (Signal, Zener)',
      'Huge variety of Resistors & Capacitors',
      'Potentiometers',
      'Lab Manual'
    ],
    estimatedProjectTime: '8-10 weeks',
    difficultyLevel: 'Advanced',
    ageRange: '18+ years',
    features: [
      'Professional components',
      'Advanced circuit design',
      'Lab-grade experiments',
      'Theory and practice',
      'Engineering level'
    ]
  }
]
