import { supabase, Database } from '../supabase'
import { v4 as uuidv4 } from 'uuid'

// Type definitions for API responses
export type ApiResponse<T> = {
  data: T | null
  error: string | null
  success: boolean
}

export type PaginatedResponse<T> = ApiResponse<{
  items: T[]
  totalCount: number
  page: number
  limit: number
  totalPages: number
}>

// Database row types
type Product = Database['public']['Tables']['products']['Row']
type ProductInsert = Database['public']['Tables']['products']['Insert']
type ProductUpdate = Database['public']['Tables']['products']['Update']

type Blog = Database['public']['Tables']['blogs']['Row']
type BlogInsert = Database['public']['Tables']['blogs']['Insert']
type BlogUpdate = Database['public']['Tables']['blogs']['Update']

type Category = Database['public']['Tables']['categories']['Row']
type CategoryInsert = Database['public']['Tables']['categories']['Insert']

type Order = Database['public']['Tables']['orders']['Row']
type OrderInsert = Database['public']['Tables']['orders']['Insert']
type OrderUpdate = Database['public']['Tables']['orders']['Update']

type Profile = Database['public']['Tables']['profiles']['Row']

// =============================================
// UTILITY FUNCTIONS
// =============================================

const handleApiResponse = <T>(result: any, errorMessage: string): ApiResponse<T> => {
  if (result.error) {
    console.error(`${errorMessage}:`, result.error)
    return {
      data: null,
      error: result.error.message || errorMessage,
      success: false
    }
  }
  return {
    data: result.data,
    error: null,
    success: true
  }
}

const generateOrderNumber = (): string => {
  const now = new Date()
  const year = now.getFullYear().toString().slice(-2)
  const month = (now.getMonth() + 1).toString().padStart(2, '0')
  const day = now.getDate().toString().padStart(2, '0')
  const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0')
  return `CG${year}${month}${day}${random}`
}

const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

// =============================================
// AUTHENTICATION & USER MANAGEMENT
// =============================================

export const authApi = {
  async getCurrentUser(): Promise<ApiResponse<Profile | null>> {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      return { data: null, error: null, success: true }
    }

    const result = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single()

    return handleApiResponse(result, 'Failed to get current user')
  },

  async signUp(email: string, password: string, fullName: string): Promise<ApiResponse<any>> {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName
        }
      }
    })

    if (error) {
      return { data: null, error: error.message, success: false }
    }

    // Create profile
    if (data.user) {
      const profileResult = await supabase
        .from('profiles')
        .insert({
          id: data.user.id,
          email,
          full_name: fullName,
          role: 'customer'
        })

      if (profileResult.error) {
        console.error('Failed to create profile:', profileResult.error)
      }
    }

    return { data, error: null, success: true }
  },

  async signIn(email: string, password: string): Promise<ApiResponse<any>> {
    const result = await supabase.auth.signInWithPassword({
      email,
      password
    })

    return handleApiResponse(result, 'Failed to sign in')
  },

  async signOut(): Promise<ApiResponse<void>> {
    const result = await supabase.auth.signOut()
    return handleApiResponse(result, 'Failed to sign out')
  },

  async updateProfile(updates: Partial<Profile>): Promise<ApiResponse<Profile>> {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      return { data: null, error: 'Not authenticated', success: false }
    }

    const result = await supabase
      .from('profiles')
      .update(updates)
      .eq('id', user.id)
      .select()
      .single()

    return handleApiResponse(result, 'Failed to update profile')
  },

  async isAdmin(): Promise<boolean> {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return false

    const { data } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single()

    return data?.role === 'admin'
  }
}

// =============================================
// PRODUCT MANAGEMENT
// =============================================

