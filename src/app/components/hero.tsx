"use client";

import React from "react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center text-[#2C2C2C] bg-[#F3F1EB] p-4 sm:p-8 space-y-4 sm:space-y-8">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight font-serif text-balance"
      >
        Empowering Data-Driven Futures <br /> with <span className="text-black">Scalixity</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed px-4 sm:px-0"
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
        className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-4 w-full max-w-md px-4 sm:px-0"
      >
        <a
          href="/contact"
          className="px-4 py-2 sm:px-6 sm:py-3 text-white bg-black rounded-full hover:opacity-80 transition text-sm sm:text-base w-full text-center"
        >
          Start Your AI Journey
        </a>
        <a
          href="/services"
          className="px-4 py-2 sm:px-6 sm:py-3 text-white bg-black rounded-full hover:opacity-80 transition text-sm sm:text-base w-full text-center"
        >
          Explore Our Services
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;