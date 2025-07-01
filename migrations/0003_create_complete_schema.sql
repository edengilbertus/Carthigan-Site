-- Migration: Complete E-commerce and Education Platform Schema
-- This creates all necessary tables for the full system

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =============================================
-- PRODUCT MANAGEMENT SYSTEM
-- =============================================

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

-- Product variants (for different sizes, colors, etc.)
CREATE TABLE IF NOT EXISTS product_variants (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id TEXT REFERENCES products(id) ON DELETE CASCADE,
  name TEXT NOT NULL, -- e.g., "Red 32GB", "Size M"
  sku TEXT UNIQUE NOT NULL,
  price INTEGER NOT NULL,
  student_price INTEGER,
  stock_quantity INTEGER DEFAULT 0,
  variant_attributes JSONB DEFAULT '{}', -- {"color": "red", "size": "32GB"}
  images TEXT[] DEFAULT '{}',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================
-- BLOG SYSTEM
-- =============================================

-- Blog posts
CREATE TABLE IF NOT EXISTS blogs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT NOT NULL, -- Rich text content
  excerpt TEXT, -- Short description
  category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
  author_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  
  -- SEO
  meta_title TEXT,
  meta_description TEXT,
  featured_image TEXT,
  images TEXT[] DEFAULT '{}', -- Additional images used in content
  
  -- Publishing
  status TEXT DEFAULT 'draft', -- 'draft', 'published', 'archived'
  published_at TIMESTAMP WITH TIME ZONE,
  is_featured BOOLEAN DEFAULT false,
  
  -- Engagement
  views INTEGER DEFAULT 0,
  likes INTEGER DEFAULT 0,
  
  -- Tags and categorization
  tags TEXT[] DEFAULT '{}',
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Blog categories (uses categories table with type='blog')
-- Blog tags
CREATE TABLE IF NOT EXISTS blog_tags (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT UNIQUE NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  color TEXT DEFAULT '#3B82F6', -- Hex color
  usage_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================
-- E-COMMERCE SYSTEM
-- =============================================

-- Shopping carts
CREATE TABLE IF NOT EXISTS shopping_carts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  session_id TEXT, -- For anonymous users
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id),
  UNIQUE(session_id)
);

-- Cart items
CREATE TABLE IF NOT EXISTS cart_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  cart_id UUID REFERENCES shopping_carts(id) ON DELETE CASCADE,
  product_id TEXT REFERENCES products(id) ON DELETE CASCADE,
  variant_id UUID REFERENCES product_variants(id) ON DELETE CASCADE, -- Optional
  quantity INTEGER NOT NULL DEFAULT 1,
  price_at_time INTEGER NOT NULL, -- Price when added to cart
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Orders (enhanced from existing schema)
CREATE TABLE IF NOT EXISTS orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  order_number TEXT UNIQUE NOT NULL, -- Human-readable order number
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  
  -- Order status
  status TEXT DEFAULT 'pending', -- 'pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled', 'refunded'
  payment_status TEXT DEFAULT 'pending', -- 'pending', 'paid', 'failed', 'refunded'
  
  -- Pricing
  subtotal INTEGER NOT NULL, -- Before tax and shipping
  tax_amount INTEGER DEFAULT 0,
  shipping_amount INTEGER DEFAULT 0,
  total_amount INTEGER NOT NULL,
  discount_amount INTEGER DEFAULT 0,
  
  -- Customer info
  customer_email TEXT NOT NULL,
  customer_phone TEXT,
  
  -- Shipping
  shipping_address JSONB NOT NULL,
  billing_address JSONB,
  shipping_method TEXT,
  tracking_number TEXT,
  
  -- Dates
  order_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  confirmed_at TIMESTAMP WITH TIME ZONE,
  shipped_at TIMESTAMP WITH TIME ZONE,
  delivered_at TIMESTAMP WITH TIME ZONE,
  
  -- Metadata
  notes TEXT,
  internal_notes TEXT, -- Admin-only notes
  source TEXT DEFAULT 'web', -- 'web', 'mobile', 'admin'
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Order items
CREATE TABLE IF NOT EXISTS order_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
  product_id TEXT REFERENCES products(id) ON DELETE SET NULL,
  variant_id UUID REFERENCES product_variants(id) ON DELETE SET NULL,
  
  -- Product snapshot at time of order
  product_name TEXT NOT NULL,
  product_sku TEXT,
  variant_name TEXT,
  
  quantity INTEGER NOT NULL,
  unit_price INTEGER NOT NULL, -- Price per item
  total_price INTEGER NOT NULL, -- quantity * unit_price
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================
-- PAYMENT SYSTEM
-- =============================================

