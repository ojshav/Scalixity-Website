"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const industries = [
  { name: "Virtual Real Estate", icon: "/icons/virtual-real-estate.svg" },
  { name: "Gaming & Entertainment", icon: "/icons/gaming.svg" },
  { name: "Retail & E-commerce", icon: "/icons/retail.svg" },
  { name: "Education & Training", icon: "/icons/education.svg" },
  { name: "Healthcare & Wellness", icon: "/icons/healthcare.svg" },
  { name: "Social & Networking", icon: "/icons/social.svg" },
  { name: "Finance & Banking", icon: "/icons/finance.svg" },
  { name: "Workspaces & Collaboration", icon: "/icons/workspace.svg" }
];

export function Industries() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">INDUSTRIES</span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            Transforming Industries with Metaverse Innovation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our expertise in metaverse development spans various industries, revolutionizing the way businesses and individuals interact in digital spaces.
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
              <div className="bg-card p-6 rounded-full mb-4">
                <Image
                  src={industry.icon}
                  alt={industry.name}
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground text-center">{industry.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Industries;
