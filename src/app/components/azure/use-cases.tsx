"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

const azureUseCases = [
  {
    title: "Scalable Cloud Applications",
    description: "Deploy and manage secure, scalable applications using Azure cloud services.",
    image: "/images/tech/azure.svg",
    stats: [
      { value: "99.95%", label: "Uptime SLA" },
      { value: "40%", label: "Reduction in Operational Costs" }
    ]
  },
  {
    title: "AI & Machine Learning",
    description: "Leverage Azure AI services to build, train, and deploy intelligent applications.",
    image: "/images/tech/AI-Powered Features.svg",
    stats: [
      { value: "60%", label: "Faster AI Model Training" },
      { value: "35%", label: "Improvement in Decision Accuracy" }
    ]
  },
  {
    title: "Big Data & Analytics",
    description: "Utilize Azure's analytics and data warehousing solutions for real-time insights.",
    image: "/images/tech/bigquery.svg",
    stats: [
      { value: "5x", label: "Faster Query Performance" },
      { value: "25%", label: "Cost Savings on Data Processing" }
    ]
  }
]

export function UseCases() {
  return (
    <section className="py-24 bg-[#A8B2E7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">Azure Use Cases</h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Discover how Azure cloud solutions enhance scalability, security, and intelligence.
          </p>
        </div>

        <div className="space-y-16">
          {azureUseCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col md:flex-row bg-[#F3F1EB] border-2 border-black rounded-xl overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative w-full md:w-1/2 h-[300px] border-r border-black">
                <Image
                  src={useCase.image}
                  alt={useCase.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="p-6 w-full md:w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-black mb-4">{useCase.title}</h3>
                <p className="text-black mb-6">{useCase.description}</p>
                <div className="grid grid-cols-2 gap-6">
                  {useCase.stats.map((stat, idx) => (
                    <div key={idx}>
                      <div className="text-3xl font-bold text-black mb-1">{stat.value}</div>
                      <div className="text-sm text-black">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
