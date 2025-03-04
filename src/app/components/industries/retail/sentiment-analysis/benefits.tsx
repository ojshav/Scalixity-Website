"use client"

import { motion } from 'framer-motion'
import { Smile, BarChart3, Search, HeartPulse, RefreshCcw, TrendingUp } from 'lucide-react'

const benefits = [
  {
    icon: Smile,
    title: "Enhanced Customer Experience",
    description: "Understand customer emotions in real-time, allowing personalized responses and boosting satisfaction."
  },
  {
    icon: BarChart3,
    title: "Data-Driven Decision Making",
    description: "Leverage AI insights from customer feedback to refine products, services, and marketing strategies."
  },
  {
    icon: Search,
    title: "Identify Emerging Trends",
    description: "Detect shifts in customer sentiments early, enabling proactive responses to market changes."
  },
  {
    icon: HeartPulse,
    title: "Strengthen Brand Loyalty",
    description: "Respond to customer concerns swiftly, building trust and long-term brand commitment."
  },
  {
    icon: RefreshCcw,
    title: "Real-Time Sentiment Monitoring",
    description: "Track evolving customer opinions as they happen, keeping your strategies agile and relevant."
  },
  {
    icon: TrendingUp,
    title: "Boost Sales & Conversions",
    description: "Use AI-driven sentiment data to optimize campaigns, leading to increased customer engagement and revenue."
  }
]

export function Benefits() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Benefits of AI-Powered Customer Sentiment Analysis
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how AI-driven sentiment analysis empowers your business — from enhancing customer relationships to driving data-backed decisions.
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

export default Benefits
