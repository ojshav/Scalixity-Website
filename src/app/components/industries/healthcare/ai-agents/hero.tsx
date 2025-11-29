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
          className="text-5xl font-extrabold mb-6"
        >
          Transform Healthcare with AI Agents
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl max-w-3xl mx-auto mb-8"
        >
          Revolutionize patient care and operational efficiency with AI-powered healthcare agents. Automate appointment scheduling, provide 24/7 virtual assistance, enhance diagnostics with intelligent insights, and personalize patient experiences through real-time data analysis. AI agents bridge the gap between technology and human touch, ensuring smarter, faster, and more accurate healthcare delivery.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center"
        >
          <button className="px-8 py-3 text-lg font-medium bg-[#590178] text-white rounded-lg transition-all" onClick={() => window.location.href = '/contact'}>
            Contact Us
          </button>
        </motion.div>
      </div>  
    </section>
  );
}

export default Hero;
