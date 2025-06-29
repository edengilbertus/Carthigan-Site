import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail, MessageCircle, Clock, ShoppingCart, Package, CreditCard, Shield, Truck, ArrowRight, HelpCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Help Center - Support & FAQ | Carthigan Supply',
  description: 'Get help with your orders, shipping, returns, and more. Find answers to frequently asked questions or contact our support team.',
  keywords: 'help, support, FAQ, customer service, shipping, returns, orders, contact, Carthigan Supply',
}

export default function HelpPage() {
  const faqSections = [
    {
      title: "Ordering & Payment",
      icon: <ShoppingCart className="h-6 w-6 text-orange-500" />,
      questions: [
        {
          q: "How do I place an order?",
          a: "Browse our products, add items to your cart, and proceed to checkout. You'll need to create an account or sign in to complete your purchase."
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept Mobile Money (MTN, Airtel), bank transfers, and cash on delivery within Kampala."
        },
        {
          q: "Can I modify or cancel my order?",
          a: "Orders can be modified or cancelled within 2 hours of placement. Contact us immediately if you need to make changes."
        }
      ]
    },
    {
      title: "Shipping & Delivery",
      icon: <Truck className="h-6 w-6 text-orange-500" />,
      questions: [
        {
          q: "What are your delivery areas?",
          a: "We deliver within Kampala for free. We also ship nationwide to major cities with additional shipping fees."
        },
        {
          q: "How long does delivery take?",
          a: "Kampala deliveries: 1-2 business days. Nationwide shipping: 3-5 business days."
        },
        {
          q: "How can I track my order?",
          a: "You'll receive tracking information via SMS and email once your order ships."
        }
      ]
    },
    {
      title: "Products & Technical Support",
      icon: <Package className="h-6 w-6 text-orange-500" />,
      questions: [
        {
          q: "Are your products genuine?",
          a: "Yes, all our products are authentic and sourced directly from authorized distributors. We provide warranty and quality guarantees."
        },
        {
          q: "Do you provide technical support?",
          a: "Absolutely! Our engineers provide free technical support via WhatsApp, email, and phone. We can help with circuit design, programming, and troubleshooting."
        },
        {
          q: "Can you help me choose the right components?",
          a: "Yes! Describe your project requirements and our technical team will recommend the best components and provide circuit diagrams if needed."
        },
        {
          q: "Do you offer bulk pricing?",
          a: "Yes, we offer competitive bulk pricing for educational institutions, businesses, and large projects. Contact us for a custom quote."
        }
      ]
    },
    {
      title: "Returns & Warranty",
      icon: <Shield className="h-6 w-6 text-orange-500" />,
      questions: [
        {
          q: "What is your return policy?",
          a: "Unopened items can be returned within 14 days. Electronic components have a 30-day warranty. Educational kits have a 90-day satisfaction guarantee."
        },
        {
          q: "How do I return an item?",
          a: "Contact us with your order number and reason for return. We'll provide a return authorization and pickup/drop-off instructions."
        },
        {
          q: "What if my product is defective?",
          a: "We'll replace defective items immediately at no cost. Contact us within 7 days of delivery for defective products."
        },
        {
          q: "Do you offer refunds?",
          a: "Yes, refunds are processed within 5-7 business days for eligible returns. Shipping fees are refundable if the item was defective."
        }
      ]
    }
  ]

  const contactMethods = [
    {
      icon: <MessageCircle className="h-8 w-8 text-green-500" />,
      title: "WhatsApp Support",
      description: "Quick responses, technical help",
      contact: "+256 726 408312",
      action: "Chat Now",
      href: "https://wa.me/256726408312"
    },
    {
      icon: <Phone className="h-8 w-8 text-blue-500" />,
      title: "Phone Support", 
      description: "Speak with our team directly",
      contact: "+256 726 408312",
      action: "Call Now",
      href: "tel:+256726408312"
    },
    {
      icon: <Mail className="h-8 w-8 text-purple-500" />,
      title: "Email Support",
      description: "Detailed technical inquiries", 
      contact: "support@carthigan.com",
      action: "Send Email",
      href: "mailto:support@carthigan.com"
    }
  ]

  return (
    <main className="container mx-auto px-6 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 rounded-full mb-4">
            <HelpCircle className="h-5 w-5 text-orange-500" />
            <span className="text-sm font-medium text-orange-500">Help Center</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How can we help you?
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions, get technical support, or contact our team directly. 
            We're here to make your electronics journey smooth and successful.
          </p>
        </div>

        {/* Quick Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                {method.icon}
                <div>
                  <h3 className="font-semibold text-gray-900">{method.title}</h3>
                  <p className="text-sm text-gray-600">{method.description}</p>
                </div>
              </div>
              <div className="space-y-2 mb-4">
                <p className="font-medium text-gray-900">{method.contact}</p>
              </div>
              <a
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                {method.action}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        {/* FAQ Sections */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Find quick answers to the most common questions about ordering, shipping, and support.
            </p>
          </div>

          {faqSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-white rounded-2xl border border-gray-200 p-8">
              <div className="flex items-center gap-3 mb-6">
                {section.icon}
                <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
              </div>
              
              <div className="space-y-6">
                {section.questions.map((faq, faqIndex) => (
                  <div key={faqIndex} className="border-b border-gray-100 pb-6 last:border-b-0 last:pb-0">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      {faq.q}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Still need help?</h3>
          <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
            Our technical support team is ready to help with your projects, from component selection 
            to circuit design and troubleshooting. Don't hesitate to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/256726408312"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-orange-500 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </a>
            <Link
              href="/supply/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              <Mail className="h-5 w-5" />
              Send Message
            </Link>
          </div>
        </div>

        {/* Business Hours */}
        <div className="mt-12 bg-gray-50 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="h-6 w-6 text-gray-600" />
            <h3 className="text-xl font-semibold text-gray-900">Business Hours</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
            <div>
              <p className="font-medium">Customer Support</p>
              <p>Monday - Saturday: 8:00 AM - 8:00 PM</p>
              <p>Sunday: 10:00 AM - 6:00 PM</p>
            </div>
            <div>
              <p className="font-medium">Technical Support</p>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 