"use client";

import { motion } from 'framer-motion';
import { Smartphone, Code, Rocket, Layers, Lock, Cloud, TrendingUp, Users, ShieldCheck, Globe } from 'lucide-react';

const benefits = [
  {
    icon: Smartphone,
    title: "Native Performance",
    description: "Leverage platform-specific capabilities to deliver fast, responsive, and fluid user experiences."
  },
  {
    icon: Code,
    title: "Customizable UI/UX",
    description: "Design tailor-made interfaces that adapt seamlessly to Android’s diverse device ecosystem."
  },
  {
    icon: Rocket,
    title: "Scalability & Flexibility",
    description: "Easily scale your app’s infrastructure to handle growing user bases and feature expansions."
  },
  {
    icon: Layers,
    title: "Seamless Integration",
    description: "Integrate with Google services, APIs, and third-party tools for a feature-rich application."
  },
  {
    icon: Lock,
    title: "Robust Security",
    description: "Implement data encryption, secure authentication, and compliance-driven protocols."
  },
  {
    icon: Cloud,
    title: "Cloud Compatibility",
    description: "Sync app data and functionalities with cloud services like Google Cloud for real-time updates."
  },
  {
    icon: TrendingUp,
    title: "Cost-Effective Solutions",
    description: "Optimize development processes and infrastructure for budget-friendly app deployment."
  },
  {
    icon: Users,
    title: "Wider Audience Reach",
    description: "Tap into the vast Android user base, ensuring your app reaches millions of potential users."
  },
  {
    icon: ShieldCheck,
    title: "Offline Functionality",
    description: "Enable apps to work seamlessly without internet access, boosting user accessibility."
  },
  {
    icon: Globe,
    title: "SEO Optimization",
    description: "Enhance app visibility on Google Play Store through strategic ASO (App Store Optimization)."
  }
];

export function Benefits() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            Why Choose Scalixity for Android App Development
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Empower your business with high-performance, secure, and scalable Android applications tailored to your vision.
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
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:border-black transition-colors"
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
