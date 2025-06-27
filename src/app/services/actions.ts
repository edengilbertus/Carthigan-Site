"use server"

import { supabase } from '@/lib/supabase'
import { z } from 'zod'

const quoteSchema = z.object({
  full_name: z.string().min(3, "Full name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  service_type: z.string(),
  source_language: z.string().min(2, "Source language is required"),
  target_language: z.string().min(2, "Target language is required"),
  details: z.string().optional(),
  file: z.instanceof(File).optional()
})

export async function submitQuoteRequest(prevState: any, formData: FormData) {
  const validatedFields = quoteSchema.safeParse(Object.fromEntries(formData.entries()))

  if (!validatedFields.success) {
    return {
      message: 'error',
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const { file, ...rest } = validatedFields.data
  let fileUrl = null

  if (file && file.size > 0) {
    const { data: fileData, error: fileError } = await supabase.storage
      .from('translation_uploads')
      .upload(`public/${Date.now()}_${file.name}`, file)

    if (fileError) {
      console.error('File upload error:', fileError)
      return { message: 'error', errors: { _form: ['File upload failed.'] } }
    }
    fileUrl = fileData.path
  }

  const { error } = await supabase
    .from('translation_requests')
    .insert({ ...rest, file_url: fileUrl })

  if (error) {
    console.error('Database insert error:', error)
    return { message: 'error', errors: { _form: ['Failed to submit request.'] } }
  }

  return { message: 'success' }
} 