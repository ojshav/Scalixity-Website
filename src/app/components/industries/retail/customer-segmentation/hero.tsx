"use client";

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="bg-[#F5F5DC] text-black py-32">
      <div className="container mx-auto px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-6 leading-tight"
        >
          Transform Retail with AI-Powered Customer Segmentation
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl max-w-3xl mx-auto mb-8"
        >
          Leverage AI-driven customer segmentation to uncover hidden insights, personalize marketing strategies, and boost customer retention. Make data-driven decisions to elevate your retail business.
        </motion.p>
      </div>
    </section>
  );
}

export default Hero;
