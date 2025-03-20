"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const benefits = [
  {
    title: "Empowering Creators & Collectors",
    description: "Our NFT marketplace solutions provide seamless experiences for artists, collectors, and traders to buy, sell, and showcase digital assets."
  },
  {
    title: "Scalable & Customizable Platforms",
    description: "We develop highly scalable and fully customizable NFT marketplaces tailored to your business needs, ensuring flexibility and growth."
  },
  {
    title: "Secure & Transparent Transactions",
    description: "Built on blockchain technology, our NFT marketplaces ensure secure, immutable, and transparent transactions for a trustworthy digital asset exchange."
  },
  {
    title: "Multi-Blockchain Support",
    description: "Support for multiple blockchain networks, including Ethereum, Polygon, and Solana, providing versatility and accessibility for users."
  },
  {
    title: "Smart Contract Automation",
    description: "Automate royalty distributions, ownership transfers, and other transactions with self-executing smart contracts, reducing operational complexities."
  },
  {
    title: "Seamless Payment Integrations",
    description: "Enable crypto and fiat payment options, ensuring a smooth checkout experience for users worldwide."
  }
];

export function Benefits() {
  return (
    <section className="bg-[#A8B2E7] py-24"> {/* Lavender background for the section */}
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider"> {/* Black text */}
            NFT MARKETPLACE BENEFITS
          </span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6"> {/* Black text */}
            Why Choose NFT Marketplace Development
          </h2>
          <p className="text-xl text-black/80 max-w-3xl mx-auto"> {/* Black text */}
            Build a feature-rich, secure, and scalable NFT marketplace to unlock the full potential of digital assets and blockchain commerce.
          </p>
        </div>

        {/* Benefits List */}
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:border-primary/50 transition-colors" /* Soft, warm beige box with black border */
            >
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-1" /> {/* Black icon */}
                <div>
                  <h3 className="text-xl font-bold text-black mb-2"> {/* Black text */}
                    {benefit.title}
                  </h3>
                  <p className="text-black/80"> {/* Black text */}
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
