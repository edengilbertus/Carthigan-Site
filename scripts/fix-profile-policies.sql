-- Fix profile RLS policies for admin access
-- Run this in Supabase Dashboard → SQL Editor

-- First, let's check if the profile exists
SELECT * FROM profiles WHERE email = 'admin@carthigan.com';

-- Check current RLS policies
SELECT 
  schemaname,
  tablename,
  policyname,
  permissive,
  roles,
  cmd,
  qual,
  with_check
FROM pg_policies 
WHERE tablename = 'profiles';

-- Drop all existing policies on profiles table to start fresh
DROP POLICY IF EXISTS "Users can view their own profile" ON profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON profiles;
DROP POLICY IF EXISTS "Users can insert their own profile" ON profiles;
DROP POLICY IF EXISTS "Admins can view all profiles" ON profiles;
DROP POLICY IF EXISTS "Admins can update all profiles" ON profiles;
DROP POLICY IF EXISTS "System can insert profiles" ON profiles;

-- Create new, working policies
-- Allow users to view their own profile
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT TO authenticated
  USING (auth.uid() = id);

-- Allow users to update their own profile
CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Allow system to create profiles (for trigger)
CREATE POLICY "System can create profiles" ON profiles
  FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = id);

-- Allow admins to view all profiles
CREATE POLICY "Admins can view all profiles" ON profiles
  FOR SELECT TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.role = 'admin'
    )
  );

-- Test the policies work
SELECT * FROM profiles WHERE email = 'admin@carthigan.com';

-- If that doesn't work, temporarily disable RLS to verify the profile exists
-- ALTER TABLE profiles DISABLE ROW LEVEL SECURITY;
-- SELECT * FROM profiles WHERE email = 'admin@carthigan.com';
-- ALTER TABLE profiles ENABLE ROW LEVEL SECURITY; 