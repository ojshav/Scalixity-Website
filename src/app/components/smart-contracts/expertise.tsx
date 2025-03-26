"use client";

import { Server, Settings, Users, ShieldCheck, Database, TrendingUp } from 'lucide-react';

const expertiseAreas = [
  {
    icon: Server,
    title: "Custom Smart Contract Development",
    description: "We design and develop tailored smart contracts to automate processes, ensuring secure, transparent, and efficient blockchain transactions."
  },
  {
    icon: Settings,
    title: "Blockchain Integration & Deployment",
    description: "Seamlessly integrate smart contracts into your existing blockchain ecosystem, optimizing interoperability and performance."
  },
  {
    icon: Users,
    title: "User-Centric Smart Contract Solutions",
    description: "Enhancing usability with intuitive interfaces and efficient contract execution for various blockchain applications."
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance Audits",
    description: "Implementing industry-leading security measures, audits, and best practices to safeguard against vulnerabilities and cyber threats."
  },
  {
    icon: Database,
    title: "Scalable & Cost-Effective Solutions",
    description: "Developing optimized smart contracts with efficient gas usage and scalability to support business growth."
  },
  {
    icon: TrendingUp,
    title: "On-Chain Analytics & Performance Monitoring",
    description: "Providing real-time insights into smart contract execution, transaction analytics, and blockchain performance."
  }
];

export function Expertise() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            Our Smart Contract Development Expertise
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Building secure, scalable, and efficient smart contract solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <div 
              key={index}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:border-black transition-colors"
            >
              <area.icon className="w-12 h-12 text-black mb-6" />
              <h3 className="text-xl font-bold text-black mb-4">{area.title}</h3>
              <p className="text-black">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Expertise;
