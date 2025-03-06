"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const technologies = {
  "AI Models": [
    { name: "Pose Estimation", logo: "/tech/pose-estimation.svg" },
    { name: "Predictive Analytics", logo: "/tech/predictive-analytics.svg" },
    { name: "Reinforcement Learning", logo: "/tech/reinforcement-learning.svg" }
  ],
  "Health & Fitness APIs": [
    { name: "Google Fit", logo: "/tech/google-fit.svg" },
    { name: "Apple Health", logo: "/tech/apple-health.svg" },
    { name: "Strava API", logo: "/tech/strava-api.svg" }
  ],
  "Cloud & Analytics": [
    { name: "AWS", logo: "/tech/aws.svg" },
    { name: "Google Cloud", logo: "/tech/google-cloud.svg" },
    { name: "Azure", logo: "/tech/azure.svg" }
  ]
};

export function TechStack() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Our Fitness AI Tech Stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Powering next-gen fitness solutions with AI models, health APIs, and cloud platforms.
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
              className="bg-card rounded-xl border border-border p-6"
            >
              <h3 className="text-lg font-semibold text-foreground mb-6">{category}</h3>
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
                    <span className="text-sm text-muted-foreground text-center">{item.name}</span>
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
