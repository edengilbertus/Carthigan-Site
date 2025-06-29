"use client"

import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { COURSES, Course } from '@/lib/data/courses'
import { Search, Star, Clock, Users, Play, BookOpen, Award, TrendingUp, X, CreditCard, Smartphone, MessageCircle, Phone, CheckCircle, Eye } from 'lucide-react'
import Link from 'next/link'

import { useAuth } from '@/contexts/AuthContext'

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
      onClick={() => window.location.href = `/education/${categoryUrl}`}
    >
      <Card className="bg-white text-black border border-black/20 hover:border-black/40 transition-all h-full shadow-sm hover:shadow-md">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between mb-2">
            <BookOpen className="h-8 w-8 text-black" />
            <Badge className="bg-black/5 text-black border-black/20">{courseCount} courses</Badge>
          </div>
          <CardTitle className="text-xl font-display text-black">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-black/60 mb-4">{description}</p>
          <Button className="w-full bg-black hover:bg-black/80 text-white">
            Explore Courses
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}

interface CourseCardProps {
  course: Course
  onEnroll: (course: Course) => void
  onViewDetails: (course: Course) => void
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onEnroll, onViewDetails }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="bg-white text-black flex flex-col gap-6 rounded-xl py-6 shadow-sm h-full hover:shadow-md transition-all duration-300 border border-black/10 hover:border-black/20 group">
        <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 rounded-t-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
          <div className="absolute top-4 left-4">
            <Badge className={`${
              course.level === 'Beginner' ? 'bg-white border-black/20 text-black' :
              course.level === 'Intermediate' ? 'bg-black/10 border-black/20 text-black' :
              'bg-black/20 border-black/20 text-black'
            }`}>
              {course.level}
            </Badge>
          </div>
          <div className="absolute top-4 right-4">
            <div className="text-white font-bold text-lg bg-black/70 px-3 py-1 rounded-lg">
              {course.priceDisplay}
            </div>
          </div>
          <div className="absolute bottom-4 left-4">
            <div className="text-white text-sm bg-black/70 px-3 py-1 rounded-lg">
              {course.duration}
            </div>
          </div>
        </div>
        
        <CardHeader className="px-6 pb-4">
          <CardTitle 
            className="text-xl font-display text-black group-hover:text-gray-600 transition-colors line-clamp-2 cursor-pointer"
            onClick={() => onViewDetails(course)}
          >
            {course.title}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="px-6 space-y-4">
          <p className="text-black/60 text-sm line-clamp-3">{course.description}</p>
          
          <div className="flex items-center gap-4 text-sm text-black/60">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {course.format}
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              {course.students} students
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-4 w-4 ${i < Math.floor(course.rating) ? 'fill-black text-black' : 'text-gray-300'}`} 
                />
              ))}
              <span className="text-sm font-medium">{course.rating}</span>
            </div>
            <span className="text-sm text-black/60">• {course.instructor}</span>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-medium text-black">Course Preview:</div>
            <div className="space-y-1">
              {course.outline.slice(0, 2).map((week, index) => (
                <div key={index} className="text-xs text-black/60">
                  <span className="font-medium">{week.week}:</span> {week.topics.slice(0, 2).join(', ')}
                </div>
              ))}
              <button 
                onClick={() => onViewDetails(course)}
                className="text-xs text-black hover:text-black/80 underline"
              >
                View Full Outline ({course.outline.length} weeks)
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-1">
            {course.tags.slice(0, 3).map((tag, index) => (
              <Badge key={index} className="text-xs border-black/20 bg-white text-black">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex gap-2">
            <Button 
              onClick={() => onViewDetails(course)}
              variant="outline"
              className="flex-1 border-black/20 hover:bg-gray-50 text-black"
            >
              <Eye className="mr-2 h-4 w-4" />
              View Details
            </Button>
            <Button 
              onClick={() => onEnroll(course)}
              className="flex-1 bg-black hover:bg-black/80 text-white rounded-lg"
            >
              <Play className="mr-2 h-4 w-4" />
              Enroll Now
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

interface ModalState {
  isOpen: boolean
  course: Course | null
  type: 'details' | 'enrollment'
  step: 'auth' | 'payment' | 'confirmation'
}

const EducationPage: React.FC = () => {
  const auth = useAuth()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [modal, setModal] = useState<ModalState>({
    isOpen: false,
    course: null,
    type: 'details',
    step: 'auth'
  })
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
    isLogin: true,
    fullName: ''
  })

  // Categories with course counts
  const categories = useMemo(() => {
    const categoryData = [
      { id: 'electrical', title: 'Electrical Engineering', description: 'Circuit analysis, power systems, and advanced electrical concepts.' },
      { id: 'mechanical', title: 'Mechanical Engineering', description: 'Thermodynamics, mechanics, and mechanical system design.' },
      { id: 'computer', title: 'Computer Engineering', description: 'Computer architecture, embedded systems, and VLSI design.' },
      { id: 'software', title: 'Software Engineering', description: 'Programming, web development, and software architecture.' },
      { id: 'design', title: 'UI/UX Design', description: 'User interface design, user experience, and design thinking.' },
      { id: 'writing', title: 'Creative Writing', description: 'Fiction, content creation, and professional writing skills.' },
      { id: 'music', title: 'Music Production', description: 'Audio engineering, music theory, and production techniques.' },
      { id: 'language', title: 'Languages', description: 'English, French, Spanish, and other language courses.' },
      { id: 'creative-software', title: 'Creative Software', description: 'Adobe Creative Suite, video editing, and design tools.' }
    ]

    return categoryData.map(cat => ({
      ...cat,
      courseCount: COURSES.filter(course => course.category === cat.id).length
    }))
  }, [])

  // Filter courses based on search and category
  const filteredCourses = useMemo(() => {
    return COURSES.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory
      
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  const featuredCourses = COURSES.filter(course => course.featured).slice(0, 6)

  const handleViewDetails = (course: Course) => {
    setModal({ isOpen: true, course, type: 'details', step: 'auth' })
  }

  const handleEnroll = (course: Course) => {
    if (auth.user) {
      setModal({ isOpen: true, course, type: 'enrollment', step: 'payment' })
    } else {
      setModal({ isOpen: true, course, type: 'enrollment', step: 'auth' })
    }
  }

  const closeModal = () => {
    setModal({ isOpen: false, course: null, type: 'details', step: 'auth' })
    setLoginForm({ email: '', password: '', isLogin: true, fullName: '' })
  }

  const handleAuth = async () => {
    if (loginForm.isLogin) {
      const result = await auth.signIn(loginForm.email, loginForm.password)
      if (result.success) {
        setModal(prev => ({ ...prev, step: 'payment' }))
      } else {
        alert(result.error || 'Login failed')
      }
    } else {
      const result = await auth.signUp(loginForm.email, loginForm.password, loginForm.fullName)
      if (result.success) {
        setModal(prev => ({ ...prev, step: 'payment' }))
      } else {
        alert(result.error || 'Sign up failed')
      }
    }
  }

  const handlePayment = (method: string) => {
    console.log(`Processing payment with ${method}`)
    setModal(prev => ({ ...prev, step: 'confirmation' }))
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Login */}
      <header className="bg-white border-b border-black/10 sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-black">Carthigan Education</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              {auth.user ? (
                <div className="flex items-center space-x-4">
                  <div className="text-sm text-black/70">
                    Welcome, <span className="font-medium text-black">{auth.user.name}</span>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-black/20 hover:bg-gray-50 text-black"
                    onClick={() => window.location.href = '/dashboard'}
                  >
                    Dashboard
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-black/20 hover:bg-gray-50 text-black"
                    onClick={auth.signOut}
                  >
                    Sign Out
                  </Button>
                </div>
              ) : (
                <div className="flex items-center space-x-3">
                  <div className="text-sm text-black/60">
                    Already have an account?
                  </div>
                  <Button 
                    variant="outline"
                    size="sm"
                    className="border-black/20 hover:bg-gray-50 text-black"
                    onClick={() => setModal({ isOpen: true, course: null, type: 'enrollment', step: 'auth' })}
                  >
                    Login
                  </Button>
                  <Button 
                    size="sm"
                    className="bg-black hover:bg-black/80 text-white"
                    onClick={() => {
                      setLoginForm(prev => ({ ...prev, isLogin: false }))
                      setModal({ isOpen: true, course: null, type: 'enrollment', step: 'auth' })
                    }}
                  >
                    Sign Up
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display text-black mb-8">
              Carthigan Education
            </h1>
            <p className="text-xl md:text-2xl text-black/70 mb-8 leading-relaxed max-w-3xl mx-auto">
              Empowering African professionals with world-class education in engineering, technology, and innovation. All courses priced in UGX for accessibility.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-black/60">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                <span>{COURSES.length} Courses Available</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>15,000+ Students</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                <span>Industry Certified</span>
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
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display text-center text-black mb-12">
              Explore Course Categories
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category) => (
                <CategoryCard
                  key={category.id}
                  category={category.id}
                  title={category.title}
                  description={category.description}
                  courseCount={category.courseCount}
                  onClick={() => {}}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display text-center text-black mb-12">
              Featured Courses
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onEnroll={handleEnroll}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Courses Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display text-center text-black mb-12">
              All Courses
            </h2>

            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black/40 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 py-3 border border-black/20 rounded-lg focus:border-black focus:ring-2 focus:ring-black/20"
                />
              </div>

              <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
                <TabsList className="grid w-full grid-cols-4 lg:grid-cols-5 bg-gray-50 border border-black/10">
                  <TabsTrigger value="all" className="data-[state=active]:bg-black data-[state=active]:text-white">All</TabsTrigger>
                  <TabsTrigger value="electrical" className="data-[state=active]:bg-black data-[state=active]:text-white">Electrical</TabsTrigger>
                  <TabsTrigger value="mechanical" className="data-[state=active]:bg-black data-[state=active]:text-white">Mechanical</TabsTrigger>
                  <TabsTrigger value="software" className="data-[state=active]:bg-black data-[state=active]:text-white">Software</TabsTrigger>
                  <TabsTrigger value="design" className="data-[state=active]:bg-black data-[state=active]:text-white">Design</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onEnroll={handleEnroll}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* User Info Section (if logged in) */}
      {auth.user && (
        <section className="py-8 bg-black text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg">
                Welcome back, <strong>{auth.user.name}</strong>! 
                <Button 
                  variant="outline" 
                  className="ml-4 border-white text-white hover:bg-white hover:text-black"
                  onClick={() => window.location.href = '/dashboard'}
                >
                  Go to Dashboard
                </Button>
                <Button 
                  variant="outline" 
                  className="ml-2 border-white text-white hover:bg-white hover:text-black"
                  onClick={auth.signOut}
                >
                  Sign Out
                </Button>
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Course Detail & Enrollment Modal */}
      <AnimatePresence>
        {modal.isOpen && modal.course && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-black">
                  {modal.type === 'details' && 'Course Details'}
                  {modal.type === 'enrollment' && modal.step === 'auth' && (loginForm.isLogin ? 'Login to Enroll' : 'Create Account')}
                  {modal.type === 'enrollment' && modal.step === 'payment' && 'Choose Payment Method'}
                  {modal.type === 'enrollment' && modal.step === 'confirmation' && 'Enrollment Confirmed!'}
                </h3>
                <button onClick={closeModal} className="text-black/40 hover:text-black">
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Course Details Modal */}
              {modal.type === 'details' && (
                <div className="space-y-6">
                  <div className="border-b border-black/10 pb-4">
                    <h2 className="text-2xl font-bold text-black mb-2">{modal.course.title}</h2>
                    <div className="flex items-center gap-4 text-sm text-black/60 mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {modal.course.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {modal.course.students} students
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < Math.floor(modal.course.rating) ? 'fill-black text-black' : 'text-gray-300'}`} 
                          />
                        ))}
                        <span className="font-medium">{modal.course.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-black">{modal.course.priceDisplay}</span>
                      <Badge className="bg-black/10 text-black border-black/20">{modal.course.level}</Badge>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-black mb-2">Course Description</h4>
                    <p className="text-black/70">{modal.course.description}</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-black mb-2">Instructor</h4>
                    <p className="text-black/70">{modal.course.instructor}</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-black mb-4">Complete Course Outline</h4>
                    <div className="space-y-3">
                      {modal.course.outline.map((week, index) => (
                        <div key={index} className="border border-black/10 rounded-lg p-4">
                          <h5 className="font-medium text-black mb-2">{week.week}</h5>
                          <ul className="space-y-1">
                            {week.topics.map((topic, topicIndex) => (
                              <li key={topicIndex} className="text-sm text-black/70 flex items-start">
                                <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                {topic}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      onClick={closeModal}
                      variant="outline"
                      className="flex-1 border-black/20 hover:bg-gray-50 text-black"
                    >
                      Close
                    </Button>
                    <Button 
                      onClick={() => {
                        setModal(prev => ({ ...prev, type: 'enrollment' }))
                        handleEnroll(modal.course)
                      }}
                      className="flex-1 bg-black hover:bg-black/80 text-white"
                    >
                      <Play className="mr-2 h-4 w-4" />
                      Enroll Now
                    </Button>
                  </div>
                </div>
              )}

              {/* Enrollment Steps */}
              {modal.type === 'enrollment' && modal.step === 'auth' && (
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg border">
                    <p className="text-sm text-black/70 mb-2">Demo Login Credentials:</p>
                    <p className="text-sm font-mono">Email: eden@carthigan.com</p>
                    <p className="text-sm font-mono">Password: demo123</p>
                  </div>
                  
                  <div className="space-y-3">
                    {!loginForm.isLogin && (
                      <Input
                        type="text"
                        placeholder="Full Name"
                        value={loginForm.fullName}
                        onChange={(e) => setLoginForm(prev => ({ ...prev, fullName: e.target.value }))}
                        className="border-black/20"
                      />
                    )}
                    <Input
                      type="email"
                      placeholder="Email"
                      value={loginForm.email}
                      onChange={(e) => setLoginForm(prev => ({ ...prev, email: e.target.value }))}
                      className="border-black/20"
                    />
                    <Input
                      type="password"
                      placeholder="Password"
                      value={loginForm.password}
                      onChange={(e) => setLoginForm(prev => ({ ...prev, password: e.target.value }))}
                      className="border-black/20"
                    />
                  </div>

                  <Button onClick={handleAuth} className="w-full bg-black hover:bg-black/80 text-white">
                    {loginForm.isLogin ? 'Login' : 'Create Account'}
                  </Button>
                  
                  <button 
                    onClick={() => setLoginForm(prev => ({ ...prev, isLogin: !prev.isLogin }))}
                    className="w-full text-center text-sm text-black/60 hover:text-black"
                  >
                    {loginForm.isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
                  </button>
                </div>
              )}

              {modal.type === 'enrollment' && modal.step === 'payment' && (
                <div className="space-y-6">
                  <div className="bg-gray-50 p-4 rounded-lg border">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-black">Course: {modal.course.title}</span>
                      <span className="font-bold text-black">{modal.course.priceDisplay}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium text-black">Payment Options:</h4>
                    
                    <Button 
                      onClick={() => handlePayment('visa')}
                      variant="outline" 
                      className="w-full justify-start border-black/20 hover:bg-gray-50"
                    >
                      <CreditCard className="mr-3 h-5 w-5" />
                      Credit/Debit Card (Visa, Mastercard)
                    </Button>

                    <Button 
                      onClick={() => handlePayment('mtn')}
                      variant="outline" 
                      className="w-full justify-start border-black/20 hover:bg-gray-50"
                    >
                      <Smartphone className="mr-3 h-5 w-5" />
                      MTN Mobile Money
                    </Button>

                    <Button 
                      onClick={() => handlePayment('airtel')}
                      variant="outline" 
                      className="w-full justify-start border-black/20 hover:bg-gray-50"
                    >
                      <Smartphone className="mr-3 h-5 w-5" />
                      Airtel Money
                    </Button>

                    <Button 
                      onClick={() => handlePayment('whatsapp')}
                      variant="outline" 
                      className="w-full justify-start bg-gray-50 border-gray-200 text-black hover:bg-gray-100"
                    >
                      <MessageCircle className="mr-3 h-5 w-5" />
                      Pay via WhatsApp (+256 123 456 789)
                    </Button>

                    <Button 
                      onClick={() => handlePayment('contact')}
                      variant="outline" 
                      className="w-full justify-start border-black/20 hover:bg-gray-50"
                    >
                      <Phone className="mr-3 h-5 w-5" />
                      Contact Us Directly
                    </Button>
                  </div>

                  <div className="text-xs text-black/60 bg-gray-50 p-3 rounded border">
                    <p>💡 <strong>Instant Access:</strong> Get immediate access to your course materials after payment.</p>
                    <p>🔒 <strong>Secure Payment:</strong> All transactions are encrypted and secure.</p>
                  </div>
                </div>
              )}

              {modal.type === 'enrollment' && modal.step === 'confirmation' && (
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-black" />
                  </div>
                  <h4 className="text-lg font-semibold text-black">Welcome to the Course!</h4>
                  <p className="text-black/60">
                    You've successfully enrolled in <strong>{modal.course.title}</strong>. 
                    Check your email for course access details.
                  </p>
                  <div className="space-y-2">
                    <Button className="w-full bg-black hover:bg-black/80 text-white">
                      Access Course Materials
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full border-black/20 hover:bg-gray-50"
                      onClick={closeModal}
                    >
                      Continue Browsing
                    </Button>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default EducationPage 