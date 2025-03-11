"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const industries = [
  { name: "Healthcare", icon: "/icons/healthcare.svg" },
  { name: "Fintech", icon: "/icons/finance.svg" },
  { name: "SaaS", icon: "/icons/technology.svg" },
  { name: "Travel", icon: "/icons/travel.svg" },
  { name: "Fitness", icon: "/icons/fitness.svg" },
  { name: "Insurance", icon: "/icons/insurance.svg" },
  { name: "Marketing", icon: "/icons/marketing.svg" },
  { name: "Manufacturing", icon: "/icons/manufacturing.svg" },
];

export function Industries() {
  return (
    <section className="bg-[#F3F1EB] py-24"> {/* Beige background */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-gray-600 uppercase tracking-wider">
            INDUSTRIES
          </span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Developing effective Generative AI solutions for every industry
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Our expertise spans across various sectors, enabling us to deliver
            tailored Generative AI solutions that address industry-specific
            challenges and opportunities.
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
              <div className="bg-[#A8B2E7] p-6 rounded-full mb-4"> {/* Lavender Card Background */}
                <Image
                  src={industry.icon}
                  alt={industry.name}
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
              </div>
              <h3 className="text-lg font-semibold text-black text-center">
                {industry.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
