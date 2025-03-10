"use client";

import { motion } from "framer-motion";
import { Search, Sliders, Calculator, BarChart, Rocket } from "lucide-react";

const processSteps = [
  {
    title: "Identify Usage Requirements",
    description:
      "Define key parameters such as token limits, API call frequency, and provider preferences to estimate accurate costs.",
    icon: <Search className="w-10 h-10 text-black" />,
  },
  {
    title: "Customize Pricing Parameters",
    description:
      "Adjust API pricing models, input/output token counts, and other variables to match your business needs.",
    icon: <Sliders className="w-10 h-10 text-black" />,
  },
  {
    title: "Real-Time Cost Calculation",
    description:
      "Our calculator processes data instantly, giving you accurate cost estimations based on your inputs.",
    icon: <Calculator className="w-10 h-10 text-black" />,
  },
  {
    title: "Analyze and Compare Costs",
    description:
      "Review cost breakdowns across multiple providers to choose the most efficient LLM API for your budget.",
    icon: <BarChart className="w-10 h-10 text-black" />,
  },
  {
    title: "Optimize & Deploy",
    description:
      "Use insights from our calculator to optimize API usage, reduce expenses, and integrate cost tracking into your system.",
    icon: <Rocket className="w-10 h-10 text-black" />,
  },
];

export function Process() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-black">
            OUR PROCESS
          </span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            How Our LLM API Pricing Calculator Works
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            A structured, step-by-step approach to estimating and optimizing your AI API costs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black shadow-lg flex items-start gap-4"
            >
              <div className="flex-shrink-0">{step.icon}</div>
              <div>
                <h3 className="text-2xl font-bold text-black mb-2">{step.title}</h3>
                <p className="text-black">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