export const productApi = {
  async getProducts(params?: {
    page?: number
    limit?: number
    category?: string
    search?: string
    featured?: boolean
    type?: string
  }): Promise<PaginatedResponse<Product>> {
    const page = params?.page || 1
    const limit = params?.limit || 20
    const offset = (page - 1) * limit

    let query = supabase
      .from('products')
      .select('*', { count: 'exact' })
      .eq('is_active', true)

    if (params?.category) {
      query = query.eq('subcategory', params.category)
    }

    if (params?.search) {
      query = query.or(`name.ilike.%${params.search}%,description.ilike.%${params.search}%`)
    }

    if (params?.featured) {
      query = query.eq('is_featured', true)
    }

    if (params?.type) {
      query = query.eq('product_type', params.type)
    }

    query = query
      .order('sort_order', { ascending: true })
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1)

    const result = await query

    if (result.error) {
      return {
        data: null,
        error: result.error.message,
        success: false
      }
    }

    const totalCount = result.count || 0
    const totalPages = Math.ceil(totalCount / limit)

    return {
      data: {
        items: result.data || [],
        totalCount,
        page,
        limit,
        totalPages
      },
      error: null,
      success: true
    }
  },

  async getProduct(id: string): Promise<ApiResponse<Product>> {
    const result = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .eq('is_active', true)
      .single()

    return handleApiResponse(result, 'Failed to get product')
  },

  async getProductForAdmin(id: string): Promise<ApiResponse<Product>> {
    const isAdmin = await authApi.isAdmin()
    if (!isAdmin) {
      return { data: null, error: 'Unauthorized', success: false }
    }

    const result = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single()

    return handleApiResponse(result, 'Failed to get product')
  },

  async createProduct(product: ProductInsert): Promise<ApiResponse<Product>> {
    const isAdmin = await authApi.isAdmin()
    if (!isAdmin) {
      return { data: null, error: 'Unauthorized', success: false }
    }

    const result = await supabase
      .from('products')
      .insert(product)
      .select()
      .single()

    return handleApiResponse(result, 'Failed to create product')
  },

  async updateProduct(id: string, updates: ProductUpdate): Promise<ApiResponse<Product>> {
    const isAdmin = await authApi.isAdmin()
    if (!isAdmin) {
      return { data: null, error: 'Unauthorized', success: false }
    }

    const result = await supabase
      .from('products')
      .update(updates)
      .eq('id', id)
      .select()
      .single()

    return handleApiResponse(result, 'Failed to update product')
  },

  async deleteProduct(id: string): Promise<ApiResponse<void>> {
    const isAdmin = await authApi.isAdmin()
    if (!isAdmin) {
      return { data: null, error: 'Unauthorized', success: false }
    }

    const result = await supabase
      .from('products')
      .update({ is_active: false })
      .eq('id', id)

    return handleApiResponse(result, 'Failed to delete product')
  },

  async updateStock(productId: string, newQuantity: number, movementType: string, notes?: string): Promise<ApiResponse<void>> {
    const isAdmin = await authApi.isAdmin()
    if (!isAdmin) {
      return { data: null, error: 'Unauthorized', success: false }
    }

    // Get current stock
    const { data: product } = await supabase
      .from('products')
      .select('stock_quantity')
      .eq('id', productId)
      .single()

    if (!product) {
      return { data: null, error: 'Product not found', success: false }
    }

    const previousQuantity = product.stock_quantity
    const quantityChange = newQuantity - previousQuantity

    // Create inventory movement record
    const { data: { user } } = await supabase.auth.getUser()
    
    const movementResult = await supabase
      .from('inventory_movements')
      .insert({
        product_id: productId,
        movement_type: movementType,
        quantity_change: quantityChange,
        previous_quantity: previousQuantity,
        new_quantity: newQuantity,
        reference_type: 'manual',
        notes,
        user_id: user?.id || null
      })

    return handleApiResponse(movementResult, 'Failed to update stock')
  }
}

// =============================================
// CATEGORY MANAGEMENT
// =============================================

