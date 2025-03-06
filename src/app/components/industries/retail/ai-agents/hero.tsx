"use client";

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="bg-[#F5F5DC] text-foreground py-32">
      <div className="container mx-auto px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-6 leading-tight"
        >
          Revolutionizing Retail with AI Agents
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl max-w-3xl mx-auto mb-8 text-muted-foreground"
        >
          Supercharge your retail business with AI-powered agents — delivering personalized customer experiences, predictive sales insights, seamless inventory management, and 24/7 virtual support. Embrace the future of retail where innovation meets intelligence, boosting sales and customer satisfaction.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <button className="px-8 py-3 text-lg font-medium bg-black text-white rounded-lg hover:bg-opacity-80 transition-all">
            Discover AI Solutions
          </button>
          <button className="px-8 py-3 text-lg font-medium bg-black text-white rounded-lg hover:bg-opacity-80 transition-all">
            Get a Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
