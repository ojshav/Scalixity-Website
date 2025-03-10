"use client";

const processSteps = [
  {
    step: "Requirement Analysis",
    description: "Understand business needs and define chatbot goals."
  },
  {
    step: "AI Model Selection",
    description: "Choose the right AI framework and NLP model for chatbot development."
  },
  {
    step: "Conversation Design",
    description: "Develop intuitive and engaging conversation flows."
  },
  {
    step: "Development & Training",
    description: "Build and train the chatbot using advanced AI techniques."
  },
  {
    step: "Testing & Optimization",
    description: "Ensure chatbot accuracy and refine performance through iterative testing."
  },
  {
    step: "Deployment & Support",
    description: "Integrate chatbot into existing systems and provide ongoing improvements."
  }
];

export function Process() {
  return (
    <section className="bg-[#A8B2E7] py-20 text-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">AI Chatbot Development Process</h2>
        <p className="text-lg text-black mb-12">
          Our structured approach ensures seamless AI chatbot development from ideation to deployment.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="bg-[#F3F1EB] p-6 rounded-lg border border-black">
              <h3 className="text-xl font-semibold mb-2">{step.step}</h3>
              <p className="text-black">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
