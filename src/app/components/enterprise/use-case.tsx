"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const enterpriseUseCases = [
  {
    title: "Scalable Enterprise Applications",
    description: "Develop and deploy robust, scalable enterprise applications tailored to complex business operations.",
    image: "/images/ai-powered-maintenance.svg",
    stats: [
      { value: "99.99%", label: "Uptime Guarantee" },
      { value: "5x", label: "Improved Operational Efficiency" },
    ],
  },
  {
    title: "AI & Automation for Enterprises",
    description: "Leverage AI-driven automation to enhance workflows, reduce costs, and improve decision-making.",
    image: "/images/Data Analysis.svg",
    stats: [
      { value: "70%", label: "Faster Business Processes" },
      { value: "50%", label: "Reduction in Manual Tasks" },
    ],
  },
  {
    title: "Enterprise Data Analytics & Insights",
    description: "Utilize data analytics solutions for real-time insights, predictive analytics, and better business intelligence.",
    image: "/images/Document Processing.svg",
    stats: [
      { value: "10x", label: "Faster Report Generation" },
      { value: "40%", label: "Increase in Data Accuracy" },
    ],
  },
];

export function UseCases() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            Enterprise Use Cases
          </h2>
          <p className="text-xl text-black/80 max-w-3xl mx-auto">
            Discover how our enterprise solutions drive efficiency, innovation, and business growth.
          </p>
        </div>

        <div className="space-y-16">
          {enterpriseUseCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="grid md:grid-cols-2 gap-8 items-center bg-[#F3F1EB] border border-black rounded-xl p-8 shadow-lg"
            >
              <div className={index % 2 === 0 ? "md:order-1" : "md:order-2"}>
                <h3 className="text-2xl font-bold text-black mb-4">
                  {useCase.title}
                </h3>
                <p className="text-black/80 mb-8">{useCase.description}</p>
                <div className="grid grid-cols-2 gap-8">
                  {useCase.stats.map((stat, idx) => (
                    <div key={idx}>
                      <div className="text-3xl font-bold text-black mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-black/70">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={index % 2 === 0 ? "md:order-2" : "md:order-1"}>
                <div className="relative h-[300px] rounded-xl overflow-hidden">
                  <Image
                    src={useCase.image}
                    alt={useCase.title}
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
  );
}

export default UseCases;
