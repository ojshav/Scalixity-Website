"use client";

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="bg-[#FFF2D5] text-black py-40">
      <div className="container mx-auto px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-8 leading-tight"
        >
          Transform Your SaaS Platform with AI-Powered Personalization
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-2xl max-w-4xl mx-auto mb-8"
        >
          Unlock the full potential of your SaaS platform by leveraging AI personalization — delivering hyper-relevant recommendations, dynamic content adaptation, and seamless user experiences that evolve in real-time. Drive customer engagement, increase retention, and maximize satisfaction with AI-driven solutions.
        </motion.p>
        <motion.a
          href="/contact"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="inline-block bg-[#590178] text-white text-lg font-semibold px-6 py-3 rounded-lg  transition"
        >
          Contact Us
        </motion.a>
      </div>
    </section>
  );
}

export default Hero;
