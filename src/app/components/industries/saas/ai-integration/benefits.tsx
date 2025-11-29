"use client";

import { motion } from 'framer-motion';
import { BrainCircuit, CloudCog, ShieldCheck, BarChart4, Users, Workflow } from 'lucide-react';

const aiIntegrationBenefits = [
  {
    icon: BrainCircuit,
    title: "Advanced AI Automation",
    description: "Streamline SaaS operations by automating complex tasks and reducing manual effort."
  },
  {
    icon: CloudCog,
    title: "Seamless Cloud Integration",
    description: "Integrate AI seamlessly with cloud-based SaaS platforms for enhanced performance."
  },
  {
    icon: ShieldCheck,
    title: "Robust Data Security",
    description: "AI-powered security measures to detect and prevent threats in real-time."
  },
  {
    icon: BarChart4,
    title: "Predictive Analytics",
    description: "Leverage AI insights to forecast trends and make data-driven decisions."
  },
  {
    icon: Users,
    title: "Enhanced User Experiences",
    description: "Deliver personalized experiences by analyzing user behavior and preferences."
  },
  {
    icon: Workflow,
    title: "Optimized Workflows",
    description: "AI algorithms to optimize processes, increasing operational efficiency."
  }
];

export function Benefits() {
  return (
    <section className="bg-[#590178] py-24"> 
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Benefits of AI Integration in SaaS
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Unlock the full potential of your SaaS platform with AI — from automation to predictive insights, driving innovation and growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiIntegrationBenefits.map((benefit, index) => (
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
