-- Fix admin role for existing user
-- Run this in Supabase Dashboard → SQL Editor

-- First, let's check the current state
SELECT id, email, role FROM profiles WHERE email = 'admin@carthigan.com';

-- Update the role to admin
UPDATE profiles 
SET role = 'admin' 
WHERE email = 'admin@carthigan.com';

-- Verify the update worked
SELECT id, email, role FROM profiles WHERE email = 'admin@carthigan.com';

-- You should see role = 'admin' now! 