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
          Seamlessly Integrate AI into Your SaaS
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl max-w-3xl mx-auto mb-8"
        >
          Supercharge your SaaS platforms by integrating AI-powered tools and models — automating workflows, enhancing user experiences, and driving innovation.
        </motion.p>
        <motion.a
          href="/contact"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="inline-block bg-[#590178] text-white text-lg font-semibold px-6 py-3 rounded-lg  transition"
        >
          Contact Us
        </motion.a>
      </div>
    </section>
  );
}

export default Hero;
