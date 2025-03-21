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
          <h1 className="text-4xl md:text-6xl font-semibold text-black mb-6">
            AI Solutions for Fintech Innovation
          </h1>
          <p className="text-xl text-black mb-12 leading-relaxed max-w-3xl mx-auto">
            Empower your financial services with AI-driven solutions. From fraud detection to personalized customer experiences, we help fintech companies unlock the full potential of artificial intelligence to drive growth and efficiency.
          </p>
          <a
            href="/contact"
            className="inline-block bg-black text-white py-3 px-6 rounded-lg text-lg font-semibold transition duration-300 hover:bg-gray-800"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
