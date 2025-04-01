"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    company: "CryptoCommerce",
    title: "Revolutionizing E-commerce with Smart Contracts",
    description: "We developed a blockchain-powered e-commerce platform utilizing smart contracts to ensure transparent, secure, and automated transactions between buyers and sellers.",
    image: "/images/Redefining Restaurant Ordering with a Voice Ordering Solution.svg",
    features: [
      "Automated payment processing",
      "Escrow services using smart contracts",
      "Immutable transaction records",
      "Seamless wallet integrations"
    ]
  },
  {
    company: "InsureChain",
    title: "Smart Contract-Based Insurance Platform",
    description: "Built a decentralized insurance platform with smart contracts to automate policy issuance, claim processing, and payouts, reducing fraud and increasing efficiency.",
    image: "/images/ai-powered-maintenance.svg",
    features: [
      "Automated claim verification",
      "Real-time policy updates",
      "Fraud detection through smart contracts",
      "Secure blockchain data storage"
    ]
  },
  {
    company: "RealEstateChain",
    title: "Blockchain-Powered Real Estate Contracts",
    description: "Implemented smart contracts for property transactions, ensuring secure and transparent ownership transfers and automated rental agreements.",
    image: "/images/Automating Banking Services with Conversational AI.svg",
    features: [
      "Tokenized property assets",
      "Smart lease agreements",
      "Instant ownership verification",
      "Tamper-proof transaction history"
    ]
  }
];

export function FeaturedWork() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-16">
          <div>
            <span className="text-sm text-black uppercase tracking-wider">OUR FEATURED WORK</span>
            <h2 className="text-4xl font-bold text-black mt-4">
              Our Smart Contract Development Success Stories
            </h2>
          </div>
          <Link
            href="/work"
            className="hidden md:flex items-center gap-2 text-black hover:text-black transition-colors"
          >
            Explore Our Portfolio
            <ArrowRight className="w-4 h-4 text-black" />
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
              className="grid md:grid-cols-2 gap-8 items-center bg-[#F3F1EB] p-8 rounded-xl border border-black"
            >
              <div className={index % 2 === 0 ? "md:order-1" : "md:order-2"}>
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
                  className="inline-flex items-center gap-2 text-black hover:text-black transition-colors mt-6"
                >
                  Read more
                  <ArrowRight className="w-4 h-4 text-black" />
                </Link>
              </div>

              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12 md:hidden">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-black hover:text-black transition-colors"
          >
            Explore Our Portfolio
            <ArrowRight className="w-4 h-4 text-black" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedWork;
