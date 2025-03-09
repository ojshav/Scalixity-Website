"use client";

import { motion } from 'framer-motion';

const processSteps = [
  {
    title: "Data Collection & Analysis",
    description: "We gather customer data from multiple touchpoints — purchase history, website behavior, and social media interactions — to build a solid foundation for segmentation."
  },
  {
    title: "Segmentation Strategy Design",
    description: "Our AI models categorize customers into meaningful segments based on demographics, buying patterns, and preferences."
  },
  {
    title: "Model Development & Training",
    description: "We train AI algorithms to continuously refine customer segments by learning from real-time data and emerging trends."
  },
  {
    title: "Integration with Marketing Platforms",
    description: "Seamlessly connect AI-powered segments with your CRM, email marketing tools, and ad platforms for targeted campaigns."
  },
  {
    title: "Performance Monitoring & Optimization",
    description: "We track segment performance, customer responses, and campaign effectiveness — making data-driven adjustments for maximum ROI."
  }
];

export function Process() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            Our AI-Driven Customer Segmentation Process
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Unlock personalized marketing with AI-powered customer segmentation — precise, dynamic, and impactful.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-black/30" />

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-12"
              >
                <div className="absolute left-0 top-2 w-[30px] h-[30px] bg-black rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#A8B2E7] rounded-full" />
                </div>
                
                <div className="bg-white p-8 rounded-xl border border-black/20">
                  <h3 className="text-xl font-bold text-black mb-4">{step.title}</h3>
                  <p className="text-black/80 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
