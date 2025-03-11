"use client";

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="bg-[#A8B2E7] text-black py-32">
      <div className="container mx-auto px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-6 border-b-2 border-black inline-block"
        >
          Revolutionize Your SaaS with AI Copilots
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl max-w-3xl mx-auto mb-8"
        >
          Empower your SaaS platform with AI Copilot solutions — boosting productivity, automating workflows, and delivering smart user experiences.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <button className="px-8 py-3 text-lg font-medium bg-black text-[#F3F1EB] rounded-lg hover:bg-opacity-80 transition-all border-2 border-black">
            Explore AI Copilot
          </button>
          <button className="px-8 py-3 text-lg font-medium bg-transparent text-black border-2 border-black rounded-lg hover:bg-black hover:text-[#F3F1EB] transition-all">
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
