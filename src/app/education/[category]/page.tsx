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
    description: 'Learn thermodynamics, fluid mechanics, manufacturing processes, and mechanical design principles.'
  },
  computer: {
    title: 'Computer Engineering',
    description: 'Dive into computer architecture, embedded systems, VLSI design, and digital signal processing.'
  },
  software: {
    title: 'Software Engineering',
    description: 'Build expertise in programming, web development, databases, cloud computing, and software architecture.'
  },
  design: {
    title: 'UI/UX Design',
    description: 'Create beautiful, user-centered designs with modern tools and design thinking methodologies.'
  },
  writing: {
    title: 'Creative Writing',
    description: 'Develop your writing skills across fiction, non-fiction, journalism, and professional communication.'
  },
  music: {
    title: 'Music Production',
    description: 'Master audio engineering, music theory, electronic production, and professional recording techniques.'
  },
  language: {
    title: 'Languages',
    description: 'Learn English, French, Spanish, Italian, Hebrew, and other languages for global communication.'
  },
  'creative-software': {
    title: 'Creative Software',
    description: 'Master industry-standard creative tools like Photoshop, Illustrator, Final Cut Pro, and Figma.'
  }
}

interface Props {
  params: {
    category: string
  }
}

export async function generateStaticParams() {
  return Object.keys(categoryMap).map((category) => ({
    category,
  }))
}

export async function generateMetadata({ params }: Props) {
  const categoryKey = categoryMap[params.category]
  const categoryInfo = categoryTitles[categoryKey]
  
  if (!categoryInfo) {
    return {
      title: 'Category Not Found',
    }
  }

  return {
    title: `${categoryInfo.title} Courses - Carthigan Education`,
    description: categoryInfo.description,
  }
}

export default function Category({ params }: Props) {
  const categoryKey = categoryMap[params.category]
  
  if (!categoryKey || !categoryTitles[categoryKey]) {
    notFound()
  }

  const categoryInfo = categoryTitles[categoryKey]
  const courses = COURSES.filter(course => course.category === categoryKey)

  return (
    <CategoryPage
      category={categoryKey}
      title={categoryInfo.title}
      description={categoryInfo.description}
      courses={courses}
      breadcrumb={params.category}
    />
  )
}
