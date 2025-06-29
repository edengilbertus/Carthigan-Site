export interface CoursePackage {
  id: string
  title: string
  category: string
  type: 'HYBRID' | 'ONLINE' | 'IN_PERSON'
  instructor: string
  rating: number
  graduates: number
  duration: string
  weeks: number
  price: number
  originalPrice?: number
  savings?: number
  thumbnail: string
  description: string
  courses: string[]
  technologies: string[]
  outcomes: string[]
  courseComponents: string[]
}

// Career Preparation Packages
export const careerPackages: CoursePackage[] = [
  {
    id: 'fullstack-web-cert',
    title: 'Full-Stack Web Development Certificate',
    category: 'Software & IT',
    type: 'HYBRID',
    instructor: 'Dr. Sarah Mukasa',
    rating: 4.8,
    graduates: 1245,
    duration: '16 weeks',
    weeks: 16,
    price: 850000,
    thumbnail: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=225&fit=crop',
    description: 'Master modern web development with React, Node.js, and databases. Build real-world projects.',
    courses: ['Programming Fundamentals', 'Web Development', 'Database Design', 'Version Control'],
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
    outcomes: ['Portfolio Projects', 'Industry Certification', 'Job Placement Support'],
    courseComponents: [
      'Advanced circuit design and simulation',
      'Industrial automation and control systems', 
      'Renewable energy systems integration',
      'Professional engineering project management',
      'Industry certification preparation (PMP, PE prep)'
    ]
  },
  {
    id: 'package1',
    title: 'Full-Stack Developer Track',
    category: 'Software & IT',
    type: 'HYBRID',
    instructor: 'Dr. Sarah Mukasa',
    rating: 4.8,
    graduates: 892,
    duration: '24 weeks',
    weeks: 24,
    price: 2200000,
    originalPrice: 2500000,
    savings: 300000,
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=225&fit=crop',
    description: 'Complete full-stack development bootcamp with hands-on projects and job placement support.',
    courses: ['Programming Fundamentals', 'Web Development', 'Database Design', 'Version Control'],
    technologies: ['React', 'Node.js', 'Python', 'MongoDB', 'Git'],
    outcomes: ['Professional Portfolio', 'GitHub Profile', 'Job Interview Prep', 'Industry Certification'],
    courseComponents: [
      'Comprehensive programming foundation',
      'Modern web development frameworks',
      'Database design and management',
      'Version control and collaboration',
      'Professional project development'
    ]
  },
  {
    id: 'package2',
    title: 'UI/UX Designer Track',
    category: 'Creative & Design',
    type: 'ONLINE',
    instructor: 'Grace Namukasa',
    rating: 4.7,
    graduates: 650,
    duration: '20 weeks',
    weeks: 20,
    price: 1800000,
    originalPrice: 2000000,
    savings: 200000,
    thumbnail: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=225&fit=crop',
    description: 'Design beautiful, user-friendly interfaces and experiences with Figma and design thinking.',
    courses: ['UX Fundamentals', 'UI Design', 'Figma', 'Adobe Creative Suite'],
    technologies: ['Figma', 'Design Thinking', 'Prototyping', 'User Research'],
    outcomes: ['Design Portfolio', 'Client Projects', 'UX Research Skills'],
    courseComponents: [
      'User experience research and design',
      'Visual design and interface creation',
      'Professional design tool mastery',
      'Design system development',
      'Client project experience'
    ]
  },
  {
    id: 'package3',
    title: 'Digital Marketing Content Creator',
    category: 'Business & Marketing',
    type: 'HYBRID',
    instructor: 'David Katende',
    rating: 4.6,
    graduates: 543,
    duration: '16 weeks',
    weeks: 16,
    price: 1500000,
    originalPrice: 1750000,
    savings: 250000,
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=225&fit=crop',
    description: 'Master digital marketing and content creation for modern businesses.',
    courses: ['Content Writing', 'Social Media', 'Adobe Creative Suite', 'Video Editing'],
    technologies: ['Adobe CC', 'Social Media Tools', 'Analytics', 'SEO Tools'],
    outcomes: ['Content Portfolio', 'Marketing Campaigns', 'Brand Development'],
    courseComponents: [
      'Strategic content development',
      'Multi-platform marketing',
      'Visual content creation',
      'Analytics and optimization',
      'Brand storytelling techniques'
    ]
  },
  {
    id: 'package4',
    title: 'Music Producer Track',
    category: 'Creative & Music',
    type: 'HYBRID',
    instructor: 'Prof. John Ssebunya',
    rating: 4.9,
    graduates: 387,
    duration: '20 weeks',
    weeks: 20,
    price: 2000000,
    originalPrice: 2300000,
    savings: 300000,
    thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=225&fit=crop',
    description: 'Professional music production from recording to mastering.',
    courses: ['Audio Engineering', 'DAW Mastery', 'Music Theory', 'Electronic Production'],
    technologies: ['Pro Tools', 'Logic Pro', 'Ableton Live', 'Audio Hardware'],
    outcomes: ['Professional Recordings', 'Music Portfolio', 'Industry Connections'],
    courseComponents: [
      'Professional studio recording',
      'Digital audio workstation mastery',
      'Music theory and composition',
      'Electronic music production',
      'Industry networking and development'
    ]
  }
]

