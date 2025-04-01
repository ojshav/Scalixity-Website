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
          className="text-5xl font-extrabold mb-6 leading-tight"
        >
          AI-Powered Personalized Engagement Solutions
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl max-w-3xl mx-auto mb-8"
        >
          Transform customer relationships with AI-driven personalized engagement. Leverage data insights to deliver real-time, tailored experiences that foster loyalty, boost conversions, and enhance satisfaction.
        </motion.p>
        
        <motion.a
          href="/contact"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="inline-block bg-black text-white py-3 px-6 rounded-lg text-lg font-semibold"
        >
          Contact Us
        </motion.a>
      </div>
    </section>
  );
}

export default Hero;
