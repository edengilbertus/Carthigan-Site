'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Course } from '@/lib/data/courses'
import { Search, Star, Clock, Users, Play, ArrowLeft, BookOpen } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'

interface CourseCardProps {
  course: Course
  onEnroll: (course: Course) => void
  categorySlug: string
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onEnroll, categorySlug }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl py-6 shadow-sm h-full hover:shadow-lg transition-all duration-300 border border-black/10 hover:border-black/20 group">
        <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 rounded-t-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
          <div className="absolute top-4 left-4">
            <Badge variant="outline" className="bg-white border-black/20 text-black">
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
          <Link href={`/education/${categorySlug}/${course.id}`}>
            <CardTitle className="font-semibold text-xl font-display text-black group-hover:text-black/80 transition-colors line-clamp-2 cursor-pointer hover:text-blue-600">
              {course.title}
            </CardTitle>
          </Link>
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
              <Star className="h-4 w-4 fill-black text-black" />
              <span className="text-sm font-medium">{course.rating}</span>
            </div>
            <span className="text-sm text-black/60">• {course.instructor}</span>
          </div>
          
          <div className="space-y-3">
            <div className="text-sm font-medium text-black">Course Outline:</div>
            <div className="space-y-1">
              {course.outline.slice(0, 3).map((week, index) => (
                <div key={index} className="text-xs text-black/60">
                  <span className="font-medium">{week.week}:</span> {week.topics.join(', ')}
                </div>
              ))}
              {course.outline.length > 3 && (
                <div className="text-xs text-black/60 italic">
                  +{course.outline.length - 3} more weeks...
                </div>
              )}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-1">
            {course.tags.slice(0, 3).map((tag: string, index: number) => (
              <Badge key={index} variant="outline" className="text-xs border-black/20">
                {tag}
              </Badge>
            ))}
            {course.tags.length > 3 && (
              <Badge variant="outline" className="text-xs border-black/20">
                +{course.tags.length - 3} more
              </Badge>
            )}
          </div>
          
          <div className="flex gap-2">
            <Link href={`/education/${categorySlug}/${course.id}`} className="flex-1">
              <Button 
                variant="outline"
                className="w-full border-black/20 hover:bg-gray-50 text-black"
              >
                <BookOpen className="mr-2 h-4 w-4" />
                View Details
              </Button>
            </Link>
            <Button 
              onClick={() => onEnroll(course)}
              className="flex-1 bg-black hover:bg-black/80 text-white rounded-lg"
            >
              <Play className="mr-2 h-4 w-4" />
              Enroll
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

interface CategoryPageProps {
  category: string
  title: string
  description: string
  courses: Course[]
  breadcrumb: string
}

