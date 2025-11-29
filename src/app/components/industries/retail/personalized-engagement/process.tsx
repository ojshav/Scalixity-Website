"use client";

import { motion } from 'framer-motion';

const processSteps = [
  {
    title: "Data Collection & Analysis",
    description: "We gather customer data — preferences, purchase history, and engagement patterns — to build a foundation for personalized interactions."
  },
  {
    title: "AI Model Development",
    description: "Our AI models use predictive analytics and machine learning to identify user behavior trends and personalize communication strategies."
  },
  {
    title: "Segmentation & Targeting",
    description: "We segment your audience into dynamic groups, ensuring tailored messages reach the right customers at the right time."
  },
  {
    title: "Real-Time Engagement",
    description: "Our AI solutions deliver personalized offers, content, and recommendations instantly, boosting engagement and conversions."
  },
  {
    title: "Monitoring & Optimization",
    description: "We continuously monitor AI-driven interactions, refining models and strategies for maximum impact and customer satisfaction."
  }
];

export function Process() {
  return (
    <section className="bg-[#FFF2D5] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            Our Personalized Engagement Process
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Unlock AI-powered strategies to foster deeper customer relationships — dynamic, responsive, and tailored to individual needs.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-black" /> {/* Changed to black */}

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
                <div className="absolute left-0 top-2 w-[30px] h-[30px] bg-black rounded-full flex items-center justify-center"> {/* Changed to black */}
                  <div className="w-2 h-2 bg-[#A8B2E7] rounded-full" />
                </div>
                
                <div className="bg-[#F3F1EB] p-8 rounded-xl border border-black"> {/* Changed to black */}
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
