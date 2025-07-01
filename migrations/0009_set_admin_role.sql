-- Run this AFTER creating the admin user to set their role to admin
-- Replace 'USER_ID_HERE' with the actual user ID from Authentication -> Users

UPDATE profiles 
SET role = 'admin' 
WHERE email = 'admin@carthigan.com';

-- Re-enable RLS on profiles after admin user is set up
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY; 