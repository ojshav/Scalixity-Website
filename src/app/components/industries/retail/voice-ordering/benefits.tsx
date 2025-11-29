"use client"

import { motion } from 'framer-motion'
import { Mic, Clock, ThumbsUp, Users, ShoppingCart, ShieldCheck } from 'lucide-react'

const benefits = [
  {
    icon: Mic,
    title: "Seamless Hands-Free Ordering",
    description: "Enable customers to place orders effortlessly using voice commands, enhancing convenience and accessibility."
  },
  {
    icon: Clock,
    title: "Faster Checkout Process",
    description: "Reduce wait times with instant voice-powered transactions, streamlining the shopping experience."
  },
  {
    icon: ThumbsUp,
    title: "Enhanced User Experience",
    description: "Deliver personalized interactions by leveraging AI to understand customer preferences and speech patterns."
  },
  {
    icon: Users,
    title: "Inclusive and Accessible",
    description: "Cater to all users — including those with disabilities — by offering intuitive voice-activated interfaces."
  },
  {
    icon: ShoppingCart,
    title: "Increased Sales Opportunities",
    description: "Boost sales by recommending products through AI-powered voice suggestions during the order process."
  },
  {
    icon: ShieldCheck,
    title: "Secure Voice Authentication",
    description: "Ensure safe transactions with AI-driven voice recognition and encrypted data protection."
  }
]

export function Benefits() {
  return (
    <section className="bg-[#590178] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Benefits of AI-Powered Voice Ordering Solutions
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Transform customer experiences with AI voice technology — making ordering fast, intuitive, and secure.
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
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:border-black transition-colors"
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

export default Benefits
