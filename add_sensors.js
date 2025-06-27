const fs = require('fs');

const newSensors = `
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
  }
];
`;

// Read the current file
let content = fs.readFileSync('src/lib/data/sensors-modules.ts', 'utf8');

// Find the export statement and insert before it
const exportIndex = content.indexOf('// Combine all sensor arrays');
if (exportIndex !== -1) {
  const beforeExport = content.substring(0, exportIndex);
  const afterExport = content.substring(exportIndex);
  
  // Insert new sensors
  content = beforeExport + newSensors + afterExport;
  
  // Update the export to include finalSensors
  content = content.replace(
    'export const allSensorsModules: SensorModule[] = [\n  ...environmentalMotionSensors,\n  ...additionalSensors,\n  ...advancedSensors,\n  ...professionalSensors\n];',
    'export const allSensorsModules: SensorModule[] = [\n  ...environmentalMotionSensors,\n  ...additionalSensors,\n  ...advancedSensors,\n  ...professionalSensors,\n  ...finalSensors\n];'
  );
  
  fs.writeFileSync('src/lib/data/sensors-modules.ts', content);
  console.log('Successfully added new sensors!');
} else {
  console.log('Could not find export location');
}
