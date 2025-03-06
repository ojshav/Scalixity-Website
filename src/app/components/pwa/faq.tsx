"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is a Progressive Web App (PWA)?",
    answer: "A Progressive Web App (PWA) is a type of application built using web technologies but offers a native app-like experience. They work offline, load fast, and can be installed on a user's device."
  },
  {
    question: "How does a PWA benefit my business?",
    answer: "PWAs improve user engagement by providing fast, reliable, and offline-capable experiences. They reduce bounce rates, increase conversions, and eliminate app store dependencies."
  },
  {
    question: "Can a PWA work offline?",
    answer: "Yes, PWAs use service workers to cache assets and data, allowing users to access certain functionalities even without an internet connection."
  },
  {
    question: "Are PWAs secure?",
    answer: "Absolutely! PWAs are served via HTTPS to ensure data integrity and prevent unauthorized access, making them secure by default."
  },
  {
    question: "Can you convert my existing website into a PWA?",
    answer: "Yes! We can transform your current website into a Progressive Web App, enhancing performance and providing an app-like user experience."
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
            PWA Development FAQ
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore answers to common questions about Progressive Web App development and how they can elevate your digital experience.
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
