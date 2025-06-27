export interface DevelopmentBoard {
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
    processor: string
    coProcessor?: string
    memory: string
    connectivity: string
    keyFeatures: string
    bestFor: string
  }
  specifications: Record<string, string>
  compatibility: string[]
  projects: string[]
  leadTime: string
  tags: string[]
  keyFeatures?: string[]
}

// MICROCONTROLLER BOARDS - Arduino Ecosystem
const arduinoBoards: DevelopmentBoard[] = [
  {
    id: "arduino-uno-r4-wifi",
    name: "Arduino UNO R4 WiFi",
    description: "The modern successor to the classic starter board.",
    category: "microcontroller",
    subcategory: "arduino",
    price: 195000,
    studentPrice: 165750,
    image: "/images/boards/arduino-uno-r4-wifi.jpg",
    inStock: true,
    stockLevel: 45,
    rating: 4.9,
    reviews: 234,
    overview: {
      processor: "Renesas RA4M1 ARM Cortex-M4 @ 48 MHz",
      coProcessor: "Espressif ESP32-S3 for Wi-Fi & Bluetooth",
      memory: "32KB SRAM, 256KB Flash",
      connectivity: "Wi-Fi 4 (802.11 b/g/n), Bluetooth 5.0",
      keyFeatures: "12x8 LED Matrix for animations and data visualization, Qwiic I2C connector, USB-C, real-time clock (RTC), 5V operating voltage.",
      bestFor: "Learning electronics, advanced IoT projects, interactive displays, and upgrading existing Arduino UNO projects."
    },
    specifications: {
      "Microcontroller": "Renesas RA4M1 (ARM Cortex-M4)",
      "Operating Voltage": "5V",
      "Digital I/O Pins": "14",
      "Flash Memory": "256KB",
      "Clock Speed": "48MHz",
      "Wi-Fi": "ESP32-S3 module",
      "USB": "USB-C"
    },
    compatibility: ["Arduino IDE", "PlatformIO", "MicroPython"],
    projects: ["IoT Sensors", "Home Automation", "Robotics"],
    leadTime: "2-3 days",
    tags: ["wifi", "bluetooth", "beginner-friendly", "iot"]
  },
  {
    id: "arduino-nano-esp32",
    name: "Arduino Nano ESP32",
    description: "Compact breadboard-friendly board combining Nano form factor with ESP32-S3 power for connected projects",
    category: "microcontroller",
    subcategory: "arduino",
    price: 170000, // Average of 150,000 - 190,000
    studentPrice: 144500,
    image: "/images/boards/arduino-nano-esp32.jpg",
    inStock: true,
    stockLevel: 62,
    rating: 4.8,
    reviews: 189,
    specifications: {
      "Microcontroller": "ESP32-S3",
      "Operating Voltage": "3.3V",
      "Input Voltage": "5V (USB)",
      "Digital I/O Pins": "14",
      "Analog Input Pins": "8",
      "Flash Memory": "8MB",
      "SRAM": "512KB",
      "Clock Speed": "240MHz",
      "Connectivity": "Wi-Fi, Bluetooth 5.0",
      "Size": "18 x 45mm"
    },
    compatibility: ["Arduino IDE", "ESP-IDF", "MicroPython", "CircuitPython"],
    projects: ["Wearable Tech", "IoT Sensors", "Wireless Communication", "Edge Computing", "Battery Projects"],
    leadTime: "2-3 days",
    tags: ["compact", "wifi", "bluetooth", "low-power", "breadboard"],
    keyFeatures: ["Nano Form Factor", "Dual-Core ESP32-S3", "Built-in Wi-Fi & Bluetooth", "8MB Flash", "Ultra-Low Power"]
  },
  {
    id: "arduino-giga-r1-wifi",
    name: "Arduino GIGA R1 WiFi",
    description: "A dual-core beast for complex, high-performance projects.",
    category: "microcontroller",
    subcategory: "arduino",
    price: 425000, // Average of 350,000 - 500,000
    studentPrice: 361250,
    image: "/images/boards/arduino-giga-r1-wifi.jpg",
    inStock: true,
    stockLevel: 18,
    rating: 4.7,
    reviews: 67,
    overview: {
      processor: "STM32H747XI dual-core (ARM Cortex-M7 @ 480MHz + Cortex-M4 @ 240MHz)",
      memory: "1MB RAM, 2MB Flash (plus 8MB SDRAM, 16MB QSPI Flash)",
      connectivity: "Wi-Fi 4 (802.11 b/g/n), Bluetooth 5.1",
      keyFeatures: "Dual-core processing (can run Arduino and MicroPython simultaneously), dedicated camera and display connectors, USB-A Host port, 3.5mm audio jack, 76 GPIO pins.",
      bestFor: "Robotics, machine learning, 3D printing, digital audio synthesis, and projects requiring the power of two microcontrollers in one."
    },
    specifications: {
      "Microcontroller": "STM32H747XI (Dual-core)",
      "Core 1": "ARM Cortex-M7 @ 480MHz",
      "Core 2": "ARM Cortex-M4 @ 240MHz",
      "Flash Memory": "2MB",
      "SRAM": "1MB",
      "Digital I/O Pins": "76",
      "Analog Input Pins": "12",
      "Connectivity": "Wi-Fi, Bluetooth",
      "Display": "Mini HDMI",
      "Camera": "Camera connector"
    },
    compatibility: ["Arduino IDE", "STM32CubeIDE", "Mbed OS", "TensorFlow Lite"],
    projects: ["Industrial Automation", "Machine Learning", "Computer Vision", "High-Speed Data Processing", "Multi-Core Applications"],
    leadTime: "5-7 days",
    tags: ["dual-core", "high-performance", "ml", "vision", "industrial"]
  }
]

