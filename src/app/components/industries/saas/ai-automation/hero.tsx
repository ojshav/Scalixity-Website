"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="bg-[#F3F1EB] text-black py-32 border-b border-black">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-6"
        >
          AI-Powered Automation for SaaS
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl max-w-3xl mx-auto mb-8"
        >
          Unlock the full potential of AI-driven automation to streamline workflows, optimize operations, and enhance decision-making in SaaS platforms.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <button className="px-8 py-3 text-lg font-medium bg-black text-white rounded-lg border border-black hover:bg-gray-800 transition-all">
            Explore AI Solutions
          </button>
          <button className="px-8 py-3 text-lg font-medium bg-transparent border border-black text-black rounded-lg hover:bg-black hover:text-white transition-all">
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
