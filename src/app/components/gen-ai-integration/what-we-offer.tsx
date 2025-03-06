"use client"

import { motion } from 'framer-motion'

const services = [
  {
    title: "Tailored Generative AI Software Creation",
    description: "We understand that the data may not always be ready for us, so we use techniques like imputation, outlier detection, and data normalization to preprocess the data effectively and to remove noise and inconsistencies. Our AI engineers also do feature engineering based on domain knowledge and experimentation to enhance the power of the AI model."
  },
  {
    title: "Expertise in Generative AI Advisory",
    description: "Our process begins with an exhaustive examination of current systems, pinpointing the ideal solutions with precision, followed by professional guidance to facilitate a flawless incorporation and deployment of Generative AI technologies. Insightful understanding, industry best practices, and hands-on support are delivered to fine-tune the assimilation process, amplifying Generative AI’s advantages for the enterprise."
  },
  {
    title: "Integration of Generative AI",
    description: "Our role is to refine operational efficiencies by fluidly melding chosen Generative AI applications with existing operations. Uncertain about which tools suit the business? Our seasoned team deeply studies the distinctive requirements of the enterprise, delivering adept suggestions on the most fitting Generative AI tools for systematic incorporation."
  },
  {
    title: "Continual Sustenance and Assistance",
    description: "Our commitment goes beyond combining Generative AI tools into practical operating systems. To guarantee that the investment always generates the highest return on investment, we offer unmatched maintenance and help. The AI-driven operations continue to run smoothly due to the responsive assistance and anticipatory maintenance approach, which includes regular inspections, performance oversight, and quick problem-solving."
  }
]

export function WhatWeOffer() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Generative AI integration services we offer
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Elevate your business operations with cutting-edge AI solutions, tailored to fit specific needs and challenges.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-colors"
            >
              <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

