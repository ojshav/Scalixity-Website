"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const reasons = [
  {
    title: "Expertise in AI Innovation",
    description:
      "Scalixity leads AI advancements, crafting cutting-edge solutions that drive business transformation. Our specialists stay ahead with the latest AI models, ensuring precision and efficiency.",
  },
  {
    title: "Tailored AI Solutions",
    description:
      "Every business is unique, and so are our AI solutions. We align AI strategies with your goals, from automation to data-driven insights, ensuring maximum impact.",
  },
  {
    title: "End-to-End AI Support",
    description:
      "From strategy to deployment, we offer full-cycle AI support. Our team ensures smooth integration, optimization, and ongoing improvements for long-term success.",
  },
  {
    title: "Commitment to Ethical AI",
    description:
      "We prioritize fairness, transparency, and data security in AI solutions, ensuring responsible AI implementation that fosters trust and long-term growth.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">WHY US</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Why Choose Hedra for AI Solutions
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Partner with Hedra to harness AI’s full potential. Our expertise, innovation, and ethical approach ensure AI solutions that transform your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:border-black transition-colors"
            >
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-black">{reason.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
