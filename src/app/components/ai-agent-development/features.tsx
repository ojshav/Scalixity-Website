import { Brain, Cpu, Lock, BarChart } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: "Advanced Language Understanding",
    description: "Our LLMs demonstrate sophisticated comprehension of context, nuance, and complex language patterns across multiple domains."
  },
  {
    icon: Cpu,
    title: "Scalable Architecture",
    description: "Built on robust, scalable architecture that can handle increasing workloads while maintaining high performance."
  },
  {
    icon: Lock,
    title: "Security & Privacy",
    description: "Implemented with state-of-the-art security measures to protect sensitive data and ensure privacy compliance."
  },
  {
    icon: BarChart,
    title: "Performance Analytics",
    description: "Comprehensive analytics and monitoring tools to track model performance and optimize outcomes."
  }
]

export function Features() {
  return (
    <section className="bg-[#0A0B14] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Key Features of Our LLM Solutions
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#0F1629] p-6 rounded-lg border border-gray-800">
              <feature.icon className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