// Language Immersion Packages
export const languagePackages: CoursePackage[] = [
  {
    id: 'package5',
    title: 'European Languages Bundle',
    category: 'Languages',
    type: 'HYBRID',
    instructor: 'Language Faculty',
    rating: 4.7,
    graduates: 432,
    duration: '32 weeks',
    weeks: 32,
    price: 1800000,
    originalPrice: 2200000,
    savings: 400000,
    thumbnail: 'https://images.unsplash.com/photo-1485598276516-0197b82ba061?w=400&h=225&fit=crop',
    description: 'Master multiple European languages with cultural immersion.',
    courses: ['English Advanced', 'French Intermediate', 'Italian Beginner', 'Spanish Beginner'],
    technologies: ['Language Apps', 'Cultural Materials', 'Interactive Media'],
    outcomes: ['Multilingual Fluency', 'Cultural Competency', 'International Opportunities'],
    courseComponents: [
      'Progressive language skill development',
      'Cultural studies across regions',
      'Business applications in European markets',
      'Literature appreciation and analysis',
      'Travel and tourism industry applications'
    ]
  },
  {
    id: 'package6',
    title: 'Business Communication Package',
    category: 'Languages & Business',
    type: 'HYBRID',
    instructor: 'Business Language Faculty',
    rating: 4.8,
    graduates: 298,
    duration: '20 weeks',
    weeks: 20,
    price: 1400000,
    originalPrice: 1700000,
    savings: 300000,
    thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=225&fit=crop',
    description: 'Professional business communication across multiple languages.',
    courses: ['Business English Advanced', 'Business French', 'Business Spanish'],
    technologies: ['Communication Tools', 'Business Software', 'Video Conferencing'],
    outcomes: ['Professional Communication', 'International Business Skills', 'Cross-cultural Competency'],
    courseComponents: [
      'Advanced English for presentations and negotiations',
      'Business French for international markets',
      'Professional Spanish for global commerce',
      'Cross-cultural communication strategies',
      'Business etiquette and protocol'
    ]
  },
  {
    id: 'package7',
    title: 'Middle Eastern Studies Bundle',
    category: 'Languages & Culture',
    type: 'HYBRID',
    instructor: 'Middle Eastern Faculty',
    rating: 4.6,
    graduates: 156,
    duration: '30 weeks',
    weeks: 30,
    price: 1900000,
    originalPrice: 2350000,
    savings: 450000,
    thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=225&fit=crop',
    description: 'Comprehensive Middle Eastern languages and cultural studies.',
    courses: ['Modern Hebrew Intermediate', 'Persian Intermediate', 'Arabic Beginner'],
    technologies: ['Language Software', 'Cultural Resources', 'Media Tools'],
    outcomes: ['Regional Language Skills', 'Cultural Understanding', 'Academic Research Capabilities'],
    courseComponents: [
      'Modern Hebrew conversation and business communication',
      'Persian literature and cultural studies',
      'Arabic fundamentals with Gulf dialects focus',
      'Regional history and cultural context',
      'International relations and diplomatic communication'
    ]
  }
]

