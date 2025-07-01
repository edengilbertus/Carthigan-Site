-- Migration: Essential tables for product migration
-- Creates only the core tables needed to run the product migration

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Categories table (for both products and blogs)
CREATE TABLE IF NOT EXISTS categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  parent_id UUID REFERENCES categories(id) ON DELETE SET NULL,
  type TEXT NOT NULL DEFAULT 'product', -- 'product' or 'blog'
  image_url TEXT,
  is_active BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Products table (comprehensive)
CREATE TABLE IF NOT EXISTS products (
  id TEXT PRIMARY KEY, -- Preserve existing IDs from static data
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
  subcategory TEXT,
  price INTEGER NOT NULL, -- Store in cents
  student_price INTEGER, -- Special pricing for students
  sku TEXT UNIQUE,
  
  -- Inventory management
  stock_quantity INTEGER DEFAULT 0,
  stock_status TEXT DEFAULT 'in_stock', -- 'in_stock', 'low_stock', 'out_of_stock', 'discontinued'
  stock_threshold INTEGER DEFAULT 10, -- Alert when stock falls below this
  
  -- Product details
  images TEXT[] DEFAULT '{}',
  specifications JSONB DEFAULT '{}',
  features TEXT[] DEFAULT '{}',
  compatibility TEXT[] DEFAULT '{}',
  projects TEXT[] DEFAULT '{}',
  tags TEXT[] DEFAULT '{}',
  
  -- Ratings and reviews
  rating DECIMAL(2,1) DEFAULT 0.0,
  review_count INTEGER DEFAULT 0,
  
  -- Product metadata
  product_type TEXT NOT NULL, -- 'electronics', 'development-board', etc.
  lead_time TEXT DEFAULT 'In Stock',
  supplier TEXT,
  weight_grams INTEGER,
  dimensions_cm TEXT, -- JSON string like "10x5x2"
  
  -- Educational specific
  target_audience TEXT,
  difficulty_level TEXT,
  estimated_project_time TEXT,
  age_range TEXT,
  what_you_learn TEXT[],
  kit_contents TEXT[],
  
  -- SEO and marketing
  meta_title TEXT,
  meta_description TEXT,
  is_featured BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0,
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Basic indexes
CREATE INDEX IF NOT EXISTS idx_products_category_id ON products(category_id);
CREATE INDEX IF NOT EXISTS idx_products_type ON products(product_type);
CREATE INDEX IF NOT EXISTS idx_products_active ON products(is_active) WHERE is_active = true;

-- Enable RLS (but with simple policies)
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Simple public read policies
CREATE POLICY "Anyone can view active categories" ON categories FOR SELECT TO PUBLIC 
  USING (is_active = true);

CREATE POLICY "Anyone can view active products" ON products FOR SELECT TO PUBLIC 
  USING (is_active = true);

-- Insert default categories (needed for product migration)
INSERT INTO categories (id, name, slug, type, description, sort_order) VALUES
  ('550e8400-e29b-41d4-a716-446655440001', 'Electronics & Components', 'electronics', 'product', 'Electronic components and circuits', 1),
  ('550e8400-e29b-41d4-a716-446655440002', 'Development Boards', 'dev-boards', 'product', 'Microcontroller and development boards', 2),
  ('550e8400-e29b-41d4-a716-446655440003', 'MCU Chips & SoCs', 'microcontrollers', 'product', 'Microcontroller chips and SoCs', 3),
  ('550e8400-e29b-41d4-a716-446655440004', 'Tools & Equipment', 'tools', 'product', 'Electronics tools and equipment', 4),
  ('550e8400-e29b-41d4-a716-446655440005', 'Educational Kits', 'education', 'product', 'Learning and educational kits', 5),
  ('550e8400-e29b-41d4-a716-446655440006', 'Sensors & Modules', 'sensors', 'product', 'Sensors and breakout modules', 6),
  ('550e8400-e29b-41d4-a716-446655440007', 'Power Components', 'power', 'product', 'Power supplies and management', 7),
  ('550e8400-e29b-41d4-a716-446655440008', 'Audio & Video', 'audio-video', 'product', 'Audio and video equipment', 8),
  ('550e8400-e29b-41d4-a716-446655440009', '3D Printing', '3d-printing', 'product', '3D printing equipment and materials', 9)
ON CONFLICT (id) DO NOTHING;
