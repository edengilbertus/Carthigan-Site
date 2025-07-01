import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  try {
    // Check if admin user exists in profiles table
    const { data: adminProfile, error: profileError } = await supabase
      .from('profiles')
      .select('*')
      .eq('email', 'admin@carthigan.com')
      .single()

    if (profileError && profileError.code !== 'PGRST116') { // PGRST116 = no rows returned
      return NextResponse.json({
        status: 'error',
        message: 'Error checking profiles table',
        error: profileError
      })
    }

    // Check auth.users table using service role (if available)
    // Note: This won't work with anon key, but let's try to get some info
    const { data: { users }, error: authError } = await supabase.auth.admin.listUsers()
    
    let authUserExists = false
    let authUserInfo = null
    
    if (!authError && users) {
      const adminAuthUser = users.find(u => u.email === 'admin@carthigan.com')
      if (adminAuthUser) {
        authUserExists = true
        authUserInfo = {
          id: adminAuthUser.id,
          email: adminAuthUser.email,
          confirmed: adminAuthUser.email_confirmed_at !== null,
          created: adminAuthUser.created_at
        }
      }
    }

    return NextResponse.json({
      status: 'success',
      adminUserStatus: {
        profileExists: !!adminProfile,
        profileData: adminProfile || null,
        authUserExists,
        authUserInfo,
        recommendation: !adminProfile 
          ? 'Admin user does not exist. Create it in Supabase Dashboard → Authentication → Users'
          : adminProfile.role !== 'admin'
          ? 'User exists but role is not admin. Run migration 0011_set_admin_role_final.sql'
          : 'User exists with admin role. Try resetting password in Supabase Dashboard.'
      }
    })
  } catch (err: any) {
    return NextResponse.json({
      status: 'error',
      message: 'Failed to check admin user',
      error: err.message
    })
  }
} 