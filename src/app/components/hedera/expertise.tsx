"use client";

import { Brain, Code, Database, Shield, Users, Zap } from 'lucide-react';

const expertiseAreas = [
  {
    icon: Brain,
    title: "Hedera App Development & Strategy",
    description: "Unlock the full potential of blockchain technology with our Hedera app development services. We strategize and build decentralized applications that harness the power of Hedera's high-performance ledger, ensuring security, speed, and scalability."
  },
  {
    icon: Code,
    title: "Smart Contract Integration",
    description: "Seamlessly integrate smart contracts into your Hedera-powered applications. Our team designs self-executing contracts that automate processes, enhance transparency, and reduce operational overhead, enabling a fully decentralized ecosystem."
  },
  {
    icon: Database,
    title: "Consensus Algorithm Optimization",
    description: "Leverage Hedera's Hashgraph consensus algorithm to achieve fast, fair, and secure transaction validation. We fine-tune your app's architecture to optimize throughput, minimize latency, and maintain robust security protocols."
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Protect your Hedera-based applications with state-of-the-art security audits. We ensure compliance with industry standards, detect vulnerabilities, and implement solutions to safeguard your app against potential threats."
  },
  {
    icon: Users,
    title: "Tokenization & Asset Management",
    description: "Create and manage digital assets on the Hedera network. We help you design custom tokens for utility, governance, or security purposes, ensuring smooth integration and facilitating secure peer-to-peer transactions."
  },
  {
    icon: Zap,
    title: "Workflow Automation & Interoperability",
    description: "Boost your business efficiency with Hedera-powered smart workflows. We build automated processes and connect your app with off-chain systems, APIs, and other blockchain networks, ensuring seamless interoperability."
  }
];

export function Expertise() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            Our Hedra App Development Expertise
          </h2>
          <p className="text-xl text-gray-900 max-w-3xl mx-auto">
            Empower your blockchain solutions with our Hedra app development services — delivering secure, scalable, and high-performance decentralized applications tailored to your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <div 
              key={index}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-border hover:border-primary/50 transition-colors"
            >
              <area.icon className="w-12 h-12 text-balck mb-6" />
              <h3 className="text-xl font-bold text-black mb-4">{area.title}</h3>
              <p className="text-gray-900 leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Expertise;
