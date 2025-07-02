import * as dotenv from 'dotenv'
import { createClient } from '@supabase/supabase-js'

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
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

// Static blog data from the current blog page
const staticBlogPosts = [
  {
    title: "The Future of RISC-V in African Tech",
    slug: "future-risc-v-african-tech",
    content: `<p>How open-source architecture is revolutionizing computing in emerging markets. A deep dive into the potential impact of RISC-V technology on African innovation.</p>
    
    <p>The open-source RISC-V instruction set architecture (ISA) represents a fundamental shift in how we approach computing infrastructure. Unlike proprietary alternatives, RISC-V offers unprecedented freedom and flexibility for innovation, making it particularly attractive for emerging markets seeking technological sovereignty.</p>
    
    <h2>The Promise of Open Architecture</h2>
    <p>RISC-V's open nature eliminates licensing fees and provides complete transparency in processor design. This democratization of processor technology opens doors for local innovation and customization that would be impossible with traditional architectures.</p>
    
    <h2>African Innovation Opportunities</h2>
    <p>With its growing tech ecosystem, Africa is uniquely positioned to leverage RISC-V for leapfrog development. Local universities and tech companies can now participate directly in processor design, fostering a new generation of hardware engineers and entrepreneurs.</p>`,
    excerpt: "How open-source architecture is revolutionizing computing in emerging markets. A deep dive into the potential impact of RISC-V technology on African innovation.",
    category: "Technology",
    author: "John Doe",
    featured_image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg",
    tags: ["RISC-V", "African Tech", "Open Source", "Innovation"],
    status: "published",
    is_featured: true,
    published_at: "2024-02-22T09:00:00Z"
  },
  {
    title: "Building Digital Infrastructure",
    slug: "building-digital-infrastructure",
    content: `<p>Creating the backbone for Africa's next technological revolution requires strategic thinking and innovative approaches to connectivity, data centers, and digital services.</p>
    
    <h2>The Foundation of Innovation</h2>
    <p>Digital infrastructure is the bedrock upon which modern economies are built. From fiber optic networks to cloud computing platforms, every aspect of our digital economy depends on robust, reliable infrastructure.</p>
    
    <h2>African Challenges and Opportunities</h2>
    <p>While infrastructure challenges are significant, they also present unique opportunities for innovation. Leapfrogging legacy systems allows for the implementation of cutting-edge technologies from the ground up.</p>`,
    excerpt: "Creating the backbone for Africa's next technological revolution.",
    category: "Innovation",
    author: "Jane Smith",
    featured_image: "https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg",
    tags: ["Infrastructure", "Innovation", "Technology", "Development"],
    status: "published",
    is_featured: false,
    published_at: "2024-02-21T10:00:00Z"
  },
  {
    title: "The Rise of Local Tech Manufacturing",
    slug: "rise-local-tech-manufacturing",
    content: `<p>How domestic production is changing the technology landscape across Africa, creating jobs and reducing dependence on imports.</p>
    
    <h2>Manufacturing Renaissance</h2>
    <p>The shift towards local manufacturing represents more than just economic opportunity—it's about technological independence and innovation capacity building.</p>
    
    <h2>Success Stories</h2>
    <p>From smartphone assembly in Rwanda to semiconductor packaging in Kenya, African countries are steadily building their manufacturing capabilities.</p>`,
    excerpt: "How domestic production is changing the technology landscape.",
    category: "Industry",
    author: "Mike Johnson",
    featured_image: "https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg",
    tags: ["Manufacturing", "Local Production", "Industry", "Economics"],
    status: "published",
    is_featured: false,
    published_at: "2024-02-20T11:00:00Z"
  },
  {
    title: "Next-Gen Gaming in Africa",
    slug: "next-gen-gaming-africa",
    content: `<p>The evolution of gaming culture and infrastructure in African markets is creating new opportunities for developers, content creators, and technology companies.</p>
    
    <h2>The Gaming Revolution</h2>
    <p>Gaming is no longer just entertainment—it's become a powerful platform for education, social interaction, and economic opportunity.</p>
    
    <h2>African Gaming Ecosystem</h2>
    <p>From mobile gaming in Nigeria to esports tournaments in South Africa, the African gaming landscape is diverse and rapidly evolving.</p>`,
    excerpt: "The evolution of gaming culture and infrastructure in African markets.",
    category: "Gaming",
    author: "Sarah Williams",
    featured_image: "https://images.pexels.com/photos/3977908/pexels-photo-3977908.jpeg",
    tags: ["Gaming", "Entertainment", "Technology", "Culture"],
    status: "published",
    is_featured: false,
    published_at: "2024-02-19T12:00:00Z"
  },
  {
    title: "Music Production Revolution",
    slug: "music-production-revolution",
    content: `<p>How technology is transforming the African music industry, from home studios to global distribution platforms.</p>
    
    <h2>Digital Music Evolution</h2>
    <p>The democratization of music production tools has enabled a new generation of African artists to create professional-quality music from anywhere.</p>
    
    <h2>Global Reach</h2>
    <p>Streaming platforms and social media have given African artists unprecedented access to global audiences, reshaping the music industry landscape.</p>`,
    excerpt: "How technology is transforming the African music industry.",
    category: "Music",
    author: "David Chen",
    featured_image: "https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg",
    tags: ["Music", "Technology", "Entertainment", "Digital Media"],
    status: "published",
    is_featured: false,
    published_at: "2024-02-18T13:00:00Z"
  },
  {
    title: "African Cinema Goes Digital",
    slug: "african-cinema-goes-digital",
    content: `<p>The digital transformation of film production and distribution is opening new opportunities for African filmmakers and content creators.</p>
    
    <h2>Digital Filmmaking</h2>
    <p>Affordable digital cameras and editing software have lowered the barriers to entry for aspiring filmmakers across the continent.</p>
    
    <h2>Streaming Revolution</h2>
    <p>Global streaming platforms are increasingly investing in African content, providing new revenue streams and global exposure for local creators.</p>`,
    excerpt: "The digital transformation of film production and distribution.",
    category: "Movies",
    author: "Emma Brown",
    featured_image: "https://images.pexels.com/photos/274937/pexels-photo-274937.jpeg",
    tags: ["Cinema", "Digital Media", "Entertainment", "Technology"],
    status: "published",
    is_featured: false,
    published_at: "2024-02-17T14:00:00Z"
  },
  {
    title: "Product Review: Carthage Laptop",
    slug: "carthage-laptop-review",
    content: `<p>An in-depth look at our flagship laptop's performance and features, including real-world testing and user feedback.</p>
    
    <h2>Design and Build Quality</h2>
    <p>The Carthage Laptop combines premium materials with thoughtful engineering to deliver a device that's both beautiful and functional.</p>
    
    <h2>Performance Benchmarks</h2>
    <p>Our comprehensive testing reveals impressive performance across a wide range of tasks, from productivity work to creative applications.</p>
    
    <h2>User Experience</h2>
    <p>Feedback from beta users highlights the laptop's excellent keyboard, vibrant display, and exceptional battery life.</p>`,
    excerpt: "An in-depth look at our flagship laptop's performance and features.",
    category: "Products",
    author: "Alex Turner",
    featured_image: "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg",
    tags: ["Product Review", "Laptop", "Technology", "Hardware"],
    status: "published",
    is_featured: false,
    published_at: "2024-02-16T15:00:00Z"
  }
]

