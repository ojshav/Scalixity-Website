"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const cdsFAQs = [
  {
    question: "What is Clinical Decision Support (CDS)?",
    answer: "Clinical Decision Support (CDS) uses AI-driven tools to assist healthcare providers by offering real-time data insights, risk predictions, and evidence-based recommendations for improved patient care."
  },
  {
    question: "How does AI enhance Clinical Decision Support?",
    answer: "AI enhances CDS by analyzing vast amounts of medical data, identifying patterns, and providing predictive insights, helping clinicians make accurate, timely decisions."
  },
  {
    question: "Can CDS systems integrate with existing EHR platforms?",
    answer: "Yes, AI-powered CDS solutions seamlessly integrate with Electronic Health Records (EHR) and other hospital systems, ensuring smooth data flow and optimized clinical workflows."
  },
  {
    question: "Is patient data secure with AI-driven CDS?",
    answer: "Absolutely. AI-driven CDS systems use advanced encryption, strict access controls, and comply with healthcare regulations like HIPAA to protect sensitive patient data."
  },
  {
    question: "What are the benefits of using AI in CDS?",
    answer: "AI in CDS improves diagnostic accuracy, predicts patient risks, reduces human error, streamlines workflows, and supports evidence-based treatment plans."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            AI-Powered Clinical Decision Support: FAQs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore how AI revolutionizes clinical decision-making — answering your key questions.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {cdsFAQs.map((faq, index) => (
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
