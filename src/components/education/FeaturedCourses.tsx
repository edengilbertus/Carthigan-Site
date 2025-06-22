"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Star, Monitor, Wrench, Palette, Globe, Briefcase } from "lucide-react"

const featuredCourses = [
  {
    id: "web-dev",
    title: "Full-Stack Web Development Certificate",
    school: "Software & IT",
    instructor: "Dr. Sarah Mukasa",
    duration: "16 weeks",
    students: 1245,
    rating: 4.8,
    delivery: "HYBRID",
    price: 850000,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
    description: "Master modern web development with React, Node.js, and databases. Build real-world projects.",
    skills: ["React", "Node.js", "MongoDB", "TypeScript"],
    icon: Monitor
  },
  {
    id: "embedded-iot",
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
    skills: ["Arduino", "C++", "IoT", "Sensors"],
    icon: Wrench
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design for Digital Products",
    school: "Digital Arts & Media",
    instructor: "Grace Namukasa",
    duration: "10 weeks",
    students: 650,
    rating: 4.7,
    delivery: "ONLINE",
    price: 480000,
    image: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=600&h=400&fit=crop",
    description: "Design beautiful, user-friendly interfaces and experiences with Figma and design thinking.",
    skills: ["Figma", "Design Thinking", "Prototyping", "User Research"],
    icon: Palette
  },
  {
    id: "luganda-language",
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
    icon: Globe
  },
  {
    id: "project-management",
    title: "Technical Project Management",
    school: "Professional Development",
    instructor: "David Katende",
    duration: "6 weeks",
    students: 420,
    rating: 4.5,
    delivery: "ONLINE",
    price: 350000,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    description: "Lead technical teams effectively with Agile methodologies and modern PM tools.",
    skills: ["Agile", "Scrum", "Leadership", "Communication"],
    icon: Briefcase
  }
]

const categories = [
  { name: "All", count: featuredCourses.length, active: true },
  { name: "HYBRID", count: featuredCourses.filter(c => c.delivery === "HYBRID").length },
  { name: "ONLINE", count: featuredCourses.filter(c => c.delivery === "ONLINE").length },
  { name: "IN-PERSON", count: featuredCourses.filter(c => c.delivery === "IN-PERSON").length },
]

export function FeaturedCourses() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Featured Certificate Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive courses designed by industry experts to give you job-ready skills and verified credentials.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap gap-3 bg-white rounded-2xl p-2 shadow-lg">
            {categories.map((category) => (
              <button
                key={category.name}
                className={`px-6 py-3 rounded-xl font-medium text-sm transition-all ${
                  category.active
                    ? "bg-green-500 text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </motion.div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
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
                  <div className="bg-white rounded-lg p-2 shadow-md">
                    <course.icon className="h-5 w-5 text-gray-700" />
                  </div>
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
                      +{course.skills.length - 3} more
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
                      <Users className="h-4 w-4" />
                      <span>{course.students}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{course.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Instructor */}
                <p className="text-sm text-gray-600 mb-4">
                  Instructor: <span className="font-medium">{course.instructor}</span>
                </p>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      UGX {course.price.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-500">Full program</div>
                  </div>
                  <Button 
                    className="bg-green-500 hover:bg-green-600 text-white"
                    asChild
                  >
                    <Link href={`/education/course/${course.id}`}>
                      Enroll Now
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button 
            size="lg" 
            variant="outline" 
            className="border-green-500 text-green-500 hover:bg-green-50"
            asChild
          >
            <Link href="/education/browse">
              Browse All Courses
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
