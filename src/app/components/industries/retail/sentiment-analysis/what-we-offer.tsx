"use client";

import { motion } from 'framer-motion';

const services = [
  {
    title: "Real-Time Sentiment Analysis",
    description: "Leverage AI to monitor and analyze customer sentiment across reviews, social media, and feedback forms — uncovering hidden trends and emotions."
  },
  {
    title: "Emotion-Based Product Insights",
    description: "Identify how customers feel about specific products by analyzing feedback — helping you refine offerings and improve satisfaction."
  },
  {
    title: "Competitor Sentiment Comparison",
    description: "Benchmark your brand's sentiment against competitors — gaining strategic insights to enhance your reputation and market standing."
  },
  {
    title: "Predictive Sentiment Trends",
    description: "Use AI models to forecast future customer sentiment — allowing proactive adjustments to marketing strategies and product developments."
  },
  {
    title: "Automated Sentiment-Based Engagement",
    description: "Trigger personalized responses and offers based on real-time sentiment data — fostering stronger customer relationships."
  },
  {
    title: "Seamless Analytics Integration",
    description: "Integrate AI-driven sentiment insights into your existing analytics platforms — ensuring data-driven decisions at every step."
  }
];

export function WhatWeOffer() {
  return (
    <section className="bg-[#590178] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-white uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl md:text-5xl font-semibold text-white mt-4 mb-6">
            AI-Powered Customer Sentiment Analysis
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Unlock deep customer insights with AI — transforming raw emotions into actionable strategies for growth and loyalty.
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
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:border-black/50 transition-colors"
            >
              <h3 className="text-xl font-semibold text-black mb-4">{service.title}</h3>
              <p className="text-black/80 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
