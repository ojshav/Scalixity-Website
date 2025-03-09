"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

const technologies = {
  "AI Algorithms": [
    { name: "Recommendation Engines", logo: "/tech/recommendation-engines.svg" },
    { name: "Computer Vision", logo: "/tech/computer-vision.svg" },
    { name: "Predictive Analytics", logo: "/tech/predictive-analytics.svg" }
  ],
  "Cloud Platforms": [
    { name: "AWS", logo: "/tech/aws.svg" },
    { name: "Google Cloud", logo: "/tech/google-cloud.svg" },
    { name: "Azure", logo: "/tech/azure.svg" }
  ],
  "Retail Tools": [
    { name: "Shopify API", logo: "/tech/shopify-api.svg" },
    { name: "Google Analytics", logo: "/tech/google-analytics.svg" },
    { name: "BigCommerce", logo: "/tech/bigcommerce.svg" }
  ]
}

export function TechStack() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Our AI Tech Stack for Retail
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Driving retail innovation with cutting-edge AI technologies and tools.
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
              className="bg-[#F3F1EB] rounded-xl border border-border p-6"
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
  )
}

export default TechStack;
