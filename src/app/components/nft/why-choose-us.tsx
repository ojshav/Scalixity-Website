"use client";

import { motion } from 'framer-motion';
import { Diamond, ShieldCheck, Shuffle, Wallet, Globe, Database } from 'lucide-react';

const reasons = [
  {
    icon: Diamond,
    title: "Expert NFT Development Team",
    description: "Our team comprises blockchain and NFT specialists who craft secure, innovative, and future-proof NFT solutions tailored to your business needs."
  },
  {
    icon: ShieldCheck,
    title: "Robust Security & Smart Contracts",
    description: "We build highly secure smart contracts to manage NFT minting, transfers, and royalties, ensuring your digital assets remain protected."
  },
  {
    icon: Shuffle,
    title: "Cross-Chain Compatibility",
    description: "We implement cross-chain interoperability, allowing NFTs to seamlessly move across multiple blockchain networks, enhancing reach and utility."
  },
  {
    icon: Wallet,
    title: "Seamless Wallet Integration",
    description: "Our solutions integrate leading crypto wallets like MetaMask and Trust Wallet, enabling smooth transactions and effortless asset management."
  },
  {
    icon: Globe,
    title: "Scalable NFT Marketplaces",
    description: "We develop NFT marketplaces that are fast, user-friendly, and capable of handling high traffic, ensuring an optimal experience for creators and collectors alike."
  },
  {
    icon: Database,
    title: "Decentralized Storage Solutions",
    description: "We utilize decentralized storage options like IPFS and Arweave, guaranteeing secure and permanent storage for your NFT metadata."
  }
];

export function WhyChooseUs() {
  return (
    <section className="bg-[#A8B2E7] py-24"> {/* Lavender background for the section */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6"> {/* Black text */}
            Why Choose Us for NFT Development
          </h2>
          <p className="text-xl text-black/80 max-w-3xl mx-auto"> {/* Black text */}
            Partner with us to build innovative, secure, and scalable NFT solutions — from marketplaces to cross-chain integrations — tailored for your business success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:border-primary/50 transition-colors" /* Soft, warm beige box with black border */
            >
              <reason.icon className="w-12 h-12 text-black mb-6" /> {/* Black icon */}
              <h3 className="text-xl font-bold text-black mb-4"> {/* Black text */}
                {reason.title}
              </h3>
              <p className="text-black/80"> {/* Black text */}
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