// SPARKFUN BOARDS
const sparkfunBoards: DevelopmentBoard[] = [
  {
    id: "sparkfun-redboard-plus",
    name: "SparkFun RedBoard Plus",
    description: "High-quality Arduino UNO compatible board with USB-C and Qwiic connector for easy expansion",
    category: "microcontroller",
    subcategory: "sparkfun",
    price: 150000, // Average of 120,000 - 180,000 (Est. Import)
    studentPrice: 127500,
    image: "/images/boards/sparkfun-redboard-plus.jpg",
    inStock: true,
    stockLevel: 28,
    rating: 4.8,
    reviews: 145,
    specifications: {
      "Microcontroller": "ATmega328P",
      "Operating Voltage": "5V/3.3V",
      "Input Voltage": "7-15V",
      "Digital I/O Pins": "20",
      "Analog Input Pins": "6",
      "Flash Memory": "32KB",
      "SRAM": "2KB",
      "Clock Speed": "16MHz",
      "USB": "USB-C",
      "Connector": "Qwiic (I2C)"
    },
    compatibility: ["Arduino IDE", "PlatformIO", "SparkFun Libraries"],
    projects: ["Sensor Networks", "Educational Projects", "Prototyping", "Qwiic Ecosystem", "STEM Learning"],
    leadTime: "7-10 days",
    tags: ["qwiic", "usb-c", "quality", "educational", "expandable"],
    keyFeatures: ["Qwiic Connector", "USB-C", "Dual Voltage", "High Build Quality", "SparkFun Ecosystem"]
  },
  {
    id: "sparkfun-thing-plus-esp32",
    name: "SparkFun Thing Plus ESP32",
    description: "A robust and feature-rich IoT workhorse.",
    category: "microcontroller",
    subcategory: "sparkfun",
    price: 165000, // Average of 130,000 - 200,000 (Est. Import)
    studentPrice: 140250,
    image: "/images/boards/sparkfun-thing-plus-esp32.jpg",
    inStock: true,
    stockLevel: 35,
    rating: 4.7,
    reviews: 98,
    overview: {
      processor: "Espressif ESP32 dual-core Xtensa LX6 @ 240 MHz",
      memory: "520KB SRAM, 16MB Flash",
      connectivity: "Wi-Fi 4 (802.11 b/g/n), Bluetooth 4.2 (Classic & BLE)",
      keyFeatures: "Feather form factor compatibility, Qwiic connector for solderless expansion, integrated LiPo battery charger, USB-C connector.",
      bestFor: "Rapid development of IoT proofs-of-concept, battery-powered sensor networks, and smart home devices."
    },
    specifications: {
      "Microcontroller": "ESP32-WROOM",
      "Operating Voltage": "3.3V",
      "Input Voltage": "3.4-6V",
      "Digital I/O Pins": "28",
      "Analog Input Pins": "8",
      "Flash Memory": "16MB",
      "SRAM": "520KB",
      "Clock Speed": "240MHz",
      "Connectivity": "Wi-Fi, Bluetooth",
      "Battery": "LiPo connector & charger"
    },
    compatibility: ["Arduino IDE", "ESP-IDF", "PlatformIO", "Feather accessories"],
    projects: ["Battery IoT", "Wireless Sensors", "Remote Monitoring", "Mobile Applications", "Solar Projects"],
    leadTime: "7-10 days",
    tags: ["feather", "battery", "wifi", "bluetooth", "portable"]
  }
]

// ESP BOARDS
const espBoards: DevelopmentBoard[] = [
  {
    id: "esp32-devkitc",
    name: "ESP32 DevKitC (Generic)",
    description: "The most common and affordable dual-core ESP32 development board perfect for IoT projects",
    category: "microcontroller",
    subcategory: "esp",
    price: 62500, // Average of 45,000 - 80,000
    studentPrice: 53125,
    image: "/images/boards/esp32-devkitc.jpg",
    inStock: true,
    stockLevel: 120,
    rating: 4.6,
    reviews: 567,
    specifications: {
      "Microcontroller": "ESP32-WROOM-32",
      "Operating Voltage": "3.3V",
      "Input Voltage": "5V (USB)",
      "Digital I/O Pins": "30",
      "Analog Input Pins": "18",
      "Flash Memory": "4MB",
      "SRAM": "520KB",
      "Clock Speed": "240MHz",
      "Connectivity": "Wi-Fi, Bluetooth",
      "Wireless": "802.11 b/g/n, BLE"
    },
    compatibility: ["Arduino IDE", "ESP-IDF", "MicroPython", "PlatformIO"],
    projects: ["IoT Sensors", "Home Automation", "Wireless Communication", "Web Servers", "Mesh Networks"],
    leadTime: "1-2 days",
    tags: ["affordable", "dual-core", "wifi", "bluetooth", "popular"],
    keyFeatures: ["Best Value for IoT", "Dual-Core Processing", "Built-in Wi-Fi & Bluetooth", "Rich GPIO", "Huge Community"]
  },
  {
    id: "esp8266-nodemcu",
    name: "ESP8266 NodeMCU",
    description: "Cost-effective predecessor to ESP32, perfect for simpler Wi-Fi-enabled projects",
    category: "microcontroller",
    subcategory: "esp",
    price: 42500, // Average of 30,000 - 55,000
    studentPrice: 36125,
    image: "/images/boards/esp8266-nodemcu.jpg",
    inStock: true,
    stockLevel: 85,
    rating: 4.5,
    reviews: 423,
    specifications: {
      "Microcontroller": "ESP8266",
      "Operating Voltage": "3.3V",
      "Input Voltage": "5V (USB)",
      "Digital I/O Pins": "11",
      "Analog Input Pins": "1",
      "Flash Memory": "4MB",
      "SRAM": "80KB",
      "Clock Speed": "80MHz",
      "Connectivity": "Wi-Fi 802.11 b/g/n",
      "USB": "Micro USB"
    },
    compatibility: ["Arduino IDE", "NodeMCU Lua", "MicroPython", "AT Commands"],
    projects: ["Simple IoT", "Wi-Fi Sensors", "Home Automation", "Weather Stations", "Learning Projects"],
    leadTime: "1-2 days",
    tags: ["budget", "wifi", "simple", "educational", "lua"],
    keyFeatures: ["Ultra Affordable", "Wi-Fi Built-in", "Lua Programming", "Breadboard Friendly", "Low Power"]
  },
  {
    id: "stm32-blue-pill",
    name: "STM32 Blue Pill Board",
    description: "Very low-cost 32-bit ARM board for stepping into professional embedded development",
    category: "microcontroller",
    subcategory: "stm32",
    price: 35000, // Average of 25,000 - 45,000
    studentPrice: 29750,
    image: "/images/boards/stm32-blue-pill.jpg",
    inStock: true,
    stockLevel: 75,
    rating: 4.4,
    reviews: 234,
    specifications: {
      "Microcontroller": "STM32F103C8T6",
      "Architecture": "ARM Cortex-M3",
      "Operating Voltage": "3.3V",
      "Input Voltage": "3.3-5V",
      "Digital I/O Pins": "37",
      "Analog Input Pins": "12",
      "Flash Memory": "64KB",
      "SRAM": "20KB",
      "Clock Speed": "72MHz",
      "Timers": "7 timers"
    },
    compatibility: ["Arduino IDE", "STM32CubeIDE", "PlatformIO", "Mbed"],
    projects: ["Professional Prototyping", "Real-time Systems", "Motor Control", "Industrial Applications", "Advanced Learning"],
    leadTime: "3-5 days",
    tags: ["professional", "arm", "cheap", "industrial", "real-time"],
    keyFeatures: ["32-bit ARM Processor", "Professional Grade", "Real-time Capabilities", "Multiple Timers", "Industrial Standard"]
  }
]

