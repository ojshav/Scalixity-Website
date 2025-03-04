"use client";

import { motion } from 'framer-motion';

const processSteps = [
  {
    title: "Concept & Strategy",
    description: "We start by understanding your vision, defining goals, and crafting a tailored strategy for your iOS app."
  },
  {
    title: "UI/UX Design",
    description: "Our designers create sleek, user-centric interfaces ensuring seamless experiences across all Apple devices."
  },
  {
    title: "App Development",
    description: "We leverage Swift and Objective-C to build high-performance, feature-rich iOS applications."
  },
  {
    title: "Testing & Quality Assurance",
    description: "Comprehensive testing guarantees your app is bug-free, secure, and optimized for the App Store."
  },
  {
    title: "Launch & Support",
    description: "We ensure a smooth App Store launch and provide ongoing support to keep your app updated and competitive."
  }
];

export function Process() {
  return (
    <section className="bg-[#5B1DAF] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-white uppercase tracking-wider">PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Our iOS App Development Process
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            From idea to launch, we follow a streamlined process to create high-impact iOS applications tailored for your business.
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
