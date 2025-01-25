"use client"

import { motion } from 'framer-motion'
import { Brain, Zap, Lock, BarChart, Users, Cog } from 'lucide-react'

const benefits = [
{
  icon: Brain,
  title: "Advanced Language Understanding",
  description: "Our LLMs demonstrate sophisticated comprehension of context, nuance, and complex language patterns across multiple domains."
},
{
  icon: Zap,
  title: "High Performance",
  description: "Optimized for speed and efficiency, our LLMs deliver rapid responses while maintaining high accuracy and reliability."
},
{
  icon: Lock,
  title: "Enterprise-Grade Security",
  description: "Built with robust security measures to protect sensitive data and ensure compliance with industry regulations."
},
{
  icon: BarChart,
  title: "Scalable Architecture",
  description: "Designed to grow with your business, our LLMs can handle increasing workloads while maintaining consistent performance."
},
{
  icon: Users,
  title: "Seamless Integration",
  description: "Easy integration with existing systems and workflows through well-documented APIs and comprehensive support."
},
{
  icon: Cog,
  title: "Customization Options",
  description: "Tailor the LLM to your specific needs with custom training, fine-tuning, and domain adaptation capabilities."
}
]

export function Benefits() {
return (
  <section className="bg-background py-24">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <span className="text-sm text-muted-foreground uppercase tracking-wider">BENEFITS</span>
        <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
          Why Choose Our LLM Development Services
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Leverage our expertise in LLM development to transform your business operations
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

