"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Tailored Generative AI Software Creation",
    description:
      "We use techniques like imputation, outlier detection, and data normalization to preprocess data effectively, ensuring AI models operate efficiently. Our AI engineers enhance models through feature engineering based on domain knowledge and experimentation.",
  },
  {
    title: "Expertise in Generative AI Advisory",
    description:
      "We begin with an exhaustive examination of current systems, pinpointing ideal solutions with precision. Our professional guidance ensures flawless incorporation and deployment of Generative AI technologies, maximizing their advantages for your business.",
  },
  {
    title: "Integration of Generative AI",
    description:
      "We refine operational efficiencies by seamlessly integrating chosen Generative AI applications with existing operations. Our expert team carefully assesses business needs and recommends the most suitable AI tools for smooth implementation.",
  },
  {
    title: "Continual Sustenance and Assistance",
    description:
      "Beyond integration, we provide ongoing support and maintenance to ensure maximum ROI. Our proactive approach includes regular monitoring, performance checks, and rapid issue resolution for seamless AI-driven operations.",
  },
];

export function WhatWeOffer() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-black">
            WHAT WE OFFER
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            Generative AI Integration Services We Offer
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Elevate your business operations with cutting-edge AI solutions, tailored to fit specific needs and challenges.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:border-primary/50 transition-colors relative flex items-start gap-5"
            >
              <ArrowRight className="w-16 h-16 text-black" />
              <div>
                <h3 className="text-xl font-bold text-black mb-2">
                  {service.title}
                </h3>
                <p className="text-black leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
