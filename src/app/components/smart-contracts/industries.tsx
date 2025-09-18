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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-center items-center">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="bg-white p-6 rounded-full border-2 border-gray-600 shadow-md">
                <Image
                  src={industry.icon}
                  alt={`${industry.name} icon`}
                  width={60}
                  height={60}
                  className="w-16 h-16"
                />
              </div>
              <h3 className="text-lg font-normal text-black text-center mt-3">{industry.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Industries;
