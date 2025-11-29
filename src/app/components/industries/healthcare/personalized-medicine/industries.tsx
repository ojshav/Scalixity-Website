"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const industries = [
  { name: "Hospitals & Clinics", icon: "/images/icons/healthcare.svg" },
  { name: "Pharmaceutical Companies", icon: "/images/icons/construction.svg" },
  { name: "Health Insurance Providers", icon: "/images/icons/legal.svg" },
  { name: "Genomics Research Centers", icon: "/images/icons/marketing.svg" },
  { name: "Biotechnology Firms", icon: "/images/icons/marketing.svg" },
  { name: "Telemedicine Platforms", icon: "/images/icons/marketing.svg" },
  { name: "Diagnostics & Labs", icon: "/images/icons/marketing.svg" },
  { name: "Public Health Organizations", icon: "/images/icons/marketing.svg" }
];

export function Industries() {
  return (
    <section className="bg-[#590178] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-white uppercase tracking-wider">INDUSTRIES</span>
          <h2 className="text-4xl font-bold text-white mt-4 mb-6">
            Empowering Healthcare with Personalised Medicine Platforms
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            AI-driven Personalised Medicine Platforms serve diverse healthcare sectors — revolutionizing precision treatment, accelerating research, and enhancing patient-centric care.
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
              <div className="bg-[#F3F1EB] p-6 rounded-full mb-4 border border-black">
                <Image
                  src={industry.icon}
                  alt={industry.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 text-black"
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
