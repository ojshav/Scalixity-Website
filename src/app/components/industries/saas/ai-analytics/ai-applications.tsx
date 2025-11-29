"use client"

import { motion } from 'framer-motion'
import { BarChart3, PieChart, LineChart, Database, TrendingUp, Layers } from 'lucide-react'

const applications = [
  {
    icon: BarChart3,
    title: "Real-Time Data Analytics",
    description: "Leverage AI to process real-time data streams, uncover trends, and make informed decisions instantly."
  },
  {
    icon: PieChart,
    title: "Predictive Analytics & Forecasting",
    description: "Utilize AI models to forecast future trends, helping businesses plan strategies with confidence."
  },
  {
    icon: LineChart,
    title: "Anomaly Detection",
    description: "AI-powered systems identify outliers and anomalies in data, enhancing risk management and fraud detection."
  },
  {
    icon: Database,
    title: "Automated Data Cleaning & Processing",
    description: "AI automates data preprocessing — cleaning, sorting, and structuring datasets for deeper insights."
  },
  {
    icon: TrendingUp,
    title: "Business Intelligence Optimization",
    description: "Integrate AI with BI tools to deliver smarter dashboards, advanced visualizations, and actionable insights."
  },
  {
    icon: Layers,
    title: "AI-Driven Customer Segmentation",
    description: "Segment audiences intelligently using AI algorithms, personalizing marketing strategies and boosting engagement."
  }
]

export function AIApplications() {
  return (
    <section className="bg-[#590178] py-24"> {/* Lavender background */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-white uppercase tracking-wider">AI APPLICATIONS IN ANALYTICS</span>
          <h2 className="text-4xl font-bold text-white mt-4 mb-6">
            Unlock Insights with AI-Powered Analytics
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Explore how AI transforms data analytics — from real-time insights to predictive forecasting and intelligent automation.
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
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:border-black/70 transition-colors"
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

export default AIApplications;
