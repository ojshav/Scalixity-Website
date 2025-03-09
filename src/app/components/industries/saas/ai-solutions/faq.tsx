"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is AI SaaS?",
    answer: "AI SaaS (Software as a Service) refers to cloud-based applications integrated with artificial intelligence, offering smart automation, data insights, and personalized user experiences."
  },
  {
    question: "How can AI improve SaaS platforms?",
    answer: "AI enhances SaaS platforms by optimizing cloud resources, predicting system failures, automating workflows, and delivering data-driven insights."
  },
  {
    question: "Is AI SaaS secure?",
    answer: "Yes. AI SaaS platforms use advanced security protocols like threat detection algorithms and AI-driven encryption to protect data."
  },
  {
    question: "Can AI SaaS scale with business growth?",
    answer: "Absolutely. AI adapts to workload changes, scaling cloud resources automatically to maintain performance and minimize costs."
  },
  {
    question: "How does AI improve user experiences in SaaS?",
    answer: "AI personalizes user experiences by analyzing behavior patterns, recommending features, and automating support services for faster responses."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            AI SaaS Solutions: FAQs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about AI-powered SaaS solutions and how they revolutionize cloud-based software.
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
