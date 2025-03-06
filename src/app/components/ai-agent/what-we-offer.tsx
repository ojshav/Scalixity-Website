"use client"
import { motion } from 'framer-motion';

const services = [
  {
    title: "Custom AI Agent Design and Seamless Integration",
    description:
      "We specialize in designing AI agents that are fully customized to meet your operational goals and user requirements. Our team ensures seamless integration with your existing systems and technologies, so your workflows remain uninterrupted while maximizing the benefits of AI.",
  },
  {
    title: "Task Automation and Operational Optimization",
    description:
      "The AI agents we engineer can handle repetitive, time-consuming tasks, allowing your team to focus on more strategic initiatives. We also provide ongoing performance optimization, ensuring these agents adapt to changing business needs and deliver continuous value.",
  },
  {
    title: "Real-Time Data Processing and Decision Support",
    description:
      "We equip AI agents with powerful data processing capabilities, allowing for real-time large dataset analysis. These agents offer valuable insights and support decision-making processes, helping businesses stay agile in fast-paced environments.",
  },
  {
    title: "Intelligent Customer Interaction and Engagement",
    description:
      "We build AI agents to enhance customer interactions through intelligent and human-like responses. They efficiently manage customer inquiries, provide personalized experiences, and strengthen relationships while reducing response times.",
  },
  {
    title: "Security, Compliance, and Continuous Support",
    description:
      "We build robust protections into every solution, ensuring that your AI agents comply with industry regulations and safeguard sensitive data. In addition to security, we offer continuous support and regular updates, keeping the AI agents optimized to meet new challenges while maintaining peak performance over time.",
  },
];

export function WhatWeOffer() {
  return (
    <section className="bg-black py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-gray-400 uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Our AI Agent Development Services
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We empower businesses with intelligent AI agents designed to automate tasks, enhance decision-making, and deliver seamless customer interactions while ensuring security and compliance.
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
              className="bg-gray-900 p-8 rounded-xl border border-gray-700 hover:border-purple-500 transition-colors"
            >
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
