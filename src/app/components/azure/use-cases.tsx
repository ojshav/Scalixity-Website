"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

const azureUseCases = [
  {
    title: "Scalable Cloud Applications",
    description: "Deploy and manage secure, scalable applications using Azure cloud services.",
    image: "/tech/azure-cloud-app.svg",
    stats: [
      { value: "99.95%", label: "Uptime SLA" },
      { value: "40%", label: "Reduction in Operational Costs" }
    ]
  },
  {
    title: "AI & Machine Learning",
    description: "Leverage Azure AI services to build, train, and deploy intelligent applications.",
    image: "/tech/azure-ai-ml.svg",
    stats: [
      { value: "60%", label: "Faster AI Model Training" },
      { value: "35%", label: "Improvement in Decision Accuracy" }
    ]
  },
  {
    title: "Big Data & Analytics",
    description: "Utilize Azure's analytics and data warehousing solutions for real-time insights.",
    image: "/tech/azure-data-analytics.svg",
    stats: [
      { value: "5x", label: "Faster Query Performance" },
      { value: "25%", label: "Cost Savings on Data Processing" }
    ]
  }
]

export function UseCases() {
  return (
    <section className="py-24" style={{ backgroundColor: '#A8B2E7' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            Azure Use Cases
          </h2>
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
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className={index % 2 === 0 ? "md:order-1" : "md:order-2"}>
                <h3 className="text-2xl font-bold text-black mb-4">{useCase.title}</h3>
                <p className="text-black mb-8">{useCase.description}</p>
                <div className="grid grid-cols-2 gap-8">
                  {useCase.stats.map((stat, idx) => (
                    <div key={idx}>
                      <div className="text-3xl font-bold text-black mb-2">{stat.value}</div>
                      <div className="text-sm text-black">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={index % 2 === 0 ? "md:order-2" : "md:order-1"}>
                <div 
                  className="relative h-[300px] rounded-xl overflow-hidden border-2 border-black"
                  style={{ backgroundColor: '#F3F1EB' }}
                >
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
