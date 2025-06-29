export interface IndividualCourse {
  id: string
  title: string
  category: string
  instructor: string
  rating: number
  students: number
  duration: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  price: number
  thumbnail: string
  description: string
  skills: string[]
  modules: number
  projects: number
  weeks: number
  hoursPerWeek: number
  totalHours: number
  courseOutline: { week: string; topics: string[] }[]
}

export const categories = [
  { id: 'all', name: 'All Courses', icon: 'BookOpen' },
  { id: 'software', name: 'Software & IT', icon: 'Code' },
  { id: 'electronics', name: 'Electronics & Hardware', icon: 'Cpu' },
  { id: 'business', name: 'Business & Analytics', icon: 'TrendingUp' },
  { id: 'design', name: 'Creative & Design', icon: 'Palette' },
  { id: 'languages', name: 'Languages', icon: 'Languages' },
  { id: 'electrical', name: 'Electrical Engineering', icon: 'Zap' },
  { id: 'mechanical', name: 'Mechanical Engineering', icon: 'Settings' },
  { id: 'computer', name: 'Computer Engineering', icon: 'Cpu' },
  { id: 'music', name: 'Music Production', icon: 'Music' },
  { id: 'writing', name: 'Creative Writing', icon: 'PenTool' },
  { id: 'adobe', name: 'Adobe Creative Suite', icon: 'Camera' }
]

// Featured courses (keeping existing popular ones)
export const featuredCourses: IndividualCourse[] = [
  {
    id: 'flutter-masterclass',
    title: 'Flutter Masterclass (Dart, APIs, Firebase & More)',
    category: 'software',
    instructor: 'Dr. Sarah Mukasa',
    rating: 4.8,
    students: 9530,
    duration: '42 hours',
    level: 'Intermediate',
    price: 150000,
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=225&fit=crop',
    description: 'Master Flutter development from basics to advanced concepts including state management, APIs, and Firebase integration.',
    skills: ['Flutter', 'Dart', 'Firebase', 'REST APIs', 'State Management'],
    modules: 12,
    projects: 6,
    weeks: 14,
    hoursPerWeek: 3,
    totalHours: 42,
    courseOutline: [
      { week: 'Week 1-2', topics: ['Flutter basics', 'Dart fundamentals', 'Widget system'] },
      { week: 'Week 3-4', topics: ['State management', 'Navigation', 'Forms'] },
      { week: 'Week 5-6', topics: ['REST API integration', 'HTTP requests', 'JSON parsing'] },
      { week: 'Week 7-8', topics: ['Firebase setup', 'Authentication', 'Firestore'] },
      { week: 'Week 9-10', topics: ['Advanced widgets', 'Custom UI', 'Animations'] },
      { week: 'Week 11-12', topics: ['Testing', 'Performance optimization', 'App deployment'] },
      { week: 'Week 13-14', topics: ['Final project', 'Code review', 'Portfolio preparation'] }
    ]
  },
  {
    id: 'android-fullstack-dev',
    title: 'Full Stack Android Development (Kotlin & Backend)',
    category: 'software',
    instructor: 'Dr. James Mukasa',
    rating: 4.9,
    students: 6847,
    duration: '56 hours',
    level: 'Intermediate',
    price: 280000,
    thumbnail: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=400&h=225&fit=crop',
    description: 'Build complete Android applications from frontend to backend. Master Kotlin, Jetpack Compose, REST APIs, and database integration.',
    skills: ['Kotlin', 'Jetpack Compose', 'REST APIs', 'Room Database', 'Firebase', 'MVVM Architecture'],
    modules: 18,
    projects: 8,
    weeks: 18,
    hoursPerWeek: 3,
    totalHours: 56,
    courseOutline: [
      { week: 'Week 1-2', topics: ['Kotlin fundamentals', 'Android basics', 'Project setup'] },
      { week: 'Week 3-4', topics: ['Jetpack Compose', 'UI components', 'State management'] },
      { week: 'Week 5-6', topics: ['Navigation', 'Lifecycle', 'ViewModels'] },
      { week: 'Week 7-8', topics: ['Room database', 'Local storage', 'Data persistence'] },
      { week: 'Week 9-10', topics: ['Networking', 'Retrofit', 'API integration'] },
      { week: 'Week 11-12', topics: ['Firebase integration', 'Authentication', 'Cloud storage'] },
      { week: 'Week 13-14', topics: ['Testing', 'Unit tests', 'UI tests'] },
      { week: 'Week 15-16', topics: ['App optimization', 'Performance tuning', 'Security'] },
      { week: 'Week 17-18', topics: ['Publishing', 'Play Store', 'Final project'] }
    ]
  }
]

