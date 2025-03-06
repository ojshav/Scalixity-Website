"use client";

import Image from "next/image";

const featuredWorks = [
  {
    title: "AI-Powered Customer Support",
    description: "Developed an AI chatbot that reduced response time by 60% and improved customer satisfaction.",
    image: "/work/ai-customer-support.jpg",
  },
  {
    title: "Predictive Analytics for Sales",
    description: "Implemented AI-driven forecasting models that increased revenue by 25% through predictive insights.",
    image: "/work/predictive-analytics.jpg",
  },
  {
    title: "Automated Document Processing",
    description: "Designed an AI solution that automated data extraction and processing, reducing manual workload by 80%.",
    image: "/work/document-automation.jpg",
  },
];

export function FeaturedWork() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">Featured Work</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore how our AI solutions are transforming enterprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredWorks.map((work, index) => (
            <div key={index} className="bg-card p-6 rounded-xl border border-border">
              <Image src={work.image} alt={work.title} width={400} height={300} className="rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-white">{work.title}</h3>
              <p className="text-gray-400 mt-2">{work.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedWork;
