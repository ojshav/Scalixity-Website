"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const technologies = {
  "AI & Personalization": [
    { name: "GPT-4", logo: "/images/tech/gpt-4.svg" },
    { name: "Recommendation Engines", logo: "/images/Reimagine Legal Support Driven by in-Depth Legal Research.svg" },
    { name: "Sentiment Analysis", logo: "/images/sentiment-analysis.svg" }
  ],
  "Cloud Infrastructure": [
    { name: "AWS", logo: "/images/tech/aws.svg" },
    { name: "Google Cloud", logo: "/images/tech/google-cloud.svg" },
    { name: "Azure", logo: "/images/tech/azure.svg" }
  ],
  "Travel APIs & Tools": [
    { name: "Amadeus API", logo: "/images/tech/alpaca.svg" },
    { name: "Google Maps API", logo: "/images/tech/googlecloud.svg" },
    { name: "Skyscanner API", logo: "/images/tech/appium.svg" }
  ]
};

export function TechStack() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            AI-Powered Travel Tech Stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leverage cutting-edge AI models, cloud platforms, and travel APIs to build personalized and efficient travel experiences.
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
              className="bg-card rounded-xl border border-border p-8"
            >
              <h3 className="text-xl font-semibold text-foreground mb-6">{category}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {items.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center justify-center">
                    <div className="w-20 h-20 relative mb-3">
                      <Image
                        src={item.logo}
                        alt={item.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-base text-muted-foreground text-center">{item.name}</span>
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
