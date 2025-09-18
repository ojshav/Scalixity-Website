"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Enterprise Application Strategy & Consulting",
    description: "We help organizations define a clear roadmap for enterprise app development, ensuring alignment with business goals, scalability, and security.",
  },
  {
    title: "Custom Enterprise Software Development",
    description: "Our experts design and build tailored enterprise applications that enhance productivity, streamline operations, and integrate seamlessly with existing systems.",
  },
  {
    title: "Cloud-Native Enterprise Solutions",
    description: "We develop cloud-native applications leveraging modern architectures like microservices and serverless to ensure scalability and efficiency.",
  },
  {
    title: "AI & Data-Driven Enterprise Solutions",
    description: "Harness the power of AI and data analytics to drive intelligent automation, predictive insights, and improved decision-making across your enterprise.",
  },
  {
    title: "Enterprise Security & Compliance",
    description: "We ensure enterprise applications are built with robust security frameworks and adhere to industry regulations to protect sensitive business data.",
  },
  {
    title: "Enterprise Application Modernization",
    description: "Revamp legacy applications with modern technologies, cloud adoption, and optimized performance to keep up with the evolving business landscape.",
  },
];

export function WhatWeOfferEnterprise() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black/80 uppercase tracking-wider">
            WHAT WE OFFER
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            Enterprise App Development Services
          </h2>
          <p className="text-xl text-black/80 max-w-3xl mx-auto">
            We specialize in building scalable, secure, and high-performance
            enterprise applications that drive business growth and innovation.
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
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black shadow-lg hover:shadow-xl transition-all"
            >
              <h3 className="text-xl font-bold text-black mb-4">
                {service.title}
              </h3>
              <p className="text-black/80 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeOfferEnterprise;
