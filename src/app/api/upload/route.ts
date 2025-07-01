import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { v4 as uuidv4 } from 'uuid'

export async function POST(request: NextRequest) {
  try {
    console.log('Upload API called')

    // Use service role key for uploads to bypass RLS
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        auth: {
          persistSession: false,
          autoRefreshToken: false,
        }
      }
    )

    console.log('Using service role for upload')

    const formData = await request.formData()
    const file = formData.get('file') as File
    const bucket = formData.get('bucket') as string || 'product-images'

    console.log('File details:', {
      name: file?.name,
      size: file?.size,
      type: file?.type,
      bucket
    })

    if (!file) {
      console.error('No file provided')
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
    if (!allowedTypes.includes(file.type)) {
      console.error('Invalid file type:', file.type)
      return NextResponse.json({ error: 'Invalid file type' }, { status: 400 })
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024
    if (file.size > maxSize) {
      console.error('File too large:', file.size)
      return NextResponse.json({ error: 'File too large' }, { status: 400 })
    }

    // Generate unique filename
    const fileExt = file.name.split('.').pop()
    const fileName = `${uuidv4()}.${fileExt}`
    const filePath = `products/${fileName}`

    console.log('Generated file path:', filePath)

    // Convert file to buffer
    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    console.log('Buffer size:', buffer.length)

    // Upload to Supabase Storage using service role
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(filePath, buffer, {
        contentType: file.type,
        cacheControl: '3600',
      })

    console.log('Upload result:', { data, error })

    if (error) {
      console.error('Upload error details:', error)
      return NextResponse.json({ 
        error: `Upload failed: ${error.message}`,
        details: error 
      }, { status: 500 })
    }

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from(bucket)
      .getPublicUrl(data.path)

    console.log('Public URL:', publicUrl)

    return NextResponse.json({ 
      url: publicUrl,
      path: data.path 
    })
  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json({ 
      error: `Upload failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
      details: error 
    }, { status: 500 })
  }
} 