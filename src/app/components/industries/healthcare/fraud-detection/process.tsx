"use client";

import { motion } from 'framer-motion';

const processSteps = [
  {
    title: "Risk Assessment & Business Analysis",
    description: "We start by identifying vulnerabilities, analyzing business workflows, and understanding fraud patterns specific to your industry."
  },
  {
    title: "Data Collection & Preprocessing",
    description: "Our team gathers historical data, cleanses it, and prepares it for AI model training — ensuring high-quality inputs for precise fraud detection."
  },
  {
    title: "AI Model Development",
    description: "We design and train fraud detection models using advanced algorithms — anomaly detection, predictive modeling, and behavior analysis."
  },
  {
    title: "System Integration",
    description: "Seamless integration of AI models into your existing security infrastructure, payment gateways, CRMs, and real-time monitoring systems."
  },
  {
    title: "Continuous Monitoring & Optimization",
    description: "We implement real-time monitoring, adaptive learning, and performance tracking to stay ahead of evolving fraud tactics."
  }
];

export function Process() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            Our Fraud Detection & Security Process
          </h2>
          <p className="text-xl text-black/80 max-w-3xl mx-auto">
            From risk assessment to real-time monitoring, we build AI-driven security systems to protect your business from fraud and cyber threats.
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
                  <div className="w-2 h-2 bg-[#A8B2E7] rounded-full" />
                </div>
                
                <div className="bg-white p-8 rounded-xl border border-black">
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
