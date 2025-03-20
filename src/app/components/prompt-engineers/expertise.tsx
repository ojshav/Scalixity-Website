"use client";

import { motion } from "framer-motion";

const expertiseAreas = [
  {
    title: "Machine Learning",
    description:
      "Our ChatGPT developers create engaging bots that carry out standard, principles-based procedures via the user interface, simulating human contact with digital programs. Accord.Net, Keras, Apache, and several other technologies are part of our core stack."
  },
  {
    title: "NLP – Natural Learning",
    description:
      "We develop Natural Language Processing (NLP) applications that assess structured and semi-structured content, including search queries, mined web data, business data repositories, and audio sources, to identify emerging patterns, deliver operational insights, and do predictive analytics."
  },
  {
    title: "Deep Learning (DL) Development",
    description:
      "We build ML-based DL technologies to build cognitive BI technology frameworks that recognize specific ideas throughout processing processes. We also delve through complex data to reveal various opportunities and achieve precise perfection using ongoing deep-learning algorithms."
  },
  {
    title: "RPA – Robotic Process",
    description:
      "We integrate robotic process automation (RPA) applications to enhance workflows and provide a company with more scalability and flexibility. These apps can extract structured and semi-structured data from documents, copy and paste data, move files and folders, scrape websites, perform calculations, and more."
  }
];

export function Expertise() {
  return (
    <section className="bg-[#A8B2E7] py-24"> {/* Lavender background for the section */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            CORE EXPERTISE
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Our prompt engineers’ expertise to build flawless AI models
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:border-gray-700 transition-colors"
            >
              <h3 className="text-xl font-bold text-black mb-4">{area.title}</h3>
              <p className="text-black">{area.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
