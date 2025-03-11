import { ResourceCard } from "@/src/app/components/resource-card"
import { CTA } from "@/src/app/components/cta"

export default function ResourcesPage() {
  const resources = [
    { 
      title: "AI Implementation Guide",
      description: "A comprehensive guide to implementing AI solutions in your business.",
      type: "eBook",
      link: "/resources/ai-implementation-guide"
    },
    { 
      title: "Data Engineering Best Practices",
      description: "Learn the best practices for building robust data infrastructure for AI.",
      type: "Whitepaper",
      link: "/resources/data-engineering-best-practices"
    },
    { 
      title: "Introduction to Generative AI",
      description: "A beginner-friendly webinar on the basics of generative AI and its applications.",
      type: "Webinar",
      link: "/resources/intro-to-generative-ai"
    },
    { 
      title: "Building AI-Powered Chatbots",
      description: "Discover how to create intelligent chatbots using AI technologies.",
      type: "Workshop",
      link: "/resources/ai-powered-chatbots"
    },
  ]

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-sky-50 py-12">Resources</h1>
        <p className="text-xl text-center text-gray-400 mb-12">Expand your AI knowledge with our curated resources</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {resources.map((resource, index) => (
            <ResourceCard key={index} {...resource} />
          ))}
        </div>
      </div>
      <CTA />
    </div>
  )
}

