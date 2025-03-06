"use client";

import { motion } from 'framer-motion';
import { Smartphone, Code, Rocket, ShieldCheck, Layers, Cpu, Wifi, BatteryCharging, Cloud, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: Smartphone,
    title: "Seamless User Experience",
    description: "Craft intuitive, responsive, and fluid apps with native components tailored for iOS and Android."
  },
  {
    icon: Code,
    title: "Cross-Platform Development",
    description: "Leverage frameworks like React Native to build once and deploy everywhere, reducing development time and cost."
  },
  {
    icon: Rocket,
    title: "High Performance",
    description: "Ensure fast load times and smooth animations with optimized native code and direct hardware access."
  },
  {
    icon: ShieldCheck,
    title: "Robust Security",
    description: "Implement end-to-end encryption, biometric authentication, and secure data storage solutions."
  },
  {
    icon: Layers,
    title: "Scalability & Flexibility",
    description: "Design scalable architectures to accommodate growing user bases and feature expansions."
  },
  {
    icon: Cpu,
    title: "Native API Integration",
    description: "Seamlessly integrate with device hardware like cameras, GPS, sensors, and more for a powerful app experience."
  },
  {
    icon: Wifi,
    title: "Real-Time Connectivity",
    description: "Enable real-time features like push notifications, live data sync, and instant messaging."
  },
  {
    icon: BatteryCharging,
    title: "Battery Efficiency",
    description: "Optimize code and processes to reduce energy consumption and extend battery life."
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    description: "Sync app data seamlessly with cloud services like AWS, Firebase, and Google Cloud."
  },
  {
    icon: TrendingUp,
    title: "Analytics & Insights",
    description: "Incorporate analytics tools to track user behavior, optimize performance, and drive business growth."
  }
];

export function Benefits() {
  return (
    <section className="bg-gradient-to-r from-[#6a0dad] to-[#4c1d95] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Why Choose Scalixity for Native App Development
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Build blazing-fast, secure, and user-centric native apps that captivate your audience and elevate your brand.
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
