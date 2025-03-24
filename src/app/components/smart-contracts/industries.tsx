"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const industries = [
  { name: "Finance", icon: "/images/icons/finance.svg" },
  { name: "Healthcare", icon: "/images/icons/healthcare.svg" },
  { name: "Real Estate", icon: "/images/icons/construction.svg" },
  { name: "Supply Chain", icon: "/images/icons/manufacturing.svg" },
  { name: "Insurance", icon: "/images/icons/insurance.svg" },
  { name: "Gaming", icon: "/images/icons/gaming.webp" },
  { name: "E-commerce", icon: "/images/icons/ecommerce.svg" },
  { name: "Governance", icon: "/images/icons/legal.svg" }
];

export function Industries() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">INDUSTRIES</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Empowering Industries with Smart Contract Solutions
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="p-6 rounded-full border border-black">
                <Image src={industry.icon} alt={industry.name} width={48} height={48} className="w-12 h-12 grayscale" />
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
