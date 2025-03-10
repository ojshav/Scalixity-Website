"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

const awsUseCases = [
  {
    title: "Scalable Web Applications",
    description: "Deploy and manage highly available web applications with AWS cloud infrastructure.",
    image: "/tech/aws-web-app.svg",
    stats: [
      { value: "99.99%", label: "Uptime Guarantee" },
      { value: "50%", label: "Reduction in Infrastructure Costs" }
    ]
  },
  {
    title: "Data Analytics & Big Data",
    description: "Leverage AWS analytics services to process and analyze vast amounts of data efficiently.",
    image: "/tech/aws-data-analytics.svg",
    stats: [
      { value: "10x", label: "Faster Data Processing" },
      { value: "30%", label: "Cost Savings on Data Storage" }
    ]
  },
  {
    title: "Machine Learning & AI",
    description: "Train and deploy AI models at scale using AWS machine learning services like SageMaker.",
    image: "/tech/aws-ai-ml.svg",
    stats: [
      { value: "70%", label: "Faster Model Training" },
      { value: "40%", label: "Reduction in AI Deployment Costs" }
    ]
  }
]

export function UseCases() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            AWS Use Cases
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Discover how AWS cloud solutions enhance scalability, security, and efficiency.
          </p>
        </div>

        <div className="space-y-16">
          {awsUseCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="grid md:grid-cols-2 gap-8 items-center bg-[#F3F1EB] border border-black rounded-xl p-8"
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
