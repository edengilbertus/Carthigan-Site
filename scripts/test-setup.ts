#!/usr/bin/env npx tsx

import { supabase } from '../src/lib/supabase'

async function testDatabaseConnection() {
  console.log('🔍 Testing database connection...')
  
  try {
    const { data, error } = await supabase
      .from('categories')
      .select('count(*)')
      .single()

    if (error) {
      console.log('❌ Database connection failed:', error.message)
      return false
    }

    console.log('✅ Database connection successful')
    return true
  } catch (err) {
    console.log('❌ Database connection error:', err)
    return false
  }
}

async function testProductsTable() {
  console.log('�� Testing products table...')
  
  try {
    const { data, error, count } = await supabase
      .from('products')
      .select('*', { count: 'exact', head: true })

    if (error) {
      console.log('❌ Products table error:', error.message)
      return false
    }

    console.log(`✅ Products table ready with ${count || 0} products`)
    return count && count > 0
  } catch (err) {
    console.log('❌ Products table error:', err)
    return false
  }
}

async function testAdminUser() {
  console.log('🔍 Testing admin user...')
  
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('email, full_name, role')
      .eq('role', 'admin')

    if (error) {
      console.log('❌ Admin user check error:', error.message)
      return false
    }

    if (data && data.length > 0) {
      console.log(`✅ Admin user found: ${data[0].email}`)
      return true
    } else {
      console.log('⚠️  No admin user found - you need to create one')
      return false
    }
  } catch (err) {
    console.log('❌ Admin user check error:', err)
    return false
  }
}

async function runTests() {
  console.log('🎯 Carthigan Admin Setup Test\n')
  console.log('==================================\n')

  const tests = [
    { name: 'Database Connection', test: testDatabaseConnection },
    { name: 'Products Table', test: testProductsTable },
    { name: 'Admin User', test: testAdminUser }
  ]

  let passed = 0
  let total = tests.length

  for (const { name, test } of tests) {
    console.log(`\n📋 ${name}`)
    console.log('─'.repeat(50))
    
    const result = await test()
    if (result) {
      passed++
    }
    
    console.log('')
  }

  console.log('==================================')
  console.log(`\n📊 Test Results: ${passed}/${total} passed\n`)

  if (passed === total) {
    console.log('🎉 All tests passed! Your Carthigan admin system is ready!')
    console.log('\n🚀 Next steps:')
    console.log('   1. Start your development server: npm run dev')
    console.log('   2. Visit: http://localhost:8000/admin')
    console.log('   3. Login with: admin@carthigan.com / CarteiganAdmin2025!')
  } else {
    console.log('⚠️  Some tests failed. Please check the setup instructions.')
    console.log('\n🔧 Common issues:')
    console.log('   - Check your .env.local file has correct Supabase credentials')
    console.log('   - Ensure you ran the database migration')
    console.log('   - Verify you created the admin user in Supabase dashboard')
  }

  console.log('\n📖 Full setup guide: SETUP_INSTRUCTIONS.md')
}

// Run tests if this file is executed directly
if (require.main === module) {
  runTests()
}

export { runTests }
