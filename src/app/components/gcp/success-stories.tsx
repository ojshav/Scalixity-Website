import Image from 'next/image'
import { motion } from 'framer-motion'

const successStories = [
  {
    company: "CloudCommerce Inc.",
    title: "Scalable Retail Platform on GCP",
    description: "Implemented a highly scalable retail solution using Google Cloud services like BigQuery, Cloud Functions, and Firestore, resulting in seamless shopping experiences and 40% faster checkouts.",
    image: "/placeholder.svg?height=400&width=600",
    results: [
      "40% faster checkout process",
      "99.98% uptime with auto-scaling",
      "Enhanced customer engagement with AI-driven recommendations"
    ]
  },
  {
    company: "SecureFinance Corp.",
    title: "Fraud Detection with Google AI",
    description: "Developed an advanced fraud detection system leveraging Google AI and Vertex AI, reducing fraud cases by 75% and improving transaction security.",
    image: "/placeholder.svg?height=400&width=600",
    results: [
      "75% reduction in fraudulent transactions",
      "Real-time threat analysis with Google Cloud Security",
      "Seamless integration with banking systems"
    ]
  }
]

export function SuccessStories() {
  return (
    <section className="bg-[#080B16] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            GCP Success Stories
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          See how businesses are transforming with Google Cloud Platform&apos;s powerful solutions.

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
