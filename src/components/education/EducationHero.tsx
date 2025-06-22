"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowRight, 
  Star, 
  Users, 
  BookOpen, 
  Code, 
  Zap, 
  Briefcase, 
  Palette, 
  Globe,
  TrendingUp,
  Calendar,
  Award,
  Bell,
  Settings,
  Activity
} from "lucide-react"

const categories = [
  { id: "all", name: "All", icon: BookOpen, active: true },
  { id: "software", name: "IT & Software", icon: Code },
  { id: "electronics", name: "Electronics", icon: Zap },
  { id: "business", name: "Business", icon: Briefcase },
  { id: "design", name: "Design", icon: Palette },
  { id: "languages", name: "Languages", icon: Globe }
]

const featuredCourses = [
  {
    id: 1,
    title: "Flutter Masterclass (Dart, APIs, Firebase & More)",
    category: "IT & Software",
    students: 9530,
    rating: 4.8,
    instructor: {
      name: "Dr. Sarah Mukasa",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face"
    },
    color: "from-pink-400 to-pink-600",
    bgColor: "bg-gradient-to-br from-pink-50 to-pink-100",
    tag: "Most Popular"
  },
  {
    id: 2,
    title: "CCNA 2024: Complete Networking Bootcamp",
    category: "IT & Software", 
    students: 7842,
    rating: 4.9,
    instructor: {
      name: "James Okello",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    color: "from-blue-400 to-blue-600",
    bgColor: "bg-gradient-to-br from-blue-50 to-blue-100"
  },
  {
    id: 3,
    title: "PCB Design & Manufacturing Masterclass",
    category: "Electronics",
    students: 4276,
    rating: 4.7,
    instructor: {
      name: "Eng. Grace Nambi",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    color: "from-purple-400 to-purple-600",
    bgColor: "bg-gradient-to-br from-purple-50 to-purple-100"
  },
  {
    id: 4,
    title: "Digital Marketing for African Startups",
    category: "Business",
    students: 6154,
    rating: 4.6,
    instructor: {
      name: "David Ssemwanga",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    color: "from-orange-400 to-orange-600",
    bgColor: "bg-gradient-to-br from-orange-50 to-orange-100"
  },
  {
    id: 5,
    title: "UI/UX Design for Mobile Apps",
    category: "Design",
    students: 3891,
    rating: 4.8,
    instructor: {
      name: "Aisha Nakato",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    color: "from-green-400 to-green-600",
    bgColor: "bg-gradient-to-br from-green-50 to-green-100"
  },
  {
    id: 6,
    title: "IoT Systems with Arduino & Raspberry Pi",
    category: "Electronics",
    students: 2657,
    rating: 4.9,
    instructor: {
      name: "Dr. Moses Kiggundu",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
    },
    color: "from-emerald-400 to-emerald-600",
    bgColor: "bg-gradient-to-br from-emerald-50 to-emerald-100"
  }
]

const myCourses = [
  {
    id: 1,
    title: "React Native Development",
    progress: 68,
    color: "from-blue-400 to-blue-600",
    rating: 4.7
  },
  {
    id: 2,
    title: "Business Analytics",
    progress: 92,
    color: "from-orange-400 to-orange-600",
    rating: 4.9
  }
]

const monthlyActivity = [
  { month: "Jan", hours: 24 },
  { month: "Feb", hours: 28 },
  { month: "Mar", hours: 32 },
  { month: "Apr", hours: 29 },
  { month: "May", hours: 35 },
  { month: "Jun", hours: 31 },
  { month: "Jul", hours: 38 },
  { month: "Aug", hours: 42 },
  { month: "Sep", hours: 39 },
  { month: "Oct", hours: 45 },
  { month: "Nov", hours: 41 },
  { month: "Dec", hours: 47 }
]

export function EducationHero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50/30 to-blue-50/30">
      <div className="flex">
        {/* Left Sidebar */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-20 bg-white border-r border-gray-200 flex flex-col items-center py-8 space-y-8"
        >
          <div className="p-3 bg-black rounded-xl">
            <ArrowRight className="h-6 w-6 text-white rotate-180" />
          </div>
          <div className="space-y-6">
            <div className="p-3 hover:bg-gray-100 rounded-xl cursor-pointer transition-colors">
              <BookOpen className="h-6 w-6 text-gray-600" />
            </div>
            <div className="p-3 hover:bg-gray-100 rounded-xl cursor-pointer transition-colors">
              <Calendar className="h-6 w-6 text-gray-600" />
            </div>
            <div className="p-3 hover:bg-gray-100 rounded-xl cursor-pointer transition-colors relative">
              <Bell className="h-6 w-6 text-gray-600" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
            </div>
            <div className="p-3 hover:bg-gray-100 rounded-xl cursor-pointer transition-colors">
              <Settings className="h-6 w-6 text-gray-600" />
            </div>
          </div>
          <div className="mt-auto">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
              <span className="text-white font-semibold text-sm">S</span>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="flex-1 max-w-7xl mx-auto px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 leading-tight mb-4">
                  Invest in your
                  <br />
                  <span className="text-green-500">education</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Master new skills with our world-class courses designed for African professionals
                </p>
              </motion.div>

              {/* Category Navigation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex flex-wrap gap-4 mb-8"
              >
                {categories.map((category) => {
                  const Icon = category.icon
                  return (
                    <button
                      key={category.id}
                      className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-medium transition-all ${
                        category.active
                          ? "bg-black text-white shadow-lg"
                          : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      {category.name}
                    </button>
                  )
                })}
              </motion.div>

              {/* Most Modular Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Most modular</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {featuredCourses.slice(0, 4).map((course, index) => (
                    <motion.div
                      key={course.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      className={`${course.bgColor} rounded-3xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer relative overflow-hidden group`}
                    >
                      {course.tag && (
                        <Badge className="absolute top-4 right-4 bg-white text-gray-900 border-0">
                          {course.tag}
                        </Badge>
                      )}
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 rounded-2xl bg-gradient-to-br ${course.color} text-white`}>
                          <Code className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <span className="text-sm font-medium text-gray-600 mb-1 block">
                            {course.category}
                          </span>
                          <h3 className="text-lg font-bold text-gray-900 leading-tight mb-2">
                            {course.title}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="font-medium">{course.rating}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              <span>{course.students.toLocaleString()} students</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Image
                          src={course.instructor.avatar}
                          alt={course.instructor.name}
                          width={32}
                          height={32}
                          className="rounded-full"
                        />
                        <span className="text-sm font-medium text-gray-700">
                          {course.instructor.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Featured Course */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured course</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {featuredCourses.slice(4, 6).map((course, index) => (
                    <motion.div
                      key={course.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      className={`${course.bgColor} rounded-3xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer`}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 rounded-2xl bg-gradient-to-br ${course.color} text-white`}>
                          <Zap className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <span className="text-sm font-medium text-gray-600 mb-1 block">
                            {course.category}
                          </span>
                          <h3 className="text-lg font-bold text-gray-900 leading-tight mb-2">
                            {course.title}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="font-medium">{course.rating}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              <span>{course.students.toLocaleString()} students</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Image
                          src={course.instructor.avatar}
                          alt={course.instructor.name}
                          width={32}
                          height={32}
                          className="rounded-full"
                        />
                        <span className="text-sm font-medium text-gray-700">
                          {course.instructor.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              {/* User Profile */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">S</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Samuel Mukasa</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="h-4 w-4" />
                      <span>274 Friends</span>
                    </div>
                  </div>
                </div>

                {/* Friends avatars */}
                <div className="flex items-center gap-2 mb-6">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500"></div>
                  ))}
                  <span className="text-sm text-gray-600 ml-2">+270</span>
                </div>

                {/* Activity */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-900">Activity</h4>
                    <select className="text-sm text-gray-600 bg-transparent">
                      <option>Year</option>
                    </select>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-gray-900">3.5h</span>
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-sm text-gray-600">Great result!</span>
                  </div>

                  {/* Activity Chart */}
                  <div className="flex items-end gap-1 h-20 mb-4">
                    {monthlyActivity.map((data, index) => (
                      <div key={data.month} className="flex-1 flex flex-col items-center">
                        <div 
                          className={`w-full rounded-t-sm ${
                            index === 11 ? 'bg-green-500' : 
                            index >= 9 ? 'bg-green-300' : 
                            index >= 6 ? 'bg-blue-300' : 'bg-gray-200'
                          }`}
                          style={{ height: `${(data.hours / 50) * 100}%` }}
                        ></div>
                        <span className="text-xs text-gray-500 mt-1">{data.month}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* My Courses */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">My courses</h4>
                  <div className="space-y-3">
                    {myCourses.map((course) => (
                      <div key={course.id} className={`rounded-2xl p-4 bg-gradient-to-br ${course.color}`}>
                        <div className="flex items-center justify-between text-white">
                          <div>
                            <h5 className="font-semibold text-sm mb-1">{course.title}</h5>
                            <div className="flex items-center gap-2">
                              <Star className="h-3 w-3 fill-white" />
                              <span className="text-xs">{course.rating}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xs opacity-80 mb-1">{course.progress}%</div>
                            <div className="w-12 h-1 bg-white/30 rounded-full">
                              <div 
                                className="h-full bg-white rounded-full" 
                                style={{ width: `${course.progress}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
} 