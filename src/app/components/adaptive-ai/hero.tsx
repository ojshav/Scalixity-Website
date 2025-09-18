"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20" style={{ backgroundColor: '#F3F1EB' }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
            Adaptive AI Development Company
          </h1>
          <p className="text-xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
            We help businesses leverage Adaptive AI to gain a competitive advantage and enhance overall product performance. Our proficient team of AI engineers possesses expertise in machine learning, deep learning, neural networks, natural language processing (NLP), and other subsets of AI to deliver exceptional, tailor-made solutions with Adaptive AI development services.
          </p>

     
          <div className="relative z-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center mt-8 px-6 py-3 rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20 z-0" />
    </section>
  );
}

export default Hero;
