"use client";

import { motion } from 'framer-motion';

const services = [
  {
    title: "Smart Contract Development",
    description: "We build secure and efficient smart contracts tailored to your business logic, ensuring transparent and automated operations."
  },
  {
    title: "Decentralized Application (dApp) Development",
    description: "Our team creates user-friendly dApps on blockchain networks, combining security, scalability, and seamless user experiences."
  },
  {
    title: "Token Development & Integration",
    description: "We design and deploy custom tokens — utility, security, or governance tokens — to power your Web3 ecosystem."
  },
  {
    title: "NFT Marketplace Solutions",
    description: "We build feature-rich NFT platforms, supporting minting, trading, and showcasing of digital assets."
  },
  {
    title: "Wallet Development & Integration",
    description: "Our secure wallet solutions let users store, send, and receive cryptocurrencies and NFTs effortlessly."
  },
  {
    title: "Blockchain Security & Audit",
    description: "We conduct in-depth security audits and implement robust protocols to safeguard your blockchain infrastructure."
  }
];

export function WhatWeOffer() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-gray-700 uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Our Web3 App Development Services
          </h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            Empower your business with innovative Web3 solutions — from smart contracts to decentralized apps, we build the future of the internet.
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
              className="bg-white p-8 rounded-xl border border-black hover:border-gray-500 transition-colors"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-800 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
