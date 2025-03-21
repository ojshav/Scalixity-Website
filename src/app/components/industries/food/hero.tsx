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
          Transforming the Food Industry with AI
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl max-w-3xl mx-auto mb-8"
        >
          Harness AI to revolutionize food production, enhance quality control, and optimize supply chains. From predictive analytics for demand forecasting to AI-powered automation in processing and packaging — drive efficiency, cut waste, and deliver exceptional products to your customers.
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
