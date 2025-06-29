import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Carthigan - Empowering African Innovation | Uganda Electronics',
  description: 'Learn about Carthigan Holdings - your trusted partner for electronics, education, and technology solutions across Africa.',
}

export default function AboutPage() {
  const stats = [
    { number: "500+", label: "Products Available" },
    { number: "1000+", label: "Students Served" },
    { number: "50+", label: "Educational Kits" },
    { number: "24/7", label: "Support Available" }
  ]

  const values = [
    {
      title: "Innovation First",
      description: "We believe technology should be accessible to everyone. We bring cutting-edge electronics and educational resources to African innovators."
    },
    {
      title: "Community Driven", 
      description: "Our success is measured by the success of our community. We build lasting relationships with our customers and foster collaborative learning."
    },
    {
      title: "Local Impact",
      description: "Based in Uganda, we understand the unique challenges in the African tech landscape. We support local innovation and economic growth."
    },
    {
      title: "Education Focus",
      description: "Education is the foundation of progress. Our platform and hands-on kits empower the next generation of African tech leaders."
    }
  ]

  return (
    <main className="bg-white text-black min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block border-2 border-black px-6 py-2 mb-6">
              <span className="font-mono text-sm font-medium tracking-wider">ABOUT CARTHIGAN</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Empowering African 
              <span className="block text-orange-500">Innovation</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              We are more than just an electronics supplier. We are your partners in building 
              the future of African technology, one component, one student, one innovation at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/supply"
                className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white border-2 border-black hover:bg-white hover:text-black transition-all duration-300 font-semibold"
              >
                Explore Products
              </a>
              <a
                href="/education"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 font-semibold"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold mb-2 text-orange-500">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg leading-relaxed">
                    Carthigan Holdings was born from a simple observation: Africa has incredible 
                    talent and potential, but access to quality electronics education and components 
                    remained a significant barrier to innovation.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Founded in Uganda, we set out to change this narrative. We believe that with 
                    the right tools, education, and support, African innovators can compete on 
                    the global stage and solve uniquely African challenges.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Today, we serve students, makers, entrepreneurs, and institutions across 
                    the continent, providing not just products, but comprehensive solutions 
                    that include education, support, and community.
                  </p>
                </div>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  To democratize access to technology education and electronics across Africa, 
                  empowering the next generation of innovators to build solutions that transform 
                  their communities and beyond.
                </p>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  A future where every African innovator has access to world-class electronics 
                  education and components, enabling breakthrough innovations that showcase 
                  African excellence to the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                These core principles guide everything we do, from product selection 
                to customer support and community engagement.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-xl">{value.title[0]}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Whether you are a student, educator, maker, or entrepreneur, we invite you 
              to be part of the African innovation revolution. Together, we can build 
              a future where technology serves everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/supply"
                className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 text-white hover:bg-orange-600 transition-colors font-semibold"
              >
                Start Shopping
              </a>
              <a
                href="/education"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-semibold"
              >
                Explore Education
              </a>
              <a
                href="/supply/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-semibold"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