// Electrical Engineering Courses
export const electricalEngineeringCourses: IndividualCourse[] = [
  {
    id: 'EE101',
    title: 'Circuit Analysis Fundamentals',
    category: 'electrical',
    instructor: 'Dr. Francis Okello',
    rating: 4.7,
    students: 2341,
    duration: '36 hours',
    level: 'Beginner',
    price: 850000,
    thumbnail: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=225&fit=crop',
    description: 'Master basic electrical concepts, circuit analysis, and fundamental principles.',
    skills: ['Ohms Law', 'Kirchhoffs Laws', 'AC Circuits', 'Power Calculations'],
    modules: 12,
    projects: 6,
    weeks: 12,
    hoursPerWeek: 3,
    totalHours: 36,
    courseOutline: [
      { week: 'Week 1-2', topics: ['Basic electrical concepts', 'Ohms law', 'Kirchhoffs laws'] },
      { week: 'Week 3-4', topics: ['Series and parallel circuits', 'voltage/current dividers'] },
      { week: 'Week 5-6', topics: ['Network theorems (Thevenin, Norton, Superposition)'] },
      { week: 'Week 7-8', topics: ['AC circuits', 'phasors', 'complex impedance'] },
      { week: 'Week 9-10', topics: ['Power calculations', 'power factor correction'] },
      { week: 'Week 11-12', topics: ['Resonance', 'filters', 'frequency response'] }
    ]
  },
  {
    id: 'EE102',
    title: 'Digital Electronics & Logic Design',
    category: 'electrical',
    instructor: 'Eng. Grace Nambi',
    rating: 4.8,
    students: 1876,
    duration: '30 hours',
    level: 'Intermediate',
    price: 750000,
    thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=225&fit=crop',
    description: 'Learn digital systems, logic gates, and microprocessor basics.',
    skills: ['Boolean Algebra', 'Logic Gates', 'Sequential Logic', 'Microprocessors'],
    modules: 10,
    projects: 5,
    weeks: 10,
    hoursPerWeek: 3,
    totalHours: 30,
    courseOutline: [
      { week: 'Week 1-2', topics: ['Number systems', 'Boolean algebra', 'logic gates'] },
      { week: 'Week 3-4', topics: ['Combinational logic circuits', 'multiplexers', 'decoders'] },
      { week: 'Week 5-6', topics: ['Sequential logic', 'flip-flops', 'counters'] },
      { week: 'Week 7-8', topics: ['Memory devices', 'registers', 'state machines'] },
      { week: 'Week 9-10', topics: ['Microprocessor basics', 'interfacing'] }
    ]
  },
  {
    id: 'EE103',
    title: 'Power Systems Engineering',
    category: 'electrical',
    instructor: 'Dr. Moses Kiggundu',
    rating: 4.9,
    students: 1543,
    duration: '42 hours',
    level: 'Advanced',
    price: 950000,
    thumbnail: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=225&fit=crop',
    description: 'Comprehensive power generation, transmission, and renewable energy systems.',
    skills: ['Power Generation', 'Transmission Lines', 'Renewable Energy', 'Power Quality'],
    modules: 14,
    projects: 8,
    weeks: 14,
    hoursPerWeek: 3,
    totalHours: 42,
    courseOutline: [
      { week: 'Week 1-2', topics: ['Power generation principles', 'generators'] },
      { week: 'Week 3-4', topics: ['Transmission lines', 'power flow analysis'] },
      { week: 'Week 5-6', topics: ['Transformers', 'power distribution systems'] },
      { week: 'Week 7-8', topics: ['Motor control', 'drives', 'protection systems'] },
      { week: 'Week 9-10', topics: ['Power electronics', 'converters', 'inverters'] },
      { week: 'Week 11-12', topics: ['Renewable energy systems', 'grid integration'] },
      { week: 'Week 13-14', topics: ['Power quality', 'harmonics', 'safety codes'] }
    ]
  },
  {
    id: 'EE104',
    title: 'Microcontroller Programming',
    category: 'electrical',
    instructor: 'Eng. Sarah Nakato',
    rating: 4.6,
    students: 2987,
    duration: '24 hours',
    level: 'Beginner',
    price: 650000,
    thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=225&fit=crop',
    description: 'Hands-on Arduino programming and IoT integration projects.',
    skills: ['Arduino Basics', 'Sensors', 'Communication', 'IoT Projects'],
    modules: 8,
    projects: 10,
    weeks: 8,
    hoursPerWeek: 3,
    totalHours: 24,
    courseOutline: [
      { week: 'Week 1-2', topics: ['Arduino basics', 'IDE setup', 'basic programming'] },
      { week: 'Week 3-4', topics: ['Digital I/O', 'analog sensors', 'PWM'] },
      { week: 'Week 5-6', topics: ['Serial communication', 'displays', 'motors'] },
      { week: 'Week 7-8', topics: ['Advanced projects', 'IoT integration'] }
    ]
  }
]

