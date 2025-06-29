export interface AudioVideoProduct {
  id: string
  name: string
  description: string
  category: string
  subcategory: string
  price: number
  studentPrice?: number
  image: string
  inStock: boolean
  stockLevel: number
  rating: number
  reviews: number
  compatibility: string[]
  features: string[]
  leadTime: string
  tags: string[]
  specifications: Record<string, string>
}

export const allAudioVideoProducts: AudioVideoProduct[] = [
  {
    id: 'bluetooth-speaker-portable',
    name: 'Portable Bluetooth Speaker 20W',
    description: 'High-quality portable Bluetooth speaker with 20W output, perfect for projects and personal use.',
    category: 'Audio & Video',
    subcategory: 'Speakers',
    price: 45000,
    studentPrice: 40000,
    image: '/images/products/bluetooth-speaker.jpg',
    inStock: true,
    stockLevel: 15,
    rating: 4.3,
    reviews: 67,
    compatibility: ['Bluetooth 5.0', 'USB', '3.5mm Jack'],
    features: [
      '20W RMS output',
      'Bluetooth 5.0 connectivity',
      'Built-in microphone',
      '8-hour battery life',
      'IPX6 water resistance'
    ],
    leadTime: 'In Stock',
    tags: ['bluetooth', 'speaker', 'portable', 'wireless', 'waterproof'],
    specifications: {
      'Power Output': '20W RMS',
      'Bluetooth Version': '5.0',
      'Battery Life': '8 hours',
      'Water Rating': 'IPX6',
      'Frequency Response': '60Hz-20kHz'
    }
  },
  {
    id: 'usb-microphone-condenser',
    name: 'USB Condenser Microphone',
    description: 'Professional USB condenser microphone for recording, streaming, and voice projects.',
    category: 'Audio & Video',
    subcategory: 'Microphones',
    price: 85000,
    studentPrice: 75000,
    image: '/images/products/usb-microphone.jpg',
    inStock: true,
    stockLevel: 8,
    rating: 4.6,
    reviews: 43,
    compatibility: ['USB 2.0', 'Windows', 'macOS', 'Linux'],
    features: [
      'Cardioid pickup pattern',
      'Plug-and-play USB',
      'Zero-latency monitoring',
      'Adjustable desktop stand',
      'Mute button'
    ],
    leadTime: 'In Stock',
    tags: ['microphone', 'usb', 'recording', 'streaming', 'professional'],
    specifications: {
      'Type': 'Condenser',
      'Pickup Pattern': 'Cardioid',
      'Frequency Response': '20Hz-20kHz',
      'Sample Rate': '48kHz/16-bit',
      'Connection': 'USB 2.0'
    }
  },
  {
    id: 'audio-amplifier-50w',
    name: '50W Audio Amplifier Module',
    description: 'High-quality 50W stereo audio amplifier module for DIY audio projects and systems.',
    category: 'Audio & Video',
    subcategory: 'Amplifiers',
    price: 35000,
    studentPrice: 30000,
    image: '/images/products/audio-amplifier.jpg',
    inStock: true,
    stockLevel: 22,
    rating: 4.4,
    reviews: 89,
    compatibility: ['12V-24V DC', 'Bluetooth', 'AUX Input'],
    features: [
      '50W x 2 stereo output',
      'Bluetooth 5.0 built-in',
      'Multiple input options',
      'Protection circuits',
      'Compact design'
    ],
    leadTime: 'In Stock',
    tags: ['amplifier', 'bluetooth', 'stereo', 'diy', 'module'],
    specifications: {
      'Power Output': '50W x 2 (4Ω)',
      'Input Voltage': '12V-24V DC',
      'Bluetooth': '5.0',
      'THD': '<0.1%',
      'Dimensions': '10cm x 8cm x 3cm'
    }
  },
  {
    id: 'hdmi-capture-card',
    name: 'HDMI Video Capture Card USB 3.0',
    description: 'High-definition video capture card for streaming, recording, and video processing projects.',
    category: 'Audio & Video',
    subcategory: 'Video Equipment',
    price: 95000,
    studentPrice: 85000,
    image: '/images/products/hdmi-capture.jpg',
    inStock: true,
    stockLevel: 12,
    rating: 4.5,
    reviews: 34,
    compatibility: ['USB 3.0', 'HDMI', 'Windows', 'macOS', 'Linux'],
    features: [
      '1080p60 capture',
      'Zero-latency passthrough',
      'USB 3.0 interface',
      'No driver required',
      'Compact aluminum design'
    ],
    leadTime: 'In Stock',
    tags: ['hdmi', 'capture', 'streaming', 'recording', 'video'],
    specifications: {
      'Max Resolution': '1920x1080@60fps',
      'Input Interface': 'HDMI',
      'Output Interface': 'USB 3.0',
      'Supported OS': 'Windows/macOS/Linux',
      'Power': 'USB powered'
    }
  },
  {
    id: 'webcam-1080p',
    name: '1080p HD Webcam with Microphone',
    description: 'High-definition webcam with built-in microphone for video calls, streaming, and monitoring projects.',
    category: 'Audio & Video',
    subcategory: 'Video Equipment',
    price: 55000,
    studentPrice: 48000,
    image: '/images/products/webcam-1080p.jpg',
    inStock: true,
    stockLevel: 25,
    rating: 4.2,
    reviews: 156,
    compatibility: ['USB 2.0', 'Windows', 'macOS', 'Linux'],
    features: [
      '1080p HD video',
      'Built-in stereo microphone',
      'Auto-focus',
      'Low-light correction',
      'Plug and play'
    ],
    leadTime: 'In Stock',
    tags: ['webcam', '1080p', 'microphone', 'streaming', 'video-calls'],
    specifications: {
      'Video Resolution': '1920x1080@30fps',
      'Microphone': 'Built-in stereo',
      'Focus': 'Auto-focus',
      'Connection': 'USB 2.0',
      'Compatibility': 'Windows/macOS/Linux'
    }
  },
  {
    id: 'studio-headphones',
    name: 'Studio Monitor Headphones',
    description: 'Professional studio monitor headphones for accurate audio monitoring and mixing.',
    category: 'Audio & Video',
    subcategory: 'Headphones',
    price: 75000,
    studentPrice: 65000,
    image: '/images/products/studio-headphones.jpg',
    inStock: true,
    stockLevel: 18,
    rating: 4.6,
    reviews: 67,
    compatibility: ['3.5mm', '6.35mm', 'Audio Interfaces', 'Mixers'],
    features: [
      'Closed-back design',
      'Flat frequency response',
      'Comfortable padding',
      'Detachable coiled cable',
      'Swiveling ear cups'
    ],
    leadTime: 'In Stock',
    tags: ['headphones', 'studio', 'monitoring', 'professional', 'mixing'],
    specifications: {
      'Driver Size': '40mm dynamic',
      'Frequency Response': '15Hz-25kHz',
      'Impedance': '250Ω',
      'SPL': '110dB',
      'Cable': '3m coiled, detachable'
    }
  }
]
