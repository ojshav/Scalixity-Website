"use client";
import { motion } from "framer-motion";


export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F3F1EB] py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-1 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
 <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI Chatbot Development Services
          </h1>
          <p className="text-xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
            Empower your business with intelligent AI-driven chatbots that enhance 
            customer interactions, automate support, and drive engagement.
          </p>                    <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-black text-white font-medium text-lg hover:bg-gray-900 transition-colors"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );

}

export default Hero;
