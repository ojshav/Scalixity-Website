"use client";
import { motion } from 'framer-motion';
import Link from 'next/link'; // Importing Link from Next.js

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FFF2D5] py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            ChatGPT Developers
          </h1>
          <p className="text-xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
            Scalixity is an expert in OpenAI models and AI-powered solutions. We can help you build ChatGPT custom chatbots, image bots, and language applications. Our ChatGPT developers are well-versed in Machine Learning (ML), Natural Language Processing (NLP), and Deep Learning.
          </p>

          {/* Contact Button */}
          <div className="relative z-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center mt-8 px-6 py-3 rounded-full bg-[#590178] text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 z-0" />
    </section>
  );
}

export default Hero;
