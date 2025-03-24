"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F3F1EB] py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              GCP App Development & Consulting
            </h1>
            <p className="text-xl text-black mb-8">
              Unlock the potential of Google Cloud Platform for scalable app development. From serverless computing to enterprise solutions, we help you build and deploy with GCP seamlessly and efficiently.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-black text-white font-medium text-lg hover:bg-gray-800 transition-colors"
            >
              Contact us
            </Link>
          </motion.div>
         
        </div>
      </div>
    </section>
  );
}

export default Hero;
