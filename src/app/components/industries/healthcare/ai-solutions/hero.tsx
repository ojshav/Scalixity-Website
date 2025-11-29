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
          Transforming Healthcare with AI Solutions
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl max-w-3xl mx-auto mb-8"
        >
          Harness AI to revolutionize patient care, streamline diagnostics, and optimize hospital operations. Predict diseases early with advanced algorithms, personalize treatment plans using data-driven insights, and automate administrative tasks to reduce workload. AI-driven healthcare solutions empower medical professionals to deliver precise, efficient, and proactive care — enhancing patient outcomes and operational excellence.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center"
        >
          <a href="/contact" className="px-8 py-3 text-lg font-medium bg-[#590178] text-white rounded-lg transition-all">
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