// SINGLE BOARD COMPUTERS - Orange Pi
const orangePiBoards: DevelopmentBoard[] = [
  {
    id: "orange-pi-5-plus-16gb",
    name: "Orange Pi 5 Plus (16GB)",
    description: "A high-performance server-grade single-board computer.",
    category: "sbc",
    subcategory: "orange-pi",
    price: 775000, // Average of 650,000 - 900,000+
    studentPrice: 658750,
    image: "/images/boards/orange-pi-5-plus.jpg",
    inStock: true,
    stockLevel: 12,
    rating: 4.8,
    reviews: 89,
    overview: {
      processor: "Rockchip RK3588 8-core 64-bit (4x Cortex-A76 + 4x Cortex-A55) @ 2.4 GHz",
      memory: "4GB/8GB/16GB LPDDR4/4x RAM, optional eMMC module",
      connectivity: "2x 2.5G Gigabit Ethernet ports, Wi-Fi 6, Bluetooth 5.2",
      keyFeatures: "M.2 M-Key slot for NVMe SSDs, HDMI In & Out (8K support), dual 2.5GbE ports, multiple USB 3.0/3.1 ports.",
      bestFor: "Building a powerful home server, Network Attached Storage (NAS), running virtual machines, or as a high-end Android TV box."
    },
    specifications: {
      "SoC": "Rockchip RK3588",
      "CPU": "8-core (4x A76 + 4x A55)",
      "GPU": "Mali-G610 MP4",
      "RAM": "16GB LPDDR4X",
      "Storage": "eMMC slot + microSD + M.2",
      "Ethernet": "Dual 2.5G",
      "USB": "4x USB 3.0 + 2x USB 2.0",
      "Display": "2x HDMI 2.1 (8K)",
      "NPU": "6 TOPS AI acceleration",
      "Power": "5V 4A"
    },
    compatibility: ["Ubuntu", "Debian", "Android", "Armbian"],
    projects: ["AI/ML Applications", "Home Servers", "4K/8K Media Centers", "Network Storage", "Edge Computing"],
    leadTime: "10-14 days",
    tags: ["high-performance", "ai", "server", "8k", "enterprise"]
  },
  {
    id: "orange-pi-5-8gb",
    name: "Orange Pi 5 (8GB)",
    description: "Strong performer with RK3588S, excellent for Android emulation and high-resolution video projects",
    category: "sbc",
    subcategory: "orange-pi",
    price: 525000, // Average of 450,000 - 600,000
    studentPrice: 446250,
    image: "/images/boards/orange-pi-5.jpg",
    inStock: true,
    stockLevel: 24,
    rating: 4.7,
    reviews: 156,
    specifications: {
      "SoC": "Rockchip RK3588S",
      "CPU": "8-core (4x A76 + 4x A55)",
      "GPU": "Mali-G610 MP4",
      "RAM": "8GB LPDDR4X",
      "Storage": "microSD + M.2 NVMe",
      "Ethernet": "Gigabit",
      "USB": "2x USB 3.0 + 2x USB 2.0",
      "Display": "HDMI 2.1 + eDP",
      "NPU": "6 TOPS",
      "WiFi": "802.11ac"
    },
    compatibility: ["Ubuntu", "Debian", "Android 12", "OpenWRT"],
    projects: ["Android Gaming", "Media Center", "Development Workstation", "AI Projects", "Retro Gaming"],
    leadTime: "7-10 days",
    tags: ["gaming", "media", "android", "performance", "nvme"],
    keyFeatures: ["RK3588S Processor", "8GB RAM", "M.2 NVMe Support", "Android 12", "4K Video Decode"]
  },
  {
    id: "orange-pi-3b-4gb",
    name: "Orange Pi 3B (4GB)",
    description: "Mid-range board with RK3566 processor, onboard eMMC storage and M.2 slot for NAS and general computing",
    category: "sbc",
    subcategory: "orange-pi",
    price: 300000, // Average of 250,000 - 350,000
    studentPrice: 255000,
    image: "/images/boards/orange-pi-3b.jpg",
    inStock: true,
    stockLevel: 35,
    rating: 4.6,
    reviews: 112,
    specifications: {
      "SoC": "Rockchip RK3566",
      "CPU": "4-core ARM Cortex-A55",
      "GPU": "Mali-G52 2EE",
      "RAM": "4GB LPDDR4",
      "Storage": "32GB eMMC + microSD + M.2",
      "Ethernet": "Gigabit",
      "USB": "4x USB (2x 3.0 + 2x 2.0)",
      "Display": "HDMI 2.0",
      "WiFi": "802.11ac + Bluetooth 5.0",
      "GPIO": "40-pin"
    },
    compatibility: ["Ubuntu", "Debian", "Android", "OpenWRT"],
    projects: ["Network Attached Storage", "Home Server", "IoT Gateway", "Desktop Replacement", "Learning Platform"],
    leadTime: "5-7 days",
    tags: ["nas", "emmc", "balanced", "gateway", "storage"],
    keyFeatures: ["Built-in eMMC", "M.2 Storage", "Balanced Performance", "Multiple OS Support", "Good I/O"]
  },
  {
    id: "orange-pi-zero-2w",
    name: "Orange Pi Zero 2W",
    description: "Compact and affordable board for headless applications, networking projects and lightweight IoT tasks",
    category: "sbc",
    subcategory: "orange-pi",
    price: 130000, // Average of 100,000 - 160,000
    studentPrice: 110500,
    image: "/images/boards/orange-pi-zero-2w.jpg",
    inStock: true,
    stockLevel: 68,
    rating: 4.5,
    reviews: 203,
    specifications: {
      "SoC": "Allwinner H618",
      "CPU": "4-core ARM Cortex-A53",
      "GPU": "Mali-G31",
      "RAM": "1GB/2GB/4GB LPDDR4",
      "Storage": "microSD",
      "Ethernet": "100M (via USB)",
      "USB": "1x USB 2.0",
      "Display": "HDMI mini",
      "WiFi": "802.11ac + Bluetooth 5.0",
      "Size": "65 x 30mm"
    },
    compatibility: ["Ubuntu", "Debian", "Armbian", "OpenWRT"],
    projects: ["Pi-hole", "VPN Server", "IoT Hub", "Network Monitor", "Headless Applications"],
    leadTime: "3-5 days",
    tags: ["compact", "headless", "networking", "iot", "budget"],
    keyFeatures: ["Ultra Compact", "Built-in WiFi", "Low Power", "Multiple RAM Options", "Headless Ready"]
  }
]