// Engineering Professional Packages
export const engineeringPackages: CoursePackage[] = [
  {
    id: 'package11',
    title: 'Electrical Engineering Professional',
    category: 'Engineering',
    type: 'HYBRID',
    instructor: 'Engineering Faculty',
    rating: 4.9,
    graduates: 234,
    duration: '32 weeks',
    weeks: 32,
    price: 3200000,
    originalPrice: 3800000,
    savings: 600000,
    thumbnail: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=225&fit=crop',
    description: 'Comprehensive electrical engineering professional development.',
    courses: ['Circuit Analysis', 'Digital Electronics', 'Power Systems', 'Microcontroller Programming', 'PCB Design'],
    technologies: ['MATLAB', 'AutoCAD', 'PSpice', 'KiCad', 'Embedded Systems'],
    outcomes: ['Professional Certification', 'Industry Projects', 'Career Advancement'],
    courseComponents: [
      'Advanced circuit design and simulation',
      'Industrial automation and control systems',
      'Renewable energy systems integration',
      'Professional engineering project management',
      'Industry certification preparation (PMP, PE prep)'
    ]
  },
  {
    id: 'package12',
    title: 'Mechanical Engineering Professional',
    category: 'Engineering',
    type: 'HYBRID',
    instructor: 'Mechanical Faculty',
    rating: 4.8,
    graduates: 187,
    duration: '28 weeks',
    weeks: 28,
    price: 2900000,
    originalPrice: 3450000,
    savings: 550000,
    thumbnail: 'https://images.unsplash.com/photo-1565008447742-97f6f38c98c6?w=400&h=225&fit=crop',
    description: 'Advanced mechanical engineering skills and certification.',
    courses: ['Thermodynamics', 'Fluid Mechanics', 'Materials Science', 'Manufacturing Processes', 'CAD/CAM'],
    technologies: ['SolidWorks', 'AutoCAD', 'ANSYS', 'MATLAB', 'CNC Programming'],
    outcomes: ['Professional CAD Certification', 'Manufacturing Projects', 'Engineering Analysis'],
    courseComponents: [
      'Advanced thermal and fluid system design',
      'Materials selection and failure analysis',
      'Lean manufacturing and quality systems',
      'Professional CAD certification (SolidWorks, AutoCAD)',
      'Project management for manufacturing'
    ]
  },
  {
    id: 'package13',
    title: 'Computer Engineering Specialist',
    category: 'Engineering',
    type: 'HYBRID',
    instructor: 'Computer Engineering Faculty',
    rating: 4.9,
    graduates: 143,
    duration: '36 weeks',
    weeks: 36,
    price: 3800000,
    originalPrice: 4600000,
    savings: 800000,
    thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=225&fit=crop',
    description: 'Comprehensive computer engineering and systems design.',
    courses: ['Computer Architecture', 'Embedded Systems', 'VLSI Design', 'Network Engineering', 'Cybersecurity'],
    technologies: ['Verilog', 'VHDL', 'ARM Processors', 'Network Tools', 'Security Software'],
    outcomes: ['Hardware Design Skills', 'Network Certifications', 'Security Expertise'],
    courseComponents: [
      'Advanced processor design and optimization',
      'IoT system development and deployment',
      'Hardware security and encryption',
      'Professional networking certifications (CCNA, CompTIA)',
      'Industry internship placement'
    ]
  }
]

// All packages combined
export const allCoursePackages = [
  ...careerPackages,
  ...languagePackages,
  ...engineeringPackages
] 