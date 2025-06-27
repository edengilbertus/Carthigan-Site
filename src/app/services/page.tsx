import { Metadata } from 'next'
import ServicesClient from '@/components/services/ServicesClient'

export const metadata: Metadata = {
  title: 'Translation & Language Services | Carthigan',
  description: 'Professional, culturally-aware language services to connect your business, research, or project with a global and local Ugandan audience.',
}

export default function ServicesPage() {
  return <ServicesClient />
} 