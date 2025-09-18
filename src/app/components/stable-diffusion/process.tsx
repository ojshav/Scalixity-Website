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
    <section className="bg-[#A8B2E7] py-24"> {/* Lavender Background for the Section */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">Our Stable Diffusion Development Process</h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
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
              className="bg-[#F3F1EB] p-6 rounded-xl border border-black hover:border-primary/50 transition-colors text-center" /* Soft Beige Background for Boxes */
            >
              <step.icon className="w-12 h-12 text-black mb-4 mx-auto" /> {/* Black Icon */}
              <h3 className="text-lg font-bold text-black mb-2">{step.title}</h3> {/* Black Title */}
              <p className="text-black">{step.description}</p> {/* Black Description */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
