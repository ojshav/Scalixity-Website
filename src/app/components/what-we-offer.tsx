'use client'

import { Gauge, Award, Brain, Headphones, Sprout, Shield } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const features = [
  {
    title: "Lightning Fast Delivery",
    description: "We deliver projects on time without compromising quality, using agile methodologies.",
    icon: Gauge
  },
  {
    title: "Premium Quality",
    description: "Every project is crafted with attention to detail and tested rigorously for perfection.",
    icon: Award
  },
  {
    title: "Cutting-Edge Technology",
    description: "We leverage the latest technologies and frameworks to build future-proof solutions.",
    icon: Brain
  },
  {
    title: "24/7 Support",
    description: "Our dedicated team is always available to assist you with any questions or issues.",
    icon: Headphones
  },
  {
    title: "Scalable Solutions",
    description: "Build for growth with architectures that scale seamlessly with your business.",
    icon: Sprout
  },
  {
    title: "Top-tier Security",
    description: "We implement industry-best security practices to protect your data and users.",
    icon: Shield
  }
]

export function WhatWeOffer() {
  return (
    <section className="bg-[#4A0E78] py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Why Choose Scalixity?
          </h2>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto font-light">
            We combine technical expertise with creative innovation to deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#FFF8E1] rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-6">
                <feature.icon strokeWidth={1.5} className="w-12 h-12 text-black" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3 font-serif">
                {feature.title}
              </h3>
              <p className="text-gray-800 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-block bg-white text-[#4A0E78] font-bold text-lg px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </section>
  )
}
