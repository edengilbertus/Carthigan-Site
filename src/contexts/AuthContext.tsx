"use client"

import React, { createContext, useContext, useEffect, useState } from 'react'

interface User {
  id: string
  email: string
  name: string
  created_at: string
}

interface Profile {
  id: string
  user_id: string
  full_name: string
  email: string
  enrollment_date: string
  course_count: number
}

interface AuthContextType {
  user: User | null
  profile: Profile | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  signUp: (email: string, password: string, fullName: string) => Promise<{ success: boolean; error?: string }>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Demo users for development
const DEMO_USERS = [
  {
    id: 'eden-gilbert-kiseka',
    email: 'eden@carthigan.com',
    name: 'Eden Gilbert Kiseka',
    password: 'demo123', // In real app, this would be hashed
    created_at: '2024-01-01T00:00:00.000Z'
  },
  {
    id: 'demo-student',
    email: 'student@demo.com', 
    name: 'Demo Student',
    password: 'demo123',
    created_at: '2024-01-15T00:00:00.000Z'
  }
]

const DEMO_PROFILES = [
  {
    id: 'profile-eden',
    user_id: 'eden-gilbert-kiseka',
    full_name: 'Eden Gilbert Kiseka',
    email: 'eden@carthigan.com',
    enrollment_date: '2024-01-01',
    course_count: 3
  },
  {
    id: 'profile-demo',
    user_id: 'demo-student', 
    full_name: 'Demo Student',
    email: 'student@demo.com',
    enrollment_date: '2024-01-15',
    course_count: 1
  }
]

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in from localStorage
    const checkExistingSession = () => {
      try {
        const storedUser = localStorage.getItem('demo_user')
        const storedProfile = localStorage.getItem('demo_profile')
        
        if (storedUser && storedProfile) {
          setUser(JSON.parse(storedUser))
          setProfile(JSON.parse(storedProfile))
        }
      } catch (error) {
        console.error('Error loading session:', error)
      } finally {
        setLoading(false)
      }
    }

    checkExistingSession()
  }, [])

  const signIn = async (email: string, password: string) => {
    setLoading(true)
    
    try {
      // Find user in demo users
      const demoUser = DEMO_USERS.find(u => u.email === email && u.password === password)
      
      if (!demoUser) {
        return { success: false, error: 'Invalid email or password' }
      }

      const userProfile = DEMO_PROFILES.find(p => p.user_id === demoUser.id)
      
      if (!userProfile) {
        return { success: false, error: 'Profile not found' }
      }

      const { password: _, ...userWithoutPassword } = demoUser
      
      // Store in localStorage for demo
      localStorage.setItem('demo_user', JSON.stringify(userWithoutPassword))
      localStorage.setItem('demo_profile', JSON.stringify(userProfile))
      
      setUser(userWithoutPassword)
      setProfile(userProfile)
      
      return { success: true }
    } catch (error) {
      console.error('Sign in error:', error)
      return { success: false, error: 'An unexpected error occurred' }
    } finally {
      setLoading(false)
    }
  }

  const signUp = async (email: string, password: string, fullName: string) => {
    setLoading(true)
    
    try {
      // Check if user already exists
      const existingUser = DEMO_USERS.find(u => u.email === email)
      if (existingUser) {
        return { success: false, error: 'User already exists' }
      }

      // Create new demo user
      const newUser = {
        id: `user-${Date.now()}`,
        email,
        name: fullName,
        created_at: new Date().toISOString()
      }

      const newProfile = {
        id: `profile-${Date.now()}`,
        user_id: newUser.id,
        full_name: fullName,
        email,
        enrollment_date: new Date().toISOString().split('T')[0],
        course_count: 0
      }

      // Store in localStorage for demo
      localStorage.setItem('demo_user', JSON.stringify(newUser))
      localStorage.setItem('demo_profile', JSON.stringify(newProfile))
      
      setUser(newUser)
      setProfile(newProfile)
      
      return { success: true }
    } catch (error) {
      console.error('Sign up error:', error)
      return { success: false, error: 'An unexpected error occurred' }
    } finally {
      setLoading(false)
    }
  }

  const signOut = async () => {
    try {
      localStorage.removeItem('demo_user')
      localStorage.removeItem('demo_profile')
      setUser(null)
      setProfile(null)
    } catch (error) {
      console.error('Sign out error:', error)
    }
  }

  const value: AuthContextType = {
    user,
    profile,
    loading,
    signIn,
    signUp,
    signOut,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
