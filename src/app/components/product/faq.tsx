"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "What are the benefits of product development with your team?",
    answer: "We provide end-to-end product development services, from ideation to deployment, ensuring high-quality, scalable, and user-centric solutions."
  },
  {
    question: "What industries do you specialize in for product development?",
    answer: "We specialize in various industries, including healthcare, finance, e-commerce, education, manufacturing, retail, technology, and energy."
  },
  {
    question: "How do you ensure the success of a product?",
    answer: "Our structured approach includes market research, user experience design, agile development, and continuous feedback to create a successful product."
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Yes, we offer ongoing maintenance, feature updates, and performance optimization to keep your product running smoothly."
  },
  {
    question: "How do you handle security and compliance?",
    answer: "We implement industry best practices, including data encryption, secure authentication, and compliance with relevant regulations like GDPR and HIPAA."
  }
]

export function ProductDevelopmentFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">FAQ</span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            Product Development Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about our product development services and processes.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-card rounded-lg"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-foreground">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-primary" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-card mt-1 rounded-lg">
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductDevelopmentFAQ;
