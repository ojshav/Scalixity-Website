"use client";

import { motion } from "framer-motion";
import { Smartphone, Rocket, Shield, Star, Code, Cloud, Globe, Lock, Zap, Feather } from "lucide-react";

const benefits = [
  {
    icon: Smartphone,
    title: "Seamless User Experience",
    description:
      "Craft intuitive and responsive iOS apps with fluid animations, delivering a smooth user experience tailored for Apple devices.",
  },
  {
    icon: Rocket,
    title: "High Performance",
    description:
      "Leverage the power of Swift and native frameworks to build fast, efficient apps optimized for iPhone, iPad, and Apple Watch.",
  },
  {
    icon: Shield,
    title: "Enhanced Security",
    description:
      "Implement robust security protocols, ensuring data encryption, secure authentication, and compliance with Apple’s guidelines.",
  },
  {
    icon: Star,
    title: "App Store Optimization (ASO)",
    description:
      "Boost your app’s visibility and downloads by strategically optimizing its App Store presence with keywords, visuals, and ratings.",
  },
  {
    icon: Code,
    title: "Custom Integrations",
    description:
      "Seamlessly integrate with Apple APIs like SiriKit, HealthKit, and ARKit to create feature-rich, cutting-edge applications.",
  },
  {
    icon: Cloud,
    title: "iCloud Synchronization",
    description:
      "Enable real-time data sync across devices with iCloud integration, ensuring users access their data anytime, anywhere.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Expand your app’s audience by localizing content, supporting multiple languages, and leveraging Apple’s global App Store ecosystem.",
  },
  {
    icon: Lock,
    title: "Data Privacy & Compliance",
    description:
      "Ensure user trust by adhering to Apple’s strict privacy policies, safeguarding user data and maintaining app integrity.",
  },
  {
    icon: Zap,
    title: "Real-Time Push Notifications",
    description:
      "Engage users instantly with personalized push notifications powered by Apple’s Push Notification Service (APNs).",
  },
  {
    icon: Feather,
    title: "Sleek & Modern Design",
    description:
      "Embrace Apple’s Human Interface Guidelines (HIG) to create elegant, user-friendly designs that resonate with iOS users.",
  },
];

export function Benefits() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            Why Choose Scalixity for iOS App Development
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Build sleek, secure, and high-performance iOS apps tailored for the Apple ecosystem — from iPhone to iPad and beyond.
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
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black shadow-md transition-all hover:shadow-lg"
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
