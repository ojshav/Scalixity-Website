"use client";

import { motion } from 'framer-motion';
import { Globe, Layers, Shield, Code, Users, Zap, MonitorSmartphone, ShoppingCart, Briefcase, Cpu } from 'lucide-react';

const benefits = [
  {
    icon: Globe,
    title: "Decentralized Web Solutions",
    description: "Harness the power of blockchain technology to build secure, transparent, and decentralized web applications. Our Web3 solutions ensure trustless interactions and data integrity."
  },
  {
    icon: Layers,
    title: "Smart Contract Development",
    description: "We create reliable and efficient smart contracts to automate transactions and enforce agreements without intermediaries, ensuring seamless execution of business logic."
  },
  {
    icon: Shield,
    title: "Enhanced Security & Privacy",
    description: "Protect your users' data and assets with robust cryptographic security measures, end-to-end encryption, and decentralized identity management."
  },
  {
    icon: Code,
    title: "Custom Web3 App Development",
    description: "Tailored Web3 applications for DeFi, NFTs, DAOs, and more. We build user-centric decentralized apps (dApps) that redefine digital interactions."
  },
  {
    icon: Users,
    title: "Community-Driven Ecosystems",
    description: "Empower your platform with token-based governance models, enabling users to participate in decision-making and fostering community growth."
  },
  {
    icon: Zap,
    title: "AI-Integrated Web3 Solutions",
    description: "Supercharge your dApps with AI capabilities, from predictive analytics to intelligent automation, creating smarter and more adaptive decentralized systems."
  },
  {
    icon: MonitorSmartphone,
    title: "Cross-Platform Compatibility",
    description: "Seamless access across web, mobile, and blockchain networks. Our Web3 apps ensure a consistent user experience across all devices and platforms."
  },
  {
    icon: ShoppingCart,
    title: "Tokenomics & NFT Marketplaces",
    description: "Develop robust token economies and NFT marketplaces, enabling secure trading, staking, and digital asset management within your Web3 ecosystem."
  },
  {
    icon: Briefcase,
    title: "Enterprise Blockchain Solutions",
    description: "Revolutionize your business operations with enterprise-grade blockchain applications, enhancing transparency, security, and efficiency."
  },
  {
    icon: Cpu,
    title: "Scalable & Future-Ready Infrastructure",
    description: "Utilizing the latest in blockchain protocols and AI, we build high-performance Web3 ecosystems that are scalable, fast, and ready for the future."
  }
];

export function Benefits() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            Why Choose Scalixity for Web3 App Development
          </h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            Transform your digital presence with innovative Web3 solutions, integrating blockchain, AI, and decentralized technology to unlock new possibilities.
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
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:border-gray-500 transition-colors"
            >
              <benefit.icon className="w-12 h-12 text-black mb-6" />
              <h3 className="text-xl font-bold text-black mb-4">{benefit.title}</h3>
              <p className="text-gray-800">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
