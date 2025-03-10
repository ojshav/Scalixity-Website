"use client"

import { motion } from 'framer-motion'
import { Bot, Settings, Code, Cpu, Rocket, Activity } from 'lucide-react'

const saasApplications = [
  {
    icon: Bot,
    title: "AI-Powered Chatbots",
    description: "Deploy intelligent chatbots to handle customer queries, automate responses, and enhance user experience."
  },
  {
    icon: Settings,
    title: "Workflow Automation",
    description: "Integrate AI to streamline repetitive tasks, optimize workflows, and boost operational efficiency."
  },
  {
    icon: Code,
    title: "Predictive Maintenance",
    description: "Use AI algorithms to predict system failures and schedule proactive maintenance, reducing downtime."
  },
  {
    icon: Cpu,
    title: "Smart Data Processing",
    description: "Leverage AI for data cleaning, structuring, and processing — transforming raw data into actionable insights."
  },
  {
    icon: Rocket,
    title: "Dynamic Personalization",
    description: "Empower SaaS platforms to deliver personalized experiences by analyzing user behavior and preferences."
  },
  {
    icon: Activity,
    title: "Real-Time Analytics",
    description: "Enable real-time AI analytics to track user activity, uncover trends, and drive data-informed decisions."
  }
]

export function AIApplications() {
  return (
    <section className="bg-[#A8B2E7] py-24"> {/* Lavender background */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">AI APPLICATIONS IN SAAS AUTOMATION</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Transform SaaS with AI-Driven Automation
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Discover how AI revolutionizes SaaS — from intelligent chatbots to predictive analytics and personalized user experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {saasApplications.map((app, index) => (
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
