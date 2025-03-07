"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Hire Prompt Engineers",
    description:
      "Improve your users’ AI experience with our prompt engineering solutions. Our skilled prompt engineers customize prompts for various AI models and have in-depth knowledge of NLP and NLG. Let our team provide your users with a seamless and efficient AI experience.",
  },
  {
    title: "AI Development Solution",
    description:
      "We work with clients to understand their requirements and develop customized AI models. Our expert prompt engineers can fine-tune and tailor prompts for various AI models and deliver a seamless user experience.",
  },
  {
    title: "Testing & Deployment",
    description:
      "Our experienced prompt engineers play a vital role in ensuring the success of an AI model. We conduct rigorous testing of AI models to identify and resolve any issues before deployment. Our team of prompt engineers works closely with the AI engineering team to deploy AI models effectively, ensuring that they meet clients’ requirements.",
  },
  {
    title: "Monitor & Analysis",
    description:
      "Through regular monitoring and analysis, our prompt engineers ensure that the developed AI models continue to meet the evolving needs of users and stakeholders. We use our technical expertise and knowledge of AI technologies to continuously improve model performance.",
  },
  {
    title: "Support & Optimization",
    description:
      "We work closely with clients to create customized solutions that ensure seamless performance and meet their specific needs. By leveraging our expertise in integrating generative AI models, we help clients maximize the value of their generative AI models and achieve outstanding results.",
  },
];

export function WhatWeOffer() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      {/* Lavender Background */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-gray-700 uppercase tracking-wider">
            WHAT WE OFFER
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            Hire Prompt Engineers to Unleash the Full Potential of Your Generative AI Models
          </h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            Our expert team specializes in AI development, testing, deployment, and optimization to ensure high-performance AI solutions.
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
              className="bg-[#F3F1EB] p-8 rounded-xl border border-gray-700 hover:border-gray-900 transition-colors"
            >
              {/* Beige Cards with Light Black Border */}
              <h3 className="text-xl font-bold text-black mb-4">
                {service.title}
              </h3>
              <p className="text-gray-800 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
