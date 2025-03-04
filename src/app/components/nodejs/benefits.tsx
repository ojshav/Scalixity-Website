"use client";

import { motion } from 'framer-motion';
import { Rocket, Server, Code, Zap, ShieldCheck, Layers, Cpu, Plug, Database, RefreshCw } from 'lucide-react';

const benefits = [
  {
    icon: Rocket,
    title: "High-Performance App Development",
    description: "Leverage Node.js for building fast, scalable, and event-driven applications with non-blocking I/O operations."
  },
  {
    icon: Server,
    title: "Real-Time Data Processing",
    description: "Create real-time applications like chat apps, live updates, and streaming services with WebSockets and Node.js."
  },
  {
    icon: Code,
    title: "Efficient API Development",
    description: "Build RESTful and GraphQL APIs that seamlessly integrate your frontend and backend for smooth data exchange."
  },
  {
    icon: Zap,
    title: "Lightning-Fast Execution",
    description: "Boost app speed with Node.js's V8 engine, ensuring rapid execution of server-side logic and minimal latency."
  },
  {
    icon: ShieldCheck,
    title: "Robust Security Implementations",
    description: "Implement security best practices with JWT authentication, data encryption, and protection against common web attacks."
  },
  {
    icon: Layers,
    title: "Microservices Architecture",
    description: "Design flexible and scalable microservices using Node.js, ensuring seamless deployment and maintenance."
  },
  {
    icon: Cpu,
    title: "Scalable Server-Side Solutions",
    description: "Handle high traffic loads and concurrent requests efficiently with Node.js’s event-driven architecture."
  },
  {
    icon: Plug,
    title: "Seamless Third-Party Integrations",
    description: "Connect your apps with databases, cloud services, payment gateways, and more using Node.js’s vast ecosystem."
  },
  {
    icon: Database,
    title: "Database Connectivity",
    description: "Integrate with both SQL and NoSQL databases like MongoDB, PostgreSQL, and Redis for smooth data management."
  },
  {
    icon: RefreshCw,
    title: "Continuous Deployment & Monitoring",
    description: "Ensure peak performance with CI/CD pipelines, error tracking, and real-time monitoring for Node.js apps."
  }
];

export function Benefits() {
  return (
    <section className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Why Choose Scalixity for Node.js App Development
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Empower your backend with Node.js — build high-performance, real-time apps that scale effortlessly with Scalixity.
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
