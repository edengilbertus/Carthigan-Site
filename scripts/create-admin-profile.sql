-- Create admin profile for existing auth user
-- Run this in Supabase Dashboard → SQL Editor

-- First, find the user ID from auth.users table
-- Go to Authentication → Users in Supabase Dashboard and copy the user ID for admin@carthigan.com
-- Then replace 'YOUR_USER_ID_HERE' below with the actual ID

-- Create the profile with admin role
INSERT INTO profiles (id, email, full_name, role)
VALUES (
  'YOUR_USER_ID_HERE', -- Replace with actual user ID from Authentication tab
  'admin@carthigan.com',
  'Carthigan Admin',
  'admin'
);

-- Alternative: If you can't find the user ID easily, use this query to create profile for all auth users
-- This will create profiles for any auth.users that don't have a profile yet
INSERT INTO profiles (id, email, full_name, role)
SELECT 
  id,
  email,
  COALESCE(raw_user_meta_data->>'full_name', 'Admin User') as full_name,
  CASE 
    WHEN email = 'admin@carthigan.com' THEN 'admin'
    ELSE 'customer'
  END as role
FROM auth.users
WHERE id NOT IN (SELECT id FROM profiles)
  AND email = 'admin@carthigan.com';

-- Verify the profile was created
SELECT * FROM profiles WHERE email = 'admin@carthigan.com'; 