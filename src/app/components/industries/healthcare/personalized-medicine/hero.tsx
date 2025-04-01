"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="bg-[#F3F1EB] text-black py-32">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-6 tracking-tight"
        >
          <span className="font-black">Revolutionize Healthcare with AI-Driven Personalized Medicine</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl max-w-3xl mx-auto mb-8"
        >
          Utilize advanced AI-powered platforms to personalize treatments based on individual patient data. Enhance precision care, optimize outcomes, and transform healthcare with innovative solutions tailored for each patient.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link href="/contact">
            <button className="px-8 py-3 text-lg font-bold bg-black text-white rounded-lg hover:bg-gray-800 transition-all">
              Contact Us
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
