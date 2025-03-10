"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is Flutter app development?",
    answer: "Flutter app development involves using Google's open-source UI framework to build natively compiled mobile, web, and desktop applications from a single codebase."
  },
  {
    question: "Why choose Flutter for app development?",
    answer: "Flutter offers fast development, a rich UI, high performance, and a single codebase for both iOS and Android, reducing time and costs."
  },
  {
    question: "Can Flutter apps integrate with backend services?",
    answer: "Yes, Flutter apps can integrate with Firebase, REST APIs, GraphQL, and other backend services for real-time data and authentication."
  },
  {
    question: "Is Flutter suitable for large-scale applications?",
    answer: "Absolutely! Flutter’s flexibility, performance, and growing ecosystem make it a great choice for enterprise-level and scalable applications."
  },
  {
    question: "Does Flutter support third-party plugins?",
    answer: "Yes, Flutter has a rich package ecosystem that allows seamless integration with third-party plugins, including payment gateways, maps, and analytics tools."
  },
  {
    question: "How does Flutter improve UI development?",
    answer: "Flutter uses a declarative UI approach with a rich set of customizable widgets, enabling smooth animations and a modern app experience."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#A8B2E7] py-24"> {/* Lavender background */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">FAQ</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Flutter App Development: Frequently Asked Questions
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Find answers to common questions about our Flutter development services and capabilities.
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
                className="flex justify-between items-center w-full text-left p-4 bg-[#F3F1EB] rounded-lg border border-black" 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-black">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-black" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-black" />
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
                    <div className="p-4 bg-[#F3F1EB] mt-1 rounded-lg border border-black">
                      <p className="text-black">{faq.answer}</p>
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
