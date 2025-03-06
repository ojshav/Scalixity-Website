"use client";

import { motion } from 'framer-motion';

const processSteps = [
  {
    title: "Understanding Project Requirements",
    description: "We begin by analyzing your project needs, understanding the desired artistic style, themes, and objectives. This step ensures that MidJourney AI generates visuals that align with your vision."
  },
  {
    title: "Selecting the Right Prompts",
    description: "Crafting effective prompts is key to getting the best results from MidJourney. Our experts design precise, well-structured prompts to ensure high-quality, relevant, and creative AI-generated images."
  },
  {
    title: "Fine-Tuning AI Outputs",
    description: "We refine and iterate upon generated images, adjusting parameters like lighting, color schemes, and composition to achieve the best visual appeal and consistency with your branding."
  },
  {
    title: "Post-Processing and Enhancement",
    description: "After generating images with MidJourney, we enhance them using advanced editing tools, optimizing resolution, sharpness, and aesthetic details for maximum impact."
  },
  {
    title: "Final Delivery & Implementation",
    description: "Once the images meet quality standards, we deliver them in the required formats for web, print, or digital use. We also assist in seamless integration into your marketing, branding, or content strategies."
  }
];

export function Process() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            MidJourney AI Image Generation Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our structured process ensures high-quality AI-generated visuals, customized to meet your artistic and branding needs.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-primary/20" />

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
                <div className="absolute left-0 top-2 w-[30px] h-[30px] bg-primary rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-background rounded-full" />
                </div>
                
                <div className="bg-card p-8 rounded-xl border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
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
