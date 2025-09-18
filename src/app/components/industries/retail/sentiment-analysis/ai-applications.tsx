"use client"

import { motion } from 'framer-motion'
import { Smile, BarChart3, Search, HeartPulse, RefreshCcw, TrendingUp } from 'lucide-react'

const applications = [
  {
    icon: Smile,
    title: "Real-Time Sentiment Tracking",
    description: "AI agents analyze customer feedback across platforms instantly, helping you stay updated with public perception."
  },
  {
    icon: BarChart3,
    title: "Customer Feedback Analysis",
    description: "Automatically categorize and quantify feedback, providing actionable insights to enhance user satisfaction."
  },
  {
    icon: Search,
    title: "Trend Identification",
    description: "Detect emerging trends by analyzing sentiment shifts, allowing you to adapt strategies proactively."
  },
  {
    icon: HeartPulse,
    title: "Crisis Detection & Management",
    description: "Identify negative sentiment spikes early and respond swiftly to mitigate brand reputation risks."
  },
  {
    icon: RefreshCcw,
    title: "Continuous Learning & Adaptation",
    description: "AI agents refine sentiment models over time, ensuring more accurate and nuanced analysis."
  },
  {
    icon: TrendingUp,
    title: "Campaign Performance Optimization",
    description: "Use sentiment insights to tweak marketing campaigns in real-time, maximizing impact and engagement."
  }
]

export function AIApplications() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">AI APPLICATIONS</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Empowering Businesses with AI-Powered Sentiment Analysis
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Explore how AI agents revolutionize customer sentiment analysis — driving real-time insights, trend detection, and impactful strategies.
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
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:border-black/50 transition-colors"
            >
              <app.icon className="w-12 h-12 text-black mb-6" />
              <h3 className="text-xl font-bold text-black mb-4">{app.title}</h3>
              <p className="text-black/80">{app.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AIApplications
