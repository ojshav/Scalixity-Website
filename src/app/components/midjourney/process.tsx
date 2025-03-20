"use client";

import { motion } from "framer-motion";

const processSteps = [
  {
    title: "Understanding Project Requirements",
    description:
      "We begin by analyzing your project needs, understanding the desired artistic style, themes, and objectives. This step ensures that MidJourney AI generates visuals that align with your vision.",
  },
  {
    title: "Selecting the Right Prompts",
    description:
      "Crafting effective prompts is key to getting the best results from MidJourney. Our experts design precise, well-structured prompts to ensure high-quality, relevant, and creative AI-generated images.",
  },
  {
    title: "Fine-Tuning AI Outputs",
    description:
      "We refine and iterate upon generated images, adjusting parameters like lighting, color schemes, and composition to achieve the best visual appeal and consistency with your branding.",
  },
  {
    title: "Post-Processing and Enhancement",
    description:
      "After generating images with MidJourney, we enhance them using advanced editing tools, optimizing resolution, sharpness, and aesthetic details for maximum impact.",
  },
  {
    title: "Final Delivery & Implementation",
    description:
      "Once the images meet quality standards, we deliver them in the required formats for web, print, or digital use. We also assist in seamless integration into your marketing, branding, or content strategies.",
  },
];

export function Process() {
  return (
    <section className="py-24" style={{ backgroundColor: "#A8B2E7" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span
            className="text-sm uppercase tracking-wider"
            style={{ color: "#000000" }}
          >
            PROCESS
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mt-4 mb-6"
            style={{ color: "#000000" }}
          >
            MidJourney AI Image Generation Process
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ color: "#000000" }}
          >
            Our structured process ensures high-quality AI-generated visuals,
            customized to meet your artistic and branding needs.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Black vertical timeline line */}
          <div className="absolute left-[15px] top-0 bottom-0 w-0.5" style={{ backgroundColor: "#000000" }} />

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
                {/* Black circle dot */}
                <div
                  className="absolute left-0 top-2 w-[30px] h-[30px] rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#000000" }}
                >
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#F3F1EB" }} />
                </div>

                {/* Process Step Box with Border */}
                <div
                  className="p-8 rounded-xl border-2 border-black"
                  style={{ backgroundColor: "#F3F1EB" }}
                >
                  <h3 className="text-xl font-bold mb-4" style={{ color: "#000000" }}>
                    {step.title}
                  </h3>
                  <p className="leading-relaxed" style={{ color: "#000000" }}>
                    {step.description}
                  </p>
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
