"use client"

import { motion } from 'framer-motion'
import { Brain, BotIcon as Robot, BarChartIcon as ChartBar, Shield, Code, Cloud } from 'lucide-react'

const services = [
  {
    icon: Brain,
    title: "Generative AI Consulting for Enterprises",
    description: "We help our clients by consulting them on the AI solution that is best suited to their needs. As Generative AI is still evolving, there are many approaches to developing a custom AI-powered solution. Our AI expert team guides clients toward the most efficient, low-cost, and low-maintenance solutions."
  },
  {
    icon: Robot,
    title: "Generative AI Development for Enterprises",
    description: "Once we define the client’s problem, we develop a functional Generative AI product or service, modeled and trained to deliver the desired outputs. We use deep learning, probabilistic programming, NLP, and neural networks to train and deploy the AI solution across various platforms."
  },
  {
    icon: ChartBar,
    title: "Generative AI Model Replication for Enterprises",
    description: "We build scalable Generative AI products that are easily deployable across multiple devices. We use AWS and Microsoft Azure for smooth deployment and have expertise in containerization technologies like Docker and Kubernetes, ensuring seamless AI model deployment across different platforms."
  },
  {
    icon: Shield,
    title: "Generative AI Support for Enterprises",
    description: "We provide maintenance and support for Generative AI products. Our goal is to maintain high-quality content and ensure the AI model functions effectively. We continuously train data and algorithms, improving them over time, and identify and rectify any issues or defects in the generated AI products."
  },
  {
    icon: Code,
    title: "AI Integration",
    description: "Seamlessly integrate AI capabilities into your existing software and systems, ensuring optimal functionality and performance."
  },
  {
    icon: Cloud,
    title: "AI-as-a-Service Solutions",
    description: "We develop scalable, cloud-based AI solutions that provide flexible and efficient deployment across various platforms."
  }
]

export function WhatWeOffer() {
  return (
    <section className="bg-[#F3F1EB] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-gray-600 uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl font-semibold text-black mt-4 mb-6">
            Our Generative AI Development Services
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We leverage our proficiency in deep learning, machine learning, NLP, computer vision, reinforcement learning, and more to provide tailored AI solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#A8B2E7] p-8 rounded-xl border-2 border-black hover:border-opacity-70 transition-colors"
            >
              <service.icon className="w-12 h-12 text-black mb-6" />
              <h3 className="text-xl font-semibold text-black mb-4">{service.title}</h3>
              <p className="text-gray-800">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

