import { notFound } from 'next/navigation'
import { CategoryPage } from '@/components/education/CategoryPage'
import { COURSES } from '@/lib/data/courses'

// Category mapping
const categoryMap: Record<string, string> = {
  'electrical-engineering': 'electrical',
  'mechanical-engineering': 'mechanical', 
  'computer-engineering': 'computer',
  'software-engineering': 'software',
  'ui-ux-design': 'design',
  'creative-writing': 'writing',
  'music-production': 'music',
  'languages': 'language',
  'creative-software': 'creative-software'
}

const categoryTitles: Record<string, { title: string; description: string }> = {
  electrical: {
    title: 'Electrical Engineering',
    description: 'Master circuit analysis, digital electronics, power systems, and advanced electrical engineering concepts.'
  },
  mechanical: {
    title: 'Mechanical Engineering', 
    description: 'Learn thermodynamics, fluid mechanics, mechanics of materials, and mechanical system design.'
  },
  computer: {
    title: 'Computer Engineering',
    description: 'Explore computer architecture, embedded systems, VLSI design, and digital signal processing.'
  },
  software: {
    title: 'Software Engineering',
    description: 'Build expertise in programming, web development, databases, cloud computing, and software architecture.'
  },
  design: {
    title: 'UI/UX Design',
    description: 'Master user interface design, user experience principles, and design thinking methodologies.'
  },
  writing: {
    title: 'Creative Writing',
    description: 'Develop skills in fiction writing, content creation, copywriting, and professional communication.'
  },
  music: {
    title: 'Music Production',
    description: 'Learn audio engineering, music theory, DAW mastery, and professional music production techniques.'
  },
  language: {
    title: 'Languages',
    description: 'Master English, French, Spanish, Italian, Hebrew, and other languages for global communication.'
  },
  'creative-software': {
    title: 'Creative Software',
    description: 'Master Adobe Creative Suite, Final Cut Pro, and other professional creative software tools.'
  }
}

interface CategoryPageProps {
  params: Promise<{ category: string }>
}

export default async function Category({ params }: CategoryPageProps) {
  const { category } = await params
  const categoryKey = categoryMap[category]
  
  if (!categoryKey || !categoryTitles[categoryKey]) {
    notFound()
  }

  const categoryInfo = categoryTitles[categoryKey]
  
  // Get courses for this category
  const courses = COURSES.filter(course => course.category === categoryKey)

  return (
    <CategoryPage
      category={categoryKey}
      title={categoryInfo.title}
      description={categoryInfo.description}
      courses={courses}
      breadcrumb={category}
    />
  )
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { category } = await params
  const categoryKey = categoryMap[category]
  const categoryInfo = categoryTitles[categoryKey]
  
  if (!categoryInfo) {
    return {
      title: 'Category Not Found - Carthigan Education',
      description: 'The requested course category could not be found.'
    }
  }

  return {
    title: `${categoryInfo.title} Courses - Carthigan Education`,
    description: categoryInfo.description
  }
}
