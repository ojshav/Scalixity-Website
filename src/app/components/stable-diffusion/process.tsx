"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Settings, Image, Rocket, PaintBucket } from "lucide-react";

const processSteps = [
  {
    icon: BrainCircuit,
    title: "Understanding Requirements",
    description: "We begin by analyzing your project requirements, artistic vision, and technical needs to tailor the best Stable Diffusion solution."
  },
  {
    icon: Settings,
    title: "Model Customization & Fine-Tuning",
    description: "We customize and fine-tune Stable Diffusion models based on your dataset, ensuring high-quality and brand-aligned outputs."
  },
  {
    icon: Image,
    title: "Image Generation & Enhancement",
    description: "Using optimized pipelines, we generate AI-driven images, refine quality, and ensure consistency in style."
  },
  {
    icon: PaintBucket,
    title: "Post-Processing & Optimization",
    description: "We enhance images with upscaling, inpainting, and fine adjustments for professional-grade results."
  },
  {
    icon: Rocket,
    title: "Deployment & Integration",
    description: "The final AI-powered solution is integrated into your workflow, platform, or application for seamless usage."
  }
];

export function Process() {
  return (
    <section className="bg-[#080B16] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Our Stable Diffusion Development Process</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A structured approach to building high-quality AI-generated visuals with Stable Diffusion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-colors text-center"
            >
              <step.icon className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
