"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export function ConsultingHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FFF2D5] py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Generative AI Consulting Company
            </h1>
            <p className="text-xl text-gray-800 mb-8">
              Venture into the AI frontier with our specialized Generative AI consulting services. 
              Our expert team helps you navigate the evolving world of artificial intelligence, 
              providing tailored solutions that drive innovation and efficiency. Whether you&apos;re looking 
              to enhance your business processes, optimize models, or create custom AI solutions, 
              we&apos;re here to help you unlock the full potential of Generative AI technology.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#590178] text-white font-medium text-lg transition-colors"
            >
              Contact us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}