export const categoryApi = {
  async getCategories(type: 'product' | 'blog' = 'product'): Promise<ApiResponse<Category[]>> {
    const result = await supabase
      .from('categories')
      .select('*')
      .eq('type', type)
      .eq('is_active', true)
      .order('sort_order', { ascending: true })

    return handleApiResponse(result, 'Failed to get categories')
  },

  async createCategory(category: CategoryInsert): Promise<ApiResponse<Category>> {
    const isAdmin = await authApi.isAdmin()
    if (!isAdmin) {
      return { data: null, error: 'Unauthorized', success: false }
    }

    const result = await supabase
      .from('categories')
      .insert(category)
      .select()
      .single()

    return handleApiResponse(result, 'Failed to create category')
  },

  async updateCategory(id: string, updates: Partial<Category>): Promise<ApiResponse<Category>> {
    const isAdmin = await authApi.isAdmin()
    if (!isAdmin) {
      return { data: null, error: 'Unauthorized', success: false }
    }

    const result = await supabase
      .from('categories')
      .update(updates)
      .eq('id', id)
      .select()
      .single()

    return handleApiResponse(result, 'Failed to update category')
  }
}

// =============================================
// BLOG MANAGEMENT
// =============================================

export const blogApi = {
  async getBlogs(params?: {
    page?: number
    limit?: number
    category?: string
    status?: string
    featured?: boolean
  }): Promise<PaginatedResponse<Blog>> {
    const page = params?.page || 1
    const limit = params?.limit || 10
    const offset = (page - 1) * limit

    let query = supabase
      .from('blogs')
      .select('*', { count: 'exact' })

    if (params?.status) {
      query = query.eq('status', params.status)
    } else {
      query = query.eq('status', 'published')
    }

    if (params?.featured) {
      query = query.eq('is_featured', true)
    }

    query = query
      .order('published_at', { ascending: false })
      .range(offset, offset + limit - 1)

    const result = await query

    if (result.error) {
      return {
        data: null,
        error: result.error.message,
        success: false
      }
    }

    const totalCount = result.count || 0
    const totalPages = Math.ceil(totalCount / limit)

    return {
      data: {
        items: result.data || [],
        totalCount,
        page,
        limit,
        totalPages
      },
      error: null,
      success: true
    }
  },

  async getBlog(slug: string): Promise<ApiResponse<Blog>> {
    const result = await supabase
      .from('blogs')
      .select('*')
      .eq('slug', slug)
      .eq('status', 'published')
      .single()

    // Increment view count
    if (result.data) {
      await supabase
        .from('blogs')
        .update({ views: (result.data.views || 0) + 1 })
        .eq('id', result.data.id)
    }

    return handleApiResponse(result, 'Failed to get blog post')
  },

  async createBlog(blog: BlogInsert): Promise<ApiResponse<Blog>> {
    const isAdmin = await authApi.isAdmin()
    if (!isAdmin) {
      return { data: null, error: 'Unauthorized', success: false }
    }

    const { data: { user } } = await supabase.auth.getUser()
    
    const blogData = {
      ...blog,
      author_id: user?.id,
      slug: blog.slug || generateSlug(blog.title),
      published_at: blog.status === 'published' ? new Date().toISOString() : null
    }

    const result = await supabase
      .from('blogs')
      .insert(blogData)
      .select()
      .single()

    return handleApiResponse(result, 'Failed to create blog post')
  },

  async updateBlog(id: string, updates: BlogUpdate): Promise<ApiResponse<Blog>> {
    const isAdmin = await authApi.isAdmin()
    if (!isAdmin) {
      return { data: null, error: 'Unauthorized', success: false }
    }

    const result = await supabase
      .from('blogs')
      .update(updates)
      .eq('id', id)
      .select()
      .single()

    return handleApiResponse(result, 'Failed to update blog post')
  },

  async deleteBlog(id: string): Promise<ApiResponse<void>> {
    const isAdmin = await authApi.isAdmin()
    if (!isAdmin) {
      return { data: null, error: 'Unauthorized', success: false }
    }

    const result = await supabase
      .from('blogs')
      .delete()
      .eq('id', id)

    return handleApiResponse(result, 'Failed to delete blog post')
  }
}

// =============================================
// ORDER MANAGEMENT
// =============================================

