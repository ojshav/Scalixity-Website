"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const industries = [
  { name: "Healthcare", icon: "/icons/healthcare.svg" },
  { name: "Finance", icon: "/icons/finance.svg" },
  { name: "E-commerce", icon: "/icons/ecommerce.svg" },
  { name: "Manufacturing", icon: "/icons/manufacturing.svg" },
  { name: "Marketing", icon: "/icons/marketing.svg" },
  { name: "Retail", icon: "/icons/retail.svg" },
  { name: "Education", icon: "/icons/education.svg" },
  { name: "Automotive", icon: "/icons/automotive.svg" },
];

export function Industries() {
  return (
    <section className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-primary uppercase tracking-wider">INDUSTRIES</span>
          <h2 className="text-5xl font-bold text-white mt-4 mb-6">Industries We Serve</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Explore the diverse industries we revolutionize through data-driven mobile app designs.
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
              whileHover={{ scale: 1.1, rotate: 3 }}
              className="bg-gradient-to-br from-[#1e293b] to-[#334155] p-8 rounded-2xl shadow-lg border border-primary/50 cursor-pointer transition-transform hover:shadow-primary/50"
            >
              <div className="flex flex-col items-center">
                <Image src={industry.icon} alt={industry.name} width={64} height={64} className="mb-4" />
                <h3 className="text-xl font-semibold text-white">{industry.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Industries;





