"use client"

import { AuthProvider } from '@/contexts/AuthContext'
import { StudentDashboard } from '@/components/dashboard/StudentDashboard'

export default function DashboardPage() {
  return (
    <AuthProvider>
      <StudentDashboard />
    </AuthProvider>
  )
}
