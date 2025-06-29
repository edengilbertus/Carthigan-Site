'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Course } from '@/lib/data/courses'
import { 
  ArrowLeft, 
  Star, 
  Clock, 
  Users, 
  Play, 
  BookOpen, 
  Award, 
  CheckCircle,
  X,
  CreditCard,
  Smartphone,
  Phone,
  MessageCircle
} from 'lucide-react'

// Make auth optional - only needed for enrollment
const useOptionalAuth = () => {
  try {
    const { useAuth } = require('@/contexts/AuthContext')
    return useAuth()
  } catch {
    return { user: null, loading: false }
  }
}

interface CourseDetailPageProps {
  course: Course
  relatedCourses: Course[]
  categorySlug: string
}

interface EnrollmentModalState {
  isOpen: boolean
  step: 'auth' | 'payment' | 'confirmation'
}

const CourseDetailPage: React.FC<CourseDetailPageProps> = ({ 
  course, 
  relatedCourses, 
  categorySlug 
}) => {
  const auth = useOptionalAuth()
  const [enrollmentModal, setEnrollmentModal] = useState<EnrollmentModalState>({
    isOpen: false,
    step: 'auth'
  })

  const handleEnroll = () => {
    if (auth?.user) {
      setEnrollmentModal({ isOpen: true, step: 'payment' })
    } else {
      setEnrollmentModal({ isOpen: true, step: 'auth' })
    }
  }

  const closeModal = () => {
    setEnrollmentModal({ isOpen: false, step: 'auth' })
  }

  const handleLogin = () => {
    // Simulate login for demo
    setEnrollmentModal({ isOpen: true, step: 'payment' })
  }

  const handlePayment = (method: string) => {
    // Simulate payment processing
    console.log(`Processing payment with ${method}`)
    setEnrollmentModal({ isOpen: true, step: 'confirmation' })
  }

  const categoryTitles: Record<string, string> = {
    'electrical-engineering': 'Electrical Engineering',
    'mechanical-engineering': 'Mechanical Engineering',
    'computer-engineering': 'Computer Engineering',
    'software-engineering': 'Software Engineering',
    'ui-ux-design': 'UI/UX Design',
    'creative-writing': 'Creative Writing',
    'music-production': 'Music Production',
    'languages': 'Languages',
    'creative-software': 'Creative Software'
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm text-black/60">
            <Link href="/education" className="hover:text-black transition-colors">
              Education
            </Link>
            <span>/</span>
            <Link href={`/education/${categorySlug}`} className="hover:text-black transition-colors">
              {categoryTitles[categorySlug]}
            </Link>
            <span>/</span>
            <span className="text-black font-medium">{course.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <Link 
                  href={`/education/${categorySlug}`}
                  className="inline-flex items-center gap-2 text-black/60 hover:text-black mb-6 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to {categoryTitles[categorySlug]}
                </Link>

                <div className="flex items-center gap-3 mb-4">
                  <Badge className="bg-gray-100 text-black border-gray-200">
                    {course.level}
                  </Badge>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(course.rating) ? 'fill-black text-black' : 'text-gray-300'}`} 
                      />
                    ))}
                    <span className="text-sm font-medium ml-1">{course.rating}</span>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold font-display text-black mb-6">
                  {course.title}
                </h1>

                <p className="text-xl text-black/70 mb-8 leading-relaxed">
                  {course.description}
                </p>

                <div className="flex flex-wrap items-center gap-6 text-sm text-black/60 mb-8">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    <span>{course.students} students</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    <span>{course.format}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={handleEnroll}
                    className="bg-black hover:bg-black/80 text-white px-8 py-3 text-lg"
                    size="lg"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Enroll Now - {course.priceDisplay}
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-black/20 text-black hover:bg-gray-50 px-8 py-3 text-lg"
                    size="lg"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Contact Us
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white rounded-xl shadow-lg p-8 border border-black/10">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-black mb-2">
                      {course.priceDisplay}
                    </div>
                    <p className="text-black/60">One-time payment</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-black" />
                      <span>Lifetime access to course materials</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-black" />
                      <span>Certificate of completion</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-black" />
                      <span>Direct instructor support</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-black" />
                      <span>Access to course community</span>
                    </div>
                  </div>

                  <div className="text-center text-sm text-black/60">
                    <p>💳 Visa, Mobile Money (MTN, Airtel)</p>
                    <p>📞 Pay via WhatsApp: +256 123 456 789</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="outline" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="outline">Course Outline</TabsTrigger>
                <TabsTrigger value="instructor">Instructor</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="outline" className="mt-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold font-display mb-6">What You'll Learn</h3>
                  
                  <div className="grid gap-4">
                    {course.outline.map((week, index) => (
                      <Card key={index} className="border border-black/10">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg font-semibold">
                            {week.week}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {week.topics.map((topic, topicIndex) => (
                              <li key={topicIndex} className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-black mt-0.5 flex-shrink-0" />
                                <span className="text-black/70">{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="instructor" className="mt-8">
                <Card className="border border-black/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                        <Award className="h-8 w-8 text-black" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-2">{course.instructor}</h4>
                        <p className="text-black/70 mb-4">
                          Expert instructor with over 10 years of experience in {categoryTitles[categorySlug].toLowerCase()}. 
                          Passionate about teaching and helping students achieve their goals.
                        </p>
                        <div className="flex items-center gap-4 text-sm text-black/60">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-black text-black" />
                            <span>{course.rating} rating</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            <span>{course.students} students taught</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">{course.rating}</div>
                    <div className="flex items-center justify-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-5 w-5 ${i < Math.floor(course.rating) ? 'fill-black text-black' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <p className="text-black/60">Based on {course.students} student reviews</p>
                  </div>
                  
                  <div className="grid gap-4">
                    {[
                      {
                        name: "Sarah M.",
                        rating: 5,
                        comment: "Excellent course! The instructor explains complex concepts clearly and the hands-on projects are very practical."
                      },
                      {
                        name: "John K.",
                        rating: 5,
                        comment: "Best investment I've made in my career. The course content is up-to-date and highly relevant."
                      },
                      {
                        name: "Grace A.",
                        rating: 4,
                        comment: "Great course overall. Would recommend to anyone looking to advance their skills in this field."
                      }
                    ].map((review, index) => (
                      <Card key={index} className="border border-black/10">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                              <span className="text-sm font-medium text-black">
                                {review.name.charAt(0)}
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="font-medium">{review.name}</span>
                                <div className="flex items-center gap-1">
                                  {[...Array(5)].map((_, i) => (
                                    <Star 
                                      key={i} 
                                      className={`h-3 w-3 ${i < review.rating ? 'fill-black text-black' : 'text-gray-300'}`} 
                                    />
                                  ))}
                                </div>
                              </div>
                              <p className="text-black/70 text-sm">{review.comment}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      {relatedCourses.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h3 className="text-2xl font-bold font-display mb-8 text-center">
                More {categoryTitles[categorySlug]} Courses
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedCourses.map((relatedCourse) => (
                  <Card key={relatedCourse.id} className="bg-white border border-black/10 hover:shadow-lg transition-all">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge className="bg-gray-100 text-black border-gray-200">
                          {relatedCourse.level}
                        </Badge>
                        <span className="font-bold text-black">{relatedCourse.priceDisplay}</span>
                      </div>
                      <CardTitle className="text-lg line-clamp-2">{relatedCourse.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-black/60 text-sm mb-4 line-clamp-2">
                        {relatedCourse.description}
                      </p>
                      <div className="flex items-center justify-between text-sm text-black/60">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{relatedCourse.duration.split(' ')[0]} weeks</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-black text-black" />
                          <span>{relatedCourse.rating}</span>
                        </div>
                      </div>
                      <Link href={`/education/${categorySlug}/${relatedCourse.id}`}>
                        <Button className="w-full mt-4 bg-black hover:bg-black/80 text-white">
                          View Course
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Enrollment Modal */}
      <AnimatePresence>
        {enrollmentModal.isOpen && (
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
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">
                  {enrollmentModal.step === 'auth' && 'Login to Enroll'}
                  {enrollmentModal.step === 'payment' && 'Choose Payment Method'}
                  {enrollmentModal.step === 'confirmation' && 'Enrollment Confirmed!'}
                </h3>
                <button onClick={closeModal} className="text-black/40 hover:text-black">
                  <X className="h-5 w-5" />
                </button>
              </div>

              {enrollmentModal.step === 'auth' && (
                <div className="space-y-4">
                  <p className="text-black/60 mb-4">
                    Please login to enroll in <strong>{course.title}</strong>
                  </p>
                  <Button onClick={handleLogin} className="w-full bg-black hover:bg-black/80 text-white">
                    Login / Sign Up
                  </Button>
                  <p className="text-xs text-black/60 text-center">
                    New to Carthigan? We'll create an account for you automatically.
                  </p>
                </div>
              )}

              {enrollmentModal.step === 'payment' && (
                <div className="space-y-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Course: {course.title}</span>
                      <span className="font-bold text-black">{course.priceDisplay}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium text-black">Payment Options:</h4>
                    
                    <Button 
                      onClick={() => handlePayment('visa')}
                      variant="outline" 
                      className="w-full justify-start"
                    >
                      <CreditCard className="mr-3 h-5 w-5" />
                      Credit/Debit Card (Visa, Mastercard)
                    </Button>

                    <Button 
                      onClick={() => handlePayment('mtn')}
                      variant="outline" 
                      className="w-full justify-start"
                    >
                      <Smartphone className="mr-3 h-5 w-5" />
                      MTN Mobile Money
                    </Button>

                    <Button 
                      onClick={() => handlePayment('airtel')}
                      variant="outline" 
                      className="w-full justify-start"
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
                      className="w-full justify-start"
                    >
                      <Phone className="mr-3 h-5 w-5" />
                      Contact Us Directly
                    </Button>
                  </div>

                  <div className="text-xs text-black/60 bg-gray-50 p-3 rounded">
                    <p>💡 <strong>Instant Access:</strong> Get immediate access to your course materials after payment.</p>
                    <p>🔒 <strong>Secure Payment:</strong> All transactions are encrypted and secure.</p>
                  </div>
                </div>
              )}

              {enrollmentModal.step === 'confirmation' && (
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-black" />
                  </div>
                  <h4 className="text-lg font-semibold text-black">Welcome to the Course!</h4>
                  <p className="text-black/60">
                    You've successfully enrolled in <strong>{course.title}</strong>. 
                    Check your email for course access details.
                  </p>
                  <div className="space-y-2">
                    <Button className="w-full bg-black hover:bg-black/80 text-white">
                      Access Course Materials
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full"
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

export { CourseDetailPage } 