"use client";

import { motion } from 'framer-motion';

const services = [
  {
    title: "AI-Powered Data Analytics",
    description: "Gain deep insights from vast data sets with AI-driven analytics, enabling smarter decision-making."
  },
  {
    title: "Predictive Business Intelligence",
    description: "Leverage AI models to forecast trends, optimize performance, and improve strategic planning."
  },
  {
    title: "Automated Data Processing",
    description: "Reduce manual effort with AI-powered automation that processes and categorizes data efficiently."
  },
  {
    title: "Real-Time Anomaly Detection",
    description: "AI continuously monitors data streams to detect irregularities and mitigate risks proactively."
  },
  {
    title: "Conversational AI Insights",
    description: "Empower users with AI-driven chatbots that provide real-time analytics and recommendations."
  },
  {
    title: "Seamless AI Integration",
    description: "Integrate AI analytics seamlessly into existing SaaS platforms to enhance operational efficiency."
  }
];

export function WhatWeOffer() {
  return (
    <section className="bg-[#A8B2E7] py-24"> 
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            AI-Driven Analytics for SaaS Optimization
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Harness AI-powered analytics to transform data into actionable insights, driving efficiency and innovation in SaaS platforms.
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
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black text-black hover:shadow-lg transition-transform hover:scale-105"
            >
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
