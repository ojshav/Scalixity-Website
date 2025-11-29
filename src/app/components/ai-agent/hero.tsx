"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20" style={{ backgroundColor: '#FFF2D5' }}> {/* Soft beige background */}
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6"> {/* Black text */}
            AI Agent Development Company
          </h1>
          <p className="text-xl text-gray-800 mb-12 leading-relaxed max-w-3xl mx-auto"> {/* Darker gray text */}
            We focus on building agents that are tailored to specific business needs, whether it’s for customer support, data analysis, code generation, or process automation. By leveraging industry-leading tools like AutoGen Studio, Vertex AI Agent Builder, and CrewAI, we craft highly customizable AI agents powered by advanced LLMs and a vast skills library. Contact us to learn how we can maximize business impact for you with our AI agent development services.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#590178] text-white font-medium text-lg transition-colors w-full sm:w-auto"
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


