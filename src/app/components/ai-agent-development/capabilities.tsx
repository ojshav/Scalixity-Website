const capabilities = [
  {
    title: "Natural Language Processing",
    description: "Advanced text understanding and generation capabilities for human-like interactions."
  },
  {
    title: "Multi-modal Learning",
    description: "Process and understand multiple types of data including text, images, and structured data."
  },
  {
    title: "Context Awareness",
    description: "Maintain context across long conversations and complex interactions."
  },
  {
    title: "Domain Adaptation",
    description: "Quickly adapt to specific industry domains and specialized vocabularies."
  },
  {
    title: "Reasoning & Analysis",
    description: "Perform complex reasoning tasks and provide detailed analysis."
  },
  {
    title: "Knowledge Integration",
    description: "Seamlessly integrate with existing knowledge bases and data sources."
  }
]

export function Capabilities() {
  return (
    <section className="bg-[#080B16] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            LLM Capabilities
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our LLM solutions offer a wide range of capabilities to meet your business needs
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div key={index} className="bg-[#0F1629] p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4">{capability.title}</h3>
              <p className="text-gray-400">{capability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

