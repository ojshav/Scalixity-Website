"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is an AI Chatbot and how can it benefit my business?",
    answer: "An AI chatbot is a virtual assistant powered by artificial intelligence that can engage with users through text or voice. It helps businesses automate customer support, enhance user experience, reduce response time, and increase operational efficiency."
  },
  {
    question: "Can an AI Chatbot be customized for my specific industry?",
    answer: "Yes, AI chatbots can be tailored to meet industry-specific needs, whether it's healthcare, finance, e-commerce, or customer support. Custom-trained models ensure the chatbot understands domain-specific queries and responds accurately."
  },
  {
    question: "How long does it take to develop and deploy an AI Chatbot?",
    answer: "The timeline depends on the complexity of the chatbot. A basic chatbot can be deployed within a few weeks, while an advanced AI-powered chatbot with deep learning capabilities may take a few months."
  },
  {
    question: "Can the AI Chatbot integrate with my existing CRM and software?",
    answer: "Yes, our AI chatbots can seamlessly integrate with your CRM, ERP, and other business software through APIs, ensuring smooth data exchange and workflow automation."
  },
  {
    question: "Do AI Chatbots support multiple languages?",
    answer: "Absolutely! AI chatbots can be trained to support multiple languages, allowing businesses to cater to a global audience and improve customer engagement."
  },
  {
    question: "What kind of support do you provide after chatbot deployment?",
    answer: "We offer ongoing maintenance, performance monitoring, chatbot training, and technical support to ensure your chatbot continues to perform optimally and evolves with your business needs."
  }
];

export function AIChatbotFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">FAQ</span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            AI Chatbot Development FAQs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about our AI Chatbot Development services.
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

export default AIChatbotFAQ;
