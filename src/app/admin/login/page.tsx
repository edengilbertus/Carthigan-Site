'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { AlertCircle } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert'

export default function AdminLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [connectionStatus, setConnectionStatus] = useState<'checking' | 'connected' | 'error'>('checking')

  // Check Supabase connection on page load
  useEffect(() => {
    const checkConnection = async () => {
      try {
        // Simple test query to verify connection
        const { error } = await supabase
          .from('profiles')
          .select('count')
          .limit(1)
        
        if (error) {
          console.error('Supabase connection error:', error)
          setConnectionStatus('error')
          setError(`Database connection failed: ${error.message}. Make sure Supabase is running.`)
        } else {
          setConnectionStatus('connected')
        }
      } catch (err: any) {
        console.error('Unexpected connection error:', err)
        setConnectionStatus('error')
        setError(`Connection error: ${err.message}. Make sure Supabase is running and configured.`)
      }
    }

    checkConnection()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      // Skip authentication if connection failed
      if (connectionStatus === 'error') {
        throw new Error('Cannot authenticate while database connection is down')
      }

      // Authenticate using Supabase
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password
      })

      if (error) throw error

      // Fetch user profile to check role
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) throw new Error('Authentication failed')

      console.log('Authenticated user:', user.id, user.email)

      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .single()

      console.log('Profile query result:', { profile, profileError })

      // Verify user is an admin
      if (profileError || !profile) {
        console.error('Profile fetch error:', profileError)
        throw new Error(`Profile not found or inaccessible. ${profileError?.message || 'Please check if profile exists in database.'}`)
      }

      if (profile.role !== 'admin') {
        await supabase.auth.signOut() // Sign out if not admin
        throw new Error(`You do not have admin privileges. Current role: ${profile.role}`)
      }

      // Success - redirect to admin dashboard
      router.push('/admin')
      
    } catch (err: any) {
      console.error('Login error:', err)
      setError(err.message || 'Authentication failed')
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Admin Login</CardTitle>
          <CardDescription>
            Enter your credentials to access the admin dashboard
          </CardDescription>
          
          {/* Connection status indicator */}
          {connectionStatus === 'checking' && (
            <div className="flex items-center text-amber-600 text-sm mt-2">
              <div className="animate-pulse bg-amber-500 rounded-full h-2 w-2 mr-2"></div>
              Checking database connection...
            </div>
          )}
          
          {connectionStatus === 'connected' && (
            <div className="flex items-center text-green-600 text-sm mt-2">
              <div className="bg-green-500 rounded-full h-2 w-2 mr-2"></div>
              Database connected
            </div>
          )}
          
          {connectionStatus === 'error' && (
            <div className="flex items-center text-red-600 text-sm mt-2">
              <div className="bg-red-500 rounded-full h-2 w-2 mr-2"></div>
              Database connection failed
            </div>
          )}
        </CardHeader>
        <CardContent>
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@carthigan.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={connectionStatus === 'error' || isLoading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={connectionStatus === 'error' || isLoading}
              />
            </div>
            <Button 
              type="submit" 
              className="w-full" 
              disabled={connectionStatus === 'error' || connectionStatus === 'checking' || isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </Button>
          </form>

          {/* Connection troubleshooting guide */}
          {connectionStatus === 'error' && (
            <div className="mt-6 p-4 bg-gray-50 rounded-md text-sm">
              <h4 className="font-semibold mb-2">Troubleshooting Steps:</h4>
              <ol className="list-decimal list-inside space-y-1">
                <li>Ensure Supabase is running locally (<code>npx supabase start</code>)</li>
                <li>Check your <code>.env.local</code> file for correct credentials</li>
                <li>Try refreshing the page</li>
                <li>Check browser console for specific error messages</li>
              </ol>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link href="/" className="text-sm text-gray-500 hover:text-gray-800">
            Return to homepage
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
} 