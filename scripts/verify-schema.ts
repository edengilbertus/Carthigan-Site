#!/usr/bin/env npx tsx

import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

async function verifySchema() {
  console.log('🔍 Verifying database schema...\n')

  const requiredTables = [
    'categories',
    'products', 
    'product_variants',
    'blogs',
    'blog_tags',
    'shopping_carts',
    'cart_items',
    'orders',
    'order_items',
    'payments',
    'payment_providers',
    'inventory_movements',
    'admin_activities',
    'system_notifications'
  ]

  let allTablesExist = true

  for (const table of requiredTables) {
    try {
      const { error } = await supabase
        .from(table)
        .select('*')
        .limit(1)

      if (error) {
        console.log(`❌ Table '${table}' missing or inaccessible`)
        allTablesExist = false
      } else {
        console.log(`✅ Table '${table}' exists`)
      }
    } catch (err) {
      console.log(`❌ Table '${table}' error:`, err)
      allTablesExist = false
    }
  }

  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')

  if (allTablesExist) {
    console.log('🎉 DATABASE SCHEMA SUCCESSFULLY APPLIED!')
    console.log('✅ All 14 tables created and accessible')
    console.log('✅ Ready for product data migration')
    console.log('\n🚀 Next step: Run product migration')
    console.log('   npx tsx scripts/migrate-data.ts')
  } else {
    console.log('❌ SCHEMA NOT FULLY APPLIED')
    console.log('🔧 Please re-run the complete schema in Supabase SQL Editor')
    console.log('�� File: migrations/0003_create_complete_schema.sql')
  }

  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
}

verifySchema().catch(console.error)
