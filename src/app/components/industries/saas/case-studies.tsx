"use client"

import Image from 'next/image'

const caseStudies = [
  {
    title: "AI-Driven User Retention for SaaS Platform",
    description: "We partnered with a SaaS company to implement AI models that predict user churn and personalize in-app experiences. By analyzing user behavior and engagement data, we crafted tailored retention strategies, boosting user loyalty and reducing churn rates.",
    image: "/images/Reimagine Legal Support Driven by in-Depth Legal Research.svg",
    highlights: [
      "Predictive AI models for early churn detection",
      "Increased user retention by 35% within 3 months",
      "Real-time personalization of in-app content",
      "Seamless integration with existing SaaS analytics tools",
      "Enhanced customer lifetime value (CLV)"
    ]
  },
  {
    title: "Automated Workflow Optimization with AI",
    description: "Our AI-powered automation solution streamlined business workflows for a leading SaaS platform. The AI system identified repetitive tasks, optimized resource allocation, and reduced operational inefficiencies, resulting in faster project delivery and cost savings.",
    image: "/images/Revolutionizing Patient Support with AI-Powered Chatbots.svg",
    highlights: [
      "AI-driven process optimization reducing manual tasks by 50%",
      "Improved operational efficiency by 40%",
      "Adaptive AI models for continuous workflow enhancement",
      "Easy integration with SaaS project management tools",
      "Accelerated project completion timelines"
    ]
  }
]

export function CaseStudy() {
  return (
    <section className="bg-[#080B16] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Our AI-Powered SaaS Solutions</h2>
        {caseStudies.map((study, index) => (
          <div key={index} className="bg-[#0F1629] rounded-lg overflow-hidden border border-gray-800 mb-12">
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
