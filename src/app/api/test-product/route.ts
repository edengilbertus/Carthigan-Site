import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  try {
    // Try to fetch product with ID res-001
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', 'res-001')
      .single()

    if (error) {
      return NextResponse.json({
        status: 'error',
        message: 'Product not found',
        error: error.message,
        details: error
      })
    }

    return NextResponse.json({
      status: 'success',
      product: data,
      message: 'Product found successfully'
    })
  } catch (err: any) {
    return NextResponse.json({
      status: 'error',
      message: 'Unexpected error',
      error: err.message
    })
  }
} 