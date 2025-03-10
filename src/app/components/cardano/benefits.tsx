"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const benefits = [
  {
    title: "Decentralization & Security",
    description: "Cardano's blockchain architecture ensures high security and decentralization, reducing risks associated with central points of failure."
  },
  {
    title: "Scalability & Sustainability",
    description: "With its proof-of-stake consensus mechanism, Cardano is designed for scalability, enabling efficient transactions with minimal energy consumption."
  },
  {
    title: "Interoperability & Smart Contracts",
    description: "Cardano supports seamless interoperability with other blockchain networks and provides a secure smart contract platform through Plutus."
  },
  {
    title: "Governance & Transparency",
    description: "Through a community-driven governance model, Cardano enables stakeholders to participate in decision-making for protocol upgrades."
  },
  {
    title: "High Assurance & Peer-Reviewed Research",
    description: "Cardano is built on rigorous scientific research and formal verification methods to ensure high assurance and reliability."
  },
  {
    title: "Affordable & Fast Transactions",
    description: "Leveraging an optimized transaction structure, Cardano ensures low fees and fast transaction processing."
  }
];

export function Benefits() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">
            CARDANO BENEFITS
          </span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Why Choose Cardano Blockchain
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Experience the next generation of blockchain technology with enhanced security, scalability, and efficiency.
          </p>
        </div>

        {/* Benefits List */}
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">{benefit.title}</h3>
                  <p className="text-black">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
