"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is hybrid app development?",
    answer: "Hybrid app development combines elements of both native and web applications, allowing apps to run on multiple platforms using a single codebase." 
  },
  {
    question: "How do hybrid apps work?",
    answer: "Hybrid apps are built using web technologies like HTML, CSS, and JavaScript, and then wrapped in a native shell, enabling them to be deployed across iOS and Android." 
  },
  {
    question: "What are the benefits of hybrid apps?",
    answer: "Hybrid apps offer faster development, cross-platform compatibility, cost-effectiveness, and easy maintenance compared to building separate native apps." 
  },
  {
    question: "Can hybrid apps access device features?",
    answer: "Yes! Using plugins and frameworks like Capacitor or Cordova, hybrid apps can access device features such as camera, GPS, and push notifications." 
  },
  {
    question: "Are hybrid apps as fast as native apps?",
    answer: "While hybrid apps can be highly performant, complex and graphics-heavy apps may benefit more from native development. However, modern frameworks have significantly closed this gap." 
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">FAQ</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Hybrid App Development FAQ
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Uncover the essentials of hybrid app development and how it bridges the gap between web and native apps.
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
                className="flex justify-between items-center w-full text-left p-4 bg-[#F3F1EB] border-2 border-black rounded-lg"
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
                    <div className="p-4 bg-[#F3F1EB] mt-1 border-2 border-black rounded-lg">
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
