"use client";

import { motion } from 'framer-motion'

const processSteps = [
  {
    title: "Consultation & Strategy Development",
    description: "We analyze your requirements, identify key objectives, and create a strategic roadmap for your decentralized application (DApp)."
  },
  {
    title: "Smart Contract Design & Prototyping",
    description: "We develop secure and efficient smart contracts tailored to your DApp's functionality, ensuring proper execution and validation."
  },
  {
    title: "Decentralized Application Development",
    description: "Our experts build user-friendly, scalable DApps with seamless blockchain integration for optimal performance and security."
  },
  {
    title: "Security Audits & Testing",
    description: "We conduct comprehensive security audits, smart contract testing, and performance optimization to safeguard your DApp."
  },
  {
    title: "Deployment & Network Integration",
    description: "We deploy your DApp on the appropriate blockchain network, ensuring smooth operation and full compatibility."
  },
  {
    title: "Post-Launch Support & Scaling",
    description: "We provide ongoing maintenance, feature enhancements, and scalability solutions to ensure long-term success."
  }
]

export function Process() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">OUR PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            DApp Development Process
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Our streamlined development process ensures secure, scalable, and efficient decentralized applications tailored to your needs.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-black/20" />

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
  )
}

export default Process;
