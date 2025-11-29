"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "AI-Powered Investment Strategies",
    description: "Leverage AI-driven insights to create tailored investment plans that align with individual financial goals.",
  },
  {
    title: "Automated Financial Planning",
    description: "Utilize advanced algorithms to automate budgeting, expense tracking, and goal-based financial management.",
  },
  {
    title: "Risk Assessment & Portfolio Optimization",
    description: "Analyze risk tolerance and market conditions to build optimal investment portfolios for users.",
  },
  {
    title: "Personalized Retirement Planning",
    description: "Offer customized retirement plans based on income, lifestyle goals, and future financial needs.",
  },
  {
    title: "Smart Tax Optimization",
    description: "Implement AI-driven tax strategies to minimize liabilities and maximize returns efficiently.",
  },
  {
    title: "Real-Time Financial Insights",
    description: "Provide live financial tracking and smart alerts to keep users informed about their financial health.",
  }
];

export function WhatWeOffer() {
  return (
    <section className="bg-[#590178] py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-extrabold text-white mb-12">What We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:border-black transition-colors transform hover:scale-105"
            >
              <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
              <p className="text-black leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
