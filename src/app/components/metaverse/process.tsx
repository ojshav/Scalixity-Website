"use client";

import { motion } from 'framer-motion';

const processSteps = [
  {
    title: "Immersive Strategy & Conceptualization",
    description: "We begin by understanding your vision and objectives within the metaverse landscape. Our team analyzes market trends, user behaviors, and cutting-edge technologies to craft a strategy tailored to your business needs."
  },
  {
    title: "Prototyping & Virtual Environment Development",
    description: "Using state-of-the-art 3D modeling and immersive technology, we create prototypes and virtual spaces. This phase includes designing interactive experiences, testing engagement mechanics, and refining elements for seamless integration."
  },
  {
    title: "Blockchain & Digital Asset Integration",
    description: "To ensure security, transparency, and interoperability, we implement blockchain solutions, smart contracts, and NFTs. This step enhances digital ownership and monetization opportunities in the metaverse."
  },
  {
    title: "Deployment & Optimization",
    description: "Once the virtual experience is finalized, we deploy it on metaverse platforms, ensuring optimal performance and scalability. Our team continuously monitors and improves the ecosystem to enhance user engagement."
  }
];

export function Process() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            Our Metaverse Development Process
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Our approach blends innovation with technology, transforming your vision into a fully immersive metaverse experience. From strategy to deployment, we ensure seamless execution at every stage.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-black" /> {/* Black vertical line */}

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
                <div className="absolute left-0 top-2 w-[30px] h-[30px] bg-black rounded-full flex items-center justify-center"> {/* Black dot */}
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
  );
}

export default Process;
