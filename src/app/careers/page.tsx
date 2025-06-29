import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers - Join Our Team | Carthigan Holdings',
  description: 'Join Carthigan Holdings and help shape the future of African technology education and innovation. Explore career opportunities.',
}

export default function CareersPage() {
  const openPositions = [
    {
      title: "Electronics Engineer",
      department: "Engineering",
      type: "Full-time",
      location: "Kampala, Uganda",
      description: "Design and develop innovative electronics solutions for our educational platform."
    },
    {
      title: "Software Developer",
      department: "Engineering",
      type: "Full-time",
      location: "Kampala, Uganda / Remote",
      description: "Build and maintain our web and mobile applications using modern technologies."
    },
    {
      title: "Technical Content Creator",
      department: "Education",
      type: "Full-time",
      location: "Kampala, Uganda",
      description: "Create engaging educational content and tutorials for our learning platform."
    },
    {
      title: "Customer Support Specialist",
      department: "Operations",
      type: "Full-time",
      location: "Kampala, Uganda",
      description: "Provide exceptional technical support to our growing community of makers and learners."
    }
  ]

  const benefits = [
    "Competitive salary and equity options",
    "Health insurance coverage",
    "Professional development opportunities",
    "Flexible working arrangements",
    "Access to latest electronics and tools",
    "Conference and training budget",
    "Collaborative and innovative work environment",
    "Opportunity to impact African tech education"
  ]

  const values = [
    {
      title: "Innovation",
      description: "We encourage creative thinking and embrace new ideas to solve complex challenges."
    },
    {
      title: "Learning",
      description: "Continuous learning and growth are at the heart of everything we do."
    },
    {
      title: "Impact",
      description: "We measure our success by the positive impact we make on communities."
    },
    {
      title: "Collaboration",
      description: "We believe the best solutions come from diverse teams working together."
    }
  ]

  return (
    <main className="bg-white text-black min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block border-2 border-black px-6 py-2 mb-6">
              <span className="font-mono text-sm font-medium tracking-wider">CAREERS</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Shape the Future of
              <span className="block text-orange-500">African Tech</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Join our mission to democratize technology education and empower the next generation 
              of African innovators. Build your career while making a meaningful impact.
            </p>
            <a
              href="mailto:careers@carthigan.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white border-2 border-black hover:bg-white hover:text-black transition-all duration-300 font-semibold"
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Why Join Carthigan?</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Be part of a team that is transforming technology education across Africa
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-xl">{value.title[0]}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Open Positions</h2>
              <p className="text-xl text-gray-700">
                Explore exciting opportunities to grow your career with us
              </p>
            </div>
            
            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <div key={index} className="bg-white p-8 border border-gray-200 hover:border-black transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="text-2xl font-bold">{position.title}</h3>
                        <span className="px-3 py-1 bg-orange-500 text-white text-sm rounded-full">
                          {position.type}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                        <span>📍 {position.location}</span>
                        <span>🏢 {position.department}</span>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{position.description}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <a
                        href="mailto:careers@carthigan.com"
                        className="inline-flex items-center gap-2 px-6 py-3 border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 font-semibold"
                      >
                        Apply
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Benefits & Perks</h2>
              <p className="text-xl text-gray-700">
                We take care of our team so they can do their best work
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-4 p-4">
                  <div className="w-3 h-3 bg-orange-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Our Culture</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We foster an environment where innovation thrives, diversity is celebrated, 
              and every team member can grow both personally and professionally.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-4">
                <div className="text-4xl">🚀</div>
                <h3 className="text-xl font-bold">Fast-paced Growth</h3>
                <p className="text-gray-300">Rapid learning and career advancement opportunities</p>
              </div>
              
              <div className="space-y-4">
                <div className="text-4xl">🤝</div>
                <h3 className="text-xl font-bold">Collaborative Team</h3>
                <p className="text-gray-300">Work with passionate professionals from diverse backgrounds</p>
              </div>
              
              <div className="space-y-4">
                <div className="text-4xl">🌍</div>
                <h3 className="text-xl font-bold">Global Impact</h3>
                <p className="text-gray-300">Make a difference in technology education across Africa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Application Process</h2>
              <p className="text-xl text-gray-700">
                We've designed a simple and transparent hiring process
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  1
                </div>
                <h3 className="font-bold mb-2">Apply</h3>
                <p className="text-gray-700 text-sm">Submit your application and resume</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  2
                </div>
                <h3 className="font-bold mb-2">Screen</h3>
                <p className="text-gray-700 text-sm">Initial phone or video screening</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  3
                </div>
                <h3 className="font-bold mb-2">Interview</h3>
                <p className="text-gray-700 text-sm">Technical and cultural fit interviews</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  4
                </div>
                <h3 className="font-bold mb-2">Offer</h3>
                <p className="text-gray-700 text-sm">Welcome to the team!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-orange-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Join Our Mission?</h2>
            <p className="text-xl mb-8 leading-relaxed opacity-90">
              Do not see a role that fits? We are always looking for talented individuals 
              who share our passion for technology education and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:careers@carthigan.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white hover:bg-gray-800 transition-colors font-semibold"
              >
                Send Your Resume
              </a>
              <a
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-orange-500 transition-all duration-300 font-semibold"
              >
                Learn About Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
