"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "How can AI enhance fraud detection in fintech?",
    answer: "AI identifies suspicious patterns and anomalies in real-time by analyzing vast amounts of transaction data. This allows fintech companies to detect and prevent fraudulent activities swiftly, reducing risks and protecting customer assets."
  },
  {
    question: "What role does AI play in credit scoring?",
    answer: "AI-powered credit scoring models assess creditworthiness by analyzing customer data, spending behaviors, and economic trends. This ensures more accurate risk assessments and faster loan approvals."
  },
  {
    question: "Can AI solutions integrate with existing fintech systems?",
    answer: "Yes, our AI solutions are designed to seamlessly integrate with your current fintech infrastructure using APIs and microservices, ensuring minimal disruption and maximum efficiency."
  },
  {
    question: "How does AI help with personalized customer experiences?",
    answer: "AI analyzes user data and behaviors to offer tailored financial products, investment advice, and personalized customer support, enhancing user satisfaction and engagement."
  },
  {
    question: "What kind of support do you offer after AI implementation?",
    answer: "We provide continuous support, including system monitoring, performance optimization, model retraining, and user training to ensure your AI solutions deliver sustained value."
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
            Fintech AI Solutions — FAQs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore answers to common questions about AI's impact on the fintech industry.
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
