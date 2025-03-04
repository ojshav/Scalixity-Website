"use client"

import { motion } from 'framer-motion'
import { TrendingUp, DollarSign, BarChart, ShoppingCart, LineChart, Globe } from 'lucide-react'

const applications = [
  {
    icon: TrendingUp,
    title: "Real-Time Price Optimization",
    description: "AI agents analyze demand, competitor pricing, and market trends to adjust prices dynamically for maximum profitability."
  },
  {
    icon: DollarSign,
    title: "Personalized Discount Strategies",
    description: "Implement AI-driven personalized discounts based on customer behavior, loyalty status, and purchase history."
  },
  {
    icon: BarChart,
    title: "Demand Forecasting",
    description: "Predict product demand using AI models, helping you optimize stock levels and pricing strategies ahead of time."
  },
  {
    icon: ShoppingCart,
    title: "Cart Abandonment Recovery",
    description: "AI agents trigger smart pricing offers or reminders to convert abandoned carts into successful sales."
  },
  {
    icon: LineChart,
    title: "Competitor Price Monitoring",
    description: "Track competitor prices in real-time and enable AI agents to respond instantly by adjusting your pricing strategy."
  },
  {
    icon: Globe,
    title: "Geo-Targeted Pricing",
    description: "Use AI to customize pricing based on customer location, ensuring region-specific strategies for better market penetration."
  }
]

export function AIApplications() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">AI AGENT APPLICATIONS</span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            Transforming Retail with AI-Powered Dynamic Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how AI agents revolutionize retail by driving data-driven dynamic pricing strategies — boosting sales, customer engagement, and profitability.
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
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-colors"
            >
              <app.icon className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-bold text-foreground mb-4">{app.title}</h3>
              <p className="text-muted-foreground">{app.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AIApplications
