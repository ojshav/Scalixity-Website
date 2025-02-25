"use client";

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-gray-800 text-white py-32">
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
        <motion.button 
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg shadow-lg"
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
}

export default Hero;
