"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "What are AI solutions in retail?",
    answer: "AI solutions in retail leverage machine learning, data analytics, and automation to enhance customer experiences, optimize operations, and drive sales growth."
  },
  {
    question: "How can AI improve customer experiences?",
    answer: "AI personalizes shopping experiences by recommending products, offering virtual assistants for support, and analyzing customer preferences in real-time."
  },
  {
    question: "Can AI help with inventory management?",
    answer: "Yes, AI predicts demand patterns, monitors stock levels, and automates reordering processes to prevent stockouts or overstock situations."
  },
  {
    question: "How does AI support dynamic pricing?",
    answer: "AI algorithms adjust prices in real-time based on demand, competitor pricing, and other market factors to maximize profits."
  },
  {
    question: "Is AI secure for handling customer data?",
    answer: "Absolutely. AI solutions use encryption, access controls, and fraud detection algorithms to safeguard customer data and prevent security breaches."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-[#FFF2D5] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            AI Solutions in Retail: FAQs
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Explore common questions about AI solutions and their transformative impact on the retail industry.
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
              className="mb-4 border-2 border-black rounded-lg"
            >
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-[#F5F5DC] rounded-lg"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-black">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-black" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-black" />
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
                    <div className="p-4 bg-[#F5F5DC] mt-1 rounded-lg border-t-2 border-black">
                      <p className="text-black">{faq.answer}</p>
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
