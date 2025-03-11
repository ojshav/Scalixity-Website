"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const industries = [
  { name: "Fashion & Apparel", icon: "/icons/fashion.svg" },
  { name: "Grocery & Supermarkets", icon: "/icons/grocery.svg" },
  { name: "Electronics & Appliances", icon: "/icons/electronics.svg" },
  { name: "Beauty & Cosmetics", icon: "/icons/beauty.svg" },
  { name: "Furniture & Home Decor", icon: "/icons/furniture.svg" },
  { name: "Sports & Fitness", icon: "/icons/sports.svg" },
  { name: "Jewelry & Luxury Goods", icon: "/icons/jewelry.svg" },
  { name: "Pharmacy & Health Stores", icon: "/icons/pharmacy.svg" }
];

export function Industries() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">INDUSTRIES</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            AI Agents Transforming Industries
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Empower your business with AI solutions — enhancing experiences, streamlining operations, and boosting growth across diverse sectors.
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
              <div className="bg-white p-6 rounded-full mb-4 shadow-md">
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
