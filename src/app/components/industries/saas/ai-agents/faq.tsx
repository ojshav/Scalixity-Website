"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What are AI Agents in the SaaS Industry?",
    answer: "AI agents in the SaaS industry automate processes, enhance customer interactions, and optimize operations by leveraging artificial intelligence and machine learning."
  },
  {
    question: "How do AI agents improve customer support?",
    answer: "AI-powered chatbots and virtual assistants provide instant responses, resolve common issues, and reduce the workload of human support teams."
  },
  {
    question: "Can AI optimize SaaS platform performance?",
    answer: "Yes. AI dynamically manages cloud resources, scales applications efficiently, and prevents downtime by predicting failures."
  },
  {
    question: "Are AI agents secure for business applications?",
    answer: "Absolutely. AI enhances cybersecurity by monitoring threats in real-time, detecting anomalies, and ensuring data compliance."
  },
  {
    question: "What industries benefit from AI-driven SaaS solutions?",
    answer: "AI-powered SaaS applications benefit industries like finance, healthcare, e-commerce, and customer service by automating tasks and improving efficiency."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            AI Agents in SaaS: FAQs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about AI agents and their role in transforming the SaaS industry.
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
  );
}

export default FAQ;
