"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const benefits = [
  {
    title: "Decentralization & Trust",
    description: "dApps operate on decentralized networks, eliminating single points of failure and ensuring transparent, trustless interactions."
  },
  {
    title: "Security & Immutability",
    description: "Built on blockchain, dApps benefit from enhanced security, data integrity, and resistance to tampering."
  },
  {
    title: "Smart Contract Automation",
    description: "Automate transactions and processes securely using smart contracts, reducing the need for intermediaries."
  },
  {
    title: "Interoperability & Flexibility",
    description: "Our dApps seamlessly integrate across multiple blockchain networks, offering flexibility for diverse applications."
  },
  {
    title: "Scalability & Performance",
    description: "Designed for high-performance use cases, our dApps scale efficiently while maintaining optimal speed and efficiency."
  },
  {
    title: "Tokenization & Monetization",
    description: "Enable innovative economic models through tokenization, allowing for new revenue streams and incentives."
  }
];

export function Benefits() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-black">
            BENEFITS OF DAPPS DEVELOPMENT
          </span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Why Build Decentralized Applications (dApps)?
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Unlock the full potential of blockchain technology with decentralized applications that ensure security, scalability, and trustless operations.
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
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black transition-colors"
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
