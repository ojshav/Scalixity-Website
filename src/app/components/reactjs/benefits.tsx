"use client";

import { motion } from 'framer-motion';
import { Code, Rocket, MonitorSmartphone, Layers, Zap, ShieldCheck, Users, Server, Cpu, RefreshCw } from 'lucide-react';

const benefits = [
  {
    icon: Code,
    title: "Custom React.js App Development",
    description: "Build high-performance, scalable, and interactive web applications tailored to your business needs with React.js."
  },
  {
    icon: Rocket,
    title: "Lightning-Fast Performance",
    description: "Optimize your apps with React’s virtual DOM, ensuring smooth, responsive user experiences and rapid load times."
  },
  {
    icon: MonitorSmartphone,
    title: "Cross-Platform Compatibility",
    description: "Create seamless web and mobile applications with React.js, delivering a unified experience across devices."
  },
  {
    icon: Layers,
    title: "Component-Based Architecture",
    description: "Develop reusable, modular components to streamline development, enhance maintainability, and accelerate updates."
  },
  {
    icon: Zap,
    title: "AI-Integrated React Solutions",
    description: "Incorporate AI features like chatbots, predictive analytics, and personalized user interactions into your React apps."
  },
  {
    icon: ShieldCheck,
    title: "Robust Security Measures",
    description: "Implement advanced security protocols to protect user data, ensuring safe and secure app environments."
  },
  {
    icon: Users,
    title: "User-Centric Designs",
    description: "Create intuitive, engaging interfaces with React’s flexibility, boosting user satisfaction and retention."
  },
  {
    icon: Server,
    title: "Seamless API Integrations",
    description: "Effortlessly connect your React apps with RESTful APIs, GraphQL, and third-party services for extended functionality."
  },
  {
    icon: Cpu,
    title: "Scalable Architecture",
    description: "Design React.js apps with scalability in mind, accommodating future growth and increasing traffic."
  },
  {
    icon: RefreshCw,
    title: "Continuous Deployment & Support",
    description: "Ensure your React.js apps stay updated, secure, and bug-free with ongoing deployment and maintenance services."
  }
];

export function Benefits() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            Why Choose Scalixity for React.js App Development
          </h2>
          <p className="text-xl text-black/80 max-w-3xl mx-auto">
            Unlock the full potential of React.js with Scalixity. From interactive UIs to AI-powered apps, we build dynamic, future-ready solutions.
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
              className="bg-[#F3F1EB] border border-black p-8 rounded-xl hover:border-black transition-colors"
            >
              <benefit.icon className="w-12 h-12 text-black mb-6" />
              <h3 className="text-xl font-bold text-black mb-4">{benefit.title}</h3>
              <p className="text-black/80">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
