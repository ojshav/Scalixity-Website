"use client";

import { motion } from "framer-motion";

const processSteps = [
  {
    title: "Requirement Analysis",
    description:
      "We begin by understanding your documentation needs, data sources, and desired AI capabilities to tailor the solution.",
  },
  {
    title: "Data Collection & Preparation",
    description:
      "Our team gathers relevant documents, cleans the data, and prepares it for AI model training.",
  },
  {
    title: "Model Development & Training",
    description:
      "We build and train AI models to accurately extract, classify, and generate intelligent insights from documents.",
  },
  {
    title: "Integration & Deployment",
    description:
      "Seamlessly integrate AI models into your existing documentation workflows and systems.",
  },
  {
    title: "Testing & Continuous Optimization",
    description:
      "We rigorously test AI outputs, refine models, and ensure ongoing improvements for maximum accuracy and efficiency.",
  },
];

export function Process() {
  return (
    <section className="bg-[#FFF2D5] !text-black py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">
            PROCESS
          </span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Our Documentation Intelligence Process
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            From data preparation to AI-powered insights, our structured
            approach ensures smarter, faster, and more reliable documentation
            processes.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line - Changed to Black */}
          <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-black" />

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-12"
              >
                {/* Step Indicator */}
                <div className="absolute left-0 top-2 w-[30px] h-[30px] bg-[#F3F1EB] border border-black rounded-full flex items-center justify-center hover:bg-black transition-colors">
                  <div className="w-2 h-2 bg-black rounded-full" />
                </div>

                {/* Step Card */}
                <div className="bg-[#F3F1EB] p-8 rounded-xl border border-black">
                  <h3 className="text-xl font-bold text-black mb-4">
                    {step.title}
                  </h3>
                  <p className="text-black/80 leading-relaxed">
                    {step.description}
                  </p>
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
