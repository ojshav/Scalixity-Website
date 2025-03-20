"use client";

import { motion } from "framer-motion";

const processSteps = [
  {
    title: "Requirement Analysis & Planning",
    description: "We work closely with you to understand your app vision, user needs, and technical requirements, creating a strategic roadmap for seamless development."
  },
  {
    title: "Wireframing & UI/UX Design",
    description: "Our team crafts interactive wireframes and intuitive UI/UX designs, ensuring a user-centric experience that aligns with your brand identity."
  },
  {
    title: "Technical Architecture & Feasibility",
    description: "We define the best technology stack, evaluate system feasibility, and establish a solid foundation to ensure scalability and efficiency."
  },
  {
    title: "Prototyping & Concept Validation",
    description: "We build functional prototypes, allowing you to visualize the app flow and validate key features before proceeding with full-scale development."
  },
  {
    title: "Roadmap & Development Strategy",
    description: "We provide a structured development roadmap, breaking the project into milestones to ensure smooth execution and risk mitigation."
  },
  {
    title: "Final Documentation & Handoff",
    description: "We deliver detailed documentation, including workflows, design specifications, and technical insights to guide development teams effectively."
  }
];

export function Process() {
  return (
    <section className="py-24" style={{ backgroundColor: "#A8B2E7" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-black">OUR PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            App Blueprint Process
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            A structured approach to app planning, ensuring efficiency, clarity, and a seamless development experience.
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
                  style={{ backgroundColor: "#F3F1EB" }}
                >
                  <div className="w-2 h-2 bg-black rounded-full" />
                </div>
                
                <div 
                  className="p-8 rounded-xl border-2 border-black"
                  style={{ backgroundColor: "#F3F1EB", color: "black" }}
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
