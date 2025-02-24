"use client";

import Image from "next/image";

const caseStudies = [
  {
    title: "AI-Driven Dynamic Pricing for a Travel Platform",
    description: "We partnered with a leading travel agency to integrate AI algorithms that optimize ticket prices based on real-time data. By analyzing market demand, competitor pricing, and historical trends, the platform achieved smarter pricing strategies, boosting revenue and customer satisfaction.",
    image: "/images/travel-dynamic-pricing.jpg",
    highlights: [
      "Implemented real-time dynamic pricing AI models",
      "Increased booking revenue by 30% within 4 months",
      "Analyzed competitor rates and demand patterns",
      "Seamless API integration with booking platforms",
      "Enhanced customer trust with fair pricing strategies"
    ]
  },
  {
    title: "AI-Powered Personalized Travel Recommendations",
    description: "We helped a travel startup develop an AI recommendation engine, offering personalized travel plans based on user preferences, past bookings, and online behavior. This resulted in higher engagement rates and repeat bookings.",
    image: "/images/travel-recommendations.jpg",
    highlights: [
      "AI model trained on user behavior & booking history",
      "Increased customer engagement by 45%",
      "Tailored itineraries with real-time destination data",
      "Integrated with mobile apps for seamless experiences",
      "Boosted repeat bookings by 25%"
    ]
  }
];

export function CaseStudy() {
  return (
    <section className="bg-[#080B16] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          AI Transformations in the Travel Industry
        </h2>
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
  );
}

export default CaseStudy;
