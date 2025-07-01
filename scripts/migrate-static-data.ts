import * as dotenv from 'dotenv'
import { createClient } from '@supabase/supabase-js'
import { allProducts } from '../src/lib/data/unified-products'

// Load environment variables
dotenv.config({ path: '.env.local' })

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

console.log('🔍 Environment check:')
console.log('SUPABASE_URL:', supabaseUrl ? '✅ Found' : '❌ Missing')
console.log('SUPABASE_SERVICE_KEY:', supabaseServiceKey ? '✅ Found' : '❌ Missing')

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase environment variables')
  console.error('Make sure .env.local contains:')
  console.error('- NEXT_PUBLIC_SUPABASE_URL')
  console.error('- SUPABASE_SERVICE_ROLE_KEY')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

// Map static product types to database product types
const mapProductType = (staticType: string): string => {
  const mapping: Record<string, string> = {
    'electronics': 'electronics',
    'development-board': 'dev-board', 
    'mcu-chip': 'microcontroller',
    'tool': 'tool',
    'educational-kit': 'education',
    'sensor-module': 'sensor',
    'power-component': 'power',
    'audio-video': 'audio-video',
    '3d-printing': '3d-printing'
  }
  return mapping[staticType] || staticType
}

// Convert static product to database format
const convertToDbFormat = (product: any) => {
  return {
    id: product.id,
    name: product.name,
    description: product.description,
    price: Math.round(product.price),
    student_price: product.studentPrice ? Math.round(product.studentPrice) : null,
    sku: product.id,
    product_type: mapProductType(product.type),
    subcategory: product.subcategory || null,
    stock_quantity: product.stockLevel || 100,
    stock_status: product.inStock ? 'in_stock' : 'out_of_stock',
    features: product.features || product.keyFeatures || [],
    images: product.image ? [product.image] : [],
    specifications: product.specifications || {},
    tags: product.tags || [],
    is_active: true,
    is_featured: false
  }
}

async function migrateProducts() {
  console.log('🚀 Starting product migration...')
  console.log(`📊 Found ${allProducts.length} products to migrate`)

  let successCount = 0
  let errorCount = 0
  const errors: string[] = []

  // Process products in batches of 50
  const batchSize = 50
  const batches = []
  
  for (let i = 0; i < allProducts.length; i += batchSize) {
    batches.push(allProducts.slice(i, i + batchSize))
  }

  console.log(`📦 Processing ${batches.length} batches of ${batchSize} products each`)

  for (let batchIndex = 0; batchIndex < batches.length; batchIndex++) {
    const batch = batches[batchIndex]
    console.log(`\n🔄 Processing batch ${batchIndex + 1}/${batches.length}...`)

    const dbProducts = batch.map(convertToDbFormat)

    try {
      const { data, error } = await supabase
        .from('products')
        .upsert(dbProducts, { 
          onConflict: 'id',
          ignoreDuplicates: false 
        })
        .select('id, name')

      if (error) {
        console.error(`❌ Batch ${batchIndex + 1} error:`, error.message)
        errors.push(`Batch ${batchIndex + 1}: ${error.message}`)
        errorCount += batch.length
      } else {
        console.log(`✅ Batch ${batchIndex + 1} success: ${batch.length} products`)
        successCount += batch.length
      }
    } catch (err) {
      console.error(`❌ Batch ${batchIndex + 1} exception:`, err)
      errors.push(`Batch ${batchIndex + 1}: ${err}`)
      errorCount += batch.length
    }

    // Add small delay between batches
    await new Promise(resolve => setTimeout(resolve, 100))
  }

  console.log('\n📈 Migration Summary:')
  console.log(`✅ Successfully migrated: ${successCount} products`)
  console.log(`❌ Failed: ${errorCount} products`)
  
  if (errors.length > 0) {
    console.log('\n🔍 Errors:')
    errors.forEach(error => console.log(`  - ${error}`))
  }

  // Show statistics by product type
  console.log('\n📊 Products by Type:')
  const typeStats = allProducts.reduce((acc, product) => {
    const dbType = mapProductType(product.type)
    acc[dbType] = (acc[dbType] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  Object.entries(typeStats).forEach(([type, count]) => {
    console.log(`  - ${type}: ${count} products`)
  })

  return { successCount, errorCount, errors }
}

// Run the migration
if (require.main === module) {
  migrateProducts()
    .then((result) => {
      if (result.errorCount === 0) {
        console.log('\n🎉 Migration completed successfully!')
        process.exit(0)
      } else {
        console.log('\n⚠️  Migration completed with errors')
        process.exit(1)
      }
    })
    .catch((error) => {
      console.error('\n💥 Migration failed:', error)
      process.exit(1)
    })
}

export { migrateProducts }