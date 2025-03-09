"use client"

import { motion } from 'framer-motion'
import { ShoppingCart, Tag, BarChart3, Users, Truck, Store } from 'lucide-react'

const applications = [
  {
    icon: ShoppingCart,
    title: "Smart Product Recommendations",
    description: "AI algorithms that personalize product suggestions based on customer behavior and preferences."
  },
  {
    icon: Tag,
    title: "Dynamic Pricing Strategies",
    description: "Real-time AI-driven pricing models that adjust prices based on demand, competition, and customer data."
  },
  {
    icon: BarChart3,
    title: "Sales Forecasting",
    description: "Predict future sales trends using AI to optimize inventory and maximize revenue."
  },
  {
    icon: Users,
    title: "Customer Sentiment Analysis",
    description: "AI tools that analyze customer feedback and social media to understand brand perception."
  },
  {
    icon: Truck,
    title: "Supply Chain Optimization",
    description: "Enhance logistics and inventory management by leveraging AI for demand forecasting and route planning."
  },
  {
    icon: Store,
    title: "Virtual Shopping Assistants",
    description: "AI-powered assistants that guide customers through online and in-store shopping experiences."
  }
]

export function AIApplications() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">RETAIL AI SOLUTIONS</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Transforming Retail with AI Innovation
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Discover how AI solutions empower the retail industry by enhancing customer experiences, optimizing operations, and driving sales growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F5F5DC] p-8 rounded-xl border border-border hover:border-primary/50 transition-colors"
            >
              <app.icon className="w-12 h-12 text-black mb-6" />
              <h3 className="text-xl font-bold text-black mb-4">{app.title}</h3>
              <p className="text-black">{app.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
