"use client";

import Image from "next/image";

const caseStudies = [
  {
    title: "AI-Driven Project Optimization for Construction",
    description:
      "We partnered with BuildSmart AI to integrate advanced AI models that streamline project timelines, enhance on-site safety, and optimize resource allocation. Our AI solutions create a smarter, data-driven construction process.",
    image: "/images/ai.svg",
    highlights: [
      "25% reduction in project delays through predictive analytics",
      "Real-time safety monitoring with AI-powered sensors",
      "15% savings on material costs via resource optimization",
      "Automated project scheduling and dynamic timeline adjustments",
      "Centralized AI dashboard for seamless data integration",
    ],
  },
  {
    title: "Smart Safety Solutions for Construction Sites",
    description:
      "We developed an AI-powered safety system that uses real-time monitoring to detect unsafe practices. This innovative solution provides instant alerts, ensuring swift action and reducing workplace accidents.",
    image: "/images/tech/haskell.svg",
    highlights: [
      "40% increase in on-site safety compliance",
      "AI-enabled hazard detection and emergency notifications",
      "Seamless integration with wearable safety devices",
      "Real-time data visualization for site managers",
      "Enhanced team collaboration through centralized platforms",
    ],
  },
];

export function CaseStudy() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-black text-center mb-16 tracking-wide">
          AI-Powered Construction Innovations
        </h2>
        {caseStudies.map((study, index) => (
          <div
            key={index}
            className="bg-[#F3F1EB] rounded-2xl overflow-hidden border border-black mb-16 shadow-lg hover:shadow-2xl transition-all"
          >
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="p-12">
                <h3 className="text-3xl font-bold text-black mb-6">
                  {study.title}
                </h3>
                <p className="text-lg text-black mb-8 leading-relaxed">
                  {study.description}
                </p>
                <ul className="space-y-3">
                  {study.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-black text-xl mr-3">⚡</span>
                      <span className="text-black text-lg">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-full min-h-[350px]">
                <Image
                  src={study.image}
                  alt={study.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-r-2xl"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CaseStudy;
