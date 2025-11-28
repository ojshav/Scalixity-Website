'use client'

import { Clock, Award, Flower2, Headphones, Sprout, Shield, LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface Benefit {
  description: string
  icon: LucideIcon
}

interface BenefitsProps {
  title?: string
  subtitle?: string
  benefits?: Benefit[]
  ctaText?: string
  ctaLink?: string
}

const defaultBenefits: Benefit[] = [
  {
    description: "We deliver projects on time without compromising quality, using agile methodologies.",
    icon: Clock
  },
  {
    description: "Every project is crafted with attention to detail and tested rigorously for perfection.",
    icon: Award
  },
  {
    description: "We leverage the latest technologies and frameworks to build future-proof solutions.",
    icon: Flower2
  },
  {
    description: "Our dedicated team is always available to assist you with any questions or issues.",
    icon: Headphones
  },
  {
    description: "Build for growth with architectures that scale seamlessly with your business.",
    icon: Sprout
  },
  {
    description: "We implement industry-best security practices to protect your data and users.",
    icon: Shield
  }
]

export function Benefits({
  title = "Benefits",
  subtitle = "We combine technical expertise with creative innovation to deliver exceptional results",
  benefits = defaultBenefits,
  ctaText = "Start Your Project",
  ctaLink = "/contact"
}: BenefitsProps = {}) {
  return (
    <section className="bg-[#FFF2D5] py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#590178] mb-4">
            {title}
          </h2>
          <p className="text-[#590178] text-lg md:text-xl max-w-2xl mx-auto font-light">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#FFF2D5] rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300]"
              style={{ boxShadow: '0px 4px 19px -4px #00000033' }}
            >
              <div className="mb-6">
                <benefit.icon strokeWidth={1.5} className="w-12 h-12 text-black" />
              </div>
              <p className="text-gray-700 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href={ctaLink}
            className="inline-block bg-[#4A0E78] text-white font-bold text-lg px-8 py-3 rounded-lg hover:bg-[#3A0B5F] transition-colors duration-300 shadow-lg"
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  )
}

