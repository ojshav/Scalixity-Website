"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const techStack = {
  "Cardano Smart Contract Development": [
    { name: "Plutus", logo: "/images/tech/plutus.svg" },
    { name: "Marlowe", logo: "/images/tech/marlowe.svg" }
  ],
  "Blockchain Frameworks": [
    { name: "Cardano Node", logo: "/images/tech/cardano-node.svg" },
    { name: "Cardano CLI", logo: "/images/tech/cardano-cli.svg" }
  ],
  "Decentralized Application (DApp) Development": [
    { name: "Haskell", logo: "/images/tech/haskell.svg" },
    { name: "JavaScript", logo: "/images/tech/javascript.svg" },
    { name: "TypeScript", logo: "/images/tech/typescript.svg" }
  ],
  "Wallet & API Integrations": [
    { name: "Cardano Wallet API", logo: "/images/tech/cardano-wallet.svg" },
    { name: "Blockfrost API", logo: "/images/tech/blockfrost.svg" }
  ]
};

export function TechStack() {
  return (
    <section className="py-24" style={{ backgroundColor: '#A8B2E7' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-black">CARDANO TECH STACK</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Our Cardano Technology Stack
          </h2>
          <p className="text-lg text-black max-w-3xl mx-auto">
            We leverage the most advanced Cardano technologies to build secure, scalable, and high-performance blockchain applications.
          </p>
        </div>

        <div className="grid gap-8">
          {Object.entries(techStack).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl border-2 border-black p-6"
              style={{ backgroundColor: '#F3F1EB', color: 'black' }}
            >
              <h3 className="text-lg font-semibold mb-6">{category}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {items.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center justify-center">
                    <div className="w-16 h-16 relative mb-2">
                      <Image
                        src={item.logo}
                        alt={item.name}
                        fill
                        className="object-contain filter invert"
                      />
                    </div>
                    <span className="text-sm text-black text-center">{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
