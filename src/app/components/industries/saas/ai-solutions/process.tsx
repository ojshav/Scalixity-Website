"use client";

import { motion } from "framer-motion";

const processSteps = [
  {
    title: "Data Acquisition & Integration",
    description: "Collect and integrate data from various sources, including cloud databases, APIs, and user inputs, ensuring seamless connectivity."
  },
  {
    title: "AI Model Training & Deployment",
    description: "Develop AI models tailored to your business needs, deploying them securely to cloud platforms for real-time processing."
  },
  {
    title: "Automation & Optimization",
    description: "Implement AI-driven automation for workflows, continuously optimizing processes to enhance efficiency and reduce manual efforts."
  },
  {
    title: "Real-Time Analytics & Monitoring",
    description: "Monitor AI model performance with interactive dashboards, offering real-time insights and predictive analytics."
  },
  {
    title: "Continuous Improvement & Scaling",
    description: "Leverage feedback loops and AI algorithms to refine models and scale solutions as your business grows."
  }
];

export function Process() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            Our AI SaaS Solutions Process
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            From data acquisition to AI-driven insights, our streamlined process empowers your business with smart, scalable SaaS solutions.
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
                  <div className="w-2 h-2 bg-[#A8B2E7] rounded-full" />
                </div>
                
                <div className="bg-[#F3F1EB] p-8 rounded-xl border border-black">
                  <h3 className="text-xl font-bold text-black mb-4">{step.title}</h3>
                  <p className="text-black leading-relaxed">{step.description}</p>
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
