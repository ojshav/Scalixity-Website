"use client";

import { motion } from 'framer-motion';

const processSteps = [
  {
    title: "NFT Project Discovery & Strategy",
    description: "We start by understanding your vision and business goals, identifying how NFTs can elevate your brand, and crafting a tailored strategy for your unique digital asset ecosystem."
  },
  {
    title: "Concept Design & Prototyping",
    description: "Our team designs initial NFT concepts and prototypes, ensuring the visual appeal, functionality, and user experience align with your brand identity and target audience."
  },
  {
    title: "Smart Contract Development",
    description: "We develop secure, transparent, and efficient smart contracts for minting, trading, and managing NFTs, ensuring seamless blockchain interactions and robust asset ownership."
  },
  {
    title: "Platform Development & Integration",
    description: "We build intuitive, user-friendly NFT marketplaces or integrate NFT capabilities into existing platforms, supporting smooth transactions and real-time asset management."
  },
  {
    title: "Testing & Security Audits",
    description: "We conduct comprehensive testing and rigorous security audits to identify vulnerabilities, optimize performance, and ensure compliance with blockchain best practices."
  },
  {
    title: "Launch & Post-Deployment Support",
    description: "We guide your NFT platform's mainnet launch, monitor its performance, and offer continuous improvements to enhance features and scalability."
  }
];

export function Process() {
  return (
    <section className="bg-[#A8B2E7] py-24"> {/* Lavender background for the section */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider"> {/* Black text */}
            OUR PROCESS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6"> {/* Black text */}
            NFT Development Process
          </h2>
          <p className="text-xl text-black/80 max-w-3xl mx-auto"> {/* Black text */}
            Our structured NFT development process ensures secure, scalable, and innovative digital asset solutions for your business.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-black/20" /> {/* Black border line */}

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
                <div className="absolute left-0 top-2 w-[30px] h-[30px] bg-black rounded-full flex items-center justify-center"> {/* Black icon background */}
                  <div className="w-2 h-2 bg-[#A8B2E7] rounded-full" /> {/* Lavender icon */}
                </div>

                <div className="bg-[#F3F1EB] p-8 rounded-xl border border-black"> {/* Soft beige box with black border */}
                  <h3 className="text-xl font-bold text-black mb-4"> {/* Black text */}
                    {step.title}
                  </h3>
                  <p className="text-black/80"> {/* Black text */}
                    {step.description}
                  </p>
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
