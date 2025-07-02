"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { blogApi } from '@/lib/api'

interface Blog {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string | null
  featured_image: string | null
  status: string
  published_at: string | null
  is_featured: boolean
  views: number
  likes: number
  tags: string[]
  created_at: string
  updated_at: string
}

// Fallback articles if database fails
const fallbackArticles = [
  {
    title: "The Future of RISC-V in African Tech",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=450&fit=crop&auto=format",
    excerpt: "How open-source architecture is revolutionizing computing in emerging markets.",
    slug: "future-risc-v-african-tech"
  },
  {
    title: "Building Digital Infrastructure", 
    category: "Innovation",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=450&fit=crop&auto=format",
    excerpt: "Creating the backbone for Africa's next technological revolution.",
    slug: "building-digital-infrastructure"
  },
  {
    title: "The Rise of Local Tech Manufacturing",
    category: "Industry", 
    image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=800&h=450&fit=crop&auto=format",
    excerpt: "How domestic production is changing the technology landscape.",
    slug: "rise-local-tech-manufacturing"
  }
]

export default function Pulse() {
  const [articles, setArticles] = useState<any[]>(fallbackArticles)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadLatestBlogs()
  }, [])

  const loadLatestBlogs = async () => {
    try {
      const response = await blogApi.getBlogs({
        status: 'published',
        page: 1,
        limit: 3
      })

      if (response.success && response.data?.items && response.data.items.length > 0) {
        const blogArticles = response.data.items.map((blog: Blog) => ({
          title: blog.title,
          category: blog.tags[0] || 'Article',
          image: blog.featured_image || fallbackArticles[0].image,
          excerpt: blog.excerpt || 'Read more about this topic...',
          slug: blog.slug
        }))
        setArticles(blogArticles)
      }
    } catch (error) {
      console.error('Failed to load blog articles:', error)
      // Keep fallback articles
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6 text-black">
              Carthigan Pulse
            </h2>
            <p className="text-xl text-black/60 max-w-2xl mx-auto">
              Insights and News from the Forefront of Technology, Entertainment, and Innovation
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link 
                href={article.slug ? `/blog/${article.slug}` : '/blog'}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-medium border border-black/5 block"
              >
                <div className="aspect-[16/9] relative overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover filter grayscale group-hover:grayscale-0 transform group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>
                </div>
                <div className="p-8 relative">
                  <span className="inline-block px-4 py-1 rounded-full text-xs font-medium bg-black/5 text-black mb-4">
                    {article.category}
                  </span>
                  <h3 className="text-xl font-display font-semibold mb-3 text-black group-hover:text-accent transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-black/60">{article.excerpt}</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/blog"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shadow-xs h-9 bg-black hover:bg-black/90 text-white rounded-full px-8 py-6 text-lg shadow-soft"
          >
            Read More Articles
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
