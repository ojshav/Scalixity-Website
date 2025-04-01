'use client'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export function CaseStudies() {
  const caseStudies = [
    {
      title: "Transformed Voice Ordering System at a Major Restaurant",
      description: "DeVoice transforms voice ordering systems at major restaurants by leveraging Generative AI and advanced voice technology.",
      result: "57% Reduction in Order Handling",
      quote: "We were particularly impressed by the quality and precision of DeVoice. Its implementation not only streamlined our operations but also significantly elevated our customer service levels.",
      author: "Doughlus, CTO, DeVoice",
      link: "/case-studies/devoice",
      image: "/images/ai-voice-ordering.svg"
    },
    {
      title: "AI-Powered Chatbot for E-Commerce",
      description: "Built an AI chatbot that handles 70% of customer queries, providing instant responses and boosting sales.",
      result: "70% Query Automation",
      quote: "The AI chatbot has drastically reduced our response time and increased customer satisfaction. It's like having a 24/7 support agent.",
      author: "Sarah, CEO, ShopSmart",
      link: "/case-studies/ai-chatbot",
      image: "/images/ai-chatbot.svg"
    },
    {
      title: "Predictive Analytics for Healthcare",
      description: "Implemented predictive models to forecast patient readmission rates, helping hospitals optimize resources.",
      result: "40% Improved Forecasting Accuracy",
      quote: "The predictive models provided insights that reshaped our resource allocation strategy, enhancing patient care.",
      author: "Dr. Lee, Head of Data, MedixCare",
      link: "/case-studies/healthcare-analytics",
      image: "/images/healthcare-analytics.svg"
    }
  ]

  return (
    <section className="bg-white py-32">
      <div className="container mx-auto px-4">
        <span className="block text-sm text-black uppercase tracking-wider mb-4">
          CASE STUDIES
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-black mb-12">
          AI Solutions we have built for our clients
        </h2>
        {caseStudies.map((study, index) => (
          <div key={index} className="relative bg-[#9FA8DA] border border-black rounded-xl overflow-hidden mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                className="p-12"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-3xl font-bold text-black mb-4">
                  {study.title}
                </h3>
                <p className="text-black mb-8">
                  {study.description}
                </p>
                <div className="mb-8">
                  <div className="text-6xl font-bold text-black mb-2">{study.result.split(' ')[0]}</div>
                  <p className="text-black">{study.result.split(' ').slice(1).join(' ')}</p>
                </div>
                <blockquote className="bg-white p-6 rounded-lg border border-black mb-8">
                  <p className="text-black italic mb-4">
                    &ldquo;{study.quote}&rdquo;
                  </p>
                  <footer className="text-black font-medium">
                    - {study.author}
                  </footer>
                </blockquote>
                <Link 
                  href={study.link}
                  className="inline-flex items-center text-black hover:text-gray-800 font-medium px-4 py-2"
                >
                  View case study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
              <motion.div 
                className="relative h-full min-h-[300px]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        ))}
        
      </div>
    </section>
  )
}


