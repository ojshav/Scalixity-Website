"use client"

import { motion } from 'framer-motion'

const processSteps = [
  {
    title: "Assessment & Strategy Development",
    description: "We begin by understanding your business objectives and identifying how Google Cloud Platform (GCP) application development can optimize efficiency and foster innovation. Our strategic approach ensures smooth integration with your existing cloud infrastructure."
  },
  {
    title: "Prototype & MVP Development",
    description: "We rapidly build prototypes and minimum viable products (MVPs) to validate functionalities, gather user feedback, and refine solutions based on real-world performance."
  },
  {
    title: "Full-Scale GCP Application Deployment",
    description: "Upon successful validation, we execute a robust, scalable, and secure application leveraging GCP services such as Google Kubernetes Engine (GKE), Cloud Functions, and Firestore to ensure high performance and reliability."
  },
  {
    title: "Optimization & Continuous Support",
    description: "After deployment, we continuously monitor application performance, optimize workloads, and provide ongoing support to maximize efficiency while keeping cloud costs under control."
  }
]

export function ProcessGcpAppDev() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Our GCP Application Development Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We implement a structured approach to GCP application development, ensuring secure, scalable, and high-performing solutions tailored to your business needs.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-primary/20" />

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-[30px] h-[30px] bg-primary rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-background rounded-full" />
                </div>
                
                <div className="bg-card p-8 rounded-xl border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
