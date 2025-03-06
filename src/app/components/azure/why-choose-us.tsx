"use client"

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const reasons = [
  {
    title: "Expertise in Azure Cloud Solutions",
    description: "With deep knowledge of Azure services, Scalixity specializes in building secure, scalable, and high-performance cloud solutions tailored to unique business needs."
  },
  {
    title: "Customized Azure Architectures",
    description: "Every business has unique requirements. We design and implement Azure architectures that optimize performance, reduce costs, and enhance security."
  },
  {
    title: "End-to-End Azure Support",
    description: "From initial consultation to deployment and ongoing management, we provide full lifecycle support to ensure seamless Azure adoption and operation."
  },
  {
    title: "Commitment to Security & Compliance",
    description: "We prioritize security and compliance, ensuring that Azure implementations adhere to industry best practices, regulations, and governance standards."
  }
]

export function WhyChooseUs() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">WHY US</span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            Why choose Scalixity for Azure Consulting
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Scalixity combines deep Azure expertise with a business-driven approach, helping organizations maximize the potential of cloud computing for innovation and efficiency.
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
