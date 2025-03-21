"use client";

import { Server, Settings, Users, ShieldCheck, Database, TrendingUp } from 'lucide-react';

const expertiseAreas = [
  {
    icon: Server,
    title: "Decentralized Financial Applications",
    description: "We specialize in building secure, transparent, and efficient financial dApps on the Stellar blockchain, enabling seamless cross-border transactions and cost-effective financial solutions."
  },
  {
    icon: Settings,
    title: "Smart Contract & Asset Tokenization",
    description: "Our expertise in Stellar’s smart contract capabilities allows businesses to tokenize assets efficiently while ensuring compliance, security, and minimal transaction costs."
  },
  {
    icon: Users,
    title: "Seamless User Experience & UI/UX",
    description: "We design high-performance, intuitive user interfaces tailored for Stellar-based applications, enhancing accessibility and engagement for users worldwide."
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance Assurance",
    description: "Implementing top-tier security protocols and encryption techniques to ensure Stellar-based applications remain resilient against threats and fully compliant with financial regulations."
  },
  {
    icon: Database,
    title: "Scalable & High-Performance Infrastructure",
    description: "Our solutions are designed for high-speed, low-cost transactions with the ability to scale seamlessly, supporting businesses as they grow in the Stellar ecosystem."
  },
  {
    icon: TrendingUp,
    title: "Real-Time Analytics & Insights",
    description: "Leveraging on-chain analytics and AI-powered insights to provide real-time transaction monitoring, risk management, and business intelligence solutions."
  }
];

export function Expertise() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray mb-6">
            Our Stellar App Development Expertise
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Empowering businesses with secure, scalable, and cost-effective blockchain solutions on the Stellar network.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-colors"
            >
              <area.icon className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-bold text-gray mb-4">{area.title}</h3>
              <p className="text-gray-700">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Expertise;
