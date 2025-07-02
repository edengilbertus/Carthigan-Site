import BlogClient from '@/components/blog/BlogClient'
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

export default async function BlogPage() {
  // Pre-load blogs on the server for better performance
  let initialBlogs: Blog[] = []
  try {
    const response = await blogApi.getBlogs({
      page: 1,
      limit: 6
    })
    if (response.success && response.data) {
      initialBlogs = response.data.items
    }
  } catch (error) {
    console.error('Failed to pre-load blogs:', error)
    // BlogClient will handle loading state if no initial blogs
  }

  return <BlogClient initialBlogs={initialBlogs} />
}
