"use client";

const steps = [
  {
    title: "Understanding Business Needs",
    description: "We analyze your workflows, challenges, and requirements to define how AI agents can enhance efficiency."
  },
  {
    title: "Data Collection & Processing",
    description: "Gathering and refining high-quality structured and unstructured data to train robust AI models."
  },
  {
    title: "Model Selection & Customization",
    description: "Choosing the most suitable AI architecture and fine-tuning it for domain-specific use cases."
  },
  {
    title: "Training & Optimization",
    description: "Using advanced techniques like reinforcement learning, supervised fine-tuning, and continuous model improvement."
  },
  {
    title: "Integration & Deployment",
    description: "Seamlessly embedding AI agents into existing systems with real-time processing capabilities."
  },
  {
    title: "Monitoring & Enhancement",
    description: "Ensuring AI agents remain accurate, reliable, and adaptable through ongoing monitoring and updates."
  }
];

export function Process() {
  return (
    <section className="bg-[#0A0B14] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm text-gray-400 uppercase tracking-wider">
            How AI Agents We Engineer Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Our Development Process
          </h2>
          <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
            Our AI agents are built to automate decision-making, enhance productivity, and adapt
            intelligently to evolving business needs. Here's how we engineer them for maximum impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-[#0F1629] p-6 rounded-lg border border-gray-800">
              <div className="text-purple-500 text-2xl font-bold mb-4">{index + 1}</div>
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
