"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const articles = [
  {
    title: "The Future of RISC-V in African Tech",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=450&fit=crop&auto=format",
    excerpt: "How open-source architecture is revolutionizing computing in emerging markets."
  },
  {
    title: "Building Digital Infrastructure",
    category: "Innovation",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=450&fit=crop&auto=format",
    excerpt: "Creating the backbone for Africa's next technological revolution."
  },
  {
    title: "The Rise of Local Tech Manufacturing",
    category: "Industry",
    image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=800&h=450&fit=crop&auto=format",
    excerpt: "How domestic production is changing the technology landscape."
  }
]

export function Pulse() {
  return (
    <section className="min-h-screen py-32 relative bg-white">
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.03]" />
      
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6 text-black">
              /// Carthigan Pulse
            </h2>
            <p className="text-xl text-black/60 max-w-2xl mx-auto font-body">
              Insights and News from the Forefront of Technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {articles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-medium border border-black/5"
              >
                <div className="aspect-[16/9] relative overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover filter grayscale group-hover:grayscale-0 transform group-hover:scale-105 transition duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                </div>
                <div className="p-8 relative">
                  <span className="inline-block px-4 py-1 rounded-full text-xs font-medium bg-black/5 text-black mb-4">
                    {article.category}
                  </span>
                  <h3 className="text-xl font-display font-semibold mb-3 text-black group-hover:text-accent transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-black/60">
                    {article.excerpt}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              href="/blog"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shadow-xs h-9 bg-black hover:bg-black/90 text-white rounded-full px-8 py-6 text-lg shadow-soft"
            >
              <span className="font-mono mr-2">{'>'}</span> VISIT PULSE
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
