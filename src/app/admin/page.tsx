'use client'

import { useEffect, useState } from 'react'
import { analyticsApi, realtimeApi, authApi } from '@/lib/api'
import { supabase } from '@/lib/supabase'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Package, 
  ShoppingCart, 
  DollarSign, 
  AlertTriangle,
  TrendingUp,
  Eye,
  ArrowUpRight,
  Activity
} from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface DashboardStats {
  totalProducts: number
  totalOrders: number
  totalRevenue: number
  lowStockProducts: number
  recentOrders: any[]
  topProducts: Array<{ product_id: string; product_name: string; total_sold: number }>
}

export default function AdminDashboard() {
  const router = useRouter()
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [isConnected, setIsConnected] = useState(false)
  const [authStatus, setAuthStatus] = useState<{user: any, isAdmin: boolean, error: string | null}>({
    user: null,
    isAdmin: false,
    error: null
  })

  useEffect(() => {
    checkAuthentication()
    loadDashboardData()
  }, [])

  const checkAuthentication = async () => {
    try {
      console.log("Checking authentication status...")
      const { data: { user } } = await supabase.auth.getUser()
      
      console.log("Current user:", user)
      
      let isAdmin = false
      let error = null
      
      if (user) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', user.id)
          .single()
          
        console.log("User profile:", profile)
        isAdmin = profile?.role === 'admin'
      } else {
        error = "No authenticated user found"
      }
      
      setAuthStatus({ user, isAdmin, error })
      
      // If not authenticated, redirect to login
      if (!user || !isAdmin) {
        console.log("Redirecting to login page...")
        router.push('/admin/login')
      }
    } catch (err: any) {
      console.error("Authentication check error:", err)
      setAuthStatus(prev => ({ ...prev, error: err.message || "Authentication check failed" }))
    }
  }

  const loadDashboardData = async () => {
    try {
      const response = await analyticsApi.getDashboardStats()
      if (response.success && response.data) {
        setStats(response.data)
      } else {
        console.error('Failed to load dashboard stats:', response.error)
      }
    } catch (error) {
      console.error('Error loading dashboard data:', error)
    } finally {
      setLoading(false)
    }
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-UG', {
      style: 'currency',
      currency: 'UGX',
      minimumFractionDigits: 0,
    }).format(amount)
  }

  if (authStatus.error) {
    return (
      <div className="p-8 bg-white rounded-md shadow">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Authentication Error</h2>
        <p className="mb-4">{authStatus.error}</p>
        <Button onClick={() => router.push('/admin/login')}>
          Go to Login
        </Button>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[...Array(4)].map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardContent className="p-6">
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                <div className="h-8 bg-gray-200 rounded w-3/4"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your store.</p>
        </div>
        
        <Button onClick={loadDashboardData} variant="outline" size="sm">
          Refresh
        </Button>
      </div>

      {/* Auth Status Debug (Remove in production) */}
      <Card>
        <CardHeader>
          <CardTitle>Authentication Status</CardTitle>
        </CardHeader>
        <CardContent>
          <p><strong>User ID:</strong> {authStatus.user?.id || 'Not logged in'}</p>
          <p><strong>Email:</strong> {authStatus.user?.email || 'N/A'}</p>
          <p><strong>Is Admin:</strong> {authStatus.isAdmin ? 'Yes' : 'No'}</p>
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Products</p>
                <p className="text-3xl font-bold text-gray-900">{stats?.totalProducts || 0}</p>
              </div>
              <Package className="h-8 w-8 text-blue-600" />
            </div>
            <div className="mt-4">
              <Link href="/admin/products">
                <Button variant="ghost" size="sm" className="w-full">
                  Manage Products <ArrowUpRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Orders</p>
                <p className="text-3xl font-bold text-gray-900">{stats?.totalOrders || 0}</p>
              </div>
              <ShoppingCart className="h-8 w-8 text-green-600" />
            </div>
            <div className="mt-4">
              <Link href="/admin/orders">
                <Button variant="ghost" size="sm" className="w-full">
                  View Orders <ArrowUpRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                <p className="text-3xl font-bold text-gray-900">
                  {formatCurrency(stats?.totalRevenue || 0)}
                </p>
              </div>
              <DollarSign className="h-8 w-8 text-yellow-600" />
            </div>
            <div className="mt-4 flex items-center text-sm">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-600">+12% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Low Stock Alerts</p>
                <p className="text-3xl font-bold text-gray-900">{stats?.lowStockProducts || 0}</p>
              </div>
              <AlertTriangle className={`h-8 w-8 ${stats?.lowStockProducts ? 'text-red-600' : 'text-gray-400'}`} />
            </div>
            <div className="mt-4">
              {stats?.lowStockProducts ? (
                <Badge variant="destructive" className="w-full justify-center">
                  Needs Attention
                </Badge>
              ) : (
                <Badge variant="outline" className="w-full justify-center">
                  All Good
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/admin/products/new">
              <Button className="w-full" variant="outline">
                <Package className="h-4 w-4 mr-2" />
                Add Product
              </Button>
            </Link>
            <Link href="/admin/blogs/new">
              <Button className="w-full" variant="outline">
                <Eye className="h-4 w-4 mr-2" />
                Write Blog Post
              </Button>
            </Link>
            <Link href="/admin/orders">
              <Button className="w-full" variant="outline">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Process Orders
              </Button>
            </Link>
            <Button className="w-full" variant="outline" onClick={loadDashboardData}>
              <Activity className="h-4 w-4 mr-2" />
              Refresh Data
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
