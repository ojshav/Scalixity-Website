"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const capabilities = [
  {
    title: "User-Centered UI/UX Design",
    description: "We create intuitive and visually appealing app interfaces that enhance user engagement and satisfaction.",
  },
  {
    title: "Cross-Platform Compatibility",
    description: "Our designs ensure seamless experiences across iOS, Android, and other mobile platforms.",
  },
  {
    title: "Wireframing & Prototyping",
    description: "We provide detailed wireframes and interactive prototypes to validate concepts before development.",
  },
  {
    title: "Brand Consistency",
    description: "We align mobile app designs with your brand identity, ensuring consistency across all touchpoints.",
  },
  {
    title: "Accessibility & Inclusivity",
    description: "Our designs follow accessibility guidelines, making apps user-friendly for everyone, including people with disabilities.",
  },
  {
    title: "Performance-Optimized UI",
    description: "We design lightweight, high-performance interfaces that offer fast load times and smooth interactions.",
  },
];

export function Capabilities() {
  return (
    <section className="relative bg-[#A8B2E7] py-24 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm text-black uppercase tracking-wider"
          >
            CAPABILITIES
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-extrabold text-black mt-4 mb-6"
          >
            Our Capabilities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-black max-w-3xl mx-auto"
          >
            From wireframing to final UI, our expertise ensures a seamless, engaging mobile app experience.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black transition-all shadow-lg"
            >
              <div className="flex items-start gap-4">
                <CheckCircle className="w-8 h-8 text-black flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    {capability.title}
                  </h3>
                  <p className="text-black">{capability.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Capabilities;
