"use client";

import { motion } from 'framer-motion';

const services = [
  {
    title: "Behavior-Based Customer Segments",
    description: "Leverage AI to group customers based on their interactions, purchasing habits, and online behavior — allowing for hyper-personalized engagement."
  },
  {
    title: "Demographic & Psychographic Profiling",
    description: "Identify key customer segments using AI analysis of demographics, lifestyle choices, and preferences to craft targeted marketing strategies."
  },
  {
    title: "Predictive Customer Insights",
    description: "Utilize AI models to forecast customer needs, anticipating their future actions and boosting conversion rates."
  },
  {
    title: "Real-Time Dynamic Segmentation",
    description: "Adapt customer segments on the fly as AI processes live data streams, ensuring your strategies remain relevant and effective."
  },
  {
    title: "Cross-Channel Customer Engagement",
    description: "Integrate AI insights across email, social media, and ad platforms — delivering consistent, tailored messages to each segment."
  },
  {
    title: "Churn Prediction & Retention Strategies",
    description: "AI pinpoints at-risk customers, enabling proactive strategies to enhance loyalty and reduce churn rates."
  }
];

export function WhatWeOffer() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            AI-Driven Customer Segmentation Solutions
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Harness the power of AI to unlock precise customer segmentation — driving personalized marketing, boosting engagement, and maximizing ROI.
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
