"use client";

import { motion } from 'framer-motion';
import { Brain, Rocket, Layers, ShieldCheck, ChartLine, Users } from 'lucide-react';

const copilotBenefits = [
  {
    icon: Brain,
    title: "Smart Task Automation",
    description: "AI Copilots streamline workflows by automating repetitive tasks, boosting team productivity."
  },
  {
    icon: Rocket,
    title: "Accelerated Decision-Making",
    description: "Leverage AI insights to make data-driven decisions faster and more accurately."
  },
  {
    icon: Layers,
    title: "Seamless Integration",
    description: "Easily integrate AI Copilots with existing SaaS platforms for smooth operations."
  },
  {
    icon: ShieldCheck,
    title: "Enhanced Security",
    description: "AI algorithms detect threats in real-time, securing sensitive business data."
  },
  {
    icon: ChartLine,
    title: "Data-Driven Insights",
    description: "Unlock powerful analytics with AI Copilots, helping you uncover hidden opportunities."
  },
  {
    icon: Users,
    title: "Personalized User Experience",
    description: "Deliver tailored solutions by analyzing customer behavior and preferences."
  }
];

export function Benefits() {
  return (
    <section className="bg-[#590178] py-24"> 
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Benefits of AI Copilots in SaaS
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Discover how AI Copilots transform SaaS platforms — from automation to data insights, driving innovation and growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {copilotBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:border-black/50 transition-colors"
            >
              <benefit.icon className="w-12 h-12 text-black mb-6" />
              <h3 className="text-xl font-bold text-black mb-4">{benefit.title}</h3>
              <p className="text-black">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
