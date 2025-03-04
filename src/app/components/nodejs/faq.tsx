"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is Node.js?",
    answer: "Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to run JavaScript code outside the browser, commonly used for building fast and scalable server-side applications."
  },
  {
    question: "Why should I use Node.js for my application?",
    answer: "Node.js is event-driven and non-blocking, making it perfect for real-time apps, APIs, and microservices. It’s fast, scalable, and allows using JavaScript for both frontend and backend."
  },
  {
    question: "Can Node.js handle real-time data?",
    answer: "Yes! Node.js is ideal for real-time applications like chat apps, online gaming, and live data streaming due to its event-driven architecture and WebSocket support."
  },
  {
    question: "Is Node.js secure?",
    answer: "Node.js can be secure when best practices are followed—using HTTPS, validating user inputs, managing dependencies carefully, and applying security-focused middleware."
  },
  {
    question: "What types of apps can be built with Node.js?",
    answer: "Node.js is versatile—it’s used to build web servers, RESTful APIs, real-time apps, IoT solutions, and even command-line tools."
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
            Node.js Development FAQ
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get insights into Node.js development and how it can power high-performance, real-time applications for your business.
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
