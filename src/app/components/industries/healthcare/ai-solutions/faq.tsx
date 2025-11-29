"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "How can AI benefit the healthcare industry?",
    answer: "AI revolutionizes healthcare by enhancing diagnostic accuracy, streamlining operations, enabling predictive analytics, and personalizing patient care. It reduces human error and boosts efficiency."
  },
  {
    question: "Is AI safe to use with sensitive patient data?",
    answer: "Absolutely. Our AI systems use advanced encryption, secure data protocols, and comply with industry standards like HIPAA to ensure patient data is protected and confidential."
  },
  {
    question: "Can AI integrate with our current healthcare infrastructure?",
    answer: "Yes! Our AI solutions are designed to seamlessly integrate with existing Electronic Health Records (EHR) systems, medical imaging software, and hospital management platforms."
  },
  {
    question: "What AI applications are most impactful in healthcare?",
    answer: "Key AI applications include predictive patient care, medical image analysis, drug discovery, virtual health assistants, and operational efficiency solutions."
  },
  {
    question: "How long does AI implementation typically take?",
    answer: "Implementation timelines vary based on complexity — simple models may take 2-3 months, while full-scale AI integrations can take 6-12 months."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-[#FFF2D5] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            AI Solutions: FAQs
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Get answers to the most frequently asked questions about AI-powered healthcare solutions.
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
                className="flex justify-between items-center w-full text-left p-4 bg-[#FFF2D5] border-2 border-black rounded-lg"
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
                    <div className="p-4 bg-[#FFF2D5] mt-1 border-2 border-black rounded-lg">
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
