import { Brain, Code, Database, Shield, Users, Zap } from 'lucide-react'

const expertiseAreas = [
  {
    icon: Brain,
    title: "Generative AI Strategy",
    description: "We help businesses develop comprehensive strategies for implementing Generative AI solutions that align with their goals and drive measurable results."
  },
  {
    icon: Code,
    title: "Custom Model Development",
    description: "Our team specializes in developing and fine-tuning custom Generative AI models tailored to your specific business needs and use cases."
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "We provide expert data engineering services to ensure your Generative AI solutions have high-quality, well-structured data for optimal performance."
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Our solutions incorporate robust security measures and ensure compliance with relevant regulations and industry standards."
  },
  {
    icon: Users,
    title: "Team Training",
    description: "We offer comprehensive training programs to help your team effectively utilize and maintain Generative AI solutions."
  },
  {
    icon: Zap,
    title: "Integration Services",
    description: "Seamlessly integrate Generative AI capabilities into your existing systems and workflows for maximum efficiency."
  }
]

export function Expertise() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            Our Generative AI Consulting Expertise
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Leverage our deep expertise in Generative AI to transform your business operations and drive innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <div 
              key={index}
              className="bg-[#F3F1EB] p-8 rounded-xl border-2 border-black hover:border-black transition-colors"
            >
              <area.icon className="w-12 h-12 text-black mb-6" />
              <h3 className="text-xl font-bold text-black mb-4">{area.title}</h3>
              <p className="text-black">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Expertise;
