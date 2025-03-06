"use client";

import { motion } from 'framer-motion';
import { Shield, Code, Users, Zap, BarChart, Layers } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: "Uncompromising Security & Reliability",
    description: "We prioritize security-first DApp development, ensuring robust smart contracts, secure user interactions, and protection against vulnerabilities."
  },
  {
    icon: Code,
    title: "Custom DApp Development",
    description: "Our team builds tailored decentralized applications for DeFi, gaming, supply chain, and beyond, leveraging cutting-edge blockchain technology."
  },
  {
    icon: Users,
    title: "User-Centric Approach",
    description: "We design and develop DApps with intuitive UX/UI, ensuring seamless interactions and smooth user experiences on Web3 platforms."
  },
  {
    icon: Zap,
    title: "Performance & Scalability",
    description: "We create high-performance DApps optimized for scalability, enabling efficient operations even in high-demand blockchain ecosystems."
  },
  {
    icon: BarChart,
    title: "Data Transparency & Trust",
    description: "By harnessing blockchain’s decentralized nature, we ensure data immutability, transparency, and trust for all stakeholders."
  },
  {
    icon: Layers,
    title: "Interoperability & Cross-Chain Integration",
    description: "We enable smooth integration with multiple blockchain networks, ensuring interoperability and seamless cross-chain asset transfers."
  }
];

export function WhyChooseUs() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Why Choose Us for DApp Development
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Build secure, scalable, and future-ready decentralized applications with our expert blockchain development services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-colors"
            >
              <reason.icon className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-bold text-foreground mb-4">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
