"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

const gcpUseCases = [
  {
    title: "Cloud-Native Applications",
    description: "Develop and deploy cloud-native applications with Google Cloud's scalable infrastructure.",
    image: "/tech/gcp-cloud-app.svg",
    stats: [
      { value: "99.99%", label: "Uptime Guarantee" },
      { value: "50%", label: "Reduction in Deployment Time" }
    ]
  },
  {
    title: "AI & Machine Learning",
    description: "Harness the power of Google AI and ML services for advanced analytics and automation.",
    image: "/tech/gcp-ai-ml.svg",
    stats: [
      { value: "70%", label: "Faster AI Model Training" },
      { value: "40%", label: "Improvement in Predictive Accuracy" }
    ]
  },
  {
    title: "Big Data & Analytics",
    description: "Use Google Cloud’s big data and analytics solutions for real-time business insights.",
    image: "/tech/gcp-data-analytics.svg",
    stats: [
      { value: "10x", label: "Faster Query Processing" },
      { value: "30%", label: "Reduction in Data Storage Costs" }
    ]
  }
]

export function UseCases() {
  return (
    <section className="bg-[#0A0B14] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Google Cloud Use Cases
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore how Google Cloud solutions enable innovation, efficiency, and intelligence.
          </p>
        </div>

        <div className="space-y-16">
          {gcpUseCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className={index % 2 === 0 ? "md:order-1" : "md:order-2"}>
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-400 mb-8">{useCase.description}</p>
                <div className="grid grid-cols-2 gap-8">
                  {useCase.stats.map((stat, idx) => (
                    <div key={idx}>
                      <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={index % 2 === 0 ? "md:order-2" : "md:order-1"}>
                <div className="relative h-[300px] rounded-xl overflow-hidden">
                  <Image
                    src={useCase.image}
                    alt={useCase.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
