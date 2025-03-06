"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-20"> {/* Black background */}
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"> {/* White text */}
            ChatGPT Integration Service
          </h1>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto"> {/* Light gray text */}
            Our ChatGPT developers can help you with ChatGPT model integration into your existing software or application. We are experts in NLP and very well understand the capabilities of ChatGPT. We provide ChatGPT integration services to help you with customization of your training data, adjustments, and fine-tuning the ChatGPT model.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-purple-600 text-white font-medium text-lg hover:bg-purple-700 transition-colors w-full sm:w-auto"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />
    </section>
  );
}

export default Hero;
