"use client";

import { motion } from 'framer-motion';

const services = [
  {
    title: "AI-Powered Search & Recommendations",
    description: "Boost product visibility with AI-driven search algorithms that understand customer intent, delivering hyper-personalized recommendations in real-time."
  },
  {
    title: "Visual Search Technology",
    description: "Enable customers to find products by simply uploading images — AI identifies patterns, colors, and styles to match relevant items instantly."
  },
  {
    title: "Voice-Activated Product Discovery",
    description: "Integrate voice search capabilities, allowing customers to explore your catalog through natural language queries for seamless shopping experiences."
  },
  {
    title: "Context-Aware Suggestions",
    description: "Deliver dynamic product suggestions based on browsing history, location, and seasonality — guiding customers toward the perfect purchase."
  },
  {
    title: "Cross-Selling & Upselling Automation",
    description: "Maximize sales by showcasing complementary products and premium alternatives tailored to customer preferences and buying behavior."
  },
  {
    title: "Seamless Platform Integration",
    description: "Our AI solutions integrate with your e-commerce platforms, mobile apps, and CRM systems — ensuring synchronized and personalized product discovery."
  }
];

export function WhatWeOffer() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            AI-Driven Enhanced Product Discovery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform how customers find products — intuitive, personalized, and powered by AI. Streamline search experiences and drive conversions effortlessly.
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
