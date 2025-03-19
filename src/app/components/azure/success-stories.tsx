"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'

const successStories = [
  {
    company: "Azure Innovators",
    title: "Scalable E-commerce Platform on Azure",
    description: "Built a high-performance e-commerce platform utilizing Azure services like Azure VM, Blob Storage, and Cosmos DB, leading to a 50% improvement in load times and seamless shopping experiences.",
    image: "/icons/ai-model.svg",
    results: [
      "50% faster page load times",
      "99.99% uptime with Azure Autoscale",
      "Increased sales by 35% through optimized cloud infrastructure"
    ]
  },
  {
    company: "FinSecure Ltd.",
    title: "AI-Powered Fraud Detection with Azure",
    description: "Developed an AI-driven fraud detection system leveraging Azure Machine Learning and Cognitive Services, reducing fraudulent activities by 80% and enhancing security measures.",
    image: "/images/tech/Data Analytics & Insights.svg",
    results: [
      "80% reduction in fraudulent transactions",
      "Real-time analytics with Azure Monitor",
      "Seamless integration with existing banking systems"
    ]
  }
]

export function SuccessStories() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            Azure Success Stories
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Discover how businesses leverage Azure for scalable, secure, and high-performance applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[#F3F1EB] rounded-xl overflow-hidden border border-black"
            >
              <div className="relative h-[240px]">
                <Image
                  src={story.image}
                  alt={story.company}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <div className="text-black font-medium mb-2">{story.company}</div>
                <h3 className="text-2xl font-bold text-black mb-4">{story.title}</h3>
                <p className="text-black mb-6">{story.description}</p>
                <div className="space-y-3">
                  {story.results.map((result, idx) => (
                    <div key={idx} className="flex items-center text-black">
                      <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                      {result}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
