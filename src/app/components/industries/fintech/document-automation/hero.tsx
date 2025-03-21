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
          <h1 className="text-3xl md:text-5xl font-bold text-black mb-6">
            Streamlined Financial Document Automation
          </h1>
          <p className="text-xl text-black leading-relaxed max-w-3xl mx-auto">
            Empower your fintech operations with AI-driven financial document automation. Reduce manual errors, accelerate processing, and enhance compliance seamlessly.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
