"use client"

import React, { createContext, useContext, useEffect, useState } from 'react'

interface User {
  id: string
  email: string
  name?: string
}

interface AuthContextType {
  user: User | null
  profile: any | null
  loading: boolean
  signUp: (email: string, password: string, fullName: string) => Promise<any>
  signIn: (email: string, password: string) => Promise<any>
  signOut: () => Promise<void>
  enrollInCourse: (courseId: string) => Promise<any>
  getUserEnrollments: () => Promise<any[]>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<any | null>(null)
  const [loading, setLoading] = useState(false)
  const [enrollments, setEnrollments] = useState<any[]>([])

  useEffect(() => {
    // Check for stored user
    const storedUser = localStorage.getItem('carthigan_user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

  const signUp = async (email: string, password: string, fullName: string) => {
    try {
      // Simulate signup
      const newUser = {
        id: Math.random().toString(36).substr(2, 9),
        email,
        name: fullName
      }
      setUser(newUser)
      localStorage.setItem('carthigan_user', JSON.stringify(newUser))
      return { data: { user: newUser }, error: null }
    } catch (error) {
      return { data: null, error: { message: 'Signup failed' } }
    }
  }

  const signIn = async (email: string, password: string) => {
    try {
      // Simulate login
      const user = {
        id: Math.random().toString(36).substr(2, 9),
        email,
        name: email.split('@')[0]
      }
      setUser(user)
      localStorage.setItem('carthigan_user', JSON.stringify(user))
      return { data: { user }, error: null }
    } catch (error) {
      return { data: null, error: { message: 'Login failed' } }
    }
  }

  const signOut = async () => {
    setUser(null)
    setEnrollments([])
    localStorage.removeItem('carthigan_user')
    localStorage.removeItem('carthigan_enrollments')
  }

  const enrollInCourse = async (courseId: string) => {
    if (!user) throw new Error('User not authenticated')

    try {
      const newEnrollment = {
        id: Math.random().toString(36).substr(2, 9),
        user_id: user.id,
        course_id: courseId,
        progress: 0,
        enrolled_at: new Date().toISOString(),
        status: 'enrolled',
        payment_status: 'completed'
      }

      const updatedEnrollments = [...enrollments, newEnrollment]
      setEnrollments(updatedEnrollments)
      localStorage.setItem('carthigan_enrollments', JSON.stringify(updatedEnrollments))

      return { enrollment: newEnrollment }
    } catch (error) {
      throw error
    }
  }

  const getUserEnrollments = async () => {
    if (!user) return []

    try {
      const stored = localStorage.getItem('carthigan_enrollments')
      if (stored) {
        const enrollmentData = JSON.parse(stored)
        setEnrollments(enrollmentData)
        return enrollmentData
      }
      return []
    } catch (error) {
      console.error('Error fetching enrollments:', error)
      return []
    }
  }

  const value = {
    user,
    profile,
    loading,
    signUp,
    signIn,
    signOut,
    enrollInCourse,
    getUserEnrollments,
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
