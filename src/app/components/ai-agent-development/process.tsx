const steps = [
  {
    title: "Requirements Analysis",
    description: "We work with you to understand your specific needs and use cases for LLM implementation."
  },
  {
    title: "Data Preparation",
    description: "Collect and prepare high-quality training data relevant to your domain."
  },
  {
    title: "Model Selection",
    description: "Choose the most appropriate base model and architecture for your needs."
  },
  {
    title: "Fine-tuning & Training",
    description: "Customize the model with your specific data and requirements."
  },
  {
    title: "Testing & Validation",
    description: "Rigorous testing to ensure accuracy and performance."
  },
  {
    title: "Deployment & Monitoring",
    description: "Seamless deployment with continuous monitoring and optimization."
  }
]

export function Process() {
  return (
    <section className="bg-[#0A0B14] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Our Development Process
        </h2>
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
  )
}

