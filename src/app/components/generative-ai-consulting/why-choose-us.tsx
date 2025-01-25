"use client"

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const reasons = [
  {
    title: "Mastery in Generative AI",
    description: "Focusing on inventiveness and personalization, Markovate excels in crafting resilient Generative AI solutions custom-built to meet distinct needs. Our services bring about a competitive advantage that stimulates growth, spurs creativity, and sets the stage for triumph."
  },
  {
    title: "Personalized Solutions",
    description: "Since each company has different requirements, Markovate distinguishes itself by providing AI solutions that are specifically crafted to support business goals and overcome particular obstacles. We increase the effectiveness and reach of Generative AI by carefully tailoring our services to meet particular needs."
  },
  {
    title: "Support Throughout the Lifecycle",
    description: "Our consulting services in Generative AI offer comprehensive assistance, covering the whole range from planning through deployment and continuous maintenance. This continuous assistance throughout the project's development guarantees a smooth ride while maximizing the advantages of Generative AI."
  },
  {
    title: "Dedicated to Moral AI",
    description: "We are steadfast in our commitment to developing Generative AI solutions that are moral, open, and lawful. We prioritize user security, trust, and privacy, and we know that ethical AI practises are essential to fostering confidence and ensuring long-term success."
  }
]

export function WhyChooseUs() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">WHY US</span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            Why choose Markovate for Generative AI consulting
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Since Markovate combines cutting-edge AI technology with a thorough understanding of
            business dynamics. We are your strategic partners in creating a smart, agile, and sustainable
            future.
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

