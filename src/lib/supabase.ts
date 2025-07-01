import { createClient } from '@supabase/supabase-js'

// Default fallback values for local development
const FALLBACK_SUPABASE_URL = 'http://localhost:54321'
const FALLBACK_SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0'

// Get environment variables or fallback to defaults
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || FALLBACK_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || FALLBACK_SUPABASE_ANON_KEY

// Log status to help with debugging
if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  console.warn('⚠️ No NEXT_PUBLIC_SUPABASE_URL found in environment, using fallback URL')
}

if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  console.warn('⚠️ No NEXT_PUBLIC_SUPABASE_ANON_KEY found in environment, using fallback key')
}

// Create the Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true
  }
})

// Log status to console to help debugging
console.log(`🔌 Supabase client initialized with URL: ${supabaseUrl.substring(0, 25)}...`)

// Comprehensive Database Types
export interface Database {
  public: {
    Tables: {
      // User profiles
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          role: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          role?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          role?: string
          updated_at?: string
        }
      }
      // Categories (products and blogs)
      categories: {
        Row: {
          id: string
          name: string
          slug: string
          description: string | null
          parent_id: string | null
          type: string
          image_url: string | null
          is_active: boolean
          sort_order: number
          metadata: Record<string, any>
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          description?: string | null
          parent_id?: string | null
          type?: string
          image_url?: string | null
          is_active?: boolean
          sort_order?: number
          metadata?: Record<string, any>
          created_at?: string
          updated_at?: string
        }
        Update: {
          name?: string
          slug?: string
          description?: string | null
          parent_id?: string | null
          type?: string
          image_url?: string | null
          is_active?: boolean
          sort_order?: number
          metadata?: Record<string, any>
          updated_at?: string
        }
      }
      // Products
      products: {
        Row: {
          id: string
          name: string
          description: string
          category_id: string | null
          subcategory: string | null
          price: number
          student_price: number | null
          sku: string | null
          stock_quantity: number
          stock_status: string
          stock_threshold: number
          images: string[]
          specifications: Record<string, any>
          features: string[]
          compatibility: string[]
          projects: string[]
          tags: string[]
          rating: number
          review_count: number
          product_type: string
          lead_time: string
          supplier: string | null
          weight_grams: number | null
          dimensions_cm: string | null
          target_audience: string | null
          difficulty_level: string | null
          estimated_project_time: string | null
          age_range: string | null
          what_you_learn: string[]
          kit_contents: string[]
          meta_title: string | null
          meta_description: string | null
          is_featured: boolean
          is_active: boolean
          sort_order: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          name: string
          description: string
          category_id?: string | null
          subcategory?: string | null
          price: number
          student_price?: number | null
          sku?: string | null
          stock_quantity?: number
          stock_status?: string
          stock_threshold?: number
          images?: string[]
          specifications?: Record<string, any>
          features?: string[]
          compatibility?: string[]
          projects?: string[]
          tags?: string[]
          rating?: number
          review_count?: number
          product_type: string
          lead_time?: string
          supplier?: string | null
          weight_grams?: number | null
          dimensions_cm?: string | null
          target_audience?: string | null
          difficulty_level?: string | null
          estimated_project_time?: string | null
          age_range?: string | null
          what_you_learn?: string[]
          kit_contents?: string[]
          meta_title?: string | null
          meta_description?: string | null
          is_featured?: boolean
          is_active?: boolean
          sort_order?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          name?: string
          description?: string
          category_id?: string | null
          subcategory?: string | null
          price?: number
          student_price?: number | null
          sku?: string | null
          stock_quantity?: number
          stock_status?: string
          stock_threshold?: number
          images?: string[]
          specifications?: Record<string, any>
          features?: string[]
          compatibility?: string[]
          projects?: string[]
          tags?: string[]
          rating?: number
          review_count?: number
          product_type?: string
          lead_time?: string
          supplier?: string | null
          weight_grams?: number | null
          dimensions_cm?: string | null
          target_audience?: string | null
          difficulty_level?: string | null
          estimated_project_time?: string | null
          age_range?: string | null
          what_you_learn?: string[]
          kit_contents?: string[]
          meta_title?: string | null
          meta_description?: string | null
          is_featured?: boolean
          is_active?: boolean
          sort_order?: number
          updated_at?: string
        }
      }
      // Blog posts
      blogs: {
        Row: {
          id: string
          title: string
          slug: string
          content: string
          excerpt: string | null
          category_id: string | null
          author_id: string | null
          meta_title: string | null
          meta_description: string | null
          featured_image: string | null
          images: string[]
          status: string
          published_at: string | null
          is_featured: boolean
          views: number
          likes: number
          tags: string[]
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          slug: string
          content: string
          excerpt?: string | null
          category_id?: string | null
          author_id?: string | null
          meta_title?: string | null
          meta_description?: string | null
          featured_image?: string | null
          images?: string[]
          status?: string
          published_at?: string | null
          is_featured?: boolean
          views?: number
          likes?: number
          tags?: string[]
          created_at?: string
          updated_at?: string
        }
        Update: {
          title?: string
          slug?: string
          content?: string
          excerpt?: string | null
          category_id?: string | null
          author_id?: string | null
          meta_title?: string | null
          meta_description?: string | null
          featured_image?: string | null
          images?: string[]
          status?: string
          published_at?: string | null
          is_featured?: boolean
          views?: number
          likes?: number
          tags?: string[]
          updated_at?: string
        }
      }
      // Orders
      orders: {
        Row: {
          id: string
          order_number: string
          user_id: string | null
          status: string
          payment_status: string
          subtotal: number
          tax_amount: number
          shipping_amount: number
          total_amount: number
          discount_amount: number
          customer_email: string
          customer_phone: string | null
          shipping_address: Record<string, any>
          billing_address: Record<string, any> | null
          shipping_method: string | null
          tracking_number: string | null
          order_date: string
          confirmed_at: string | null
          shipped_at: string | null
          delivered_at: string | null
          notes: string | null
          internal_notes: string | null
          source: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          order_number: string
          user_id?: string | null
          status?: string
          payment_status?: string
          subtotal: number
          tax_amount?: number
          shipping_amount?: number
          total_amount: number
          discount_amount?: number
          customer_email: string
          customer_phone?: string | null
          shipping_address: Record<string, any>
          billing_address?: Record<string, any> | null
          shipping_method?: string | null
          tracking_number?: string | null
          order_date?: string
          confirmed_at?: string | null
          shipped_at?: string | null
          delivered_at?: string | null
          notes?: string | null
          internal_notes?: string | null
          source?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          order_number?: string
          user_id?: string | null
          status?: string
          payment_status?: string
          subtotal?: number
          tax_amount?: number
          shipping_amount?: number
          total_amount?: number
          discount_amount?: number
          customer_email?: string
          customer_phone?: string | null
          shipping_address?: Record<string, any>
          billing_address?: Record<string, any> | null
          shipping_method?: string | null
          tracking_number?: string | null
          order_date?: string
          confirmed_at?: string | null
          shipped_at?: string | null
          delivered_at?: string | null
          notes?: string | null
          internal_notes?: string | null
          source?: string
          updated_at?: string
        }
      }
      // Order items
      order_items: {
        Row: {
          id: string
          order_id: string
          product_id: string | null
          product_name: string
          product_sku: string | null
          quantity: number
          unit_price: number
          total_price: number
          created_at: string
        }
        Insert: {
          id?: string
          order_id: string
          product_id?: string | null
          product_name: string
          product_sku?: string | null
          quantity: number
          unit_price: number
          total_price: number
          created_at?: string
        }
        Update: {
          order_id?: string
          product_id?: string | null
          product_name?: string
          product_sku?: string | null
          quantity?: number
          unit_price?: number
          total_price?: number
        }
      }
      // Payments
      payments: {
        Row: {
          id: string
          order_id: string
          amount: number
          currency: string
          provider: string
          provider_transaction_id: string | null
          provider_reference: string | null
          status: string
          failure_reason: string | null
          provider_data: Record<string, any>
          initiated_at: string
          completed_at: string | null
          failed_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          order_id: string
          amount: number
          currency?: string
          provider?: string
          provider_transaction_id?: string | null
          provider_reference?: string | null
          status?: string
          failure_reason?: string | null
          provider_data?: Record<string, any>
          initiated_at?: string
          completed_at?: string | null
          failed_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          order_id?: string
          amount?: number
          currency?: string
          provider?: string
          provider_transaction_id?: string | null
          provider_reference?: string | null
          status?: string
          failure_reason?: string | null
          provider_data?: Record<string, any>
          initiated_at?: string
          completed_at?: string | null
          failed_at?: string | null
          updated_at?: string
        }
      }
      // Shopping carts
      shopping_carts: {
        Row: {
          id: string
          user_id: string | null
          session_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          session_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          user_id?: string | null
          session_id?: string | null
          updated_at?: string
        }
      }
      // Cart items
      cart_items: {
        Row: {
          id: string
          cart_id: string
          product_id: string
          quantity: number
          price_at_time: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          cart_id: string
          product_id: string
          quantity?: number
          price_at_time: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          cart_id?: string
          product_id?: string
          quantity?: number
          price_at_time?: number
          updated_at?: string
        }
      }
      // Inventory movements
      inventory_movements: {
        Row: {
          id: string
          product_id: string
          movement_type: string
          quantity_change: number
          previous_quantity: number
          new_quantity: number
          reference_type: string | null
          reference_id: string | null
          notes: string | null
          user_id: string | null
          created_at: string
        }
        Insert: {
          id?: string
          product_id: string
          movement_type: string
          quantity_change: number
          previous_quantity: number
          new_quantity: number
          reference_type?: string | null
          reference_id?: string | null
          notes?: string | null
          user_id?: string | null
          created_at?: string
        }
        Update: {
          product_id?: string
          movement_type?: string
          quantity_change?: number
          previous_quantity?: number
          new_quantity?: number
          reference_type?: string | null
          reference_id?: string | null
          notes?: string | null
          user_id?: string | null
        }
      }
      // System notifications
      system_notifications: {
        Row: {
          id: string
          type: string
          title: string
          message: string
          data: Record<string, any>
          is_read: boolean
          user_id: string | null
          created_at: string
        }
        Insert: {
          id?: string
          type: string
          title: string
          message: string
          data?: Record<string, any>
          is_read?: boolean
          user_id?: string | null
          created_at?: string
        }
        Update: {
          type?: string
          title?: string
          message?: string
          data?: Record<string, any>
          is_read?: boolean
          user_id?: string | null
        }
      }
      // Admin activities
      admin_activities: {
        Row: {
          id: string
          user_id: string | null
          action: string
          resource_type: string
          resource_id: string | null
          old_values: Record<string, any> | null
          new_values: Record<string, any> | null
          ip_address: string | null
          user_agent: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          action: string
          resource_type: string
          resource_id?: string | null
          old_values?: Record<string, any> | null
          new_values?: Record<string, any> | null
          ip_address?: string | null
          user_agent?: string | null
          created_at?: string
        }
        Update: {
          user_id?: string | null
          action?: string
          resource_type?: string
          resource_id?: string | null
          old_values?: Record<string, any> | null
          new_values?: Record<string, any> | null
          ip_address?: string | null
          user_agent?: string | null
        }
      }
    }
  }
} 