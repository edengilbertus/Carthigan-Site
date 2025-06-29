"use client"

import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { COURSES, Course } from '@/lib/data/courses'
import { Search, Star, Clock, Users, Play, BookOpen, Award, TrendingUp } from 'lucide-react'
import Link from 'next/link'

// Make auth optional - only needed for enrollment
const useOptionalAuth = () => {
  try {
    const { useAuth } = require('@/contexts/AuthContext')
    return useAuth()
  } catch {
    return { user: null, loading: false }
  }
}

interface CourseCardProps {
  course: Course
  onEnroll: (course: Course) => void
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onEnroll }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl py-6 shadow-sm h-full hover:shadow-medium transition-all duration-300 border border-black/10 hover:border-black/20 group">
        <div className="relative h-48 bg-gradient-to-br from-accent/10 to-accent/5 rounded-t-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
          <div className="absolute top-4 left-4">
            <Badge variant="outline" className={`
              ${course.level === 'Beginner' ? 'bg-white border-green-500/20 text-green-600' : ''}
              ${course.level === 'Intermediate' ? 'bg-white border-yellow-500/20 text-yellow-600' : ''}
              ${course.level === 'Advanced' ? 'bg-white border-red-500/20 text-red-600' : ''}
            `}>
              {course.level}
            </Badge>
          </div>
          <div className="absolute top-4 right-4">
            <div className="text-white font-bold text-lg">{course.priceDisplay}</div>
          </div>
        </div>
        
        <CardHeader className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 pb-4">
          <CardTitle className="font-semibold text-xl font-display text-black group-hover:text-accent transition-colors line-clamp-2">
            {course.title}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="px-6 space-y-4">
          <p className="text-black/60 text-sm line-clamp-2">{course.description}</p>
          
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
            {course.tags.map((tag: string, index: number) => (
              <Badge key={index} variant="outline" className="text-xs border-black/20">
                {tag}
              </Badge>
            ))}
          </div>
          
          <Button 
            onClick={() => onEnroll(course)}
            className="w-full bg-black hover:bg-black/90 text-white rounded-lg"
          >
            <Play className="mr-2 h-4 w-4" />
            Enroll Now
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}

interface CategoryCardProps {
  category: string
  title: string
  description: string
  courseCount: number
  onClick: () => void
}

const CategoryCard: React.FC<CategoryCardProps> = ({ 
  category, 
  title, 
  description, 
  courseCount, 
  onClick 
}) => {
  // Create URL-friendly category names
  const categoryUrls: Record<string, string> = {
    electrical: 'electrical-engineering',
    mechanical: 'mechanical-engineering',
    computer: 'computer-engineering',
    software: 'software-engineering',
    design: 'ui-ux-design',
    writing: 'creative-writing',
    music: 'music-production',
    language: 'languages',
    'creative-software': 'creative-software'
  }

  const categoryUrl = categoryUrls[category] || category

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
      className="cursor-pointer"
    >
      <Link href={`/education/${categoryUrl}`}>
        <Card className="h-full hover:shadow-lg transition-all duration-300 border border-black/10 hover:border-black/20 group">
          <CardContent className="p-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <Badge variant="outline" className="text-xs">
                  {courseCount} courses
                </Badge>
              </div>
              
              <div>
                <h3 className="font-display font-semibold text-xl text-black group-hover:text-blue-600 transition-colors">
                  {title}
                </h3>
                <p className="text-black/60 text-sm mt-2 line-clamp-3">
                  {description}
                </p>
              </div>
              
              <div className="flex items-center text-sm text-blue-600 font-medium">
                <span>Explore courses</span>
                <TrendingUp className="ml-2 h-4 w-4" />
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}

