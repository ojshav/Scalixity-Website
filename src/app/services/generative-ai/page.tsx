import Link from 'next/link'
import { ServicePage } from "@/src/app/components/service-page"

export default function GenerativeAIPage() {
  const serviceData = {
    title: "Generative AI Development Services",
    description: "Transform your business with custom generative AI solutions that drive innovation and efficiency. Our expert team develops tailored AI models and applications that meet your specific needs.",
    benefits: [
      "Accelerate innovation with custom AI models",
      "Automate complex tasks and workflows",
      "Enhance decision-making with AI-powered insights",
      "Improve customer experience with personalized solutions",
      "Reduce operational costs through automation",
      "Scale your business with AI-driven efficiency"
    ],
    features: [
      {
        title: "Custom AI Model Development",
        description: "Build specialized AI models tailored to your business needs and use cases",
        icon: "/icons/ai-model.svg"
      },
      {
        title: "AI Integration Services",
        description: "Seamlessly integrate AI capabilities into your existing systems and workflows",
        icon: "/icons/integration.svg"
      },
      {
        title: "AI Consulting",
        description: "Expert guidance on AI strategy, implementation, and optimization",
        icon: "/icons/consulting.svg"
      }
    ],
    process: [
      {
        title: "Discovery & Planning",
        description: "We analyze your needs and develop a comprehensive AI strategy"
      },
      {
        title: "Design & Architecture",
        description: "Creating the technical blueprint for your AI solution"
      },
      {
        title: "Development & Training",
        description: "Building and training your custom AI models"
      },
      {
        title: "Deployment & Optimization",
        description: "Launching and continuously improving your AI solution"
      }
    ],
    technologies: [
      { name: "TensorFlow", icon: "/tech/tensorflow.svg" },
      { name: "PyTorch", icon: "/tech/pytorch.svg" },
      { name: "OpenAI", icon: "/tech/openai.svg" },
      { name: "Hugging Face", icon: "/tech/huggingface.svg" },
      { name: "AWS", icon: "/tech/aws.svg" },
      { name: "Azure", icon: "/tech/azure.svg" }
    ],
    caseStudies: [
      {
        title: "AI-Powered Content Generation",
        description: "Helped a media company automate content creation and improve engagement",
        image: "/case-studies/content-gen.jpg",
        results: [
          { metric: "Increase in Content Output", value: "300%" },
          { metric: "Time Saved", value: "75%" }
        ]
      },
      {
        title: "Customer Service Automation",
        description: "Implemented AI chatbots for a retail company to enhance customer support",
        image: "/case-studies/customer-service.jpg",
        results: [
          { metric: "Response Time", value: "-80%" },
          { metric: "Customer Satisfaction", value: "+45%" }
        ]
      },
      {
        title: "Predictive Analytics Platform",
        description: "Built a custom AI solution for financial forecasting and risk assessment",
        image: "/case-studies/analytics.jpg",
        results: [
          { metric: "Prediction Accuracy", value: "95%" },
          { metric: "Cost Reduction", value: "40%" }
        ]
      }
    ]
  }

  return (
    <>
      <ServicePage {...serviceData} />
      <section className="bg-[#080B16] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8">Explore Our Generative AI Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#1A1B26] p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Generative AI Development</h3>
              <p className="text-gray-400 mb-4">Discover our comprehensive Generative AI Development services and how they can transform your business.</p>
              <Link href="/services/generative-ai/generative-ai-development" className="text-purple-500 hover:text-purple-400">
                Learn More →
              </Link>
            </div>
            {/* Add more service cards here as needed */}
          </div>
        </div>
      </section>
    </>
  )
}

