"use client";

import { motion } from 'framer-motion';
import { Smartphone, Globe, Rocket, Cloud, Lock, Battery, Feather, ShoppingBag, Zap, RefreshCw } from 'lucide-react';

const benefits = [
  {
    icon: Smartphone,
    title: "Cross-Platform Compatibility",
    description: "Deliver seamless experiences across mobile, tablet, and desktop with a single progressive web app. No need for multiple codebases."
  },
  {
    icon: Globe,
    title: "Offline Access",
    description: "PWAs use service workers to cache content, allowing users to access your app even without an internet connection."
  },
  {
    icon: Rocket,
    title: "Lightning-Fast Loading",
    description: "Optimize load times with PWA technology, ensuring users experience instant, smooth interactions and reduced bounce rates."
  },
  {
    icon: Cloud,
    title: "App-Like Experience",
    description: "Provide users with a native app feel—full-screen modes, home screen installation, and smooth transitions without app store dependencies."
  },
  {
    icon: Lock,
    title: "Enhanced Security",
    description: "Ensure data integrity and secure connections with HTTPS, keeping user information safe and encrypted."
  },
  {
    icon: Battery,
    title: "Optimized Performance",
    description: "Reduce data consumption and improve responsiveness through efficient caching and background sync capabilities."
  },
  {
    icon: Feather,
    title: "Lightweight & Efficient",
    description: "PWAs are lightweight compared to traditional apps, ensuring minimal storage usage and quick installation."
  },
  {
    icon: ShoppingBag,
    title: "Increased Engagement",
    description: "Boost user engagement with push notifications, allowing real-time communication and personalized experiences."
  },
  {
    icon: Zap,
    title: "SEO-Friendly",
    description: "Unlike native apps, PWAs are indexable by search engines, enhancing your app's visibility and organic reach."
  },
  {
    icon: RefreshCw,
    title: "Automatic Updates",
    description: "No app store approval needed—push updates directly to users, ensuring they always have the latest version."
  }
];

export function Benefits() {
  return (
    <section className="bg-gradient-to-r from-[#6a0dad] to-[#4c1d95] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Why Choose Scalixity for PWA Development
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Empower your digital presence with Progressive Web Apps—combining the best of web and mobile technologies for fast, reliable, and engaging user experiences.
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