import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail, MessageCircle, MapPin, Clock, Send, Users, Headphones } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch | Carthigan Supply',
  description: 'Contact Carthigan Supply for technical support, product inquiries, and business partnerships.',
}

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <MessageCircle className="h-12 w-12" />,
      title: "WhatsApp",
      subtitle: "Instant Support",
      contact: "+256 726 408312",
      description: "Quick responses for urgent technical questions and immediate support.",
      action: "Start Chat",
      href: "https://wa.me/256726408312",
      hours: "Mon-Sat: 8AM-8PM",
      primary: true
    },
    {
      icon: <Phone className="h-12 w-12" />,
      title: "Phone Call", 
      subtitle: "Direct Communication",
      contact: "+256 726 408312",
      description: "Speak directly with our technical team for complex project discussions.",
      action: "Call Now",
      href: "tel:+256726408312",
      hours: "Mon-Fri: 9AM-6PM",
      primary: false
    },
    {
      icon: <Mail className="h-12 w-12" />,
      title: "Email",
      subtitle: "Detailed Inquiries", 
      contact: "support@carthigan.com",
      description: "Send detailed technical specifications, bulk order requests, or partnership inquiries.",
      action: "Send Email",
      href: "mailto:support@carthigan.com",
      hours: "Response within 24hrs",
      primary: false
    }
  ]

  const officeInfo = {
    address: "Kampala, Uganda",
    email: "carthiganelectronics@gmail.com",
    phone: "+256 726 408312",
    hours: {
      weekdays: "Monday - Friday: 9:00 AM - 6:00 PM",
      saturday: "Saturday: 10:00 AM - 4:00 PM",
      sunday: "Sunday: Closed"
    }
  }

  const services = [
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Technical Support",
      description: "Circuit design help, programming assistance, component selection guidance."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Business Partnerships",
      description: "Bulk orders, educational institution partnerships, distributor inquiries."
    },
    {
      icon: <Send className="h-8 w-8" />,
      title: "Project Consultation",
      description: "Custom electronics solutions, prototype development, technical consulting."
    }
  ]

  return (
    <main className="bg-white text-black min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block border-2 border-black px-6 py-2 mb-6">
              <span className="font-mono text-sm font-medium tracking-wider">CONTACT</span>
            </div>
            <h1 className="text-5xl font-bold mb-6 tracking-tight">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Ready to start your electronics project? Need technical support? Our team of engineers 
              is here to help you succeed. Choose your preferred way to connect with us.
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {contactMethods.map((method, index) => (
              <div 
                key={index} 
                className={`border-2 transition-all duration-300 hover:shadow-2xl group ${
                  method.primary 
                    ? 'border-black bg-black text-white hover:bg-white hover:text-black' 
                    : 'border-gray-300 bg-white hover:border-black'
                }`}
              >
                <div className="p-8">
                  <div className={`mb-6 ${method.primary ? 'text-white group-hover:text-black' : 'text-black'}`}>
                    {method.icon}
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-2">{method.title}</h3>
                    <p className={`text-sm font-mono tracking-wider ${
                      method.primary ? 'text-gray-300 group-hover:text-gray-600' : 'text-gray-600'
                    }`}>
                      {method.subtitle}
                    </p>
                  </div>

                  <div className="mb-6">
                    <p className="font-bold text-lg mb-2">{method.contact}</p>
                    <p className={`text-sm mb-4 leading-relaxed ${
                      method.primary ? 'text-gray-300 group-hover:text-gray-600' : 'text-gray-600'
                    }`}>
                      {method.description}
                    </p>
                    <p className={`text-xs font-mono ${
                      method.primary ? 'text-gray-400 group-hover:text-gray-500' : 'text-gray-500'
                    }`}>
                      {method.hours}
                    </p>
                  </div>

                  <a
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`inline-block w-full text-center py-3 px-6 border-2 font-semibold transition-all duration-300 ${
                      method.primary
                        ? 'border-white text-white group-hover:border-black group-hover:bg-black group-hover:text-white'
                        : 'border-black text-black hover:bg-black hover:text-white'
                    }`}
                  >
                    {method.action}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Services Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How We Can Help</h2>
              <div className="w-24 h-1 bg-black mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="text-center border border-gray-200 p-8 hover:border-black transition-colors">
                  <div className="mb-4 flex justify-center text-black">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Office Information */}
          <div className="bg-black text-white p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Office Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Location</p>
                      <p className="text-gray-300">{officeInfo.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <a href={`mailto:${officeInfo.email}`} className="text-gray-300 hover:text-white transition-colors">
                        {officeInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Phone</p>
                      <a href={`tel:${officeInfo.phone}`} className="text-gray-300 hover:text-white transition-colors">
                        {officeInfo.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Business Hours</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Weekdays</p>
                      <p className="text-gray-300 text-sm">{officeInfo.hours.weekdays}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Saturday</p>
                      <p className="text-gray-300 text-sm">{officeInfo.hours.saturday}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Sunday</p>
                      <p className="text-gray-300 text-sm">{officeInfo.hours.sunday}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-700">
                  <p className="text-sm text-gray-400 leading-relaxed">
                    For urgent technical support outside business hours, 
                    WhatsApp is your best option for the fastest response.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center py-16">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you're a student, maker, or business, we're here to support your electronics journey 
              from concept to completion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/256726408312"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white border-2 border-black hover:bg-white hover:text-black transition-all duration-300 font-semibold"
              >
                <MessageCircle className="h-5 w-5" />
                Start WhatsApp Chat
              </a>
              <Link
                href="/supply"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 font-semibold"
              >
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 