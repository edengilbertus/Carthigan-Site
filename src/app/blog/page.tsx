"use client";

import Link from "next/link";
import Image from "next/image";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-black/5">
        <nav className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-2xl font-display font-semibold text-black">
            CARTHIGAN
          </Link>
          <div className="hidden md:flex items-center space-x-10">
            <Link href="/#products" className="text-black/60 hover:text-black transition-colors">
              Products
            </Link>
            <Link href="/#carthageos" className="text-black/60 hover:text-black transition-colors">
              CarthageOS
            </Link>
            <Link href="/#innovation" className="text-black/60 hover:text-black transition-colors">
              Innovation
            </Link>
            <Link href="/#pulse" className="text-black/60 hover:text-black transition-colors">
              Pulse
            </Link>
          </div>
        </nav>
      </header>

      {/* Blog Hero */}
      <section className="pt-32 pb-20 relative bg-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-display font-semibold mb-6 text-black">
            Carthigan Pulse
          </h1>
          <p className="text-xl text-black/60 max-w-2xl mb-12">
            Insights and News from the Forefront of Technology, Entertainment, and Innovation
          </p>
          
          {/* Categories */}
          <div className="flex flex-wrap gap-4 mb-16">
            {[
              "All",
              "Technology",
              "Products",
              "Innovation",
              "African Tech",
              "Music",
              "Movies",
              "Gaming"
            ].map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full text-sm font-medium bg-black/5 text-black/60 hover:bg-black hover:text-white transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg"
                alt="Featured Post"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="inline-block px-4 py-1 rounded-full text-xs font-medium bg-black/5 text-black mb-4">
                Technology
              </span>
              <h2 className="text-3xl font-display font-semibold mb-4 text-black">
                The Future of RISC-V in African Tech
              </h2>
              <p className="text-black/60 mb-6">
                How open-source architecture is revolutionizing computing in emerging markets. 
                A deep dive into the potential impact of RISC-V technology on African innovation.
              </p>
              <div className="flex items-center gap-4 text-sm text-black/40">
                <span>By John Doe</span>
                <span>•</span>
                <span>5 min read</span>
                <span>•</span>
                <span>Feb 22, 2024</span>
              </div>
            </div>
          </div>

          {/* Latest Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Building Digital Infrastructure",
                category: "Innovation",
                image: "https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg",
                excerpt: "Creating the backbone for Africa's next technological revolution.",
                author: "Jane Smith",
                readTime: "4 min",
                date: "Feb 21, 2024"
              },
              {
                title: "The Rise of Local Tech Manufacturing",
                category: "Industry",
                image: "https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg",
                excerpt: "How domestic production is changing the technology landscape.",
                author: "Mike Johnson",
                readTime: "6 min",
                date: "Feb 20, 2024"
              },
              {
                title: "Next-Gen Gaming in Africa",
                category: "Gaming",
                image: "https://images.pexels.com/photos/3977908/pexels-photo-3977908.jpeg",
                excerpt: "The evolution of gaming culture and infrastructure in African markets.",
                author: "Sarah Williams",
                readTime: "3 min",
                date: "Feb 19, 2024"
              },
              {
                title: "Music Production Revolution",
                category: "Music",
                image: "https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg",
                excerpt: "How technology is transforming the African music industry.",
                author: "David Chen",
                readTime: "5 min",
                date: "Feb 18, 2024"
              },
              {
                title: "African Cinema Goes Digital",
                category: "Movies",
                image: "https://images.pexels.com/photos/274937/pexels-photo-274937.jpeg",
                excerpt: "The digital transformation of film production and distribution.",
                author: "Emma Brown",
                readTime: "4 min",
                date: "Feb 17, 2024"
              },
              {
                title: "Product Review: Carthage Laptop",
                category: "Products",
                image: "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg",
                excerpt: "An in-depth look at our flagship laptop's performance and features.",
                author: "Alex Turner",
                readTime: "7 min",
                date: "Feb 16, 2024"
              }
            ].map((post, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl bg-white shadow-medium border border-black/5">
                <div className="aspect-[16/9] relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover filter grayscale group-hover:grayscale-0 transform group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>
                </div>
                <div className="p-8 relative">
                  <span className="inline-block px-4 py-1 rounded-full text-xs font-medium bg-black/5 text-black mb-4">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-display font-semibold mb-3 text-black group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-black/60 mb-6">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-black/40">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.readTime} read</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-16">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shadow-xs h-9 bg-black hover:bg-black/90 text-white rounded-full px-8 py-6 text-lg shadow-soft">
              Load More Articles
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
