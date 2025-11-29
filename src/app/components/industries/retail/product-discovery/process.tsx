"use client";

import { motion } from 'framer-motion';

const processSteps = [
  {   
    title: "Business Assessment & Discovery Goals",
    description: "We begin by understanding your retail business — identifying product discovery challenges, customer pain points, and goals to craft a personalized AI strategy."
  },
  {
    title: "Data Collection & Integration",
    description: "Our team gathers customer behavior data, search patterns, purchase history, and product attributes — seamlessly integrating with your existing retail systems."
  },
  {
    title: "AI Model Development",
    description: "We build AI models using machine learning algorithms that power personalized search, smart recommendations, and dynamic filtering — ensuring relevant product visibility."
  },
  {
    title: "Testing & Refinement",
    description: "We rigorously test AI-powered discovery features through simulations and A/B testing, ensuring accuracy, speed, and relevance in guiding customers to the right products."
  },
  {
    title: "Deployment & Continuous Optimization",
    description: "Our AI models go live within your platform, constantly learning from user interactions to refine product recommendations and enhance the shopping experience."
  }
];

export function Process() {
  return (
    <section className="bg-[#FFF2D5] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            Our AI-Driven Product Discovery Process
          </h2>
          <p className="text-xl text-black/80 max-w-3xl mx-auto">
            Transform how customers find and explore your products — seamless, intuitive, and AI-powered.
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
