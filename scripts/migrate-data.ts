#!/usr/bin/env npx tsx

import { supabase } from '../src/lib/supabase'
import { allProducts } from '../src/lib/data/unified-products'

// Category mappings
const categoryMappings = {
  'electronics': '550e8400-e29b-41d4-a716-446655440001',
  'dev-boards': '550e8400-e29b-41d4-a716-446655440002',
  'microcontrollers': '550e8400-e29b-41d4-a716-446655440003',
  'tools': '550e8400-e29b-41d4-a716-446655440004',
  'education': '550e8400-e29b-41d4-a716-446655440005',
  'sensors': '550e8400-e29b-41d4-a716-446655440006',
  'power': '550e8400-e29b-41d4-a716-446655440007',
  'audio-video': '550e8400-e29b-41d4-a716-446655440008',
  '3d-printing': '550e8400-e29b-41d4-a716-446655440009'
}

async function migrateProducts() {
  console.log('🚀 Starting product migration...')
  console.log(`📦 Found ${allProducts.length} products to migrate`)

  const migrationProducts = allProducts.map((product, index) => {
    // Map category slug to category UUID
    const categorySlug = product.category.toLowerCase().replace(/[^a-z0-9]/g, '-')
    const categoryId = categoryMappings[categorySlug as keyof typeof categoryMappings] || null

    // Generate stock quantity based on product type
    const stockQuantity = Math.floor(Math.random() * 100) + 10
    const stockStatus = stockQuantity > 20 ? 'in_stock' : stockQuantity > 5 ? 'low_stock' : 'out_of_stock'

    return {
      id: product.id,
      name: product.name,
      description: product.description,
      category_id: categoryId,
      subcategory: product.subcategory || product.category,
      price: Math.round(product.price * 100), // Convert to cents
      student_price: product.studentPrice ? Math.round(product.studentPrice * 100) : null,
      sku: `SKU-${product.id.toUpperCase()}`,
      stock_quantity: stockQuantity,
      stock_status: stockStatus,
      stock_threshold: 10,
      images: product.image ? [product.image] : [],
      specifications: product.specifications || {},
      features: product.features || [],
      compatibility: product.compatibility || [],
      projects: product.projects || [],
      tags: product.tags || [],
      rating: product.rating || 0,
      review_count: product.reviews || 0,
      product_type: product.type,
      lead_time: product.leadTime || 'In Stock',
      supplier: product.supplier || null,
      target_audience: product.targetAudience || null,
      difficulty_level: product.difficultyLevel || null,
      estimated_project_time: product.estimatedProjectTime || null,
      age_range: product.ageRange || null,
      what_you_learn: product.whatYouLearn || [],
      kit_contents: product.kitContents || [],
      meta_title: `${product.name} - Carthigan Electronics`,
      meta_description: product.description.substring(0, 160),
      is_featured: product.rating > 4.5 || Math.random() > 0.8,
      is_active: true,
      sort_order: index
    }
  })

  // Batch insert products
  const batchSize = 50
  let inserted = 0
  let errors = 0

  for (let i = 0; i < migrationProducts.length; i += batchSize) {
    const batch = migrationProducts.slice(i, i + batchSize)
    
    try {
      const { data, error } = await supabase
        .from('products')
        .upsert(batch, { onConflict: 'id' })

      if (error) {
        console.error(`❌ Error inserting batch ${Math.floor(i / batchSize) + 1}:`, error)
        errors += batch.length
      } else {
        inserted += batch.length
        console.log(`✅ Inserted batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(migrationProducts.length / batchSize)} (${batch.length} products)`)
      }
    } catch (err) {
      console.error(`💥 Exception in batch ${Math.floor(i / batchSize) + 1}:`, err)
      errors += batch.length
    }
  }

  console.log(`\n📊 Migration Summary:`)
  console.log(`✅ Successfully inserted: ${inserted} products`)
  console.log(`❌ Errors: ${errors} products`)
  console.log(`📦 Total: ${migrationProducts.length} products`)

  return { inserted, errors, total: migrationProducts.length }
}

async function createDefaultAdmin() {
  console.log('\n👤 Creating default admin user...')

  try {
    // Check if admin already exists
    const { data: existingAdmin } = await supabase
      .from('profiles')
      .select('*')
      .eq('role', 'admin')
      .single()

    if (existingAdmin) {
      console.log('✅ Admin user already exists:', existingAdmin.email)
      return
    }

    console.log('✅ Admin user will be created manually via Supabase Auth')
    console.log('📧 Email: admin@carthigan.com')
    console.log('🔑 Password: CarteiganAdmin2025!')
  } catch (err) {
    console.error('💥 Exception checking admin user:', err)
  }
}

async function runMigration() {
  console.log('🎯 Carthigan Data Migration Starting...\n')

  try {
    // Test database connection
    const { data, error } = await supabase.from('categories').select('count(*)')
    if (error) {
      console.error('❌ Database connection failed:', error)
      process.exit(1)
    }
    console.log('✅ Database connection successful\n')

    // Run migrations
    const productResults = await migrateProducts()
    await createDefaultAdmin()

    console.log('\n🎉 Migration completed successfully!')
    console.log(`📊 Final Summary:`)
    console.log(`   Products migrated: ${productResults.inserted}/${productResults.total}`)
    console.log('\n🚀 Your Carthigan system is ready!')
    console.log('   Visit: http://localhost:8000/admin')

  } catch (error) {
    console.error('💥 Migration failed:', error)
    process.exit(1)
  }
}

// Run migration if this file is executed directly
if (require.main === module) {
  runMigration()
}

export { runMigration, migrateProducts, createDefaultAdmin }
