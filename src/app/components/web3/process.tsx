"use client";

import { motion } from 'framer-motion';

const processSteps = [
  {
    title: "Consultation & Strategy Formation",
    description: "We kick off by understanding your Web3 goals and aligning them with blockchain technology. Our team crafts a tailored strategy for seamless decentralized application (dApp) development."
  },
  {
    title: "Design & Prototyping",
    description: "Creating intuitive user interfaces and robust smart contract prototypes, ensuring a smooth user experience while leveraging blockchain capabilities."
  },
  {
    title: "Smart Contract Development & Integration",
    description: "Implementing secure, transparent smart contracts and integrating them into your Web3 applications for automated, trustless transactions."
  },
  {
    title: "Testing & Security Audits",
    description: "Rigorous testing and blockchain security audits to identify vulnerabilities, ensuring a stable and secure decentralized ecosystem."
  },
  {
    title: "Deployment & Optimization",
    description: "Launching your Web3 application on blockchain networks with ongoing monitoring, ensuring scalability and performance optimization."
  }
];

export function Process() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            Our Web3 App Development Process
          </h2>
          <p className="text-xl text-black/80 max-w-3xl mx-auto">
            From strategic planning to blockchain integration, we build powerful, secure Web3 applications tailored to your needs.
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
