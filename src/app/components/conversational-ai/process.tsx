"use client";

import { motion } from 'framer-motion';

const processSteps = [
  {
    title: "Requirement Analysis & Strategy",
    description: "We assess business needs and define a roadmap for Conversational AI solutions, ensuring alignment with user requirements and industry trends."
  },
  {
    title: "Data Collection & NLP Training",
    description: "We gather and preprocess conversational data, training natural language processing (NLP) models to understand intent, context, and user interactions."
  },
  {
    title: "Conversational Flow Design",
    description: "We create structured and intuitive dialogue flows, ensuring seamless user interactions across chatbots, voice assistants, and virtual agents."
  },
  {
    title: "AI Model Development & Optimization",
    description: "Using advanced deep learning and transformer models, we develop intelligent AI systems that provide accurate and context-aware responses."
  },
  {
    title: "Deployment & Multi-Platform Integration",
    description: "We deploy AI-powered chatbots and voice assistants across multiple channels, including web, mobile, social media, and enterprise platforms."
  },
  {
    title: "Monitoring & Continuous Improvement",
    description: "We provide ongoing monitoring, feedback analysis, and updates to enhance AI responses and user experience over time."
  }
];

export function Process() {
  return (
    <section className="py-24" style={{ backgroundColor: '#A8B2E7' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-black">OUR PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            Conversational AI Development Process
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Our structured approach ensures intelligent, scalable, and high-performing Conversational AI solutions tailored to your business needs.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-black" />

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
                {/* Timeline Dot */}
                <div 
                  className="absolute left-0 top-2 w-[30px] h-[30px] rounded-full flex items-center justify-center border-2 border-black"
                  style={{ backgroundColor: '#F3F1EB' }}
                >
                  <div className="w-2 h-2 bg-black rounded-full" />
                </div>
                
                <div 
                  className="p-8 rounded-xl border-2 border-black"
                  style={{ backgroundColor: '#F3F1EB', color: 'black' }}
                >
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="leading-relaxed">{step.description}</p>
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