// BEAGLEBOARD BOARDS
const beagleBoardBoards: DevelopmentBoard[] = [
  {
    id: "beaglebone-black",
    name: "BeagleBone Black",
    description: "Famous for extensive I/O (92 pins), favorite for industrial controls, automation, and robotics",
    category: "sbc",
    subcategory: "beagleboard",
    price: 375000, // Average of 300,000 - 450,000 (Est. Import)
    studentPrice: 318750,
    image: "/images/boards/beaglebone-black.jpg",
    inStock: true,
    stockLevel: 15,
    rating: 4.6,
    reviews: 178,
    specifications: {
      "SoC": "AM3358 ARM Cortex-A8",
      "CPU": "1GHz single-core",
      "RAM": "512MB DDR3",
      "Storage": "4GB eMMC + microSD",
      "Ethernet": "10/100M",
      "USB": "1x USB 2.0 host + 1x client",
      "Display": "HDMI",
      "GPIO": "92 pins (2x 46-pin headers)",
      "Analog": "7x ADC",
      "PWM": "8x PWM"
    },
    compatibility: ["Debian", "Ubuntu", "Android", "Real-time OS"],
    projects: ["Industrial Automation", "Robotics Control", "Data Acquisition", "Motor Control", "Sensor Networks"],
    leadTime: "10-14 days",
    tags: ["industrial", "gpio", "real-time", "automation", "proven"],
    keyFeatures: ["92 GPIO Pins", "Real-time Capabilities", "Industrial Grade", "Extensive I/O", "Open Hardware"]
  },
  {
    id: "beagleplay",
    name: "BeaglePlay",
    description: "Modern board with onboard Wi-Fi, Gigabit Ethernet, and numerous sensor interfaces for easy development",
    category: "sbc",
    subcategory: "beagleboard",
    price: 475000, // Average of 400,000 - 550,000 (Est. Import)
    studentPrice: 403750,
    image: "/images/boards/beagleplay.jpg",
    inStock: true,
    stockLevel: 8,
    rating: 4.7,
    reviews: 45,
    specifications: {
      "SoC": "AM6254 ARM Cortex-A53",
      "CPU": "4-core 1.4GHz",
      "RAM": "2GB DDR4",
      "Storage": "16GB eMMC + microSD",
      "Ethernet": "Gigabit + SPE",
      "USB": "2x USB 3.0 + 1x USB 2.0",
      "Display": "HDMI + DSI",
      "WiFi": "802.11ac + Bluetooth 5.2",
      "Sensors": "Multiple sensor interfaces",
      "GPIO": "40-pin + mikroBUS"
    },
    compatibility: ["Debian", "Ubuntu", "Zephyr RTOS"],
    projects: ["IoT Development", "Sensor Integration", "Edge Computing", "Modern Automation", "Rapid Prototyping"],
    leadTime: "12-16 days",
    tags: ["modern", "sensors", "connectivity", "mikrobus", "versatile"],
    keyFeatures: ["Multiple Connectivity", "Sensor Ready", "Modern Architecture", "mikroBUS Support", "Easy Development"]
  }
]

