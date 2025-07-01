-- Re-enable RLS after product migration
-- Run this AFTER the product migration is complete

-- Re-enable RLS on products table
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Re-enable RLS on categories table
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
