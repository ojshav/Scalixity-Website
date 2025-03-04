"use client";

import { motion } from 'framer-motion';
import { Server, Rocket, Code, Zap, ShieldCheck, Layers, Cpu, Plug, Database, RefreshCw } from 'lucide-react';

const benefits = [
  {
    icon: Server,
    title: "High-Performance Backend Development",
    description: "Leverage Express.js for building fast, lightweight, and non-blocking backend services with Node.js."
  },
  {
    icon: Rocket,
    title: "Rapid API Development",
    description: "Quickly create RESTful APIs and GraphQL endpoints, seamlessly connecting your frontend with the backend."
  },
  {
    icon: Code,
    title: "Custom Middleware Integration",
    description: "Enhance app functionality by integrating custom middleware for logging, authentication, and data validation."
  },
  {
    icon: Zap,
    title: "Real-Time Data Processing",
    description: "Enable real-time features like chat apps, live notifications, and streaming services using WebSockets and Express.js."
  },
  {
    icon: ShieldCheck,
    title: "Robust Security Implementations",
    description: "Secure your apps with JWT authentication, data encryption, and protection against common web vulnerabilities."
  },
  {
    icon: Layers,
    title: "Modular Architecture",
    description: "Design clean, modular codebases with Express.js, improving maintainability and accelerating feature enhancements."
  },
  {
    icon: Cpu,
    title: "Scalable Server-Side Solutions",
    description: "Build highly scalable and event-driven architectures, ready to handle increasing traffic and user demands."
  },
  {
    icon: Plug,
    title: "Seamless Third-Party Integrations",
    description: "Easily connect with databases, payment gateways, cloud services, and more using Express.js flexibility."
  },
  {
    icon: Database,
    title: "Database Connectivity",
    description: "Integrate with SQL or NoSQL databases like MongoDB, PostgreSQL, and Redis to manage data efficiently."
  },
  {
    icon: RefreshCw,
    title: "Continuous Deployment & Monitoring",
    description: "Ensure smooth app performance with CI/CD pipelines, error tracking, and real-time monitoring solutions."
  }
];

export function Benefits() {
  return (
    <section className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Why Choose Scalixity for Express.js App Development
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Unlock the power of Express.js for building fast, secure, and scalable server-side applications with Scalixity.
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
