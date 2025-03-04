"use client";

import { motion } from 'framer-motion';

const processSteps = [
  {
    title: "Business Analysis & Goal Setting",
    description: "We start by analyzing your retail landscape — understanding pricing challenges, competitor strategies, and revenue goals to craft a dynamic pricing strategy tailored to your business."
  },
  {
    title: "Data Collection & Integration",
    description: "Our team gathers real-time data — sales trends, customer behavior, market demand, and competitor prices — integrating it seamlessly into your existing retail systems."
  },
  {
    title: "AI Model Development",
    description: "We build AI models that use predictive analytics and machine learning algorithms to identify optimal price points based on demand fluctuations, seasonality, and competitor activity."
  },
  {
    title: "Testing & Simulation",
    description: "We rigorously test AI pricing strategies using historical data and simulations — ensuring accuracy, responsiveness, and profit optimization before live deployment."
  },
  {
    title: "Deployment & Continuous Optimization",
    description: "Our AI models are deployed into your retail platforms, continuously analyzing data and adjusting prices in real-time to maximize revenue and maintain a competitive edge."
  }
];

export function Process() {
  return (
    <section className="bg-[#5B1DAF] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-white uppercase tracking-wider">PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Our Dynamic Pricing Solution Process
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Unlock the power of AI-driven pricing strategies — adaptive, predictive, and profit-focused.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-white/30" />

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-12"
              >
                <div className="absolute left-0 top-2 w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#5B1DAF] rounded-full" />
                </div>
                
                <div className="bg-white p-8 rounded-xl border border-white/20">
                  <h3 className="text-xl font-bold text-[#5B1DAF] mb-4">{step.title}</h3>
                  <p className="text-[#5B1DAF]/80 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
