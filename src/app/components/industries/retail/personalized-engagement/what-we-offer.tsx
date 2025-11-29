"use client";

import { motion } from 'framer-motion';

const services = [
  {
    title: "AI-Powered Personalized Recommendations",
    description: "Deliver customized product suggestions to customers based on their browsing history, preferences, and past purchases — enhancing their shopping experience."
  },
  {
    title: "Real-Time Customer Behavior Analysis",
    description: "Leverage AI to monitor and analyze customer interactions across platforms, enabling instant personalization of offers and content."
  },
  {
    title: "Dynamic Content Personalization",
    description: "Tailor website banners, emails, and app interfaces in real-time using AI insights to match individual customer profiles."
  },
  {
    title: "Sentiment-Driven Engagement",
    description: "Use AI sentiment analysis to understand customer emotions and craft responses or offers that resonate with their current mood."
  },
  {
    title: "Proactive Customer Support",
    description: "Integrate AI chatbots that not only answer queries but also anticipate customer needs — offering solutions before they're asked."
  },
  {
    title: "Loyalty Enhancement Strategies",
    description: "Identify loyal customers and offer personalized rewards, exclusive deals, and tailored loyalty programs using AI algorithms."
  }
];

export function WhatWeOffer() {
  return (
    <section className="bg-[#590178] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-white uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Personalized Engagement
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Transform customer interactions with AI-driven personalization — boosting satisfaction, loyalty, and revenue by delivering tailored experiences at every touchpoint.
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
              <p className="text-black/80 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
