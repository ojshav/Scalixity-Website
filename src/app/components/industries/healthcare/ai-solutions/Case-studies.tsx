"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

const caseStudies = [
  {
    title: "AI-Driven Patient Monitoring System",
    description: "Developed a real-time AI patient monitoring solution that reduced emergency response times by 40%, ensuring critical care is delivered without delay.",
    image: "/images/ai-patient-monitoring.svg",
    results: [
      "40% faster emergency response",
      "Enhanced accuracy in vital sign monitoring",
      "Reduced critical incidents in ICUs"
    ]
  },
  {
    title: "Predictive Analytics for Disease Prevention",
    description: "Implemented AI models predicting disease outbreaks with 85% accuracy, allowing proactive measures and resource planning.",
    image: "/images/ai-disease-prediction.svg",
    results: [
      "85% prediction accuracy",
      "Optimized resource allocation",
      "Improved public health response"
    ]
  }
]

export function CaseStudies() {
  return (
    <section className="bg-[#FFF2D5] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            AI Solutions Case Studies
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Explore real-world applications of Scalixity’s AI solutions, driving impactful changes in healthcare.
          </p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="grid md:grid-cols-2 gap-8 items-center bg-[#FFF2D5] p-8 rounded-xl border border-black hover:border-[#3D3D3D] transition-colors shadow-lg hover:shadow-xl"
            >
              <div className={index % 2 === 0 ? "md:order-1" : "md:order-2"}>
                <h3 className="text-2xl font-bold text-black mb-4">{study.title}</h3>
                <p className="text-black mb-6">{study.description}</p>
                <ul className="space-y-2">
                  {study.results.map((result, idx) => (
                    <li key={idx} className="flex items-center text-black">
                      <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={index % 2 === 0 ? "md:order-2" : "md:order-1"}>
                <div className="relative h-[300px] bg-[#FFF2D5] rounded-xl overflow-hidden border border-black hover:border-[#3D3D3D] transition-colors shadow-md hover:shadow-lg">
                  <Image
                    src={study.image}
                    alt={study.title}
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
  )
}
