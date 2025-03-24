"use client";

import { motion } from "framer-motion";
import Link from "next/link"; // Importing Link from Next.js

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
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
            Stellar App Development Services
          </h1>
          <p className="text-xl text-black mb-12 leading-relaxed max-w-3xl mx-auto">
            Unlock the power of Stellar blockchain with our cutting-edge app development services. We design and build secure, scalable, and high-performance Stellar-based applications to drive innovation and efficiency in financial ecosystems.
          </p>

          {/* Updated Contact Button */}
          <div className="relative z-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center mt-8 px-6 py-3 rounded-full bg-black text-white hover:bg-gray-800 hover:scale-105 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 z-0" />
    </section>
  );
}

export default Hero;
