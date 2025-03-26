"use client";

import React from "react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center text-[#2C2C2C] bg-[#F3F1EB] p-8 space-y-8">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-light leading-tight font-serif"
      >
        Empowering Data-Driven Futures <br /> with <span className="text-black">Scalixity</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg max-w-3xl leading-relaxed"
      >
        At Scalixity, we redefine innovation by crafting AI solutions tailored to elevate businesses.
        Our approach merges data intelligence and automation, unlocking new realms of growth and efficiency.
        From streamlining operations to uncovering hidden opportunities, we empower companies to embrace
        the future with confidence and creativity.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="flex space-x-4 mt-4"
      >
        <a
          href="/contact"
          className="px-6 py-3 text-white bg-black rounded-full hover:opacity-80 transition"
        >
          Start Your AI Journey
        </a>
        <a
          href="/services"
          className="px-6 py-3 text-white bg-black rounded-full hover:opacity-80 transition"
        >
          Explore Our Services
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;

