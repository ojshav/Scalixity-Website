"use client"

import { motion } from 'framer-motion'
import { Mic, Bot, Headphones, ShoppingCart, UserCheck, ShieldCheck } from 'lucide-react'

const applications = [
  {
    icon: Mic,
    title: "Voice-Activated Ordering",
    description: "Enable seamless voice commands for browsing products, adding to carts, and completing purchases effortlessly."
  },
  {
    icon: Bot,
    title: "AI-Powered Recommendations",
    description: "Leverage AI agents to suggest personalized product options based on customer preferences and purchase history."
  },
  {
    icon: Headphones,
    title: "24/7 Virtual Assistants",
    description: "AI voice bots provide round-the-clock customer support, handling queries and guiding users through their shopping journey."
  },
  {
    icon: ShoppingCart,
    title: "Smart Cart Optimization",
    description: "AI monitors cart activity, offering real-time voice prompts for discounts or bundle deals to prevent cart abandonment."
  },
  {
    icon: UserCheck,
    title: "Personalized Shopping Experiences",
    description: "AI tailors voice interactions by recognizing user profiles, creating a customized shopping journey every time."
  },
  {
    icon: ShieldCheck,
    title: "Secure Voice Authentication",
    description: "Ensure safe transactions with AI-powered voice recognition and biometric data security."
  }
]

export function AIApplications() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">AI APPLICATIONS</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Revolutionizing Retail with AI-Powered Voice Ordering
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Explore how AI voice agents transform the shopping experience — driving engagement, boosting sales, and ensuring seamless, secure transactions.
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
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:border-black transition-colors"
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
