"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "What are the benefits of using Google Cloud Platform (GCP) for my business?",
    answer: "GCP offers a secure, high-performance, and scalable cloud infrastructure with advanced AI, data analytics, and Kubernetes support, helping businesses accelerate innovation and efficiency."
  },
  {
    question: "How does GCP ensure data security and compliance?",
    answer: "GCP employs multi-layered security with encryption at rest and in transit, identity and access management, and compliance with industry standards such as ISO, GDPR, and HIPAA."
  },
  {
    question: "What services does GCP provide for AI and Machine Learning?",
    answer: "GCP offers powerful AI/ML tools like Vertex AI, AutoML, TensorFlow, and BigQuery ML, enabling businesses to build, train, and deploy intelligent models efficiently."
  },
  {
    question: "Can GCP help with data analytics and big data processing?",
    answer: "Yes, GCP provides services like BigQuery, Dataflow, and Dataproc, allowing organizations to analyze vast datasets quickly and gain real-time insights."
  },
  {
    question: "How is GCP pricing structured?",
    answer: "GCP follows a pay-as-you-go model with cost-saving options like sustained use discounts, committed use contracts, and detailed cost management tools to optimize cloud spending."
  }
]

export function GCPFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">FAQ</span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            GCP Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about our Google Cloud Platform services and solutions.
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
