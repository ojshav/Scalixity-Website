"use client";

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "What are the benefits of developing applications on the Stellar blockchain?",
    answer: "Stellar provides a fast, low-cost, and scalable blockchain network, making it ideal for financial applications and cross-border payments."
  },
  {
    question: "What types of applications can be built on Stellar?",
    answer: "Stellar supports applications like remittance platforms, payment gateways, tokenized assets, decentralized exchanges, and financial inclusion solutions."
  },
  {
    question: "How does Stellar ensure security and compliance?",
    answer: "Stellar uses a consensus protocol that ensures transaction security and reliability while also providing tools to comply with financial regulations."
  },
  {
    question: "Do you provide smart contract development for Stellar?",
    answer: "Yes, we develop secure and efficient smart contracts using Stellar’s Soroban framework, optimizing them for performance and scalability."
  },
  {
    question: "How does Stellar compare to other blockchain platforms?",
    answer: "Stellar stands out with its focus on financial applications, low transaction costs, high-speed settlements, and built-in compliance mechanisms."
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
            Stellar App Development FAQ
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about our Stellar app development services and processes.
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

export default FAQ;
