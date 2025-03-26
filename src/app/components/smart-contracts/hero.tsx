"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F3F1EB] py-20"> {/* Black background */}
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"> {/* White text */}
            Smart Contracts Development
          </h1>
          <p className="text-xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto"> {/* Light gray text */}
            Our Smart Contract Development services empower businesses with secure, automated, and transparent blockchain solutions. We provide end-to-end services, from conceptualization to deployment, ensuring that your smart contracts are meticulously designed, thoroughly tested, and seamlessly integrated into your existing ecosystem. Whether you need customized smart contracts for DeFi, NFTs, or enterprise applications, our expert team ensures they are robust, efficient, and aligned with your business objectives, fostering trust and decentralization in your operations.
          </p>

          
          <div className="relative z-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-black text-white font-medium text-lg hover:bg-purple-700 transition-colors w-full sm:w-auto"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
      
    </section>
  );
}

export default Hero;
