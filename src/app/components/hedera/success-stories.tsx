"use client";

import { motion } from "framer-motion";

const successStories = [
  {
    title: "AI-Powered Customer Insights",
    description:
      "Scalixity helped a major retail brand analyze customer behavior using AI-driven data analytics. With real-time insights and predictive modeling, sales increased by 45%, and customer retention improved significantly.",
  },
  {
    title: "Fraud Detection with Machine Learning",
    description:
      "We developed an advanced fraud detection system for a financial institution using AI algorithms. The solution reduced fraudulent transactions by 65% and enhanced security for millions of users.",
  },
  {
    title: "Automated Healthcare Diagnostics",
    description:
      "Our AI-powered diagnostic tool assisted healthcare providers in detecting diseases with 90% accuracy. This resulted in faster patient diagnoses and more efficient treatment plans.",
  },
  {
    title: "Optimizing Supply Chain with AI",
    description:
      "Scalixity implemented a predictive AI model for a logistics company, reducing operational costs by 30% and improving delivery efficiency through real-time route optimization.",
  },
];

export function SuccessStories() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">
            SUCCESS STORIES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            How Scalixity Transforms Businesses with AI
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Discover how our AI solutions have driven innovation, efficiency, and growth across industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black"
            >
              <h3 className="text-xl font-bold text-black mb-4">
                {story.title}
              </h3>
              <p className="text-black leading-relaxed">{story.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SuccessStories;
