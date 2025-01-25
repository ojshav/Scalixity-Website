export function Process() {
  const steps = [
    { title: "Discovery", description: "We analyze your business needs and goals." },
    { title: "Strategy", description: "We develop a tailored AI implementation strategy." },
    { title: "Development", description: "Our team builds and integrates AI solutions." },
    { title: "Testing", description: "Rigorous testing ensures optimal performance." },
    { title: "Deployment", description: "We seamlessly deploy the AI solution." },
    { title: "Support", description: "Ongoing support and optimization services." },
  ]

  return (
    <div className="bg-[#0F1019] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Our Process</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-[#1A1B26] p-6 rounded-lg">
              <div className="text-purple-500 text-4xl font-bold mb-4">{index + 1}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

