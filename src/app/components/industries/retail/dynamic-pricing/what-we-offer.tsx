"use client";

import { motion } from 'framer-motion';

const services = [
  {
    title: "Real-Time Price Optimization",
    description: "Harness AI algorithms to adjust product prices instantly based on demand, competitor pricing, and market trends — ensuring maximum profitability."
  },
  {
    title: "Competitor Price Monitoring",
    description: "AI agents continuously track competitor prices and strategies, giving you the edge to stay competitive and agile in your pricing decisions."
  },
  {
    title: "Demand-Based Pricing",
    description: "Leverage AI to forecast demand fluctuations, dynamically scaling prices during peak seasons, flash sales, or limited-stock events."
  },
  {
    title: "Segmented Customer Pricing",
    description: "Personalize pricing by segmenting customers based on behavior, loyalty, and preferences — offering tailored discounts and exclusive deals."
  },
  {
    title: "Predictive Analytics & Insights",
    description: "Gain data-driven insights into future pricing opportunities, helping you plan seasonal campaigns, promotions, and product launches with confidence."
  },
  {
    title: "Seamless Platform Integration",
    description: "Our AI models integrate with your CRM, e-commerce platforms, and POS systems — ensuring smooth data flow and real-time pricing updates."
  }
];

export function WhatWeOffer() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            AI-Powered Dynamic Pricing Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Revolutionize your retail pricing strategy with AI — adaptive, data-driven, and profit-focused. Stay ahead of the competition with intelligent pricing automation.
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
