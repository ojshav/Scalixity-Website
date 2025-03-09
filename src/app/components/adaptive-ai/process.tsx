"use client";

import { motion } from 'framer-motion';

const processSteps = [
  {
    title: "Problem Definition & Strategy Planning",
    description: "We begin by identifying the core business challenges and defining clear objectives for Adaptive AI implementation. This includes analyzing the intended use case and determining the best AI approach tailored to your needs."
  },
  {
    title: "Data Collection, Training & Evaluation",
    description: "The foundation of any AI system lies in data. We gather, preprocess, and structure relevant datasets to train Adaptive AI models. Our iterative evaluation process ensures the model learns efficiently and improves over time."
  },
  {
    title: "Model Design & Fine-tuning",
    description: "Using cutting-edge AI techniques, we design and refine models that can adapt to dynamic inputs. We continuously fine-tune hyperparameters and optimize performance for real-world applications."
  },
  {
    title: "Seamless Deployment & Integration",
    description: "Once the model is trained and validated, we ensure smooth deployment across various environments, integrating it seamlessly with your existing infrastructure for minimal disruption."
  },
  {
    title: "Continuous Monitoring & Maintenance",
    description: "Adaptive AI requires ongoing refinement. We provide continuous monitoring, periodic retraining, and performance enhancements to keep the AI system aligned with evolving business needs."
  }
];

export function Process() {
  return (
    <section className="py-24" style={{ backgroundColor: '#A8B2E7' }}> {/* Lavender background */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            Our Adaptive AI Development Process
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            We take a systematic and data-driven approach to building AI solutions that adapt to new challenges, learn continuously, and evolve with your business requirements.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-white/50" />

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
                <div className="absolute left-0 top-2 w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#A8B2E7] rounded-full" />
                </div>

                <div className="p-8 rounded-xl border border-white" style={{ backgroundColor: '#F3F1EB' }}> {/* Beige boxes */}
                  <h3 className="text-xl font-bold text-black mb-4">{step.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{step.description}</p>
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
