import { Metadata } from 'next'
import { AudioVideoCategory } from '@/components/supply/categories/AudioVideoCategory'

export const metadata: Metadata = {
  title: 'Audio & Video Equipment - Speakers, Microphones, Cameras & More | Carthigan Supply',
  description: 'Professional audio and video equipment for content creation, education, and multimedia projects. Browse speakers, microphones, headphones, cameras, and capture cards from top brands.',
  keywords: 'audio equipment, video equipment, speakers, microphones, headphones, cameras, capture cards, streaming gear, professional audio, Uganda',
}

export default function AudioVideoCategoryPage() {
  return (
    <main className="container mx-auto px-6 py-8">
      <AudioVideoCategory />
    </main>
  )
}
