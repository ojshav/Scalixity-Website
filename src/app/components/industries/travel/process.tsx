"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Travel Needs Assessment",
    description: "We start by understanding your travel business goals — be it personalization, dynamic pricing, or customer service — to design AI strategies aligned with your vision."
  },
  {
    number: "02",
    title: "Data Collection & Analysis",
    description: "Our team gathers travel-related data, including user preferences, seasonal trends, and booking patterns, ensuring clean, structured datasets for AI models."
  },
  {
    number: "03",
    title: "AI Model Design & Selection",
    description: "We build AI models focused on recommendation engines, price optimization, and chatbot solutions tailored to elevate traveler experiences."
  },
  {
    number: "04",
    title: "Model Development & Training",
    description: "Using state-of-the-art algorithms, we train AI models to deliver real-time insights, personalized itineraries, and dynamic pricing strategies."
  },
  {
    number: "05",
    title: "Testing & Fine-Tuning",
    description: "We rigorously test AI models, ensuring high accuracy in predictions, seamless user interactions, and robust system performance."
  },
  {
    number: "06",
    title: "Integration & Deployment",
    description: "Finally, we integrate AI into your travel platform — enhancing booking engines, chat interfaces, and recommendation systems without service disruption."
  }
];

export function Process() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Our AI Development Process for Travel
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From personalization to dynamic pricing — a structured AI integration process to redefine travel experiences and customer engagement.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-primary/20 md:left-1/2 md:-translate-x-px" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-12 md:pl-0"
              >
                <div
                  className={`md:flex items-center ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="absolute left-0 top-2 w-[30px] h-[30px] bg-primary rounded-full flex items-center justify-center md:relative md:left-auto md:top-auto md:mx-8">
                    <div className="w-2 h-2 bg-background rounded-full" />
                  </div>

                  <div
                    className={`md:w-1/2 ${
                      index % 2 === 0 ? "md:text-right" : ""
                    }`}
                  >
                    <div className="bg-card p-6 rounded-xl border border-border">
                      <div className="text-primary text-sm font-bold mb-2">
                        STEP {step.number}
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-4">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
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