-- Payment providers (for supporting multiple payment methods)
CREATE TABLE IF NOT EXISTS payment_providers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL, -- 'MTN Mobile Money', 'Airtel Money', 'Paystack', etc.
  slug TEXT UNIQUE NOT NULL,
  type TEXT NOT NULL, -- 'mobile_money', 'card', 'bank_transfer', 'crypto'
  is_active BOOLEAN DEFAULT true,
  configuration JSONB DEFAULT '{}', -- Provider-specific config
  fees JSONB DEFAULT '{}', -- Fee structure
  supported_currencies TEXT[] DEFAULT '{"UGX"}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Payments
CREATE TABLE IF NOT EXISTS payments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
  provider_id UUID REFERENCES payment_providers(id) ON DELETE SET NULL,
  
  -- Payment details
  amount INTEGER NOT NULL,
  currency TEXT DEFAULT 'UGX',
  provider_transaction_id TEXT, -- ID from payment provider
  provider_reference TEXT, -- Additional reference from provider
  
  -- Status tracking
  status TEXT DEFAULT 'pending', -- 'pending', 'processing', 'completed', 'failed', 'cancelled', 'refunded'
  failure_reason TEXT,
  
  -- Provider specific data
  provider_data JSONB DEFAULT '{}',
  
  -- Dates
  initiated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  completed_at TIMESTAMP WITH TIME ZONE,
  failed_at TIMESTAMP WITH TIME ZONE,
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Payment webhooks log (for debugging)
CREATE TABLE IF NOT EXISTS payment_webhooks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  provider_id UUID REFERENCES payment_providers(id) ON DELETE SET NULL,
  payment_id UUID REFERENCES payments(id) ON DELETE SET NULL,
  webhook_data JSONB NOT NULL,
  status TEXT DEFAULT 'received', -- 'received', 'processed', 'failed'
  processing_error TEXT,
  received_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  processed_at TIMESTAMP WITH TIME ZONE
);

-- =============================================
-- INVENTORY MANAGEMENT
-- =============================================

