"use client";

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="bg-[#FFF2D5] py-32">
      <div className="container mx-auto px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-6 text-black"
        >
          Revolutionizing Documentation with AI Intelligence
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl max-w-3xl mx-auto mb-8 text-black"
        >
          Automate medical documentation with AI. Streamline clinical notes, transcribe patient interactions, and generate insightful summaries — all powered by AI. Enhance accuracy, save time, and empower healthcare professionals with real-time, intelligent documentation solutions.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center"
        >
          <button className="px-8 py-3 text-lg font-medium bg-[#590178] text-white rounded-lg  transition-all">
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
