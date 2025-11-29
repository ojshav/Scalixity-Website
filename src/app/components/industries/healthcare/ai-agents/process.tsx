"use client";

import { motion } from "framer-motion";

const processSteps = [
  {
    title: "Understanding Business Needs",
    description:
      "We start by identifying your goals, target audience, and the tasks you want AI agents to automate or enhance."
  },
  {
    title: "Defining AI Agent Capabilities",
    description:
      "Our team outlines the agent's functionalities — from natural language processing to integration with existing systems."
  },
  {
    title: "Model Development & Training",
    description:
      "We build and train AI models tailored to your use case, ensuring accuracy, speed, and adaptability."
  },
  {
    title: "Integration & Deployment",
    description:
      "Seamless integration into your workflows, connecting AI agents with APIs, CRMs, databases, and third-party platforms."
  },
  {
    title: "Testing & Optimization",
    description:
      "We rigorously test the AI agents, fine-tuning their performance, security, and user experience before full deployment."
  }
];

export function Process() {
  return (
    <section className="bg-[#FFF2D5] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">
            PROCESS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            Our AI Agent Development Process
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            From strategy to deployment, we design AI agents that enhance
            efficiency and elevate user experiences.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
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
                <div className="absolute left-0 top-2 w-[30px] h-[30px] bg-black rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#F3F1EB] rounded-full" />
                </div>

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
