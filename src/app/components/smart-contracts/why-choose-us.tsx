"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Code, Layers, DollarSign, Upload, Globe } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Robust Security & Auditing",
    description:
      "We prioritize security with rigorous smart contract audits, ensuring your blockchain solutions are protected from vulnerabilities and exploits.",
  },
  {
    icon: Code,
    title: "Tailored Smart Contract Development",
    description:
      "Our team customizes smart contracts to align perfectly with your business logic, using Solidity, Rust, and Vyper for optimal performance.",
  },
  {
    icon: Layers,
    title: "Seamless Blockchain Integration",
    description:
      "We ensure smooth smart contract integration with your existing systems, minimizing disruption and maximizing blockchain utility.",
  },
  {
    icon: DollarSign,
    title: "Token & Asset Creation",
    description:
      "From ERC-20 to ERC-721 tokens, we develop blockchain-based assets for ICOs, NFTs, and decentralized finance projects.",
  },
  {
    icon: Upload,
    title: "End-to-End Deployment & Upgrades",
    description:
      "We handle the entire lifecycle — from deploying smart contracts on blockchain networks to managing seamless upgrades and modifications.",
  },
  {
    icon: Globe,
    title: "DApp Development & Ecosystem Expansion",
    description:
      "Empower your platform with decentralized applications powered by smart contracts, tailored for diverse industries and user experiences.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            Why Choose Us for Smart Contract Development
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Partner with us to create secure, scalable, and customized smart contracts that drive blockchain innovation and business success.
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
              className="bg-[#F3F1EB] p-8 rounded-xl border-2 border-black hover:border-primary/50 transition-colors"
            >
              <reason.icon className="w-12 h-12 text-black mb-6" />
              <h3 className="text-xl font-bold text-black mb-4">{reason.title}</h3>
              <p className="text-black">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
