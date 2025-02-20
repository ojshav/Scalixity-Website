"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "What are the benefits of using AWS for cloud computing?",
    answer: "AWS offers scalability, reliability, security, and cost-effectiveness. It provides a vast array of services, including computing, storage, databases, AI/ML, and networking, to help businesses innovate and grow."
  },
  {
    question: "How does AWS ensure the security of my data?",
    answer: "AWS follows a shared responsibility model, offering data encryption, compliance certifications, multi-factor authentication, and network security controls to protect your data."
  },
  {
    question: "Can AWS help with cloud migration?",
    answer: "Yes, AWS provides migration tools like AWS Migration Hub, Application Migration Service, and Database Migration Service to simplify and accelerate cloud adoption."
  },
  {
    question: "What AWS services are available for AI & ML?",
    answer: "AWS offers AI/ML services like Amazon SageMaker, Rekognition, Polly, and Lex, enabling businesses to build, train, and deploy intelligent applications at scale."
  },
  {
    question: "How does AWS pricing work?",
    answer: "AWS follows a pay-as-you-go pricing model with options for reserved instances, spot instances, and savings plans to optimize costs based on usage and workload needs."
  }
]

export function AWSFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">FAQ</span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            AWS Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about our AWS cloud services and solutions.
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
