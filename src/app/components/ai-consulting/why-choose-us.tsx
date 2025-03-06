"use client"

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const reasons = [
  {
    title: "Expertise in AI Solutions",
    description: "Scalixity specializes in delivering advanced AI solutions tailored to specific business needs. Our team brings deep technical knowledge and experience in implementing AI-driven strategies that drive efficiency and innovation."
  },
  {
    title: "Customized AI Strategies",
    description: "We understand that every business has unique challenges, so we develop AI solutions that align with your objectives. Our approach ensures that AI is seamlessly integrated into your operations for maximum impact."
  },
  {
    title: "End-to-End AI Consulting",
    description: "From initial consultation to deployment and ongoing support, we provide comprehensive AI consulting services. We guide businesses through every phase of AI adoption, ensuring smooth implementation and long-term success."
  },
  {
    title: "Commitment to Ethical AI",
    description: "At Scalixity, we prioritize ethical AI development, ensuring transparency, fairness, and compliance with industry regulations. Our goal is to create AI solutions that are responsible, trustworthy, and beneficial to all stakeholders."
  }
]

export function WhyChooseUs() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">WHY US</span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            Why choose Scalixity for AI Consulting
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Scalixity combines cutting-edge AI expertise with a deep understanding of business dynamics.
            We are your trusted partners in building intelligent, scalable, and ethical AI solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
