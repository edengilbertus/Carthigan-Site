-- Fix admin_activities table RLS policy
-- This table is likely used by triggers to log admin actions

-- Temporarily disable RLS on admin_activities table
ALTER TABLE admin_activities DISABLE ROW LEVEL SECURITY;

-- Or create a permissive policy for admins
DROP POLICY IF EXISTS "Admins can manage activities" ON admin_activities;

CREATE POLICY "Admins can manage activities" 
ON admin_activities FOR ALL
USING (
  EXISTS (
    SELECT 1 FROM profiles 
    WHERE profiles.id = auth.uid() 
    AND profiles.role = 'admin'
  )
);

-- Re-enable RLS
ALTER TABLE admin_activities ENABLE ROW LEVEL SECURITY; 