// Convert static blog to database format
const convertToDbFormat = (post: any) => {
  return {
    title: post.title,
    slug: post.slug,
    content: post.content,
    excerpt: post.excerpt,
    featured_image: post.featured_image,
    status: post.status,
    published_at: post.published_at,
    is_featured: post.is_featured,
    views: Math.floor(Math.random() * 500) + 50,
    likes: Math.floor(Math.random() * 50) + 10,
    tags: post.tags,
    meta_title: post.title,
    meta_description: post.excerpt
  }
}

async function migrateBlogPosts() {
  console.log('🚀 Starting blog migration...')
  console.log(`📝 Found ${staticBlogPosts.length} blog posts to migrate`)

  let successCount = 0
  let errorCount = 0
  const errors: string[] = []

  for (const post of staticBlogPosts) {
    try {
      const dbPost = convertToDbFormat(post)
      
      console.log(`📄 Migrating: ${post.title}`)
      
      const { data, error } = await supabase
        .from('blogs')
        .upsert(dbPost, { 
          onConflict: 'slug',
          ignoreDuplicates: false 
        })
        .select('id, title')

      if (error) {
        console.error(`❌ Error migrating "${post.title}":`, error.message)
        errors.push(`${post.title}: ${error.message}`)
        errorCount++
      } else {
        console.log(`✅ Migrated: ${post.title}`)
        successCount++
      }
    } catch (err) {
      console.error(`❌ Exception migrating "${post.title}":`, err)
      errors.push(`${post.title}: ${err}`)
      errorCount++
    }

    await new Promise(resolve => setTimeout(resolve, 100))
  }

  console.log('\n📈 Blog Migration Summary:')
  console.log(`✅ Successfully migrated: ${successCount} blog posts`)
  console.log(`❌ Failed: ${errorCount} blog posts`)
  
  if (errors.length > 0) {
    console.log('\n🔍 Errors:')
    errors.forEach(error => console.log(`  - ${error}`))
  }

  return { successCount, errorCount, errors }
}

// Run the migration
if (require.main === module) {
  migrateBlogPosts()
    .then((result) => {
      if (result.errorCount === 0) {
        console.log('\n🎉 Blog migration completed successfully!')
        process.exit(0)
      } else {
        console.log('\n⚠️  Blog migration completed with errors')
        process.exit(1)
      }
    })
    .catch((error) => {
      console.error('\n💥 Blog migration failed:', error)
      process.exit(1)
    })
}

export { migrateBlogPosts }
