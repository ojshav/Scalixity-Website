"use client"

import { motion } from 'framer-motion'

const services = [
  {
    title: "AWS Cloud Strategy & Consulting",
    description: "We help businesses develop a cloud strategy that aligns with their goals, ensuring a smooth transition to AWS with cost optimization, scalability, and security in mind."
  },
  {
    title: "AWS Infrastructure & Migration",
    description: "Our experts assist in migrating workloads to AWS seamlessly, leveraging best practices for lift-and-shift, re-platforming, and re-architecting applications."
  },
  {
    title: "Serverless & Microservices Architecture",
    description: "We design and implement serverless solutions using AWS Lambda, API Gateway, and DynamoDB, enabling efficient and scalable cloud-native applications."
  },
  {
    title: "AI & Machine Learning on AWS",
    description: "Leverage AWS AI and ML services like SageMaker, Rekognition, and Comprehend to drive innovation, automate processes, and extract insights from your data."
  },
  {
    title: "AWS Security & Compliance",
    description: "We ensure your AWS environment adheres to industry security standards and regulations, implementing IAM, GuardDuty, and Security Hub for proactive protection."
  },
  {
    title: "AWS Cost Optimization & Performance Tuning",
    description: "Maximize cost savings by optimizing AWS resources with auto-scaling, reserved instances, and performance monitoring using AWS CloudWatch and Cost Explorer."
  }
]

export function WhatWeOffer() {
  return (
    <section className="py-24" style={{ backgroundColor: '#590178' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-white">WHAT WE OFFER</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            AWS Cloud Consulting Services
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Our AWS expertise empowers businesses to innovate, scale, and optimize cloud operations seamlessly. From strategy to implementation, we ensure your success on AWS.
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
              className="p-8 rounded-xl border-2 border-black transition-colors"
              style={{ backgroundColor: '#F3F1EB', color: 'black' }}
            >
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
