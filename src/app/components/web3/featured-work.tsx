"use client"
import { motion } from 'framer-motion';

const projects = [
  {
    company: "BlockSphere",
    title: "Decentralized Finance Solutions",
    description: "We partnered with BlockSphere to build DeFi platforms that offer secure and transparent financial services through smart contracts. Users can lend, borrow, and trade assets with ease.",
    image: "/images/tech/bloc.svg",
    features: [
      "Smart contract-powered lending protocols",
      "Decentralized exchanges with real-time trading",
      "Secure blockchain wallets for asset management",
      "Integration with multiple blockchains"
    ]
  },
  {
    company: "CryptoVault",
    title: "Next-Gen NFT Marketplace",
    description: "We developed an advanced NFT marketplace for CryptoVault, enabling artists and creators to mint, showcase, and trade their digital assets effortlessly.",
    image: "/images/icons/marketing.svg",
    features: [
      "Gas-optimized smart contracts for minting",
      "Interactive 3D galleries for showcasing NFTs",
      "Cross-chain support for wider reach",
      "Robust security with blockchain audits"
    ]
  }
];

export function FeaturedWork() {
  return (
    <section className="bg-[#6510A9] py-24 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Our Web3 App Development Showcase</h2>
          <p className="text-lg mt-4 max-w-2xl mx-auto">Explore how We&apos;ve transformed ideas into decentralized solutions using blockchain, AI, and smart contracts.</p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col md:flex-row items-center gap-8"
            >
              <div className="flex-1">
                <span className="text-lg text-white/70">— {project.company}</span>
                <h3 className="text-2xl font-bold mt-2 mb-4">{project.title}</h3>
                <p className="mb-6 text-white/80">{project.description}</p>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedWork;