// ADDITIONAL MICROCONTROLLER BOARDS - New Ecosystems
const additionalMicrocontrollerBoards: DevelopmentBoard[] = [
  // Seeed Studio XIAO Series
  {
    id: "seeed-xiao-esp32s3",
    name: "Seeed XIAO ESP32S3",
    description: "An ultra-small board with surprising power.",
    category: "microcontroller",
    subcategory: "seeed-xiao",
    price: 62500,
    studentPrice: 53125,
    image: "/images/boards/seeed-xiao-esp32s3.jpg",
    inStock: true,
    stockLevel: 45,
    rating: 4.7,
    reviews: 89,
    overview: {
      processor: "Espressif ESP32-S3 dual-core LX7 @ 240 MHz",
      memory: "8MB PSRAM, 8MB Flash",
      connectivity: "Wi-Fi 4 (802.11 b/g/n), Bluetooth 5.0 + BLE Mesh",
      keyFeatures: "Thumb-sized form factor, onboard battery charging support, 21 GPIO pins, capable of AI acceleration for simple machine learning tasks.",
      bestFor: "Wearable devices, space-constrained IoT nodes, rapid prototyping, and battery-powered projects."
    },
    specifications: {
      "Microcontroller": "ESP32-S3",
      "Size": "21 x 17.5mm (Thumb-sized)",
      "Operating Voltage": "3.3V",
      "Digital I/O Pins": "11",
      "Flash Memory": "8MB",
      "SRAM": "512KB",
      "Connectivity": "Wi-Fi, Bluetooth 5.0",
      "USB": "USB-C"
    },
    compatibility: ["Arduino IDE", "ESP-IDF", "MicroPython", "CircuitPython"],
    projects: ["Wearable Tech", "IoT Sensors", "Tiny Robots", "Smart Accessories"],
    leadTime: "7-10 days",
    tags: ["ultra-small", "wearable", "esp32", "camera", "microphone"],
    keyFeatures: ["Thumb-sized Design", "Camera Interface", "Built-in Microphone", "Wi-Fi & Bluetooth"]
  },
  // Adafruit Feather
  {
    id: "adafruit-feather-esp32s3",
    name: "Adafruit Feather ESP32-S3",
    description: "Part of the huge Feather ecosystem with battery charging, perfect for portable IoT projects",
    category: "microcontroller",
    subcategory: "adafruit-feather",
    price: 135000,
    studentPrice: 114750,
    image: "/images/boards/adafruit-feather-esp32s3.jpg",
    inStock: true,
    stockLevel: 28,
    rating: 4.8,
    reviews: 156,
    specifications: {
      "Microcontroller": "ESP32-S3",
      "Operating Voltage": "3.3V",
      "Flash Memory": "8MB",
      "PSRAM": "2MB",
      "Connectivity": "Wi-Fi, Bluetooth",
      "Battery": "LiPo connector & charger",
      "USB": "USB-C"
    },
    compatibility: ["Arduino IDE", "CircuitPython", "ESP-IDF"],
    projects: ["Battery IoT", "Portable Sensors", "Solar Projects", "Wearables"],
    leadTime: "10-14 days",
    tags: ["feather", "battery", "portable", "ecosystem", "wings"],
    keyFeatures: ["Battery Charging Built-in", "Feather Ecosystem", "FeatherWing Compatible", "CircuitPython"]
  },
  // Particle IoT
  {
    id: "particle-photon-2",
    name: "Particle Photon 2",
    description: "Commercial IoT platform with cloud integration, cellular connectivity, and enterprise-grade reliability",
    category: "microcontroller",
    subcategory: "particle",
    price: 250000,
    studentPrice: 212500,
    image: "/images/boards/particle-photon-2.jpg",
    inStock: true,
    stockLevel: 15,
    rating: 4.6,
    reviews: 67,
    specifications: {
      "Microcontroller": "RTL8721DM",
      "Operating Voltage": "3.3V",
      "Flash Memory": "2MB",
      "RAM": "512KB",
      "Connectivity": "Wi-Fi, Bluetooth",
      "Cloud": "Particle Cloud integration",
      "Security": "Hardware security"
    },
    compatibility: ["Particle Workbench", "Particle Cloud", "Arduino IDE"],
    projects: ["Commercial IoT", "Fleet Management", "Remote Monitoring", "Industrial Sensors"],
    leadTime: "14-21 days",
    tags: ["commercial", "cloud", "cellular", "enterprise", "certified"],
    keyFeatures: ["Cloud Integration", "Enterprise Grade", "Over-the-Air Updates", "Fleet Management"]
  }
]

