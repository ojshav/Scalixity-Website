"use client";

import { Server, Settings, Users, ShieldCheck, Database, TrendingUp } from 'lucide-react';

const expertiseAreas = [
  {
    icon: Server,
    title: "Decentralized Application Development",
    description: "We build secure, transparent, and scalable dApps leveraging Cardano's advanced blockchain infrastructure. Our development ensures seamless integration, user-friendly interfaces, and efficiency tailored for various industries."
  },
  {
    icon: Settings,
    title: "Smart Contract Development",
    description: "Our team develops robust, high-performance Plutus-based smart contracts, ensuring reliability, security, and full compliance with blockchain protocols. We optimize contracts for efficiency and cost-effectiveness."
  },
  {
    icon: Users,
    title: "Seamless User Experience & UI/UX",
    description: "Designing intuitive, high-performance interfaces that enhance usability, accessibility, and engagement for Cardano-powered applications, ensuring a frictionless experience for end users."
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance Assurance",
    description: "We implement best-in-class security protocols, multi-layer encryption, and regulatory compliance measures to safeguard Cardano applications against cyber threats and unauthorized access."
  },
  {
    icon: Database,
    title: "Scalable Blockchain Infrastructure",
    description: "Building efficient, high-performance blockchain solutions that can handle increasing network demand, ensuring long-term reliability, scalability, and adaptability to evolving business needs."
  },
  {
    icon: TrendingUp,
    title: "On-Chain Analytics & Insights",
    description: "Providing real-time blockchain analytics, monitoring, and predictive insights to empower businesses with data-driven decision-making, risk management, and optimization strategies."
  }
];

export function Expertise() {
  return (
    <section className="bg-[#080B16] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Our Cardano App Development Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Empowering businesses with secure, scalable, and innovative blockchain applications on Cardano.
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
