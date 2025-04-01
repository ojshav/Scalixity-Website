"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Evaluating opportunities for Generative AI",
    description: "Our specialty is figuring out how to integrate Generative AI into the commercial environment. We conduct extensive research, look for potential game-changers, and perform reality checks to identify the most impactful AI strategies."
  },
  {
    title: "Selecting the right Generative AI technology",
    description: "We remove the guesswork from choosing the best Generative AI technology. By evaluating each tool's capabilities and aligning them with your business needs, we ensure seamless integration and optimal performance."
  },
  {
    title: "Integrating Generative AI",
    description: "We introduce Generative AI applications with precision, embedding them into existing workflows. Our focus is on maintaining operational harmony while maximizing AI's transformative potential."
  },
  {
    title: "Health Checks & Tune-Ups for Generative AI",
    description: "We continuously monitor and fine-tune your AI systems. Our goal is to ensure consistent performance by making proactive adjustments and guaranteeing reliable AI-driven results."
  },
  {
    title: "Privacy & compliance protection in Generative AI",
    description: "Data privacy is a top priority. Leveraging our expertise in GDPR, CCPA, and HIPAA, we safeguard your AI systems—minimizing risks while preserving data integrity."
  },
  {
    title: "Generative AI Instruction & Assistance",
    description: "Empower your team with AI knowledge. Our training programs equip individuals with the skills needed to harness Generative AI effectively. Plus, we provide ongoing support for smooth AI adoption."
  }
];

export function WhatWeOffer() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-5xl font-bold text-black mt-4 mb-6">
            Our Generative AI Consulting Services
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Gain a competitive edge by leveraging the transformative power of AI. From strategy to seamless integration, we guide your AI journey every step of the way.
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
              className="bg-[#F3F1EB] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-2 border-black"
            >
              <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
              <p className="text-lg text-black leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
