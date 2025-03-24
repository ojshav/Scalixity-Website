"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is iOS app development?",
    answer:
      "iOS app development involves creating applications for Apple's iOS operating system using programming languages like Swift or Objective-C and tools like Xcode.",
  },
  {
    question: "Why choose iOS for app development?",
    answer:
      "iOS offers a secure, stable environment, high performance, and a loyal user base, making it ideal for businesses targeting Apple users.",
  },
  {
    question: "What tools are used in iOS development?",
    answer:
      "Developers use Xcode (Apple's IDE), Swift programming language, and various frameworks like SwiftUI and UIKit to build iOS apps.",
  },
  {
    question: "Can you build cross-platform apps with iOS?",
    answer:
      "Yes! Using tools like React Native or Flutter, developers can create apps that work on both iOS and Android while maintaining native performance.",
  },
  {
    question: "How do you ensure App Store approval?",
    answer:
      "We follow Apple's App Store guidelines strictly — ensuring secure coding practices, seamless UX, and proper testing to meet all requirements.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">FAQ</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            iOS App Development FAQ
          </h2>
          <p className="text-xl text-black/80 max-w-3xl mx-auto">
            Explore answers to common questions about iOS app development and how we craft innovative solutions for Apple devices.
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
                    animate={{ opacity: 1, height: "auto" }}
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
