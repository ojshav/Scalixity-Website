"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const industries = [
  { name: "Decentralized Finance (DeFi)", icon: "/images/icons/finance.svg" },
  { name: "NFT Marketplaces", icon: "/images/icons/logistics.svg" },
  { name: "Blockchain Gaming", icon: "/images/icons/gaming.webp" },
  { name: "Supply Chain & Logistics", icon: "/images/icons/marketing.svg" },
  { name: "Healthcare & Pharma", icon: "/images/icons/healthcare.svg" },
  { name: "Real Estate & Property Tech", icon: "/images/icons/construction.svg" },
  { name: "Identity & Security", icon: "/images/icons/security.svg" },
  { name: "Digital Content & Media", icon: "/images/icons/media.svg" }
];

export function Industries() {
  return (
    <section className="bg-[#A8B2E7] py-24"> {/* Updated background color */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">INDUSTRIES</span> {/* Updated text color */}
          <h2 className="text-4xl font-bold text-black mt-4 mb-6"> {/* Updated text color */}
            Web3 Solutions for Diverse Industries
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto"> {/* Updated text color */}
            Empowering businesses to embrace blockchain innovation and unlock the full potential of decentralized technologies.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center p-6"
            >
              <div className="bg-white p-6 rounded-full mb-4 border-2 border-black"> {/* Black border around circular card */}
                <Image
                  src={industry.icon}
                  alt={industry.name}
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
              </div>
              <h3 className="text-lg font-semibold text-black text-center">{industry.name}</h3> {/* Updated font color */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Industries;
