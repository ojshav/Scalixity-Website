"use client"

import { motion } from 'framer-motion'

const services = [
  {
    title: "Evaluating opportunities for Generative AI",
    description: "Our speciality is figuring out how to integrate Generative AI into the commercial environment. To determine how realistic these cutting-edge ideas actually are, we do extensive research, look for possible game-changers, and perform exhaustive reality checks."
  },
  {
    title: "Selecting the right Generative AI technology",
    description: "We remove the element of guessing from selecting the best Generative AI technology. By carefully examining each tool's capabilities and comparing them to what is required, we ensure that the one chosen fits in exactly and performs flawlessly."
  },
  {
    title: "Integrating Generative AI",
    description: "Transitions should be seamless. We introduce Generative AI applications with finesse, incorporating them into current workflows and systems. We work to maintain harmony while maximising the benefits of Generative AI."
  },
  {
    title: "Health Checks & Tune-Ups for Generative AI",
    description: "We never lose sight of the goal. The package includes ongoing monitoring and adjustment of Generative AI systems. We are constantly vigilant and making the smallest adjustments necessary to guarantee dependable outcomes every single day."
  },
  {
    title: "Privacy & compliance protection in Generative AI",
    description: "Data privacy is a priority, not just a checkbox to be checked. We employ our familiarity with laws like the GDPR, CCPA, and HIPAA to protect Generative AI systems. We put a lot of effort into reducing threats while maintaining unwavering data integrity."
  },
  {
    title: "Generative AI Instruction & Assistance",
    description: "We believe that knowledge is power and are committed to sharing it. Our training courses are meant to give people the skills they need to make the most of Generative AI applications. And if there are any hiccups along the way, we're always here to help."
  }
]

export function WhatWeOffer() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Our Generative AI consulting services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide businesses a competitive edge. We're here to assist you in leveraging the power
            of AI in a way that makes sense for your company, from inspiration through implementation.
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

