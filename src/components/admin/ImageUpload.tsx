'use client'

import { useState } from 'react'
import { Upload, X, Loader2, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Alert, AlertDescription } from '@/components/ui/alert'

interface ImageUploadProps {
  images: string[]
  onChange: (images: string[]) => void
  maxImages?: number
  className?: string
}

export function ImageUpload({ 
  images, 
  onChange, 
  maxImages = 5,
  className 
}: ImageUploadProps) {
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) return

    const remainingSlots = maxImages - images.length
    const filesToUpload = Array.from(files).slice(0, remainingSlots)

    setUploading(true)
    setError(null)
    const uploadedUrls: string[] = []

    try {
      for (const file of filesToUpload) {
        // Validate file size on client side
        if (file.size > 5 * 1024 * 1024) {
          setError(`File ${file.name} is too large. Maximum size is 5MB.`)
          continue
        }

        const formData = new FormData()
        formData.append('file', file)
        formData.append('bucket', 'product-images')

        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        })

        if (response.ok) {
          const data = await response.json()
          uploadedUrls.push(data.url)
        } else {
          const errorData = await response.json()
          console.error('Failed to upload file:', file.name, errorData)
          setError(`Failed to upload ${file.name}: ${errorData.error || 'Unknown error'}`)
          break // Stop uploading remaining files if one fails
        }
      }

      if (uploadedUrls.length > 0) {
        onChange([...images, ...uploadedUrls])
      }
    } catch (error) {
      console.error('Upload error:', error)
      setError('Failed to upload images. Please try again.')
    } finally {
      setUploading(false)
      // Reset the input
      e.target.value = ''
    }
  }

  const removeImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index)
    onChange(newImages)
  }

  const moveImage = (fromIndex: number, toIndex: number) => {
    const newImages = [...images]
    const [movedImage] = newImages.splice(fromIndex, 1)
    newImages.splice(toIndex, 0, movedImage)
    onChange(newImages)
  }

  return (
    <div className={cn("space-y-4", className)}>
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={image}
            className="relative group aspect-square bg-gray-100 rounded-lg overflow-hidden"
          >
            <Image
              src={image}
              alt={`Product image ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center opacity-0 group-hover:opacity-100">
              <div className="flex gap-2">
                {index > 0 && (
                  <Button
                    type="button"
                    size="sm"
                    variant="secondary"
                    onClick={() => moveImage(index, index - 1)}
                  >
                    ←
                  </Button>
                )}
                {index < images.length - 1 && (
                  <Button
                    type="button"
                    size="sm"
                    variant="secondary"
                    onClick={() => moveImage(index, index + 1)}
                  >
                    →
                  </Button>
                )}
                <Button
                  type="button"
                  size="sm"
                  variant="destructive"
                  onClick={() => removeImage(index)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
            {index === 0 && (
              <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                Primary
              </div>
            )}
          </div>
        ))}

        {images.length < maxImages && (
          <label className="relative group aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 border-dashed border-gray-300 hover:border-gray-400 cursor-pointer flex items-center justify-center">
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileSelect}
              className="sr-only"
              disabled={uploading}
            />
            <div className="text-center">
              {uploading ? (
                <Loader2 className="h-8 w-8 animate-spin mx-auto text-gray-400" />
              ) : (
                <>
                  <Upload className="h-8 w-8 mx-auto text-gray-400" />
                  <p className="mt-2 text-sm text-gray-600">
                    Upload Image
                  </p>
                  <p className="text-xs text-gray-500">
                    {maxImages - images.length} remaining
                  </p>
                </>
              )}
            </div>
          </label>
        )}
      </div>

      <div className="text-sm text-gray-600">
        <p>• Click and drag images to reorder. The first image will be the primary image.</p>
        <p>• Recommended size: 800x800px or larger, square aspect ratio</p>
        <p>• Maximum {maxImages} images per product</p>
        <p>• Supported formats: JPEG, PNG, WebP (max 5MB each)</p>
      </div>
    </div>
  )
} 