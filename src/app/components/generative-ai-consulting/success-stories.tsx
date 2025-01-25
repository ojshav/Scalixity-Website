import Image from 'next/image'
import { motion } from 'framer-motion'

const successStories = [
  {
    company: "TechCorp Solutions",
    title: "AI-Powered Content Generation Platform",
    description: "Implemented a Generative AI solution that automated content creation, resulting in 3x faster production and 45% cost reduction.",
    image: "/placeholder.svg?height=400&width=600",
    results: [
      "300% increase in content output",
      "45% reduction in content production costs",
      "90% positive user feedback"
    ]
  },
  {
    company: "Global Retail Inc.",
    title: "Customer Service Automation",
    description: "Developed an AI-powered customer service system that handles 70% of inquiries automatically while maintaining high satisfaction rates.",
    image: "/placeholder.svg?height=400&width=600",
    results: [
      "70% automation of customer inquiries",
      "85% customer satisfaction rate",
      "50% reduction in response time"
    ]
  }
]

export function SuccessStories() {
  return (
    <section className="bg-[#080B16] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See how we've helped businesses transform with Generative AI
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-card rounded-xl overflow-hidden"
            >
              <div className="relative h-[240px]">
                <Image
                  src={story.image}
                  alt={story.company}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <div className="text-primary font-medium mb-2">{story.company}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{story.title}</h3>
                <p className="text-gray-400 mb-6">{story.description}</p>
                <div className="space-y-3">
                  {story.results.map((result, idx) => (
                    <div key={idx} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {result}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

