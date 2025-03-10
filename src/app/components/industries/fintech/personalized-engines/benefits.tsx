"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "Tailored Investment Strategies",
    description: "AI-powered algorithms craft personalized investment plans based on individual risk profiles and financial goals."
  },
  {
    title: "Real-Time Portfolio Optimization",
    description: "Continuously adjust portfolios using data-driven insights to maximize returns and minimize risk."
  },
  {
    title: "Behavioral Finance Insights",
    description: "Analyze user behavior and spending patterns to offer customized financial advice and savings plans."
  },
  {
    title: "Automated Wealth Management",
    description: "Leverage AI to automate rebalancing, tax optimization, and long-term wealth strategies effortlessly."
  },
  {
    title: "Predictive Financial Planning",
    description: "Use predictive analytics to forecast future financial scenarios and guide users towards smart money decisions."
  },
  {
    title: "Enhanced User Engagement",
    description: "Interactive dashboards and AI-driven suggestions keep users actively involved in managing their finances."
  }
];

export function Benefits() {
  return (
    <section className="bg-[#A8B2E7] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black">Benefits of Personalized Financial Engines</h2>
          <p className="text-lg text-black mt-4 max-w-2xl mx-auto">
            Empower clients with AI-driven, tailor-made financial solutions that evolve with their goals and market conditions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] border border-black p-6 rounded-xl flex items-start space-x-4"
            >
              <Star className="text-black w-8 h-8 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-black">{benefit.title}</h3>
                <p className="text-black mt-2">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
