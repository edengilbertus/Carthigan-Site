-- Complete Admin Fix Script
-- Run this entire script in Supabase Dashboard → SQL Editor

-- Step 1: Check if RLS is enabled
SELECT 
  schemaname,
  tablename,
  rowsecurity
FROM pg_tables 
WHERE tablename = 'profiles';

-- Step 2: Temporarily disable RLS to do maintenance
ALTER TABLE profiles DISABLE ROW LEVEL SECURITY;

-- Step 3: Check what's in the profiles table
SELECT * FROM profiles;

-- Step 4: Get the user ID from auth.users
SELECT id, email, created_at 
FROM auth.users 
WHERE email = 'admin@carthigan.com';

-- Step 5: Delete any existing profile for admin (to start fresh)
DELETE FROM profiles WHERE email = 'admin@carthigan.com';

-- Step 6: Create the admin profile with the correct user ID
INSERT INTO profiles (id, email, full_name, role, created_at, updated_at)
SELECT 
  id,
  email,
  'Carthigan Admin',
  'admin',
  NOW(),
  NOW()
FROM auth.users 
WHERE email = 'admin@carthigan.com';

-- Step 7: Verify the profile was created correctly
SELECT * FROM profiles WHERE email = 'admin@carthigan.com';

-- Step 8: Re-enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Step 9: Drop ALL existing policies to start fresh
DO $$ 
DECLARE
    pol record;
BEGIN
    FOR pol IN 
        SELECT policyname 
        FROM pg_policies 
        WHERE tablename = 'profiles'
    LOOP
        EXECUTE format('DROP POLICY IF EXISTS %I ON profiles', pol.policyname);
    END LOOP;
END $$;

-- Step 10: Create a simple policy that just works
CREATE POLICY "Enable read access for authenticated users on their own profile" 
ON profiles FOR SELECT 
TO authenticated 
USING (auth.uid() = id);

-- Step 11: Final check - this should return the admin profile
SELECT id, email, role FROM profiles WHERE email = 'admin@carthigan.com';

-- You should see:
-- id: (some UUID)
-- email: admin@carthigan.com  
-- role: admin

-- If everything looks good, you can now login! 