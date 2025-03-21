"use client";

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="bg-[#F3F1EB] text-black py-32">
      <div className="container mx-auto px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-6"
        >
          Revolutionizing Manufacturing with AI
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl max-w-3xl mx-auto mb-8"
        >
          Embrace AI to boost operational efficiency, enhance product quality, and streamline your manufacturing processes. Leverage predictive analytics to foresee equipment failures before they happen, optimize supply chains with real-time data insights, and drive innovation through smart automation. AI empowers manufacturers to reduce downtime, cut operational costs, and deliver high-quality products at scale — ensuring a competitive edge in today’s fast-paced market.
        </motion.p>
        <motion.a 
          href="/contact"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-black text-white py-3 px-8 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors"
        >
          Get Started
        </motion.a>
      </div>
    </section>
  );
}

export default Hero;
