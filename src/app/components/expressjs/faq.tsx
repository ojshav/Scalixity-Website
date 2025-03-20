"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is Express.js?",
    answer: "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications."
  },
  {
    question: "Why use Express.js for backend development?",
    answer: "Express.js simplifies server-side development by offering middleware, routing, and easy integration with databases, making it ideal for building fast and scalable applications."
  },
  {
    question: "Can Express.js handle APIs?",
    answer: "Yes! Express.js is commonly used to build RESTful APIs, allowing seamless communication between the frontend and backend of your application."
  },
  {
    question: "Is Express.js suitable for real-time applications?",
    answer: "Absolutely! Express.js can work with WebSockets and libraries like Socket.io to build real-time apps, including chats, notifications, and live updates."
  },
  {
    question: "How secure is an Express.js app?",
    answer: "Express.js supports various security best practices, such as implementing HTTPS, using security-focused middleware like helmet.js, and sanitizing inputs to prevent vulnerabilities."
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
            Express.js Development FAQ
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Find answers to common questions about Express.js and how it can power dynamic and high-performance web applications.
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
                className="flex justify-between items-center w-full text-left p-4 bg-[#F3F1EB] border border-black rounded-lg"
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
                    <div className="p-4 bg-[#F3F1EB] mt-1 border border-black rounded-lg">
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
