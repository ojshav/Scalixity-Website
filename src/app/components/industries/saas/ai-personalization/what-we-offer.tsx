"use client";

import { motion } from 'framer-motion';

const services = [
  {
    title: "Dynamic User Profiling",
    description: "Harness AI to build comprehensive user profiles by analyzing behavior, preferences, and interactions, enabling hyper-personalized experiences."
  },
  {
    title: "Real-Time Recommendation Engines",
    description: "Implement AI-driven recommendation systems that adapt in real-time, suggesting content, products, or services tailored to each user."
  },
  {
    title: "Predictive Customer Insights",
    description: "Leverage machine learning to forecast customer needs, helping businesses proactively offer solutions and optimize user journeys."
  },
  {
    title: "Content Personalization",
    description: "Automatically curate personalized content experiences by aligning AI insights with user interests and historical data."
  },
  {
    title: "Behavioral Segmentation",
    description: "Utilize AI to segment users based on real-time behavior, ensuring targeted marketing strategies and improved engagement rates."
  },
  {
    title: "Seamless AI Integration",
    description: "Integrate AI models seamlessly into existing SaaS platforms, enhancing personalization without disrupting user experience."
  }
];

export function WhatWeOffer() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            AI-Powered Personalization for SaaS Solutions
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Unlock the power of AI to deliver tailored user experiences, predictive insights, and dynamic personalization strategies for your SaaS platform.
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
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black transition-colors"
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