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
          className="text-5xl font-extrabold mb-6 leading-tight"
        >
          AI-Powered Customer Sentiment Analysis for Retail
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl max-w-3xl mx-auto mb-8"
        >
          Uncover customer emotions and transform feedback into actionable insights. Leverage AI-driven sentiment analysis to enhance customer experiences, predict trends, and stay ahead of the competition.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <button className="px-8 py-3 text-lg font-medium bg-black text-white rounded-lg hover:bg-gray-900 transition-all">
            Explore Sentiment Analysis
          </button>
          <button className="px-8 py-3 text-lg font-medium bg-black text-white rounded-lg hover:bg-gray-900 transition-all">
            Request a Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
