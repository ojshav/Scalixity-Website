"use client"

import { motion } from 'framer-motion'
import { Brain, BotIcon as Robot, BarChartIcon as ChartBar, Shield, Code, Cloud } from 'lucide-react'

const services = [
  {
    icon: Brain,
    title: "Machine Learning Solutions",
    description: "Develop custom machine learning models to extract insights from your data and automate decision-making processes."
  },
  {
    icon: Robot,
    title: "Natural Language Processing",
    description: "Build advanced NLP systems for text analysis, sentiment analysis, and language understanding."
  },
  {
    icon: ChartBar,
    title: "Predictive Analytics",
    description: "Implement AI-driven predictive models to forecast trends and make data-driven business decisions."
  },
  {
    icon: Shield,
    title: "AI-Powered Security",
    description: "Enhance your cybersecurity with AI-based threat detection and prevention systems."
  },
  {
    icon: Code,
    title: "AI Integration",
    description: "Seamlessly integrate AI capabilities into your existing software and systems."
  },
  {
    icon: Cloud,
    title: "AI-as-a-Service Solutions",
    description: "Develop scalable, cloud-based AI solutions for flexible and efficient deployment."
  }
]

export function WhatWeOffer() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            Our AI Development Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide a comprehensive range of AI development services to help businesses innovate and stay ahead of the competition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-colors"
            >
              <service.icon className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

