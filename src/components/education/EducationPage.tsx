"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  BookOpen, 
  Code, 
  Cpu, 
  Settings,
  Palette,
  Languages as LanguagesIcon,
  GraduationCap,
  Clock,
  Users,
  Star,
  ChevronRight,
  Play,
  Zap,
  Target,
  Music,
  PenTool,
  Search
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

// Course categories
const categories = [
  { id: 'all', name: 'All Courses', icon: BookOpen, count: 42 },
  { id: 'electrical', name: 'Electrical Engineering', icon: Zap, count: 6 },
  { id: 'mechanical', name: 'Mechanical Engineering', icon: Settings, count: 6 },
  { id: 'computer', name: 'Computer Engineering', icon: Cpu, count: 5 },
  { id: 'software', name: 'Software Engineering', icon: Code, count: 9 },
  { id: 'design', name: 'UI/UX Design', icon: Palette, count: 5 },
  { id: 'writing', name: 'Creative Writing', icon: PenTool, count: 7 },
  { id: 'music', name: 'Music Production', icon: Music, count: 7 },
  { id: 'languages', name: 'Languages', icon: LanguagesIcon, count: 12 }
]

// Sample courses from your comprehensive catalog
const allCourses = [
  // Electrical Engineering Courses
  {
    id: 'ee101',
    title: 'Circuit Analysis Fundamentals',
    category: 'electrical',
    duration: '12 weeks (36 hours)',
    format: '3 hours/week',
    price: 850000,
    level: 'Beginner',
    description: 'Master basic electrical concepts, Ohm\'s law, Kirchhoff\'s laws, AC circuits, and power calculations.',
    topics: ['Basic electrical concepts', 'Network theorems', 'AC circuits analysis', 'Power calculations', 'Frequency response'],
    instructor: 'Dr. Sarah Mukasa',
    rating: 4.8,
    students: 1247
  },
  {
    id: 'ee102',
    title: 'Digital Electronics & Logic Design',
    category: 'electrical',
    duration: '10 weeks (30 hours)',
    format: '3 hours/week',
    price: 750000,
    level: 'Intermediate',
    description: 'Learn digital logic design, Boolean algebra, sequential circuits, and microprocessor basics.',
    topics: ['Boolean algebra', 'Logic gates', 'Sequential logic', 'Memory devices', 'Microprocessor basics'],
    instructor: 'Eng. Michael Ssemakula',
    rating: 4.7,
    students: 892
  },
  {
    id: 'ee103',
    title: 'Power Systems Engineering',
    category: 'electrical',
    duration: '14 weeks (42 hours)',
    format: '3 hours/week',
    price: 950000,
    level: 'Advanced',
    description: 'Comprehensive power systems including generation, transmission, distribution, and renewable energy.',
    topics: ['Power generation', 'Transmission lines', 'Motor control', 'Power electronics', 'Renewable energy'],
    instructor: 'Dr. Grace Namukasa',
    rating: 4.9,
    students: 634
  },
  // Software Engineering Courses
  {
    id: 'se101',
    title: 'Programming Fundamentals (Python)',
    category: 'software',
    duration: '8 weeks (24 hours)',
    format: '3 hours/week',
    price: 500000,
    level: 'Beginner',
    description: 'Python basics, control structures, functions, OOP, and best practices for beginners.',
    topics: ['Python basics', 'Control structures', 'Functions', 'Object-oriented programming', 'Best practices'],
    instructor: 'Dr. Janet Nakato',
    rating: 4.9,
    students: 2156
  },
  {
    id: 'se103',
    title: 'Web Development Full Stack',
    category: 'software',
    duration: '16 weeks (48 hours)',
    format: '3 hours/week',
    price: 1200000,
    level: 'Intermediate',
    description: 'HTML5, CSS3, React.js, Node.js, databases, APIs, testing, and deployment.',
    topics: ['Frontend development', 'React.js', 'Backend APIs', 'Database design', 'Testing & deployment'],
    instructor: 'Eden Gilbert Kiseka',
    rating: 4.9,
    students: 1567
  },
  {
    id: 'se104',
    title: 'Machine Learning & AI',
    category: 'software',
    duration: '14 weeks (42 hours)',
    format: '3 hours/week',
    price: 1500000,
    level: 'Advanced',
    description: 'ML fundamentals, neural networks, computer vision, NLP, model deployment, and AI ethics.',
    topics: ['ML fundamentals', 'Neural networks', 'Computer vision', 'Natural language processing', 'Model deployment'],
    instructor: 'Dr. Patricia Achan',
    rating: 4.8,
    students: 789
  },
  // Languages
  {
    id: 'en101',
    title: 'English Beginner',
    category: 'languages',
    duration: '12 weeks (36 hours)',
    format: '3 hours/week',
    price: 400000,
    level: 'Beginner',
    description: 'Basic greetings, present tense, vocabulary, simple conversations, and travel English.',
    topics: ['Basic greetings', 'Present tense', 'Basic vocabulary', 'Simple questions', 'Travel English'],
    instructor: 'Dr. Janet Nakato',
    rating: 4.8,
    students: 1234
  },
  {
    id: 'fr101',
    title: 'French Beginner',
    category: 'languages',
    duration: '14 weeks (42 hours)',
    format: '3 hours/week',
    price: 550000,
    level: 'Beginner',
    description: 'French alphabet, pronunciation, basic vocabulary, present tense, and travel French.',
    topics: ['French basics', 'Pronunciation', 'Basic vocabulary', 'Present tense', 'Travel French'],
    instructor: 'Prof. Marie Dubois',
    rating: 4.7,
    students: 523
  }
]

