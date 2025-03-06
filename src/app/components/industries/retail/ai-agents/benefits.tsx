"use client"

import { motion } from 'framer-motion'
import { ShoppingCart, Tag, LineChart, Package, Users, ShieldCheck } from 'lucide-react'

const benefits = [
  {
    icon: ShoppingCart,
    title: "Personalized Shopping Experiences",
    description: "AI agents tailor product recommendations based on customer preferences and behavior."
  },
  {
    icon: Tag,
    title: "Dynamic Pricing Strategies",
    description: "Optimize prices in real-time using AI models that analyze demand, trends, and competitor data."
  },
  {
    icon: LineChart,
    title: "Sales Forecasting",
    description: "Predict future sales trends and inventory needs with AI-driven insights."
  },
  {
    icon: Package,
    title: "Inventory Optimization",
    description: "AI systems ensure efficient stock management by predicting shortages and surpluses."
  },
  {
    icon: Users,
    title: "Enhanced Customer Engagement",
    description: "AI chatbots provide instant support, answer queries, and guide users through their shopping journey."
  },
  {
    icon: ShieldCheck,
    title: "Fraud Detection & Security",
    description: "Protect retail transactions with AI-powered fraud detection systems monitoring in real-time."
  }
]

export function Benefits() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2D2D2D] mb-6">
            Benefits of AI Agents in Retail
          </h2>
          <p className="text-xl text-[#4A4A4A] max-w-3xl mx-auto">
            Discover how AI agents revolutionize the retail industry — boosting sales, enhancing customer experiences, and streamlining operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F5F5DC] p-8 rounded-2xl shadow-lg border border-[#EAE7D6] hover:shadow-xl transition-shadow"
            >
              <benefit.icon className="w-12 h-12 text-[#7A614C] mb-6" />
              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">{benefit.title}</h3>
              <p className="text-[#4A4A4A]">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
