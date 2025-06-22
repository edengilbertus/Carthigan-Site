"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Clock, Users, Star, Search, Filter, Monitor, Wrench, Palette, Globe, Briefcase } from "lucide-react"

const allCourses = [
  {
    id: "web-dev-cert",
    title: "Full-Stack Web Development Certificate",
    school: "Software & IT",
    instructor: "Dr. Sarah Mukasa",
    duration: "16 weeks",
    students: 1245,
    rating: 4.8,
    delivery: "HYBRID",
    price: 850000,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
    description: "Master modern web development with React, Node.js, and databases. Build real-world projects that showcase your skills.",
    skills: ["React", "Node.js", "MongoDB", "TypeScript", "AWS"],
    level: "Intermediate",
    prerequisites: ["Programming Fundamentals"]
  },
  {
    id: "embedded-iot-cert",
    title: "Embedded Systems & IoT Certificate",
    school: "Engineering & Hardware",
    instructor: "Eng. Michael Ssali",
    duration: "12 weeks",
    students: 890,
    rating: 4.9,
    delivery: "HYBRID",
    price: 720000,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
    description: "Build intelligent connected devices with Arduino, ESP32, and IoT protocols.",
    skills: ["Arduino", "C++", "IoT", "Sensors", "ESP32"],
    level: "Intermediate",
    prerequisites: ["Electronics Fundamentals"]
  },
  {
    id: "python-fundamentals",
    title: "Programming Fundamentals with Python",
    school: "Software & IT",
    instructor: "Grace Namukasa",
    duration: "8 weeks",
    students: 2150,
    rating: 4.7,
    delivery: "ONLINE",
    price: 320000,
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600&h=400&fit=crop",
    description: "Perfect starting point for programming beginners. Learn logic, syntax, and problem-solving.",
    skills: ["Python", "Algorithms", "Data Structures", "Problem Solving"],
    level: "Beginner",
    prerequisites: []
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design for Digital Products",
    school: "Digital Arts & Media",
    instructor: "James Kiwanuka",
    duration: "10 weeks",
    students: 650,
    rating: 4.7,
    delivery: "ONLINE",
    price: 480000,
    image: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=600&h=400&fit=crop",
    description: "Design beautiful, user-friendly interfaces and experiences with Figma and design thinking.",
    skills: ["Figma", "Design Thinking", "Prototyping", "User Research"],
    level: "Beginner",
    prerequisites: []
  },
  {
    id: "pcb-design",
    title: "PCB Design & Prototyping Certificate",
    school: "Engineering & Hardware",
    instructor: "Dr. Robert Mugisha",
    duration: "14 weeks",
    students: 420,
    rating: 4.8,
    delivery: "HYBRID",
    price: 680000,
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
    description: "Learn professional PCB design from schematic to layout using KiCad and industry best practices.",
    skills: ["KiCad", "Electronics", "PCB Layout", "Manufacturing"],
    level: "Advanced",
    prerequisites: ["Electronics Fundamentals", "Embedded Systems Basics"]
  },
  {
    id: "luganda-tech",
    title: "Luganda for Tech Professionals",
    school: "Languages",
    instructor: "Prof. Robert Kiwanuka",
    duration: "8 weeks",
    students: 320,
    rating: 4.6,
    delivery: "IN-PERSON",
    price: 280000,
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop",
    description: "Master conversational Luganda for better communication in the local tech ecosystem.",
    skills: ["Conversation", "Business Terms", "Culture", "Pronunciation"],
    level: "Beginner",
    prerequisites: []
  },
  {
    id: "digital-video",
    title: "Digital Video Production & Editing",
    school: "Digital Arts & Media",
    instructor: "Sarah Nalule",
    duration: "12 weeks",
    students: 380,
    rating: 4.5,
    delivery: "HYBRID",
    price: 520000,
    image: "https://images.unsplash.com/photo-1492619392390-2b0d4b68d37e?w=600&h=400&fit=crop",
    description: "Master the entire video production workflow from shooting to final edit with professional tools.",
    skills: ["Adobe Premiere", "DaVinci Resolve", "Cinematography", "Sound Design"],
    level: "Intermediate",
    prerequisites: []
  },
  {
    id: "project-management",
    title: "Technical Project Management with Agile",
    school: "Professional Development",
    instructor: "David Katende",
    duration: "6 weeks",
    students: 520,
    rating: 4.5,
    delivery: "ONLINE",
    price: 350000,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    description: "Lead technical teams effectively with Agile methodologies and modern PM tools.",
    skills: ["Agile", "Scrum", "Leadership", "Jira"],
    level: "Intermediate",
    prerequisites: []
  }
]

