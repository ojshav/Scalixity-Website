'use client'

import { Gauge, Award, Brain, Headphones, Sprout, Shield, LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface Feature {
  title: string
  description: string
  icon: LucideIcon
}

interface WhatWeOfferProps {
  title?: string
  subtitle?: string
  features?: Feature[]
  ctaText?: string
  ctaLink?: string
}

const defaultFeatures: Feature[] = [
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

export function WhatWeOffer({
  title = "Why Choose Scalixity?",
  subtitle = "We combine technical expertise with creative innovation to deliver exceptional results",
  features = defaultFeatures,
  ctaText = "Start Your Project",
  ctaLink = "/contact"
}: WhatWeOfferProps = {}) {
  return (
    <section className="bg-[#590178] py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-3 sm:mb-4">
            {title}
          </h2>
          <p className="text-white/90 text-base sm:text-lg md:text-lg lg:text-xl max-w-2xl mx-auto font-light px-2 sm:px-4 md:px-0">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-12 md:mb-14 lg:mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#FFF8E1] rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4 sm:mb-5 md:mb-6">
                <feature.icon strokeWidth={1.5} className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 text-black" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-3 font-serif">
                {feature.title}
              </h3>
              <p className="text-gray-800 leading-relaxed text-sm sm:text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href={ctaLink}
            className="inline-block bg-white text-[#4A0E78] font-bold text-base sm:text-lg px-6 py-2.5 sm:px-8 sm:py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  )
}
