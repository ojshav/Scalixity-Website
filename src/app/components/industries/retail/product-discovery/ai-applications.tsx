"use client"

import { motion } from 'framer-motion'
import { Search, Image, Mic, ShoppingCart, Sparkle, Globe } from 'lucide-react'

const applications = [
  {
    icon: Search,
    title: "AI-Powered Search",
    description: "Leverage AI to deliver intuitive, intent-based search experiences — helping customers find products quickly and accurately."
  },
  {
    icon: Image,
    title: "Visual Product Discovery",
    description: "Allow users to search using images — AI identifies colors, styles, and patterns to suggest visually similar products instantly."
  },
  {
    icon: Mic,
    title: "Voice-Enabled Search",
    description: "Integrate AI voice search to let customers find products using natural language, making shopping as simple as speaking."
  },
  {
    icon: ShoppingCart,
    title: "Smart Recommendations",
    description: "AI agents analyze browsing history and preferences to provide personalized product suggestions and boost cross-selling."
  },
  {
    icon: Sparkle,
    title: "Contextual Product Suggestions",
    description: "Offer dynamic product recommendations based on real-time data like seasonality, user location, and trending items."
  },
  {
    icon: Globe,
    title: "Omnichannel Discovery",
    description: "Synchronize AI-driven product discovery across your website, app, and in-store kiosks for a seamless shopping journey."
  }
]

export function AIApplications() {
  return (
    <section className="bg-[#590178] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-white uppercase tracking-wider">AI APPLICATIONS</span>
          <h2 className="text-4xl font-bold text-white mt-4 mb-6">
            AI-Powered Solutions for Enhanced Product Discovery
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Revolutionize retail experiences with AI-driven product discovery — combining visual, voice, and context-aware technologies to boost customer engagement and sales.
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
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:border-primary/50 transition-colors"
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

export default AIApplications
