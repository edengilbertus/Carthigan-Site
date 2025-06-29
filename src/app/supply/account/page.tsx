'use client'

import { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { 
  User, 
  ShoppingBag, 
  Package, 
  CreditCard, 
  Settings,
  Edit,
  Save,
  Eye,
  Heart
} from 'lucide-react'

export default function AccountPage() {
  const { user, login, logout } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [loginForm, setLoginForm] = useState({ email: '', password: '' })
  const [signupForm, setSignupForm] = useState({ name: '', email: '', password: '', confirmPassword: '' })
  const [activeTab, setActiveTab] = useState('login')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await login(loginForm.email, loginForm.password)
    } catch (error) {
      console.error('Login failed:', error)
    }
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    if (signupForm.password !== signupForm.confirmPassword) {
      alert('Passwords do not match')
      return
    }
    console.log('Signup:', signupForm)
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-surface py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-display font-bold text-on-surface mb-2">
                Welcome to Carthigan Supply
              </h1>
              <p className="text-on-surface/60">
                Sign in to your account or create a new one to get started
              </p>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <Card>
                  <CardHeader>
                    <CardTitle>Sign In</CardTitle>
                    <CardDescription>
                      Enter your credentials to access your account
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleLogin} className="space-y-4">
                      <Input
                        type="email"
                        placeholder="Email address"
                        value={loginForm.email}
                        onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                        required
                      />
                      <Input
                        type="password"
                        placeholder="Password"
                        value={loginForm.password}
                        onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                        required
                      />
                      <Button type="submit" className="w-full">
                        Sign In
                      </Button>
                    </form>
                    <div className="mt-4 text-sm text-center">
                      <p className="text-on-surface/60">Demo accounts:</p>
                      <p className="text-primary">eden@carthigan.com / demo123</p>
                      <p className="text-primary">student@demo.com / demo123</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="signup">
                <Card>
                  <CardHeader>
                    <CardTitle>Create Account</CardTitle>
                    <CardDescription>
                      Join Carthigan Supply to access exclusive features
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSignup} className="space-y-4">
                      <Input
                        type="text"
                        placeholder="Full name"
                        value={signupForm.name}
                        onChange={(e) => setSignupForm({ ...signupForm, name: e.target.value })}
                        required
                      />
                      <Input
                        type="email"
                        placeholder="Email address"
                        value={signupForm.email}
                        onChange={(e) => setSignupForm({ ...signupForm, email: e.target.value })}
                        required
                      />
                      <Input
                        type="password"
                        placeholder="Password"
                        value={signupForm.password}
                        onChange={(e) => setSignupForm({ ...signupForm, password: e.target.value })}
                        required
                      />
                      <Input
                        type="password"
                        placeholder="Confirm password"
                        value={signupForm.confirmPassword}
                        onChange={(e) => setSignupForm({ ...signupForm, confirmPassword: e.target.value })}
                        required
                      />
                      <Button type="submit" className="w-full">
                        Create Account
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-surface py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-display font-bold text-on-surface mb-2">
              Account Dashboard
            </h1>
            <p className="text-on-surface/60">
              Manage your profile, orders, and preferences
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{user.name}</h3>
                    <p className="text-sm text-on-surface/60">{user.email}</p>
                  </div>
                </div>
                <Button onClick={logout} variant="outline" className="w-full">
                  Sign Out
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">ORD-001</p>
                      <p className="text-sm text-on-surface/60">Arduino Kit</p>
                    </div>
                    <Badge>Delivered</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">ORD-002</p>
                      <p className="text-sm text-on-surface/60">Raspberry Pi</p>
                    </div>
                    <Badge variant="secondary">Processing</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    View All Orders
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Heart className="w-4 h-4 mr-2" />
                    Wishlist
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Settings className="w-4 h-4 mr-2" />
                    Account Settings
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
