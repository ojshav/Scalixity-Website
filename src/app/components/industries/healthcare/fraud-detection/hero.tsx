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
          Fortify Your Business with AI-Powered Fraud Detection
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl max-w-3xl mx-auto mb-8"
        >
          Protect your organization against evolving threats with AI-driven fraud detection. 
          Detect anomalies in real-time, identify suspicious patterns, prevent financial losses, 
          and safeguard sensitive data. Our AI agents deliver proactive security solutions, ensuring 
          your business stays one step ahead of fraudsters.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
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
