"use client";

import { motion } from 'framer-motion';

const processSteps = [
  {
    title: "AI-Powered Data Insights",
    description: "Leveraging AI to analyze SaaS data trends, detect anomalies, and provide actionable intelligence."
  },
  {
    title: "Automated Reporting & Forecasting",
    description: "Using AI to generate detailed reports and predictive analytics for strategic decision-making."
  },
  {
    title: "Customer Behavior Analysis",
    description: "Understanding user patterns and engagement through AI-driven analytics, improving customer retention."
  },
  {
    title: "Real-Time Performance Monitoring",
    description: "AI-driven tools ensuring optimal SaaS platform performance by detecting inefficiencies and bottlenecks."
  },
  {
    title: "Continuous Optimization & Learning",
    description: "AI models constantly improving through machine learning, adapting to new trends and challenges."
  }
];

export function Process() {
  return (
    <section className="bg-[#FFF2D5] py-24"> 
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            AI-Driven SaaS Analytics Workflow
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Our AI-powered analytics streamline SaaS operations, providing valuable insights and automation.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-black/30" />

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
                <div className="absolute left-0 top-2 w-[30px] h-[30px] bg-black rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#A8B2E7] rounded-full" />
                </div>
                
                <div className="bg-[#F3F1EB] p-8 rounded-xl border border-black">
                  <h3 className="text-xl font-bold text-black mb-4">{step.title}</h3>
                  <p className="text-black leading-relaxed">{step.description}</p>
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
