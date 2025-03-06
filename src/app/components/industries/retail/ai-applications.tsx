"use client"

import { motion } from 'framer-motion'
import { ShoppingBag, Package, UserCheck, TrendingUp, Store, Tag } from 'lucide-react'

const applications = [
  {
    icon: ShoppingBag,
    title: "Personalized Shopping Experiences",
    description: "Leverage AI to deliver tailored product recommendations and targeted promotions based on customer behavior and preferences."
  },
  {
    icon: Package,
    title: "Inventory Management",
    description: "Use AI algorithms to predict demand, optimize stock levels, and prevent overstock or stockouts efficiently."
  },
  {
    icon: UserCheck,
    title: "Customer Sentiment Analysis",
    description: "Analyze customer feedback and social media data to gauge sentiment and improve products and services."
  },
  {
    icon: TrendingUp,
    title: "Sales Forecasting",
    description: "AI-powered predictive models help forecast future sales trends, enabling data-driven business decisions."
  },
  {
    icon: Store,
    title: "Smart Store Operations",
    description: "Implement AI to automate checkout systems, enhance security, and streamline in-store experiences."
  },
  {
    icon: Tag,
    title: "Dynamic Pricing Strategies",
    description: "AI-driven pricing models adjust prices in real-time based on demand, competition, and customer behavior."
  }
]

export function AIApplications() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-foreground uppercase tracking-wider">AI APPLICATIONS</span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            Transforming Retail with AI Innovation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how AI revolutionizes the retail landscape — from hyper-personalized customer experiences to smart inventory management. Our AI-driven solutions empower retailers to forecast trends, optimize pricing, and enhance operational efficiency.
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
              className="bg-card p-8 rounded-xl border border-border hover:border-black transition-colors"
            >
              <app.icon className="w-12 h-12 text-black mb-6" />
              <h3 className="text-xl font-bold text-foreground mb-4">{app.title}</h3>
              <p className="text-muted-foreground">{app.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AIApplications;
