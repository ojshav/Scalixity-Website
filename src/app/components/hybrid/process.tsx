"use client";

import { motion } from "framer-motion";

const processSteps = [
  {
    title: "Requirement Analysis & Strategy",
    description: "We gather your app's core requirements and define the best hybrid development strategy to balance performance and reach."
  },
  {
    title: "UI/UX Design",
    description: "Our design team crafts intuitive, user-centric interfaces ensuring seamless user experiences across platforms."
  },
  {
    title: "Cross-Platform Development",
    description: "Using frameworks like React Native and Flutter, we build robust apps optimized for both iOS and Android."
  },
  {
    title: "Testing & QA",
    description: "We run rigorous tests — functional, performance, and compatibility — to ensure your hybrid app is flawless."
  },
  {
    title: "Deployment & Support",
    description: "Your app is deployed to app stores, backed by ongoing optimization and post-launch support."
  }
];

export function Process() {
  return (
    <section className="bg-[#5B1DAF] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-white uppercase tracking-wider">PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Our Hybrid App Development Process
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            From idea to deployment, we build cross-platform apps that combine native-like performance with wide accessibility.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-white/30" />

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
                <div className="absolute left-0 top-2 w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#5B1DAF] rounded-full" />
                </div>
                
                <div className="bg-white p-8 rounded-xl border border-white/20">
                  <h3 className="text-xl font-bold text-[#5B1DAF] mb-4">{step.title}</h3>
                  <p className="text-[#5B1DAF]/80 leading-relaxed">{step.description}</p>
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
