"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Star, MapPin, Calendar, Award, CheckCircle } from "lucide-react"

interface CourseDetailProps {
  courseId: string
}

// Sample course data - in real app this would come from API/database
const getCourseData = (id: string) => {
  const courses = {
    "web-dev-cert": {
      title: "Full-Stack Web Development Certificate",
      school: "Software & IT",
      instructor: "Dr. Sarah Mukasa",
      instructorBio: "Senior Software Engineer with 10+ years experience at Google and Microsoft. PhD in Computer Science from Makerere University.",
      duration: "16 weeks",
      students: 1245,
      rating: 4.8,
      delivery: "HYBRID",
      price: 850000,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
      description: "Master modern web development with React, Node.js, and databases. Build real-world projects that showcase your skills to employers.",
      skills: ["React", "Node.js", "MongoDB", "TypeScript", "AWS"],
      level: "Intermediate",
      prerequisites: ["Programming Fundamentals with Python"],
      schedule: {
        online: "Mondays & Wednesdays, 7:00 PM - 9:00 PM",
        inPerson: "Saturdays, 9:00 AM - 5:00 PM",
        location: "Carthigan Campus, Nakawa"
      },
      syllabus: [
        {
          week: "Weeks 1-2",
          title: "HTML, CSS & JavaScript Fundamentals",
          topics: ["Semantic HTML", "CSS Grid & Flexbox", "ES6+ JavaScript", "DOM Manipulation"]
        },
        {
          week: "Weeks 3-6",
          title: "React Frontend Development",
          topics: ["Components & Props", "State Management", "Hooks", "React Router", "API Integration"]
        },
        {
          week: "Weeks 7-10",
          title: "Backend Development with Node.js",
          topics: ["Express.js", "REST APIs", "Authentication", "Database Design", "MongoDB"]
        },
        {
          week: "Weeks 11-14",
          title: "Full-Stack Integration",
          topics: ["MERN Stack", "Deployment", "Testing", "Performance Optimization"]
        },
        {
          week: "Weeks 15-16",
          title: "Capstone Project",
          topics: ["Project Planning", "Development", "Code Review", "Presentation"]
        }
      ]
    }
  }
  
  return courses[id as keyof typeof courses] || null
}

export function CourseDetail({ courseId }: CourseDetailProps) {
  const course = getCourseData(courseId)
  
  if (!course) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <p className="text-gray-600">The course you're looking for doesn't exist.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Course Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-[16/9] relative rounded-2xl overflow-hidden mb-6">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-6 left-6">
                  <Badge 
                    className={`${
                      course.delivery === 'HYBRID' ? 'bg-blue-500' :
                      course.delivery === 'ONLINE' ? 'bg-green-500' : 'bg-purple-500'
                    } text-white text-lg px-4 py-2`}
                  >
                    {course.delivery}
                  </Badge>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <Badge variant="outline">{course.school}</Badge>
                <Badge variant="secondary">{course.level}</Badge>
              </div>

              <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                {course.title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-6">{course.description}</p>

              {/* Course Stats */}
              <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>{course.students} students</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>{course.rating} rating</span>
                </div>
              </div>
            </motion.div>

            {/* Class Schedule */}
            {course.delivery === "HYBRID" && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-blue-50 rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Class Schedule</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">Online Sessions</h4>
                    <p className="text-gray-600">{course.schedule.online}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">In-Person Labs</h4>
                    <p className="text-gray-600">{course.schedule.inPerson}</p>
                    <div className="flex items-center space-x-2 text-sm text-gray-600 mt-1">
                      <MapPin className="h-4 w-4" />
                      <span>{course.schedule.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Skills You'll Learn */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Skills You'll Learn</h3>
              <div className="flex flex-wrap gap-3">
                {course.skills.map((skill) => (
                  <Badge key={skill} className="bg-green-100 text-green-700 px-4 py-2">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>

            {/* Syllabus */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Course Syllabus</h3>
              <div className="space-y-4">
                {course.syllabus.map((module, index) => (
                  <div key={index} className="bg-white rounded-xl border border-gray-200 p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-green-500 text-white rounded-lg flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-900">{module.title}</h4>
                          <Badge variant="outline">{module.week}</Badge>
                        </div>
                        <ul className="space-y-1">
                          {module.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                              <CheckCircle className="h-3 w-3 text-green-500" />
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Prerequisites */}
            {course.prerequisites.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="bg-orange-50 rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">Prerequisites</h3>
                <ul className="space-y-2">
                  {course.prerequisites.map((prereq, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-orange-500" />
                      <span className="text-gray-700">{prereq}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Enrollment Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-6"
            >
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  UGX {course.price.toLocaleString()}
                </div>
                <div className="text-sm text-gray-500">Full Certificate Program</div>
              </div>

              <div className="space-y-4 mb-6">
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white text-lg py-3">
                  Enroll Now
                </Button>
                <Button variant="outline" className="w-full">
                  Download Syllabus
                </Button>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 mb-4">
                  <Award className="h-4 w-4 text-green-500" />
                  <span>Certificate upon completion</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                  <Calendar className="h-4 w-4 text-green-500" />
                  <span>Next cohort starts Jan 15, 2025</span>
                </div>
              </div>
            </motion.div>

            {/* Instructor */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">Your Instructor</h3>
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 font-bold text-xl">
                    {course.instructor.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h4 className="font-semibold text-gray-900">{course.instructor}</h4>
                <p className="text-sm text-gray-600">{course.school}</p>
              </div>
              <p className="text-sm text-gray-600 text-center">{course.instructorBio}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
