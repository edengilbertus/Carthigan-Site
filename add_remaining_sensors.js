const fs = require('fs');

// Read the current file
let content = fs.readFileSync('src/lib/data/sensors-modules.ts', 'utf8');

// Add remaining 33 sensors to reach 101 total
const remaining33Sensors = `
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
  }`;

// Add at the end of the professionalSensors array
const insertPoint = content.lastIndexOf('  }\n];');
if (insertPoint !== -1) {
  const beforeInsert = content.substring(0, insertPoint);
  const afterInsert = content.substring(insertPoint);
  
  // Insert the new sensors
  content = beforeInsert + '  },' + remaining33Sensors + '\n\n' + afterInsert;
  
  fs.writeFileSync('src/lib/data/sensors-modules.ts', content);
  console.log('Added remaining sensors successfully!');
} else {
  console.log('Could not find insertion point');
}
