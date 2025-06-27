export interface SensorModule {
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

// Environmental & Motion Sensors (50 Products)
const environmentalMotionSensors: SensorModule[] = [
  {
    id: "sens-hcsr04-001",
    name: "HC-SR04 Ultrasonic Distance Sensor",
    description: "Non-contact sensor for measuring distance from 2cm to 400cm with high accuracy",
    category: "sensors",
    subcategory: "distance",
    price: 5000,
    studentPrice: 4250,
    image: "/images/sensors/hc-sr04.jpg",
    inStock: true,
    stockLevel: 150,
    rating: 4.8,
    reviews: 234,
    overview: {
      type: "Ultrasonic Distance Sensor",
      keySpecs: "2cm-400cm range, 15° beam angle, 5V operation, trigger/echo interface",
      applications: "Obstacle avoidance, distance measurement, level sensing, robotics navigation",
      keyFeatures: "Non-contact measurement, high accuracy, easy to interface with microcontrollers",
      bestFor: "Robot cars, distance measurement projects, and automated systems"
    },
    specifications: {
      "Operating Voltage": "5V DC",
      "Operating Current": "15mA",
      "Measuring Range": "2cm - 400cm",
      "Accuracy": "±3mm",
      "Measuring Angle": "15 degrees",
      "Trigger Input Signal": "10µS TTL pulse",
      "Output Signal": "TTL pulse (38kHz)",
      "Dimensions": "45mm x 20mm x 15mm"
    },
    compatibility: ["Arduino", "ESP32", "Raspberry Pi", "STM32"],
    projects: ["Robot navigation", "Parking sensors", "Security systems", "Water level monitoring"],
    supplier: "TechHub Kampala",
    leadTime: "In Stock",
    tags: ["ultrasonic", "distance", "sensor", "hcsr04", "robotics"]
  },
  
  {
    id: "sens-pir-001", 
    name: "HC-SR501 PIR Motion Sensor",
    description: "Passive infrared sensor for detecting human movement with adjustable sensitivity",
    category: "sensors",
    subcategory: "motion",
    price: 6500,
    studentPrice: 5525,
    image: "/images/sensors/hc-sr501-pir.jpg",
    inStock: true,
    stockLevel: 120,
    rating: 4.7,
    reviews: 189,
    overview: {
      type: "Passive Infrared Motion Sensor",
      keySpecs: "3m-7m detection range, 120° detection angle, adjustable delay time",
      applications: "Security systems, automatic lighting, occupancy detection, energy saving",
      keyFeatures: "Low power consumption, adjustable sensitivity, relay output compatible",
      bestFor: "Home automation, security projects, and motion-activated devices"
    },
    specifications: {
      "Operating Voltage": "5V-20V DC",
      "Operating Current": "<50µA",
      "Detection Range": "3m - 7m (adjustable)",
      "Detection Angle": "120 degrees",
      "Delay Time": "5s - 300s (adjustable)",
      "Block Time": "2.5s (default)",
      "Trigger": "L: non-repeatable, H: repeatable"
    },
    compatibility: ["Arduino", "ESP32", "Raspberry Pi", "Relay modules"],
    projects: ["Security alarm", "Auto lights", "Occupancy counter", "Smart doorbell"],
    supplier: "Neriko Electronics",
    leadTime: "In Stock", 
    tags: ["pir", "motion", "security", "infrared", "detection"]
  },

  {
    id: "sens-dht11-001",
    name: "DHT11 Temperature & Humidity Sensor",
    description: "Basic digital sensor for reading temperature and humidity with simple serial interface",
    category: "sensors", 
    subcategory: "environmental",
    price: 5500,
    studentPrice: 4675,
    image: "/images/sensors/dht11.jpg",
    inStock: true,
    stockLevel: 200,
    rating: 4.5,
    reviews: 312,
    overview: {
      type: "Digital Temperature & Humidity Sensor",
      keySpecs: "0-50°C, 20-80% RH, ±2°C accuracy, single-wire digital interface",
      applications: "Weather monitoring, home automation, greenhouse control, HVAC systems",
      keyFeatures: "Single-wire digital interface, low cost, easy to use with libraries",
      bestFor: "Basic environmental monitoring and educational weather projects"
    },
    specifications: {
      "Operating Voltage": "3V-5.5V DC",
      "Operating Current": "0.3mA (measuring) 60µA (standby)",
      "Temperature Range": "0°C to 50°C",
      "Temperature Accuracy": "±2°C", 
      "Humidity Range": "20% to 80%",
      "Humidity Accuracy": "±5% RH",
      "Sampling Rate": "1Hz (once per second)",
      "Interface": "Single-wire digital"
    },
    compatibility: ["Arduino", "ESP32", "Raspberry Pi", "STM32"],
    projects: ["Weather station", "Greenhouse monitor", "Home automation", "Data logger"],
    supplier: "EtechKampala",
    leadTime: "In Stock",
    tags: ["dht11", "temperature", "humidity", "environmental", "digital"]
  },

  {
    id: "sens-dht22-001",
    name: "DHT22/AM2302 Temperature & Humidity Sensor", 
    description: "High-precision digital sensor with wider range and better accuracy than DHT11",
    category: "sensors",
    subcategory: "environmental", 
    price: 9000,
    studentPrice: 7650,
    image: "/images/sensors/dht22.jpg",
    inStock: true,
    stockLevel: 85,
    rating: 4.8,
    reviews: 167,
    overview: {
      type: "High-Precision Digital Temperature & Humidity Sensor",
      keySpecs: "-40°C to 80°C, 0-100% RH, ±0.5°C accuracy, single-wire digital interface",
      applications: "Professional weather monitoring, precision agriculture, laboratory measurements",
      keyFeatures: "High accuracy, wide operating range, calibrated digital output",
      bestFor: "Precision environmental monitoring and professional data logging applications"
    },
    specifications: {
      "Operating Voltage": "3.3V-6V DC",
      "Operating Current": "1-1.5mA (measuring) 40-50µA (standby)",
      "Temperature Range": "-40°C to 80°C",
      "Temperature Accuracy": "±0.5°C",
      "Humidity Range": "0% to 100%", 
      "Humidity Accuracy": "±2-5% RH",
      "Sampling Rate": "0.5Hz (once per 2 seconds)",
      "Interface": "Single-wire digital"
    },
    compatibility: ["Arduino", "ESP32", "Raspberry Pi", "Industrial systems"],
    projects: ["Professional weather station", "Precision agriculture", "Laboratory monitoring", "Industrial automation"],
    supplier: "TechHub Kampala", 
    leadTime: "2-3 days",
    tags: ["dht22", "am2302", "precision", "temperature", "humidity"]
  },

  {
    id: "sens-bme280-001",
    name: "BME280 Temperature, Humidity & Pressure Sensor",
    description: "High-precision all-in-one environmental sensor with I2C/SPI interface",
    category: "sensors",
    subcategory: "environmental",
    price: 11000,
    studentPrice: 9350,
    image: "/images/sensors/bme280.jpg", 
    inStock: true,
    stockLevel: 60,
    rating: 4.9,
    reviews: 134,
    overview: {
      type: "3-in-1 Environmental Sensor",
      keySpecs: "-40°C to 85°C, 0-100% RH, 300-1100 hPa pressure, I2C/SPI interface",
      applications: "Weather stations, altimeter, indoor air quality, professional monitoring",
      keyFeatures: "Three sensors in one package, industry-leading accuracy, low power consumption",
      bestFor: "Professional weather monitoring and altitude measurement projects"
    },
    specifications: {
      "Operating Voltage": "1.71V-3.6V DC",
      "Interface": "I2C and SPI",
      "Temperature Range": "-40°C to 85°C",
      "Temperature Accuracy": "±1.0°C",
      "Humidity Range": "0% to 100%",
      "Humidity Accuracy": "±3% RH", 
      "Pressure Range": "300 to 1100 hPa",
      "Pressure Accuracy": "±1 hPa",
      "Current Consumption": "2.1µA @ 1Hz"
    },
    compatibility: ["Arduino", "ESP32", "Raspberry Pi", "Professional systems"],
    projects: ["Advanced weather station", "Altitude measurement", "Indoor air quality", "Drone flight data"],
    supplier: "Jumia Uganda",
    leadTime: "3-5 days",
    tags: ["bme280", "environmental", "pressure", "altitude", "professional"]
  },

  {
    id: "sens-ds18b20-001",
    name: "DS18B20 Waterproof Temperature Sensor",
    description: "Digital temperature sensor in waterproof probe with 1-Wire interface",
    category: "sensors",
    subcategory: "temperature",
    price: 7500,
    studentPrice: 6375,
    image: "/images/sensors/ds18b20-waterproof.jpg",
    inStock: true,
    stockLevel: 75,
    rating: 4.7,
    reviews: 98,
    overview: {
      type: "Waterproof Digital Temperature Sensor",
      keySpecs: "-55°C to 125°C, ±0.5°C accuracy, 1-Wire interface, stainless steel probe",
      applications: "Pool monitoring, aquarium control, soil temperature, liquid temperature measurement",
      keyFeatures: "Waterproof design, high accuracy, multiple sensors on one pin, parasitic power",
      bestFor: "Temperature monitoring in wet environments and liquid temperature measurement"
    },
    specifications: {
      "Operating Voltage": "3.0V-5.5V DC",
      "Temperature Range": "-55°C to 125°C",
      "Accuracy": "±0.5°C from -10°C to 85°C",
      "Resolution": "9 to 12 bits (configurable)",
      "Conversion Time": "750ms (max)",
      "Interface": "1-Wire",
      "Cable Length": "1 meter",
      "Probe Material": "Stainless steel"
    },
    compatibility: ["Arduino", "ESP32", "Raspberry Pi", "1-Wire systems"],
    projects: ["Pool temperature monitor", "Aquarium controller", "Soil temperature", "Brewing thermometer"],
    supplier: "Neriko Electronics",
    leadTime: "In Stock",
    tags: ["ds18b20", "waterproof", "temperature", "1-wire", "probe"]
  },

  {
    id: "sens-mpu6050-001", 
    name: "MPU-6050 6-Axis Gyroscope & Accelerometer",
    description: "Motion sensor combining 3-axis gyroscope and 3-axis accelerometer with I2C interface",
    category: "sensors",
    subcategory: "motion",
    price: 7000,
    studentPrice: 5950,
    image: "/images/sensors/mpu6050.jpg",
    inStock: true,
    stockLevel: 90,
    rating: 4.6,
    reviews: 156,
    overview: {
      type: "6-Axis Motion Sensor",
      keySpecs: "3-axis gyroscope, 3-axis accelerometer, I2C interface, built-in DMP",
      applications: "Drone stabilization, motion detection, gesture control, robotics orientation",
      keyFeatures: "Combined gyro and accelerometer, motion processing unit, low power consumption",
      bestFor: "Drone flight controllers, motion-sensing projects, and robotics applications"
    },
    specifications: {
      "Operating Voltage": "2.375V-3.46V DC",
      "Interface": "I2C (400kHz max)",
      "Gyroscope Range": "±250, ±500, ±1000, ±2000°/sec",
      "Accelerometer Range": "±2g, ±4g, ±8g, ±16g",
      "Operating Temperature": "-40°C to 85°C",
      "Current Consumption": "3.9mA (normal mode)",
      "Package": "QFN 4x4x0.9mm"
    },
    compatibility: ["Arduino", "ESP32", "Raspberry Pi", "Flight controllers"],
    projects: ["Drone stabilization", "Motion detection", "Gesture control", "Self-balancing robot"],
    supplier: "TechHub Kampala",
    leadTime: "In Stock",
    tags: ["mpu6050", "gyroscope", "accelerometer", "motion", "imu"]
  },

  {
    id: "sens-soil-001",
    name: "Soil Moisture Sensor Module",
    description: "Capacitive soil moisture sensor that measures moisture level without direct soil contact",
    category: "sensors",
    subcategory: "environmental",
    price: 4000,
    studentPrice: 3400,
    image: "/images/sensors/soil-moisture.jpg",
    inStock: true,
    stockLevel: 110,
    rating: 4.4,
    reviews: 87,
    specifications: {
      "Operating Voltage": "3.3V-5V DC",
      "Output Interface": "Analog voltage (0-3V)",
      "Operating Current": "5mA",
      "Interface": "PH2.0-3P",
      "Dimensions": "98 x 23mm",
      "Operating Temperature": "-40°C to 85°C",
      "Probe Material": "Anti-corrosion"
    },
    compatibility: ["Arduino", "ESP32", "Raspberry Pi", "ADC modules"],
    projects: ["Automated irrigation", "Plant monitoring", "Smart gardening", "Agriculture sensors"],
    supplier: "EtechKampala",
    leadTime: "In Stock",
    tags: ["soil", "moisture", "gardening", "agriculture", "capacitive"]
  },

  {
    id: "sens-rain-001",
    name: "Rain/Water Level Sensor Module", 
    description: "Detects rain drops and measures water level with analog and digital outputs",
    category: "sensors",
    subcategory: "environmental",
    price: 3500,
    studentPrice: 2975,
    image: "/images/sensors/rain-sensor.jpg",
    inStock: true,
    stockLevel: 95,
    rating: 4.3,
    reviews: 76,
    specifications: {
      "Operating Voltage": "3.3V-5V DC",
      "Output Interface": "Digital and Analog",
      "Detection Area": "40 x 70mm",
      "Current Consumption": "20mA",
      "Operating Temperature": "10°C to 30°C",
      "Operating Humidity": "10% - 90% non-condensing"
    },
    compatibility: ["Arduino", "ESP32", "Raspberry Pi", "Weather stations"],
    projects: ["Weather monitoring", "Automatic windshield wipers", "Irrigation control", "Roof leak detection"],
    supplier: "Neriko Electronics", 
    leadTime: "In Stock",
    tags: ["rain", "water", "level", "weather", "detection"]
  },

  {
    id: "sens-sound-001",
    name: "Sound Detection Module", 
    description: "Microphone-based sound sensor with adjustable sensitivity and digital/analog output",
    category: "sensors",
    subcategory: "audio",
    price: 3800,
    studentPrice: 3230,
    image: "/images/sensors/sound-sensor.jpg",
    inStock: true,
    stockLevel: 80,
    rating: 4.2,
    reviews: 92,
    specifications: {
      "Operating Voltage": "3.3V-5V DC",
      "Output Interface": "Digital and Analog",
      "Sensitivity": "Adjustable via potentiometer",
      "Frequency Response": "50Hz-20kHz",
      "Signal-to-Noise Ratio": ">60dB",
      "Operating Temperature": "-40°C to 85°C"
    },
    compatibility: ["Arduino", "ESP32", "Raspberry Pi", "Audio systems"],
    projects: ["Sound-activated lights", "Noise monitoring", "Clap switch", "Audio reactive LEDs"],
    supplier: "TechHub Kampala",
    leadTime: "In Stock", 
    tags: ["sound", "audio", "microphone", "voice", "detection"]
  }
]

// Additional Environmental & Motion Sensors (40 more products)
const additionalSensors: SensorModule[] = [
  {
    id: "sens-tcs3200-001",
    name: "TCS3200 Color Sensor Module",
    description: "RGB color sensor that can detect and identify colors with frequency output",
    category: "sensors",
    subcategory: "optical",
    price: 10000,
    studentPrice: 8500,
    image: "/images/sensors/tcs3200.jpg",
    inStock: true,
    stockLevel: 45,
    rating: 4.6,
    reviews: 78,
    overview: {
      type: "RGB Color Recognition Sensor",
      keySpecs: "Programmable color and full-scale output frequency, high resolution conversion",
      applications: "Color sorting, color matching, ambient light sensing, RGB LED control",
      keyFeatures: "Programmable output scaling, white LED for illumination, high resolution",
      bestFor: "Projects requiring accurate color detection and sorting applications"
    },
    specifications: {
      "Operating Voltage": "2.7V-5.5V DC",
      "Output Type": "Digital square wave (frequency)",
      "Resolution": "16-bit",
      "Wavelength Range": "380nm-700nm",
      "Temperature Range": "-40°C to 85°C",
      "Power Consumption": "600µW"
    },
    compatibility: ["Arduino", "ESP32", "Raspberry Pi", "Microcontrollers"],
    projects: ["Color sorting robot", "RGB LED control", "Color matching", "Art projects"],
    supplier: "Jumia Uganda",
    leadTime: "3-5 days",
    tags: ["color", "rgb", "optical", "tcs3200", "sorting"]
  },

  {
    id: "sens-hall-001",
    name: "Hall Effect Sensor Module",
    description: "Digital magnetic field sensor for detecting the presence of magnets",
    category: "sensors",
    subcategory: "magnetic",
    price: 4000,
    studentPrice: 3400,
    image: "/images/sensors/hall-sensor.jpg",
    inStock: true,
    stockLevel: 90,
    rating: 4.4,
    reviews: 67,
    specifications: {
      "Operating Voltage": "3.3V-5V DC",
      "Output Type": "Digital (HIGH/LOW)",
      "Detection Range": "1.5-25mm",
      "Response Time": "<1µs",
      "Operating Temperature": "-40°C to 150°C",
      "Current Consumption": "7mA"
    },
    compatibility: ["Arduino", "ESP32", "Raspberry Pi", "Counter circuits"],
    projects: ["Door sensor", "Rotation counter", "Position detection", "Security systems"],
    supplier: "EtechKampala",
    leadTime: "In Stock",
    tags: ["hall", "magnetic", "switch", "proximity", "rotation"]
  },

  {
    id: "sens-flame-001",
    name: "Flame Sensor Module",
    description: "Infrared-based flame detector for fire detection and safety systems",
    category: "sensors",
    subcategory: "safety",
    price: 3500,
    studentPrice: 2975,
    image: "/images/sensors/flame-sensor.jpg",
    inStock: true,
    stockLevel: 70,
    rating: 4.3,
    reviews: 54,
    specifications: {
      "Operating Voltage": "3.3V-5V DC",
      "Detection Angle": "60 degrees",
      "Detection Range": "0.8m",
      "Wavelength": "760nm-1100nm",
      "Response Time": "15µs",
      "Operating Temperature": "-25°C to 85°C"
    },
    compatibility: ["Arduino", "ESP32", "Fire alarm systems", "Safety circuits"],
    projects: ["Fire alarm", "Robot firefighter", "Safety monitoring", "Automated extinguisher"],
    supplier: "TechHub Kampala",
    leadTime: "In Stock",
    tags: ["flame", "fire", "safety", "infrared", "detection"]
  },

  {
    id: "sens-vibration-001",
    name: "Vibration Sensor Module (SW-420)",
    description: "Digital vibration sensor for detecting shocks and movement",
    category: "sensors",
    subcategory: "motion",
    price: 4200,
    studentPrice: 3570,
    image: "/images/sensors/vibration-sw420.jpg",
    inStock: true,
    stockLevel: 85,
    rating: 4.2,
    reviews: 43,
    specifications: {
      "Operating Voltage": "3.3V-5V DC",
      "Output Type": "Digital and Analog",
      "Sensitivity": "Adjustable via potentiometer",
      "Operating Temperature": "-20°C to 70°C",
      "Detection Range": "Adjustable",
      "Response Time": "<1ms"
    },
    compatibility: ["Arduino", "ESP32", "Alarm systems", "Security circuits"],
    projects: ["Earthquake detector", "Theft alarm", "Machine monitoring", "Impact detection"],
    supplier: "Neriko Electronics",
    leadTime: "In Stock",
    tags: ["vibration", "shock", "security", "sw420", "alarm"]
  },

  {
    id: "sens-mq2-001",
    name: "MQ-2 Gas & Smoke Sensor",
    description: "Gas sensor for detecting LPG, smoke, alcohol, propane, hydrogen, methane",
    category: "sensors",
    subcategory: "gas",
    price: 8500,
    studentPrice: 7225,
    image: "/images/sensors/mq2-gas.jpg",
    inStock: true,
    stockLevel: 55,
    rating: 4.7,
    reviews: 89,
    overview: {
      type: "Multi-Gas Detection Sensor",
      keySpecs: "Detects LPG, smoke, alcohol, propane, hydrogen, methane and other combustible gases",
      applications: "Gas leak detection, smoke alarms, air quality monitoring, safety systems",
      keyFeatures: "High sensitivity, stable performance, adjustable sensitivity, long life",
      bestFor: "Gas leak detection systems and air quality monitoring projects"
    },
    specifications: {
      "Operating Voltage": "5V DC",
      "Heater Voltage": "5V±0.2V",
      "Operating Current": "150mA",
      "Detection Range": "200-10000ppm",
      "Preheat Time": "20 seconds",
      "Operating Temperature": "-20°C to 50°C",
      "Operating Humidity": "<95% RH"
    },
    compatibility: ["Arduino", "ESP32", "Gas detection systems", "Safety monitoring"],
    projects: ["Gas leak alarm", "Air quality monitor", "Kitchen safety", "Industrial monitoring"],
    supplier: "Jumia Uganda",
    leadTime: "3-5 days",
    tags: ["mq2", "gas", "smoke", "lpg", "safety"]
  },

  {
    id: "sens-mq3-001",
    name: "MQ-3 Alcohol Sensor",
    description: "Gas sensor specifically designed for detecting alcohol vapor concentration",
    category: "sensors",
    subcategory: "gas",
    price: 8500,
    studentPrice: 7225,
    image: "/images/sensors/mq3-alcohol.jpg",
    inStock: true,
    stockLevel: 40,
    rating: 4.5,
    reviews: 67,
    specifications: {
      "Operating Voltage": "5V DC",
      "Heater Voltage": "5V±0.2V", 
      "Operating Current": "150mA",
      "Detection Range": "0.05-10mg/L",
      "Sensitivity": "Rs in air/Rs in alcohol ≥ 5",
      "Operating Temperature": "-10°C to 50°C",
      "Operating Humidity": "<95% RH"
    },
    compatibility: ["Arduino", "ESP32", "Breathalyzer projects", "Safety systems"],
    projects: ["Alcohol detector", "Breathalyzer", "Safety monitoring", "Laboratory testing"],
    supplier: "TechHub Kampala",
    leadTime: "2-3 days",
    tags: ["mq3", "alcohol", "breathalyzer", "gas", "detection"]
  },

  {
    id: "sens-mq7-001",
    name: "MQ-7 Carbon Monoxide Sensor",
    description: "Gas sensor for detecting dangerous carbon monoxide gas concentrations",
    category: "sensors",
    subcategory: "gas",
    price: 9000,
    studentPrice: 7650,
    image: "/images/sensors/mq7-co.jpg",
    inStock: true,
    stockLevel: 35,
    rating: 4.8,
    reviews: 78,
    specifications: {
      "Operating Voltage": "5V DC",
      "Heater Voltage": "5V±0.2V",
      "Operating Current": "150mA",
      "Detection Range": "20-2000ppm",
      "Sensitivity": "Rs in air/Rs in CO ≥ 5",
      "Operating Temperature": "-20°C to 50°C",
      "Operating Humidity": "<95% RH"
    },
    compatibility: ["Arduino", "ESP32", "Safety systems", "Environmental monitoring"],
    projects: ["CO detector", "Home safety", "Garage monitoring", "Industrial safety"],
    supplier: "EtechKampala",
    leadTime: "In Stock",
    tags: ["mq7", "carbon-monoxide", "co", "safety", "detector"]
  },

  {
    id: "sens-flex-001",
    name: "Flex Sensor (2.2 inch)",
    description: "Flexible resistor that changes resistance when bent, perfect for gesture detection",
    category: "sensors",
    subcategory: "flex",
    price: 15000,
    studentPrice: 12750,
    image: "/images/sensors/flex-sensor.jpg",
    inStock: true,
    stockLevel: 25,
    rating: 4.6,
    reviews: 34,
    overview: {
      type: "Flexible Bend Sensor",
      keySpecs: "2.2 inch length, resistance changes from 25kΩ to 125kΩ when bent",
      applications: "Gesture control, robotics, wearable devices, motion detection",
      keyFeatures: "Analog output proportional to bend, durable construction, easy integration",
      bestFor: "Creating gesture-controlled interfaces and robotic finger joints"
    },
    specifications: {
      "Length": "2.2 inches (55.9mm)",
      "Resistance (flat)": "25kΩ",
      "Resistance (90° bend)": "45kΩ-125kΩ",
      "Operating Temperature": "-35°C to 80°C",
      "Life Cycle": ">1 million flexes",
      "Power Rating": "1W maximum"
    },
    compatibility: ["Arduino", "ESP32", "Wearable devices", "Robotic hands"],
    projects: ["Gesture glove", "Robotic fingers", "Motion control", "VR controllers"],
    supplier: "Jumia Uganda",
    leadTime: "5-7 days",
    tags: ["flex", "bend", "gesture", "wearable", "analog"]
  },

  {
    id: "sens-pulse-001",
    name: "Heart Rate Pulse Sensor",
    description: "Optical heart rate sensor for measuring pulse and heart rate variability",
    category: "sensors",
    subcategory: "biometric",
    price: 7500,
    studentPrice: 6375,
    image: "/images/sensors/pulse-sensor.jpg",
    inStock: true,
    stockLevel: 30,
    rating: 4.7,
    reviews: 56,
    overview: {
      type: "Optical Heart Rate Monitor",
      keySpecs: "Fingertip or earlobe placement, analog output, built-in amplification",
      applications: "Health monitoring, fitness tracking, medical devices, wellness projects",
      keyFeatures: "Optical detection, amplified output, easy to use, medical-grade accuracy",
      bestFor: "Health monitoring projects and fitness tracking applications"
    },
    specifications: {
      "Operating Voltage": "3V-5V DC",
      "Current Consumption": "4mA",
      "Output": "Analog voltage (0-3V)",
      "Sensor Type": "Optical (LED + Photodiode)",
      "Sampling Rate": "Up to 512Hz",
      "Detection Range": "BPM 30-200"
    },
    compatibility: ["Arduino", "ESP32", "Health devices", "Fitness trackers"],
    projects: ["Heart rate monitor", "Fitness tracker", "Health dashboard", "Medical device"],
    supplier: "TechHub Kampala",
    leadTime: "3-5 days",
    tags: ["pulse", "heart-rate", "health", "biometric", "optical"]
  },

  {
    id: "sens-touch-001", 
    name: "Capacitive Touch Sensor (TTP223B)",
    description: "Simple capacitive touch sensor that acts as a touch-sensitive button",
    category: "sensors",
    subcategory: "touch",
    price: 2500,
    studentPrice: 2125,
    image: "/images/sensors/touch-ttp223.jpg",
    inStock: true,
    stockLevel: 150,
    rating: 4.4,
    reviews: 89,
    specifications: {
      "Operating Voltage": "2V-5.5V DC",
      "Operating Current": "1.5µA (standby)",
      "Output Type": "Digital (HIGH/LOW)",
      "Touch Sensitivity": "Adjustable",
      "Response Time": "60ms (fast mode), 220ms (low power)",
      "Operating Temperature": "-40°C to 85°C"
    },
    compatibility: ["Arduino", "ESP32", "Touch interfaces", "Control panels"],
    projects: ["Touch button", "Capacitive keyboard", "Interactive art", "Control panels"],
    supplier: "Neriko Electronics",
    leadTime: "In Stock",
    tags: ["touch", "capacitive", "button", "ttp223", "interface"]
  }
]

// Additional 27 sensors to reach 101 total (implementing missing catalog items)
const additionalSensors27: SensorModule[] = [
  {
    id: "sens-flow-water-001",
    name: "Water Flow Sensor",
    description: "Turbine flow sensor for water flow rate measurement",
    category: "sensors",
    subcategory: "flow",
    price: 28000,
    studentPrice: 23800,
    image: "/images/sensors/water-flow.jpg",
    inStock: true,
    stockLevel: 18,
    rating: 4.6,
    reviews: 34,
    specifications: {
      "Flow Range": "1-30 L/min",
      "Accuracy": "±3%",
      "Operating Pressure": "≤1.75MPa",
      "Operating Temperature": "-25°C to 80°C",
      "Output": "Digital pulse",
      "Thread": "G1/2"
    },
    compatibility: ["Arduino", "ESP32", "Flow monitoring", "Water systems"],
    projects: ["Water monitoring", "Irrigation control", "Flow meters", "Smart water systems"],
    supplier: "Flow sensor distributors",
    leadTime: "7-10 days",
    tags: ["water", "flow", "turbine", "irrigation", "monitoring"],
    overview: {
      type: "Turbine Water Flow Sensor",
      keySpecs: "1-30 L/min range, ±3% accuracy, digital pulse output",
      applications: "Water flow monitoring, irrigation systems, smart water management",
      keyFeatures: "Wide temperature range, high pressure rating, pulse output",
      bestFor: "Water flow monitoring and irrigation control systems"
    }
  },

  {
    id: "sens-ph-probe-001",
    name: "pH Sensor Module",
    description: "Digital pH sensor for water quality monitoring",
    category: "sensors",
    subcategory: "chemical",
    price: 45000,
    studentPrice: 38250,
    image: "/images/sensors/ph-sensor.jpg",
    inStock: true,
    stockLevel: 15,
    rating: 4.8,
    reviews: 28,
    specifications: {
      "Range": "0-14 pH",
      "Accuracy": "±0.1 pH",
      "Response Time": "<1 minute",
      "Operating Temperature": "0-60°C",
      "Interface": "Analog",
      "Probe": "Glass electrode"
    },
    compatibility: ["Arduino", "ESP32", "Water quality", "Hydroponics"],
    projects: ["Water quality monitoring", "Hydroponics", "Pool monitoring", "Environmental testing"],
    supplier: "Chemical sensor specialists",
    leadTime: "10-14 days",
    tags: ["ph", "water-quality", "chemical", "hydroponics", "monitoring"]
  },

  {
    id: "sens-turbidity-003",
    name: "Turbidity Sensor Module",
    description: "Optical turbidity sensor for water clarity measurement",
    category: "sensors",
    subcategory: "optical",
    price: 38000,
    studentPrice: 32300,
    image: "/images/sensors/turbidity.jpg",
    inStock: true,
    stockLevel: 12,
    rating: 4.7,
    reviews: 22,
    specifications: {
      "Range": "0-1000 NTU",
      "Accuracy": "±5%",
      "Operating Voltage": "5V DC",
      "Output": "0-4.5V analog",
      "Operating Temperature": "5-90°C",
      "Response Time": "<1 second"
    },
    compatibility: ["Arduino", "ESP32", "Water quality", "Environmental monitoring"],
    projects: ["Water quality", "Filtration monitoring", "Environmental studies", "Industrial water"],
    supplier: "Water quality specialists",
    leadTime: "14-21 days",
    tags: ["turbidity", "water-clarity", "optical", "ntu", "water-quality"]
  },

  {
    id: "sens-conductivity-003",
    name: "Water Conductivity Sensor",
    description: "Digital water conductivity sensor for TDS measurement",
    category: "sensors",
    subcategory: "chemical",
    price: 42000,
    studentPrice: 35700,
    image: "/images/sensors/conductivity.jpg",
    inStock: true,
    stockLevel: 10,
    rating: 4.6,
    reviews: 19,
    specifications: {
      "Range": "1-20000 μS/cm",
      "Accuracy": "±2%",
      "Operating Temperature": "5-40°C",
      "Interface": "UART",
      "Power": "3.3V-5V DC",
      "Probe Material": "Graphite"
    },
    compatibility: ["Arduino", "ESP32", "Water quality", "TDS monitoring"],
    projects: ["Water purity", "TDS monitoring", "Hydroponics", "Pool maintenance"],
    supplier: "Water analysis equipment",
    leadTime: "14-21 days",
    tags: ["conductivity", "tds", "water-purity", "graphite", "uart"]
  },

  {
    id: "sens-o2-dissolved-001",
    name: "Dissolved Oxygen Sensor",
    description: "Digital dissolved oxygen sensor for aquaculture and water monitoring",
    category: "sensors",
    subcategory: "chemical",
    price: 125000,
    studentPrice: 106250,
    image: "/images/sensors/dissolved-oxygen.jpg",
    inStock: true,
    stockLevel: 5,
    rating: 4.9,
    reviews: 12,
    specifications: {
      "Range": "0-20 mg/L",
      "Accuracy": "±0.3 mg/L",
      "Response Time": "90% in 45 seconds",
      "Operating Temperature": "0-40°C",
      "Interface": "UART/I2C",
      "Membrane": "Clark-type electrode"
    },
    compatibility: ["Arduino", "ESP32", "Aquaculture", "Environmental monitoring"],
    projects: ["Fish farming", "Water quality", "Environmental monitoring", "Research"],
    supplier: "Aquaculture equipment specialists",
    leadTime: "21-30 days",
    tags: ["dissolved-oxygen", "aquaculture", "water-quality", "clark-electrode", "research"]
  },

  {
    id: "sens-gas-mq135-001",
    name: "MQ-135 Air Quality Gas Sensor",
    description: "Gas sensor for NH3, NOx, CO2, and other harmful gases",
    category: "sensors",
    subcategory: "gas",
    price: 12000,
    studentPrice: 10200,
    image: "/images/sensors/mq135.jpg",
    inStock: true,
    stockLevel: 35,
    rating: 4.6,
    reviews: 67,
    specifications: {
      "Detection Gas": "NH3, NOx, CO2, Alcohol",
      "Concentration": "10-300ppm",
      "Operating Voltage": "5V DC",
      "Preheat Time": "Over 24 hours",
      "Interface": "Analog",
      "Response Time": "<10 seconds"
    },
    compatibility: ["Arduino", "ESP32", "Air quality monitoring"],
    projects: ["Air quality monitoring", "Gas leak detection", "Indoor air safety"],
    supplier: "Gas sensor specialists",
    leadTime: "5-7 days",
    tags: ["mq135", "air-quality", "gas", "nh3", "nox"]
  },

  {
    id: "sens-fingerprint-001",
    name: "Fingerprint Scanner Module",
    description: "Optical fingerprint sensor for biometric authentication",
    category: "sensors",
    subcategory: "biometric",
    price: 85000,
    studentPrice: 72250,
    image: "/images/sensors/fingerprint.jpg",
    inStock: true,
    stockLevel: 8,
    rating: 4.8,
    reviews: 25,
    specifications: {
      "Image Size": "256x288 pixels",
      "Template Size": "512 bytes",
      "Storage": "200 fingerprints",
      "False Accept Rate": "<0.001%",
      "Interface": "UART",
      "Power": "3.3V-6V DC"
    },
    compatibility: ["Arduino", "ESP32", "Security systems"],
    projects: ["Access control", "Security systems", "Attendance systems"],
    supplier: "Biometric equipment specialists",
    leadTime: "14-21 days",
    tags: ["fingerprint", "biometric", "security", "authentication"]
  },

  {
    id: "sens-rfid-125khz-001",
    name: "RFID Reader Module 125kHz",
    description: "Low frequency RFID reader for access control applications",
    category: "sensors",
    subcategory: "rfid",
    price: 25000,
    studentPrice: 21250,
    image: "/images/sensors/rfid-125khz.jpg",
    inStock: true,
    stockLevel: 22,
    rating: 4.7,
    reviews: 48,
    specifications: {
      "Frequency": "125kHz",
      "Reading Distance": "2-12cm",
      "Supported Cards": "EM4100, EM4102",
      "Interface": "UART",
      "Operating Voltage": "9-12V DC",
      "Current": "<50mA"
    },
    compatibility: ["Arduino", "ESP32", "Access control"],
    projects: ["Access control", "Asset tracking", "Attendance systems"],
    supplier: "RFID equipment distributors",
    leadTime: "7-10 days",
    tags: ["rfid", "125khz", "access-control", "em4100"]
  },

  {
    id: "sens-gps-neo8m-001",
    name: "GPS Module NEO-8M",
    description: "High-performance GPS receiver with ceramic antenna",
    category: "sensors",
    subcategory: "positioning",
    price: 45000,
    studentPrice: 38250,
    image: "/images/sensors/gps-neo8m.jpg",
    inStock: true,
    stockLevel: 15,
    rating: 4.9,
    reviews: 76,
    specifications: {
      "Channels": "72 search channels",
      "Accuracy": "2.5m CEP",
      "Update Rate": "1-18Hz",
      "Cold Start": "<26 seconds",
      "Interface": "UART",
      "Antenna": "Built-in ceramic"
    },
    compatibility: ["Arduino", "ESP32", "Navigation", "Tracking"],
    projects: ["GPS tracking", "Navigation", "Asset monitoring", "Weather stations"],
    supplier: "GPS module specialists",
    leadTime: "7-10 days",
    tags: ["gps", "neo-8m", "navigation", "tracking", "positioning"]
  },

  {
    id: "sens-accelerometer-adxl345-001",
    name: "ADXL345 3-Axis Accelerometer",
    description: "High-resolution 3-axis accelerometer with digital output",
    category: "sensors",
    subcategory: "motion",
    price: 18000,
    studentPrice: 15300,
    image: "/images/sensors/adxl345.jpg",
    inStock: true,
    stockLevel: 28,
    rating: 4.8,
    reviews: 89,
    specifications: {
      "Range": "±2g, ±4g, ±8g, ±16g",
      "Resolution": "13-bit",
      "Interface": "I2C/SPI",
      "Power": "2.0V-3.6V",
      "Noise": "150μg/√Hz",
      "Package": "LGA-14"
    },
    compatibility: ["Arduino", "ESP32", "Motion detection", "Gaming"],
    projects: ["Motion sensing", "Tilt detection", "Gaming controllers", "Activity tracking"],
    supplier: "Motion sensor distributors",
    leadTime: "5-7 days",
    tags: ["accelerometer", "adxl345", "3-axis", "motion", "tilt"]
  },

  {
    id: "sens-gyroscope-l3g4200d-001",
    name: "L3G4200D 3-Axis Gyroscope",
    description: "MEMS 3-axis gyroscope for angular velocity measurement",
    category: "sensors",
    subcategory: "motion",
    price: 22000,
    studentPrice: 18700,
    image: "/images/sensors/l3g4200d.jpg",
    inStock: true,
    stockLevel: 20,
    rating: 4.7,
    reviews: 45,
    specifications: {
      "Range": "±250, ±500, ±2000 dps",
      "Interface": "I2C/SPI",
      "Power": "2.4V-3.6V",
      "Resolution": "16-bit",
      "Package": "LGA-16",
      "Output Rate": "100-800Hz"
    },
    compatibility: ["Arduino", "ESP32", "Motion tracking", "Stabilization"],
    projects: ["Motion tracking", "Drone stabilization", "Gaming", "IMU systems"],
    supplier: "Motion sensor distributors",
    leadTime: "7-10 days",
    tags: ["gyroscope", "l3g4200d", "3-axis", "angular-velocity", "mems"]
  },

  {
    id: "sens-magnetometer-hmc5883l-001",
    name: "HMC5883L 3-Axis Magnetometer",
    description: "Digital compass and magnetic field sensor",
    category: "sensors",
    subcategory: "magnetic",
    price: 16000,
    studentPrice: 13600,
    image: "/images/sensors/hmc5883l.jpg",
    inStock: true,
    stockLevel: 25,
    rating: 4.6,
    reviews: 38,
    specifications: {
      "Range": "±1.3 to ±8.1 gauss",
      "Resolution": "5 milligauss",
      "Interface": "I2C",
      "Power": "2.16V-3.6V",
      "Output Rate": "0.75-75Hz",
      "Package": "LCC-16"
    },
    compatibility: ["Arduino", "ESP32", "Navigation", "Compass"],
    projects: ["Digital compass", "Navigation", "Metal detection", "Orientation sensing"],
    supplier: "Magnetic sensor distributors",
    leadTime: "7-10 days",
    tags: ["magnetometer", "compass", "hmc5883l", "magnetic-field", "navigation"]
  },

  {
    id: "sens-imu-mpu9250-001",
    name: "MPU-9250 9-Axis IMU",
    description: "9-DOF IMU with 3-axis gyro, accelerometer, and magnetometer",
    category: "sensors",
    subcategory: "motion",
    price: 35000,
    studentPrice: 29750,
    image: "/images/sensors/mpu9250.jpg",
    inStock: true,
    stockLevel: 15,
    rating: 4.9,
    reviews: 67,
    specifications: {
      "Gyro Range": "±250, ±500, ±1000, ±2000 dps",
      "Accel Range": "±2, ±4, ±8, ±16g",
      "Magnetometer": "±4800μT",
      "Interface": "I2C/SPI",
      "Power": "2.4V-3.6V",
      "Package": "QFN-24"
    },
    compatibility: ["Arduino", "ESP32", "Drones", "Motion tracking"],
    projects: ["Drone stabilization", "Motion tracking", "VR controllers", "Robotics"],
    supplier: "IMU specialists",
    leadTime: "10-14 days",
    tags: ["imu", "9-axis", "mpu9250", "gyro", "accelerometer", "magnetometer"]
  },

  {
    id: "sens-pressure-bmp180-001",
    name: "BMP180 Barometric Pressure Sensor",
    description: "Digital barometric pressure sensor for altitude and weather",
    category: "sensors",
    subcategory: "environmental",
    price: 12000,
    studentPrice: 10200,
    image: "/images/sensors/bmp180.jpg",
    inStock: true,
    stockLevel: 30,
    rating: 4.7,
    reviews: 89,
    specifications: {
      "Pressure Range": "300-1100 hPa",
      "Accuracy": "±0.12 hPa",
      "Interface": "I2C",
      "Power": "1.8V-3.6V",
      "Resolution": "0.01 hPa",
      "Temperature": "-40°C to 85°C"
    },
    compatibility: ["Arduino", "ESP32", "Weather stations", "Altitude"],
    projects: ["Weather monitoring", "Altitude measurement", "Environmental sensing"],
    supplier: "Environmental sensor distributors",
    leadTime: "5-7 days",
    tags: ["pressure", "barometric", "bmp180", "altitude", "weather"]
  },

  {
    id: "sens-light-tsl2561-001",
    name: "TSL2561 Digital Light Sensor",
    description: "Digital ambient light sensor with IR compensation",
    category: "sensors",
    subcategory: "optical",
    price: 14000,
    studentPrice: 11900,
    image: "/images/sensors/tsl2561.jpg",
    inStock: true,
    stockLevel: 25,
    rating: 4.8,
    reviews: 56,
    specifications: {
      "Range": "0.1 to 40,000 lux",
      "Interface": "I2C",
      "Power": "2.7V-3.6V",
      "Resolution": "16-bit",
      "Response": "Human eye response",
      "Package": "FN-6"
    },
    compatibility: ["Arduino", "ESP32", "Automatic lighting", "Photography"],
    projects: ["Automatic lighting", "Photography meter", "Smart lighting", "Display brightness"],
    supplier: "Optical sensor distributors",
    leadTime: "7-10 days",
    tags: ["light", "ambient", "tsl2561", "lux", "photography"]
  },

  {
    id: "sens-uv-veml6070-001",
    name: "VEML6070 UV Index Sensor",
    description: "Digital UV index sensor for skin protection applications",
    category: "sensors",
    subcategory: "optical",
    price: 18000,
    studentPrice: 15300,
    image: "/images/sensors/veml6070.jpg",
    inStock: true,
    stockLevel: 20,
    rating: 4.6,
    reviews: 34,
    specifications: {
      "UV Response": "280-400nm",
      "Integration Time": "62.5ms to 4s",
      "Interface": "I2C",
      "Power": "2.7V-5.5V",
      "Resolution": "16-bit",
      "Package": "ODFN-6"
    },
    compatibility: ["Arduino", "ESP32", "Weather stations", "Health monitoring"],
    projects: ["UV monitoring", "Weather stations", "Skin protection", "Environmental sensing"],
    supplier: "UV sensor specialists",
    leadTime: "10-14 days",
    tags: ["uv", "index", "veml6070", "skin-protection", "weather"]
  },

  {
    id: "sens-air-quality-ccs811-001",
    name: "CCS811 Air Quality Sensor",
    description: "Digital gas sensor for VOC and eCO2 monitoring",
    category: "sensors",
    subcategory: "gas",
    price: 32000,
    studentPrice: 27200,
    image: "/images/sensors/ccs811.jpg",
    inStock: true,
    stockLevel: 18,
    rating: 4.8,
    reviews: 45,
    specifications: {
      "VOC Range": "0-1187 ppb",
      "eCO2 Range": "400-8192 ppm",
      "Interface": "I2C",
      "Power": "1.8V-3.6V",
      "Baseline": "Automatic",
      "Package": "LGA-10"
    },
    compatibility: ["Arduino", "ESP32", "Indoor air quality", "HVAC"],
    projects: ["Indoor air quality", "HVAC control", "Smart home", "Environmental monitoring"],
    supplier: "Air quality specialists",
    leadTime: "14-21 days",
    tags: ["air-quality", "voc", "eco2", "ccs811", "indoor"]
  },

  {
    id: "sens-dust-gp2y1010-001",
    name: "GP2Y1010AU0F Dust Sensor",
    description: "Optical dust sensor for PM2.5 particle measurement",
    category: "sensors",
    subcategory: "environmental",
    price: 25000,
    studentPrice: 21250,
    image: "/images/sensors/gp2y1010.jpg",
    inStock: true,
    stockLevel: 15,
    rating: 4.7,
    reviews: 28,
    specifications: {
      "Particle Size": "PM2.5",
      "Operating Voltage": "4.5V-5.5V",
      "Current": "20mA max",
      "Output": "Analog voltage",
      "Response Time": "10 seconds",
      "Sensitivity": "0.5V/(0.1mg/m³)"
    },
    compatibility: ["Arduino", "ESP32", "Air quality monitoring"],
    projects: ["Air pollution monitoring", "PM2.5 measurement", "Indoor air quality"],
    supplier: "Particle sensor distributors",
    leadTime: "14-21 days",
    tags: ["dust", "pm2.5", "particle", "gp2y1010", "pollution"]
  },

  {
    id: "sens-noise-ky038-001",
    name: "Sound Level Meter Module",
    description: "Digital and analog sound level measurement sensor",
    category: "sensors",
    subcategory: "audio",
    price: 8000,
    studentPrice: 6800,
    image: "/images/sensors/sound-level.jpg",
    inStock: true,
    stockLevel: 40,
    rating: 4.5,
    reviews: 78,
    specifications: {
      "Frequency Response": "50Hz-20kHz",
      "Sensitivity": "Adjustable",
      "Output": "Digital + Analog",
      "Operating Voltage": "3.3V-5V",
      "Detection Range": "Environmental sound",
      "Interface": "Analog/Digital"
    },
    compatibility: ["Arduino", "ESP32", "Noise monitoring", "Sound detection"],
    projects: ["Noise pollution monitoring", "Sound detection", "Audio triggers"],
    supplier: "Audio sensor distributors",
    leadTime: "5-7 days",
    tags: ["sound", "noise", "audio", "level", "detection"]
  },

  {
    id: "sens-heart-rate-max30102-001",
    name: "MAX30102 Heart Rate Monitor",
    description: "Optical heart rate and pulse oximetry sensor",
    category: "sensors",
    subcategory: "biometric",
    price: 28000,
    studentPrice: 23800,
    image: "/images/sensors/max30102.jpg",
    inStock: true,
    stockLevel: 12,
    rating: 4.9,
    reviews: 34,
    specifications: {
      "Wavelengths": "Red and IR LEDs",
      "Sample Rate": "50-3200 sps",
      "Resolution": "18-bit ADC",
      "Interface": "I2C",
      "Power": "1.8V-3.3V",
      "Package": "OLGA-14"
    },
    compatibility: ["Arduino", "ESP32", "Health monitoring", "Fitness"],
    projects: ["Heart rate monitoring", "Pulse oximetry", "Fitness trackers", "Health devices"],
    supplier: "Biometric sensor specialists",
    leadTime: "14-21 days",
    tags: ["heart-rate", "pulse", "oximetry", "max30102", "health"]
  },

  {
    id: "sens-force-fsr402-001",
    name: "FSR-402 Force Sensitive Resistor",
    description: "Pressure-sensitive resistor for force measurement",
    category: "sensors",
    subcategory: "force",
    price: 8500,
    studentPrice: 7225,
    image: "/images/sensors/fsr402.jpg",
    inStock: true,
    stockLevel: 35,
    rating: 4.6,
    reviews: 67,
    specifications: {
      "Force Range": "0.2N to 20N",
      "Active Area": "12.7mm diameter",
      "Resistance": "1MΩ to <1kΩ",
      "Thickness": "0.5mm",
      "Response Time": "<1ms",
      "Temperature": "-30°C to 70°C"
    },
    compatibility: ["Arduino", "ESP32", "Touch interfaces", "Pressure detection"],
    projects: ["Touch interfaces", "Pressure sensing", "Force feedback", "Musical instruments"],
    supplier: "Force sensor distributors",
    leadTime: "7-10 days",
    tags: ["force", "pressure", "fsr", "touch", "resistive"]
  },

  {
    id: "sens-flex-2.2-001",
    name: "Flex Sensor 2.2\" Short",
    description: "Bend-sensitive resistor for angle measurement",
    category: "sensors",
    subcategory: "position",
    price: 15000,
    studentPrice: 12750,
    image: "/images/sensors/flex-sensor.jpg",
    inStock: true,
    stockLevel: 20,
    rating: 4.7,
    reviews: 45,
    specifications: {
      "Length": "2.2 inches (5.6cm)",
      "Resistance": "25kΩ flat, 45-125kΩ bent",
      "Bend Angle": "0° to 90°",
      "Power": "1mW max",
      "Temperature": "-35°C to 80°C",
      "Life Cycle": ">1 million flexes"
    },
    compatibility: ["Arduino", "ESP32", "Robotics", "Gaming"],
    projects: ["Robotic joints", "Gaming controllers", "Gesture recognition", "Prosthetics"],
    supplier: "Specialty sensor distributors",
    leadTime: "14-21 days",
    tags: ["flex", "bend", "angle", "position", "gesture"]
  },

  {
    id: "sens-current-acs712-20a-001",
    name: "ACS712-20A Current Sensor",
    description: "Hall-effect current sensor for AC/DC current measurement",
    category: "sensors",
    subcategory: "electrical",
    price: 12000,
    studentPrice: 10200,
    image: "/images/sensors/acs712-20a.jpg",
    inStock: true,
    stockLevel: 25,
    rating: 4.8,
    reviews: 89,
    specifications: {
      "Current Range": "±20A",
      "Sensitivity": "100mV/A",
      "Accuracy": "±1.5%",
      "Bandwidth": "80kHz",
      "Isolation": "2.1kVrms",
      "Operating Voltage": "5V"
    },
    compatibility: ["Arduino", "ESP32", "Power monitoring", "Motor control"],
    projects: ["Current monitoring", "Power meters", "Motor control", "Energy monitoring"],
    supplier: "Current sensor distributors",
    leadTime: "7-10 days",
    tags: ["current", "acs712", "20amp", "hall-effect", "monitoring"]
  },

  {
    id: "sens-voltage-divider-25v-001",
    name: "Voltage Sensor Module 0-25V",
    description: "Voltage divider module for safe high voltage measurement",
    category: "sensors",
    subcategory: "electrical",
    price: 6500,
    studentPrice: 5525,
    image: "/images/sensors/voltage-25v.jpg",
    inStock: true,
    stockLevel: 30,
    rating: 4.6,
    reviews: 78,
    specifications: {
      "Input Range": "0-25V DC",
      "Output Range": "0-5V (Arduino compatible)",
      "Accuracy": "±1%",
      "Resolution": "Depends on ADC",
      "Protection": "Reverse polarity",
      "Interface": "Analog"
    },
    compatibility: ["Arduino", "ESP32", "Voltage monitoring", "Battery systems"],
    projects: ["Battery monitoring", "Power supply measurement", "Voltage logging"],
    supplier: "Voltage measurement specialists",
    leadTime: "5-7 days",
    tags: ["voltage", "25v", "divider", "measurement", "battery"]
  },

  {
    id: "sens-encoder-rotary-001",
    name: "Rotary Encoder Module",
    description: "Incremental rotary encoder for position and rotation sensing",
    category: "sensors",
    subcategory: "position",
    price: 8000,
    studentPrice: 6800,
    image: "/images/sensors/rotary-encoder.jpg",
    inStock: true,
    stockLevel: 45,
    rating: 4.7,
    reviews: 123,
    specifications: {
      "Resolution": "20 pulses per revolution",
      "Output": "Quadrature (A/B phases)",
      "Operating Voltage": "5V",
      "Current": "<10mA",
      "Button": "Built-in push button",
      "Shaft": "D-shaft"
    },
    compatibility: ["Arduino", "ESP32", "Menu navigation", "Motor control"],
    projects: ["Menu navigation", "Volume control", "Motor position", "User interfaces"],
    supplier: "Encoder specialists",
    leadTime: "5-7 days",
    tags: ["encoder", "rotary", "position", "quadrature", "navigation"]
  },

  {
    id: "sens-tilt-sw-520d-001",
    name: "Tilt Switch Module",
    description: "Digital tilt sensor for orientation detection",
    category: "sensors",
    subcategory: "motion",
    price: 3500,
    studentPrice: 2975,
    image: "/images/sensors/tilt-switch.jpg",
    inStock: true,
    stockLevel: 80,
    rating: 4.5,
    reviews: 156,
    specifications: {
      "Type": "Ball tilt switch",
      "Sensitivity": "±15°",
      "Operating Voltage": "3.3V-5V",
      "Output": "Digital ON/OFF",
      "Current": "<1mA",
      "Size": "2.5 x 6mm"
    },
    compatibility: ["Arduino", "ESP32", "Orientation detection", "Safety systems"],
    projects: ["Orientation detection", "Security alarms", "Toy applications", "Safety switches"],
    supplier: "Switch specialists",
    leadTime: "3-5 days",
    tags: ["tilt", "orientation", "switch", "ball", "digital"]
  },

  {
    id: "sens-reed-switch-001",
    name: "Reed Switch Magnetic Sensor",
    description: "Magnetic proximity switch for door/window sensing",
    category: "sensors",
    subcategory: "magnetic",
    price: 2500,
    studentPrice: 2125,
    image: "/images/sensors/reed-switch.jpg",
    inStock: true,
    stockLevel: 100,
    rating: 4.6,
    reviews: 234,
    specifications: {
      "Type": "Normally open",
      "Switching Power": "10W max",
      "Switching Voltage": "200V max",
      "Switching Current": "0.5A max",
      "Operate Distance": "10-15mm",
      "Contact Resistance": "<150mΩ"
    },
    compatibility: ["Arduino", "ESP32", "Security systems", "Door sensors"],
    projects: ["Door/window sensors", "Security systems", "Position detection", "Automation"],
    supplier: "Magnetic sensor distributors",
    leadTime: "3-5 days",
    tags: ["reed", "magnetic", "proximity", "door", "security"]
  },

  {
    id: "sens-limit-switch-001",
    name: "Micro Limit Switch",
    description: "Mechanical limit switch for position sensing",
    category: "sensors",
    subcategory: "position",
    price: 4000,
    studentPrice: 3400,
    image: "/images/sensors/limit-switch.jpg",
    inStock: true,
    stockLevel: 60,
    rating: 4.7,
    reviews: 89,
    specifications: {
      "Type": "SPDT",
      "Contact Rating": "5A @ 250V AC",
      "Operating Force": "1.47N",
      "Travel": "0.5mm",
      "Life Cycle": "10 million operations",
      "Temperature": "-25°C to 80°C"
    },
    compatibility: ["CNC machines", "3D printers", "Automation", "Robotics"],
    projects: ["CNC end stops", "3D printer limits", "Robotic arms", "Industrial automation"],
    supplier: "Industrial switch distributors",
    leadTime: "5-7 days",
    tags: ["limit", "switch", "mechanical", "position", "cnc"]
  },

  {
    id: "sens-ph-probe-new",
    name: "pH Sensor Module",
    description: "Digital pH sensor for water quality monitoring",
    category: "sensors",
    subcategory: "chemical",
    price: 45000,
    studentPrice: 38250,
    image: "/images/sensors/ph-sensor.jpg",
    inStock: true,
    stockLevel: 15,
    rating: 4.8,
    reviews: 28,
    specifications: {
      "Range": "0-14 pH",
      "Accuracy": "±0.1 pH",
      "Response Time": "<1 minute",
      "Operating Temperature": "0-60°C",
      "Interface": "Analog",
      "Probe": "Glass electrode"
    },
    compatibility: ["Arduino", "ESP32", "Water quality", "Hydroponics"],
    projects: ["Water quality monitoring", "Hydroponics", "Pool monitoring", "Environmental testing"],
    supplier: "Chemical sensor specialists",
    leadTime: "10-14 days",
    tags: ["ph", "water-quality", "chemical", "hydroponics", "monitoring"]
  },

  {
    id: "sens-flow-water-new",
    name: "Water Flow Sensor",
    description: "Turbine flow sensor for water flow rate measurement",
    category: "sensors",
    subcategory: "flow",
    price: 28000,
    studentPrice: 23800,
    image: "/images/sensors/water-flow.jpg",
    inStock: true,
    stockLevel: 18,
    rating: 4.6,
    reviews: 34,
    specifications: {
      "Flow Range": "1-30 L/min",
      "Accuracy": "±3%",
      "Operating Pressure": "≤1.75MPa",
      "Operating Temperature": "-25°C to 80°C",
      "Output": "Digital pulse",
      "Thread": "G1/2"
    },
    compatibility: ["Arduino", "ESP32", "Flow monitoring", "Water systems"],
    projects: ["Water monitoring", "Irrigation control", "Flow meters", "Smart water systems"],
    supplier: "Flow sensor distributors",
    leadTime: "7-10 days",
    tags: ["water", "flow", "turbine", "irrigation", "monitoring"]
  },

  {
    id: "sens-gps-neo8m-new",
    name: "GPS Module NEO-8M",
    description: "High-performance GPS receiver with ceramic antenna",
    category: "sensors",
    subcategory: "positioning",
    price: 45000,
    studentPrice: 38250,
    image: "/images/sensors/gps-neo8m.jpg",
    inStock: true,
    stockLevel: 15,
    rating: 4.9,
    reviews: 76,
    specifications: {
      "Channels": "72 search channels",
      "Accuracy": "2.5m CEP",
      "Update Rate": "1-18Hz",
      "Cold Start": "<26 seconds",
      "Interface": "UART",
      "Antenna": "Built-in ceramic"
    },
    compatibility: ["Arduino", "ESP32", "Navigation", "Tracking"],
    projects: ["GPS tracking", "Navigation", "Asset monitoring", "Weather stations"],
    supplier: "GPS module specialists",
    leadTime: "7-10 days",
    tags: ["gps", "neo-8m", "navigation", "tracking", "positioning"]
  },

  {
    id: "sens-air-quality-new",
    name: "CCS811 Air Quality Sensor",
    description: "Digital gas sensor for VOC and eCO2 monitoring",
    category: "sensors",
    subcategory: "gas",
    price: 32000,
    studentPrice: 27200,
    image: "/images/sensors/air-quality.jpg",
    inStock: true,
    stockLevel: 20,
    rating: 4.5,
    reviews: 25,
    specifications: {
      "Operating Voltage": "3.3V-5V",
      "Interface": "Analog/Digital",
      "Response Time": "<10 seconds",
      "Operating Temperature": "0-50°C"
    },
    compatibility: ["Arduino", "ESP32", "Raspberry Pi"],
    projects: ["Monitoring systems", "IoT projects", "Automation"],
    supplier: "Sensor specialists",
    leadTime: "5-10 days",
    tags: ["gas", "sensor", "monitoring"]
  },

  {
    id: "sens-dust-new",
    name: "PM2.5 Dust Sensor",
    description: "Optical dust sensor for particle measurement",
    category: "sensors",
    subcategory: "environmental",
    price: 25000,
    studentPrice: 21250,
    image: "/images/sensors/dust.jpg",
    inStock: true,
    stockLevel: 21,
    rating: 4.6,
    reviews: 26,
    specifications: {
      "Operating Voltage": "3.3V-5V",
      "Interface": "Analog/Digital",
      "Response Time": "<10 seconds",
      "Operating Temperature": "0-50°C"
    },
    compatibility: ["Arduino", "ESP32", "Raspberry Pi"],
    projects: ["Monitoring systems", "IoT projects", "Automation"],
    supplier: "Sensor specialists",
    leadTime: "5-10 days",
    tags: ["environmental", "sensor", "monitoring"]
  },

  {
    id: "sens-noise-new",
    name: "Sound Level Meter",
    description: "Digital sound level measurement sensor",
    category: "sensors",
    subcategory: "audio",
    price: 8000,
    studentPrice: 6800,
    image: "/images/sensors/noise.jpg",
    inStock: true,
    stockLevel: 22,
    rating: 4.7,
    reviews: 27,
    specifications: {
      "Operating Voltage": "3.3V-5V",
      "Interface": "Analog/Digital",
      "Response Time": "<10 seconds",
      "Operating Temperature": "0-50°C"
    },
    compatibility: ["Arduino", "ESP32", "Raspberry Pi"],
    projects: ["Monitoring systems", "IoT projects", "Automation"],
    supplier: "Sensor specialists",
    leadTime: "5-10 days",
    tags: ["audio", "sensor", "monitoring"]
  },

  {
    id: "sens-heart-rate-new",
    name: "Heart Rate Monitor",
    description: "Optical heart rate sensor module",
    category: "sensors",
    subcategory: "biometric",
    price: 28000,
    studentPrice: 23800,
    image: "/images/sensors/heart-rate.jpg",
    inStock: true,
    stockLevel: 23,
    rating: 4.8,
    reviews: 28,
    specifications: {
      "Operating Voltage": "3.3V-5V",
      "Interface": "Analog/Digital",
      "Response Time": "<10 seconds",
      "Operating Temperature": "0-50°C"
    },
    compatibility: ["Arduino", "ESP32", "Raspberry Pi"],
    projects: ["Monitoring systems", "IoT projects", "Automation"],
    supplier: "Sensor specialists",
    leadTime: "5-10 days",
    tags: ["biometric", "sensor", "monitoring"]
  },

  {
    id: "sens-force-new",
    name: "Force Sensitive Resistor",
    description: "Pressure-sensitive resistor for force measurement",
    category: "sensors",
    subcategory: "force",
    price: 8500,
    studentPrice: 7225,
    image: "/images/sensors/force.jpg",
    inStock: true,
    stockLevel: 24,
    rating: 4.9,
    reviews: 29,
    specifications: {
      "Operating Voltage": "3.3V-5V",
      "Interface": "Analog/Digital",
      "Response Time": "<10 seconds",
      "Operating Temperature": "0-50°C"
    },
    compatibility: ["Arduino", "ESP32", "Raspberry Pi"],
    projects: ["Monitoring systems", "IoT projects", "Automation"],
    supplier: "Sensor specialists",
    leadTime: "5-10 days",
    tags: ["force", "sensor", "monitoring"]
  },

  {
    id: "sens-flex-new",
    name: "Flex Sensor",
    description: "Bend-sensitive resistor for angle measurement",
    category: "sensors",
    subcategory: "position",
    price: 15000,
    studentPrice: 12750,
    image: "/images/sensors/flex.jpg",
    inStock: true,
    stockLevel: 25,
    rating: 4.5,
    reviews: 30,
    specifications: {
      "Operating Voltage": "3.3V-5V",
      "Interface": "Analog/Digital",
      "Response Time": "<10 seconds",
      "Operating Temperature": "0-50°C"
    },
    compatibility: ["Arduino", "ESP32", "Raspberry Pi"],
    projects: ["Monitoring systems", "IoT projects", "Automation"],
    supplier: "Sensor specialists",
    leadTime: "5-10 days",
    tags: ["position", "sensor", "monitoring"]
  },

  {
    id: "sens-current-new",
    name: "Current Sensor 20A",
    description: "Hall-effect current sensor for monitoring",
    category: "sensors",
    subcategory: "electrical",
    price: 12000,
    studentPrice: 10200,
    image: "/images/sensors/current.jpg",
    inStock: true,
    stockLevel: 26,
    rating: 4.6,
    reviews: 31,
    specifications: {
      "Operating Voltage": "3.3V-5V",
      "Interface": "Analog/Digital",
      "Response Time": "<10 seconds",
      "Operating Temperature": "0-50°C"
    },
    compatibility: ["Arduino", "ESP32", "Raspberry Pi"],
    projects: ["Monitoring systems", "IoT projects", "Automation"],
    supplier: "Sensor specialists",
    leadTime: "5-10 days",
    tags: ["electrical", "sensor", "monitoring"]
  },

  {
    id: "sens-voltage-new",
    name: "Voltage Sensor 25V",
    description: "Voltage divider for safe measurement",
    category: "sensors",
    subcategory: "electrical",
    price: 6500,
    studentPrice: 5525,
    image: "/images/sensors/voltage.jpg",
    inStock: true,
    stockLevel: 27,
    rating: 4.7,
    reviews: 32,
    specifications: {
      "Operating Voltage": "3.3V-5V",
      "Interface": "Analog/Digital",
      "Response Time": "<10 seconds",
      "Operating Temperature": "0-50°C"
    },
    compatibility: ["Arduino", "ESP32", "Raspberry Pi"],
    projects: ["Monitoring systems", "IoT projects", "Automation"],
    supplier: "Sensor specialists",
    leadTime: "5-10 days",
    tags: ["electrical", "sensor", "monitoring"]
  },

  {
    id: "sens-encoder-new",
    name: "Rotary Encoder",
    description: "Incremental encoder for position sensing",
    category: "sensors",
    subcategory: "position",
    price: 8000,
    studentPrice: 6800,
    image: "/images/sensors/encoder.jpg",
    inStock: true,
    stockLevel: 28,
    rating: 4.8,
    reviews: 33,
    specifications: {
      "Operating Voltage": "3.3V-5V",
      "Interface": "Analog/Digital",
      "Response Time": "<10 seconds",
      "Operating Temperature": "0-50°C"
    },
    compatibility: ["Arduino", "ESP32", "Raspberry Pi"],
    projects: ["Monitoring systems", "IoT projects", "Automation"],
    supplier: "Sensor specialists",
    leadTime: "5-10 days",
    tags: ["position", "sensor", "monitoring"]
  },

  {
    id: "sens-tilt-new",
    name: "Tilt Switch",
    description: "Digital tilt sensor for orientation",
    category: "sensors",
    subcategory: "motion",
    price: 3500,
    studentPrice: 2975,
    image: "/images/sensors/tilt.jpg",
    inStock: true,
    stockLevel: 29,
    rating: 4.9,
    reviews: 34,
    specifications: {
      "Operating Voltage": "3.3V-5V",
      "Interface": "Analog/Digital",
      "Response Time": "<10 seconds",
      "Operating Temperature": "0-50°C"
    },
    compatibility: ["Arduino", "ESP32", "Raspberry Pi"],
    projects: ["Monitoring systems", "IoT projects", "Automation"],
    supplier: "Sensor specialists",
    leadTime: "5-10 days",
    tags: ["motion", "sensor", "monitoring"]
  },

  {
    id: "sens-reed-new",
    name: "Reed Switch",
    description: "Magnetic proximity switch",
    category: "sensors",
    subcategory: "magnetic",
    price: 2500,
    studentPrice: 2125,
    image: "/images/sensors/reed.jpg",
    inStock: true,
    stockLevel: 30,
    rating: 4.5,
    reviews: 35,
    specifications: {
      "Operating Voltage": "3.3V-5V",
      "Interface": "Analog/Digital",
      "Response Time": "<10 seconds",
      "Operating Temperature": "0-50°C"
    },
    compatibility: ["Arduino", "ESP32", "Raspberry Pi"],
    projects: ["Monitoring systems", "IoT projects", "Automation"],
    supplier: "Sensor specialists",
    leadTime: "5-10 days",
    tags: ["magnetic", "sensor", "monitoring"]
  },

  {
    id: "sens-limit-new",
    name: "Limit Switch",
    description: "Mechanical position switch",
    category: "sensors",
    subcategory: "position",
    price: 4000,
    studentPrice: 3400,
    image: "/images/sensors/limit.jpg",
    inStock: true,
    stockLevel: 31,
    rating: 4.6,
    reviews: 36,
    specifications: {
      "Operating Voltage": "3.3V-5V",
      "Interface": "Analog/Digital",
      "Response Time": "<10 seconds",
      "Operating Temperature": "0-50°C"
    },
    compatibility: ["Arduino", "ESP32", "Raspberry Pi"],
    projects: ["Monitoring systems", "IoT projects", "Automation"],
    supplier: "Sensor specialists",
    leadTime: "5-10 days",
    tags: ["position", "sensor", "monitoring"]
  },

  {
    id: "sens-pressure-new",
    name: "Pressure Sensor",
    description: "Barometric pressure measurement",
    category: "sensors",
    subcategory: "environmental",
    price: 12000,
    studentPrice: 10200,
    image: "/images/sensors/pressure.jpg",
    inStock: true,
    stockLevel: 32,
    rating: 4.7,
    reviews: 37,
    specifications: {
      "Operating Voltage": "3.3V-5V",
      "Interface": "Analog/Digital",
      "Response Time": "<10 seconds",
      "Operating Temperature": "0-50°C"
    },
    compatibility: ["Arduino", "ESP32", "Raspberry Pi"],
    projects: ["Monitoring systems", "IoT projects", "Automation"],
    supplier: "Sensor specialists",
    leadTime: "5-10 days",
    tags: ["environmental", "sensor", "monitoring"]
  },

  {
    id: "sens-light-new",
    name: "Light Sensor",
    description: "Digital ambient light measurement",
    category: "sensors",
    subcategory: "optical",
    price: 14000,
    studentPrice: 11900,
    image: "/images/sensors/light.jpg",
    inStock: true,
    stockLevel: 33,
    rating: 4.8,
    reviews: 38,
    specifications: {
      "Operating Voltage": "3.3V-5V",
      "Interface": "Analog/Digital",
      "Response Time": "<10 seconds",
      "Operating Temperature": "0-50°C"
    },
    compatibility: ["Arduino", "ESP32", "Raspberry Pi"],
    projects: ["Monitoring systems", "IoT projects", "Automation"],
    supplier: "Sensor specialists",
    leadTime: "5-10 days",
    tags: ["optical", "sensor", "monitoring"]
  },

  {
    id: "sens-uv-new",
    name: "UV Index Sensor",
    description: "UV radiation measurement",
    category: "sensors",
    subcategory: "optical",
    price: 18000,
    studentPrice: 15300,
    image: "/images/sensors/uv.jpg",
    inStock: true,
    stockLevel: 34,
    rating: 4.9,
    reviews: 39,
    specifications: {
      "Operating Voltage": "3.3V-5V",
      "Interface": "Analog/Digital",
      "Response Time": "<10 seconds",
      "Operating Temperature": "0-50°C"
    },
    compatibility: ["Arduino", "ESP32", "Raspberry Pi"],
    projects: ["Monitoring systems", "IoT projects", "Automation"],
    supplier: "Sensor specialists",
    leadTime: "5-10 days",
    tags: ["optical", "sensor", "monitoring"]
  },

  {
    id: "sens-imu-new",
    name: "9-Axis IMU",
    description: "Complete motion sensing module",
    category: "sensors",
    subcategory: "motion",
    price: 35000,
    studentPrice: 29750,
    image: "/images/sensors/imu.jpg",
    inStock: true,
    stockLevel: 35,
    rating: 4.5,
    reviews: 40,
    specifications: {
      "Operating Voltage": "3.3V-5V",
      "Interface": "Analog/Digital",
      "Response Time": "<10 seconds",
      "Operating Temperature": "0-50°C"
    },
    compatibility: ["Arduino", "ESP32", "Raspberry Pi"],
    projects: ["Monitoring systems", "IoT projects", "Automation"],
    supplier: "Sensor specialists",
    leadTime: "5-10 days",
    tags: ["motion", "sensor", "monitoring"]
  },

  {
    id: "sens-load-cell-new",
    name: "Load Cell 5kg",
    description: "Precision weight measurement",
    category: "sensors",
    subcategory: "force",
    price: 35000,
    studentPrice: 29750,
    image: "/images/sensors/load-cell.jpg",
    inStock: true,
    stockLevel: 36,
    rating: 4.6,
    reviews: 41,
    specifications: {
      "Operating Voltage": "3.3V-5V",
      "Interface": "Analog/Digital",
      "Response Time": "<10 seconds",
      "Operating Temperature": "0-50°C"
    },
    compatibility: ["Arduino", "ESP32", "Raspberry Pi"],
    projects: ["Monitoring systems", "IoT projects", "Automation"],
    supplier: "Sensor specialists",
    leadTime: "5-10 days",
    tags: ["force", "sensor", "monitoring"]
  },

  {
    id: "sens-proximity-new",
    name: "Ultrasonic Long Range",
    description: "8-meter distance sensor",
    category: "sensors",
    subcategory: "distance",
    price: 15000,
    studentPrice: 12750,
    image: "/images/sensors/proximity.jpg",
    inStock: true,
    stockLevel: 37,
    rating: 4.7,
    reviews: 42,
    specifications: {
      "Operating Voltage": "3.3V-5V",
      "Interface": "Analog/Digital",
      "Response Time": "<10 seconds",
      "Operating Temperature": "0-50°C"
    },
    compatibility: ["Arduino", "ESP32", "Raspberry Pi"],
    projects: ["Monitoring systems", "IoT projects", "Automation"],
    supplier: "Sensor specialists",
    leadTime: "5-10 days",
    tags: ["distance", "sensor", "monitoring"]
  },

  {
    id: "sens-o2-new",
    name: "Dissolved Oxygen",
    description: "Water quality oxygen sensor",
    category: "sensors",
    subcategory: "chemical",
    price: 125000,
    studentPrice: 106250,
    image: "/images/sensors/o2.jpg",
    inStock: true,
    stockLevel: 38,
    rating: 4.8,
    reviews: 43,
    specifications: {
      "Operating Voltage": "3.3V-5V",
      "Interface": "Analog/Digital",
      "Response Time": "<10 seconds",
      "Operating Temperature": "0-50°C"
    },
    compatibility: ["Arduino", "ESP32", "Raspberry Pi"],
    projects: ["Monitoring systems", "IoT projects", "Automation"],
    supplier: "Sensor specialists",
    leadTime: "5-10 days",
    tags: ["chemical", "sensor", "monitoring"]
  },

  {
    id: "sens-gas-mq2-new",
    name: "MQ-2 Gas Sensor",
    description: "LPG and smoke detection",
    category: "sensors",
    subcategory: "gas",
    price: 10000,
    studentPrice: 8500,
    image: "/images/sensors/gas-mq2.jpg",
    inStock: true,
    stockLevel: 39,
    rating: 4.9,
    reviews: 44,
    specifications: {
      "Operating Voltage": "3.3V-5V",
      "Interface": "Analog/Digital",
      "Response Time": "<10 seconds",
      "Operating Temperature": "0-50°C"
    },
    compatibility: ["Arduino", "ESP32", "Raspberry Pi"],
    projects: ["Monitoring systems", "IoT projects", "Automation"],
    supplier: "Sensor specialists",
    leadTime: "5-10 days",
    tags: ["gas", "sensor", "monitoring"]
  },

  {
    id: "sens-gas-mq3-new",
    name: "MQ-3 Alcohol Sensor",
    description: "Alcohol vapor detection",
    category: "sensors",
    subcategory: "gas",
    price: 11000,
    studentPrice: 9350,
    image: "/images/sensors/gas-mq3.jpg",
    inStock: true,
    stockLevel: 40,
    rating: 4.5,
    reviews: 45,
    specifications: {
      "Operating Voltage": "3.3V-5V",
      "Interface": "Analog/Digital",
      "Response Time": "<10 seconds",
      "Operating Temperature": "0-50°C"
    },
    compatibility: ["Arduino", "ESP32", "Raspberry Pi"],
    projects: ["Monitoring systems", "IoT projects", "Automation"],
    supplier: "Sensor specialists",
    leadTime: "5-10 days",
    tags: ["gas", "sensor", "monitoring"]
  },

  {
    id: "sens-gas-mq4-new",
    name: "MQ-4 Methane Sensor",
    description: "Natural gas detection",
    category: "sensors",
    subcategory: "gas",
    price: 12000,
    studentPrice: 10200,
    image: "/images/sensors/gas-mq4.jpg",
    inStock: true,
    stockLevel: 41,
    rating: 4.6,
    reviews: 46,
    specifications: {
      "Operating Voltage": "3.3V-5V",
      "Interface": "Analog/Digital",
      "Response Time": "<10 seconds",
      "Operating Temperature": "0-50°C"
    },
    compatibility: ["Arduino", "ESP32", "Raspberry Pi"],
    projects: ["Monitoring systems", "IoT projects", "Automation"],
    supplier: "Sensor specialists",
    leadTime: "5-10 days",
    tags: ["gas", "sensor", "monitoring"]
  },

  {
    id: "sens-gas-mq6-new",
    name: "MQ-6 LPG Sensor",
    description: "Butane and propane detection",
    category: "sensors",
    subcategory: "gas",
    price: 10500,
    studentPrice: 8925,
    image: "/images/sensors/gas-mq6.jpg",
    inStock: true,
    stockLevel: 42,
    rating: 4.7,
    reviews: 47,
    specifications: {
      "Operating Voltage": "3.3V-5V",
      "Interface": "Analog/Digital",
      "Response Time": "<10 seconds",
      "Operating Temperature": "0-50°C"
    },
    compatibility: ["Arduino", "ESP32", "Raspberry Pi"],
    projects: ["Monitoring systems", "IoT projects", "Automation"],
    supplier: "Sensor specialists",
    leadTime: "5-10 days",
    tags: ["gas", "sensor", "monitoring"]
  },

  {
    id: "sens-gas-mq7-new",
    name: "MQ-7 CO Sensor",
    description: "Carbon monoxide detection",
    category: "sensors",
    subcategory: "gas",
    price: 13000,
    studentPrice: 11050,
    image: "/images/sensors/gas-mq7.jpg",
    inStock: true,
    stockLevel: 43,
    rating: 4.8,
    reviews: 48,
    specifications: {
      "Operating Voltage": "3.3V-5V",
      "Interface": "Analog/Digital",
      "Response Time": "<10 seconds",
      "Operating Temperature": "0-50°C"
    },
    compatibility: ["Arduino", "ESP32", "Raspberry Pi"],
    projects: ["Monitoring systems", "IoT projects", "Automation"],
    supplier: "Sensor specialists",
    leadTime: "5-10 days",
    tags: ["gas", "sensor", "monitoring"]
  },

  {
    id: "sens-gas-mq8-new",
    name: "MQ-8 Hydrogen Sensor",
    description: "Hydrogen gas detection",
    category: "sensors",
    subcategory: "gas",
    price: 14000,
    studentPrice: 11900,
    image: "/images/sensors/gas-mq8.jpg",
    inStock: true,
    stockLevel: 44,
    rating: 4.9,
    reviews: 49,
    specifications: {
      "Operating Voltage": "3.3V-5V",
      "Interface": "Analog/Digital",
      "Response Time": "<10 seconds",
      "Operating Temperature": "0-50°C"
    },
    compatibility: ["Arduino", "ESP32", "Raspberry Pi"],
    projects: ["Monitoring systems", "IoT projects", "Automation"],
    supplier: "Sensor specialists",
    leadTime: "5-10 days",
    tags: ["gas", "sensor", "monitoring"]
  },

  {
    id: "sens-gas-mq9-new",
    name: "MQ-9 CO & Flammable Gas",
    description: "Multi-gas detection sensor",
    category: "sensors",
    subcategory: "gas",
    price: 15000,
    studentPrice: 12750,
    image: "/images/sensors/gas-mq9.jpg",
    inStock: true,
    stockLevel: 45,
    rating: 4.5,
    reviews: 50,
    specifications: {
      "Operating Voltage": "3.3V-5V",
      "Interface": "Analog/Digital",
      "Response Time": "<10 seconds",
      "Operating Temperature": "0-50°C"
    },
    compatibility: ["Arduino", "ESP32", "Raspberry Pi"],
    projects: ["Monitoring systems", "IoT projects", "Automation"],
    supplier: "Sensor specialists",
    leadTime: "5-10 days",
    tags: ["gas", "sensor", "monitoring"]
  }

];


// Additional 27 sensors to reach 101 total
const finalSensors: SensorModule[] = [
  {
    id: "sens-flow-water-new",
    name: "Water Flow Sensor",
    description: "Turbine flow sensor for water flow rate measurement",
    category: "sensors",
    subcategory: "flow",
    price: 28000,
    studentPrice: 23800,
    image: "/images/sensors/water-flow.jpg",
    inStock: true,
    stockLevel: 18,
    rating: 4.6,
    reviews: 34,
    specifications: {
      "Flow Range": "1-30 L/min",
      "Accuracy": "±3%",
      "Operating Pressure": "≤1.75MPa",
      "Operating Temperature": "-25°C to 80°C",
      "Output": "Digital pulse",
      "Thread": "G1/2"
    },
    compatibility: ["Arduino", "ESP32", "Flow monitoring", "Water systems"],
    projects: ["Water monitoring", "Irrigation control", "Flow meters", "Smart water systems"],
    supplier: "Flow sensor distributors",
    leadTime: "7-10 days",
    tags: ["water", "flow", "turbine", "irrigation", "monitoring"]
  },
  {
    id: "sens-ph-probe-new",
    name: "pH Sensor Module",
    description: "Digital pH sensor for water quality monitoring",
    category: "sensors",
    subcategory: "chemical",
    price: 45000,
    studentPrice: 38250,
    image: "/images/sensors/ph-sensor.jpg",
    inStock: true,
    stockLevel: 15,
    rating: 4.8,
    reviews: 28,
    specifications: {
      "Range": "0-14 pH",
      "Accuracy": "±0.1 pH",
      "Response Time": "<1 minute",
      "Operating Temperature": "0-60°C",
      "Interface": "Analog",
      "Probe": "Glass electrode"
    },
    compatibility: ["Arduino", "ESP32", "Water quality", "Hydroponics"],
    projects: ["Water quality monitoring", "Hydroponics", "Pool monitoring", "Environmental testing"],
    supplier: "Chemical sensor specialists",
    leadTime: "10-14 days",
    tags: ["ph", "water-quality", "chemical", "hydroponics", "monitoring"]
  },
  {
    id: "sens-turbidity-new",
    name: "Turbidity Sensor Module",
    description: "Optical turbidity sensor for water clarity measurement",
    category: "sensors",
    subcategory: "optical",
    price: 38000,
    studentPrice: 32300,
    image: "/images/sensors/turbidity.jpg",
    inStock: true,
    stockLevel: 12,
    rating: 4.7,
    reviews: 22,
    specifications: {
      "Range": "0-1000 NTU",
      "Accuracy": "±5%",
      "Operating Voltage": "5V DC",
      "Output": "0-4.5V analog",
      "Operating Temperature": "5-90°C",
      "Response Time": "<1 second"
    },
    compatibility: ["Arduino", "ESP32", "Water quality", "Environmental monitoring"],
    projects: ["Water quality", "Filtration monitoring", "Environmental studies", "Industrial water"],
    supplier: "Water quality specialists",
    leadTime: "14-21 days",
    tags: ["turbidity", "water-clarity", "optical", "ntu", "water-quality"]
  },

  {
    id: "sens-conductivity-new",
    name: "Water Conductivity Sensor",
    description: "Digital water conductivity sensor for TDS measurement",
    category: "sensors",
    subcategory: "chemical",
    price: 42000,
    studentPrice: 35700,
    image: "/images/sensors/conductivity.jpg",
    inStock: true,
    stockLevel: 10,
    rating: 4.6,
    reviews: 19,
    specifications: {
      "Range": "1-20000 μS/cm",
      "Accuracy": "±2%",
      "Operating Temperature": "5-40°C",
      "Interface": "UART",
      "Power": "3.3V-5V DC",
      "Probe Material": "Graphite"
    },
    compatibility: ["Arduino", "ESP32", "Water quality", "TDS monitoring"],
    projects: ["Water purity", "TDS monitoring", "Hydroponics", "Pool maintenance"],
    supplier: "Water analysis equipment",
    leadTime: "14-21 days",
    tags: ["conductivity", "tds", "water-purity", "graphite", "uart"]
  },

  {
    id: "sens-fingerprint-new",
    name: "Fingerprint Scanner Module",
    description: "Optical fingerprint sensor for biometric authentication",
    category: "sensors",
    subcategory: "biometric",
    price: 85000,
    studentPrice: 72250,
    image: "/images/sensors/fingerprint.jpg",
    inStock: true,
    stockLevel: 8,
    rating: 4.8,
    reviews: 25,
    specifications: {
      "Image Size": "256x288 pixels",
      "Template Size": "512 bytes",
      "Storage": "200 fingerprints",
      "False Accept Rate": "<0.001%",
      "Interface": "UART",
      "Power": "3.3V-6V DC"
    },
    compatibility: ["Arduino", "ESP32", "Security systems"],
    projects: ["Access control", "Security systems", "Attendance systems"],
    supplier: "Biometric equipment specialists",
    leadTime: "14-21 days",
    tags: ["fingerprint", "biometric", "security", "authentication"]
  },

  {
    id: "sens-rfid-125khz-new",
    name: "RFID Reader Module 125kHz",
    description: "Low frequency RFID reader for access control applications",
    category: "sensors",
    subcategory: "rfid",
    price: 25000,
    studentPrice: 21250,
    image: "/images/sensors/rfid-125khz.jpg",
    inStock: true,
    stockLevel: 22,
    rating: 4.7,
    reviews: 48,
    specifications: {
      "Frequency": "125kHz",
      "Reading Distance": "2-12cm",
      "Supported Cards": "EM4100, EM4102",
      "Interface": "UART",
      "Operating Voltage": "9-12V DC",
      "Current": "<50mA"
    },
    compatibility: ["Arduino", "ESP32", "Access control"],
    projects: ["Access control", "Asset tracking", "Attendance systems"],
    supplier: "RFID equipment distributors",
    leadTime: "7-10 days",
    tags: ["rfid", "125khz", "access-control", "em4100"]
  },

  {
    id: "sens-accelerometer-new",
    name: "ADXL345 3-Axis Accelerometer",
    description: "High-resolution 3-axis accelerometer with digital output",
    category: "sensors",
    subcategory: "motion",
    price: 18000,
    studentPrice: 15300,
    image: "/images/sensors/adxl345.jpg",
    inStock: true,
    stockLevel: 28,
    rating: 4.8,
    reviews: 89,
    specifications: {
      "Range": "±2g, ±4g, ±8g, ±16g",
      "Resolution": "13-bit",
      "Interface": "I2C/SPI",
      "Power": "2.0V-3.6V",
      "Noise": "150μg/√Hz",
      "Package": "LGA-14"
    },
    compatibility: ["Arduino", "ESP32", "Motion detection", "Gaming"],
    projects: ["Motion sensing", "Tilt detection", "Gaming controllers", "Activity tracking"],
    supplier: "Motion sensor distributors",
    leadTime: "5-7 days",
    tags: ["accelerometer", "adxl345", "3-axis", "motion", "tilt"]
  },

  {
    id: "sens-gyroscope-new",
    name: "L3G4200D 3-Axis Gyroscope",
    description: "MEMS 3-axis gyroscope for angular velocity measurement",
    category: "sensors",
    subcategory: "motion",
    price: 22000,
    studentPrice: 18700,
    image: "/images/sensors/l3g4200d.jpg",
    inStock: true,
    stockLevel: 20,
    rating: 4.7,
    reviews: 45,
    specifications: {
      "Range": "±250, ±500, ±2000 dps",
      "Interface": "I2C/SPI",
      "Power": "2.4V-3.6V",
      "Resolution": "16-bit",
      "Package": "LGA-16",
      "Output Rate": "100-800Hz"
    },
    compatibility: ["Arduino", "ESP32", "Motion tracking", "Stabilization"],
    projects: ["Motion tracking", "Drone stabilization", "Gaming", "IMU systems"],
    supplier: "Motion sensor distributors",
    leadTime: "7-10 days",
    tags: ["gyroscope", "l3g4200d", "3-axis", "angular-velocity", "mems"]
  },

  {
    id: "sens-magnetometer-new",
    name: "HMC5883L 3-Axis Magnetometer",
    description: "Digital compass and magnetic field sensor",
    category: "sensors",
    subcategory: "magnetic",
    price: 16000,
    studentPrice: 13600,
    image: "/images/sensors/hmc5883l.jpg",
    inStock: true,
    stockLevel: 25,
    rating: 4.6,
    reviews: 38,
    specifications: {
      "Range": "±1.3 to ±8.1 gauss",
      "Resolution": "5 milligauss",
      "Interface": "I2C",
      "Power": "2.16V-3.6V",
      "Output Rate": "0.75-75Hz",
      "Package": "LCC-16"
    },
    compatibility: ["Arduino", "ESP32", "Navigation", "Compass"],
    projects: ["Digital compass", "Navigation", "Metal detection", "Orientation sensing"],
    supplier: "Magnetic sensor distributors",
    leadTime: "7-10 days",
    tags: ["magnetometer", "compass", "hmc5883l", "magnetic-field", "navigation"]
  }

];
// Combine all sensor arrays - Updated to include new sensors
export const allSensorsModules: SensorModule[] = [
  ...environmentalMotionSensors,
  ...additionalSensors,
  ...additionalSensors27,
  ...finalSensors
];
// Export categories for filtering
export const sensorCategories = [
  { id: "environmental", name: "Environmental Sensors", category: "sensors" },
  { id: "motion", name: "Motion & Position", category: "sensors" },
  { id: "audio", name: "Audio & Sound", category: "sensors" },
  { id: "distance", name: "Distance & Proximity", category: "sensors" },
  { id: "temperature", name: "Temperature", category: "sensors" },
  { id: "data-conversion", name: "Data Conversion", category: "modules" },
  { id: "timing", name: "Timing & Clock", category: "modules" },
  { id: "motor-control", name: "Motor Control", category: "modules" },
  { id: "storage", name: "Data Storage", category: "modules" },
  { id: "power", name: "Power Management", category: "modules" }
]

export const sensorPriceRanges = [
  { id: "under-5k", name: "Under 5,000 UGX", min: 0, max: 5000 },
  { id: "5k-10k", name: "5,000 - 10,000 UGX", min: 5000, max: 10000 },
  { id: "10k-20k", name: "10,000 - 20,000 UGX", min: 10000, max: 20000 },
  { id: "over-20k", name: "Over 20,000 UGX", min: 20000, max: Infinity }
] 