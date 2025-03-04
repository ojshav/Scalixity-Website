"use client";

import { motion } from 'framer-motion';

const services = [
  {
    title: "AI-Powered Voice Recognition",
    description: "Enable seamless voice commands for product searches, orders, and inquiries — offering a hands-free shopping experience."
  },
  {
    title: "Natural Language Processing (NLP)",
    description: "Understand customer intent through advanced NLP models, ensuring accurate responses and smooth conversational interactions."
  },
  {
    title: "Personalized Voice Recommendations",
    description: "Deliver tailored product suggestions based on purchase history, preferences, and real-time queries."
  },
  {
    title: "Multi-Language Support",
    description: "Expand your reach with voice ordering systems that support multiple languages and dialects, catering to diverse customer bases."
  },
  {
    title: "Order Tracking & Status Updates",
    description: "Let customers check order status, delivery updates, and payment info using simple voice commands."
  },
  {
    title: "Seamless Platform Integration",
    description: "Integrate voice AI with your retail apps, websites, and POS systems for real-time order processing and data sync."
  }
];

export function WhatWeOffer() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            AI-Driven Voice Ordering Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Revolutionize shopping experiences with AI voice technology — fast, intuitive, and personalized interactions at every step.
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
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-colors"
            >
              <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
