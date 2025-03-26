"use client";

import { motion } from "framer-motion";


export function AIConsultingHero() {
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
            AI Consulting Services
          </h1>
          <p className="text-xl text-black mb-12 leading-relaxed max-w-3xl mx-auto">
            Unlock the power of AI with our expert consulting services. We help businesses integrate AI-driven solutions for automation, optimization, and strategic decision-making. Partner with us to transform your operations with cutting-edge AI technology.
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
export default AIConsultingHero;


         