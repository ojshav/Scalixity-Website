"use client";

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "What are the benefits of developing applications on the Cardano blockchain?",
    answer: "Cardano offers a secure, scalable, and energy-efficient blockchain infrastructure that ensures low transaction fees and high reliability."
  },
  {
    question: "What types of applications can be built on Cardano?",
    answer: "You can develop a wide range of applications, including DeFi platforms, NFT marketplaces, identity solutions, and enterprise blockchain applications."
  },
  {
    question: "How does Cardano ensure security and compliance?",
    answer: "Cardano uses a research-driven approach with rigorous peer-reviewed development, ensuring robust security and adherence to global regulatory standards."
  },
  {
    question: "Do you provide smart contract development for Cardano?",
    answer: "Yes, we develop secure and efficient smart contracts using Plutus and Marlowe, optimizing them for performance and security."
  },
  {
    question: "How does Cardano compare to other blockchain platforms?",
    answer: "Cardano stands out due to its scientific approach, energy efficiency, and ability to process transactions at scale with minimal environmental impact."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-[#F3F1EB] py-24"> {/* Soft beige background */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">FAQ</span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            Cardano App Development FAQ
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about our Cardano app development services and processes.
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
                className="flex justify-between items-center w-full text-left p-4 bg-[#A8B2E7] rounded-lg border border-gray-500" 
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
                    <div className="p-4 bg-[#A8B2E7] mt-1 rounded-lg border border-gray-500">
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
