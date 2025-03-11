"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const industries = [
  { name: "Advertising & Marketing", icon: "/icons/advertising.svg" },
  { name: "Fashion & Apparel", icon: "/icons/fashion.svg" },
  { name: "Gaming & Entertainment", icon: "/icons/gaming.svg" },
  { name: "Architecture & Interior Design", icon: "/icons/architecture.svg" },
  { name: "E-commerce & Retail", icon: "/icons/ecommerce.svg" },
  { name: "Automotive & Manufacturing", icon: "/icons/automotive.svg" },
  { name: "Art & Creative Design", icon: "/icons/art.svg" },
  { name: "Film & Animation", icon: "/icons/film.svg" },
];

export function Industries() {
  return (
    <section className="bg-[#A8B2E7] py-24"> {/* Lavender Background */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">
            INDUSTRIES
          </span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Transforming Industries with MidJourney AI-Powered Creativity
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            From advertising to film production, our AI-driven image generation solutions empower various industries to innovate and create stunning visuals effortlessly.
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
              <div className="bg-[#F3F1EB] p-6 rounded-xl mb-4 border border-black shadow-lg transition-all hover:scale-105"> 
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

export default Industries;
