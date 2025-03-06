"use client";

import { motion } from 'framer-motion';
import { Smartphone, Globe, Rocket, Cloud, Lock, Layers, Code, ShoppingBag, Zap, RefreshCw } from 'lucide-react';

const benefits = [
  {
    icon: Smartphone,
    title: "Cross-Platform Compatibility",
    description: "Build once, deploy everywhere—hybrid apps run seamlessly on both iOS and Android, reducing development time and costs."
  },
  {
    icon: Globe,
    title: "Wider Market Reach",
    description: "Reach users across multiple platforms simultaneously, expanding your app's accessibility and audience."
  },
  {
    icon: Rocket,
    title: "Faster Development",
    description: "Accelerate your app launch with a unified codebase, streamlining development and iteration cycles."
  },
  {
    icon: Cloud,
    title: "App-Like Experience",
    description: "Deliver smooth, native-like user experiences with responsive design, fluid animations, and offline support."
  },
  {
    icon: Lock,
    title: "Secure & Reliable",
    description: "Implement robust security protocols, ensuring user data is protected across platforms."
  },
  {
    icon: Layers,
    title: "Cost-Effective Solutions",
    description: "Save resources by maintaining a single codebase for both platforms, minimizing development and maintenance costs."
  },
  {
    icon: Code,
    title: "Seamless Integration",
    description: "Integrate native device features like GPS, camera, and push notifications effortlessly."
  },
  {
    icon: ShoppingBag,
    title: "App Store & Web Distribution",
    description: "Deploy on app stores while also allowing web access, giving users flexibility in how they engage with your app."
  },
  {
    icon: Zap,
    title: "Improved Performance",
    description: "Optimize hybrid apps for speed and efficiency, ensuring smooth performance across devices."
  },
  {
    icon: RefreshCw,
    title: "Easy Updates",
    description: "Push updates quickly across all platforms without waiting for app store approvals."
  }
];

export function Benefits() {
  return (
    <section className="bg-gradient-to-r from-[#6a0dad] to-[#4c1d95] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Why Choose Scalixity for Hybrid App Development
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Empower your business with cross-platform hybrid apps—combining native performance with web flexibility for a seamless user experience.
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
              className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 hover:border-white/50 transition-colors"
            >
              <benefit.icon className="w-12 h-12 text-white mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
              <p className="text-gray-200">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
