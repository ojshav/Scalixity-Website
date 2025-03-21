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
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
