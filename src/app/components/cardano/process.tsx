"use client";

import { motion } from 'framer-motion';

const processSteps = [
  {
    title: "Cardano Strategy & Planning",
    description: "We conduct an in-depth analysis of your business requirements and blockchain goals, defining clear objectives and creating a comprehensive roadmap to guide the development of a secure, scalable Cardano-based solution."
  },
  {
    title: "Smart Contract & DApp Prototyping",
    description: "We design and develop prototypes and MVPs on the Cardano blockchain to validate core functionalities, test smart contract security, and ensure the feasibility of decentralized applications before full-scale deployment."
  },
  {
    title: "Blockchain Development & Integration",
    description: "Our experts build and integrate customized Cardano smart contracts, decentralized applications (DApps), and blockchain solutions, ensuring security, transparency, and interoperability within your ecosystem."
  },
  {
    title: "Security Audits & Performance Optimization",
    description: "We perform rigorous security audits to identify and mitigate vulnerabilities, optimize transaction efficiency, and implement best practices for compliance with Cardano blockchain standards."
  },
  {
    title: "Deployment & Network Launch",
    description: "We seamlessly deploy your Cardano applications on the mainnet or testnet, ensuring a smooth transition with scalable infrastructure, robust functionality, and real-world usability."
  },
  {
    title: "Continuous Improvement & Scaling",
    description: "Post-deployment, we monitor blockchain performance, enhance features based on user feedback, and implement scalability solutions to support long-term growth and evolving market demands."
  }
];

export function Process() {
  return (
    <section className="py-24" style={{ backgroundColor: '#A8B2E7' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-black">OUR PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            Cardano App Development Process
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Our structured approach ensures secure, scalable, and efficient Cardano blockchain solutions tailored to your needs.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
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
                {/* Timeline Dot */}
                <div 
                  className="absolute left-0 top-2 w-[30px] h-[30px] rounded-full flex items-center justify-center border-2 border-black"
                  style={{ backgroundColor: '#F3F1EB' }}
                >
                  <div className="w-2 h-2 bg-black rounded-full" />
                </div>
                
                <div 
                  className="p-8 rounded-xl border-2 border-black"
                  style={{ backgroundColor: '#F3F1EB', color: 'black' }}
                >
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="leading-relaxed">{step.description}</p>
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