export const orderApi = {
  async getOrders(params?: {
    page?: number
    limit?: number
    status?: string
    userId?: string
  }): Promise<PaginatedResponse<Order>> {
    const page = params?.page || 1
    const limit = params?.limit || 20
    const offset = (page - 1) * limit

    let query = supabase
      .from('orders')
      .select('*', { count: 'exact' })

    if (params?.status) {
      query = query.eq('status', params.status)
    }

    if (params?.userId) {
      query = query.eq('user_id', params.userId)
    } else {
      // For non-admin users, only show their own orders
      const isAdmin = await authApi.isAdmin()
      if (!isAdmin) {
        const { data: { user } } = await supabase.auth.getUser()
        if (user) {
          query = query.eq('user_id', user.id)
        }
      }
    }

    query = query
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1)

    const result = await query

    if (result.error) {
      return {
        data: null,
        error: result.error.message,
        success: false
      }
    }

    const totalCount = result.count || 0
    const totalPages = Math.ceil(totalCount / limit)

    return {
      data: {
        items: result.data || [],
        totalCount,
        page,
        limit,
        totalPages
      },
      error: null,
      success: true
    }
  },

  async getOrder(id: string): Promise<ApiResponse<Order>> {
    const result = await supabase
      .from('orders')
      .select('*, order_items(*, products(name, images)), payments(*)')
      .eq('id', id)
      .single()

    return handleApiResponse(result, 'Failed to get order')
  },

  async createOrder(orderData: {
    items: Array<{ productId: string; quantity: number; price: number }>
    shippingAddress: Record<string, any>
    customerEmail: string
    customerPhone?: string
  }): Promise<ApiResponse<Order>> {
    const { data: { user } } = await supabase.auth.getUser()
    
    const subtotal = orderData.items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    const shippingAmount = 5000 // UGX 5,000 flat shipping
    const totalAmount = subtotal + shippingAmount

    const order: OrderInsert = {
      order_number: generateOrderNumber(),
      user_id: user?.id || null,
      status: 'pending',
      payment_status: 'pending',
      subtotal,
      shipping_amount: shippingAmount,
      total_amount: totalAmount,
      customer_email: orderData.customerEmail,
      customer_phone: orderData.customerPhone,
      shipping_address: orderData.shippingAddress
    }

    const orderResult = await supabase
      .from('orders')
      .insert(order)
      .select()
      .single()

    if (orderResult.error) {
      return handleApiResponse(orderResult, 'Failed to create order')
    }

    // Insert order items
    const orderItems = orderData.items.map(item => ({
      order_id: orderResult.data.id,
      product_id: item.productId,
      product_name: '', // Will be filled by trigger
      quantity: item.quantity,
      unit_price: item.price,
      total_price: item.price * item.quantity
    }))

    const itemsResult = await supabase
      .from('order_items')
      .insert(orderItems)

    if (itemsResult.error) {
      console.error('Failed to create order items:', itemsResult.error)
    }

    return handleApiResponse(orderResult, 'Failed to create order')
  },

  async updateOrderStatus(id: string, status: string, notes?: string): Promise<ApiResponse<Order>> {
    const isAdmin = await authApi.isAdmin()
    if (!isAdmin) {
      return { data: null, error: 'Unauthorized', success: false }
    }

    const updates: OrderUpdate = { status }
    
    if (notes) {
      updates.internal_notes = notes
    }

    // Set timestamp fields based on status
    switch (status) {
      case 'confirmed':
        updates.confirmed_at = new Date().toISOString()
        break
      case 'shipped':
        updates.shipped_at = new Date().toISOString()
        break
      case 'delivered':
        updates.delivered_at = new Date().toISOString()
        break
    }

    const result = await supabase
      .from('orders')
      .update(updates)
      .eq('id', id)
      .select()
      .single()

    return handleApiResponse(result, 'Failed to update order status')
  }
}

// =============================================
// FILE UPLOAD
// =============================================

