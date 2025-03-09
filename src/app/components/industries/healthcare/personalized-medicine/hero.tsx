"use client";

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="bg-gradient-to-r from-teal-900 to-cyan-800 text-white py-32">
      <div className="container mx-auto px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-6"
        >
          Revolutionize Healthcare with Personalised Medicine Platforms
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl max-w-3xl mx-auto mb-8"
        >
          Harness the power of AI-driven Personalised Medicine Platforms to deliver tailored treatment plans based on individual patient data — ensuring precision care, optimized outcomes, and cutting-edge healthcare solutions.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <button className="px-8 py-3 text-lg font-medium bg-cyan-600 rounded-lg hover:bg-cyan-500 transition-all">
            Explore PMP Solutions
          </button>
          <button className="px-8 py-3 text-lg font-medium bg-gray-800 rounded-lg hover:bg-gray-700 transition-all">
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
