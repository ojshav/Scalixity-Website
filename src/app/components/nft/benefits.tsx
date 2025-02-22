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
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">
            NFT MARKETPLACE BENEFITS
          </span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            Why Choose NFT Marketplace Development
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
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