// Software Engineering Courses
export const softwareEngineeringCourses: IndividualCourse[] = [
  {
    id: 'SE101',
    title: 'Programming Fundamentals (Python)',
    category: 'software',
    instructor: 'Dr. Robert Kiwanuka',
    rating: 4.5,
    students: 4521,
    duration: '24 hours',
    level: 'Beginner',
    price: 500000,
    thumbnail: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=225&fit=crop',
    description: 'Master Python programming from basics to object-oriented design.',
    skills: ['Python Basics', 'Functions', 'OOP', 'Best Practices'],
    modules: 8,
    projects: 4,
    weeks: 8,
    hoursPerWeek: 3,
    totalHours: 24,
    courseOutline: [
      { week: 'Week 1-2', topics: ['Python basics', 'variables', 'data types', 'control structures'] },
      { week: 'Week 3-4', topics: ['Functions', 'modules', 'file handling'] },
      { week: 'Week 5-6', topics: ['Object-oriented programming', 'classes', 'inheritance'] },
      { week: 'Week 7-8', topics: ['Exception handling', 'debugging', 'best practices'] }
    ]
  },
  {
    id: 'SE102',
    title: 'Data Structures & Algorithms',
    category: 'software',
    instructor: 'Dr. Jane Namukasa',
    rating: 4.8,
    students: 3214,
    duration: '36 hours',
    level: 'Intermediate',
    price: 800000,
    thumbnail: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=225&fit=crop',
    description: 'Essential algorithms and data structures for technical interviews.',
    skills: ['Arrays & Lists', 'Trees & Graphs', 'Sorting Algorithms', 'Dynamic Programming'],
    modules: 12,
    projects: 6,
    weeks: 12,
    hoursPerWeek: 3,
    totalHours: 36,
    courseOutline: [
      { week: 'Week 1-2', topics: ['Arrays', 'linked lists', 'stacks', 'queues'] },
      { week: 'Week 3-4', topics: ['Trees', 'binary search trees', 'heaps'] },
      { week: 'Week 5-6', topics: ['Hash tables', 'graphs', 'graph algorithms'] },
      { week: 'Week 7-8', topics: ['Sorting algorithms', 'searching algorithms'] },
      { week: 'Week 9-10', topics: ['Dynamic programming', 'greedy algorithms'] },
      { week: 'Week 11-12', topics: ['Algorithm analysis', 'complexity theory'] }
    ]
  },
  {
    id: 'SE103',
    title: 'Web Development Full Stack',
    category: 'software',
    instructor: 'Eng. David Katende',
    rating: 4.9,
    students: 5643,
    duration: '48 hours',
    level: 'Intermediate',
    price: 1200000,
    thumbnail: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=225&fit=crop',
    description: 'Complete web development from frontend to backend deployment.',
    skills: ['HTML/CSS/JS', 'React.js', 'Node.js', 'Database Design'],
    modules: 16,
    projects: 8,
    weeks: 16,
    hoursPerWeek: 3,
    totalHours: 48,
    courseOutline: [
      { week: 'Week 1-2', topics: ['HTML5', 'CSS3', 'responsive design'] },
      { week: 'Week 3-4', topics: ['JavaScript fundamentals', 'DOM manipulation'] },
      { week: 'Week 5-6', topics: ['React.js', 'component-based architecture'] },
      { week: 'Week 7-8', topics: ['Node.js', 'Express.js', 'server-side development'] },
      { week: 'Week 9-10', topics: ['Database design', 'MongoDB', 'SQL'] },
      { week: 'Week 11-12', topics: ['RESTful APIs', 'authentication', 'security'] },
      { week: 'Week 13-14', topics: ['Testing', 'deployment', 'cloud services'] },
      { week: 'Week 15-16', topics: ['Final project', 'portfolio development'] }
    ]
  },
  {
    id: 'SE104',
    title: 'Machine Learning & AI',
    category: 'software',
    instructor: 'Dr. Grace Namukasa',
    rating: 4.9,
    students: 2876,
    duration: '42 hours',
    level: 'Advanced',
    price: 1500000,
    thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=225&fit=crop',
    description: 'Modern AI techniques from basics to deep learning deployment.',
    skills: ['ML Fundamentals', 'Neural Networks', 'Computer Vision', 'NLP'],
    modules: 14,
    projects: 10,
    weeks: 14,
    hoursPerWeek: 3,
    totalHours: 42,
    courseOutline: [
      { week: 'Week 1-2', topics: ['ML fundamentals', 'statistics', 'Python libraries'] },
      { week: 'Week 3-4', topics: ['Supervised learning', 'regression', 'classification'] },
      { week: 'Week 5-6', topics: ['Unsupervised learning', 'clustering', 'dimensionality reduction'] },
      { week: 'Week 7-8', topics: ['Neural networks', 'deep learning basics'] },
      { week: 'Week 9-10', topics: ['Computer vision', 'image processing'] },
      { week: 'Week 11-12', topics: ['Natural language processing', 'text analysis'] },
      { week: 'Week 13-14', topics: ['Model deployment', 'MLOps', 'ethics in AI'] }
    ]
  }
]

