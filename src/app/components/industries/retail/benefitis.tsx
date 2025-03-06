"use client"

import { motion } from 'framer-motion'
import { ShoppingCart, UserCheck, Package, TrendingUp, Tag, Layers } from 'lucide-react'

const benefits = [
  {
    icon: ShoppingCart,
    title: "Personalized Shopping Experiences",
    description: "AI tailors product recommendations and marketing strategies, boosting customer engagement and loyalty."
  },
  {
    icon: UserCheck,
    title: "Customer Behavior Insights",
    description: "Analyze shopping patterns and preferences to make data-driven decisions and enhance user satisfaction."
  },
  {
    icon: Package,
    title: "Smart Inventory Management",
    description: "Predict demand and optimize stock levels, preventing overstock and stockouts for seamless operations."
  },
  {
    icon: TrendingUp,
    title: "Sales Forecasting",
    description: "Leverage AI algorithms to accurately forecast sales trends and optimize pricing strategies."
  },
  {
    icon: Tag,
    title: "Dynamic Pricing",
    description: "Implement real-time pricing adjustments based on market demand, competition, and customer behavior."
  },
  {
    icon: Layers,
    title: "Enhanced In-Store Operations",
    description: "Integrate AI to streamline checkout, prevent theft, and enhance the overall shopping experience."
  }
]

export function Benefits() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">BENEFITS OF AI IN RETAIL</span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            Unlock the Power of AI for Retail
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how AI is transforming retail by delivering personalized shopping experiences, optimizing inventory, and driving data-backed strategies. Empower your business with AI-driven insights to boost efficiency and customer satisfaction.
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
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-colors"
            >
              <benefit.icon className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-bold text-foreground mb-4">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits;
