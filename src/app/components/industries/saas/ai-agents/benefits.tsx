"use client"

import { motion } from 'framer-motion'
import { Bot, BrainCircuit, Server, Settings2, ShieldCheck, BarChart3 } from 'lucide-react'

const benefits = [
  {
    icon: Bot,
    title: "Enhanced Customer Experience",
    description: "AI-driven chatbots providing instant, 24/7 customer support, improving response times and satisfaction."
  },
  {
    icon: BrainCircuit,
    title: "Automated Business Processes",
    description: "AI streamlining workflows, reducing human intervention, and increasing operational efficiency."
  },
  {
    icon: Server,
    title: "Optimized Cloud Resource Management",
    description: "AI dynamically allocating resources, minimizing costs, and ensuring peak performance for SaaS applications."
  },
  {
    icon: Settings2,
    title: "Proactive Maintenance & Issue Resolution",
    description: "Predicting and preventing system failures through AI-driven insights and automation."
  },
  {
    icon: ShieldCheck,
    title: "Improved Security & Compliance",
    description: "AI monitoring threats in real-time, ensuring regulatory compliance, and safeguarding data."
  },
  {
    icon: BarChart3,
    title: "Data-Driven Decision Making",
    description: "AI analyzing large datasets to provide actionable insights and improve strategic planning."
  }
]

export function Benefits() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Benefits of AI in the SaaS Industry
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Unlock the power of AI in SaaS — driving automation, efficiency, security, and data intelligence to transform businesses.
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
