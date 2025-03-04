"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is native Android app development?",
    answer: "Native Android app development involves building applications specifically for the Android platform using programming languages like Kotlin or Java, ensuring optimal performance and seamless user experience."
  },
  {
    question: "Why choose native development over cross-platform?",
    answer: "Native development offers superior performance, better access to device features, and smoother UI/UX tailored to the Android ecosystem compared to cross-platform solutions."
  },
  {
    question: "What industries benefit from native Android apps?",
    answer: "Industries like eCommerce, healthcare, finance, gaming, and social media benefit from native Android apps due to their speed, reliability, and enhanced functionality."
  },
  {
    question: "Can native apps work offline?",
    answer: "Yes! Native Android apps can leverage local storage and databases, allowing users to access certain features and data without an internet connection."
  },
  {
    question: "How do you ensure app security?",
    answer: "We implement secure coding practices, encrypt data, use OAuth for authentication, and follow Google’s security best practices to protect your app from vulnerabilities."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">FAQ</span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            Android App Development FAQ
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get answers to common questions about native Android app development and how it can elevate your business.
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
