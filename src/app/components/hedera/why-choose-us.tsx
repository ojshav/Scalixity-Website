"use client"

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const reasons = [
  {
    title: "Expertise in AI Innovation",
    description: "Hedra is at the forefront of AI technology, blending creativity with precision to develop state-of-the-art AI solutions that drive business transformation. Our team of AI specialists stays updated with the latest advancements, ensuring we implement cutting-edge solutions tailored to solve complex business challenges. With a deep understanding of neural networks, machine learning algorithms, and natural language processing, we push the boundaries of AI innovation to give your business a competitive edge."
  },
  {
    title: "Tailored AI Solutions",
    description: "We recognize that no two businesses are alike. Our AI strategies are custom-crafted to align with your unique goals, ensuring maximum impact and relevance. Hedra invests time in thoroughly understanding your company's needs, pain points, and aspirations. By combining this knowledge with AI capabilities, we create solutions that not only address current issues but also prepare you for future opportunities. From personalized recommendation engines to AI-driven data analytics, every solution we design is built with your growth in mind."
  },
  {
    title: "End-to-End AI Support",
    description: "From concept to deployment and beyond, Hedra offers full-cycle AI support. We stand by you through every phase, ensuring smooth integration and sustainable results. Our support begins with strategic AI consulting, followed by rigorous development, seamless deployment, and continuous optimization. Whether you're adopting AI for the first time or scaling existing systems, our team works collaboratively to minimize disruptions, train your staff, and ensure AI systems operate efficiently, delivering long-term value to your organization."
  },
  {
    title: "Commitment to Ethical AI",
    description: "Transparency, fairness, and accountability are core to our AI solutions. Hedra prioritizes ethical AI practices, fostering trust and long-term success. We actively mitigate biases in AI models, ensure data privacy, and adhere to global AI regulations. Our approach revolves around creating AI systems that are not only powerful but also responsible. We empower businesses to leverage AI confidently, knowing that every solution respects user rights, promotes fairness, and supports sustainable innovation."
  }
]

export function WhyChooseUs() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">WHY US</span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            Why choose Hedra for AI Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Partner with Hedra to harness AI's full potential. Our expertise, innovation, and ethical approach empower your business for a smarter tomorrow. We don't just build AI systems — we create intelligent solutions tailored to transform your operations and future-proof your success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs;
