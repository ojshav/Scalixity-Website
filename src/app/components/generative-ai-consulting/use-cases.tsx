import Image from 'next/image';
import { motion } from 'framer-motion';

const useCases = [
  {
    title: "Content Generation",
    description: "Automate the creation of high-quality, engaging content across multiple formats and languages.",
    image: "/placeholder.svg?height=400&width=600",
    stats: [
      { value: "60%", label: "Reduction in Content Creation Time" },
      { value: "40%", label: "Increase in Content Output" }
    ]
  },
  {
    title: "Customer Service",
    description: "Implement AI-powered chatbots and virtual assistants for 24/7 customer support.",
    image: "/placeholder.svg?height=400&width=600",
    stats: [
      { value: "85%", label: "First Response Time Improvement" },
      { value: "45%", label: "Cost Reduction" }
    ]
  },
  {
    title: "Product Development",
    description: "Accelerate innovation and reduce time-to-market with AI-assisted product development.",
    image: "/placeholder.svg?height=400&width=600",
    stats: [
      { value: "50%", label: "Faster Development Cycles" },
      { value: "35%", label: "Reduction in Development Costs" }
    ]
  }
];

export function UseCases() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-6">
            Generative AI Use Cases
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Discover how our Generative AI solutions can transform different aspects of your business.
          </p>
        </div>

        <div className="space-y-16">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className={index % 2 === 0 ? "md:order-1" : "md:order-2"}>
                <h3 className="text-3xl font-bold text-black mb-4">{useCase.title}</h3>
                <p className="text-lg text-black mb-8">{useCase.description}</p>
                <div className="grid grid-cols-2 gap-8">
                  {useCase.stats.map((stat, idx) => (
                    <div key={idx}>
                      <div className="text-4xl font-bold text-[#0A0B14] mb-2">{stat.value}</div>
                      <div className="text-md text-black">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={index % 2 === 0 ? "md:order-2" : "md:order-1"}>
                <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={useCase.image}
                    alt={useCase.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UseCases;
