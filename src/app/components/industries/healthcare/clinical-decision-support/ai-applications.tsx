"use client"

import { motion } from 'framer-motion'
import { Stethoscope, AlertCircle, BarChart, CheckCircle } from 'lucide-react'

const clinicalSupportFeatures = [
  {
    icon: BarChart,
    title: "Real-Time Data Analysis",
    description: "AI processes patient data instantly, identifying patterns and predicting health risks."
  },
  {
    icon: CheckCircle,
    title: "Evidence-Based Recommendations",
    description: "Delivers treatment suggestions based on the latest medical research and guidelines."
  },
  {
    icon: AlertCircle,
    title: "Risk Assessment & Alerts",
    description: "Detects early warning signs and alerts clinicians to potential complications."
  }
]

export function AIAPPLICATION() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">
            AI APPLICATION
          </span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            Clinical Decision Support
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empower healthcare professionals with AI-driven insights for faster, more accurate clinical decisions — improving patient outcomes and reducing risks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clinicalSupportFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-colors"
            >
              <feature.icon className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-bold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AIAPPLICATION
