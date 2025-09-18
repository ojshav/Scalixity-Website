"use client";

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const projects = [
  {
    company: "StellarDeFi",
    title: "Empowering DeFi with Stellar Blockchain",
    description: "We developed a decentralized finance platform leveraging Stellar's fast and low-cost transactions, enabling seamless payments and asset transfers.",
    image: "/images/Redefining Restaurant Ordering with a Voice Ordering Solution.svg",
    features: [
      "Lightning-fast and low-cost transactions",
      "Multi-asset support with Stellar's tokenization",
      "Decentralized exchange integration",
      "Secure and scalable smart contract solutions"
    ]
  },
  {
    company: "StellarRemit",
    title: "Revolutionizing Cross-Border Payments",
    description: "Our Stellar-based remittance solution provides fast, low-cost, and borderless financial transactions for global money transfers.",
    image: "/images/Automating Banking Services with Conversational AI.svg",
    features: [
      "Instant settlement and low fees",
      "Multi-currency payment support",
      "Regulatory compliance and security",
      "Seamless integration with financial institutions"
    ]
  },
  {
    company: "StellarID",
    title: "Decentralized Identity Solutions on Stellar",
    description: "We built a secure identity verification system leveraging Stellar’s blockchain for privacy-focused digital identity management.",
    image: "/images/ai-powered-maintenance.svg",
    features: [
      "Self-sovereign identity management",
      "Tamper-proof authentication records",
      "Cross-platform interoperability",
      "Compliance with global security standards"
    ]
  }
]

export function FeaturedWork() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-16">
          <div>
            <span className="text-sm text-black uppercase tracking-wider">OUR FEATURED WORK</span>
            <h2 className="text-4xl font-bold text-black mt-4">
              Our Stellar App Development Success Stories
            </h2>
          </div>
          <Link
            href="/work"
            className="hidden md:flex items-center gap-2 text-black hover:text-gray-700 transition-colors"
          >
            Explore Our Portfolio
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className="col-span-2 bg-white p-8 rounded-xl border border-black">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="text-section">
                    <span className="text-black text-sm">— {project.company}</span>
                    <h3 className="text-2xl font-bold text-black mt-2 mb-4">{project.title}</h3>
                    <p className="text-black mb-6">{project.description}</p>
                    <ul className="space-y-3">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-black">
                          <div className="w-1.5 h-1.5 rounded-full bg-black" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/work/${project.company.toLowerCase()}`}
                      className="inline-flex items-center gap-2 text-black hover:text-gray-700 transition-colors mt-6"
                    >
                      Read more
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <div className="image-section relative h-[400px] rounded-xl overflow-hidden border border-black">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12 md:hidden">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-black hover:text-gray-700 transition-colors"
          >
            Explore Our Portfolio
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedWork;
