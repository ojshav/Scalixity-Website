"use client";

import { motion } from 'framer-motion';
import { Server, Cloud, Code, ShieldCheck, Activity, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: Cloud,
    title: "Scalability & Flexibility",
    description: "Easily scale your infrastructure to match growing demands, ensuring seamless performance without hardware limitations."
  },
  {
    icon: Server,
    title: "Cost-Effective Solutions",
    description: "Reduce operational costs by leveraging cloud-based software, eliminating the need for expensive on-premise setups."
  },
  {
    icon: Code,
    title: "Seamless Integrations",
    description: "Integrate with existing tools and APIs effortlessly, enhancing workflows and boosting productivity."
  },
  {
    icon: ShieldCheck,
    title: "Robust Security",
    description: "Ensure data protection with end-to-end encryption, secure access controls, and continuous security updates."
  },
  {
    icon: Activity,
    title: "Real-Time Analytics",
    description: "Gain instant insights into your business performance through AI-powered dashboards and reporting tools."
  },
  {
    icon: TrendingUp,
    title: "Automatic Updates",
    description: "Stay ahead with automatic software updates, ensuring your platform is always running the latest features and security patches."
  }
];

export function Benefits() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">BENEFITS OF SAAS</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Empower Your Business with SaaS Solutions
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Discover the power of SaaS — scale effortlessly, integrate seamlessly, and drive innovation with cloud-based technology. Maximize efficiency and stay agile in a competitive digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
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
