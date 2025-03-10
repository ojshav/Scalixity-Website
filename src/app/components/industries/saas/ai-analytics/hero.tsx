"use client";

import { motion } from 'framer-motion';


export function Hero() {
  return (
    <section className="bg-[#F3F1EB] text-black py-32 border-b-4 border-black">
      <div className="container mx-auto px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-6 border-4 border-black inline-block p-4"
        >
          Empower SaaS with AI-Powered Agents
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl max-w-3xl mx-auto mb-8 border-4 border-black p-4"
        >
          Unlock the potential of AI-driven SaaS solutions to automate workflows, enhance customer interactions, and optimize operations with intelligent agents.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <button className="flex items-center justify-center gap-2 px-8 py-3 text-lg font-medium border-4 border-black rounded-lg hover:bg-black hover:text-[#F3F1EB] transition-all">
            Explore AI Solutions 
          </button>
          <button className="flex items-center justify-center gap-2 px-8 py-3 text-lg font-medium border-4 border-black rounded-lg hover:bg-black hover:text-[#F3F1EB] transition-all">
            Contact Us 
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
