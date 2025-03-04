"use client";

import { motion } from 'framer-motion';

const processSteps = [
  {
    title: "Project Discovery & Planning",
    description: "We start by understanding your business goals and user requirements, mapping out a strategic plan to build a powerful Android application."
  },
  {
    title: "UI/UX Design & Prototyping",
    description: "Our design team crafts intuitive and engaging app interfaces, ensuring seamless navigation and user experience tailored to your audience."
  },
  {
    title: "Android App Development",
    description: "Leveraging the latest Android technologies, we develop scalable, high-performance apps with clean architecture and robust functionality."
  },
  {
    title: "Testing & Quality Assurance",
    description: "We conduct thorough testing — including unit, integration, and UI tests — to guarantee app stability, security, and flawless performance."
  },
  {
    title: "Deployment & Post-Launch Support",
    description: "From app store deployment to continuous monitoring, we ensure smooth rollouts and offer ongoing support to optimize app performance."
  }
];

export function Process() {
  return (
    <section className="bg-gradient-to-r from-[#6a0dad] to-[#4c1d95] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-white uppercase tracking-wider">PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Our Android App Development Process
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            From concept to launch, we build cutting-edge Android apps designed for performance, scalability, and user satisfaction.
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
                  <div className="w-2 h-2 bg-[#6a0dad] rounded-full" />
                </div>

                <div className="bg-white p-8 rounded-xl border border-white/20">
                  <h3 className="text-xl font-bold text-[#6a0dad] mb-4">{step.title}</h3>
                  <p className="text-[#6a0dad]/80 leading-relaxed">{step.description}</p>
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
