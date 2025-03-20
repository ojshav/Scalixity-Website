"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Comprehensive App Strategy",
    description: "We analyze your vision, market trends, and user needs to craft a tailored blueprint that ensures a successful app development journey."
  },
  {
    title: "Wireframing & UI/UX Design",
    description: "Our detailed wireframes and UX planning create an intuitive and visually appealing app experience, enhancing user engagement."
  },
  {
    title: "Technical Architecture & Feasibility",
    description: "We define a scalable and efficient architecture, selecting the best tech stack to ensure optimal performance and future growth."
  },
  {
    title: "Prototyping & Validation",
    description: "We create interactive prototypes that allow stakeholders to visualize and validate the app concept before development begins."
  },
  {
    title: "Risk Assessment & Development Roadmap",
    description: "We identify potential challenges early and provide a structured roadmap to mitigate risks, optimize development, and reduce costs."
  },
  {
    title: "End-to-End Documentation",
    description: "From requirement analysis to project timelines, we deliver detailed documentation that guides your team through seamless execution."
  }
];

export function WhatWeOffer() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            App Blueprint Services
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Our structured blueprinting process ensures a well-defined, efficient, and risk-free approach to app development.
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
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:border-primary/50 transition-colors"
            >
              <h3 className="text-xl font-bold text-black mb-4">{service.title}</h3>
              <p className="text-black leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
