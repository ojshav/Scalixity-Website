"use client";

import { Server, Settings, Users, ShieldCheck, Database, TrendingUp } from 'lucide-react';

const expertiseAreas = [
  {
    icon: Server,
    title: "Decentralized Application Development",
    description: "We build secure, transparent, and scalable dApps on various blockchain networks, ensuring seamless integration, user-friendly interfaces, and efficiency tailored for diverse industries."
  },
  {
    icon: Settings,
    title: "Smart Contract Development",
    description: "Our team creates high-performance smart contracts, ensuring security, reliability, and compliance with blockchain protocols, optimizing transactions and automation."
  },
  {
    icon: Users,
    title: "User-Centric UI/UX Design",
    description: "Designing intuitive, high-performance interfaces that enhance usability, accessibility, and engagement for decentralized applications, ensuring a seamless experience."
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance Assurance",
    description: "We implement industry-leading security protocols, multi-layer encryption, and regulatory compliance measures to safeguard decentralized applications against threats."
  },
  {
    icon: Database,
    title: "Scalable Blockchain Infrastructure",
    description: "Building efficient, high-performance blockchain solutions that handle increasing network demand, ensuring long-term reliability and adaptability."
  },
  {
    icon: TrendingUp,
    title: "On-Chain Analytics & Insights",
    description: "Providing real-time blockchain analytics, monitoring, and predictive insights to empower businesses with data-driven decision-making and optimization strategies."
  }
];

export function Expertise() {
  return (
    <section className="bg-[#080B16] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Our dApps Development Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Empowering businesses with secure, scalable, and innovative decentralized applications on the blockchain.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-colors"
            >
              <area.icon className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">{area.title}</h3>
              <p className="text-gray-400">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Expertise;
