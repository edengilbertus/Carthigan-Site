import { Metadata } from 'next'
import { EducationNavigation } from '@/components/education/EducationNavigation'
import { CourseBrowser } from '@/components/education/CourseBrowser'
import { EducationFooter } from '@/components/education/EducationFooter'

export const metadata: Metadata = {
  title: 'Browse Courses - Carthigan Education',
  description: 'Explore our comprehensive catalog of certificate programs, workshops, and learning paths designed for African innovators.',
}

export default function CourseBrowsePage() {
  return (
    <main className="min-h-screen bg-white">
      <EducationNavigation />
      <CourseBrowser />
      <EducationFooter />
    </main>
  )
} 