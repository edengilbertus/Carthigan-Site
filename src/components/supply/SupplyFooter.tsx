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
                <a href="tel:+256726408312" className="hover:text-white transition-colors">
                  +256 726 408312
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="h-4 w-4 text-orange-500" />
                <a href="mailto:carthiganelectronics@gmail.com" className="hover:text-white transition-colors">
                  carthiganelectronics@gmail.com
                </a>
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
              href="https://wa.me/256726408312" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </Link>
            <Link 
              href="https://www.facebook.com/share/19GkcWjy47/?mibextid=qi2Omg" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
            >
              <Facebook className="h-4 w-4" />
            </Link>
            <Link 
              href="https://www.instagram.com/carthiganelectronics/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
            >
              <Instagram className="h-4 w-4" />
            </Link>
            <Link 
              href="https://www.youtube.com/@carthigan" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </Link>
            <Link 
              href="https://www.tiktok.com/@carthiganelectronics" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </Link>
            <Link 
              href="https://github.com/carthiganelectronics" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
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