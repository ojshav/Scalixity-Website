const useCases = [
  {
    title: "Customer Service",
    description: "Intelligent chatbots and virtual assistants that provide 24/7 customer support."
  },
  {
    title: "Content Generation",
    description: "Automated creation of high-quality content across multiple formats and languages."
  },
  {
    title: "Data Analysis",
    description: "Extract insights and patterns from large volumes of unstructured data."
  },
  {
    title: "Process Automation",
    description: "Automate complex business processes with intelligent decision-making."
  },
  {
    title: "Knowledge Management",
    description: "Organize and access corporate knowledge more effectively."
  },
  {
    title: "Research & Development",
    description: "Accelerate research by analyzing scientific literature and generating hypotheses."
  }
]

export function UseCases() {
  return (
    <section className="bg-[#080B16] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          LLM Use Cases
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-[#0F1629] p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
              <p className="text-gray-400">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

