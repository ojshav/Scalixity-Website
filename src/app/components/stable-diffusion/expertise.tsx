"use client";

import { Brush, Layers, Sparkles, Camera } from "lucide-react";

const expertiseAreas = [
  {
    icon: Sparkles,
    title: "AI-Generated Art & Illustration",
    description: "We specialize in AI-powered artwork, creating stunning illustrations, concept art, and digital paintings for various applications.",
  },
  {
    icon: Layers,
    title: "Custom AI Model Training",
    description: "We fine-tune Stable Diffusion models to generate industry-specific visuals, ensuring unique and high-quality outputs.",
  },
  {
    icon: Brush,
    title: "Style Transfer & Image Enhancement",
    description: "Our developers integrate advanced style transfer techniques, allowing users to transform images into various artistic styles.",
  },
  {
    icon: Camera,
    title: "Photo Realism & Inpainting",
    description: "We enhance AI-generated content with photorealistic features and seamless inpainting techniques for image restoration.",
  }
];

export function Expertise() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">Our Expertise</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Unlock the potential of Stable Diffusion with our deep expertise in AI-driven image generation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-colors">
              <area.icon className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">{area.title}</h3>
              <p className="text-gray-400">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Expertise;
