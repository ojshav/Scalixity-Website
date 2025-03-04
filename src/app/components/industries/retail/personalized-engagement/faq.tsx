"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is AI-powered personalized engagement?",
    answer: "AI-powered personalized engagement uses customer data and AI algorithms to deliver tailored experiences, content, and offers that resonate with individual users."
  },
  {
    question: "How does AI enhance customer interactions?",
    answer: "AI analyzes customer behavior in real-time, allowing businesses to respond instantly with relevant recommendations, support, and promotions."
  },
  {
    question: "Can personalized engagement increase sales?",
    answer: "Absolutely! By offering customized product suggestions and time-sensitive deals, AI helps convert leads into loyal customers, boosting revenue."
  },
  {
    question: "Is AI personalization suitable for small businesses?",
    answer: "Yes, AI solutions can scale to fit businesses of any size, helping small retailers build stronger relationships and improve customer retention."
  },
  {
    question: "How quickly can AI engagement tools be implemented?",
    answer: "Implementation timelines vary, but most AI engagement tools can be integrated within 1-3 months, depending on data complexity and customization needs."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Personalized Engagement: FAQs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore how AI-driven personalized engagement transforms customer relationships, drives conversions, and fosters long-term loyalty.
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
