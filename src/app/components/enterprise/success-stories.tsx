"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const successStories = [
  {
    company: "Enterprise Solutions Inc.",
    title: "Scalable Enterprise Software Implementation",
    description: "Developed a robust enterprise application leveraging microservices architecture, enhancing system reliability and efficiency for large-scale operations.",
    image: "/images/icons/Customer Service.svg",
    results: [
      "Improved operational efficiency by 45%",
      "99.99% uptime with cloud-based scalability",
      "Seamless integration with existing enterprise systems",
    ],
  },
  {
    company: "Global Finance Systems",
    title: "Next-Gen Financial Management Platform",
    description: "Engineered a secure and AI-driven enterprise financial platform, optimizing compliance and risk management for global transactions.",
    image: "/images/icons/finance.svg",
    results: [
      "Increased fraud detection accuracy by 70%",
      "Real-time financial insights with AI-powered analytics",
      "Enhanced security and compliance automation",
    ],
  },
];

export function SuccessStories() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            Enterprise Application Success Stories
          </h2>
          <p className="text-xl text-black/80 max-w-3xl mx-auto">
            Discover how our enterprise application development solutions are transforming businesses globally.
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
              className="bg-[#F3F1EB] border border-black rounded-xl overflow-hidden shadow-lg"
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
                <div className="text-black font-medium mb-2">
                  {story.company}
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  {story.title}
                </h3>
                <p className="text-black/80 mb-6">{story.description}</p>
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
  );
}

export default SuccessStories;
