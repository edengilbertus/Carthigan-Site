-- Final step: Set admin role after user creation
-- Run this AFTER creating the admin user successfully

-- Update the admin user role
UPDATE profiles 
SET role = 'admin' 
WHERE email = 'admin@carthigan.com';

-- Verify the admin user exists
SELECT 
  id,
  email, 
  full_name, 
  role,
  created_at
FROM profiles 
WHERE role = 'admin';

-- Show success message
SELECT 'Admin user setup complete! You can now access /admin dashboard' as status; 