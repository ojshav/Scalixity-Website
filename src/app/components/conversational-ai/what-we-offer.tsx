"use client";

import { motion } from 'framer-motion';

const services = [
  {
    title: "AI Chatbot Development",
    description: "We design and develop intelligent chatbots powered by AI and NLP to enhance customer interactions and automate business processes."
  },
  {
    title: "Voice Assistant Integration",
    description: "Integrate AI-powered voice assistants into your platforms for seamless and natural voice-based interactions."
  },
  {
    title: "Custom NLP Solutions",
    description: "Leverage advanced Natural Language Processing (NLP) to build AI models that understand and respond intelligently to user inputs."
  },
  {
    title: "Sentiment Analysis & Emotion Detection",
    description: "Implement AI-driven sentiment analysis to gain insights into customer emotions and improve user engagement."
  },
  {
    title: "Conversational AI for Customer Support",
    description: "Enhance customer support with AI-driven conversational solutions that provide instant, accurate responses."
  },
  {
    title: "Multilingual AI Conversational Systems",
    description: "Develop AI chatbots and assistants capable of understanding and communicating in multiple languages for global reach."
  }
];

export function WhatWeOffer() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            Conversational AI Development Services
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            We build intelligent AI-driven conversational solutions to enhance engagement, automate interactions, and improve user experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:border-primary/50 transition-colors"
            >
              <h3 className="text-xl font-bold text-black mb-4">{service.title}</h3>
              <p className="text-black leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
