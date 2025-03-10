import Image from 'next/image'
import { motion } from 'framer-motion'

const successStories = [
  {
    company: "CloudInnovate Ltd.",
    title: "Scalable E-commerce Platform on AWS",
    description: "Developed a robust, scalable e-commerce platform leveraging AWS services like EC2, S3, and DynamoDB, resulting in a 50% improvement in load times and seamless customer experiences.",
    image: "/placeholder.svg?height=400&width=600",
    results: [
      "50% faster page load times",
      "99.99% uptime with AWS Auto Scaling",
      "Increased sales by 35% through optimized infrastructure"
    ]
  },
  {
    company: "FinTech Solutions",
    title: "AI-Driven Fraud Detection System on AWS",
    description: "Implemented a machine learning-based fraud detection system using AWS SageMaker, reducing fraudulent transactions by 80% and enhancing security protocols.",
    image: "/placeholder.svg?height=400&width=600",
    results: [
      "80% reduction in fraudulent transactions",
      "Real-time monitoring with AWS CloudWatch",
      "Seamless integration with existing banking systems"
    ]
  }
]

export function SuccessStories() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            AWS Success Stories
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
          Discover how businesses leverage AWS for scalable, secure, and high-performance applications.
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
              className="bg-white rounded-xl overflow-hidden shadow-lg"
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
                <div className="text-black font-medium mb-2">{story.company}</div>
                <h3 className="text-2xl font-bold text-black mb-4">{story.title}</h3>
                <p className="text-black mb-6">{story.description}</p>
                <div className="space-y-3">
                  {story.results.map((result, idx) => (
                    <div key={idx} className="flex items-center text-black">
                      <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
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

