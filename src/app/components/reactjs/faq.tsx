"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is React.js?",
    answer: "React.js is a powerful JavaScript library for building dynamic user interfaces, allowing developers to create fast and scalable web applications with reusable components."
  },
  {
    question: "Why use React.js for web development?",
    answer: "React.js offers a virtual DOM for optimized rendering, component-based architecture, and seamless integration with other technologies, making it ideal for modern web development."
  },
  {
    question: "Can you build custom React.js applications?",
    answer: "Absolutely! We design and develop custom React.js solutions tailored to your business needs, from single-page applications (SPAs) to complex enterprise-level systems."
  },
  {
    question: "Is React.js suitable for mobile app development?",
    answer: "Yes! Using React Native, we can build cross-platform mobile apps with React.js, ensuring a consistent user experience across iOS and Android devices."
  },
  {
    question: "How does Scalixity approach React.js projects?",
    answer: "We follow a structured process—understanding your goals, designing intuitive UI/UX, and developing robust, high-performance React.js applications aligned with your vision."
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
            React.js Development FAQ
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore answers to common questions about React.js development and how Scalixity can transform your web applications.
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