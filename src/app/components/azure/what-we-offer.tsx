"use client"

import { motion } from 'framer-motion'

const services = [
  {
    title: "Azure Cloud Strategy & Consulting",
    description: "We help businesses develop a cloud strategy that aligns with their goals, ensuring a smooth transition to Azure with cost optimization, scalability, and security in mind."
  },
  {
    title: "Azure Infrastructure & Migration",
    description: "Our experts assist in migrating workloads to Azure seamlessly, leveraging best practices for lift-and-shift, re-platforming, and re-architecting applications."
  },
  {
    title: "Serverless & Microservices Architecture on Azure",
    description: "We design and implement serverless solutions using Azure Functions, API Management, and Cosmos DB, enabling efficient and scalable cloud-native applications."
  },
  {
    title: "AI & Machine Learning on Azure",
    description: "Leverage Azure AI and ML services like Azure Machine Learning, Cognitive Services, and Bot Framework to drive innovation, automate processes, and extract insights from your data."
  },
  {
    title: "Azure Security & Compliance",
    description: "We ensure your Azure environment adheres to industry security standards and regulations, implementing Azure Security Center, Sentinel, and Defender for proactive protection."
  },
  {
    title: "Azure Cost Optimization & Performance Tuning",
    description: "Maximize cost savings by optimizing Azure resources with auto-scaling, reserved instances, and performance monitoring using Azure Monitor and Cost Management."
  }
]

export function WhatWeOffer() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            Azure Cloud Consulting Services
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Our Azure expertise empowers businesses to innovate, scale, and optimize cloud operations seamlessly. From strategy to implementation, we ensure your success on Azure.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F5F5DC] p-8 rounded-xl border border-black hover:border-gray-600 transition-colors"
            >
              <h3 className="text-xl font-bold text-black mb-4">{service.title}</h3>
              <p className="text-black leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
