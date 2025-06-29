export interface CourseWeek {
  week: string
  topics: string[]
}

export interface Course {
  id: string
  title: string
  category: 'electrical' | 'mechanical' | 'computer' | 'software' | 'design' | 'writing' | 'music' | 'language'
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  duration: string
  format: string
  price: number
  priceDisplay: string
  description: string
  outline: CourseWeek[]
  instructor: string
  rating: number
  students: number
  image: string
  tags: string[]
  featured?: boolean
}

export const COURSES: Course[] = [
  // ELECTRICAL ENGINEERING COURSES
  {
    id: 'ee101',
    title: 'Circuit Analysis Fundamentals',
    category: 'electrical',
    level: 'Beginner',
    duration: '12 weeks (36 hours)',
    format: '3 hours/week',
    price: 850000,
    priceDisplay: 'UGX 850,000',
    description: 'Master basic electrical concepts, Ohm\'s law, Kirchhoff\'s laws, AC circuits, and power calculations.',
    outline: [
      { week: 'Week 1-2', topics: ['Basic electrical concepts', 'Ohm\'s law', 'Kirchhoff\'s laws'] },
      { week: 'Week 3-4', topics: ['Series and parallel circuits', 'voltage/current dividers'] },
      { week: 'Week 5-6', topics: ['Network theorems (Thevenin, Norton, Superposition)'] },
      { week: 'Week 7-8', topics: ['AC circuits', 'phasors', 'complex impedance'] },
      { week: 'Week 9-10', topics: ['Power calculations', 'power factor correction'] },
      { week: 'Week 11-12', topics: ['Resonance', 'filters', 'frequency response'] }
    ],
    instructor: 'Dr. Sarah Mukasa',
    rating: 4.8,
    students: 1247,
    image: '/images/courses/circuit-analysis.jpg',
    tags: ['Electronics', 'Circuit Analysis', 'Electrical Engineering'],
    featured: true
  },
  {
    id: 'se101',
    title: 'Programming Fundamentals (Python)',
    category: 'software',
    level: 'Beginner',
    duration: '8 weeks (24 hours)',
    format: '3 hours/week',
    price: 500000,
    priceDisplay: 'UGX 500,000',
    description: 'Python basics, control structures, functions, OOP, and best practices for beginners.',
    outline: [
      { week: 'Week 1-2', topics: ['Python basics', 'variables', 'data types', 'control structures'] },
      { week: 'Week 3-4', topics: ['Functions', 'modules', 'file handling'] },
      { week: 'Week 5-6', topics: ['Object-oriented programming', 'classes', 'inheritance'] },
      { week: 'Week 7-8', topics: ['Exception handling', 'debugging', 'best practices'] }
    ],
    instructor: 'Dr. Janet Nakato',
    rating: 4.9,
    students: 2156,
    image: '/images/courses/python.jpg',
    tags: ['Python', 'Programming', 'OOP'],
    featured: true
  },
  {
    id: 'se103',
    title: 'Web Development Full Stack',
    category: 'software',
    level: 'Intermediate',
    duration: '16 weeks (48 hours)',
    format: '3 hours/week',
    price: 1200000,
    priceDisplay: 'UGX 1,200,000',
    description: 'HTML5, CSS3, React.js, Node.js, databases, APIs, testing, and deployment.',
    outline: [
      { week: 'Week 1-2', topics: ['HTML5', 'CSS3', 'responsive design'] },
      { week: 'Week 3-4', topics: ['JavaScript fundamentals', 'DOM manipulation'] },
      { week: 'Week 5-6', topics: ['React.js', 'component-based architecture'] },
      { week: 'Week 7-8', topics: ['Node.js', 'Express.js', 'server-side development'] },
      { week: 'Week 9-10', topics: ['Database design', 'MongoDB', 'SQL'] },
      { week: 'Week 11-12', topics: ['RESTful APIs', 'authentication', 'security'] },
      { week: 'Week 13-14', topics: ['Testing', 'deployment', 'cloud services'] },
      { week: 'Week 15-16', topics: ['Final project', 'portfolio development'] }
    ],
    instructor: 'Eden Gilbert Kiseka',
    rating: 4.9,
    students: 1567,
    image: '/images/courses/web-development.jpg',
    tags: ['React', 'Node.js', 'Full Stack'],
    featured: true
  },
  {
    id: 'en101',
    title: 'English Beginner',
    category: 'language',
    level: 'Beginner',
    duration: '12 weeks (36 hours)',
    format: '3 hours/week',
    price: 400000,
    priceDisplay: 'UGX 400,000',
    description: 'Basic greetings, present tense, vocabulary, simple conversations, and travel English.',
    outline: [
      { week: 'Week 1-2', topics: ['Basic greetings', 'introductions', 'alphabet'] },
      { week: 'Week 3-4', topics: ['Present tense', 'basic vocabulary (family, numbers)'] },
      { week: 'Week 5-6', topics: ['Simple questions', 'daily routines'] },
      { week: 'Week 7-8', topics: ['Past tense', 'describing experiences'] },
      { week: 'Week 9-10', topics: ['Future tense', 'making plans'] },
      { week: 'Week 11-12', topics: ['Basic conversation', 'travel English'] }
    ],
    instructor: 'Dr. Janet Nakato',
    rating: 4.8,
    students: 1234,
    image: '/images/courses/english.jpg',
    tags: ['English', 'Language Learning', 'Communication']
  }
]

export const CATEGORIES = [
  { id: 'all', name: 'All Courses', icon: 'BookOpen', count: COURSES.length },
  { id: 'electrical', name: 'Electrical Engineering', icon: 'Zap', count: COURSES.filter(c => c.category === 'electrical').length },
  { id: 'mechanical', name: 'Mechanical Engineering', icon: 'Settings', count: COURSES.filter(c => c.category === 'mechanical').length },
  { id: 'computer', name: 'Computer Engineering', icon: 'Cpu', count: COURSES.filter(c => c.category === 'computer').length },
  { id: 'software', name: 'Software Engineering', icon: 'Code', count: COURSES.filter(c => c.category === 'software').length },
  { id: 'design', name: 'UI/UX Design', icon: 'Palette', count: COURSES.filter(c => c.category === 'design').length },
  { id: 'writing', name: 'Creative Writing', icon: 'PenTool', count: COURSES.filter(c => c.category === 'writing').length },
  { id: 'music', name: 'Music Production', icon: 'Music', count: COURSES.filter(c => c.category === 'music').length },
  { id: 'language', name: 'Languages', icon: 'Languages', count: COURSES.filter(c => c.category === 'language').length }
]
