"use client"

import { useState, useEffect } from 'react'
import { notFound } from 'next/navigation'
import { use } from 'react'
import Image from 'next/image'
import Link from 'next/link'
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

interface BlogPageProps {
  params: Promise<{ slug: string }>
}

export default function BlogPost({ params }: BlogPageProps) {
  const { slug } = use(params)
  const [blog, setBlog] = useState<Blog | null>(null)
  const [loading, setLoading] = useState(true)
  const [relatedBlogs, setRelatedBlogs] = useState<Blog[]>([])

  useEffect(() => {
    loadBlog()
  }, [slug])

  const loadBlog = async () => {
    try {
      setLoading(true)
      const response = await blogApi.getBlogs({
        page: 1,
        limit: 50 // Get all blogs to find by slug
      })

      if (response.success && response.data) {
        const foundBlog = response.data.items.find((b: Blog) => b.slug === slug)
        
        if (!foundBlog) {
          notFound()
          return
        }

        setBlog(foundBlog)

        // Get related blogs (same tags, different blog)
        const related = response.data.items
          .filter((b: Blog) => 
            b.id !== foundBlog.id && 
            b.tags.some(tag => foundBlog.tags.includes(tag))
          )
          .slice(0, 3)
        
        setRelatedBlogs(related)

        // Increment view count (you'd do this server-side in a real app)
        // await blogApi.incrementViews(foundBlog.id)
      }
    } catch (error) {
      console.error('Failed to load blog:', error)
      notFound()
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getReadTime = (content: string) => {
    const wordsPerMinute = 200
    const wordCount = content.replace(/<[^>]*>/g, '').split(' ').length
    const readTime = Math.ceil(wordCount / wordsPerMinute)
    return `${readTime} min`
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-white">
        <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-black/5">
          <nav className="container mx-auto px-6 h-20 flex items-center justify-between">
            <Link href="/" className="text-2xl font-display font-semibold text-black">
              CARTHIGAN
            </Link>
            <div className="hidden md:flex items-center space-x-10">
              <Link href="/blog" className="text-black/60 hover:text-black transition-colors">
                Blog
              </Link>
              <Link href="/" className="text-black/60 hover:text-black transition-colors">
                Home
              </Link>
            </div>
          </nav>
        </header>

        <div className="pt-32 pb-20">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
                <p className="text-black/60">Loading blog post...</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }

  if (!blog) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-black/5">
        <nav className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-2xl font-display font-semibold text-black">
            CARTHIGAN
          </Link>
          <div className="hidden md:flex items-center space-x-10">
            <Link href="/blog" className="text-black/60 hover:text-black transition-colors">
              Blog
            </Link>
            <Link href="/" className="text-black/60 hover:text-black transition-colors">
              Home
            </Link>
          </div>
        </nav>
      </header>

      {/* Blog Content */}
      <article className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-black/60 mb-8">
            <Link href="/blog" className="hover:text-black transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-black">{blog.title}</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex flex-wrap gap-2 mb-6">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-black/5 text-black"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-display font-semibold mb-6 text-black">
              {blog.title}
            </h1>
            
            {blog.excerpt && (
              <p className="text-xl text-black/60 mb-8 leading-relaxed">
                {blog.excerpt}
              </p>
            )}

            <div className="flex items-center gap-4 text-sm text-black/40 mb-8">
              <span>By Carthigan</span>
              <span>•</span>
              <span>{getReadTime(blog.content)} read</span>
              <span>•</span>
              <span>{formatDate(blog.published_at || blog.created_at)}</span>
              <span>•</span>
              <span>{blog.views} views</span>
            </div>

            {/* Featured Image */}
            {blog.featured_image && (
              <div className="aspect-[16/9] relative rounded-2xl overflow-hidden mb-12">
                <Image
                  src={blog.featured_image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </header>

          {/* Article Content */}
          <div 
            className="prose prose-lg prose-black max-w-none mb-16"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Related Articles */}
          {relatedBlogs.length > 0 && (
            <section className="border-t border-black/10 pt-16">
              <h2 className="text-2xl font-display font-semibold mb-8 text-black">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedBlogs.map((relatedBlog) => (
                  <Link
                    key={relatedBlog.id}
                    href={`/blog/${relatedBlog.slug}`}
                    className="group block"
                  >
                    <div className="aspect-[16/9] relative rounded-xl overflow-hidden mb-4">
                      <Image
                        src={relatedBlog.featured_image || "https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg"}
                        alt={relatedBlog.title}
                        fill
                        className="object-cover filter grayscale group-hover:grayscale-0 transition duration-300"
                      />
                    </div>
                    <h3 className="font-display font-semibold text-black group-hover:text-accent transition-colors mb-2">
                      {relatedBlog.title}
                    </h3>
                    <p className="text-sm text-black/60">
                      {relatedBlog.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Back to Blog */}
          <div className="text-center mt-16">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all shadow-xs h-9 bg-black hover:bg-black/90 text-white rounded-full px-8 py-6 text-lg shadow-soft"
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
      </article>
    </main>
  )
} 