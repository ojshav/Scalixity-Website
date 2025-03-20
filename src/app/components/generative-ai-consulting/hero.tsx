"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export function ConsultingHero() {
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
              Generative AI Consulting Company
            </h1>
            <p className="text-xl text-gray-800 mb-8">
              Venture into the AI frontier with our specialized Generative AI consulting services.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-black text-white font-medium text-lg hover:bg-gray-800 transition-colors"
            >
              Contact us
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-[#A8B2E7] p-6 rounded-lg border border-black text-black">
              <h3 className="text-xl font-bold mb-2">AI Model Optimization</h3>
              <p>We fine-tune models for efficiency, reducing computational costs while maintaining high performance.</p>
            </div>
            <div className="bg-[#A8B2E7] p-6 rounded-lg border border-black text-black">
              <h3 className="text-xl font-bold mb-2">Data Security & Compliance</h3>
              <p>Ensuring safe, encrypted AI implementations while adhering to regulatory standards.</p>
            </div>
            <div className="bg-[#A8B2E7] p-6 rounded-lg border border-black text-black">
              <h3 className="text-xl font-bold mb-2">Custom AI Solutions</h3>
              <p>Tailoring Generative AI applications to fit business-specific needs and objectives.</p>
            </div>
            <div className="bg-[#A8B2E7] p-6 rounded-lg border border-black text-black">
              <h3 className="text-xl font-bold mb-2">Scalable AI Infrastructure</h3>
              <p>Deploy AI models that scale with your business, maintaining reliability and speed.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
