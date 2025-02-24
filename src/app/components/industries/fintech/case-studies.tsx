 "use client"

import Image from 'next/image'

const caseStudies = [
  {
    title: "AI-Powered Fraud Detection for Financial Security",
    description: "We partnered with a leading fintech company to build an AI-driven fraud detection system. This solution uses advanced machine learning algorithms to identify suspicious activities in real-time, preventing unauthorized transactions and securing customer data.",
    image: "/images/fintech-fraud-detection.jpg",
    highlights: [
      "Real-time anomaly detection for transaction monitoring",
      "Reduced fraud incidents by 45% within the first quarter",
      "Adaptive AI models that evolve with new fraud patterns",
      "Seamless integration with existing banking infrastructure",
      "Enhanced customer trust through proactive security measures"
    ]
  },
  {
    title: "AI-Driven Credit Scoring and Risk Assessment",
    description: "Our collaboration with a fintech startup resulted in an AI-powered credit scoring model. This solution analyzes customer data, spending behavior, and market trends to accurately assess credit risk, enabling faster and fairer loan approvals.",
    image: "/images/fintech-credit-scoring.jpg",
    highlights: [
      "Data-driven risk assessment for loan applications",
      "Improved loan approval speed by 60%",
      "Enhanced accuracy by leveraging AI and historical data",
      "Seamless integration with existing loan management systems",
      "Boosted customer satisfaction with quicker responses"
    ]
  }
]

export function CaseStudy() {
  return (
    <section className="bg-[#080B16] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Our AI-Powered Fintech Solutions</h2>
        {caseStudies.map((study, index) => (
          <div key={index} className="bg-[#0F1629] rounded-lg overflow-hidden border border-gray-800">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                <p className="text-gray-400 mb-6">{study.description}</p>
                <ul className="space-y-2">
                  {study.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span className="text-gray-400">{highlight}</span>
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
