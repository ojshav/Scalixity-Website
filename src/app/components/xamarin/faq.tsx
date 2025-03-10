"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is Xamarin App Development?",
    answer: "Xamarin App Development is a cross-platform mobile app framework by Microsoft that allows developers to build native iOS, Android, and Windows apps using C# and .NET."
  },
  {
    question: "Why choose Xamarin for mobile app development?",
    answer: "Xamarin enables code sharing across platforms, delivers high-performance native experiences, and integrates seamlessly with Visual Studio and Microsoft services."
  },
  {
    question: "Can Xamarin apps access native device features?",
    answer: "Yes, Xamarin provides bindings for platform-specific APIs, enabling access to native device features like camera, GPS, sensors, and more."
  },
  {
    question: "Is Xamarin suitable for enterprise-level apps?",
    answer: "Absolutely. Xamarin's scalability, security integrations, and support for cloud services make it ideal for building robust enterprise-grade mobile applications."
  },
  {
    question: "How does Xamarin ensure app performance?",
    answer: "Xamarin compiles apps into native code, ensuring high performance and responsiveness comparable to apps built with platform-specific languages."
  },
  {
    question: "What industries benefit from Xamarin apps?",
    answer: "Industries like finance, healthcare, e-commerce, and logistics leverage Xamarin for building secure, cross-platform mobile solutions."
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
            Xamarin App Development: Frequently Asked Questions
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Explore answers to common questions about our Xamarin-based cross-platform mobile app development services.
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
