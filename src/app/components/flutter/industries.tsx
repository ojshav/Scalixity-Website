"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const industries = [
  { name: "Healthcare", icon: "/icons/healthcare.svg" },
  { name: "Finance", icon: "/icons/finance.svg" },
  { name: "E-commerce", icon: "/icons/ecommerce.svg" },
  { name: "Education", icon: "/icons/education.svg" },
  { name: "Retail", icon: "/icons/retail.svg" },
  { name: "Travel & Hospitality", icon: "/icons/travel.svg" },
  { name: "Real Estate", icon: "/icons/realestate.svg" },
  { name: "Logistics & Transportation", icon: "/icons/logistics.svg" }
];

export function Industries() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">INDUSTRIES</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Flutter App Development Across Various Industries
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Our Flutter app solutions cater to a wide range of industries, ensuring seamless, high-performance applications for businesses worldwide.
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
              className="flex flex-col items-center bg-[#F3F1EB] p-6 rounded-lg border border-black shadow-lg hover:scale-105 transition-transform"
            >
              <div className="p-4 rounded-full bg-white border border-black mb-4">
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
