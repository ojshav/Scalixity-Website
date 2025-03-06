"use client"

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const reasons = [
  {
    title: "Enterprise-Grade Expertise",
    description: "We have extensive experience in developing secure, scalable, and high-performance enterprise applications tailored to complex business needs."
  },
  {
    title: "Custom Enterprise Solutions",
    description: "Every enterprise has unique requirements. We design and implement bespoke applications that enhance operational efficiency and drive innovation."
  },
  {
    title: "End-to-End Development & Integration",
    description: "From initial planning to deployment and ongoing optimization, we provide full-cycle development and seamless integration with existing enterprise systems."
  },
  {
    title: "Security & Compliance Focus",
    description: "We prioritize enterprise security, compliance, and governance, ensuring adherence to industry regulations and best practices."
  }
]

export function WhyChooseUs() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">WHY US</span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            Why Choose Us for Enterprise App Development
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our expertise in enterprise application development ensures scalable, secure, and efficient solutions tailored to business demands.
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

export default WhyChooseUs;
