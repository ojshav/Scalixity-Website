"use client"

import { motion } from 'framer-motion'
import { FileText, BrainCircuit, Clock, ShieldCheck, Layers, BarChart } from 'lucide-react'

const benefits = [
  {
    icon: FileText,
    title: "Automated Documentation",
    description: "AI agents streamline clinical documentation by transcribing, summarizing, and organizing patient interactions."
  },
  {
    icon: BrainCircuit,
    title: "Intelligent Data Extraction",
    description: "Extract key medical data from unstructured notes, ensuring accurate and actionable insights."
  },
  {
    icon: Clock,
    title: "Real-Time Updates",
    description: "Instantly update patient records, ensuring healthcare providers have the latest information at all times."
  },
  {
    icon: ShieldCheck,
    title: "Data Privacy & Security",
    description: "AI ensures compliance with data protection regulations, encrypting sensitive health information."
  },
  {
    icon: Layers,
    title: "Seamless System Integration",
    description: "Integrate AI documentation solutions into existing EHR systems without disrupting workflows."
  },
  {
    icon: BarChart,
    title: "Enhanced Analytics",
    description: "Unlock powerful insights by analyzing documentation data for trends and predictive analytics."
  }
]

export function Benefits() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Benefits of AI Documentation Intelligence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leverage AI to automate, secure, and enhance medical documentation processes for improved patient care.
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

export default Benefits;
