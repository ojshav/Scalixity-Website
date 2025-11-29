"use client";

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="bg-[#FFF2D5] text-black py-32">
      <div className="container mx-auto px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-semibold mb-6 leading-tight"
        >
          AI-Powered Voice Ordering Solutions for Retail
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl max-w-3xl mx-auto"
        >
          Revolutionize customer experiences with AI voice ordering. Enable seamless product searches, personalized recommendations, and hands-free checkout — all through intuitive voice commands.
        </motion.p>
        <motion.a
          href="/contact"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="inline-block bg-[#590178] text-white py-3 px-6 rounded-lg text-lg font-semibold"
        >
          Contact Us
        </motion.a>
      </div>
    </section>
  );
}

export default Hero;
