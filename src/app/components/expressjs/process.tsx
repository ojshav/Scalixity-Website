"use client";

import { motion } from 'framer-motion';

const processSteps = [
  {
    title: "Project Discovery & Planning",
    description: "We gather your requirements and plan the structure of your Express.js backend, focusing on scalability and efficiency."
  },
  {
    title: "API Design & Routing",
    description: "Our team designs RESTful APIs and implements routing, ensuring seamless communication between client and server."
  },
  {
    title: "Middleware Integration",
    description: "We use Express middleware for authentication, logging, error handling, and request processing to enhance functionality."
  },
  {
    title: "Database Connectivity",
    description: "We integrate databases like MongoDB, PostgreSQL, or MySQL, ensuring smooth data flow and optimized queries."
  },
  {
    title: "Testing & Debugging",
    description: "Rigorous testing — unit, integration, and performance — to identify bugs and ensure a secure, high-performing backend."
  },
  {
    title: "Deployment & Optimization",
    description: "Your Express.js app is deployed on cloud platforms (AWS, Vercel), optimized for speed, security, and scalability."
  }
];

export function Process() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            Our Express.js Development Process
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            We build fast, scalable, and secure Express.js applications, from API design to deployment.
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
                  <div className="w-2 h-2 bg-[#F3F1EB] rounded-full" />
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