export function EducationPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  // Filter courses based on category and search
  const filteredCourses = allCourses.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.topics.some(topic => topic.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const formatPrice = (price: number) => {
    return `UGX ${price.toLocaleString()}`
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-black/5 sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-black font-display">Carthigan Education</span>
              </div>
              
              <div className="hidden md:flex items-center gap-6">
                <a href="#courses" className="text-black/60 hover:text-black transition-colors font-body">Courses</a>
                <a href="#categories" className="text-black/60 hover:text-black transition-colors font-body">Categories</a>
                <a href="#pricing" className="text-black/60 hover:text-black transition-colors font-body">Pricing</a>
                <a href="/" className="text-black/60 hover:text-black transition-colors font-body">Home</a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Button className="bg-black hover:bg-black/90 text-white rounded-full px-6">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen pt-32 relative overflow-hidden bg-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-dot-pattern opacity-5" />
        
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute top-20 right-10 w-96 h-96 bg-gradient-mesh rounded-full blur-3xl"
          />

          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-8xl font-display font-semibold mb-8 tracking-tight">
                <span className="inline-block overflow-hidden">
                  <motion.span
                    className="inline-block"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                  >
                    Complete Course
                  </motion.span>
                </span>
                <br />
                <span className="inline-block overflow-hidden">
                  <motion.span
                    className="inline-block"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                  >
                    <span className="text-accent">Catalog</span>
                  </motion.span>
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-xl md:text-2xl text-black/60 max-w-2xl mb-12 font-body"
              >
                Master engineering, software development, design, and languages with comprehensive courses designed for African professionals. All courses priced in UGX.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-col md:flex-row gap-6"
              >
                <Button
                  asChild
                  className="bg-black hover:bg-black/90 text-white rounded-full px-8 py-6 text-lg shadow-soft"
                >
                  <a href="#courses">
                    Browse Courses
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-black/10 hover:bg-black/5 text-black rounded-full px-8 py-6 text-lg"
                >
                  <a href="#categories">
                    View Categories
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Course Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 text-black/40"
          >
            {[
              "42+ COURSES",
              "9 CATEGORIES", 
              "UGX PRICING",
              "EXPERT INSTRUCTORS",
              "HANDS-ON PROJECTS",
              "INDUSTRY RELEVANT"
            ].map((tag, index) => (
              <div key={tag} className="flex items-center gap-3 font-mono text-sm">
                <span className="text-accent">0{index + 1} /</span>
                <span>{tag}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-32 bg-white" id="categories">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6 text-black">
              /// Course Categories
            </h2>
            <p className="text-xl text-black/60 max-w-3xl mx-auto">
              Explore our comprehensive curriculum across engineering, technology, design, and languages.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row gap-4 mb-12"
          >
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-black/40" />
              <Input
                type="text"
                placeholder="Search courses, topics, or instructors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-3 border-black/20 focus:border-accent focus:ring-accent"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.slice(0, 6).map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id 
                    ? "bg-accent hover:bg-accent/90 text-white" 
                    : "border-black/20 hover:border-accent hover:text-accent"
                  }
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {categories.slice(1).map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedCategory(category.id)}
              >
                <Card className={`h-full transition-all duration-300 border-2 hover:shadow-medium ${
                  selectedCategory === category.id 
                    ? 'border-accent bg-accent/5' 
                    : 'border-black/10 hover:border-black/20'
                }`}>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <category.icon className={`h-8 w-8 ${
                        selectedCategory === category.id ? 'text-accent' : 'text-black/60'
                      }`} />
                      <Badge variant="outline" className="text-xs">
                        {category.count} courses
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-display text-black group-hover:text-accent transition-colors">
                      {category.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-black/60 text-sm mb-4">
                      Professional courses designed for African industry standards with hands-on projects.
                    </p>
                    <div className="flex items-center text-accent text-sm font-medium">
                      Explore courses
                      <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 bg-gray-50/50" id="courses">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-medium transition-all duration-300 border border-black/10 hover:border-black/20 group">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${
                          course.level === 'Beginner' ? 'border-green-500/20 text-green-600 bg-green-500/5' :
                          course.level === 'Intermediate' ? 'border-yellow-500/20 text-yellow-600 bg-yellow-500/5' :
                          'border-red-500/20 text-red-600 bg-red-500/5'
                        }`}
                      >
                        {course.level}
                      </Badge>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-accent">
                          {formatPrice(course.price)}
                        </div>
                        <div className="text-xs text-black/60">{course.duration}</div>
                      </div>
                    </div>
                    <CardTitle className="text-xl font-display text-black group-hover:text-accent transition-colors line-clamp-2">
                      {course.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-black/60 text-sm line-clamp-2">
                      {course.description}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-black/60">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {course.format}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {course.students}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{course.rating}</span>
                      </div>
                      <span className="text-sm text-black/60">• {course.instructor}</span>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {course.topics.slice(0, 3).map((topic, i) => (
                        <Badge key={i} variant="outline" className="text-xs border-black/20">
                          {topic}
                        </Badge>
                      ))}
                      {course.topics.length > 3 && (
                        <Badge variant="outline" className="text-xs border-black/20">
                          +{course.topics.length - 3} more
                        </Badge>
                      )}
                    </div>

                    <Button className="w-full bg-black hover:bg-black/90 text-white rounded-lg">
                      <Play className="mr-2 h-4 w-4" />
                      Enroll Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-16">
              <Target className="h-16 w-16 text-black/20 mx-auto mb-4" />
              <h3 className="text-xl font-display font-semibold text-black mb-2">
                No courses found
              </h3>
              <p className="text-black/60">
                Try adjusting your search criteria or browse all categories.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-black" />
                </div>
                <span className="text-xl font-bold font-display">Carthigan Education</span>
              </div>
              <p className="text-white/60 max-w-md">
                Empowering African professionals with world-class education in engineering, 
                technology, and innovation. All courses priced in UGX for accessibility.
              </p>
            </div>
            
            <div>
              <h4 className="font-display font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-white/60">
                <li>Engineering</li>
                <li>Software Development</li>
                <li>Design & Creative</li>
                <li>Languages</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-display font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-white/60">
                <li>education@carthigan.com</li>
                <li>+256 123 456 789</li>
                <li>Kampala, Uganda</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60">
            <p>&copy; 2024 Carthigan Education. Investing in African innovation.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 