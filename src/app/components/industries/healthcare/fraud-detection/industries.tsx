"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const industries = [
  { name: "Finance & Banking", icon: "/images/icons/finance.svg" },
  { name: "E-commerce & Retail", icon: "/images/icons/ecommerce.svg" },
  { name: "Healthcare & Insurance", icon: "/images/icons/healthcare.svg" },
  { name: "Telecommunications", icon: "/images/icons/media.svg" },
  { name: "Real Estate & Property Management", icon: "/images/icons/construction.svg" },
  { name: "Gaming & Online Platforms", icon: "/images/icons/gaming.webp" },
  { name: "Supply Chain & Logistics", icon: "/images/icons/manufacturing.svg" },
  { name: "Travel & Hospitality", icon: "/images/icons/travel.svg" }
];

export function Industries() {
  return (
    <section className="bg-[#5b0bb5] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">INDUSTRIES</span>
          <h2 className="text-4xl font-bold text-white mt-4 mb-6">
            AI-Powered Fraud Detection Across Industries
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Safeguard your business with AI-driven fraud detection. Proactively prevent cyber threats, secure financial transactions, and protect customer data across industries.
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
              className="flex flex-col items-center"
            >
              <div className="bg-white p-6 rounded-full mb-4">
                <Image
                  src={industry.icon}
                  alt={industry.name}
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
              </div>
              <h3 className="text-lg font-semibold text-white text-center">{industry.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Industries;
