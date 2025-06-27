"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { 
  Mail, 
  Bell, 
  Gift, 
  Zap,
  CheckCircle,
  ArrowRight
} from "lucide-react"

const benefits = [
  {
    icon: Bell,
    title: "New Product Alerts",
    description: "Be first to know about latest arrivals"
  },
  {
    icon: Gift,
    title: "Exclusive Discounts",
    description: "Subscriber-only deals and early access"
  },
  {
    icon: Zap,
    title: "Tech Tips & Tutorials",
    description: "Weekly insights from our engineering team"
  }
]

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubscribed(true)
    setIsLoading(false)
    setEmail("")
  }

  return (
    <section className="py-24 bg-gradient-to-br from-secondary-container/50 to-tertiary-container/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {!isSubscribed ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              {/* Header */}
              <Badge className="bg-secondary/10 text-secondary mb-6 px-4 py-2 rounded-full">
                📧 Stay Updated
              </Badge>
              
              <h2 className="text-4xl md:text-5xl font-display font-bold text-on-surface mb-6">
                Join the Carthigan Community
              </h2>
              
              <p className="text-xl text-on-surface/70 mb-12 max-w-2xl mx-auto">
                Get exclusive access to new products, educational content, and special offers. 
                Join 5,000+ makers across Uganda.
              </p>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-surface/80 backdrop-blur-sm rounded-2xl p-6 border border-outline-variant/20"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-xl mb-4">
                      <benefit.icon className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="text-lg font-semibold text-on-surface mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-on-surface/60 text-sm">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Newsletter Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-surface rounded-3xl p-8 border border-outline-variant/20 shadow-lg"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1 relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-on-surface/40" />
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-12 pr-4 py-6 text-lg border-outline-variant/30 rounded-2xl focus:border-primary focus:ring-primary"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isLoading}
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-on-primary px-8 py-6 text-lg rounded-2xl"
                    >
                      {isLoading ? (
                        <div className="w-6 h-6 border-2 border-on-primary/30 border-t-on-primary rounded-full animate-spin" />
                      ) : (
                        <>
                          Subscribe
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </div>
                  
                  <p className="text-sm text-on-surface/60">
                    By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
                    We respect your privacy and never share your data.
                  </p>
                </form>

                {/* Trust Indicators */}
                <div className="flex items-center justify-center gap-8 mt-8 pt-6 border-t border-outline-variant/20">
                  <div className="flex items-center gap-2 text-sm text-on-surface/60">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>5,000+ subscribers</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-on-surface/60">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>No spam, ever</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-on-surface/60">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Unsubscribe anytime</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="bg-success-container rounded-3xl p-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-success/20 rounded-full mb-6">
                  <CheckCircle className="h-10 w-10 text-success" />
                </div>
                
                <h3 className="text-3xl font-bold text-on-success-container mb-4">
                  Welcome to the Community!
                </h3>
                
                <p className="text-on-success-container/70 mb-8 max-w-md mx-auto">
                  Thank you for subscribing! Check your email for a welcome message with your first exclusive discount.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    className="bg-success hover:bg-success/90 text-on-success rounded-2xl"
                    asChild
                  >
                    <a href="#categories">
                      Start Shopping
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-success text-success hover:bg-success/5 rounded-2xl"
                    asChild
                  >
                    <a href="/supply/education">
                      Browse Learning Kits
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
} 