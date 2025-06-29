import { Metadata } from 'next'
import { EducationPage } from '@/components/education/EducationPage'
import { AuthProvider } from '@/contexts/AuthContext'

export const metadata: Metadata = {
  title: 'Carthigan Education - Complete Course Catalog with UGX Pricing',
  description: 'Master engineering, software development, design, and languages with comprehensive courses designed for African professionals. All courses priced in UGX.',
}

export default function Education() {
  return (
    <AuthProvider>
      <EducationPage />
    </AuthProvider>
  )
} 