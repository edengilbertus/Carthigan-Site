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

export const allEducationalKits: EducationalKit[] = [
  {
    id: 'arduino-starter-kit',
    name: 'Arduino Starter Kit Official',
    description: 'Complete Arduino learning kit with projects book and all components needed for 15 projects.',
    category: 'Educational Kits',
    subcategory: 'Arduino Kits',
    price: 85000,
    studentPrice: 75000,
    image: '/images/products/arduino-starter-kit.jpg',
    inStock: true,
    stockLevel: 25,
    rating: 4.8,
    reviews: 156,
    compatibility: ['Arduino Uno', 'Arduino IDE'],
    projects: ['LED Blink', 'Traffic Light', 'Temperature Monitor', 'Servo Control'],
    leadTime: 'In Stock',
    tags: ['arduino', 'microcontroller', 'beginner', 'electronics', 'programming'],
    targetAudience: 'Beginners, students, hobbyists',
    whatYouLearn: [
      'Basic electronics principles',
      'Arduino programming (C/C++)',
      'Sensor interfacing',
      'LED and display control',
      'Motor control basics'
    ],
    kitContents: [
      'Arduino Uno R3',
      'USB Cable',
      'Breadboard',
      'LED assortment',
      'Resistors kit',
      'Servo motor',
      'LCD display',
      'Temperature sensor',
      'Pushbuttons',
      'Jumper wires',
      'Projects book'
    ],
    estimatedProjectTime: '2-6 hours per project',
    difficultyLevel: 'Beginner',
    ageRange: '14+ years',
    features: [
      'Official Arduino kit',
      '15 guided projects',
      'Comprehensive guidebook',
      'All components included',
      'No soldering required'
    ],
    specifications: {
      'Kit Type': 'Arduino Learning Kit',
      'Projects': '15 guided projects',
      'Difficulty': 'Beginner friendly',
      'Programming': 'Arduino IDE (C/C++)',
      'Age Range': '14+ years'
    }
  },
  {
    id: 'raspberry-pi-starter-kit',
    name: 'Raspberry Pi 4 Starter Kit',
    description: 'Complete Raspberry Pi kit with everything needed to start learning Python programming and electronics.',
    category: 'Educational Kits',
    subcategory: 'Raspberry Pi Kits',
    price: 120000,
    studentPrice: 105000,
    image: '/images/products/rpi-starter-kit.jpg',
    inStock: true,
    stockLevel: 18,
    rating: 4.7,
    reviews: 89,
    compatibility: ['Raspberry Pi 4', 'Python', 'Scratch'],
    projects: ['Home Automation', 'Weather Station', 'Security Camera', 'IoT Projects'],
    leadTime: 'In Stock',
    tags: ['raspberry-pi', 'python', 'linux', 'iot', 'programming'],
    targetAudience: 'Intermediate learners, programming enthusiasts',
    whatYouLearn: [
      'Python programming',
      'Linux basics',
      'GPIO interfacing',
      'Camera module usage',
      'IoT project development'
    ],
    kitContents: [
      'Raspberry Pi 4 (4GB)',
      'MicroSD Card 32GB',
      'Power Supply',
      'HDMI Cable',
      'Camera Module',
      'GPIO Breakout Board',
      'Sensors Kit',
      'Breadboard',
      'Jumper Wires',
      'Getting Started Guide'
    ],
    estimatedProjectTime: '4-8 hours per project',
    difficultyLevel: 'Intermediate',
    ageRange: '16+ years',
    features: [
      'Raspberry Pi 4 included',
      'Camera module for vision projects',
      'GPIO interfacing kit',
      'Python programming focus',
      'IoT project examples'
    ],
    specifications: {
      'Kit Type': 'Raspberry Pi Learning Kit',
      'RAM': '4GB LPDDR4',
      'Storage': '32GB MicroSD',
      'Programming': 'Python, Scratch',
      'OS': 'Raspberry Pi OS'
    }
  },
  {
    id: 'electronics-lab-kit',
    name: 'Electronics Lab Kit Deluxe',
    description: 'Professional electronics learning kit with comprehensive components and lab manual.',
    category: 'Educational Kits',
    subcategory: 'Electronics Fundamentals',
    price: 95000,
    studentPrice: 85000,
    image: '/images/products/electronics-lab-kit.jpg',
    inStock: true,
    stockLevel: 12,
    rating: 4.6,
    reviews: 67,
    compatibility: ['Multimeter', 'Oscilloscope', 'Function Generator'],
    projects: ['Basic Circuits', 'Amplifiers', 'Filters', 'Digital Logic'],
    leadTime: 'In Stock',
    tags: ['electronics', 'circuits', 'analog', 'digital', 'lab'],
    targetAudience: 'Engineering students, electronics enthusiasts',
    whatYouLearn: [
      'Circuit analysis',
      'Component identification',
      'Soldering techniques',
      'Measurement techniques',
      'PCB design basics'
    ],
    kitContents: [
      'Breadboards (multiple sizes)',
      'Resistors (1% precision)',
      'Capacitors assortment',
      'Inductors kit',
      'Diodes and transistors',
      'ICs (op-amps, logic gates)',
      'Soldering kit',
      'Multimeter',
      'Component storage box',
      'Lab manual'
    ],
    estimatedProjectTime: '3-5 hours per experiment',
    difficultyLevel: 'Intermediate to Advanced',
    ageRange: '18+ years',
    features: [
      'Professional components',
      'Precision instruments',
      'Comprehensive lab manual',
      'Soldering practice included',
      'Multiple project levels'
    ],
    specifications: {
      'Kit Type': 'Electronics Lab Kit',
      'Components': '500+ pieces',
      'Instruments': 'Digital multimeter included',
      'Manual': '50+ experiments',
      'Level': 'University/Professional'
    }
  }
] 