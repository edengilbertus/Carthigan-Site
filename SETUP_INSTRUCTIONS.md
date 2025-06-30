# 🚀 Carthigan Admin System - Complete Setup Guide

## ✅ Prerequisites (Already Done)
- ✅ Supabase CLI installed
- ✅ TypeScript runner (tsx) installed  
- ✅ Database schema ready
- ✅ Data migration script ready
- ✅ Admin components built

## 🎯 **STEP 1: Set Up Supabase Project**

### 1.1 Create Supabase Project
1. Go to **https://supabase.com**
2. Click **"New Project"**
3. Choose a name: `carthigan-electronics`
4. Set a strong password for your database
5. Select a region close to Uganda (e.g., Frankfurt)
6. Click **"Create new project"** (takes ~2 minutes)

### 1.2 Get Your Credentials
1. Go to **Settings** → **API**
2. Copy your **Project URL** (looks like: `https://your-project-id.supabase.co`)
3. Copy your **anon public key** (starts with `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`)

### 1.3 Update Environment Variables
Replace the content of `.env.local` with your actual credentials:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-actual-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-actual-anon-key-here
```

## 🎯 **STEP 2: Apply Database Schema**

Run this command to create all database tables:

```bash
# Apply the complete database schema
supabase db reset
```

If that doesn't work, you can also apply the migration directly via the Supabase dashboard:
1. Go to **SQL Editor** in your Supabase dashboard
2. Copy the contents of `migrations/0003_create_complete_schema.sql`
3. Paste and run it

## 🎯 **STEP 3: Migrate Product Data**

Run the data migration to transfer all 250+ products:

```bash
# Run the product data migration
npx tsx scripts/migrate-data.ts
```

This will:
- ✅ Migrate all 250+ products to database
- ✅ Create proper categories and relationships
- ✅ Generate realistic stock quantities
- ✅ Set up inventory tracking

## 🎯 **STEP 4: Create Admin User**

### 4.1 Create Auth User
1. In Supabase Dashboard, go to **Authentication** → **Users**
2. Click **"Add User"**
3. Fill in:
   - **Email**: `admin@carthigan.com`
   - **Password**: `CarteiganAdmin2025!`
   - **Auto Confirm User**: ✅ (check this box)
4. Click **"Create User"**

### 4.2 Set Admin Role
1. Go to **Database** → **Table Editor** → **profiles**
2. Click **"Insert"** → **"Insert row"**
3. Fill in:
   - **id**: (copy the user ID from the `auth.users` table)
   - **email**: `admin@carthigan.com`
   - **full_name**: `Carthigan Admin`
   - **role**: `admin`
4. Click **"Save"**

## 🎯 **STEP 5: Start Your System**

```bash
# Start the development server
npm run dev
```

## 🎉 **You're Ready!**

Your admin panel is now available at:
**http://localhost:8000/admin**

**Login Credentials:**
- Email: `admin@carthigan.com`
- Password: `CarteiganAdmin2025!`

## 🎛️ **What You Can Do Now**

### **Dashboard** (`/admin`)
- View real-time analytics
- Monitor inventory and orders
- Quick access to all admin functions

### **Product Management** (`/admin/products`)
- View all 250+ migrated products
- Add new products with images
- Update inventory and pricing
- Manage categories

### **Blog Management** (`/admin/blogs`)
- Create blog posts with rich text editor
- Upload and embed images
- Publish immediately or save as draft
- Organize with categories

### **Order Management** (`/admin/orders`)
- View and track customer orders
- Update order status
- Monitor payment status
- Add internal notes

## 🔧 **Troubleshooting**

### Database Connection Issues
If you get connection errors:
1. Check your `.env.local` credentials
2. Ensure your Supabase project is active
3. Try refreshing the page

### Migration Fails
If the data migration fails:
1. Check your internet connection
2. Verify Supabase credentials are correct
3. Try running the migration again

### Admin Login Issues
If admin login doesn't work:
1. Verify you created the auth user correctly
2. Check the profiles table has the admin role set
3. Try logging out and back in

## 🚀 **Next Steps**

Once everything is working:

1. **Test the system** thoroughly
2. **Add real product images** via the admin panel
3. **Create your first blog post**
4. **Set up payment providers** (MTN Mobile Money, etc.)
5. **Deploy to production** when ready

## 📞 **Support**

If you encounter any issues:
1. Check the browser console for errors
2. Verify all environment variables are set
3. Ensure Supabase project is properly configured
4. Try the troubleshooting steps above

**Your complete e-commerce and education platform is ready! 🎉** 