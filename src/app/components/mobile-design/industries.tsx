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
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">INDUSTRIES</span>
          <h2 className="text-4xl font-bold text-white mt-4 mb-6">Industries We Serve</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our expert mobile app design services cater to a wide range of industries, ensuring intuitive and user-friendly experiences.
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
              className="flex flex-col items-center text-center"
            >
              <div className="bg-card p-6 rounded-full mb-4 border border-border">
                <Image src={industry.icon} alt={industry.name} width={48} height={48} className="w-12 h-12" />
              </div>
              <h3 className="text-lg font-semibold text-white">{industry.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Industries;
