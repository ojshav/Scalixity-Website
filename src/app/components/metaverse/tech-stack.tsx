"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const techStack = [
  {
    category: "Metaverse Development Frameworks",
    technologies: [
      { name: "Three.js", logo: "/tech/threejs.svg" },
      { name: "Babylon.js", logo: "/tech/babylonjs.svg" },
      { name: "Unity", logo: "/tech/unity.svg" },
      { name: "Unreal Engine", logo: "/tech/unreal.svg" }
    ]
  },
  {
    category: "Blockchain & Web3 Tools",
    technologies: [
      { name: "Ethereum", logo: "/tech/ethereum.svg" },
      { name: "Solidity", logo: "/tech/solidity.svg" },
      { name: "Polygon", logo: "/tech/polygon.svg" },
      { name: "IPFS", logo: "/tech/ipfs.svg" }
    ]
  },
  {
    category: "AI & ML Integration",
    technologies: [
      { name: "OpenAI GPT", logo: "/tech/openai.svg" },
      { name: "Stable Diffusion", logo: "/tech/stablediffusion.svg" },
      { name: "TensorFlow", logo: "/tech/tensorflow.svg" },
      { name: "PyTorch", logo: "/tech/pytorch.svg" }
    ]
  },
  {
    category: "3D Asset Creation & Rendering",
    technologies: [
      { name: "Blender", logo: "/tech/blender.svg" },
      { name: "Maya", logo: "/tech/maya.svg" },
      { name: "Cinema 4D", logo: "/tech/cinema4d.svg" }
    ]
  }
];

export function TechStack() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">TECH STACK</span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            Technologies Powering Our Metaverse Development
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
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
              className="bg-card rounded-xl border border-border p-6"
            >
              <h3 className="text-lg font-semibold text-foreground mb-6">{stack.category}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {stack.technologies.map((tech, idx) => (
                  <div key={idx} className="flex flex-col items-center justify-center">
                    <div className="w-16 h-16 relative mb-2">
                      <Image
                        src={tech.logo}
                        alt={tech.name}
                        width={64}
                        height={64}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm text-muted-foreground text-center">{tech.name}</span>
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
