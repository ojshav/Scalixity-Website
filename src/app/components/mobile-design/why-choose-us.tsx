"use client";

import { motion } from "framer-motion";
import { Smartphone, Palette, Layers, Star, ShieldCheck, Users } from "lucide-react";

const reasons = [
  {
    icon: Smartphone,
    title: "User-Centric Design",
    description: "We don't just design apps — we craft seamless, intuitive experiences that captivate users and drive engagement."
  },
  {
    icon: Palette,
    title: "Custom UI/UX Solutions",
    description: "Bold, beautiful, and brand-aligned. Our UI/UX designs ensure your app stands out and shines."
  },
  {
    icon: Layers,
    title: "End-to-End Development",
    description: "From concept sketches to high-fidelity prototypes, we guide your app’s journey every step of the way."
  },
  {
    icon: Star,
    title: "Industry-Leading Expertise",
    description: "Backed by experience, fueled by creativity — we design apps that set new standards in every industry."
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance",
    description: "We embed security into our designs, ensuring your app is both beautiful and bulletproof."
  },
  {
    icon: Users,
    title: "User Testing & Iteration",
    description: "Real feedback, real results. We fine-tune designs through constant iteration for flawless user experiences."
  }
];

export function WhyChooseUs() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-black mb-6 tracking-tight">
            Why Choose Us for Mobile App Design
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            We create more than just designs — we build digital experiences that inspire, engage, and deliver results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] p-10 rounded-2xl border border-black shadow-lg hover:shadow-black/50 transition-all"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-transparent rounded-full mb-6">
                <reason.icon className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">{reason.title}</h3>
              <p className="text-black">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