export function CategoryPage({ category, title, description, courses, breadcrumb }: CategoryPageProps) {
  const { user, loading, signOut } = useAuth()
  const [searchTerm, setSearchTerm] = useState('')
  const [enrollmentModal, setEnrollmentModal] = useState<{
    isOpen: boolean
    course: Course | null
  }>({
    isOpen: false,
    course: null
  })

  // Filter courses based on search
  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.tags.some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  const handleEnroll = (course: Course) => {
    setEnrollmentModal({ isOpen: true, course })
  }

  const closeModal = () => {
    setEnrollmentModal({ isOpen: false, course: null })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Login */}
      <header className="bg-white border-b border-black/10 sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/education" className="text-2xl font-bold text-black hover:text-black/80 transition-colors">
                Carthigan Education
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-4">
                  <div className="text-sm text-black/70">
                    Welcome, <span className="font-medium text-black">{user.name}</span>
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
                    onClick={signOut}
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
                  >
                    Login
                  </Button>
                  <Button 
                    size="sm"
                    className="bg-black hover:bg-black/80 text-white"
                  >
                    Sign Up
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm text-black/60">
            <Link href="/education" className="hover:text-black transition-colors">
              Education
            </Link>
            <span>/</span>
            <span className="text-black font-medium">{title}</span>
          </nav>
        </div>
      </div>

      {/* Header Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Link 
              href="/education"
              className="inline-flex items-center gap-2 text-black/60 hover:text-black mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to All Courses
            </Link>
            
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-black rounded-lg">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-black">
                {title}
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-black/70 mb-8 leading-relaxed max-w-3xl mx-auto">
              {description}
            </p>
            
            <div className="flex items-center justify-center gap-6 text-sm text-black/60">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                <span>{courses.length} Courses Available</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>{courses.reduce((sum, course) => sum + course.students, 0)} Total Students</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-black text-black" />
                <span>{(courses.reduce((sum, course) => sum + course.rating, 0) / courses.length).toFixed(1)} Average Rating</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black/40 h-5 w-5" />
              <Input
                type="text"
                placeholder={`Search ${title.toLowerCase()} courses...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-3 border border-black/20 rounded-lg focus:border-black focus:ring-2 focus:ring-black/20"
              />
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredCourses.map((course) => (
                  <CourseCard
                    key={course.id}
                    course={course}
                    onEnroll={handleEnroll}
                    categorySlug={breadcrumb}
                  />
                ))}
              </AnimatePresence>
            </div>

            {filteredCourses.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-black/60">
                  No courses found matching your search. Try adjusting your search terms.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Enrollment Modal - same as before */}
      <AnimatePresence>
        {enrollmentModal.isOpen && enrollmentModal.course && (
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
              className="bg-white rounded-xl max-w-md w-full p-6 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Enroll in Course</h3>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              <div className="mb-6">
                <h4 className="font-medium text-black">{enrollmentModal.course.title}</h4>
                <p className="text-sm text-black/60 mt-1">{enrollmentModal.course.duration}</p>
                <div className="text-lg font-bold text-black mt-2">
                  {enrollmentModal.course.priceDisplay}
                </div>
              </div>

              {!user ? (
                <div className="text-center">
                  <p className="text-black/60 mb-4">Please log in to enroll in this course</p>
                  <Button className="w-full">Log In</Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <h4 className="font-medium text-black">Choose Payment Method</h4>
                  
                  {/* Payment Methods */}
                  <div className="space-y-3">
                    {/* Credit Cards */}
                    <button className="w-full p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-3">
                      <div className="w-8 h-6 bg-gray-800 rounded"></div>
                      <span className="text-left">
                        <div className="font-medium">Credit/Debit Card</div>
                        <div className="text-xs text-gray-500">Visa, Mastercard via Stripe</div>
                      </span>
                    </button>

                    {/* MTN Mobile Money */}
                    <button className="w-full p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-3">
                      <div className="w-8 h-6 bg-gray-700 rounded flex items-center justify-center">
                        <span className="text-xs font-bold text-white">MTN</span>
                      </div>
                      <span className="text-left">
                        <div className="font-medium">MTN Mobile Money</div>
                        <div className="text-xs text-gray-500">Pay with your MTN account</div>
                      </span>
                    </button>

                    {/* Airtel Money */}
                    <button className="w-full p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-3">
                      <div className="w-8 h-6 bg-gray-600 rounded flex items-center justify-center">
                        <span className="text-xs font-bold text-white">AIR</span>
                      </div>
                      <span className="text-left">
                        <div className="font-medium">Airtel Money</div>
                        <div className="text-xs text-gray-500">Pay with your Airtel account</div>
                      </span>
                    </button>

                    {/* Bank Transfer */}
                    <button className="w-full p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-3">
                      <div className="w-8 h-6 bg-gray-800 rounded flex items-center justify-center">
                        <span className="text-xs font-bold text-white">$</span>
                      </div>
                      <span className="text-left">
                        <div className="font-medium">Bank Transfer</div>
                        <div className="text-xs text-gray-500">Direct bank payment</div>
                      </span>
                    </button>

                    {/* Contact Us */}
                    <button className="w-full p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-3">
                      <div className="w-8 h-6 bg-black rounded flex items-center justify-center">
                        <span className="text-xs font-bold text-white">📱</span>
                      </div>
                      <span className="text-left">
                        <div className="font-medium">Contact Us</div>
                        <div className="text-xs text-gray-500">WhatsApp: +256 123 456 789</div>
                      </span>
                    </button>
                  </div>

                  <div className="pt-4 border-t">
                    <p className="text-xs text-gray-500 text-center">
                      🔒 All payments are secure and encrypted. You will receive access immediately after payment confirmation.
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
              <h4 className="font-display font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/60">
                <li><Link href="/education" className="hover:text-white transition-colors">All Courses</Link></li>
                <li><Link href="/dashboard" className="hover:text-white transition-colors">Student Dashboard</Link></li>
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
