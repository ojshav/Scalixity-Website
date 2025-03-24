"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const techStack = [
  {
    category: "Metaverse Development Frameworks",
    technologies: [
      { name: "Three.js", logo: "/images/tech/threejs.webp" },
      { name: "Babylon.js", logo: "/images/tech/babylons.webp" },
      { name: "Unity", logo: "/images/tech/unity.webp" },
      { name: "Unreal Engine", logo: "/images/tech/unreal.webp" }
    ]
  },
  {
    category: "Blockchain & Web3 Tools",
    technologies: [
      { name: "Ethereum", logo: "/images/tech/ethereum.webp" },
      { name: "Solidity", logo: "/images/tech/solidity.webp" },
      { name: "Polygon", logo: "/images/tech/polygon.webp" },
      { name: "IPFS", logo: "/images/tech/ipfs.webp" }
    ]
  },
  {
    category: "AI & ML Integration",
    technologies: [
      { name: "OpenAI GPT", logo: "/images/tech/gpt3.svg" },
      { name: "Stable Diffusion", logo: "/images/tech/gpt-4-turbo.svg" },
      { name: "TensorFlow", logo: "/images/tech/tensorflow.svg" },
      { name: "PyTorch", logo: "/images/tech/pytorch.svg" }
    ]
  },
  {
    category: "3D Asset Creation & Rendering",
    technologies: [
      { name: "Blender", logo: "/images/tech/blender.webp" },
      { name: "Maya", logo: "/images/tech/maya.webp" },
      { name: "Cinema 4D", logo: "/images/tech/cinema4d.webp" }
    ]
  }
];

export function TechStack() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">TECH STACK</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Technologies Powering Our Metaverse Development
          </h2>
          <p className="text-lg text-black max-w-3xl mx-auto">
            We leverage the latest frameworks, AI models, and blockchain tools to create cutting-edge metaverse experiences.
          </p>
        </div>

        <div className="grid gap-8">
          {techStack.map((stack, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] rounded-xl border border-black p-6"
            >
              <h3 className="text-lg font-semibold text-black mb-6">{stack.category}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {stack.technologies.map((tech, idx) => (
                  <div key={idx} className="flex flex-col items-center justify-center">
                    <div className="w-16 h-16 relative mb-2">
                      <Image
                        src={tech.logo}
                        alt={tech.name}
                        width={64}
                        height={64}
                        className="object-contain border border-black"  
                      />
                    </div>
                    <span className="text-sm text-black text-center">{tech.name}</span> {/* Text color changed to black */}
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
