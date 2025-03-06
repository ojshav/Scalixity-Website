"use client"

import { motion } from 'framer-motion'
import { ShoppingCart, Tag, Package, Users, TrendingUp, ShieldCheck } from 'lucide-react'

const applications = [
  {
    icon: ShoppingCart,
    title: "Smart Product Recommendations",
    description: "AI-driven suggestions tailored to customer preferences, boosting sales and enhancing shopping experiences."
  },
  {
    icon: Tag,
    title: "Dynamic Pricing Optimization",
    description: "Real-time AI models adjusting product prices based on demand, competition, and market trends."
  },
  {
    icon: Package,
    title: "Inventory Management",
    description: "AI agents predicting stock levels, reducing wastage, and ensuring products are always available."
  },
  {
    icon: Users,
    title: "Personalized Customer Engagement",
    description: "AI-powered chatbots providing instant support, answering queries, and guiding customers through purchases."
  },
  {
    icon: TrendingUp,
    title: "Sales Forecasting",
    description: "AI models analyzing historical data to predict sales patterns and optimize marketing strategies."
  },
  {
    icon: ShieldCheck,
    title: "Fraud Detection",
    description: "AI systems monitoring transactions in real-time to identify and prevent fraudulent activities."
  }
]

export function AIApplications() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-[#7A614C] uppercase tracking-wider">AI AGENT APPLICATIONS</span>
          <h2 className="text-4xl font-bold text-[#2D2D2D] mt-4 mb-6">
            Transforming Retail with AI Agents
          </h2>
          <p className="text-xl text-[#4A4A4A] max-w-3xl mx-auto">
            Discover how AI agents revolutionize retail by personalizing customer experiences, optimizing operations, and boosting sales.
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
              className="bg-[#F5F5DC] p-8 rounded-2xl shadow-lg border border-[#EAE7D6] hover:shadow-xl transition-shadow"
            >
              <app.icon className="w-12 h-12 text-[#7A614C] mb-6" />
              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">{app.title}</h3>
              <p className="text-[#4A4A4A]">{app.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
