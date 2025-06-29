"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  BookOpen, 
  Clock, 
  Trophy, 
  Play, 
  CheckCircle,
  BarChart3,
  Calendar,
  Download,
  User,
  Settings,
  LogOut
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useAuth } from '@/contexts/AuthContext'

export function StudentDashboard() {
  const { user, signOut } = useAuth()
  const [enrollments, setEnrollments] = useState([])
  const [loading, setLoading] = useState(false)

  // Demo data for development
  const demoEnrollments = [
    {
      id: '1',
      course_id: 'se101',
      progress: 45,
      enrolled_at: new Date().toISOString(),
      courses: {
        title: 'Programming Fundamentals (Python)',
        duration: '8 weeks (24 hours)',
        instructor: 'Dr. Janet Nakato',
        image: '/images/courses/python.jpg',
        category: 'software'
      }
    },
    {
      id: '2',
      course_id: 'ee101',
      progress: 20,
      enrolled_at: new Date().toISOString(),
      courses: {
        title: 'Circuit Analysis Fundamentals',
        duration: '12 weeks (36 hours)',
        instructor: 'Dr. Sarah Mukasa',
        image: '/images/courses/circuit-analysis.jpg',
        category: 'electrical'
      }
    }
  ]

  const displayEnrollments = enrollments.length > 0 ? enrollments : demoEnrollments

  const totalCourses = displayEnrollments.length
  const completedCourses = displayEnrollments.filter(e => e.progress === 100).length
  const inProgressCourses = displayEnrollments.filter(e => e.progress > 0 && e.progress < 100).length
  const avgProgress = displayEnrollments.reduce((acc, e) => acc + e.progress, 0) / totalCourses || 0

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-black/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-black">My Dashboard</h1>
              <p className="text-black/60">Welcome back, {user?.email?.split('@')[0]}</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="border-black/20 hover:bg-gray-50 text-black">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Button variant="outline" size="sm" onClick={signOut} className="border-black/20 hover:bg-gray-50 text-black">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-black/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-black/60">Total Courses</p>
                  <p className="text-3xl font-bold text-black">{totalCourses}</p>
                </div>
                <BookOpen className="w-8 h-8 text-black/60" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-black/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-black/60">In Progress</p>
                  <p className="text-3xl font-bold text-black">{inProgressCourses}</p>
                </div>
                <Clock className="w-8 h-8 text-black/60" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-black/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-black/60">Completed</p>
                  <p className="text-3xl font-bold text-black">{completedCourses}</p>
                </div>
                <Trophy className="w-8 h-8 text-black/60" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-black/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-black/60">Avg Progress</p>
                  <p className="text-3xl font-bold text-black">{Math.round(avgProgress)}%</p>
                </div>
                <BarChart3 className="w-8 h-8 text-black/60" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="courses" className="space-y-6">
          <TabsList className="bg-gray-50 border border-black/10">
            <TabsTrigger value="courses" className="data-[state=active]:bg-black data-[state=active]:text-white">My Courses</TabsTrigger>
            <TabsTrigger value="progress" className="data-[state=active]:bg-black data-[state=active]:text-white">Progress</TabsTrigger>
            <TabsTrigger value="certificates" className="data-[state=active]:bg-black data-[state=active]:text-white">Certificates</TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {displayEnrollments.map((enrollment, index) => (
                <motion.div
                  key={enrollment.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow border-black/10">
                    <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-lg">
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="bg-white border-black/20 text-black">
                          {enrollment.progress}% Complete
                        </Badge>
                      </div>
                    </div>
                    
                    <CardHeader>
                      <CardTitle className="text-xl text-black">{enrollment.courses.title}</CardTitle>
                      <p className="text-black/60">by {enrollment.courses.instructor}</p>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-black">Progress</span>
                          <span className="text-black">{enrollment.progress}%</span>
                        </div>
                        <Progress value={enrollment.progress} className="h-2 bg-gray-200 [&>div]:bg-black" />
                      </div>

                      <div className="flex items-center gap-4 text-sm text-black/60">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {enrollment.courses.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          Enrolled {new Date(enrollment.enrolled_at).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </div>
                      </div>

                      <Button className="w-full bg-black hover:bg-black/80 text-white">
                        <Play className="w-4 h-4 mr-2" />
                        Continue Learning
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {displayEnrollments.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-black/20 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-black mb-2">No courses yet</h3>
                <p className="text-black/60 mb-6">Start your learning journey by enrolling in a course</p>
                <Button asChild className="bg-black hover:bg-black/80 text-white">
                  <a href="/education">Browse Courses</a>
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="progress">
            <Card className="border-black/10">
              <CardHeader>
                <CardTitle className="text-black">Learning Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {displayEnrollments.map((enrollment) => (
                    <div key={enrollment.id} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium text-black">{enrollment.courses.title}</h4>
                        <span className="text-sm text-black/60">{enrollment.progress}%</span>
                      </div>
                      <Progress value={enrollment.progress} className="h-3 bg-gray-200 [&>div]:bg-black" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="certificates">
            <Card className="border-black/10">
              <CardHeader>
                <CardTitle className="text-black">Certificates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Trophy className="w-16 h-16 text-black/20 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-black mb-2">No certificates yet</h3>
                  <p className="text-black/60">Complete courses to earn certificates</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
