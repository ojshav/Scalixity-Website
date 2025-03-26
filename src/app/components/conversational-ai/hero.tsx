"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Conversational AI Development Services
          </h1>
          <p className="text-xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
            Revolutionize customer interactions with AI-powered conversational solutions. 
            From intelligent chatbots to virtual assistants, we design and deploy systems that 
            understand, process, and respond to human language in real time. 
            Enhance user experiences and streamline support with Scalixity&apos;s expertise.
          </p>
          <div className="relative z-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-black text-white text-lg font-semibold hover:bg-gray-900 transition"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
      
    </section>
  );
}

export default Hero;
