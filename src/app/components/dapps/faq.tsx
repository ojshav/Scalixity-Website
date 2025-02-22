"use client";

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "What are the benefits of developing decentralized applications (dApps)?",
    answer: "dApps provide enhanced security, transparency, and decentralization, reducing reliance on intermediaries and increasing trust in transactions."
  },
  {
    question: "What types of dApps can be built on blockchain?",
    answer: "You can develop a wide range of applications, including DeFi platforms, NFT marketplaces, identity verification systems, and supply chain solutions."
  },
  {
    question: "How do dApps ensure security and compliance?",
    answer: "dApps use cryptographic security and decentralized consensus mechanisms, often aligning with industry standards to ensure compliance and data integrity."
  },
  {
    question: "Do you provide smart contract development for dApps?",
    answer: "Yes, we develop secure and efficient smart contracts using industry-leading blockchain technologies, optimizing them for scalability and security."
  },
  {
    question: "How do dApps compare to traditional applications?",
    answer: "dApps operate on decentralized networks, providing higher security, immutability, and reduced risk of censorship compared to centralized applications."
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
            dApps Development FAQ
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about our decentralized application development services and processes.
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
