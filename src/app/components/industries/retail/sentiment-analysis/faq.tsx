"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "What is customer sentiment analysis?",
    answer: "Customer sentiment analysis uses AI to detect and interpret customer emotions and opinions from feedback, social media, and reviews — helping businesses understand satisfaction levels and emerging trends."
  },
  {
    question: "How does AI improve sentiment analysis?",
    answer: "AI processes large datasets rapidly, identifying patterns in customer emotions and feedback — providing real-time insights for better decision-making and customer experience optimization."
  },
  {
    question: "Why is sentiment analysis important for retail?",
    answer: "It helps retailers gauge customer reactions to products, services, and campaigns — allowing data-driven strategies to improve satisfaction, loyalty, and sales."
  },
  {
    question: "Can AI detect subtle emotions in customer feedback?",
    answer: "Yes! AI-powered models can pick up on nuanced language, emojis, and context — offering a deeper understanding of customer sentiments beyond simple positive or negative categorization."
  },
  {
    question: "How quickly can AI sentiment analysis be integrated?",
    answer: "Integration timelines vary, but most AI sentiment analysis solutions can be implemented within 2-3 months, depending on data complexity and platform requirements."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-[#FFF2D5] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-black mb-6">
            Customer Sentiment Analysis: FAQs
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Discover how AI-powered sentiment analysis empowers retailers to uncover customer emotions, drive strategic decisions, and boost customer loyalty.
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
                className="flex justify-between items-center w-full text-left p-4 bg-[#F3F1EB] rounded-lg border border-black hover:border-primary/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-black">{faq.question}</span>
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
                    <div className="p-4 bg-[#F3F1EB] mt-1 rounded-lg">
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

export default FAQ
