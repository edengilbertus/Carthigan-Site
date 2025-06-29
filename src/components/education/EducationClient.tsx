"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  BookOpen, 
  Code, 
  Cpu, 
  Globe, 
  Users, 
  Star, 
  Clock, 
  Award, 
  ChevronDown, 
  ChevronUp, 
  Filter, 
  Search, 
  Play, 
  CheckCircle, 
  User, 
  CreditCard, 
  Smartphone, 
  Wallet,
  X,
  Calendar,
  Video,
  MessageCircle,
  TrendingUp,
  Zap,
  Target,
  Brain,
  Palette,
  Languages as LanguagesIcon,
  Settings,
  GraduationCap,
  UserCheck,
  Camera
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Progress } from '@/components/ui/progress'

// Current user simulation
const currentUser = {
  id: 'user-001',
  name: 'Eden Gilbert Kiseka',
  email: 'eden@carthigan.com',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
  joinDate: '2024-01-15',
  totalHoursLearned: 156,
  coursesCompleted: 8,
  currentStreak: 12,
  enrolledCourses: [] as string[],
  activeCourses: [
    { courseId: 'react-native-dev', progress: 68, lastAccessed: '2024-01-20' },
    { courseId: 'business-analytics', progress: 92, lastAccessed: '2024-01-19' }
  ],
  achievements: ['First Course', 'Week Streak', 'Code Master'],
  friends: 274
}

// Course categories
const categories = [
  { id: 'all', name: 'All Courses', icon: BookOpen },
  { id: 'software', name: 'Software & IT', icon: Code },
  { id: 'electronics', name: 'Electronics & Hardware', icon: Cpu },
  { id: 'business', name: 'Business & Analytics', icon: TrendingUp },
  { id: 'design', name: 'Creative & Design', icon: Palette },
  { id: 'languages', name: 'Languages', icon: LanguagesIcon }
]

// Course data
const allCourses = [
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
    projects: 6
  },
  {
    id: 'pcb-design-manufacturing',
    title: 'PCB Design & Manufacturing Masterclass',
    category: 'electronics',
    instructor: 'Eng. Grace Nambi',
    rating: 4.7,
    students: 4276,
    duration: '38 hours',
    level: 'Advanced',
    price: 250000,
    thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=225&fit=crop',
    description: 'Learn professional PCB design from schematic capture to manufacturing-ready layouts.',
    skills: ['KiCad', 'Altium Designer', 'Circuit Analysis', 'Manufacturing', 'EMI/EMC'],
    modules: 15,
    projects: 8
  },
  {
    id: 'business-writing',
    title: 'Powerful Business Writing: How to Write Concisely',
    category: 'business',
    instructor: 'David Katende',
    rating: 4.9,
    students: 1463,
    duration: '18 hours',
    level: 'Beginner',
    price: 120000,
    thumbnail: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=225&fit=crop',
    description: 'Transform your business communication with clear, concise, and persuasive writing.',
    skills: ['Business Writing', 'Communication', 'Email Etiquette', 'Reports', 'Proposals'],
    modules: 8,
    projects: 4
  },
  {
    id: 'uiux-mobile-apps',
    title: 'UI/UX Design for Mobile Apps (Figma & Adobe XD)',
    category: 'design',
    instructor: 'Aisha Nakato',
    rating: 4.8,
    students: 3891,
    duration: '32 hours',
    level: 'Intermediate',
    price: 180000,
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=225&fit=crop',
    description: 'Design beautiful, user-friendly mobile interfaces using industry-standard tools.',
    skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping', 'Design Systems'],
    modules: 10,
    projects: 5
  },
  {
    id: 'iot-arduino-esp32',
    title: 'IoT Systems with Arduino & ESP32',
    category: 'electronics',
    instructor: 'Dr. Moses Kiggundu',
    rating: 4.9,
    students: 2657,
    duration: '45 hours',
    level: 'Intermediate',
    price: 220000,
    thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=225&fit=crop',
    description: 'Build connected IoT devices using Arduino and ESP32 microcontrollers.',
    skills: ['Arduino', 'ESP32', 'IoT Protocols', 'Sensors', 'Cloud Integration'],
    modules: 14,
    projects: 10
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
    projects: 3
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
    projects: 8
  }
]

