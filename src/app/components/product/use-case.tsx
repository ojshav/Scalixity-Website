"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

const productUseCases = [
  {
    title: "Scalable Web Applications",
    description: "Build and deploy high-performance web applications with modern frameworks and cloud infrastructure.",
    image: "/images/tech/Scalable Web Applications.svg",
    stats: [
      { value: "99.9%", label: "Uptime Guarantee" },
      { value: "3x", label: "Faster Load Times" }
    ]
  },
  {
    title: "AI-Powered Features",
    description: "Enhance your product with AI-driven capabilities such as chatbots, recommendation engines, and automation.",
    image: "/images/tech/AI-Powered Features.svg",
    stats: [
      { value: "85%", label: "Increase in User Engagement" },
      { value: "60%", label: "Reduction in Manual Effort" }
    ]
  },
  {
    title: "Data Analytics & Insights",
    description: "Leverage data-driven insights to optimize performance and enhance decision-making with real-time analytics.",
    image: "/images/tech/Data Analytics & Insights.svg",
    stats: [
      { value: "5x", label: "Faster Report Generation" },
      { value: "40%", label: "Improved Operational Efficiency" }
    ]
  }
]

export function UseCases() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            Product Use Cases
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Explore how our technology solutions drive product innovation and efficiency.
          </p>
        </div>

        <div className="space-y-16">
          {productUseCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className="md:col-span-2">
                <div className="bg-[#F3F1EB] border border-black rounded-xl p-6 flex flex-col md:flex-row items-center">
                  <div className="relative h-[300px] w-full md:w-[50%] rounded-xl overflow-hidden border-2 border-black">
                    <Image
                      src={useCase.image}
                      alt={useCase.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="md:ml-8 mt-6 md:mt-0 text-center md:text-left">
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
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UseCases;
