import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const services = [
  {
    title: "Generative AI Development",
    description: "Build custom generative AI solutions tailored to your business needs",
    features: [
      "Large Language Models",
      "Computer Vision AI",
      "AI Agents Development",
      "Enterprise AI Solutions"
    ],
    image: "/placeholder.svg?height=300&width=400",
    link: "services/generative-ai-development"
  },
  {
    title: "AI Development Services",
    description: "End-to-end AI development services for your digital transformation",
    features: [
      "Machine Learning",
      "Natural Language Processing",
      "AI Chatbots",
      "Predictive Analytics"
    ],
    image: "/placeholder.svg?height=300&width=400",
    link: "/services/ai-development"
  },
  {
    title: "Blockchain Development",
    description: "Build secure and scalable blockchain solutions for your business",
    features: [
      "Smart Contracts",
      "DeFi Applications",
      "NFT Platforms",
      "Web3 Development"
    ],
    image: "/placeholder.svg?height=300&width=400",
    link: "/services/blockchain"
  }
]

export function Services() {
  return (
    <section className="bg-[#0A0B14] py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Services</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We offer comprehensive AI and blockchain development services to help businesses innovate and grow
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-[#1A1B26] rounded-xl overflow-hidden group hover:bg-[#1E1F2C] transition-colors">
              <div className="relative h-[300px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-300 flex items-center">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.link}
                  className="inline-flex items-center text-purple-500 hover:text-purple-400 font-medium"
                >
                  Learn more <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

