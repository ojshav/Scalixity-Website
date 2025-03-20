"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const technologies = {
  "AI Algorithms": [
    { name: "Neural Networks", logo: "/images/tech/neural-networks.svg" },
    { name: "Decision Trees", logo: "/images/tech/decision-trees.svg" },
    { name: "Regression Models", logo: "/images/tech/regression-models.svg" },
  ],
  "Cloud Platforms": [
    { name: "AWS", logo: "/images/tech/aws.svg" },
    { name: "Google Cloud", logo: "/images/tech/google-cloud.svg" },
    { name: "Azure", logo: "/images/tech/azure.svg" },
  ],
  "Financial Tools": [
    { name: "QuantLib", logo: "/images/tech/quantlib.svg" },
    { name: "Bloomberg API", logo: "/images/tech/bloomberg-api.svg" },
    { name: "Alpaca", logo: "/images/tech/alpaca.svg" },
  ],
};

export function TechStack() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            Our Fintech AI Tech Stack
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Empowering financial solutions with cutting-edge AI technologies and platforms.
          </p>
        </div>

        <div className="grid gap-8">
          {Object.entries(technologies).map(([category, items], index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] rounded-xl border border-black p-6"
            >
              <h3 className="text-lg font-semibold text-black mb-6">{category}</h3>
              <div className="grid grid-cols-3 gap-6">
                {items.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center justify-center">
                    <div className="w-16 h-16 relative mb-2">
                      <Image
                        src={item.logo}
                        alt={item.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm text-black text-center">{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
