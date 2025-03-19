"use client";

import { motion } from 'framer-motion';
import { Rocket, Layers, Cloud, Zap, Lock, Server, Code, TrendingUp, ShieldCheck, Globe } from 'lucide-react';

const benefits = [
  {
    icon: Rocket,
    title: "High Performance & Speed",
    description: "Leverage Node.js's V8 engine to execute JavaScript at lightning speed, ensuring fast, seamless experiences."
  },
  {
    icon: Layers,
    title: "Scalability & Flexibility",
    description: "Easily scale your applications horizontally and vertically to handle increasing user loads with Node.js’s event-driven architecture."
  },
  {
    icon: Cloud,
    title: "Real-Time Capabilities",
    description: "Build dynamic, real-time applications like chat apps, gaming platforms, and live streaming services."
  },
  {
    icon: Zap,
    title: "Cross-Platform Development",
    description: "Use JavaScript for both frontend and backend, streamlining development and reducing time-to-market."
  },
  {
    icon: Lock,
    title: "Enhanced Security",
    description: "Implement robust authentication, data encryption, and secure API integrations to safeguard user data."
  },
  {
    icon: Server,
    title: "Robust Ecosystem",
    description: "Access thousands of open-source libraries through npm, accelerating feature development and innovation."
  },
  {
    icon: Code,
    title: "Microservices Architecture",
    description: "Build modular, independent services that enhance maintainability and allow rapid updates."
  },
  {
    icon: TrendingUp,
    title: "Cost-Effective Solutions",
    description: "Reduce infrastructure and development costs by using a single language across the entire tech stack."
  },
  {
    icon: ShieldCheck,
    title: "Cloud Compatibility",
    description: "Seamlessly integrate Node.js apps with cloud platforms like AWS, Google Cloud, and Azure for fast deployment."
  },
  {
    icon: Globe,
    title: "SEO Optimization",
    description: "Ensure your apps are search engine-friendly, boosting visibility and organic reach."
  }
];

export function Benefits() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            Why Choose Scalixity for Node.js Development
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Supercharge your backend with fast, scalable Node.js solutions — tailored for modern web and mobile apps.
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
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black"
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
