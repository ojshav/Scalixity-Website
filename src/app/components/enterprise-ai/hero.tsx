"use client";

import { motion } from "framer-motion";

export function EnterpriseAIDevelopmentHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F3F1EB] py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-1 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            
<h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
            Enterprise AI Development
          </h1>
          <p className="text-xl text-gray-800 mb-12 leading-relaxed max-w-3xl mx-auto">
            We build cutting-edge AI solutions that drive efficiency, automation, and innovation across enterprises.  
            Our AI-powered systems enhance decision-making, optimize workflows, and create competitive advantages tailored to your industry.  
            Leverage our expertise in machine learning, NLP, and deep learning to transform your business today.
          </p>
            <a
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

export default EnterpriseAIDevelopmentHero;


