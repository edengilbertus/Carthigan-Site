import { Metadata } from 'next'
import { EducationNavigation } from '@/components/education/EducationNavigation'
import { EducationHero } from '@/components/education/EducationHero'
import { FeaturedCourses } from '@/components/education/FeaturedCourses'
import { LearningPaths } from '@/components/education/LearningPaths'
import { StudentSuccess } from '@/components/education/StudentSuccess'
import { EducationFooter } from '@/components/education/EducationFooter'

export const metadata: Metadata = {
  title: 'Carthigan Education - Learn Electronics & Programming for Africa',
  description: 'Master electronics, programming, and tech skills with courses designed for African students. From Arduino to AI, build the future.',
}

export default function EducationHomePage() {
  return (
    <main className="min-h-screen bg-white">
      <EducationNavigation />
      <EducationHero />
      <FeaturedCourses />
      <LearningPaths />
      <StudentSuccess />
      <EducationFooter />
    </main>
  )
} 