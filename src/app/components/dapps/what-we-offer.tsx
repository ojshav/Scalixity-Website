"use client";

import { motion } from 'framer-motion';

const services = [
  {
    title: "Comprehensive DApp Consulting",
    description: "We provide end-to-end consulting for businesses looking to leverage decentralized applications, ensuring the right strategy for security, efficiency, and scalability."
  },
  {
    title: "Advanced Smart Contract Engineering",
    description: "Our team develops highly secure and efficient smart contracts using Solidity, Rust, and Vyper for multiple blockchain ecosystems."
  },
  {
    title: "Next-Gen Decentralized App Development",
    description: "We build high-performance, user-friendly DApps designed for DeFi, gaming, supply chain management, and more."
  },
  {
    title: "Seamless Blockchain Integration",
    description: "We integrate blockchain wallets, APIs, and cross-chain functionalities to ensure smooth interoperability across various networks."
  },
  {
    title: "Tokenization & NFT Solutions",
    description: "We create and manage custom tokens, NFTs, and digital assets using Ethereum, Binance Smart Chain, Solana, and other platforms."
  },
  {
    title: "Enterprise-Grade Blockchain Solutions",
    description: "Our experts design and implement blockchain-powered solutions for enterprises, enhancing security, transparency, and operational efficiency."
  }
];

export function WhatWeOffer() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">OUR SERVICES</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            End-to-End Decentralized Application (DApp) Development
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            We craft scalable, secure, and innovative DApps, leveraging the latest blockchain technologies to revolutionize industries.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:border-primary/50 transition-colors"
            >
              <h3 className="text-xl font-bold text-black mb-4">{service.title}</h3>
              <p className="text-black leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
