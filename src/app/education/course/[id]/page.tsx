import { Metadata } from 'next'
import { EducationNavigation } from '@/components/education/EducationNavigation'
import { CourseDetail } from '@/components/education/CourseDetail'
import { EducationFooter } from '@/components/education/EducationFooter'

export const metadata: Metadata = {
  title: 'Course Details - Carthigan Education',
  description: 'Learn more about this course and enroll to advance your tech career.',
}

interface CoursePageProps {
  params: {
    id: string
  }
}

export default function CoursePage({ params }: CoursePageProps) {
  return (
    <main className="min-h-screen bg-white">
      <EducationNavigation />
      <CourseDetail courseId={params.id} />
      <EducationFooter />
    </main>
  )
} 