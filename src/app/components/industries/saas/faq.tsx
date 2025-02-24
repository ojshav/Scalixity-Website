"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "What is SaaS and how does it work?",
    answer: "SaaS (Software as a Service) is a cloud-based service where applications are hosted and managed by a provider, allowing users to access software via a web browser without installing it on local devices."
  },
  {
    question: "What are the benefits of using SaaS?",
    answer: "SaaS offers scalability, cost-efficiency, seamless updates, and accessibility from anywhere. It reduces hardware costs and streamlines collaboration for businesses of all sizes."
  },
  {
    question: "Can SaaS integrate with our existing systems?",
    answer: "Yes! SaaS solutions support API integrations and can seamlessly connect with your current CRM, ERP, and other business tools, ensuring smooth data flow and interoperability."
  },
  {
    question: "How secure is SaaS for business data?",
    answer: "SaaS providers implement robust security measures including data encryption, regular backups, access controls, and continuous monitoring to protect your sensitive business data."
  },
  {
    question: "Is SaaS customizable for specific business needs?",
    answer: "Absolutely! SaaS platforms often offer flexible configurations, custom workflows, and API options, allowing businesses to tailor solutions according to their unique requirements."
  }
]

export function FAQ() {  
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">FAQ</span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            SaaS Solutions — FAQs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get answers to common questions about SaaS, its benefits, and how it can streamline your business operations.
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

export default FAQ
