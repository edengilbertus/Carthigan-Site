#!/usr/bin/env npx tsx

// Simple script to test if Supabase credentials are working
import * as fs from 'fs'
import * as path from 'path'

function checkEnvFile() {
  const envPath = path.join(process.cwd(), '.env.local')
  
  if (!fs.existsSync(envPath)) {
    console.log('❌ .env.local file not found')
    return false
  }

  const envContent = fs.readFileSync(envPath, 'utf8')
  const lines = envContent.split('\n')
  
  let url = ''
  let key = ''
  
  for (const line of lines) {
    if (line.startsWith('NEXT_PUBLIC_SUPABASE_URL=')) {
      url = line.split('=')[1]
    }
    if (line.startsWith('NEXT_PUBLIC_SUPABASE_ANON_KEY=')) {
      key = line.split('=')[1]
    }
  }

  console.log('🔍 Checking credentials...')
  console.log(`URL: ${url}`)
  console.log(`Key: ${key ? key.substring(0, 20) + '...' : 'Not found'}`)

  if (url === 'https://your-project.supabase.co' || !url) {
    console.log('❌ Supabase URL is still placeholder')
    return false
  }

  if (key === 'your-anon-key-here' || !key) {
    console.log('❌ Supabase key is still placeholder')
    return false
  }

  if (!url.includes('.supabase.co')) {
    console.log('❌ URL does not look like a valid Supabase URL')
    return false
  }

  console.log('✅ Credentials look valid!')
  return true
}

async function testConnection() {
  if (!checkEnvFile()) {
    console.log('\n🎯 Next Steps:')
    console.log('1. Create Supabase project at https://supabase.com')
    console.log('2. Get your Project URL and anon key from Settings → API')
    console.log('3. Update .env.local with real values')
    console.log('4. Run this script again to verify')
    return
  }

  console.log('\n🧪 Testing Supabase connection...')
  
  try {
    // Dynamic import to avoid initialization errors
    const { createClient } = await import('@supabase/supabase-js')
    
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL!
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    
    const supabase = createClient(url, key)
    
    // Simple test query
    const { data, error } = await supabase.from('information_schema.tables').select('table_name').limit(1)
    
    if (error) {
      console.log('❌ Connection failed:', error.message)
      console.log('\n🔧 Possible issues:')
      console.log('- Check your credentials are correct')
      console.log('- Ensure your Supabase project is active')
      console.log('- Verify network connection')
    } else {
      console.log('✅ Supabase connection successful!')
      console.log('\n🎉 Ready for next steps:')
      console.log('1. Run database migration')
      console.log('2. Migrate product data')
      console.log('3. Create admin user')
    }
  } catch (err) {
    console.log('❌ Connection test failed:', err)
  }
}

testConnection()
