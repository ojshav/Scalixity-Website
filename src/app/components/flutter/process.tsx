"use client";

import { motion } from 'framer-motion';

const processSteps = [
  {
    title: "Project Discovery & Planning",
    description: "We start by understanding your app idea, target audience, and business goals, laying the foundation for a clear Flutter development roadmap."
  },
  {
    title: "UI/UX Design & Prototyping",
    description: "Our design team crafts beautiful, adaptive interfaces with interactive prototypes that align seamlessly with Flutter's cross-platform capabilities."
  },
  {
    title: "Flutter App Development",
    description: "We build high-performance, natively compiled applications using Flutter’s widget tree, ensuring a smooth user experience across iOS and Android."
  },
  {
    title: "Testing & Quality Assurance",
    description: "Rigorous testing for responsiveness, performance, and functionality, including unit and integration tests, to deliver flawless apps."
  },
  {
    title: "Deployment & Optimization",
    description: "We deploy your Flutter app on both Google Play Store and Apple App Store, ensuring optimal performance and post-launch monitoring."
  }
];

export function Process() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            Our Flutter App Development Process
          </h2>
          <p className="text-xl text-black/80 max-w-3xl mx-auto">
            From concept to cross-platform deployment, we build stunning Flutter apps tailored to your business vision.
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

                <div className="bg-[#F3F1EB] p-8 rounded-xl border-2 border-black shadow-md">
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
