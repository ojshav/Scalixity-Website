"use client";

import { motion } from "framer-motion";

const processSteps = [
  {
    title: "Determine the Use-Case",
    description:
      "We start by analyzing your business needs to define the most effective use case for ChatGPT integration. This includes identifying key functionalities, user interactions, and expected outcomes.",
  },
  {
    title: "Select the ChatGPT Provider",
    description:
      "Choosing the right ChatGPT provider is crucial for seamless integration. We help you evaluate and select the best ChatGPT model based on your requirements, ensuring optimal performance and scalability.",
  },
  {
    title: "Configure APIs or SDKs",
    description:
      "Once the provider is selected, we configure the necessary APIs or SDKs to connect ChatGPT with your existing systems. This step involves setting up authentication, data pipelines, and response handling mechanisms.",
  },
  {
    title: "Train the Model",
    description:
      "To enhance ChatGPT’s efficiency, we fine-tune the model using your domain-specific data. Training the model ensures improved accuracy, relevance, and contextual understanding tailored to your business needs.",
  },
  {
    title: "Test and Deploy",
    description:
      "After training, we rigorously test the ChatGPT integration for performance, accuracy, and user experience. Once validated, we deploy it into your live environment, ensuring a smooth transition.",
  },
  {
    title: "Maintenance and Optimization",
    description:
      "ChatGPT requires continuous monitoring and periodic updates. We provide ongoing maintenance, retraining, and performance optimization to keep your AI solution efficient and aligned with evolving business requirements.",
  },
];

export function Process() {
  return (
    <section className="bg-[#A8B2E7] py-24"> {/* Lavender background */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            ChatGPT Integration Process
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            The process of ChatGPT integration can vary depending on the specific use case and integration method, but generally involves the following steps.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-black/30" /> {/* Line color adjusted */}

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
                <div className="absolute left-0 top-2 w-[30px] h-[30px] bg-black rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#A8B2E7] rounded-full" /> {/* Lavender dot inside the black circle */}
                </div>

                <div className="bg-[#F3F1EB] p-8 rounded-xl border border-black"> {/* Beige boxes with black border */}
                  <h3 className="text-xl font-bold text-black mb-4">{step.title}</h3>
                  <p className="text-black leading-relaxed">{step.description}</p>
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
