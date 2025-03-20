"use client";

import { motion } from 'framer-motion';

const processSteps = [
  {
    title: "Discovery & Requirement Gathering",
    description: "We collaborate to understand your business needs, defining the scope and technical requirements for your Node.js application."
  },
  {
    title: "Architecture Design & Planning",
    description: "Our team designs scalable, modular architecture ensuring high performance, secure APIs, and seamless database integration."
  },
  {
    title: "Backend Development & API Integration",
    description: "We build robust, fast server-side logic with Node.js and Express, integrating databases, authentication, and third-party APIs."
  },
  {
    title: "Testing & Quality Assurance",
    description: "We perform unit, integration, and load testing to guarantee your Node.js app is secure, fast, and bug-free."
  },
  {
    title: "Deployment & Optimization",
    description: "Your app is deployed on cloud platforms like AWS or Vercel, optimized for speed, security, and scalability."
  }
];

export function Process() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            Our Node.js Development Process
          </h2>
          <p className="text-xl text-black/80 max-w-3xl mx-auto">
            From concept to deployment, we craft high-performance Node.js applications tailored to your business needs.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-black/30" />

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
                  <div className="w-2 h-2 bg-[#5B1DAF] rounded-full" />
                </div>
                
                <div className="bg-[#F3F1EB] p-8 rounded-xl border border-black">
                  <h3 className="text-xl font-bold text-black mb-4">{step.title}</h3>
                  <p className="text-black/80 leading-relaxed">{step.description}</p>
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
