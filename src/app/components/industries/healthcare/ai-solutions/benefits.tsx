"use client"

import { motion } from 'framer-motion'
import { Heart, Brain, BarChartIcon as ChartBar, Clock, Shield, Users } from 'lucide-react'

const benefits = [
  {
    icon: Heart,
    title: "Enhanced Patient Outcomes",
    description: "Our AI solutions deliver precise diagnostics and personalized treatment strategies, improving patient care."
  },
  {
    icon: Brain,
    title: "Smart Diagnostics",
    description: "AI algorithms enable early detection of diseases, supporting timely medical interventions."
  },
  {
    icon: ChartBar,
    title: "Optimized Operations",
    description: "Streamline workflows and allocate resources effectively using AI-powered analytics."
  },
  {
    icon: Clock,
    title: "Faster Service Delivery",
    description: "Reduce patient wait times through AI-driven scheduling and dynamic queue management."
  },
  {
    icon: Shield,
    title: "Data Security & Compliance",
    description: "Protect patient data with AI-enhanced cybersecurity and ensure regulatory compliance."
  },
  {
    icon: Users,
    title: "Seamless Collaboration",
    description: "Facilitate communication between healthcare teams and patients using AI-powered tools."
  }
]

export function Benefits() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            The Impact of AI in Healthcare
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore how Scalixity’s AI solutions enhance healthcare services by boosting efficiency, security, and patient outcomes.
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
