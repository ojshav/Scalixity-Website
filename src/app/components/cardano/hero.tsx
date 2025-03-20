"use client";

import { motion } from "framer-motion";




export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F3F1EB] py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Cardano App Development
          </h1>
          <p className="text-xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
            Unlock the potential of blockchain with our expert Cardano app development services. 
            From smart contracts to decentralized applications, we build scalable and secure solutions tailored to your needs. 
            Leverage the power of Cardano for DeFi, NFTs, and enterprise applications with our experienced team.
          </p>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
    </section>
  );
}

export default Hero;
