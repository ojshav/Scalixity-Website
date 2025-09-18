"use client"

import { motion } from 'framer-motion'
import { Heart, Brain, BarChartIcon as ChartBar, Clock, Shield, Users } from 'lucide-react'

const benefits = [
  {
    icon: Heart,
    title: "Improved Patient Care",
    description: "AI-powered diagnostics and personalized treatment plans enhance patient outcomes."
  },
  {
    icon: Brain,
    title: "Advanced Diagnostics",
    description: "Machine learning algorithms assist in early and accurate disease detection."
  },
  {
    icon: ChartBar,
    title: "Operational Efficiency",
    description: "Streamline administrative tasks and optimize resource allocation."
  },
  {
    icon: Clock,
    title: "Reduced Wait Times",
    description: "AI-driven scheduling and patient flow management minimize delays."
  },
  {
    icon: Shield,
    title: "Enhanced Data Security",
    description: "Robust AI systems protect sensitive patient information and ensure compliance."
  },
  {
    icon: Users,
    title: "Collaborative Healthcare",
    description: "Facilitate seamless communication between healthcare providers and patients."
  }
]

export function Benefits() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            Benefits of AI in Healthcare
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Discover how our AI solutions are revolutionizing the healthcare industry and improving patient outcomes.
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
