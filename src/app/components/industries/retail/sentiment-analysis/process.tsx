"use client";

import { motion } from 'framer-motion';

const processSteps = [
  {
    title: "Data Collection & Integration",
    description: "Gather and integrate customer feedback from multiple sources — reviews, social media, and support tickets — into a unified AI-driven system."
  },
  {
    title: "Sentiment Analysis Model Development",
    description: "Develop AI models that classify and score customer sentiments, identifying emotions like happiness, frustration, or indifference with high accuracy."
  },
  {
    title: "Competitor Sentiment Benchmarking",
    description: "Compare customer sentiments about your brand with competitors, uncovering strengths, weaknesses, and areas for improvement."
  },
  {
    title: "Predictive Insights & Trend Forecasting",
    description: "Leverage AI algorithms to forecast future sentiment trends — helping you anticipate market shifts and customer reactions in advance."
  },
  {
    title: "Real-Time Response & Engagement",
    description: "Enable AI-driven automated responses and personalized engagement strategies triggered by live sentiment data."
  }
];

export function Process() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            Our Customer Sentiment Analysis Process
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Discover how we turn customer emotions into strategic insights using AI-powered sentiment analysis.
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
                
                <div className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:border-black/50 transition-colors">
                  <h3 className="text-xl font-bold text-black mb-4">{step.title}</h3>
                  <p className="text-black/80 leading-relaxed">{step.description}</p>
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
