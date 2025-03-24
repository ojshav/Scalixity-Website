'use client'
import { ArrowRight, Brain, BarChartIcon as ChartBar, Sparkles, MessageSquare, Cog } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const offerings = [
  {
    title: "Plan Your AI Adoption",
    description: "Our AI consulting services focus on guiding businesses through the complexities of AI integration. From initial planning to full implementation, we collaborate with clients to develop customized AI strategies that enhance competitive advantage and drive innovation.",
    link: "/services/ai-consulting",
    icon: Brain
  },
  {
    title: "Enhance Decision-Making with AI",
    description: "We harness AI to transform business decision-making by arming our clients with deep analytical insights, automation, and optimized operations. Scalixity's experts help predict future trends, equipping businesses to innovate proactively and make data-driven decisions.",
    link: "/services/ai-analytics",
    icon: ChartBar
  },
  {
    title: "Ignite Creativity with Generative AI",
    description: "We build custom AI agents and Generative AI solutions to help businesses provide personalized content and products, fostering continuous innovation and market differentiation for sustained growth and a competitive edge.",
    link: "/services/generative-ai",
    icon: Sparkles
  },
  {
    title: "Enhance Customer Interaction",
    description: "At Scalixity, we specialize in creating custom chatbots tailored to the specific data, needs, and business contexts of our clients. Our approach ensures that each chatbot delivers seamless, personalized interactions, enhancing customer engagement and satisfaction.",
    link: "/services/chatbots",
    icon: MessageSquare
  },
  {
    title: "Streamline Your AI Operations",
    description: "Our MLOps team focuses on efficient AI implementation and measurable impact. We assist clients through the development, deployment, and monitoring of AI systems, aiming for operational excellence. By supporting businesses with continuous performance evaluations, we ensure that their AI investments yield tangible results.",
    link: "/services/mlops",
    icon: Cog
  }
]

export function WhatWeOffer() {
  return (
    <section className="bg-[#9FA8DA] py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-md text-black uppercase tracking-wider font-semibold">WHAT WE OFFER</span>
          <h2 className="text-4xl md:text-6xl font-bold text-black mt-4 mb-6">
            Transforming Businesses with AI Solutions
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Scalixity brings together industry specialists, strategic thinkers, and advanced technology to
            drive data-driven success and scale value.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          {offerings.map((offering, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 border border-black hover:bg-[#f4f4f4] transition-colors shadow-lg"
            >
              <motion.div
                className="text-black mb-4"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <offering.icon size={40} className="text-black" />
              </motion.div>
              <h3 className="text-3xl font-bold text-black mb-4 flex items-center">
                {offering.title}
                <ArrowRight className="ml-2 h-5 w-5 text-black" />
              </h3>
              <p className="text-gray-600 mb-6">{offering.description}</p>
              <Link 
                href={offering.link} 
                className="inline-flex items-center text-black hover:text-gray-700 font-medium"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4 text-black" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
