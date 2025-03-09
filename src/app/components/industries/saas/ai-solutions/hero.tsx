"use client";

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="bg-gradient-to-r from-[#5B1DAF] to-[#8E44AD] text-white py-32">
      <div className="container mx-auto px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-6"
        >
          Transform Your Business with AI-Powered SaaS Solutions
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl max-w-3xl mx-auto mb-8"
        >
          Unlock innovation and efficiency with AI-driven SaaS solutions — streamlining processes, predicting trends, and delivering real-time insights tailored to your business needs.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <button className="px-8 py-3 text-lg font-medium bg-white text-[#5B1DAF] rounded-lg hover:bg-gray-200 transition-all">
            Explore Solutions
          </button>
          <button className="px-8 py-3 text-lg font-medium bg-[#8E44AD] rounded-lg hover:bg-[#5B1DAF] transition-all">
            Get in Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
