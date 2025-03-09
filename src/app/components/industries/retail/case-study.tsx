"use client"

import Image from 'next/image'

const caseStudies = [
  {
    title: "AI-Powered Personalized Shopping Experiences",
    description: "We partnered with a major retail brand to implement AI-driven recommendation engines. This solution uses customer data and behavioral patterns to deliver hyper-personalized product suggestions, boosting engagement and sales.",
    image: "/images/retail-personalized-shopping.jpg",
    highlights: [
      "Increased customer engagement by 40% through tailored suggestions",
      "Real-time analysis of shopping behavior and preferences",
      "Adaptive AI models improving product recommendations over time",
      "Seamless integration with e-commerce platforms",
      "Enhanced customer satisfaction with personalized experiences"
    ]
  },
  {
    title: "AI-Driven Demand Forecasting and Inventory Management",
    description: "We collaborated with a retail chain to develop an AI-powered inventory management system. This solution predicts demand fluctuations, optimizes stock levels, and prevents overstock and stockouts.",
    image: "/images/retail-inventory-management.jpg",
    highlights: [
      "Reduced stockouts by 50% with accurate demand forecasting",
      "Dynamic inventory adjustments based on AI predictions",
      "Streamlined supply chain operations",
      "Seamless integration with existing ERP systems",
      "Improved profit margins through optimized stock management"
    ]
  }
]

export function CaseStudy() {
  return (
    <section className="bg-[#A8B2E7] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Our AI-Powered Retail Solutions</h2>
        {caseStudies.map((study, index) => (
          <div key={index} className="bg-[#F3F1EB] rounded-lg overflow-hidden border border-gray-800 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">{study.title}</h3>
                <p className="text-muted-foreground mb-6">{study.description}</p>
                <ul className="space-y-2">
                  {study.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-full min-h-[300px]">
                <Image src={study.image} alt={study.title} layout="fill" objectFit="cover" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CaseStudy;

