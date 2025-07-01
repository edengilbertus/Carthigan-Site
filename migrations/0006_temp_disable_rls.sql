-- Temporary script to disable RLS for product migration
-- Run this BEFORE migration, then run 0007_enable_rls.sql AFTER

-- Temporarily disable RLS on products table for migration
ALTER TABLE products DISABLE ROW LEVEL SECURITY;

-- Also disable RLS on categories in case it's needed  
ALTER TABLE categories DISABLE ROW LEVEL SECURITY;
