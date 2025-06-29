import { notFound } from 'next/navigation'
import { CourseDetailPage } from '@/components/education/CourseDetailPage'
import { COURSES } from '@/lib/data/courses'

// Category mapping for URL params
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

interface CoursePageProps {
  params: Promise<{ category: string; courseId: string }>
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { category, courseId } = await params
  
  // Map URL category to internal category
  const internalCategory = categoryMap[category]
  if (!internalCategory) {
    notFound()
  }

  // Find the specific course
  const course = COURSES.find(c => c.id === courseId && c.category === internalCategory)
  if (!course) {
    notFound()
  }

  // Get related courses from the same category
  const relatedCourses = COURSES
    .filter(c => c.category === internalCategory && c.id !== courseId)
    .slice(0, 3)

  return <CourseDetailPage course={course} relatedCourses={relatedCourses} categorySlug={category} />
}

export async function generateMetadata({ params }: CoursePageProps) {
  const { category, courseId } = await params
  const internalCategory = categoryMap[category]
  const course = COURSES.find(c => c.id === courseId && c.category === internalCategory)

  if (!course) {
    return {
      title: 'Course Not Found - Carthigan Education',
      description: 'The requested course could not be found.'
    }
  }

  return {
    title: `${course.title} - Carthigan Education`,
    description: course.description
  }
} 