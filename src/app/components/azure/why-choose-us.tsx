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
    <section className="py-24" style={{ backgroundColor: '#A8B2E7' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-black">WHY US</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Why Choose Scalixity for Azure Consulting
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
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
              className="p-8 rounded-xl border border-black transition-colors"
              style={{ backgroundColor: '#F3F1EB' }}
            >
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">{reason.title}</h3>
                  <p className="text-black">{reason.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