export const uploadApi = {
  async uploadFile(file: File, bucket: string, path?: string): Promise<ApiResponse<string>> {
    const isAdmin = await authApi.isAdmin()
    if (!isAdmin && bucket !== 'user-avatars') {
      return { data: null, error: 'Unauthorized', success: false }
    }

    const fileExt = file.name.split('.').pop()
    const fileName = `${uuidv4()}.${fileExt}`
    const filePath = path ? `${path}/${fileName}` : fileName

    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(filePath, file)

    if (error) {
      return { data: null, error: error.message, success: false }
    }

    const { data: { publicUrl } } = supabase.storage
      .from(bucket)
      .getPublicUrl(data.path)

    return { data: publicUrl, error: null, success: true }
  },

  async deleteFile(bucket: string, path: string): Promise<ApiResponse<void>> {
    const isAdmin = await authApi.isAdmin()
    if (!isAdmin) {
      return { data: null, error: 'Unauthorized', success: false }
    }

    const result = await supabase.storage
      .from(bucket)
      .remove([path])

    return handleApiResponse(result, 'Failed to delete file')
  }
}

// =============================================
// REAL-TIME SUBSCRIPTIONS
// =============================================

export const realtimeApi = {
  subscribeToInventory(callback: (payload: any) => void) {
    return supabase
      .channel('inventory-changes')
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'inventory_movements'
      }, callback)
      .subscribe()
  },

  subscribeToOrders(callback: (payload: any) => void) {
    return supabase
      .channel('order-changes')
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'orders'
      }, callback)
      .subscribe()
  },

  subscribeToNotifications(userId: string, callback: (payload: any) => void) {
    return supabase
      .channel('notifications')
      .on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: 'system_notifications',
        filter: `user_id=eq.${userId}`
      }, callback)
      .subscribe()
  },

  unsubscribe(subscription: any) {
    supabase.removeChannel(subscription)
  }
}

// =============================================
// DASHBOARD ANALYTICS
// =============================================

export const analyticsApi = {
  async getDashboardStats(): Promise<ApiResponse<{
    totalProducts: number
    totalOrders: number
    totalRevenue: number
    lowStockProducts: number
    recentOrders: Order[]
    topProducts: Array<{ product_id: string; product_name: string; total_sold: number }>
  }>> {
    const isAdmin = await authApi.isAdmin()
    if (!isAdmin) {
      return { data: null, error: 'Unauthorized', success: false }
    }

    try {
      // Get total products
      const { count: totalProducts } = await supabase
        .from('products')
        .select('*', { count: 'exact', head: true })
        .eq('is_active', true)

      // Get total orders
      const { count: totalOrders } = await supabase
        .from('orders')
        .select('*', { count: 'exact', head: true })

      // Get total revenue
      const { data: revenueData } = await supabase
        .from('orders')
        .select('total_amount')
        .eq('payment_status', 'paid')

      const totalRevenue = revenueData?.reduce((sum, order) => sum + order.total_amount, 0) || 0

      // Get low stock products
      const { count: lowStockProducts } = await supabase
        .from('products')
        .select('*', { count: 'exact', head: true })
        .eq('stock_status', 'low_stock')

      // Get recent orders
      const { data: recentOrders } = await supabase
        .from('orders')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(5)

      // Get top products (this would require a more complex query in production)
      const { data: topProducts } = await supabase
        .from('order_items')
        .select('product_id, product_name, quantity')
        .limit(5)

      // Aggregate top products
      const productSales: Record<string, { product_name: string; total_sold: number }> = {}
      topProducts?.forEach(item => {
        if (productSales[item.product_id]) {
          productSales[item.product_id].total_sold += item.quantity
        } else {
          productSales[item.product_id] = {
            product_name: item.product_name,
            total_sold: item.quantity
          }
        }
      })

      const topProductsArray = Object.entries(productSales)
        .map(([product_id, data]) => ({ product_id, ...data }))
        .sort((a, b) => b.total_sold - a.total_sold)
        .slice(0, 5)

      return {
        data: {
          totalProducts: totalProducts || 0,
          totalOrders: totalOrders || 0,
          totalRevenue,
          lowStockProducts: lowStockProducts || 0,
          recentOrders: recentOrders || [],
          topProducts: topProductsArray
        },
        error: null,
        success: true
      }
    } catch (error: any) {
      return {
        data: null,
        error: error.message || 'Failed to get dashboard stats',
        success: false
      }
    }
  }
} 