// Certificate programs
const certificatePrograms = [
  {
    id: 'fullstack-web-cert',
    title: 'Full-Stack Web Development Certificate',
    category: 'Software & IT',
    type: 'HYBRID',
    instructor: 'Dr. Sarah Mukasa',
    rating: 4.8,
    graduates: 1245,
    duration: '16 weeks',
    price: 850000,
    thumbnail: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=225&fit=crop',
    description: 'Master modern web development with React, Node.js, and databases. Build real-world projects.',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
    outcomes: ['Portfolio Projects', 'Industry Certification', 'Job Placement Support']
  },
  {
    id: 'embedded-systems-cert',
    title: 'Embedded Systems & IoT Certificate',
    category: 'Engineering & Hardware',
    type: 'HYBRID',
    instructor: 'Eng. Michael Ssali',
    rating: 4.9,
    graduates: 890,
    duration: '12 weeks',
    price: 720000,
    thumbnail: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=225&fit=crop',
    description: 'Build intelligent connected devices with Arduino, ESP32, and IoT protocols.',
    technologies: ['Arduino', 'C++', 'IoT', 'Sensors'],
    outcomes: ['Hardware Projects', 'Firmware Development', 'IoT Solutions']
  },
  {
    id: 'uiux-design-cert',
    title: 'UI/UX Design for Digital Products',
    category: 'Creative & Design',
    type: 'ONLINE',
    instructor: 'Grace Namukasa',
    rating: 4.7,
    graduates: 650,
    duration: '10 weeks',
    price: 480000,
    thumbnail: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=225&fit=crop',
    description: 'Design beautiful, user-friendly interfaces and experiences with Figma and design thinking.',
    technologies: ['Figma', 'Design Thinking', 'Prototyping', 'User Research'],
    outcomes: ['Design Portfolio', 'Client Projects', 'UX Research Skills']
  },
  {
    id: 'android-fullstack-cert',
    title: 'Full Stack Android Development Certificate',
    category: 'Software & IT',
    type: 'HYBRID',
    instructor: 'Dr. James Mukasa',
    rating: 4.9,
    graduates: 892,
    duration: '18 weeks',
    price: 950000,
    thumbnail: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=400&h=225&fit=crop',
    description: 'Become a complete Android developer. Build production-ready apps with modern Kotlin, Jetpack Compose, backend APIs, and deploy to Google Play Store.',
    technologies: ['Kotlin', 'Jetpack Compose', 'Room Database', 'Retrofit', 'Firebase', 'Google Play Console'],
    outcomes: ['Published Play Store Apps', 'Professional Portfolio', 'Industry Mentorship', 'Job Placement Support']
  }
]

// Tutoring services
const tutoringServices = [
  {
    id: 'engineering-tutoring',
    title: 'Engineering & Hardware Tutoring',
    icon: Settings,
    description: 'Master complex topics with professional engineers. Get personalized help with circuit analysis, embedded systems programming, CAD modeling, and control theory.',
    subjects: ['Electrical Engineering', 'Mechanical Engineering', 'Computer Engineering', 'Circuit Analysis', 'CAD Modeling'],
    priceRange: 'UGX 50,000 - 100,000/hour',
    tutors: 12
  },
  {
    id: 'software-tutoring',
    title: 'Software Development Tutoring',
    icon: Code,
    description: 'Get unstuck and master advanced concepts with a senior developer as your mentor. We cover front-end, back-end, UI/UX implementation, and software architecture.',
    subjects: ['React/Angular/Vue', 'Node.js/Python/Java', 'Database Design', 'Software Architecture', 'DevOps'],
    priceRange: 'UGX 60,000 - 120,000/hour',
    tutors: 18
  },
  {
    id: 'creative-tutoring',
    title: 'Creative & Production Tutoring',
    icon: Camera,
    description: 'Refine your creative skills with personalized feedback from experienced professionals in digital media, writing, and music production.',
    subjects: ['Photo/Video Editing', 'Music Production', 'Creative Writing', 'Graphic Design', 'Animation'],
    priceRange: 'UGX 40,000 - 80,000/hour',
    tutors: 8
  },
  {
    id: 'language-tutoring',
    title: 'Professional Language Tutoring',
    icon: LanguagesIcon,
    description: 'Achieve fluency for business, tech, or personal growth with personalized lessons from native and expert speakers.',
    subjects: ['English', 'French', 'Hebrew', 'Luganda', 'Italian', 'Spanish', 'Persian'],
    priceRange: 'UGX 30,000 - 70,000/hour',
    tutors: 15
  }
]

