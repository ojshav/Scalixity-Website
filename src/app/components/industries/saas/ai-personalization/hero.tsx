"use client";

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="bg-gradient-to-r from-[#5B1DAF] to-[#8E44AD] text-white py-40">
      <div className="container mx-auto px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-extrabold mb-8 leading-tight"
        >
          Transform Your SaaS Platform with AI-Powered Personalization
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-2xl max-w-4xl mx-auto mb-10"
        >
          Unlock the full potential of your SaaS platform by leveraging AI personalization — delivering hyper-relevant recommendations, dynamic content adaptation, and seamless user experiences that evolve in real-time. Drive customer engagement, increase retention, and maximize satisfaction with AI-driven solutions.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <button className="px-10 py-4 text-lg font-medium bg-white text-[#5B1DAF] rounded-xl hover:bg-gray-200 transition-all">
            Explore AI Personalization
          </button>
          <button className="px-10 py-4 text-lg font-medium bg-[#8E44AD] rounded-xl hover:bg-[#5B1DAF] transition-all">
            Get Started Today
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
