"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function SupplyFooter() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="text-2xl font-display font-bold">CARTHIGAN</div>
              <div className="bg-orange-500 text-white px-2 py-1 rounded text-sm font-medium">
                SUPPLY
              </div>
            </div>
            <p className="text-gray-300 mb-6 text-sm">
              Your premier destination for electronics, development boards, tools, and educational materials. 
              Powering African innovation since 2024.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="h-4 w-4 text-orange-500" />
                <span>+256 (0) 123 456 789</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="h-4 w-4 text-orange-500" />
                <span>supply@carthigan.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="h-4 w-4 text-orange-500" />
                <span>Kampala, Uganda</span>
              </div>
            </div>
          </div>

          {/* Shop Categories */}
          <div>
            <h3 className="font-display font-semibold mb-4 text-orange-500">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/supply/category/electronics" className="text-gray-300 hover:text-white transition-colors">
                  Electronics & Components
                </Link>
              </li>
              <li>
                <Link href="/supply/category/dev-boards" className="text-gray-300 hover:text-white transition-colors">
                  Development Boards
                </Link>
              </li>
              <li>
                <Link href="/supply/category/tools" className="text-gray-300 hover:text-white transition-colors">
                  Tools & Equipment
                </Link>
              </li>
              <li>
                <Link href="/supply/category/education" className="text-gray-300 hover:text-white transition-colors">
                  Educational Kits
                </Link>
              </li>
              <li>
                <Link href="/supply/category/audio-video" className="text-gray-300 hover:text-white transition-colors">
                  Audio & Video
                </Link>
              </li>
              <li>
                <Link href="/supply/category/3d-printing" className="text-gray-300 hover:text-white transition-colors">
                  3D Printing
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-display font-semibold mb-4 text-orange-500">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/supply/help" className="text-gray-300 hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/supply/track-order" className="text-gray-300 hover:text-white transition-colors">
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link href="/supply/returns" className="text-gray-300 hover:text-white transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/supply/shipping" className="text-gray-300 hover:text-white transition-colors">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link href="/supply/warranty" className="text-gray-300 hover:text-white transition-colors">
                  Warranty Policy
                </Link>
              </li>
              <li>
                <Link href="/supply/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Resources */}
          <div>
            <h3 className="font-display font-semibold mb-4 text-orange-500">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Carthigan
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Carthigan Pulse
                </Link>
              </li>
              <li>
                <Link href="/education" className="text-gray-300 hover:text-white transition-colors">
                  Education Platform
                </Link>
              </li>
              <li>
                <Link href="/technologies" className="text-gray-300 hover:text-white transition-colors">
                  Technologies
                </Link>
              </li>
              <li>
                <Link href="/supply/business" className="text-gray-300 hover:text-white transition-colors">
                  Business Solutions
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="font-display font-semibold mb-2 text-orange-500">Stay Updated</h3>
              <p className="text-gray-300 text-sm">
                Get the latest product updates, tech tutorials, and exclusive offers
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
              />
              <button className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-400 text-sm">
            © 2024 Carthigan Holdings. All rights reserved.
          </div>
          
          {/* Social Media Links */}
          <div className="flex items-center gap-4">
            <Link 
              href="https://facebook.com/carthigan" 
              className="w-8 h-8 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
            >
              <Facebook className="h-4 w-4" />
            </Link>
            <Link 
              href="https://twitter.com/carthigan" 
              className="w-8 h-8 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
            >
              <Twitter className="h-4 w-4" />
            </Link>
            <Link 
              href="https://instagram.com/carthigan" 
              className="w-8 h-8 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
            >
              <Instagram className="h-4 w-4" />
            </Link>
            <Link 
              href="https://linkedin.com/company/carthigan" 
              className="w-8 h-8 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
          </div>
          
          {/* Legal Links */}
          <div className="flex items-center gap-4 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 