// ADDITIONAL SBC BOARDS - New Brands
const additionalSBCBoards: DevelopmentBoard[] = [
  // Radxa ROCK Series
  {
    id: "radxa-rock-5b",
    name: "Radxa ROCK 5 Model B",
    description: "Powerful Rockchip RK3588 SBC with excellent performance, M.2 support, and strong community",
    category: "sbc",
    subcategory: "radxa",
    price: 525000,
    studentPrice: 446250,
    image: "/images/boards/radxa-rock-5b.jpg",
    inStock: true,
    stockLevel: 18,
    rating: 4.7,
    reviews: 94,
    specifications: {
      "SoC": "Rockchip RK3588",
      "CPU": "8-core (4x A76 + 4x A55)",
      "GPU": "Mali-G610 MP4",
      "RAM": "4GB/8GB/16GB LPDDR4X",
      "Storage": "eMMC + microSD + M.2 NVMe",
      "Ethernet": "Gigabit",
      "USB": "4x USB 3.0 + 2x USB 2.0",
      "Display": "2x HDMI 2.1 + 2x MIPI DSI"
    },
    compatibility: ["Ubuntu", "Debian", "Android", "Armbian"],
    projects: ["High-Performance Computing", "4K Media Centers", "Development Workstation", "AI Projects"],
    leadTime: "12-16 days",
    tags: ["high-performance", "rockchip", "nvme", "4k", "server"],
    keyFeatures: ["RK3588 Performance", "M.2 NVMe Support", "Dual HDMI 2.1", "Strong Community"]
  },
  // Banana Pi
  {
    id: "banana-pi-m7",
    name: "Banana Pi BPI-M7",
    description: "Latest from Banana Pi with modern features and good price-performance ratio",
    category: "sbc",
    subcategory: "banana-pi",
    price: 400000,
    studentPrice: 340000,
    image: "/images/boards/banana-pi-m7.jpg",
    inStock: true,
    stockLevel: 22,
    rating: 4.5,
    reviews: 76,
    specifications: {
      "SoC": "Rockchip RK3588",
      "CPU": "8-core ARM",
      "RAM": "4GB/8GB LPDDR4X",
      "Storage": "eMMC + microSD",
      "Ethernet": "Gigabit",
      "USB": "Multiple USB ports",
      "Display": "HDMI + MIPI",
      "WiFi": "802.11ac + Bluetooth"
    },
    compatibility: ["Ubuntu", "Debian", "Android", "OpenWRT"],
    projects: ["Media Centers", "Home Servers", "Development", "IoT Gateway"],
    leadTime: "10-14 days",
    tags: ["banana-pi", "affordable", "multimedia", "gateway", "learning"],
    keyFeatures: ["Good Price-Performance", "Multiple OS Support", "Multimedia Capable", "GPIO Rich"]
  },
  // ODROID
  {
    id: "odroid-m1",
    name: "ODROID-M1",
    description: "Hardkernel's powerful SBC with RK3568B2, excellent for NAS and server applications",
    category: "sbc",
    subcategory: "odroid",
    price: 575000,
    studentPrice: 488750,
    image: "/images/boards/odroid-m1.jpg",
    inStock: true,
    stockLevel: 12,
    rating: 4.6,
    reviews: 58,
    specifications: {
      "SoC": "Rockchip RK3568B2",
      "CPU": "4-core ARM Cortex-A55",
      "RAM": "4GB/8GB LPDDR4",
      "Storage": "eMMC + microSD + M.2 SATA",
      "Ethernet": "Gigabit",
      "USB": "4x USB 3.0",
      "Display": "HDMI 2.0",
      "Power": "12V DC"
    },
    compatibility: ["Ubuntu", "Android", "Hardkernel OS"],
    projects: ["Network Attached Storage", "Home Server", "Media Server", "Development Platform"],
    leadTime: "14-18 days",
    tags: ["odroid", "nas", "server", "m2-sata", "industrial"],
    keyFeatures: ["M.2 SATA Support", "Server Optimized", "Robust Design", "Good Cooling"]
  }
]

// AI & EDGE COMPUTING BOARDS - Expanded
const expandedAiSpecialtyBoards: DevelopmentBoard[] = [
  {
    id: "nvidia-jetson-orin-nano",
    name: "NVIDIA Jetson Orin Nano (Dev Kit)",
    description: "The entry point to the industry-leading platform for Edge AI and Robotics.",
    category: "ai-specialty",
    subcategory: "nvidia-jetson",
    price: 2750000,
    studentPrice: 2337500,
    image: "/images/boards/nvidia-jetson-orin-nano.jpg",
    inStock: true,
    stockLevel: 3,
    rating: 4.9,
    reviews: 45,
    overview: {
      processor: "6-core ARM Cortex-A78AE v8.2 64-bit CPU",
      memory: "8GB 128-bit LPDDR5 RAM",
      connectivity: "Gigabit Ethernet (requires expansion for Wi-Fi/BT)",
      keyFeatures: "Delivers up to 40 TOPS of AI performance, DisplayPort 1.2 output, multiple MIPI CSI camera connectors, M.2 M-Key for NVMe.",
      bestFor: "Developing next-generation AI-powered robots, smart drones, and intelligent camera systems."
    },
    specifications: {
      "SoC": "NVIDIA Orin (6-core ARM Cortex-A78AE)",
      "GPU": "1024-core NVIDIA Ampere",
      "AI Performance": "40 TOPS",
      "RAM": "8GB LPDDR5",
      "Storage": "microSD + M.2 NVMe",
      "Ethernet": "Gigabit",
      "USB": "4x USB 3.2 + 1x USB-C",
      "Display": "HDMI + 2x MIPI DSI"
    },
    compatibility: ["JetPack SDK", "Ubuntu", "NVIDIA Container Runtime"],
    projects: ["Autonomous Vehicles", "Smart Cameras", "Robotics", "Industrial AI"],
    leadTime: "21-30 days",
    tags: ["nvidia", "jetson", "gpu", "autonomous", "robotics"]
  },
  {
    id: "microsoft-azure-percept-dk",
    name: "Microsoft Azure Percept DK",
    description: "Vision and audio AI kit deeply integrated with Azure cloud services for commercial solution prototyping",
    category: "ai-specialty",
    subcategory: "microsoft-azure",
    price: 2000000,
    studentPrice: 1700000,
    image: "/images/boards/azure-percept-dk.jpg",
    inStock: true,
    stockLevel: 2,
    rating: 4.5,
    reviews: 23,
    specifications: {
      "SoC": "NXP i.MX8M",
      "AI Accelerator": "Intel Movidius Myriad X VPU",
      "RAM": "4GB LPDDR4",
      "Storage": "16GB eMMC",
      "Connectivity": "Wi-Fi, Bluetooth, Ethernet",
      "Camera": "5MP RGB camera",
      "Audio": "4-mic circular array"
    },
    compatibility: ["Azure IoT Edge", "Azure ML", "Custom Vision"],
    projects: ["Commercial AI Solutions", "Smart Retail", "Industrial Inspection", "Voice Assistants"],
    leadTime: "30-45 days",
    tags: ["microsoft", "azure", "commercial", "vision", "voice"],
    keyFeatures: ["Azure Cloud Integration", "Professional Vision AI", "4-Mic Array", "Commercial Grade"]
  },
  {
    id: "sipeed-maix-bit",
    name: "Sipeed MAIX BIT (K210)",
    description: "Affordable RISC-V based AI board with built-in neural network accelerator for learning AI/ML",
    category: "ai-specialty",
    subcategory: "sipeed",
    price: 125000,
    studentPrice: 106250,
    image: "/images/boards/sipeed-maix-bit.jpg",
    inStock: true,
    stockLevel: 35,
    rating: 4.4,
    reviews: 127,
    specifications: {
      "SoC": "Kendryte K210 (RISC-V)",
      "CPU": "Dual-core 64-bit RISC-V",
      "AI Accelerator": "KPU Neural Network Processor",
      "RAM": "8MB SRAM",
      "Storage": "16MB Flash + microSD",
      "Camera": "OV2640 2MP",
      "Display": "2.4 inch TFT"
    },
    compatibility: ["MaixPy (MicroPython)", "Kendryte SDK", "Arduino IDE"],
    projects: ["AI Learning", "Computer Vision", "Voice Recognition", "Object Detection"],
    leadTime: "7-10 days",
    tags: ["risc-v", "ai-learning", "affordable", "camera", "educational"],
    keyFeatures: ["RISC-V Architecture", "Built-in AI Accelerator", "Camera & Display", "MicroPython"]
  }
]

