"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "What is dynamic pricing in retail?",
    answer: "Dynamic pricing is an AI-driven strategy that adjusts product prices in real-time based on factors like demand, competition, and market trends."
  },
  {
    question: "How does AI enhance dynamic pricing?",
    answer: "AI models analyze vast datasets — customer behavior, competitor pricing, and seasonal trends — to optimize prices instantly, maximizing both sales and profit margins."
  },
  {
    question: "Can dynamic pricing affect customer satisfaction?",
    answer: "Yes! AI ensures personalized discounts and fair price adjustments, boosting customer trust by offering competitive prices tailored to demand and user preferences."
  },
  {
    question: "Is dynamic pricing suitable for small retail businesses?",
    answer: "Absolutely. AI-powered dynamic pricing can scale to suit businesses of all sizes, helping smaller retailers stay competitive and agile in the market."
  },
  {
    question: "How quickly can AI dynamic pricing solutions be implemented?",
    answer: "Implementation typically takes 2-4 months, depending on the complexity of your pricing models and data integration needs."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            Dynamic Pricing Solutions: FAQs
          </h2>
          <p className="text-xl text-black/80 max-w-3xl mx-auto">
            Explore how AI-powered dynamic pricing transforms retail strategies — ensuring competitive pricing, increased revenue, and customer satisfaction.
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
                className="flex justify-between items-center w-full text-left p-4 bg-[#F3F1EB] rounded-lg border border-black"
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
                    <div className="p-4 bg-[#F3F1EB] mt-1 rounded-lg border border-black">
                      <p className="text-black/80">{faq.answer}</p>
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
