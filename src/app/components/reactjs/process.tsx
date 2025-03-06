"use client";

import { motion } from 'framer-motion';

const processSteps = [
  {
    title: "Project Discovery & Planning",
    description: "We begin by understanding your business needs and defining the project scope, ensuring your React.js application is designed with clear goals and requirements."
  },
  {
    title: "UI/UX Design & Prototyping",
    description: "Our designers create interactive prototypes and user-friendly interfaces, focusing on seamless user experiences and modern design principles tailored to your brand."
  },
  {
    title: "React.js Development & Component Creation",
    description: "We build scalable, modular React components using best practices, ensuring clean code architecture and dynamic functionality."
  },
  {
    title: "Testing & Quality Assurance",
    description: "Comprehensive testing, including unit, integration, and end-to-end tests, to catch bugs early and ensure high-performance React.js applications."
  },
  {
    title: "Deployment & Optimization",
    description: "Seamless deployment of your React.js app with continuous monitoring, ensuring fast load times, SEO optimization, and responsive design across devices."
  }
];

export function Process() {
  return (
    <section className="bg-[#5B1DAF] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-white uppercase tracking-wider">PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Our React.js Development Process
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            From concept to deployment, we craft high-performance React.js applications tailored to your business goals.
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
