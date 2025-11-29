"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FFF2D5] py-20"> 
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6"> 
          NFT Marketplace Development

          </h1>
          <p className="text-xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto"> 
          Launch and scale your NFT marketplace with our cutting-edge blockchain solutions. 
            We provide secure, scalable, and feature-rich platforms to empower creators, 
            collectors, and businesses in the digital asset ecosystem.
.
          </p>

          
          <div className="relative z-10">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#590178] text-white text-lg font-semibold  transition"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />
    </section>
  );
}

export default Hero;
