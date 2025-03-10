"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';

const industries = [
  { name: "E-Commerce", icon: "/icons/ecommerce.svg" },
  { name: "Healthcare", icon: "/icons/healthcare.svg" },
  { name: "Finance & Banking", icon: "/icons/finance.svg" },
  { name: "Education & E-Learning", icon: "/icons/education.svg" },
  { name: "Travel & Hospitality", icon: "/icons/travel.svg" },
  { name: "Media & Entertainment", icon: "/icons/media.svg" },
  { name: "On-Demand Services", icon: "/icons/ondemand.svg" },
  { name: "Fitness & Wellness", icon: "/icons/fitness.svg" }
];

export function Industries() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">INDUSTRIES</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Android App Development Across Industries
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Power your business with robust, user-centric Android apps built to elevate your presence across industries.
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
              className="flex flex-col items-center bg-[#F3F1EB] p-6 rounded-xl border border-black hover:border-black/70 transition-colors"
            >
              <div className="bg-[#A8B2E7] p-6 rounded-full mb-4">
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
