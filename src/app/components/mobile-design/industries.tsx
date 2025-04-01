"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const industries = [
  { name: "Healthcare", icon: "/images/icons/healthcare.svg" },
  { name: "Finance", icon: "/images/icons/finance.svg" },
  { name: "E-commerce", icon: "/images/icons/ecommerce.svg" },
  { name: "Manufacturing", icon: "/images/icons/manufacturing.svg" },
  { name: "Marketing", icon: "/images/icons/marketing.svg" },
  { name: "Retail", icon: "/images/icons/retail.svg" },
  { name: "Education", icon: "/images/icons/education.svg" },
  { name: "Automotive", icon: "/images/icons/automotive.svg" },
];

export function Industries() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">INDUSTRIES</span>
          <h2 className="text-5xl font-bold text-black mt-4 mb-6">Industries We Serve</h2>
          <p className="text-lg text-black max-w-3xl mx-auto">
            Explore the diverse industries we revolutionize through data-driven mobile app designs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center space-y-4"
            >
              <div className="w-24 h-24 bg-white border border-black rounded-full flex items-center justify-center shadow-lg">
                <Image src={industry.icon} alt={industry.name} width={48} height={48} />
              </div>
              <h3 className="text-xl font-semibold text-black">{industry.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Industries;
