export interface MCUChip {
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
  specifications: Record<string, string>
  compatibility: string[]
  projects: string[]
  supplier: string
  leadTime: string
  tags: string[]
  overview?: {
    type: string
    keySpecs: string
    applications: string
    keyFeatures: string
    bestFor: string
  }
}

export const allMCUChips: MCUChip[] = [
  // 8-bit AVR Microcontrollers
  {
    id: "mcu-atmega328p",
    name: "ATmega328P",
    description: "The legendary heart of the Arduino Uno - 8-bit AVR RISC microcontroller",
    category: "mcu-chips",
    subcategory: "8bit-avr",
    price: 18500,
    studentPrice: 15725,
    image: "/images/chips/atmega328p.jpg",
    inStock: true,
    stockLevel: 150,
    rating: 4.9,
    reviews: 456,
    specifications: {
      "Architecture": "8-bit AVR RISC",
      "Clock Speed": "Up to 20 MHz",
      "Flash Memory": "32KB",
      "SRAM": "2KB",
      "EEPROM": "1KB",
      "ADC Channels": "6x 10-bit",
      "PWM Channels": "6",
      "Package Options": "28-pin DIP, TQFP, QFN"
    },
    compatibility: ["Arduino Uno", "Custom PCBs", "Breadboard prototyping", "Educational kits"],
    projects: ["Custom Arduino boards", "Sensor nodes", "Motor control", "Educational projects"],
    supplier: "Microchip Technology",
    leadTime: "In Stock",
    tags: ["atmega", "avr", "8bit", "dip", "arduino-compatible"],
    overview: {
      type: "8-bit AVR RISC Microcontroller",
      keySpecs: "20 MHz clock, 32KB Flash, 2KB SRAM, 1KB EEPROM, 6x 10-bit ADC, 28-pin DIP/TQFP/QFN",
      applications: "Custom Arduino-compatible boards, standalone sensor nodes, simple motor control, educational projects",
      keyFeatures: "picoPower® technology for low power consumption, straightforward architecture, massive community support, Arduino ecosystem compatibility",
      bestFor: "Learning embedded programming, creating custom Arduino boards, breadboard prototyping, and educational electronics projects"
    }
  },

  // ARM Cortex-M Ultra-Low-Power
  {
    id: "mcu-apollo3-blue",
    name: "Ambiq Apollo3 Blue",
    description: "Industry leader in energy efficiency with Bluetooth 5.0 LE",
    category: "mcu-chips",
    subcategory: "arm-cortex-m4",
    price: 185000,
    studentPrice: 157250,
    image: "/images/chips/apollo3-blue.jpg",
    inStock: true,
    stockLevel: 45,
    rating: 4.8,
    reviews: 89,
    specifications: {
      "Architecture": "ARM Cortex-M4 with FPU",
      "Clock Speed": "Up to 48 MHz (96 MHz burst)",
      "Flash Memory": "1MB",
      "SRAM": "384KB",
      "Connectivity": "Bluetooth 5.0 Low Energy",
      "ADC": "14-bit",
      "Power": "<6µA/MHz active consumption",
      "Package": "BGA, WLCSP"
    },
    compatibility: ["SparkFun Edge", "Wearable devices", "Voice applications", "Ultra-low power IoT"],
    projects: ["Wearable health trackers", "Voice-controlled remotes", "Wireless sensors", "Battery-powered IoT"],
    supplier: "Ambiq Micro",
    leadTime: "2-3 weeks",
    tags: ["ambiq", "apollo3", "ultra-low-power", "bluetooth", "wearable"],
    overview: {
      type: "Ultra-Low-Power ARM Cortex-M4 with Bluetooth LE",
      keySpecs: "48 MHz (96 MHz burst), 1MB Flash, 384KB SRAM, Bluetooth 5.0, <6µA/MHz power consumption",
      applications: "Wearable health and fitness trackers, voice-controlled remotes, wireless sensor networks, battery-powered devices",
      keyFeatures: "SPOT™ Subthreshold Power Technology, integrated Bluetooth 5.0 radio, 14-bit ADC, PDM digital microphone interface, extreme low power consumption",
      bestFor: "Projects where battery life is critical, wearable electronics, voice recognition devices, and any application requiring months or years of battery operation"
    }
  },

  {
    id: "mcu-nrf52840",
    name: "Nordic nRF52840",
    description: "Premier MCU for advanced multi-protocol wireless connectivity",
    category: "mcu-chips",
    subcategory: "arm-cortex-m4",
    price: 165000,
    studentPrice: 140250,
    image: "/images/chips/nrf52840.jpg",
    inStock: true,
    stockLevel: 75,
    rating: 4.9,
    reviews: 234,
    specifications: {
      "Architecture": "ARM Cortex-M4 with FPU",
      "Clock Speed": "64 MHz",
      "Flash Memory": "1MB",
      "RAM": "256KB",
      "Connectivity": "Bluetooth 5, Thread, Zigbee, ANT+, 802.15.4",
      "GPIO": "48 pins",
      "ADC": "12-bit",
      "USB": "Full-Speed",
      "Package": "aQFN73"
    },
    compatibility: ["Adafruit boards", "Matter devices", "Thread networks", "Zigbee systems"],
    projects: ["Advanced wearables", "IoT sensor networks", "Smart-home gateways", "Matter devices"],
    supplier: "Nordic Semiconductor",
    leadTime: "In Stock",
    tags: ["nordic", "nrf52840", "bluetooth5", "thread", "zigbee", "matter"],
    overview: {
      type: "Multi-Protocol Wireless ARM Cortex-M4 SoC",
      keySpecs: "64 MHz ARM Cortex-M4, 1MB Flash, 256KB RAM, Bluetooth 5/Thread/Zigbee/ANT+, 48 GPIO, USB",
      applications: "Advanced wearables, complex IoT sensor networks, smart-home gateways compatible with Matter, commercial connected products",
      keyFeatures: "Multi-protocol 2.4GHz radio, ARM TrustZone® CryptoCell-310 security, NFC-A tag interface, concurrent protocol support, very low power consumption",
      bestFor: "Creating robust, commercial-grade connected devices that need multiple wireless protocols, smart-home products, and advanced wearable technology"
    }
  },

  // Mainstream ARM Cortex-M
  {
    id: "mcu-renesas-ra4m1",
    name: "Renesas RA4M1",
    description: "Modern MCU powering the new Arduino UNO R4 generation",
    category: "mcu-chips",
    subcategory: "arm-cortex-m4",
    price: 85000,
    studentPrice: 72250,
    image: "/images/chips/renesas-ra4m1.jpg",
    inStock: true,
    stockLevel: 120,
    rating: 4.7,
    reviews: 156,
    specifications: {
      "Architecture": "ARM Cortex-M4 with FPU",
      "Clock Speed": "Up to 48 MHz",
      "Flash Memory": "256KB",
      "SRAM": "32KB",
      "ADC": "14-bit",
      "DAC": "12-bit",
      "Special Features": "Capacitive Touch Sensing Unit (CTSU), Segment LCD Controller",
      "Connectivity": "CAN bus, USB Full-Speed",
      "Package": "LQFP, QFN (40-100 pins)"
    },
    compatibility: ["Arduino UNO R4", "HMI applications", "Industrial control", "Touch interfaces"],
    projects: ["HMI devices", "Industrial control panels", "Home appliances", "Security systems"],
    supplier: "Renesas Electronics",
    leadTime: "In Stock",
    tags: ["renesas", "ra4m1", "arduino-r4", "hmi", "industrial"],
    overview: {
      type: "Feature-Rich ARM Cortex-M4 for HMI Applications",
      keySpecs: "48 MHz ARM Cortex-M4, 256KB Flash, 32KB SRAM, Capacitive Touch Sensing, LCD Controller, CAN bus",
      applications: "Human-machine interface devices, industrial control panels, home appliances, security systems, touch-enabled products",
      keyFeatures: "Capacitive Touch Sensing Unit (CTSU), Segment LCD Controller, built-in security features, CAN bus support, highly efficient low-power operation",
      bestFor: "Projects requiring touch interfaces, LCD displays, industrial control applications, and modern Arduino UNO R4 replacement designs"
    }
  },

  {
    id: "mcu-stm32f446re",
    name: "STM32F446RE",
    description: "High-performance ARM Cortex-M4 with advanced processing capabilities",
    category: "mcu-chips",
    subcategory: "arm-cortex-m4",
    price: 125000,
    studentPrice: 106250,
    image: "/images/chips/stm32f446re.jpg",
    inStock: true,
    stockLevel: 85,
    rating: 4.8,
    reviews: 298,
    specifications: {
      "Architecture": "ARM Cortex-M4 with FPU",
      "Clock Speed": "Up to 180 MHz",
      "Flash Memory": "512KB",
      "SRAM": "128KB",
      "ADC": "3x 12-bit",
      "DAC": "2x 12-bit",
      "Timers": "17 timers",
      "Connectivity": "USB OTG, 2x CAN bus, Camera Interface",
      "Package": "LQFP64"
    },
    compatibility: ["STM32 ecosystem", "ARM mbed", "FreeRTOS", "Industrial applications"],
    projects: ["Motor drive control", "Medical equipment", "Industrial automation", "Consumer electronics"],
    supplier: "STMicroelectronics",
    leadTime: "In Stock",
    tags: ["stm32", "stmicroelectronics", "high-performance", "motor-control", "industrial"],
    overview: {
      type: "High-Performance ARM Cortex-M4 Microcontroller",
      keySpecs: "180 MHz ARM Cortex-M4, 512KB Flash, 128KB SRAM, 3x 12-bit ADC, 17 timers, USB OTG, Camera Interface",
      applications: "Motor drive and application control, medical equipment, industrial automation, drones, and advanced consumer electronics",
      keyFeatures: "ART Accelerator™ for zero-wait state Flash execution, Chrom-ART Accelerator™ for graphics, floating point unit, advanced timer system",
      bestFor: "Demanding applications requiring high computational power, complex control systems, signal processing, and real-time performance"
    }
  },

  {
    id: "mcu-atsamd51j19",
    name: "Microchip ATSAMD51J19",
    description: "Powerful MCU for high-speed hobbyist and professional projects",
    category: "mcu-chips",
    subcategory: "arm-cortex-m4",
    price: 95000,
    studentPrice: 80750,
    image: "/images/chips/atsamd51j19.jpg",
    inStock: true,
    stockLevel: 65,
    rating: 4.7,
    reviews: 187,
    specifications: {
      "Architecture": "ARM Cortex-M4 with FPU",
      "Clock Speed": "Up to 120 MHz",
      "Flash Memory": "512KB",
      "SRAM": "192KB",
      "ADC": "Dual 12-bit",
      "DAC": "12-bit",
      "Timers": "32-bit",
      "Connectivity": "USB OTG, I2S",
      "Special Features": "Parallel Capture Controller, QSPI",
      "Package": "TQFP, QFN (64 pins)"
    },
    compatibility: ["Adafruit M4 boards", "CircuitPython", "Arduino IDE", "High-speed applications"],
    projects: ["High-speed data logging", "Digital audio processing", "Robotics", "CircuitPython projects"],
    supplier: "Microchip Technology",
    leadTime: "In Stock",
    tags: ["microchip", "atsamd51", "high-speed", "circuitpython", "audio"],
    overview: {
      type: "High-Speed ARM Cortex-M4 for Advanced Projects",
      keySpecs: "120 MHz ARM Cortex-M4, 512KB Flash, 192KB SRAM, Dual 12-bit ADC, USB OTG, I2S audio, Camera interface",
      applications: "High-speed data logging, digital audio processing and synthesis, robotics control, complex CircuitPython projects",
      keyFeatures: "Large memory for interpreted languages, Quad SPI interface, multiple SERCOM modules, Parallel Capture Controller for cameras, I2S for audio",
      bestFor: "Projects requiring more computational horsepower and memory, running CircuitPython at high speed, audio processing, and complex robotics applications"
    }
  },

  {
    id: "mcu-rp2040",
    name: "Raspberry Pi RP2040",
    description: "Dual-core MCU with unique Programmable I/O (PIO) capabilities",
    category: "mcu-chips",
    subcategory: "arm-cortex-m0plus",
    price: 45000,
    studentPrice: 38250,
    image: "/images/chips/rp2040.jpg",
    inStock: true,
    stockLevel: 200,
    rating: 4.8,
    reviews: 445,
    specifications: {
      "Architecture": "Dual-Core ARM Cortex-M0+",
      "Clock Speed": "Up to 133 MHz",
      "SRAM": "264KB",
      "External Flash": "Up to 16MB support",
      "GPIO": "30 pins",
      "ADC": "4x 12-bit",
      "PWM": "16 channels",
      "Special Features": "8x PIO state machines",
      "Package": "QFN"
    },
    compatibility: ["Raspberry Pi Pico", "Arduino IDE", "MicroPython", "C/C++ SDK"],
    projects: ["Robotics", "TinyML", "Audio processing", "Retro gaming", "Custom interfaces"],
    supplier: "Raspberry Pi Foundation",
    leadTime: "In Stock",
    tags: ["raspberry-pi", "rp2040", "dual-core", "pio", "tinyml"],
    overview: {
      type: "Dual-Core ARM Cortex-M0+ with Programmable I/O",
      keySpecs: "Dual 133 MHz ARM Cortex-M0+, 264KB SRAM, 8x PIO state machines, 30 GPIO, 4x 12-bit ADC",
      applications: "Robotics control, TinyML machine learning, audio processing, retro gaming emulation, custom digital interfaces",
      keyFeatures: "8x Programmable I/O (PIO) state machines for custom peripherals, dual-core processing, large on-chip RAM, excellent C/C++ and MicroPython support",
      bestFor: "Projects requiring custom hardware interfaces, dual-core processing, machine learning on the edge, and applications where PIO can replace external chips"
    }
  },

  {
    id: "mcu-atsamd21g18",
    name: "Microchip ATSAMD21G18",
    description: "Versatile low-power MCU popular in the maker community",
    category: "mcu-chips",
    subcategory: "arm-cortex-m0plus",
    price: 38000,
    studentPrice: 32300,
    image: "/images/chips/atsamd21g18.jpg",
    inStock: true,
    stockLevel: 180,
    rating: 4.6,
    reviews: 312,
    specifications: {
      "Architecture": "ARM Cortex-M0+",
      "Clock Speed": "Up to 48 MHz",
      "Flash Memory": "256KB",
      "SRAM": "32KB",
      "ADC": "20x 12-bit channels",
      "DAC": "10-bit",
      "Timers": "8x Timer/Counters",
      "USB": "Full-Speed Host & Device",
      "Package": "TQFP48"
    },
    compatibility: ["Adafruit Feather M0", "Arduino Zero", "SERCOM applications", "USB projects"],
    projects: ["IoT sensor hubs", "Portable devices", "Interactive controllers", "USB devices"],
    supplier: "Microchip Technology",
    leadTime: "In Stock",
    tags: ["microchip", "atsamd21", "low-power", "usb", "iot"],
    overview: {
      type: "Versatile Low-Power ARM Cortex-M0+ Microcontroller",
      keySpecs: "48 MHz ARM Cortex-M0+, 256KB Flash, 32KB SRAM, 20x 12-bit ADC, USB Host/Device, SERCOM modules",
      applications: "IoT sensor hubs, portable devices, interactive controllers, USB-enabled projects, low-power applications",
      keyFeatures: "Multiple configurable SERCOM modules (I2C/SPI/UART), Peripheral Touch Controller (PTC), native USB support, low power consumption",
      bestFor: "Projects requiring native USB functionality, touch interfaces, versatile serial communication, and significant step up from 8-bit microcontrollers"
    }
  },

  // Wi-Fi & Bluetooth SoCs
  {
    id: "soc-esp32-s3",
    name: "ESP32-S3",
    description: "Dual-core SoC with AI acceleration and rich peripherals",
    category: "mcu-chips",
    subcategory: "wifi-bluetooth-soc",
    price: 95000,
    studentPrice: 80750,
    image: "/images/chips/esp32-s3.jpg",
    inStock: true,
    stockLevel: 145,
    rating: 4.9,
    reviews: 567,
    specifications: {
      "Architecture": "Dual-Core 32-bit Xtensa LX7",
      "Clock Speed": "Up to 240 MHz",
      "SRAM": "512KB",
      "External Memory": "PSRAM support",
      "Connectivity": "Wi-Fi 4 (802.11 b/g/n), Bluetooth 5 LE",
      "GPIO": "45 pins",
      "ADC": "20 channels",
      "Special Features": "AI/ML vector instructions, USB OTG",
      "Interfaces": "LCD, Camera",
      "Package": "QFN"
    },
    compatibility: ["ESP-IDF", "Arduino IDE", "MicroPython", "AI frameworks"],
    projects: ["Edge AI", "Voice recognition", "IoT gateways", "HMI devices", "Smart-home automation"],
    supplier: "Espressif Systems",
    leadTime: "In Stock",
    tags: ["espressif", "esp32-s3", "ai", "wifi", "bluetooth", "dual-core"],
    overview: {
      type: "AI-Enhanced Dual-Core Wi-Fi + Bluetooth SoC",
      keySpecs: "Dual 240 MHz Xtensa LX7, 512KB SRAM, Wi-Fi 4 + Bluetooth 5, AI vector instructions, 45 GPIO, USB OTG",
      applications: "Edge AI applications (voice recognition, simple vision), IoT gateways, HMI devices, smart-home controllers, interactive dashboards",
      keyFeatures: "AI/ML vector instructions for machine learning acceleration, extensive I/O capabilities, advanced security features (secure boot, flash encryption), LCD and camera interfaces",
      bestFor: "Projects requiring AI processing on the edge, complex IoT applications, voice control, interactive displays, and applications needing both Wi-Fi and Bluetooth connectivity"
    }
  },

  {
    id: "soc-esp8266ex",
    name: "ESP8266EX",
    description: "Original ultra-low-cost Wi-Fi MCU that started the IoT revolution",
    category: "mcu-chips",
    subcategory: "wifi-soc",
    price: 25000,
    studentPrice: 21250,
    image: "/images/chips/esp8266ex.jpg",
    inStock: true,
    stockLevel: 300,
    rating: 4.7,
    reviews: 789,
    specifications: {
      "Architecture": "32-bit Tensilica L106",
      "Clock Speed": "80 MHz (160 MHz mode)",
      "RAM": "~64KB",
      "External Flash": "Required for program storage",
      "Connectivity": "Wi-Fi 4 (802.11 b/g/n)",
      "GPIO": "17 pins",
      "ADC": "1x 10-bit",
      "Protocols": "TCP/IP stack integrated",
      "Package": "QFN"
    },
    compatibility: ["Arduino IDE", "ESP8266 SDK", "MicroPython", "NodeMCU"],
    projects: ["Wi-Fi sensors", "Smart plugs", "Remote controls", "Cost-sensitive IoT"],
    supplier: "Espressif Systems",
    leadTime: "In Stock",
    tags: ["espressif", "esp8266", "wifi", "low-cost", "iot-revolution"],
    overview: {
      type: "Ultra-Low-Cost Wi-Fi System-on-Chip",
      keySpecs: "80 MHz Tensilica L106, ~64KB RAM, Wi-Fi 4, integrated TCP/IP stack, 17 GPIO, extremely low cost",
      applications: "Simple Wi-Fi-enabled sensors, smart plugs and switches, remote controls, cost-sensitive IoT nodes where Bluetooth isn't needed",
      keyFeatures: "Integrated Wi-Fi with full TCP/IP protocol stack, mature software ecosystem, extremely low cost, simple architecture for basic IoT",
      bestFor: "Budget-conscious IoT projects, simple Wi-Fi connectivity, rapid prototyping, and applications where the ESP8266's limitations aren't a concern"
    }
  },

  // RISC-V MCUs
  {
    id: "mcu-esp32-c6",
    name: "ESP32-C6",
    description: "Next-generation IoT chip with Wi-Fi 6, Bluetooth 5, and multi-protocol support",
    category: "mcu-chips",
    subcategory: "risc-v",
    price: 115000,
    studentPrice: 97750,
    image: "/images/chips/esp32-c6.jpg",
    inStock: true,
    stockLevel: 95,
    rating: 4.8,
    reviews: 134,
    specifications: {
      "Architecture": "High-performance 32-bit RISC-V single-core",
      "Clock Speed": "Up to 160 MHz",
      "SRAM": "512KB",
      "ROM": "320KB",
      "Connectivity": "Wi-Fi 6 (802.11ax), Bluetooth 5, Zigbee, Thread (802.15.4)",
      "GPIO": "22 pins",
      "ADC": "12-bit",
      "USB": "Serial/JTAG controller",
      "Package": "QFN"
    },
    compatibility: ["ESP-IDF", "Matter standard", "Thread networks", "Zigbee systems"],
    projects: ["Smart-home devices", "Industrial IoT", "Low-power AI", "Matter ecosystem"],
    supplier: "Espressif Systems",
    leadTime: "In Stock",
    tags: ["espressif", "esp32-c6", "risc-v", "wifi6", "matter", "thread"],
    overview: {
      type: "Next-Generation Multi-Protocol RISC-V IoT SoC",
      keySpecs: "160 MHz RISC-V, 512KB SRAM, Wi-Fi 6 + Bluetooth 5 + Zigbee + Thread, Matter support, 22 GPIO",
      applications: "Smart-home devices (lighting, switches, sensors), industrial IoT systems, low-power AI applications, Matter-compatible products",
      keyFeatures: "Wi-Fi 6 for improved network efficiency, multi-protocol radio supporting Matter ecosystem, RISC-V open architecture, low power consumption",
      bestFor: "Future-proof smart-home products, industrial IoT with multiple connectivity needs, and projects requiring Wi-Fi 6 performance improvements"
    }
  },

  {
    id: "mcu-gd32vf103",
    name: "GigaDevice GD32VF103",
    description: "First mainstream general-purpose RISC-V microcontroller",
    category: "mcu-chips",
    subcategory: "risc-v",
    price: 55000,
    studentPrice: 46750,
    image: "/images/chips/gd32vf103.jpg",
    inStock: true,
    stockLevel: 110,
    rating: 4.6,
    reviews: 98,
    specifications: {
      "Architecture": "32-bit RISC-V Bumblebee Core",
      "Clock Speed": "Up to 108 MHz",
      "Flash Memory": "Up to 128KB",
      "SRAM": "32KB",
      "ADC": "2x 12-bit",
      "DAC": "2x 12-bit",
      "Timers": "4x 16-bit",
      "Connectivity": "2x CAN bus, USB OTG",
      "Communication": "3x USART, 2x I2C, 3x SPI",
      "Package": "LQFP, QFN (36-100 pins)"
    },
    compatibility: ["RISC-V toolchain", "FreeRTOS", "Industrial applications", "CAN networks"],
    projects: ["Industrial control", "Motor drives", "Consumer equipment", "RISC-V exploration"],
    supplier: "GigaDevice Semiconductor",
    leadTime: "2-3 weeks",
    tags: ["gigadevice", "gd32vf103", "risc-v", "industrial", "can-bus"],
    overview: {
      type: "General-Purpose RISC-V Microcontroller",
      keySpecs: "108 MHz RISC-V Bumblebee Core, up to 128KB Flash, 32KB SRAM, 2x 12-bit ADC/DAC, 2x CAN bus",
      applications: "Industrial control systems, motor drives, consumer and handheld equipment, RISC-V architecture exploration and development",
      keyFeatures: "Tightly coupled interrupt controller (ECLIC) for fast response, dual CAN bus support, rich peripheral set, open RISC-V architecture",
      bestFor: "Industrial applications requiring CAN bus, developers exploring RISC-V architecture, and as a direct alternative to ARM Cortex-M3 based MCUs"
    }
  },

  // High-Performance SoCs
  {
    id: "soc-rk3588s",
    name: "Rockchip RK3588S",
    description: "Flagship 8-core SoC for AI, Edge Computing, and 8K Media",
    category: "mcu-chips",
    subcategory: "high-performance-soc",
    price: 850000,
    studentPrice: 722500,
    image: "/images/chips/rk3588s.jpg",
    inStock: true,
    stockLevel: 25,
    rating: 4.9,
    reviews: 45,
    specifications: {
      "Architecture": "8-core ARM DynamIQ (4x Cortex-A76 + 4x Cortex-A55)",
      "Clock Speed": "Up to 2.4 GHz",
      "GPU": "ARM Mali-G610 MP4",
      "NPU": "6 TOPS AI accelerator",
      "Memory Support": "Up to 32GB LPDDR5",
      "Video Decode": "8K@60fps (H.265/VP9)",
      "Video Encode": "8K@30fps (H.265/H.264)",
      "Display": "Multiple output support",
      "Package": "FCCSP BGA"
    },
    compatibility: ["Linux", "Android", "AI frameworks", "High-end SBCs"],
    projects: ["AI edge computing", "8K digital signage", "Multi-camera systems", "High-end SBCs"],
    supplier: "Rockchip Electronics",
    leadTime: "4-6 weeks",
    tags: ["rockchip", "rk3588s", "8k", "ai", "edge-computing", "mali-gpu"],
    overview: {
      type: "Flagship 8-Core AI-Enhanced Application Processor",
      keySpecs: "8-core ARM DynamIQ (4x A76 + 4x A55) up to 2.4 GHz, Mali-G610 GPU, 6 TOPS NPU, 8K video support",
      applications: "High-end single-board computers, AI edge computing gateways, advanced digital signage, multi-camera surveillance systems",
      keyFeatures: "Dedicated Neural Processing Unit with 6 TOPS performance, 8K@60fps video decoding, 8K@30fps encoding, powerful GPU for graphics workloads",
      bestFor: "Applications requiring massive computational power, AI workloads, 8K media processing, and advanced multimedia capabilities in edge computing scenarios"
    }
  },

  {
    id: "soc-allwinner-h618",
    name: "Allwinner H618",
    description: "Cost-effective quad-core SoC for Android TV boxes and smart displays",
    category: "mcu-chips",
    subcategory: "media-soc",
    price: 425000,
    studentPrice: 361250,
    image: "/images/chips/allwinner-h618.jpg",
    inStock: true,
    stockLevel: 55,
    rating: 4.5,
    reviews: 67,
    specifications: {
      "Architecture": "Quad-Core ARM Cortex-A53",
      "Clock Speed": "Up to 1.5 GHz",
      "GPU": "ARM Mali-G31 MP2",
      "Memory Support": "Up to 4GB DDR4",
      "Video Decode": "6K@30fps, 4K@60fps",
      "Connectivity": "Wi-Fi 6, 10/100M Ethernet",
      "Display": "4K output support",
      "Package": "BGA"
    },
    compatibility: ["Android TV", "Linux", "Media applications", "Smart displays"],
    projects: ["Android TV boxes", "Streaming players", "Digital signage", "Smart home hubs"],
    supplier: "Allwinner Technology",
    leadTime: "3-4 weeks",
    tags: ["allwinner", "h618", "android-tv", "6k-video", "streaming"],
    overview: {
      type: "Cost-Effective Quad-Core Media Processing SoC",
      keySpecs: "Quad-core ARM Cortex-A53 up to 1.5 GHz, Mali-G31 GPU, 6K@30fps video decode, Wi-Fi 6, up to 4GB DDR4",
      applications: "Android TV boxes, streaming media players, digital signage systems, smart home hubs, cost-effective media devices",
      keyFeatures: "6K@30fps video decoding capability, integrated Wi-Fi 6 support, Mali-G31 GPU for smooth graphics, good balance of performance and cost",
      bestFor: "Affordable media streaming devices, Android-based set-top boxes, digital signage where high-end performance isn't required, and smart display applications"
    }
  }
]
