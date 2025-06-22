"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const schools = [
  { name: "Software & IT", href: "/education/software" },
  { name: "Engineering & Hardware", href: "/education/engineering" },
  { name: "Digital Arts & Media", href: "/education/design" },
  { name: "Languages", href: "/education/languages" },
  { name: "Professional Development", href: "/education/business" },
]

const quickLinks = [
  { name: "Course Catalog", href: "/education/browse" },
  { name: "Learning Paths", href: "/education/paths" },
  { name: "Instructors", href: "/education/instructors" },
  { name: "Certificates", href: "/education/certificates" },
  { name: "Student Success", href: "/education/success" },
  { name: "Help Center", href: "/education/help" },
]

const studentServices = [
  { name: "My Dashboard", href: "/education/dashboard" },
  { name: "My Courses", href: "/education/my-courses" },
  { name: "Class Schedule", href: "/education/schedule" },
  { name: "Assignments", href: "/education/assignments" },
  { name: "Grades", href: "/education/grades" },
  { name: "Technical Support", href: "/education/support" },
]

export function EducationFooter() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-6">
              Get the latest course updates, tech industry insights, and career tips delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white"
              />
              <Button className="bg-green-500 hover:bg-green-600 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="text-2xl font-display font-bold">CARTHIGAN</div>
              <div className="bg-green-500 text-white px-2 py-1 rounded text-sm font-medium">
                EDUCATION
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Empowering the next generation of African innovators through world-class technical education and practical skills training.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-green-500" />
                <span className="text-gray-400">Kampala Innovation Hub, Plot 123 Nakawa</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-green-500" />
                <span className="text-gray-400">+256 (0) 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-green-500" />
                <span className="text-gray-400">education@carthigan.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Schools */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Schools</h4>
            <ul className="space-y-3">
              {schools.map((school) => (
                <li key={school.name}>
                  <Link 
                    href={school.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {school.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Student Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Student Services</h4>
            <ul className="space-y-3">
              {studentServices.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Carthigan Education. All rights reserved.
            </div>
            <div className="flex flex-wrap space-x-6 text-sm">
              <Link href="/education/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/education/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/education/refund" className="text-gray-400 hover:text-white transition-colors">
                Refund Policy
              </Link>
              <Link href="/education/accessibility" className="text-gray-400 hover:text-white transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
