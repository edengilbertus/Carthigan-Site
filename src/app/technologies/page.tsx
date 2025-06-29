import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Technologies - Our Tech Stack | Carthigan Holdings',
  description: 'Discover the cutting-edge technologies powering Carthigan electronics education and supply platform.',
}

export default function TechnologiesPage() {
  return (
    <main className="bg-white text-black min-h-screen">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block border-2 border-black px-6 py-2 mb-6">
              <span className="font-mono text-sm font-medium tracking-wider">TECHNOLOGIES</span>
            </div>
            <h1 className="text-5xl font-bold mb-6 tracking-tight">Our Tech Stack</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Discover the cutting-edge technologies that power our electronics education and supply platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Embedded Systems</h2>
                <ul className="space-y-2 text-gray-700">
                  <li>• Arduino Ecosystem</li>
                  <li>• ESP32/ESP8266 IoT</li>
                  <li>• Raspberry Pi</li>
                  <li>• STM32 Microcontrollers</li>
                  <li>• PCB Design & Manufacturing</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Web Technologies</h2>
                <ul className="space-y-2 text-gray-700">
                  <li>• Next.js 14</li>
                  <li>• React 18</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• Supabase</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Programming Languages</h2>
                <ul className="space-y-2 text-gray-700">
                  <li>• C/C++ (Embedded)</li>
                  <li>• Python (AI/ML)</li>
                  <li>• JavaScript/TypeScript</li>
                  <li>• Assembly Language</li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Mobile Development</h2>
                <ul className="space-y-2 text-gray-700">
                  <li>• React Native</li>
                  <li>• Flutter</li>
                  <li>• Progressive Web Apps</li>
                  <li>• Mobile-first Design</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Cloud & Infrastructure</h2>
                <ul className="space-y-2 text-gray-700">
                  <li>• AWS Cloud Services</li>
                  <li>• Docker Containers</li>
                  <li>• CI/CD Pipelines</li>
                  <li>• Auto-scaling</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Data & Analytics</h2>
                <ul className="space-y-2 text-gray-700">
                  <li>• PostgreSQL</li>
                  <li>• Redis Caching</li>
                  <li>• Machine Learning</li>
                  <li>• IoT Data Processing</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-black text-white p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Build Something Amazing?</h2>
            <p className="text-xl mb-8 text-gray-300">
              Whether you need custom solutions or want to learn these technologies, we are here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/supply/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 text-white hover:bg-orange-600 transition-colors font-semibold"
              >
                Contact Us
              </a>
              <a
                href="/education"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-semibold"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
