#!/bin/bash

echo "🎯 Carthigan Admin System Setup"
echo "================================"
echo ""

# Check if Supabase CLI is installed
if ! command -v supabase &> /dev/null; then
    echo "❌ Supabase CLI not found. Installing..."
    npm install -g supabase
fi

# Check if tsx is installed
if ! command -v tsx &> /dev/null; then
    echo "📦 Installing TypeScript runner..."
    npm install -g tsx
fi

echo "1️⃣ Applying database migration..."
if [ -f "migrations/0003_create_complete_schema.sql" ]; then
    cat migrations/0003_create_complete_schema.sql | npx supabase db query
    echo "✅ Database schema applied"
else
    echo "❌ Migration file not found"
    exit 1
fi

echo ""
echo "2️⃣ Migrating product data..."
if [ -f "scripts/migrate-data.ts" ]; then
    npx tsx scripts/migrate-data.ts
    echo "✅ Product data migrated"
else
    echo "❌ Migration script not found"
    exit 1
fi

echo ""
echo "🎉 Setup Complete!"
echo ""
echo "📋 Next Steps:"
echo "1. Create admin user in Supabase Dashboard:"
echo "   Email: admin@carthigan.com"
echo "   Password: CarteiganAdmin2025!"
echo "   Role: admin (in profiles table)"
echo ""
echo "2. Start the system:"
echo "   npm run dev"
echo ""
echo "3. Visit admin panel:"
echo "   http://localhost:8000/admin"
echo ""
echo "🚀 Your Carthigan admin system is ready!"
