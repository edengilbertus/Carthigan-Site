import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  try {
    // Test the Supabase connection by making a simple query
    const { data, error } = await supabase
      .from('profiles')
      .select('count')
      .limit(1)

    if (error) {
      console.error('Supabase connection test failed:', error)
      return NextResponse.json(
        { 
          status: 'error', 
          message: 'Failed to connect to Supabase', 
          error: error.message,
          details: error
        }, 
        { status: 500 }
      )
    }

    // Successful connection
    return NextResponse.json({ 
      status: 'success', 
      message: 'Successfully connected to Supabase',
      data
    })
  } catch (err: any) {
    console.error('Unexpected error during Supabase test:', err)
    return NextResponse.json(
      { 
        status: 'error', 
        message: 'Unexpected error during connection test', 
        error: err.message 
      }, 
      { status: 500 }
    )
  }
} 