// FPGA & ADVANCED BOARDS
const fpgaAdvancedBoards: DevelopmentBoard[] = [
  {
    id: "digilent-arty-a7",
    name: "Digilent Arty A7",
    description: "FPGA development board for designing custom digital logic circuits that run in parallel at high speed",
    category: "fpga-advanced",
    subcategory: "digilent",
    price: 1050000,
    studentPrice: 892500,
    image: "/images/boards/digilent-arty-a7.jpg",
    inStock: true,
    stockLevel: 4,
    rating: 4.7,
    reviews: 56,
    specifications: {
      "FPGA": "Xilinx Artix-7 XC7A35T",
      "Logic Cells": "33,280",
      "Block RAM": "1,800 Kb",
      "DSP Slices": "90",
      "I/O": "48 I/O pins",
      "Memory": "256MB DDR3L",
      "Ethernet": "10/100 Ethernet"
    },
    compatibility: ["Vivado Design Suite", "Vitis", "VHDL", "Verilog"],
    projects: ["Digital Signal Processing", "Custom Logic Design", "High-Speed Computing", "Retro Computer Emulation"],
    leadTime: "21-30 days",
    tags: ["fpga", "xilinx", "custom-logic", "high-speed", "professional"],
    keyFeatures: ["Reconfigurable Hardware", "High-Speed Logic", "Pmod Ecosystem", "Professional Tools"]
  },
  {
    id: "terasic-de10-nano",
    name: "Terasic DE10-Nano",
    description: "Popular FPGA board combining Cyclone V FPGA with dual-core ARM processor, favorite for retro gaming",
    category: "fpga-advanced",
    subcategory: "terasic",
    price: 1100000,
    studentPrice: 935000,
    image: "/images/boards/terasic-de10-nano.jpg",
    inStock: true,
    stockLevel: 3,
    rating: 4.8,
    reviews: 78,
    specifications: {
      "FPGA": "Intel Cyclone V SE 5CSEBA6U23I7",
      "ARM Processor": "Dual-core ARM Cortex-A9",
      "Logic Elements": "110,000",
      "Memory": "1GB DDR3",
      "Storage": "microSD",
      "I/O": "40-pin GPIO header",
      "HDMI": "HDMI output"
    },
    compatibility: ["Quartus Prime", "Linux", "MiSTer FPGA", "OpenCores"],
    projects: ["Retro Gaming Emulation", "Soft Processors", "Custom Accelerators", "Signal Processing"],
    leadTime: "21-30 days",
    tags: ["fpga", "intel", "arm-fpga", "mister", "emulation"],
    keyFeatures: ["ARM + FPGA Combo", "MiSTer Compatible", "Retro Gaming Ready", "Hybrid Processing"]
  },
  {
    id: "sipeed-lichee-pi-4a",
    name: "Sipeed Lichee Pi 4A",
    description: "Powerful Linux-capable RISC-V SBC showcasing the open-source architecture's potential",
    category: "fpga-advanced",
    subcategory: "risc-v",
    price: 290000,
    studentPrice: 246500,
    image: "/images/boards/sipeed-lichee-pi-4a.jpg",
    inStock: true,
    stockLevel: 8,
    rating: 4.3,
    reviews: 42,
    specifications: {
      "SoC": "TH1520 (Quad-core RISC-V)",
      "CPU": "4x C910 cores @ 2.0GHz",
      "GPU": "IMG BXE-4-32",
      "RAM": "4GB/8GB/16GB LPDDR4X",
      "Storage": "eMMC + microSD",
      "Ethernet": "Gigabit",
      "USB": "4x USB 3.0"
    },
    compatibility: ["OpenEuler", "Debian", "Ubuntu", "Fedora"],
    projects: ["RISC-V Development", "Open Source Computing", "Education", "Research"],
    leadTime: "14-21 days",
    tags: ["risc-v", "open-source", "linux", "research", "alternative"],
    keyFeatures: ["Open RISC-V Architecture", "Linux Capable", "High Performance", "Open Source Ecosystem"]
  }
]

