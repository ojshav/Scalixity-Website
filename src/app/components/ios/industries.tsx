"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';

const industries = [
  { name: "E-Commerce", icon: "/icons/ecommerce.svg" },
  { name: "Healthcare", icon: "/icons/healthcare.svg" },
  { name: "Finance & Banking", icon: "/icons/finance.svg" },
  { name: "Education & E-Learning", icon: "/icons/education.svg" },
  { name: "Fitness & Wellness", icon: "/icons/fitness.svg" },
  { name: "Travel & Hospitality", icon: "/icons/travel.svg" },
  { name: "Media & Entertainment", icon: "/icons/media.svg" },
  { name: "On-Demand Services", icon: "/icons/ondemand.svg" }
];

export function Industries() {
  return (
    <section className="bg-[#5b0bb5] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">INDUSTRIES</span>
          <h2 className="text-4xl font-bold text-white mt-4 mb-6">
            iOS App Development Across Key Industries
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Crafting high-performance iOS apps tailored to transform businesses across diverse industries.
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
