"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    company: "NFTGenius",
    title: "Next-Gen NFT Marketplace Development",
    description: "A high-performance NFT marketplace enabling artists and collectors to mint, trade, and showcase digital assets with advanced smart contract integration.",
    image: "/images/nft-development.svg",
    features: [
      "Smart contract-based NFT minting",
      "Seamless multi-chain support",
      "Real-time royalty distribution",
      "User-friendly wallet integration"
    ]
  },
  {
    company: "Artify",
    title: "Empowering Creators with Decentralized Art Galleries",
    description: "We developed an intuitive platform for artists to create verifiable digital art collections, ensuring secure ownership and global reach.",
    image: "/images/nft-art.svg",
    features: [
      "NFT-backed digital art exhibitions",
      "Gas fee optimization strategies",
      "Secure and transparent transactions",
      "Interactive user dashboards"
    ]
  },
  {
    company: "MetaCollect",
    title: "Revolutionizing NFT Collectibles",
    description: "A dynamic NFT collectibles platform with gamification elements, allowing users to trade, stake, and earn rewards through on-chain activities.",
    image: "/images/nft-collectibles.svg",
    features: [
      "Gamified NFT staking system",
      "Cross-chain marketplace support",
      "Real-time analytics and insights",
      "Customizable smart contracts"
    ]
  }
];

export function FeaturedWork() {
  return (
    <section className="bg-[#A8B2E7] py-24"> {/* Lavender background for the section */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-16">
          <div>
            <span className="text-sm text-black uppercase tracking-wider"> {/* Black text */}
              OUR FEATURED WORK
            </span>
            <h2 className="text-4xl font-bold text-black mt-4"> {/* Black text */}
              Our NFT Marketplace Development Success Stories
            </h2>
          </div>
          <Link
            href="/work"
            className="hidden md:flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
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
              <div className={index % 2 === 0 ? "md:order-1" : "md:order-2"}>
                <span className="text-black text-sm">— {project.company}</span> {/* Black text */}
                <h3 className="text-2xl font-bold text-black mt-2 mb-4"> {/* Black text, no underline */}
                  {project.title}
                </h3>
                <p className="text-black/80 mb-6">{project.description}</p>
                <ul className="space-y-3">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-black/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-black" /> {/* Black dot icons */}
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/work/${project.company.toLowerCase()}`}
                  className="inline-flex items-center gap-2 text-black hover:text-primary/80 transition-colors mt-6"
                >
                  Read more
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className={index % 2 === 0 ? "md:order-2" : "md:order-1"}>
                <div className="relative h-[400px] rounded-xl overflow-hidden border-2 border-black"> {/* Border added to image */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12 md:hidden">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-black hover:text-primary/80 transition-colors"
          >
            Explore Our Portfolio
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedWork;
