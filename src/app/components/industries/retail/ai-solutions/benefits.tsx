"use client"

import { motion } from 'framer-motion'
import { ShoppingCart, BarChart3, Tag, Users, ShieldCheck, Clock } from 'lucide-react'

const benefits = [
  {
    icon: ShoppingCart,
    title: "Enhanced Customer Experience",
    description: "AI-driven personalization improves shopping journeys by recommending products tailored to individual preferences."
  },
  {
    icon: BarChart3,
    title: "Data-Driven Decision Making",
    description: "Leverage AI insights to forecast sales, optimize inventory, and uncover hidden market trends."
  },
  {
    icon: Tag,
    title: "Real-Time Dynamic Pricing",
    description: "Implement AI algorithms that adjust prices instantly based on demand, competition, and buying patterns."
  },
  {
    icon: Users,
    title: "Customer Sentiment Analysis",
    description: "Gain insights into customer feedback and social media trends to build stronger brand relationships."
  },
  {
    icon: ShieldCheck,
    title: "Fraud Detection & Security",
    description: "AI agents identify suspicious activities and protect retail data, ensuring secure transactions."
  },
  {
    icon: Clock,
    title: "Operational Efficiency",
    description: "Automate routine tasks and streamline supply chain processes with AI solutions."
  }
]

export function Benefits() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            Benefits of AI Solutions in Retail
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Unlock the potential of AI — transforming retail by boosting customer engagement, improving operations, and driving data-backed decisions.
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
              className="bg-[#F5F5DC] p-8 rounded-xl border border-border hover:border-primary/50 transition-colors"
            >
              <benefit.icon className="w-12 h-12 text-black mb-6" />
              <h3 className="text-xl font-bold text-black mb-4">{benefit.title}</h3>
              <p className="text-black">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
