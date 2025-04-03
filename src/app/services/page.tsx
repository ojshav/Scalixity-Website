import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import WorkProjects from '@/src/app/components/work'

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
    image: "/images/genai.svg",
    link: "/services/generative-ai-development"
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
    image: "/images/aidev.svg",
    link: "/services/ai-development"
  },
  {
    title: "AI Agent Development",
    description: "Tailored AI Agents for business needs using advanced tools and LLMs.",
    features: [
      "Customer Support Automation",
      "Data Analysis Agents",
      "Code Generation Assistants",
      "Process Automation Solutions"
    ],
    image: "/images/aiagent.svg",
    link: "/services/ai-agent"
  },
  {
    title: "ML Development",
    description: "Custom machine learning solutions to drive business innovation and efficiency.",
    features: [
      "Predictive Analytics",
      "Natural Language Processing",
      "Computer Vision Models",
      "Custom ML Model Development"
    ],
    image: "/images/ml.svg",
    link: "/services/ml"
  },
  {
    title: "Android App development",
    description: "Design and develop custom Android applications to meet your business needs.",
    features: [
      "Custom Android Apps",
      "UI/UX Design",
      "API Integration",
      "Performance Optimization"
    ],
    image: "/images/androidapp.svg",
    link: "/services/android"
  },
  {
    title: "AI Chatbot Development",
    description: "Create intelligent AI chatbots to enhance customer engagement and automate workflows",
    features: [
      "Custom Chatbot Solutions",
      "Natural Language Processing",
      "Multi-Platform Integration",
      "24/7 Customer Support Automation"
    ],
    image: "/images/chatbot.svg",
    link: "/services/chatbot"
  }
]
     
export default function Page() {
  return (
    <>
      <section className="bg-[#F3F1EB] py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">Our Services</h2>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto">
            Empowering your business with cutting-edge AI solutions
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-[#A8B2E7] rounded-xl overflow-hidden group  transition-colors">
                <div className="relative h-[300px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
                  <p className="text-gray-900 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-700 flex items-center">
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
      <WorkProjects />
    </>
  )
}