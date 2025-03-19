"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const industries = [
  { name: "Healthcare", icon: "/images/icons/healthcare.svg" },
  { name: "Fintech", icon: "/images/icons/finance.svg" },
  { name: "SaaS", icon: "/images/icons/technology.svg" },
  { name: "Travel", icon: "/images/icons/travel.svg" },
  { name: "Fitness", icon: "/images/icons/fitness.svg" },
  { name: "Insurance", icon: "/images/icons/insurance.svg" },
  { name: "Marketing", icon: "/images/icons/marketing.svg" },
  { name: "Manufacturing", icon: "/images/icons/manufacturing.svg" },
];

export function Industries() {
  return (
    <section className="bg-[#A8B2E7] py-24"> {/* Lavender background for entire page */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-gray-600 uppercase tracking-wider">
            INDUSTRIES
          </span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Developing effective Generative AI solutions for every industry
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
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
              <div className="bg-[#F3F1EB] p-6 rounded-full mb-4"> {/* Beige background behind boxes */}
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
