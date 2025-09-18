"use client";

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="bg-[hsl(var(--background))] text-black py-32">
      <div className="container mx-auto px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-6"
        >
          Revolutionize Retail with AI Solutions
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl max-w-3xl mx-auto mb-8"
        >
          Empower your retail business with AI-driven insights. Personalize customer experiences, optimize inventory management, implement dynamic pricing, and streamline operations. AI solutions unlock the full potential of data, driving innovation and boosting sales.
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
