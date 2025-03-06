"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How does AI personalize workout plans?",
    answer: "AI analyzes user data such as fitness levels, goals, and progress to create dynamic workout plans. It adapts routines based on real-time feedback, ensuring personalized and effective training."
  },
  {
    question: "Can AI track my fitness progress?",
    answer: "Yes! AI uses data from wearable devices to monitor heart rate, calorie burn, and activity levels. It visualizes your progress, helping you stay on track with your fitness goals."
  },
  {
    question: "How does AI improve virtual coaching?",
    answer: "AI-powered virtual coaches provide real-time feedback on exercise form, suggest workout adjustments, and motivate users — offering an interactive, trainer-like experience at home."
  },
  {
    question: "Can AI help with meal planning?",
    answer: "Absolutely! AI recommends meal plans based on your dietary preferences, fitness goals, and nutritional needs. It continuously adapts plans as your body and goals evolve."
  },
  {
    question: "Is AI suitable for all fitness levels?",
    answer: "Yes! AI tailors workout and nutrition plans for beginners, intermediates, and advanced users — ensuring safe, effective, and scalable fitness solutions."
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
            AI-Powered Fitness — FAQs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get answers to common questions about AI's role in transforming your fitness journey.
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
                    animate={{ opacity: 1, height: "auto" }}
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
