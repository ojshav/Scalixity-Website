"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Identifying Fitness Goals",
    description:
      "We begin by understanding your fitness app’s goals — whether it’s personalized training, virtual coaching, or AI nutrition planning.",
  },
  {
    number: "02",
    title: "Data Collection & Analysis",
    description:
      "We gather user data from wearables, apps, and fitness devices, ensuring accuracy and security for AI model training.",
  },
  {
    number: "03",
    title: "Model Selection & Design",
    description:
      "Based on your needs, we design AI models for workout personalization, progress tracking, and predictive health analytics.",
  },
  {
    number: "04",
    title: "Algorithm Development & Training",
    description:
      "Our team develops and trains AI algorithms using real-time fitness data, enhancing user experience and goal optimization.",
  },
  {
    number: "05",
    title: "Testing & Validation",
    description:
      "We rigorously test AI models to ensure precision in workout suggestions, form correction, and nutrition advice.",
  },
  {
    number: "06",
    title: "Integration & Deployment",
    description:
      "Finally, we integrate AI seamlessly into your fitness app or platform, ensuring smooth user experience and minimal disruptions.",
  },
];

export function Process() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            Our AI Development Process for Fitness
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            A step-by-step approach to creating AI-powered fitness solutions —
            personalized, data-driven, and impactful.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-black md:left-1/2 md:-translate-x-px" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-12 md:pl-0"
              >
                <div
                  className={`md:flex items-center ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="absolute left-0 top-2 w-[30px] h-[30px] bg-black rounded-full flex items-center justify-center md:relative md:left-auto md:top-auto md:mx-8">
                    <div className="w-2 h-2 bg-[#A8B2E7] rounded-full" />
                  </div>

                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    <div className="bg-[#F3F1EB] p-6 rounded-xl border border-black shadow-lg hover:scale-105 transition-transform hover:shadow-xl">
                      <div className="text-black text-sm font-bold mb-2">
                        STEP {step.number}
                      </div>
                      <h3 className="text-xl font-bold text-black mb-4">
                        {step.title}
                      </h3>
                      <p className="text-black">{step.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
