"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is Computer Vision, and how can it benefit my business?",
    answer: "Computer Vision is a field of AI that enables machines to interpret and make decisions based on visual data. It can be used for automation, security, quality control, and enhanced customer experiences."
  },
  {
    question: "What types of applications can be built using Computer Vision?",
    answer: "You can develop applications for facial recognition, object detection, medical imaging analysis, autonomous vehicles, smart surveillance, and more."
  },
  {
    question: "How accurate are Computer Vision models?",
    answer: "The accuracy depends on the dataset quality, training techniques, and AI model selection. We use state-of-the-art deep learning frameworks to ensure high precision and reliability."
  },
  {
    question: "Do you provide custom AI models for specific industries?",
    answer: "Yes, we build tailored Computer Vision solutions for industries like healthcare, retail, manufacturing, agriculture, and security."
  },
  {
    question: "What technologies do you use for Computer Vision development?",
    answer: "We leverage frameworks like TensorFlow, PyTorch, OpenCV, and AWS AI services to develop and deploy high-performance Computer Vision solutions."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#F3F1EB] py-24"> {/* Soft beige background */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">FAQ</span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            Computer Vision Development FAQ
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get insights into our AI-powered Computer Vision development services and how they can transform your business.
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
                className="flex justify-between items-center w-full text-left p-4 bg-[#A8B2E7] rounded-lg border border-gray-500"
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
                    <div className="p-4 bg-[#A8B2E7] mt-1 rounded-lg border border-gray-500">
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
