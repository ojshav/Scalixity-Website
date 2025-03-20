"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const industries = [
  { name: "E-Commerce", icon: "/images/icons/ecommerce.svg" },
  { name: "Healthcare", icon: "/images/icons/healthcare.svg" },
  { name: "Finance & Banking", icon: "/images/icons/finance.svg" },
  { name: "Education & E-Learning", icon: "/images/icons/education.svg" },
  { name: "Media & Entertainment", icon: "/images/icons/media.svg" },
  { name: "Travel & Hospitality", icon: "/images/icons/travel.svg" },
  { name: "Retail", icon: "/images/icons/retail.svg" },
];

export function Industries() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">INDUSTRIES</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Hybrid App Development Across Industries
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Empowering businesses with cross-platform mobile apps — combining native-like performance with broad reach and seamless functionality.
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
              <div className="bg-[#F3F1EB] p-6 rounded-full mb-4">
                <Image
                  src={industry.icon}
                  alt={industry.name}
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
              </div>
              <h3 className="text-lg font-semibold text-black text-center">{industry.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Industries;