export function EducationClient() {
  const [user, setUser] = useState(currentUser)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [showEnrollModal, setShowEnrollModal] = useState(false)
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [showTutorModal, setShowTutorModal] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState<any>(null)
  const [selectedTutoringService, setSelectedTutoringService] = useState<any>(null)
  const [paymentMethod, setPaymentMethod] = useState('')
  const [enrollmentType, setEnrollmentType] = useState<'course' | 'certificate' | 'tutoring'>('course')

  // Filter courses based on category and search
  const filteredCourses = allCourses.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const handleEnrollClick = (course: any, type: 'course' | 'certificate' = 'course') => {
    setSelectedCourse(course)
    setEnrollmentType(type)
    setShowEnrollModal(true)
  }

  const handleTutorClick = (service: any) => {
    setSelectedTutoringService(service)
    setShowTutorModal(true)
  }

  const proceedToPayment = () => {
    setShowEnrollModal(false)
    setShowPaymentModal(true)
  }

  const handlePayment = () => {
    if (selectedCourse && !user.enrolledCourses.includes(selectedCourse.id)) {
      setUser(prev => ({
        ...prev,
        enrolledCourses: [...prev.enrolledCourses, selectedCourse.id],
        activeCourses: [...prev.activeCourses, { 
          courseId: selectedCourse.id, 
          progress: 0, 
          lastAccessed: new Date().toISOString().split('T')[0] 
        }]
      }))
    }
    
    setShowPaymentModal(false)
    setSelectedCourse(null)
    
    // Show success message
    alert(`Successfully enrolled in ${selectedCourse?.title}! You can now access the course materials.`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-purple-100 sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">Carthigan Education</span>
              </div>
              
              <div className="hidden md:flex items-center gap-6">
                <a href="#courses" className="text-gray-600 hover:text-purple-600 transition-colors">Courses</a>
                <a href="#certificates" className="text-gray-600 hover:text-purple-600 transition-colors">Certificates</a>
                <a href="#tutoring" className="text-gray-600 hover:text-purple-600 transition-colors">Tutoring</a>
                <a href="#about" className="text-gray-600 hover:text-purple-600 transition-colors">About</a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <img 
                  src={user.avatar} 
                  alt={user.name}
                  className="w-10 h-10 rounded-full border-2 border-purple-200"
                />
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-gray-900">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.coursesCompleted} courses completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Hero Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
              >
                Invest in Your Future.
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
              >
                Master in-demand skills with our world-class courses and personalized tutoring, designed for Ugandan professionals. Start your learning journey today.
              </motion.p>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search courses, instructors, or skills..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 text-lg border-gray-200 focus:border-purple-300"
                />
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 mb-8">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                    selectedCategory === category.id 
                      ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                      : 'border-purple-200 hover:border-purple-300 hover:bg-purple-50'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                </Button>
              ))}
            </div>
          </section>

          {/* Popular Courses */}
          <section id="courses" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Most Popular Courses</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="relative">
                    <img 
                      src={course.thumbnail} 
                      alt={course.title}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-purple-600 text-white">
                      {categories.find(c => c.id === course.category)?.name}
                    </Badge>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{course.rating}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{course.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {course.students.toLocaleString()}
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {course.level}
                      </Badge>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {course.skills.slice(0, 3).map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {course.skills.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{course.skills.length - 3} more
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold text-purple-600">
                          UGX {course.price.toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-500">by {course.instructor}</p>
                      </div>
                      <Button 
                        onClick={() => handleEnrollClick(course)}
                        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full"
                        disabled={user.enrolledCourses.includes(course.id)}
                      >
                        {user.enrolledCourses.includes(course.id) ? 'Enrolled' : 'Enroll Now'}
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Certificate Programs */}
          <section id="certificates" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Certificate Programs</h2>
            <p className="text-gray-600 mb-8">Comprehensive programs designed by industry experts for job-ready skills.</p>
            
            <div className="space-y-6">
              {certificatePrograms.map((program) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <Badge className="bg-purple-100 text-purple-700 px-3 py-1">
                          {program.category}
                        </Badge>
                        <Badge variant="outline" className="border-purple-200 text-purple-600">
                          {program.type}
                        </Badge>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{program.title}</h3>
                      <p className="text-gray-600 mb-6">{program.description}</p>
                      
                      <div className="flex flex-wrap gap-3 mb-6">
                        {program.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="px-3 py-1">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {program.duration}
                        </div>
                        <div className="flex items-center gap-2">
                          <UserCheck className="w-4 h-4" />
                          {program.graduates} graduates
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-500" />
                          {program.rating} rating
                        </div>
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          {program.instructor}
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:w-80 flex flex-col justify-between">
                      <div className="text-center lg:text-right mb-6">
                        <p className="text-3xl font-bold text-purple-600 mb-2">
                          UGX {program.price.toLocaleString()}
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {program.outcomes.map((outcome) => (
                            <li key={outcome} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              {outcome}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button 
                        onClick={() => handleEnrollClick(program, 'certificate')}
                        size="lg"
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full py-3"
                      >
                        Enroll in Certificate
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Tutoring Services */}
          <section id="tutoring" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Personalized Tutoring & Mentorship</h2>
            <p className="text-gray-600 mb-8">Accelerate your learning with one-on-one guidance from industry experts via Zoom.</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {tutoringServices.map((service) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                      <p className="text-purple-600 font-medium">{service.priceRange}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-3">Available Subjects:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.subjects.map((subject) => (
                        <Badge key={subject} variant="outline" className="text-xs border-purple-200">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Video className="w-4 h-4" />
                      <span>{service.tutors} expert tutors available</span>
                    </div>
                    <Button 
                      onClick={() => handleTutorClick(service)}
                      className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full"
                    >
                      Find Tutor
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-12 py-3 rounded-full">
                Browse All Tutors
              </Button>
            </div>
          </section>

          {/* Certificate Programs */}
          <section id="certificates" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Certificate Programs</h2>
            <p className="text-gray-600 mb-8">Comprehensive programs designed by industry experts for job-ready skills.</p>
            
            <div className="space-y-6">
              {certificatePrograms.map((program) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-80 flex-shrink-0">
                      <img 
                        src={program.thumbnail} 
                        alt={program.title}
                        className="w-full h-48 lg:h-full object-cover rounded-xl"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <Badge className="bg-purple-100 text-purple-700 px-3 py-1">
                          {program.category}
                        </Badge>
                        <Badge variant="outline" className="border-purple-200 text-purple-600">
                          {program.type}
                        </Badge>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{program.title}</h3>
                      <p className="text-gray-600 mb-6">{program.description}</p>
                      
                      <div className="flex flex-wrap gap-3 mb-6">
                        {program.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="px-3 py-1">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-500 mb-6">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {program.duration}
                        </div>
                        <div className="flex items-center gap-2">
                          <UserCheck className="w-4 h-4" />
                          {program.graduates} graduates
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-500" />
                          {program.rating} rating
                        </div>
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          {program.instructor}
                        </div>
                      </div>
                      
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <p className="text-3xl font-bold text-purple-600 mb-2">
                            UGX {program.price.toLocaleString()}
                          </p>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {program.outcomes.map((outcome) => (
                              <li key={outcome} className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                {outcome}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <Button 
                          onClick={() => handleEnrollClick(program, 'certificate')}
                          size="lg"
                          className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8 py-3"
                          disabled={user.enrolledCourses.includes(program.id)}
                        >
                          {user.enrolledCourses.includes(program.id) ? 'Enrolled' : 'Enroll in Certificate'}
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Tutoring Services */}
          <section id="tutoring" className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Personalized Tutoring & Mentorship</h2>
              <p className="text-gray-600 mb-2">Accelerate your learning with one-on-one guidance from industry experts via Zoom.</p>
              <div className="flex items-center justify-center gap-2 text-purple-600">
                <Video className="w-5 h-5" />
                <span className="font-medium">Live sessions • Expert mentors • Flexible scheduling</span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {tutoringServices.map((service) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-br from-white to-purple-50 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-purple-100"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                      <p className="text-purple-600 font-semibold">{service.priceRange}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Target className="w-4 h-4 text-purple-600" />
                      Available Subjects:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.subjects.map((subject) => (
                        <Badge key={subject} variant="outline" className="text-xs border-purple-200 bg-white">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Users className="w-4 h-4" />
                      <span>{service.tutors} expert tutors available</span>
                    </div>
                    <Button 
                      onClick={() => handleTutorClick(service)}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-2 rounded-full"
                    >
                      Find Tutor
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to accelerate your learning?</h3>
                <p className="mb-6 opacity-90">Join thousands of students who've transformed their careers with personalized mentorship.</p>
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-12 py-3 rounded-full font-semibold">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Browse All Tutors
                </Button>
              </div>
            </div>
          </section>
        </main>

        {/* Sidebar */}
        <aside className="w-80 bg-white/50 backdrop-blur-sm border-l border-purple-100 p-6 sticky top-20 h-fit">
          {/* User Profile */}
          <div className="text-center mb-8">
            <img 
              src={user.avatar} 
              alt={user.name}
              className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-purple-200"
            />
            <h3 className="text-xl font-bold text-gray-900">{user.name}</h3>
            <p className="text-gray-500 text-sm">{user.friends} learning connections</p>
          </div>

          {/* Learning Stats */}
          <Card className="mb-6 border-purple-100">
            <CardHeader>
              <CardTitle className="text-lg">Your Learning Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">This week</span>
                  <span className="text-2xl font-bold text-purple-600">{(user.totalHoursLearned / 52).toFixed(1)}h</span>
                </div>
                <div className="h-16 flex items-end gap-2">
                  {[40, 60, 30, 80, 100, 70, 90].map((height, index) => (
                    <div
                      key={index}
                      className={`flex-1 rounded-t ${index === 6 ? 'bg-purple-600' : 'bg-purple-200'}`}
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-medium">Great progress!</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Active Courses */}
          <Card className="border-purple-100">
            <CardHeader>
              <CardTitle className="text-lg">Continue Learning</CardTitle>
            </CardHeader>
            <CardContent>
              {user.activeCourses.length > 0 ? (
                <div className="space-y-4">
                  {user.activeCourses.map((activeCourse) => {
                    const course = allCourses.find(c => c.id === activeCourse.courseId)
                    if (!course) return null
                    
                    return (
                      <div key={activeCourse.courseId} className="p-4 bg-purple-50 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-2 text-sm">{course.title}</h4>
                        <div className="flex items-center gap-2 mb-2">
                          <Progress value={activeCourse.progress} className="flex-1" />
                          <span className="text-sm text-gray-600">{activeCourse.progress}%</span>
                        </div>
                        <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                          <Play className="w-4 h-4 mr-2" />
                          Continue
                        </Button>
                      </div>
                    )
                  })}
                </div>
              ) : (
                <p className="text-center text-gray-500 py-8">
                  Enroll in a course to start learning!
                </p>
              )}
            </CardContent>
          </Card>
        </aside>
      </div>

      {/* Enrollment Modal */}
      <Dialog open={showEnrollModal} onOpenChange={setShowEnrollModal}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Confirm Enrollment</DialogTitle>
            <DialogDescription>
              You're about to enroll in {selectedCourse?.title}
            </DialogDescription>
          </DialogHeader>
          
          {selectedCourse && (
            <div className="py-4">
              <div className="bg-purple-50 p-4 rounded-lg mb-6">
                <h3 className="font-bold text-lg">{selectedCourse.title}</h3>
                <p className="text-gray-600 text-sm">by {selectedCourse.instructor}</p>
                <p className="text-2xl font-bold text-purple-600 mt-2">
                  UGX {selectedCourse.price.toLocaleString()}
                </p>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span>{selectedCourse.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span>Level:</span>
                  <span>{selectedCourse.level}</span>
                </div>
                <div className="flex justify-between">
                  <span>Certificate:</span>
                  <span>✓ Included</span>
                </div>
                <div className="flex justify-between">
                  <span>Lifetime Access:</span>
                  <span>✓ Yes</span>
                </div>
              </div>
            </div>
          )}
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowEnrollModal(false)}>
              Cancel
            </Button>
            <Button onClick={proceedToPayment} className="bg-purple-600 hover:bg-purple-700">
              Proceed to Payment
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Payment Modal */}
      <Dialog open={showPaymentModal} onOpenChange={setShowPaymentModal}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Complete Payment</DialogTitle>
            <DialogDescription>
              Choose your preferred payment method
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4">
            <div className="bg-purple-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold">{selectedCourse?.title}</h3>
              <p className="text-2xl font-bold text-purple-600">
                UGX {selectedCourse?.price.toLocaleString()}
              </p>
            </div>
            
            <div className="space-y-4">
              <Label>Payment Method</Label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setPaymentMethod('mobile-money')}
                  className={`p-4 border rounded-lg flex flex-col items-center gap-2 transition-all ${
                    paymentMethod === 'mobile-money' 
                      ? 'border-purple-600 bg-purple-50' 
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                >
                  <Smartphone className="w-8 h-8 text-purple-600" />
                  <span className="text-sm font-medium">Mobile Money</span>
                  <span className="text-xs text-gray-500">MTN/Airtel</span>
                </button>
                
                <button
                  onClick={() => setPaymentMethod('card')}
                  className={`p-4 border rounded-lg flex flex-col items-center gap-2 transition-all ${
                    paymentMethod === 'card' 
                      ? 'border-purple-600 bg-purple-50' 
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                >
                  <CreditCard className="w-8 h-8 text-purple-600" />
                  <span className="text-sm font-medium">Credit Card</span>
                  <span className="text-xs text-gray-500">Visa/Mastercard</span>
                </button>
              </div>
              
              {paymentMethod === 'mobile-money' && (
                <div className="space-y-3">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="256 7XX XXX XXX" />
                </div>
              )}
              
              {paymentMethod === 'card' && (
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="card-number">Card Number</Label>
                    <Input id="card-number" placeholder="1234 5678 9012 3456" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="expiry">Expiry</Label>
                      <Input id="expiry" placeholder="MM/YY" />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV</Label>
                      <Input id="cvv" placeholder="123" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowPaymentModal(false)}>
              Cancel
            </Button>
            <Button 
              onClick={handlePayment}
              disabled={!paymentMethod}
              className="bg-purple-600 hover:bg-purple-700"
            >
              Complete Payment
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Tutor Modal */}
      <Dialog open={showTutorModal} onOpenChange={setShowTutorModal}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Find a Tutor</DialogTitle>
            <DialogDescription>
              Connect with expert tutors for {selectedTutoringService?.title}
            </DialogDescription>
          </DialogHeader>
          
          {selectedTutoringService && (
            <div className="py-4">
              <div className="bg-purple-50 p-4 rounded-lg mb-6">
                <h3 className="font-bold text-lg">{selectedTutoringService.title}</h3>
                <p className="text-purple-600 font-medium">{selectedTutoringService.priceRange}</p>
              </div>
              
              <form className="space-y-4">
                <div>
                  <Label htmlFor="subject">Subject of Interest</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      {selectedTutoringService.subjects.map((subject: string) => (
                        <SelectItem key={subject} value={subject}>{subject}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="experience">Your Experience Level</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="goals">Learning Goals</Label>
                  <Textarea 
                    id="goals" 
                    placeholder="Tell us what you want to achieve..."
                    rows={3}
                  />
                </div>
                
                <div>
                  <Label htmlFor="schedule">Preferred Schedule</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="When would you like to learn?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weekday-morning">Weekday Mornings</SelectItem>
                      <SelectItem value="weekday-afternoon">Weekday Afternoons</SelectItem>
                      <SelectItem value="weekday-evening">Weekday Evenings</SelectItem>
                      <SelectItem value="weekend">Weekends</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </form>
            </div>
          )}
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowTutorModal(false)}>
              Cancel
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700">
              <MessageCircle className="w-4 h-4 mr-2" />
              Find Matching Tutors
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

    </div>
  )
} 