// Language Courses
export const languageCourses: IndividualCourse[] = [
  {
    id: 'EN101',
    title: 'English Beginner',
    category: 'languages',
    instructor: 'Sarah Johnson',
    rating: 4.6,
    students: 3421,
    duration: '36 hours',
    level: 'Beginner',
    price: 400000,
    thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=225&fit=crop',
    description: 'Start your English journey with fundamentals and conversation.',
    skills: ['Basic Grammar', 'Vocabulary', 'Conversation', 'Daily Routines'],
    modules: 12,
    projects: 6,
    weeks: 12,
    hoursPerWeek: 3,
    totalHours: 36,
    courseOutline: [
      { week: 'Week 1-2', topics: ['Basic greetings', 'introductions', 'alphabet'] },
      { week: 'Week 3-4', topics: ['Present tense', 'basic vocabulary (family, numbers)'] },
      { week: 'Week 5-6', topics: ['Simple questions', 'daily routines'] },
      { week: 'Week 7-8', topics: ['Past tense', 'describing experiences'] },
      { week: 'Week 9-10', topics: ['Future tense', 'making plans'] },
      { week: 'Week 11-12', topics: ['Basic conversation', 'travel English'] }
    ]
  },
  {
    id: 'FR101',
    title: 'French Beginner',
    category: 'languages',
    instructor: 'Marie Dubois',
    rating: 4.7,
    students: 2156,
    duration: '42 hours',
    level: 'Beginner',
    price: 550000,
    thumbnail: 'https://images.unsplash.com/photo-1485598276516-0197b82ba061?w=400&h=225&fit=crop',
    description: 'Begin your French language journey with pronunciation and basics.',
    skills: ['Pronunciation', 'Basic Vocabulary', 'Present Tense', 'French Culture'],
    modules: 14,
    projects: 7,
    weeks: 14,
    hoursPerWeek: 3,
    totalHours: 42,
    courseOutline: [
      { week: 'Week 1-2', topics: ['French alphabet', 'pronunciation', 'basic greetings'] },
      { week: 'Week 3-4', topics: ['Articles', 'gender', 'basic vocabulary'] },
      { week: 'Week 5-6', topics: ['Present tense verbs', 'être and avoir'] },
      { week: 'Week 7-8', topics: ['Numbers', 'time', 'dates', 'weather'] },
      { week: 'Week 9-10', topics: ['Family', 'descriptions', 'adjectives'] },
      { week: 'Week 11-12', topics: ['Food', 'shopping', 'directions'] },
      { week: 'Week 13-14', topics: ['Travel', 'hotels', 'transportation'] }
    ]
  },
  {
    id: 'luganda-professionals',
    title: 'Conversational Luganda for Professionals',
    category: 'languages',
    instructor: 'Prof. Robert Kiwanuka',
    rating: 4.7,
    students: 1050,
    duration: '25 hours',
    level: 'Beginner',
    price: 90000,
    thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=225&fit=crop',
    description: 'Master professional Luganda for business and technical communication.',
    skills: ['Conversational Luganda', 'Business Terms', 'Cultural Context', 'Pronunciation'],
    modules: 6,
    projects: 3,
    weeks: 8,
    hoursPerWeek: 3,
    totalHours: 25,
    courseOutline: [
      { week: 'Week 1-2', topics: ['Basic greetings', 'introductions', 'pronunciation'] },
      { week: 'Week 3-4', topics: ['Business vocabulary', 'professional contexts'] },
      { week: 'Week 5-6', topics: ['Cultural etiquette', 'formal communication'] },
      { week: 'Week 7-8', topics: ['Advanced conversation', 'technical terms'] }
    ]
  }
]

// All courses combined
export const allIndividualCourses = [
  ...featuredCourses,
  ...electricalEngineeringCourses,
  ...softwareEngineeringCourses,
  ...languageCourses
] 