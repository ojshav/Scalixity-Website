'use client'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export function CaseStudies() {
  return (
    <section className="bg-[#080B16] py-32">
      <div className="container mx-auto px-4">
        <span className="block text-sm text-gray-400 uppercase tracking-wider mb-4">
          CASE STUDY
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">
          AI Solutions we have built for our clients
        </h2>
        <div className="relative bg-[#0F1629] rounded-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              className="p-12"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold text-white mb-4">
                Transformed Voice Ordering System at a Major Restaurant
              </h3>
              <p className="text-gray-400 mb-8">
                DeVoice transforms voice ordering systems at major restaurants by leveraging Generative AI and
                advanced voice technology.
              </p>
              <div className="mb-8">
                <div className="text-6xl font-bold text-white mb-2">57%</div>
                <p className="text-gray-400">Reduction in Order Handling</p>
              </div>
              <blockquote className="bg-[#1A1B26] p-6 rounded-lg mb-8">
  <p className="text-gray-300 italic mb-4">
    &ldquo;We were particularly impressed by the quality and precision of DeVoice. Its implementation not only streamlined our operations but also significantly elevated our customer service levels, making it a game-changer for our business.&rdquo;
  </p>
  <footer className="text-white font-medium">
    - Doughlus, CTO, DeVoice
  </footer>
</blockquote>

              <Link 
                href="/case-studies/devoice"
                className="inline-flex items-center text-purple-500 hover:text-purple-400 font-medium"
              >
                View case study <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
            <motion.div 
              className="relative h-full min-h-[300px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/images/ai-voice-ordering.svg"
                alt="DeVoice App Interface"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <Link
            href="/work"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#1A1B26] text-white hover:bg-[#2A2B36] transition-colors"
          >
            Know more about our work
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4 pointer-events-none">
          <button className="w-12 h-12 rounded-full bg-black/50 flex items-center justify-center text-white pointer-events-auto hover:bg-black/70 transition-colors">
            <ArrowLeft className="h-6 w-6" />
          </button>
          <button className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white pointer-events-auto hover:bg-purple-700 transition-colors">
            <ArrowRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

