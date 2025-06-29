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
  Search,
  User,
  LogIn,
  ShoppingCart,
  CreditCard,
  X
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { COURSES, CATEGORIES } from '@/lib/data/courses'
import { useAuth } from '@/contexts/AuthContext'

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

export function EducationPage() {
  const { user, signIn, signUp, signOut, enrollInCourse } = useAuth()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login')
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState<any>(null)
  const [authEmail, setAuthEmail] = useState('')
  const [authPassword, setAuthPassword] = useState('')
  const [authName, setAuthName] = useState('')
  const [enrolling, setEnrolling] = useState(false)

  // Filter courses based on category and search
  const filteredCourses = COURSES.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const formatPrice = (price: number) => {
    return `UGX ${price.toLocaleString()}`
  }

  const handleEnrollClick = (course: any) => {
    if (!user) {
      setAuthMode('signup')
      setShowAuthModal(true)
      return
    }
    setSelectedCourse(course)
    setShowPaymentModal(true)
  }

  const handleAuth = async () => {
    try {
      if (authMode === 'login') {
        const { error } = await signIn(authEmail, authPassword)
        if (error) {
          alert('Login failed: ' + error.message)
          return
        }
      } else {
        const { error } = await signUp(authEmail, authPassword, authName)
        if (error) {
          alert('Signup failed: ' + error.message)
          return
        }
      }
      setShowAuthModal(false)
      setAuthEmail('')
      setAuthPassword('')
      setAuthName('')
    } catch (error) {
      alert('Authentication error')
    }
  }

  const handlePayment = async () => {
    if (!selectedCourse || !user) return
    
    setEnrolling(true)
    try {
      await enrollInCourse(selectedCourse.id)
      setShowPaymentModal(false)
      alert(`Successfully enrolled in ${selectedCourse?.title}! You can now access the course materials.`)
    } catch (error) {
      alert('Enrollment failed. Please try again.')
    } finally {
      setEnrolling(false)
    }
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
                {user && (
                  <a href="/dashboard" className="text-black/60 hover:text-black transition-colors font-body">My Courses</a>
                )}
                <a href="/" className="text-black/60 hover:text-black transition-colors font-body">Home</a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              {user ? (
                <div className="flex items-center gap-3">
                  <span className="text-sm text-black/60">Welcome, {user.email?.split('@')[0]}</span>
                  <Button 
                    variant="outline" 
                    onClick={signOut}
                    className="rounded-full"
                  >
                    Logout
                  </Button>
                </div>
              ) : (
                <Button 
                  onClick={() => { setAuthMode('login'); setShowAuthModal(true) }}
                  className="bg-black hover:bg-black/90 text-white rounded-full px-6"
                >
                  <LogIn className="w-4 h-4 mr-2" />
                  Login
                </Button>
              )}
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
              `${COURSES.length}+ COURSES`,
              `${CATEGORIES.length - 1} CATEGORIES`, 
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
              {CATEGORIES.slice(0, 6).map((category) => (
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
                  <div className="relative h-48 bg-gradient-to-br from-accent/10 to-accent/5 rounded-t-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge 
                        variant="outline" 
                        className={`text-xs bg-white ${
                          course.level === 'Beginner' ? 'border-green-500/20 text-green-600' :
                          course.level === 'Intermediate' ? 'border-yellow-500/20 text-yellow-600' :
                          'border-red-500/20 text-red-600'
                        }`}
                      >
                        {course.level}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="text-white font-bold text-lg">
                        {course.priceDisplay}
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-4">
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
                      {course.tags.slice(0, 3).map((tag, i) => (
                        <Badge key={i} variant="outline" className="text-xs border-black/20">
                          {tag}
                        </Badge>
                      ))}
                      {course.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs border-black/20">
                          +{course.tags.length - 3} more
                        </Badge>
                      )}
                    </div>

                    <Button 
                      onClick={() => handleEnrollClick(course)}
                      className="w-full bg-black hover:bg-black/90 text-white rounded-lg"
                    >
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

      {/* Auth Modal */}
      <Dialog open={showAuthModal} onOpenChange={setShowAuthModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              {authMode === 'login' ? 'Login to Carthigan Education' : 'Create Your Account'}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="your@email.com"
                value={authEmail}
                onChange={(e) => setAuthEmail(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password" 
                placeholder="••••••••"
                value={authPassword}
                onChange={(e) => setAuthPassword(e.target.value)}
              />
            </div>
            {authMode === 'signup' && (
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input 
                  id="name" 
                  placeholder="Your Name"
                  value={authName}
                  onChange={(e) => setAuthName(e.target.value)}
                />
              </div>
            )}
            <Button 
              onClick={handleAuth}
              className="w-full bg-black hover:bg-black/90 text-white"
            >
              {authMode === 'login' ? 'Login' : 'Create Account'}
            </Button>
            <p className="text-center text-sm text-black/60">
              {authMode === 'login' ? "Don't have an account? " : "Already have an account? "}
              <button 
                onClick={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')}
                className="text-accent hover:underline"
              >
                {authMode === 'login' ? 'Sign up' : 'Login'}
              </button>
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Payment Modal */}
      <Dialog open={showPaymentModal} onOpenChange={setShowPaymentModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Complete Your Enrollment</DialogTitle>
          </DialogHeader>
          {selectedCourse && (
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold">{selectedCourse.title}</h3>
                <p className="text-sm text-black/60">{selectedCourse.duration}</p>
                <p className="text-lg font-bold text-accent">{selectedCourse.priceDisplay}</p>
              </div>
              
              <div className="space-y-3">
                <div>
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" />
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="123" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="name">Cardholder Name</Label>
                  <Input id="name" placeholder="Your Name" />
                </div>
              </div>
              
              <Button 
                onClick={handlePayment}
                className="w-full bg-black hover:bg-black/90 text-white"
              >
                <CreditCard className="mr-2 h-4 w-4" />
                Pay {selectedCourse.priceDisplay}
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>

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