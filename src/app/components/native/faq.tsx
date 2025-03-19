"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is Native App Development?",
    answer: "Native app development involves creating mobile applications tailored specifically for a particular platform, like iOS or Android, using platform-specific programming languages and tools."
  },
  {
    question: "Which technologies are used for native app development?",
    answer: "For iOS apps, Swift and SwiftUI are commonly used, while Android apps often rely on Kotlin and Jetpack Compose."
  },
  {
    question: "Why choose native apps over cross-platform apps?",
    answer: "Native apps offer superior performance, better access to device features, and smoother user experiences as they are optimized for the specific platform."
  },
  {
    question: "Can native apps work offline?",
    answer: "Yes! Native apps can store data locally, allowing users to access certain features without an internet connection."
  },
  {
    question: "How do you deploy native apps to app stores?",
    answer: "iOS apps are submitted via App Store Connect, and Android apps through the Google Play Console, ensuring they meet platform-specific guidelines."
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
            Native App Development FAQ
          </h2>
          <p className="text-xl text-black/80 max-w-3xl mx-auto">
            Explore answers to common questions about native app development and how it can elevate your mobile experience.
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
                  <ChevronUp className="w-5 h-5 text-[#5B1DAF]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#5B1DAF]" />
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
                      <p className="text-black/80">{faq.answer}</p>
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
