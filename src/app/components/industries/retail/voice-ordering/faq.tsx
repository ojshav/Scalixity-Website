"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "What is a voice ordering system?",
    answer: "A voice ordering system uses AI-powered voice recognition to let customers place orders, search for products, and check out — all through simple voice commands."
  },
  {
    question: "How does AI improve voice ordering?",
    answer: "AI enhances accuracy by understanding speech patterns, accents, and context, making interactions seamless and personalized for each customer."
  },
  {
    question: "Can voice ordering integrate with existing retail systems?",
    answer: "Yes! Our voice AI solutions integrate with your POS, CRM, and inventory systems, ensuring smooth order processing and data synchronization."
  },
  {
    question: "Is voice ordering secure?",
    answer: "Absolutely. We use advanced AI security protocols, including voice authentication and data encryption, to protect customer information."
  },
  {
    question: "What industries benefit from voice ordering?",
    answer: "Voice ordering is ideal for retail, food delivery, e-commerce, and even hospitality — providing hands-free, fast, and user-friendly shopping experiences."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            Voice Ordering Solutions: FAQs
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Discover how AI voice technology transforms customer experiences — making ordering fast, accurate, and hands-free.
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
