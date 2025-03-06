"use client";

import Image from 'next/image';

const caseStudies = [
  {
    title: "AI-Powered Risk Assessment for Insurance",
    description: "We collaborated with a major insurance provider to implement AI models that analyze vast amounts of customer data. These models detect potential risks and predict claim likelihood, enabling data-driven decision-making and optimized risk management strategies.",
    image: "/images/insurance-risk-assessment.jpg",
    highlights: [
      "Real-time risk analysis using AI algorithms",
      "Improved claim prediction accuracy by 40%",
      "Data-driven insights for policy adjustments",
      "Seamless integration with existing insurance platforms",
      "Enhanced decision-making for underwriters"
    ]
  },
  {
    title: "Fraud Detection and Prevention System",
    description: "Partnering with an insurance firm, we developed an AI-powered fraud detection system that continuously monitors transactions and policy activities. The system identifies suspicious patterns, helping insurers mitigate fraudulent claims and reduce financial losses.",
    image: "/images/insurance-fraud-detection.jpg",
    highlights: [
      "AI models trained on historical fraud data",
      "Reduced fraudulent claims by 50% in 6 months",
      "Real-time anomaly detection for policy activities",
      "Automated flagging of high-risk transactions",
      "Increased security and customer trust"
    ]
  }
];

export function CaseStudy() {
  return (
    <section className="bg-gradient-to-r from-[#67E8F9] via-[#9333EA] to-[#4F46E5] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Our AI-Powered Insurance Solutions</h2>
        {caseStudies.map((study, index) => (
          <div key={index} className="bg-white bg-opacity-10 rounded-lg overflow-hidden border border-white border-opacity-20 mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                <p className="text-gray-200 mb-6">{study.description}</p>
                <ul className="space-y-2">
                  {study.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-cyan-300 mr-2">•</span>
                      <span className="text-gray-200">{highlight}</span>
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
  );
}

export default CaseStudy;

