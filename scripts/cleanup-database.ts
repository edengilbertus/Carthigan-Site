#!/usr/bin/env npx tsx

// Clean up existing database tables before applying new schema
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

if (!supabaseUrl || !supabaseKey || supabaseUrl.includes('your-project')) {
  console.log('❌ Please update .env.local with real Supabase credentials first!')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function listExistingTables() {
  console.log('🔍 Checking existing tables...')
  
  try {
    const { data, error } = await supabase.rpc('get_user_tables')
    
    if (error) {
      // Fallback method if RPC doesn't exist
      const { data: tables, error: tableError } = await supabase
        .from('information_schema.tables')
        .select('table_name')
        .eq('table_schema', 'public')
        .neq('table_name', 'spatial_ref_sys') // Exclude PostGIS system table

      if (tableError) {
        console.log('Using manual query to list tables...')
        return await manualTableList()
      }
      
      return tables?.map(t => t.table_name) || []
    }
    
    return data || []
  } catch (err) {
    console.log('Using manual query to list tables...')
    return await manualTableList()
  }
}

async function manualTableList() {
  // Direct SQL query to list tables
  const query = `
    SELECT table_name 
    FROM information_schema.tables 
    WHERE table_schema = 'public' 
    AND table_type = 'BASE TABLE'
    AND table_name NOT IN ('spatial_ref_sys');
  `
  
  try {
    const { data, error } = await supabase.rpc('exec_sql', { query })
    
    if (error) {
      console.log('⚠️  Cannot list tables automatically. Please check manually in Supabase dashboard.')
      return []
    }
    
    return data?.map((row: any) => row.table_name) || []
  } catch (err) {
    console.log('📋 Common tables to check manually:')
    console.log('   - courses, course_categories, course_modules')
    console.log('   - translation_requests, education_categories')
    console.log('   - profiles, products, orders, etc.')
    return []
  }
}

async function dropAllTables() {
  const tables = await listExistingTables()
  
  if (tables.length === 0) {
    console.log('✅ No custom tables found or unable to detect tables')
    console.log('   You can proceed with schema application')
    return
  }

  console.log(`📋 Found ${tables.length} tables:`)
  tables.forEach(table => console.log(`   - ${table}`))
  
  console.log('\n🗑️  Dropping all existing tables...')
  
  // Drop tables in correct order (handle foreign key constraints)
  const dropOrder = [
    // Child tables first
    'course_modules', 'course_enrollments', 'translation_requests',
    // Parent tables
    'courses', 'course_categories', 'education_categories',
    'profiles', 'products', 'orders', 'blog_posts',
    // Any remaining tables
    ...tables.filter(t => ![
      'course_modules', 'course_enrollments', 'translation_requests',
      'courses', 'course_categories', 'education_categories',
      'profiles', 'products', 'orders', 'blog_posts'
    ].includes(t))
  ]

  for (const tableName of dropOrder) {
    if (tables.includes(tableName)) {
      try {
        console.log(`   Dropping ${tableName}...`)
        const { error } = await supabase.rpc('exec_sql', { 
          query: `DROP TABLE IF EXISTS "${tableName}" CASCADE;` 
        })
        
        if (error) {
          console.log(`   ⚠️  Could not drop ${tableName}: ${error.message}`)
        } else {
          console.log(`   ✅ Dropped ${tableName}`)
        }
      } catch (err) {
        console.log(`   ⚠️  Error dropping ${tableName}:`, err)
      }
    }
  }

  console.log('\n🧹 Database cleanup completed!')
  console.log('   Ready for fresh schema application')
}

async function main() {
  console.log('🧹 DATABASE CLEANUP TOOL\n')
  
  try {
    // Test connection first
    const { error } = await supabase.from('information_schema.tables').select('table_name').limit(1)
    if (error) {
      console.log('❌ Database connection failed:', error.message)
      process.exit(1)
    }

    await dropAllTables()
    
    console.log('\n🎯 Next Steps:')
    console.log('1. Apply schema: npx supabase db reset')
    console.log('2. Or manual: Copy migrations/0003_create_complete_schema.sql to SQL Editor')
    console.log('3. Then run: npx tsx scripts/migrate-data.ts')
    
  } catch (error) {
    console.log('❌ Cleanup failed:', error)
    process.exit(1)
  }
}

main()
