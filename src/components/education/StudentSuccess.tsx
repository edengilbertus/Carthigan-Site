"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Briefcase } from "lucide-react"

const successStories = [
  {
    id: 1,
    name: "Aisha Nakamya",
    role: "Full-Stack Developer",
    company: "SafeBoda",
    location: "Kampala, Uganda",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
    certificate: "Full-Stack Web Development",
    story: "Thanks to Carthigan Education's hands-on approach, I landed my dream job at SafeBoda. The practical projects and industry mentorship made all the difference.",
    rating: 5,
    outcome: "250% salary increase"
  },
  {
    id: 2,
    name: "David Ssemakula",
    role: "IoT Engineer",
    company: "NWSC",
    location: "Kampala, Uganda",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    certificate: "Embedded Systems & IoT",
    story: "The hybrid learning model was perfect for me. I could work while studying, and the weekend labs gave me real hardware experience I couldn't get elsewhere.",
    rating: 5,
    outcome: "Career transition"
  },
  {
    id: 3,
    name: "Grace Akello",
    role: "Product Designer",
    company: "Freelance",
    location: "Gulu, Uganda",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    certificate: "UI/UX Design Certificate",
    story: "Even from Gulu, I could access world-class design education. Now I'm working with international clients and earning more than I ever imagined.",
    rating: 5,
    outcome: "Started own agency"
  }
]

export function StudentSuccess() {
  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real graduates, real careers, real impact. See how Carthigan Education has transformed lives across Uganda.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6"
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(story.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Story */}
              <blockquote className="text-gray-600 mb-6 italic">
                "{story.story}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 relative rounded-full overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{story.name}</h4>
                  <div className="flex items-center space-x-1 text-sm text-gray-600">
                    <Briefcase className="h-3 w-3" />
                    <span>{story.role}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-gray-600">
                    <MapPin className="h-3 w-3" />
                    <span>{story.location}</span>
                  </div>
                </div>
              </div>

              {/* Certificate and Outcome */}
              <div className="space-y-2">
                <Badge className="bg-green-100 text-green-700 text-xs">
                  {story.certificate}
                </Badge>
                <div className="text-sm font-medium text-green-600">
                  {story.outcome}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-2">2,500+</div>
            <div className="text-gray-600">Graduates</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-2">85%</div>
            <div className="text-gray-600">Job Placement</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-2">90%</div>
            <div className="text-gray-600">Course Completion</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-2">4.8/5</div>
            <div className="text-gray-600">Student Rating</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
