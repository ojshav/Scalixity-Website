"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "What is Medical Imaging Intelligence (MII)?",
    answer: "Medical Imaging Intelligence (MII) uses AI algorithms to analyze medical images like X-rays, MRIs, and CT scans, assisting in accurate diagnostics and early disease detection."
  },
  {
    question: "How does AI improve diagnostic accuracy in medical imaging?",
    answer: "AI models can identify subtle patterns and anomalies in medical images that might be overlooked by the human eye, reducing errors and improving diagnostic confidence."
  },
  {
    question: "Can AI detect diseases at an early stage?",
    answer: "Yes, AI algorithms are trained to recognize early signs of diseases like cancer, allowing for timely intervention and better patient outcomes."
  },
  {
    question: "Is patient data secure when using AI for medical imaging?",
    answer: "Absolutely. AI solutions comply with data protection standards like HIPAA and GDPR, ensuring secure storage, encryption, and transfer of medical images."
  },
  {
    question: "How quickly can AI be integrated into existing medical imaging systems?",
    answer: "Integration timelines vary, but AI models can be incorporated into hospital systems within 2-6 months, depending on the complexity of the infrastructure."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-[#FFF2D5] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            Medical Imaging Intelligence: FAQs
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Get answers to common questions about AI-powered medical imaging and its transformative impact on healthcare.
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

export default FAQ;
