"use client";

import { motion } from "framer-motion";

const offerings = [
  {
    title: "Intelligent Code Suggestions",
    description: "Boost developer productivity with AI-driven code completions, refactoring suggestions, and context-aware recommendations."
  },
  {
    title: "Automated Documentation Generation",
    description: "Generate accurate, real-time documentation for codebases, APIs, and workflows, saving time and ensuring clarity."
  },
  {
    title: "Task & Workflow Automation",
    description: "Enable AI to streamline repetitive tasks, from CI/CD pipeline management to automated testing and bug triaging."
  },
  {
    title: "Contextual Knowledge Retrieval",
    description: "Empower teams with instant access to project-related knowledge, drawing insights from code repositories, wikis, and tickets."
  },
  {
    title: "Adaptive Learning Models",
    description: "AI copilots continuously learn from user feedback and evolving data, improving responses and accuracy over time."
  },
  {
    title: "Seamless Tool Integration",
    description: "Integrate AI copilots effortlessly into IDEs, version control systems, and collaboration platforms like GitHub, JIRA, and Slack."
  }
];

export function WhatWeOffer() {
  return (
    <section className="py-20 bg-[#A8B2E7]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-black mb-6">What We Offer in AI Copilot Development</h2>
        <p className="text-lg text-black mb-12">
          Unlock the full potential of AI-powered copilots — enhancing coding, automating workflows, and boosting team efficiency.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-lg border-2 border-black bg-[#F3F1EB] text-black hover:border-gray-700 transition"
            >
              <h3 className="text-xl font-semibold mb-4">{offer.title}</h3>
              <p>{offer.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
