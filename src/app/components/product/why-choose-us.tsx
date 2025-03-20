"use client"

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const reasons = [
  {
    title: "Proven Expertise in Product Development",
    description: "We specialize in building innovative, scalable, and high-performance products tailored to market needs, leveraging cutting-edge technology and agile methodologies."
  },
  {
    title: "Custom-Tailored Solutions",
    description: "Every product is unique. We craft customized development strategies to optimize performance, enhance user experience, and drive business growth."
  },
  {
    title: "End-to-End Product Lifecycle Support",
    description: "From ideation to deployment and beyond, we offer comprehensive support to ensure your product evolves with market trends and customer demands."
  },
  {
    title: "Focus on Quality & Security",
    description: "We integrate best practices in security, compliance, and quality assurance, ensuring that your product meets industry standards and user expectations."
  }
]

export function WhyChooseUs() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">WHY US</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Why Choose Us for Product Development
          </h2>
          <p className="text-xl text-black/80 max-w-3xl mx-auto">
            Our team brings deep expertise, innovation, and a results-driven approach to help you build, scale, and refine world-class products.
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
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:border-black/80 transition-colors"
            >
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">{reason.title}</h3>
                  <p className="text-black/80">{reason.description}</p>
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
