import { Brain, Code, Database, Shield, Users, Zap } from 'lucide-react'

const expertiseAreas = [
  {
    icon: Brain,
    title: "AI Strategy & Consulting",
    description: "We help businesses formulate AI strategies that align with their objectives, ensuring a seamless and effective AI adoption process."
  },
  {
    icon: Code,
    title: "Custom AI Solutions",
    description: "Our experts design and develop AI-driven solutions tailored to your business needs, optimizing workflows and enhancing efficiency."
  },
  {
    icon: Database,
    title: "Data Engineering & Management",
    description: "We provide robust data engineering services, ensuring structured, high-quality data to power AI applications effectively."
  },
  {
    icon: Shield,
    title: "AI Security & Compliance",
    description: "We integrate strong security measures and ensure compliance with industry standards, safeguarding your AI-driven solutions."
  },
  {
    icon: Users,
    title: "AI Training & Enablement",
    description: "Empower your team with AI knowledge through our training programs, helping them effectively utilize AI technologies."
  },
  {
    icon: Zap,
    title: "AI Integration & Deployment",
    description: "Seamlessly integrate AI capabilities into existing systems, ensuring smooth deployment and operational efficiency."
  }
]

export function Expertise() {
  return (
    <section className="bg-[#080B16] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Our AI Consulting Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Leverage our AI expertise to optimize your business operations and drive innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-colors"
            >
              <area.icon className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">{area.title}</h3>
              <p className="text-gray-400">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
