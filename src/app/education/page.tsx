import { Metadata } from 'next'
import { EducationClient } from '@/components/education/EducationClient'

export const metadata: Metadata = {
  title: 'Carthigan Education - Learn Electronics & Programming for Africa',
  description: 'Master electronics, programming, and tech skills with courses designed for African students. From Arduino to AI, build the future.',
}

export default function EducationHomePage() {
  return <EducationClient />
} 