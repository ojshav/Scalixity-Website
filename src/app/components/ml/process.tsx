"use client";

import { Search, Database, Brain, Settings, Rocket, CheckCircle } from "lucide-react";

const processSteps = [
  {
    icon: Search,
    title: "Requirement Analysis",
    description:
      "Understand business objectives, gather data sources, and define key machine learning goals.",
  },
  {
    icon: Database,
    title: "Data Collection & Preprocessing",
    description:
      "Collect, clean, and preprocess data to ensure high-quality input for training ML models.",
  },
  {
    icon: Brain,
    title: "Model Development & Training",
    description:
      "Select the right algorithms, build custom ML models, and train them using advanced machine learning techniques.",
  },
  {
    icon: Settings,
    title: "Model Evaluation & Optimization",
    description:
      "Test models for accuracy, fine-tune hyperparameters, and optimize performance for real-world applications.",
  },
  {
    icon: Rocket,
    title: "Deployment & Integration",
    description:
      "Deploy ML models into production environments, integrating seamlessly with existing systems and workflows.",
  },
  {
    icon: CheckCircle,
    title: "Monitoring & Continuous Improvement",
    description:
      "Track performance, retrain models with new data, and improve accuracy over time to ensure optimal results.",
  },
];

export function Process() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">
            OUR PROCESS
          </span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Machine Learning Development Workflow
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            A structured approach to designing, training, and deploying high-performance ML solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black"
            >
              <step.icon className="w-12 h-12 text-black mb-6" />
              <h3 className="text-xl font-bold text-black mb-4">
                {step.title}
              </h3>
              <p className="text-black">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
