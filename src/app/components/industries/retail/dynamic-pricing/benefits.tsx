"use client"

import { motion } from 'framer-motion'
import { TrendingUp, DollarSign, BarChart, Clock, Users, ShieldCheck } from 'lucide-react'

const benefits = [
  {
    icon: TrendingUp,
    title: "Maximized Revenue",
    description: "AI-driven dynamic pricing adjusts rates in real-time, capturing optimal price points to boost profits."
  },
  {
    icon: DollarSign,
    title: "Competitive Edge",
    description: "Stay ahead by monitoring competitor prices and responding instantly with strategic adjustments."
  },
  {
    icon: BarChart,
    title: "Data-Driven Insights",
    description: "Leverage AI analytics to identify pricing patterns, customer behavior, and demand forecasts."
  },
  {
    icon: Clock,
    title: "Real-Time Price Optimization",
    description: "React instantly to shifts in demand, ensuring pricing strategies align with market conditions."
  },
  {
    icon: Users,
    title: "Personalized Customer Experiences",
    description: "Deliver tailored discounts and offers based on customer data, enhancing loyalty and satisfaction."
  },
  {
    icon: ShieldCheck,
    title: "Reduced Overstock & Stockouts",
    description: "Balance inventory by dynamically adjusting prices to prevent shortages or excess stock."
  }
]

export function Benefits() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Benefits of Dynamic Pricing Solutions in Retail
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Unlock the power of AI-driven dynamic pricing — boosting revenue, enhancing customer satisfaction, and optimizing market strategies.
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
              className="bg-[#F3F1EB] p-8 rounded-xl border border-border hover:border-primary/50 transition-colors"
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

export default Benefits
