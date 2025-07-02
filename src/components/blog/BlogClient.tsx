"use client";

import { useState, useEffect } from 'react'
import Link from "next/link";
import Image from "next/image";
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

interface BlogClientProps {
  initialBlogs?: Blog[]
}

const categories = [
  "All",
  "Technology", 
  "Products",
  "Innovation",
  "African Tech",
  "Music",
  "Movies",
  "Gaming",
  "Industry"
]

export default function BlogClient({ initialBlogs = [] }: BlogClientProps) {
  const [blogs, setBlogs] = useState<Blog[]>(initialBlogs)
  const [loading, setLoading] = useState(!initialBlogs.length)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [featuredBlog, setFeaturedBlog] = useState<Blog | null>(null)

  useEffect(() => {
    if (!initialBlogs.length) {
      loadBlogs()
    } else {
      // Set featured blog from initial data
      const featured = initialBlogs.find(blog => blog.is_featured)
      setFeaturedBlog(featured || initialBlogs[0])
    }
  }, [initialBlogs])

  const loadBlogs = async () => {
    try {
      setLoading(true)
      const response = await blogApi.getBlogs({
        status: 'published',
        page: 1,
        limit: 20
      })

      if (response.success && response.data) {
        setBlogs(response.data.items)
        const featured = response.data.items.find(blog => blog.is_featured)
        setFeaturedBlog(featured || response.data.items[0])
      }
    } catch (error) {
      console.error('Failed to load blogs:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredBlogs = selectedCategory === "All" 
    ? blogs.filter(blog => !blog.is_featured) // Don't show featured blog in regular list
    : blogs.filter(blog => 
        !blog.is_featured && 
        blog.tags.some(tag => 
          tag.toLowerCase().includes(selectedCategory.toLowerCase()) ||
          selectedCategory.toLowerCase().includes(tag.toLowerCase())
        )
      )

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
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
        {/* Header */}
        <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-black/5">
          <nav className="container mx-auto px-6 h-20 flex items-center justify-between">
            <Link href="/" className="text-2xl font-display font-semibold text-black">
              CARTHIGAN
            </Link>
            <div className="hidden md:flex items-center space-x-10">
              <Link href="/#products" className="text-black/60 hover:text-black transition-colors">
                Products
              </Link>
              <Link href="/#roadmap" className="text-black/60 hover:text-black transition-colors">
                CarthageOS
              </Link>
              <Link href="/#innovation" className="text-black/60 hover:text-black transition-colors">
                Innovation
              </Link>
              <Link href="/" className="text-black/60 hover:text-black transition-colors">
                Home
              </Link>
            </div>
          </nav>
        </header>

        <section className="pt-32 pb-20">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
                <p className="text-black/60">Loading blog posts...</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
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
            <Link href="/#products" className="text-black/60 hover:text-black transition-colors">
              Products
            </Link>
            <Link href="/#roadmap" className="text-black/60 hover:text-black transition-colors">
              CarthageOS
            </Link>
            <Link href="/#innovation" className="text-black/60 hover:text-black transition-colors">
              Innovation
            </Link>
            <Link href="/" className="text-black/60 hover:text-black transition-colors">
              Home
            </Link>
          </div>
        </nav>
      </header>

      {/* Blog Hero */}
      <section className="pt-32 pb-20 relative bg-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-display font-semibold mb-6 text-black">
            Carthigan Pulse
          </h1>
          <p className="text-xl text-black/60 max-w-2xl mb-12">
            Insights and News from the Forefront of Technology, Entertainment, and Innovation
          </p>
          
          {/* Categories */}
          <div className="flex flex-wrap gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-black text-white'
                    : 'bg-black/5 text-black/60 hover:bg-black hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          {featuredBlog && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
                <Image
                  src={featuredBlog.featured_image || "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg"}
                  alt={featuredBlog.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="inline-block px-4 py-1 rounded-full text-xs font-medium bg-black/5 text-black mb-4">
                  {featuredBlog.tags[0] || 'Featured'}
                </span>
                <h2 className="text-3xl font-display font-semibold mb-4 text-black">
                  {featuredBlog.title}
                </h2>
                <p className="text-black/60 mb-6">
                  {featuredBlog.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-black/40">
                  <span>By Carthigan</span>
                  <span>•</span>
                  <span>{getReadTime(featuredBlog.content)} read</span>
                  <span>•</span>
                  <span>{formatDate(featuredBlog.published_at || featuredBlog.created_at)}</span>
                </div>
              </div>
            </div>
          )}

          {/* Latest Posts Grid */}
          {filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredBlogs.map((blog) => (
                <div key={blog.id} className="group relative overflow-hidden rounded-2xl bg-white shadow-medium border border-black/5">
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <Image
                      src={blog.featured_image || "https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg"}
                      alt={blog.title}
                      fill
                      className="object-cover filter grayscale group-hover:grayscale-0 transform group-hover:scale-105 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>
                  </div>
                  <div className="p-8 relative">
                    <span className="inline-block px-4 py-1 rounded-full text-xs font-medium bg-black/5 text-black mb-4">
                      {blog.tags[0] || 'Article'}
                    </span>
                    <h3 className="text-xl font-display font-semibold mb-3 text-black group-hover:text-accent transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-black/60 mb-6">{blog.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-black/40">
                      <span>By Carthigan</span>
                      <span>•</span>
                      <span>{getReadTime(blog.content)} read</span>
                      <span>•</span>
                      <span>{formatDate(blog.published_at || blog.created_at)}</span>
                    </div>
                    <div className="flex items-center gap-4 mt-4 text-sm text-black/40">
                      <span>{blog.views} views</span>
                      <span>•</span>
                      <span>{blog.likes} likes</span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-black/60">No blog posts found for the selected category.</p>
            </div>
          )}

          {/* Load More Button */}
          {filteredBlogs.length > 0 && (
            <div className="text-center mt-16">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shadow-xs h-9 bg-black hover:bg-black/90 text-white rounded-full px-8 py-6 text-lg shadow-soft">
                Load More Articles
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
} 