export function CourseBrowser() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSchool, setSelectedSchool] = useState("all")
  const [selectedDelivery, setSelectedDelivery] = useState("all")
  const [selectedLevel, setSelectedLevel] = useState("all")
  const [sortBy, setSortBy] = useState("popular")

  const schools = ["all", "Software & IT", "Engineering & Hardware", "Digital Arts & Media", "Languages", "Professional Development"]
  const deliveryTypes = ["all", "ONLINE", "HYBRID", "IN-PERSON"]
  const levels = ["all", "Beginner", "Intermediate", "Advanced"]

  const filteredCourses = allCourses
    .filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
      const matchesSchool = selectedSchool === "all" || course.school === selectedSchool
      const matchesDelivery = selectedDelivery === "all" || course.delivery === selectedDelivery
      const matchesLevel = selectedLevel === "all" || course.level === selectedLevel
      
      return matchesSearch && matchesSchool && matchesDelivery && matchesLevel
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low": return a.price - b.price
        case "price-high": return b.price - a.price
        case "rating": return b.rating - a.rating
        case "duration": return parseInt(a.duration) - parseInt(b.duration)
        default: return b.students - a.students // popular
      }
    })

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Course Catalog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive catalog of courses designed to advance your tech career in Africa.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
            {/* Search */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search courses, skills, instructors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* School Filter */}
            <Select value={selectedSchool} onValueChange={setSelectedSchool}>
              <SelectTrigger>
                <SelectValue placeholder="School" />
              </SelectTrigger>
              <SelectContent>
                {schools.map(school => (
                  <SelectItem key={school} value={school}>
                    {school === "all" ? "All Schools" : school}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Delivery Filter */}
            <Select value={selectedDelivery} onValueChange={setSelectedDelivery}>
              <SelectTrigger>
                <SelectValue placeholder="Delivery" />
              </SelectTrigger>
              <SelectContent>
                {deliveryTypes.map(type => (
                  <SelectItem key={type} value={type}>
                    {type === "all" ? "All Types" : type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Level Filter */}
            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger>
                <SelectValue placeholder="Level" />
              </SelectTrigger>
              <SelectContent>
                {levels.map(level => (
                  <SelectItem key={level} value={level}>
                    {level === "all" ? "All Levels" : level}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="duration">Duration</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </motion.div>

        {/* Results Header */}
        <div className="flex justify-between items-center mb-8">
          <p className="text-gray-600">
            Showing {filteredCourses.length} of {allCourses.length} courses
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Course Image */}
              <div className="aspect-[16/10] relative">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge 
                    className={`${
                      course.delivery === 'HYBRID' ? 'bg-blue-500' :
                      course.delivery === 'ONLINE' ? 'bg-green-500' : 'bg-purple-500'
                    } text-white`}
                  >
                    {course.delivery}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white text-gray-700">
                    {course.level}
                  </Badge>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <div className="mb-3">
                  <p className="text-sm text-green-600 font-medium mb-1">{course.school}</p>
                  <h3 className="text-lg font-bold text-gray-900 line-clamp-2">{course.title}</h3>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {course.skills.slice(0, 3).map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                  {course.skills.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{course.skills.length - 3}
                    </Badge>
                  )}
                </div>

                {/* Course Meta */}
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{course.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Prerequisites */}
                {course.prerequisites.length > 0 && (
                  <div className="mb-4">
                    <p className="text-xs text-gray-500 mb-1">Prerequisites:</p>
                    <div className="flex flex-wrap gap-1">
                      {course.prerequisites.map((prereq) => (
                        <Badge key={prereq} variant="outline" className="text-xs">
                          {prereq}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Instructor */}
                <p className="text-sm text-gray-600 mb-4">
                  Instructor: <span className="font-medium">{course.instructor}</span>
                </p>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xl font-bold text-gray-900">
                      UGX {course.price.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-500">Full program</div>
                  </div>
                  <Button 
                    className="bg-green-500 hover:bg-green-600 text-white"
                    asChild
                  >
                    <Link href={`/education/course/${course.id}`}>
                      View Details
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Filter className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No courses found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your filters or search terms</p>
            <Button 
              variant="outline"
              onClick={() => {
                setSearchTerm("")
                setSelectedSchool("all")
                setSelectedDelivery("all")
                setSelectedLevel("all")
              }}
            >
              Clear All Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
