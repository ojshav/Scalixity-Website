"use client";

import { motion } from "framer-motion";

const processSteps = [
  {
    title: "Requirement Analysis",
    description: "Understand client goals, target audience, and key functionalities to lay a strong foundation for the app."
  },
  {
    title: "UI/UX Design",
    description: "Create intuitive, user-centric designs and prototypes that enhance the user experience."
  },
  {
    title: "Development & Integration",
    description: "Use React Native to build cross-platform apps, integrating APIs and third-party services as needed."
  },
  {
    title: "Testing & QA",
    description: "Perform rigorous testing to identify and resolve bugs, ensuring smooth app performance."
  },
  {
    title: "Deployment & Launch",
    description: "Deploy the app on App Store and Google Play Store, ensuring all guidelines are met."
  },
  {
    title: "Post-Launch Support",
    description: "Provide continuous maintenance, updates, and feature enhancements post-launch."
  }
];

export function Process() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4 text-center">
        <span className="text-sm uppercase tracking-wider text-black">
          OUR PROCESS
        </span>
        <h2 className="text-5xl font-bold text-black mt-2 mb-12">
          Our Process for React Native App Development
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:border-black transition-transform transform hover:scale-105"
            >
              <h3 className="text-2xl font-bold text-black mb-4">{step.title}</h3>
              <p className="text-black leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