// Merge all boards
export const allDevelopmentBoards: DevelopmentBoard[] = [
  ...arduinoBoards,
  ...sparkfunBoards,
  ...espBoards,
  ...additionalMicrocontrollerBoards,
  ...orangePiBoards,
  ...beagleBoardBoards,
  ...additionalSBCBoards,
  {
    id: "google-coral-dev-board-mini",
    name: "Google Coral Dev Board Mini",
    description: "A compact board for fast, efficient, and private on-device AI.",
    category: "ai-specialty",
    subcategory: "google-coral",
    price: 625000,
    studentPrice: 531250,
    image: "/images/boards/coral-dev-board-mini.jpg",
    inStock: true,
    stockLevel: 6,
    rating: 4.8,
    reviews: 34,
    overview: {
      processor: "MediaTek 8167s SoC (4x ARM Cortex-A35), Google Edge TPU co-processor",
      memory: "2GB LPDDR3 RAM, 8GB eMMC",
      connectivity: "Wi-Fi 5 (802.11ac), Bluetooth 5.0",
      keyFeatures: "The Google Edge TPU co-processor accelerates TensorFlow Lite models with very low power consumption. Onboard microphone and speaker terminals.",
      bestFor: "Prototyping products with on-device computer vision (object detection, image classification) and audio processing in a small form factor."
    },
    specifications: {
      "SoC": "MediaTek 8167s",
      "CPU": "4-core ARM Cortex-A35",
      "AI Accelerator": "Google Edge TPU",
      "RAM": "2GB LPDDR3",
      "Storage": "8GB eMMC + microSD",
      "Ethernet": "Gigabit",
      "USB": "2x USB 3.0 + 1x USB-C",
      "Camera": "MIPI CSI-2",
      "WiFi": "802.11ac + Bluetooth 4.2",
      "AI Performance": "4 TOPS"
    },
    compatibility: ["Mendel Linux", "TensorFlow Lite", "Edge TPU Runtime"],
    projects: ["AI Vision", "Real-time Inference", "Smart Cameras", "Voice Recognition"],
    leadTime: "14-21 days",
    tags: ["ai", "edge-tpu", "tensorflow", "vision", "google"]
  },
  ...expandedAiSpecialtyBoards,
  ...fpgaAdvancedBoards,
  {
    id: "stm32-nucleo-f446re",
    name: "STM32 Nucleo F446RE",
    description: "Affordable professional development board from ST, bridge from hobbyist to industrial-grade products",
    category: "microcontroller",
    subcategory: "stm32-nucleo",
    price: 140000,
    studentPrice: 119000,
    image: "/images/boards/stm32-nucleo-f446re.jpg",
    inStock: true,
    stockLevel: 42,
    rating: 4.6,
    reviews: 167,
    specifications: {
      "Microcontroller": "STM32F446RET6",
      "Architecture": "ARM Cortex-M4",
      "Operating Voltage": "3.3V",
      "Flash Memory": "512KB",
      "SRAM": "128KB",
      "Clock Speed": "180MHz",
      "GPIO": "50+ pins",
      "Timers": "Multiple timers",
      "Communication": "UART, SPI, I2C, CAN",
      "USB": "USB 2.0",
      "Debugger": "ST-LINK/V2-1"
    },
    compatibility: ["STM32CubeIDE", "Arduino IDE", "PlatformIO", "Mbed OS"],
    projects: ["Motor Control", "Industrial Sensors", "Communication Protocols", "Real-time Processing"],
    leadTime: "5-7 days",
    tags: ["professional", "industrial", "debugger", "protocols", "robust"],
    keyFeatures: ["Built-in Debugger", "Professional Grade", "Rich Peripherals", "Industrial Standard"]
  }
]

// Categories for filtering
export const categories = [
  { 
    id: "microcontroller", 
    name: "Microcontroller Boards", 
    count: arduinoBoards.length + sparkfunBoards.length + espBoards.length + additionalMicrocontrollerBoards.length + 1 // +1 for STM32 Nucleo
  },
  { 
    id: "sbc", 
    name: "Single Board Computers", 
    count: orangePiBoards.length + beagleBoardBoards.length + additionalSBCBoards.length
  },
  { 
    id: "ai-specialty", 
    name: "AI & Specialty Boards", 
    count: expandedAiSpecialtyBoards.length + 1 // +1 for Google Coral
  },
  { 
    id: "fpga-advanced", 
    name: "FPGA & Advanced Boards", 
    count: fpgaAdvancedBoards.length 
  }
]

export const subcategories = [
  { id: "arduino", name: "Arduino Ecosystem", parentCategory: "microcontroller" },
  { id: "sparkfun", name: "SparkFun", parentCategory: "microcontroller" },
  { id: "esp", name: "ESP (Espressif)", parentCategory: "microcontroller" },
  { id: "stm32", name: "STM32", parentCategory: "microcontroller" },
  { id: "stm32-nucleo", name: "STM32 Nucleo", parentCategory: "microcontroller" },
  { id: "seeed-xiao", name: "Seeed XIAO", parentCategory: "microcontroller" },
  { id: "adafruit-feather", name: "Adafruit Feather", parentCategory: "microcontroller" },
  { id: "particle", name: "Particle", parentCategory: "microcontroller" },
  { id: "orange-pi", name: "Orange Pi", parentCategory: "sbc" },
  { id: "beagleboard", name: "BeagleBoard", parentCategory: "sbc" },
  { id: "radxa", name: "Radxa ROCK", parentCategory: "sbc" },
  { id: "banana-pi", name: "Banana Pi", parentCategory: "sbc" },
  { id: "odroid", name: "ODROID", parentCategory: "sbc" },
  { id: "google-coral", name: "Google Coral", parentCategory: "ai-specialty" },
  { id: "nvidia-jetson", name: "NVIDIA Jetson", parentCategory: "ai-specialty" },
  { id: "microsoft-azure", name: "Microsoft Azure", parentCategory: "ai-specialty" },
  { id: "sipeed", name: "Sipeed", parentCategory: "ai-specialty" },
  { id: "digilent", name: "Digilent", parentCategory: "fpga-advanced" },
  { id: "terasic", name: "Terasic", parentCategory: "fpga-advanced" },
  { id: "risc-v", name: "RISC-V", parentCategory: "fpga-advanced" }
] 