export function EducationPage() {
  const { user, loading } = useOptionalAuth()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [enrollmentModal, setEnrollmentModal] = useState<{
    isOpen: boolean
    course: Course | null
  }>({
    isOpen: false,
    course: null
  })

  // Categories with descriptions
  const categories = {
    electrical: {
      title: 'Electrical Engineering',
      description: 'Master circuit analysis, digital electronics, power systems, and advanced electrical engineering concepts.',
      courses: COURSES.filter(course => course.category === 'electrical')
    },
    mechanical: {
      title: 'Mechanical Engineering', 
      description: 'Learn thermodynamics, fluid mechanics, manufacturing processes, and mechanical design principles.',
      courses: COURSES.filter(course => course.category === 'mechanical')
    },
    computer: {
      title: 'Computer Engineering',
      description: 'Dive into computer architecture, embedded systems, VLSI design, and digital signal processing.',
      courses: COURSES.filter(course => course.category === 'computer')
    },
    software: {
      title: 'Software Engineering',
      description: 'Build expertise in programming, web development, databases, cloud computing, and software architecture.',
      courses: COURSES.filter(course => course.category === 'software')
    },
    design: {
      title: 'UI/UX Design',
      description: 'Create beautiful, user-centered designs with modern tools and design thinking methodologies.',
      courses: COURSES.filter(course => course.category === 'design')
    },
    writing: {
      title: 'Creative Writing',
      description: 'Develop your writing skills across fiction, non-fiction, journalism, and professional communication.',
      courses: COURSES.filter(course => course.category === 'writing')
    },
    music: {
      title: 'Music Production',
      description: 'Master audio engineering, music theory, electronic production, and professional recording techniques.',
      courses: COURSES.filter(course => course.category === 'music')
    },
    language: {
      title: 'Languages',
      description: 'Learn English, French, Spanish, Italian, Hebrew, and other languages for global communication.',
      courses: COURSES.filter(course => course.category === 'language')
    },
    'creative-software': {
      title: 'Creative Software',
      description: 'Master industry-standard creative tools like Photoshop, Illustrator, Final Cut Pro, and Figma.',
      courses: COURSES.filter(course => course.category === 'creative-software')
    }
  }

  // Featured courses (highest rated)
  const featuredCourses = useMemo(() => {
    return COURSES
      .filter(course => course.featured || course.rating >= 4.7)
      .slice(0, 6)
  }, [])

  // Filtered courses
  const filteredCourses = useMemo(() => {
    let filtered = selectedCategory === 'all' ? COURSES : COURSES.filter(course => course.category === selectedCategory)
    
    if (searchTerm) {
      filtered = filtered.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.tags.some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }
    
    return filtered
  }, [searchTerm, selectedCategory])

  const handleEnroll = (course: Course) => {
    setEnrollmentModal({ isOpen: true, course })
  }

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category)
    // Scroll to courses section
    document.getElementById('courses-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  const closeModal = () => {
    setEnrollmentModal({ isOpen: false, course: null })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display text-black mb-6">
              Carthigan
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Education
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-black/70 mb-8 leading-relaxed">
              Master engineering, technology, and creative skills with comprehensive courses designed for African professionals. All courses priced in UGX.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-black/60">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                <span>50+ Expert Courses</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>10,000+ Students</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span>4.8 Average Rating</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display text-black mb-4">
              Explore Our Categories
            </h2>
            <p className="text-xl text-black/60 max-w-3xl mx-auto">
              Choose from our comprehensive range of engineering, technology, and creative courses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(categories).map(([key, category]) => (
              <CategoryCard
                key={key}
                category={key}
                title={category.title}
                description={category.description}
                courseCount={category.courses.length}
                onClick={() => handleCategoryClick(key)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display text-black mb-4">
              Featured Courses
            </h2>
            <p className="text-xl text-black/60 max-w-3xl mx-auto">
              Our most popular and highly-rated courses across all categories
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onEnroll={handleEnroll}
              />
            ))}
          </div>
        </div>
      </section>

      {/* All Courses Section */}
      <section id="courses-section" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold font-display text-black mb-4">
                All Courses
              </h2>
              <p className="text-xl text-black/60 max-w-3xl mx-auto">
                Browse our complete catalog of {COURSES.length} professional courses
              </p>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black/40 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 py-3 border border-black/20 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>
              
              <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="md:w-auto">
                <TabsList className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-1">
                  <TabsTrigger value="all" className="text-xs">All</TabsTrigger>
                  <TabsTrigger value="electrical" className="text-xs">Electrical</TabsTrigger>
                  <TabsTrigger value="mechanical" className="text-xs">Mechanical</TabsTrigger>
                  <TabsTrigger value="computer" className="text-xs">Computer</TabsTrigger>
                  <TabsTrigger value="software" className="text-xs">Software</TabsTrigger>
                  <TabsTrigger value="design" className="text-xs">Design</TabsTrigger>
                  <TabsTrigger value="writing" className="text-xs">Writing</TabsTrigger>
                  <TabsTrigger value="music" className="text-xs">Music</TabsTrigger>
                  <TabsTrigger value="language" className="text-xs">Languages</TabsTrigger>
                  <TabsTrigger value="creative-software" className="text-xs">Creative</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </motion.div>

          {/* Results */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onEnroll={handleEnroll}
                />
              ))}
            </AnimatePresence>
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-black/60">No courses found. Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Enrollment Modal */}
      <AnimatePresence>
        {enrollmentModal.isOpen && enrollmentModal.course && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold font-display text-black mb-2">
                      Enroll in {enrollmentModal.course.title}
                    </h3>
                    <p className="text-black/60">
                      Complete your enrollment to start learning
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={closeModal}
                    className="text-black/60 hover:text-black"
                  >
                    ✕
                  </Button>
                </div>

                {!user ? (
                  <div className="text-center py-8">
                    <div className="bg-blue-50 rounded-lg p-6 mb-6">
                      <h4 className="text-lg font-semibold text-black mb-2">
                        Login Required
                      </h4>
                      <p className="text-black/60 mb-4">
                        Please create an account or log in to enroll in courses and track your progress.
                      </p>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                        Login / Sign Up
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Course Summary */}
                    <div className="bg-gray-50 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-lg font-semibold text-black">Course Summary</h4>
                        <div className="text-2xl font-bold text-black">
                          {enrollmentModal.course.priceDisplay}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-black/60">Duration:</span>
                          <div className="font-medium">{enrollmentModal.course.duration}</div>
                        </div>
                        <div>
                          <span className="text-black/60">Format:</span>
                          <div className="font-medium">{enrollmentModal.course.format}</div>
                        </div>
                        <div>
                          <span className="text-black/60">Instructor:</span>
                          <div className="font-medium">{enrollmentModal.course.instructor}</div>
                        </div>
                        <div>
                          <span className="text-black/60">Level:</span>
                          <div className="font-medium">{enrollmentModal.course.level}</div>
                        </div>
                      </div>
                    </div>

                    {/* Payment Options */}
                    <div>
                      <h4 className="text-lg font-semibold text-black mb-4">Payment Options</h4>
                      <div className="grid gap-3">
                        {/* Stripe/Card Payment */}
                        <Button variant="outline" className="flex items-center justify-between p-4 h-auto">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                              <span className="text-white text-xs font-bold">💳</span>
                            </div>
                            <div className="text-left">
                              <div className="font-medium">Credit/Debit Card</div>
                              <div className="text-sm text-black/60">Visa, Mastercard, Stripe</div>
                            </div>
                          </div>
                          <span className="text-sm text-black/60">→</span>
                        </Button>

                        {/* MTN Mobile Money */}
                        <Button variant="outline" className="flex items-center justify-between p-4 h-auto">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-yellow-600 rounded flex items-center justify-center">
                              <span className="text-white text-xs font-bold">M</span>
                            </div>
                            <div className="text-left">
                              <div className="font-medium">MTN Mobile Money</div>
                              <div className="text-sm text-black/60">Pay with MTN Uganda</div>
                            </div>
                          </div>
                          <span className="text-sm text-black/60">→</span>
                        </Button>

                        {/* Airtel Money */}
                        <Button variant="outline" className="flex items-center justify-between p-4 h-auto">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                              <span className="text-white text-xs font-bold">A</span>
                            </div>
                            <div className="text-left">
                              <div className="font-medium">Airtel Money</div>
                              <div className="text-sm text-black/60">Pay with Airtel Uganda</div>
                            </div>
                          </div>
                          <span className="text-sm text-black/60">→</span>
                        </Button>

                        {/* WhatsApp Contact */}
                        <Button 
                          variant="outline" 
                          className="flex items-center justify-between p-4 h-auto"
                          onClick={() => window.open('https://wa.me/256123456789?text=Hi, I want to enroll in ' + enrollmentModal.course?.title, '_blank')}
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                              <span className="text-white text-xs font-bold">📱</span>
                            </div>
                            <div className="text-left">
                              <div className="font-medium">WhatsApp Payment</div>
                              <div className="text-sm text-black/60">Contact us via WhatsApp</div>
                            </div>
                          </div>
                          <span className="text-sm text-black/60">→</span>
                        </Button>
                      </div>
                    </div>

                    <div className="text-xs text-black/60 text-center">
                      By enrolling, you agree to our Terms of Service and Privacy Policy
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-black" />
                </div>
                <span className="text-xl font-bold font-display">Carthigan Education</span>
              </div>
              <p className="text-white/60 max-w-md">
                Empowering African professionals with world-class education in engineering, technology, and innovation. All courses priced in UGX for accessibility.
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
            <p>© 2024 Carthigan Education. Investing in African innovation.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 