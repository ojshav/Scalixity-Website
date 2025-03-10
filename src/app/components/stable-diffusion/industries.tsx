"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const industries = [
  { name: "Advertising & Marketing", icon: "/images/icons/marketing.svg" },
  { name: "Gaming & Entertainment", icon: "/images/icons/gaming.webp" },
  { name: "E-commerce", icon: "/images/icons/ecommerce.svg" },
  { name: "Fashion & Apparel", icon: "/images/icons/fashion.webp" },
  { name: "Film & Animation", icon: "/images/icons/film.webp" },
  { name: "Publishing", icon: "/images/icons/publishing.svg" },
  { name: "Education", icon: "/images/icons/education.svg" },
  { name: "Healthcare", icon: "/images/icons/healthcare.svg" },
];

export function Industries() {
  return (
    <section className="bg-[#F3F1EB] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black">Industries We Serve</h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            Our Stable Diffusion expertise spans across multiple industries, revolutionizing visual content creation.
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
              <div className="bg-[#A8B2E7] p-6 rounded-full mb-4">
                <Image src={industry.icon} alt={industry.name} width={48} height={48} className="w-12 h-12" />
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
