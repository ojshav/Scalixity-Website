"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F3F1EB] py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
            Transform Your Business with AI-Powered SaaS
          </h1>
          <p className="text-xl text-black mb-12 leading-relaxed max-w-3xl mx-auto">
            Unlock the full potential of cloud-based AI solutions. Streamline operations, boost customer engagement, and drive growth with scalable SaaS tailored to your business needs.
          </p>
          <motion.a
            href="/contact"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="inline-block bg-black text-white text-lg font-semibold px-6 py-3 rounded-lg hover:bg-gray-900 transition"
          >
            Contact Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