-- Inventory movements (for tracking stock changes)
CREATE TABLE IF NOT EXISTS inventory_movements (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id TEXT REFERENCES products(id) ON DELETE CASCADE,
  variant_id UUID REFERENCES product_variants(id) ON DELETE CASCADE, -- Optional
  
  -- Movement details
  movement_type TEXT NOT NULL, -- 'restock', 'sale', 'adjustment', 'return', 'damage'
  quantity_change INTEGER NOT NULL, -- Positive for increase, negative for decrease
  previous_quantity INTEGER NOT NULL,
  new_quantity INTEGER NOT NULL,
  
  -- Context
  reference_type TEXT, -- 'order', 'manual', 'supplier', 'return'
  reference_id TEXT, -- ID of related record (order_id, etc.)
  notes TEXT,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL, -- Who made the change
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================
-- ADMIN AND AUDIT SYSTEM
-- =============================================

-- Admin activity log
CREATE TABLE IF NOT EXISTS admin_activities (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  action TEXT NOT NULL, -- 'create', 'update', 'delete', 'login', 'logout'
  resource_type TEXT NOT NULL, -- 'product', 'order', 'blog', 'user'
  resource_id TEXT,
  old_values JSONB,
  new_values JSONB,
  ip_address INET,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- System notifications
CREATE TABLE IF NOT EXISTS system_notifications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  type TEXT NOT NULL, -- 'low_stock', 'new_order', 'payment_failed', 'new_user'
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  data JSONB DEFAULT '{}',
  is_read BOOLEAN DEFAULT false,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE, -- NULL for system-wide notifications
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================
-- INDEXES FOR PERFORMANCE
-- =============================================

-- Product indexes
CREATE INDEX IF NOT EXISTS idx_products_category_id ON products(category_id);
CREATE INDEX IF NOT EXISTS idx_products_type ON products(product_type);
CREATE INDEX IF NOT EXISTS idx_products_featured ON products(is_featured) WHERE is_featured = true;
CREATE INDEX IF NOT EXISTS idx_products_active ON products(is_active) WHERE is_active = true;
CREATE INDEX IF NOT EXISTS idx_products_stock_status ON products(stock_status);
CREATE INDEX IF NOT EXISTS idx_products_tags ON products USING GIN(tags);

-- Order indexes
CREATE INDEX IF NOT EXISTS idx_orders_user_id ON orders(user_id);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
CREATE INDEX IF NOT EXISTS idx_orders_order_date ON orders(order_date);
CREATE INDEX IF NOT EXISTS idx_orders_number ON orders(order_number);

-- Blog indexes
CREATE INDEX IF NOT EXISTS idx_blogs_category_id ON blogs(category_id);
CREATE INDEX IF NOT EXISTS idx_blogs_author_id ON blogs(author_id);
CREATE INDEX IF NOT EXISTS idx_blogs_status ON blogs(status);
CREATE INDEX IF NOT EXISTS idx_blogs_featured ON blogs(is_featured) WHERE is_featured = true;
CREATE INDEX IF NOT EXISTS idx_blogs_published_at ON blogs(published_at);
CREATE INDEX IF NOT EXISTS idx_blogs_slug ON blogs(slug);

-- Payment indexes
CREATE INDEX IF NOT EXISTS idx_payments_order_id ON payments(order_id);
CREATE INDEX IF NOT EXISTS idx_payments_status ON payments(status);
CREATE INDEX IF NOT EXISTS idx_payments_provider_id ON payments(provider_id);

-- =============================================
-- ROW LEVEL SECURITY POLICIES
-- =============================================

-- Enable RLS on all tables
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_variants ENABLE ROW LEVEL SECURITY;
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE shopping_carts ENABLE ROW LEVEL SECURITY;
ALTER TABLE cart_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE payment_providers ENABLE ROW LEVEL SECURITY;
ALTER TABLE payment_webhooks ENABLE ROW LEVEL SECURITY;
ALTER TABLE inventory_movements ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE system_notifications ENABLE ROW LEVEL SECURITY;

-- Public read policies (for products, categories, blogs)
CREATE POLICY "Anyone can view active categories" ON categories FOR SELECT TO PUBLIC 
  USING (is_active = true);

CREATE POLICY "Anyone can view active products" ON products FOR SELECT TO PUBLIC 
  USING (is_active = true);

CREATE POLICY "Anyone can view active product variants" ON product_variants FOR SELECT TO PUBLIC 
  USING (is_active = true);

CREATE POLICY "Anyone can view published blogs" ON blogs FOR SELECT TO PUBLIC 
  USING (status = 'published');

CREATE POLICY "Anyone can view blog tags" ON blog_tags FOR SELECT TO PUBLIC 
  USING (true);

CREATE POLICY "Anyone can view payment providers" ON payment_providers FOR SELECT TO PUBLIC 
  USING (is_active = true);

-- User-specific policies
CREATE POLICY "Users can manage their own cart" ON shopping_carts FOR ALL TO authenticated 
  USING (user_id = auth.uid()) WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can manage their cart items" ON cart_items FOR ALL TO authenticated 
  USING (cart_id IN (SELECT id FROM shopping_carts WHERE user_id = auth.uid()));

CREATE POLICY "Users can view their orders" ON orders FOR SELECT TO authenticated 
  USING (user_id = auth.uid());

CREATE POLICY "Users can view their order items" ON order_items FOR SELECT TO authenticated 
  USING (order_id IN (SELECT id FROM orders WHERE user_id = auth.uid()));

CREATE POLICY "Users can view their payments" ON payments FOR SELECT TO authenticated 
  USING (order_id IN (SELECT id FROM orders WHERE user_id = auth.uid()));

CREATE POLICY "Users can view their notifications" ON system_notifications FOR SELECT TO authenticated 
  USING (user_id = auth.uid() OR user_id IS NULL);

-- Admin policies (users with role 'admin')
CREATE POLICY "Admins can do everything on categories" ON categories FOR ALL TO authenticated 
  USING ((SELECT role FROM profiles WHERE id = auth.uid()) = 'admin');

CREATE POLICY "Admins can do everything on products" ON products FOR ALL TO authenticated 
  USING ((SELECT role FROM profiles WHERE id = auth.uid()) = 'admin');

CREATE POLICY "Admins can do everything on blogs" ON blogs FOR ALL TO authenticated 
  USING ((SELECT role FROM profiles WHERE id = auth.uid()) = 'admin');

CREATE POLICY "Admins can view all orders" ON orders FOR SELECT TO authenticated 
  USING ((SELECT role FROM profiles WHERE id = auth.uid()) = 'admin');

CREATE POLICY "Admins can update orders" ON orders FOR UPDATE TO authenticated 
  USING ((SELECT role FROM profiles WHERE id = auth.uid()) = 'admin');

CREATE POLICY "Admins can view all payments" ON payments FOR SELECT TO authenticated 
  USING ((SELECT role FROM profiles WHERE id = auth.uid()) = 'admin');

CREATE POLICY "Admins can view admin activities" ON admin_activities FOR SELECT TO authenticated 
  USING ((SELECT role FROM profiles WHERE id = auth.uid()) = 'admin');

-- =============================================
-- TRIGGERS FOR AUTOMATIC UPDATES
-- =============================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add updated_at triggers
CREATE TRIGGER update_categories_updated_at BEFORE UPDATE ON categories
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON products
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_blogs_updated_at BEFORE UPDATE ON blogs
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_orders_updated_at BEFORE UPDATE ON orders
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_shopping_carts_updated_at BEFORE UPDATE ON shopping_carts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_cart_items_updated_at BEFORE UPDATE ON cart_items
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_payments_updated_at BEFORE UPDATE ON payments
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Function to update product stock from inventory movements
CREATE OR REPLACE FUNCTION update_product_stock()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    -- Update main product stock
    IF NEW.variant_id IS NULL THEN
      UPDATE products 
      SET stock_quantity = NEW.new_quantity,
          stock_status = CASE 
            WHEN NEW.new_quantity = 0 THEN 'out_of_stock'
            WHEN NEW.new_quantity <= stock_threshold THEN 'low_stock'
            ELSE 'in_stock'
          END
      WHERE id = NEW.product_id;
    ELSE
      -- Update variant stock
      UPDATE product_variants 
      SET stock_quantity = NEW.new_quantity
      WHERE id = NEW.variant_id;
    END IF;
  END IF;
  RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_stock_from_movements AFTER INSERT ON inventory_movements
  FOR EACH ROW EXECUTE FUNCTION update_product_stock();

-- Function to log admin activities
CREATE OR REPLACE FUNCTION log_admin_activity()
RETURNS TRIGGER AS $$
BEGIN
  IF (SELECT role FROM profiles WHERE id = auth.uid()) = 'admin' THEN
    INSERT INTO admin_activities (user_id, action, resource_type, resource_id, old_values, new_values)
    VALUES (
      auth.uid(),
      TG_OP,
      TG_TABLE_NAME,
      COALESCE(NEW.id::text, OLD.id::text),
      CASE WHEN TG_OP = 'DELETE' THEN to_jsonb(OLD) ELSE NULL END,
      CASE WHEN TG_OP IN ('INSERT', 'UPDATE') THEN to_jsonb(NEW) ELSE NULL END
    );
  END IF;
  RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql;

-- Add admin activity logging to key tables
CREATE TRIGGER log_products_activity AFTER INSERT OR UPDATE OR DELETE ON products
  FOR EACH ROW EXECUTE FUNCTION log_admin_activity();

CREATE TRIGGER log_orders_activity AFTER INSERT OR UPDATE OR DELETE ON orders
  FOR EACH ROW EXECUTE FUNCTION log_admin_activity();

CREATE TRIGGER log_blogs_activity AFTER INSERT OR UPDATE OR DELETE ON blogs
  FOR EACH ROW EXECUTE FUNCTION log_admin_activity();

-- =============================================
-- ENABLE REALTIME FOR KEY TABLES
-- =============================================

-- Enable realtime replication
ALTER PUBLICATION supabase_realtime ADD TABLE products;
ALTER PUBLICATION supabase_realtime ADD TABLE inventory_movements;
ALTER PUBLICATION supabase_realtime ADD TABLE orders;
ALTER PUBLICATION supabase_realtime ADD TABLE payments;
ALTER PUBLICATION supabase_realtime ADD TABLE system_notifications;
ALTER PUBLICATION supabase_realtime ADD TABLE shopping_carts;
ALTER PUBLICATION supabase_realtime ADD TABLE cart_items;

-- =============================================
-- STORAGE BUCKETS
-- =============================================

-- Create storage buckets
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES 
  ('product-images', 'product-images', true, 10485760, ARRAY['image/jpeg', 'image/png', 'image/webp']::text[]),
  ('blog-images', 'blog-images', true, 10485760, ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif']::text[]),
  ('user-avatars', 'user-avatars', true, 2097152, ARRAY['image/jpeg', 'image/png', 'image/webp']::text[])
ON CONFLICT (id) DO NOTHING;

-- Storage policies
CREATE POLICY "Anyone can view product images" ON storage.objects FOR SELECT TO PUBLIC 
  USING (bucket_id = 'product-images');

CREATE POLICY "Anyone can view blog images" ON storage.objects FOR SELECT TO PUBLIC 
  USING (bucket_id = 'blog-images');

CREATE POLICY "Anyone can view user avatars" ON storage.objects FOR SELECT TO PUBLIC 
  USING (bucket_id = 'user-avatars');

-- Upload policies (admins and authenticated users)
CREATE POLICY "Admins can upload product images" ON storage.objects FOR INSERT TO authenticated 
  WITH CHECK (bucket_id = 'product-images' AND (SELECT role FROM profiles WHERE id = auth.uid()) = 'admin');

CREATE POLICY "Admins can upload blog images" ON storage.objects FOR INSERT TO authenticated 
  WITH CHECK (bucket_id = 'blog-images' AND (SELECT role FROM profiles WHERE id = auth.uid()) = 'admin');

CREATE POLICY "Users can upload their avatars" ON storage.objects FOR INSERT TO authenticated 
  WITH CHECK (bucket_id = 'user-avatars' AND auth.uid()::text = (storage.foldername(name))[1]);

-- =============================================
-- SEED DATA
-- =============================================

-- Insert default categories
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

-- Insert blog categories
INSERT INTO categories (name, slug, type, description, sort_order) VALUES
  ('Tech Tutorials', 'tech-tutorials', 'blog', 'Step-by-step technical tutorials', 1),
  ('Company News', 'company-news', 'blog', 'Company updates and announcements', 2),
  ('Product Reviews', 'product-reviews', 'blog', 'Product reviews and comparisons', 3),
  ('Project Showcase', 'project-showcase', 'blog', 'Community project showcases', 4),
  ('Industry Insights', 'industry-insights', 'blog', 'Electronics industry insights', 5)
ON CONFLICT (slug) DO NOTHING;

-- Insert payment providers
INSERT INTO payment_providers (name, slug, type, configuration, fees, is_active) VALUES
  ('MTN Mobile Money', 'mtn-mobile-money', 'mobile_money', '{"currency": "UGX", "country": "UG"}', '{"percentage": 2.5, "minimum": 500}', true),
  ('Airtel Money', 'airtel-money', 'mobile_money', '{"currency": "UGX", "country": "UG"}', '{"percentage": 2.5, "minimum": 500}', true),
  ('Paystack', 'paystack', 'card', '{"currencies": ["UGX", "USD"], "countries": ["UG"]}', '{"percentage": 3.9, "fixed": 100}', false)
ON CONFLICT (slug) DO NOTHING;

-- Note: Admin user profile will be created automatically when admin user is created in auth.users
-- The create_profile_for_new_user() trigger will handle this automatically 