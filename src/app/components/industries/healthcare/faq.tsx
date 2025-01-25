"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "How does AI improve patient care in healthcare?",
    answer: "AI enhances patient care by enabling more accurate diagnoses, personalized treatment plans, and predictive analytics for early intervention. It also streamlines administrative tasks, allowing healthcare providers to focus more on patient interactions."
  },
  {
    question: "Is patient data safe when using AI in healthcare?",
    answer: "Yes, patient data safety is a top priority. We implement robust security measures, including data encryption, access controls, and compliance with healthcare regulations like HIPAA to ensure the protection of sensitive patient information."
  },
  {
    question: "Can AI integrate with existing healthcare systems?",
    answer: "Absolutely. Our AI solutions are designed to integrate seamlessly with existing healthcare IT infrastructure, including Electronic Health Records (EHR) systems, imaging systems, and other medical devices."
  },
  {
    question: "What types of healthcare tasks can AI assist with?",
    answer: "AI can assist with a wide range of tasks, including medical image analysis, patient triage, treatment planning, drug discovery, predictive maintenance of medical equipment, and administrative tasks like scheduling and billing."
  },
  {
    question: "How long does it take to implement an AI solution in a healthcare setting?",
    answer: "The implementation timeline can vary depending on the complexity of the solution and the specific needs of the healthcare organization. Typically, it can range from a few months for smaller projects to 6-12 months for more comprehensive, organization-wide implementations."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about AI implementation in healthcare
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

