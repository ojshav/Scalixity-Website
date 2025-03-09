"use client";

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="bg-gradient-to-r from-purple-900 to-indigo-800 text-white py-32">
      <div className="container mx-auto px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-6"
        >
          Smarter Clinical Decisions with AI-Powered Support
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl max-w-3xl mx-auto mb-8"
        >
          Empower healthcare professionals with AI-driven Clinical Decision Support (CDS) systems. Leverage real-time data analysis, predictive insights, and evidence-based recommendations to enhance diagnostic accuracy, minimize errors, and streamline patient care. Transform complex medical data into actionable intelligence — faster, smarter, and safer.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <button className="px-8 py-3 text-lg font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 transition-all">
            Explore CDS Solutions
          </button>
          <button className="px-8 py-3 text-lg font-medium bg-gray-800 rounded-lg hover:bg-gray-700 transition-all">
            Schedule a Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
