'use client'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export function ProjectShowcase() {
  const projects = [
    {
      title: "Scalixity-Ecommerce Website",
      description: "Scalixity is an all-in-one e-commerce platform that seamlessly integrates AI, CRM, and advanced analytics. Designed for growth-focused businesses, it streamlines inventory management, enhances customer engagement through intelligent chatbots, and provides real-time data insights to help you launch and scale your online store effortlessly.",
      result:"30% Reduction in Inventory Costs",
      quote: "Scalixity has completely transformed our operations. With AI-driven automation and integrated CRM, we’ve cut costs and boosted our sales—it's a game-changer.",
      link: "http://kea.mywire.org:5500/",
      image: "/scalixity-ecommerce.svg"
    },
    {
        title: "Scalixity-Nakshatra Gyan",
        description: "Nakshatra Gyan is an intelligent chatbot-enabled platform that assists users with general queries and provides seamless access to services and products. It includes a dedicated Admin Panel for efficient management of users, content, and orders.",
        result: "40% increase in user engagement",
        quote: "The AI solution has enhanced inventory management, significantly boosted user engagement, and improved the overall user experience, resulting in noticeable cost savings.",
        link: "http://kea.mywire.org:5600/",
        image: "/nakshatra-gyan.svg"
      },
      {
        title: "Scalixity-AI-Driven CRM Solution",
        description: "An intelligent customer relationship management system designed to streamline operations, enhance customer engagement, and drive business growth.",
        result: "45% Reduction in Analytics Costs",
        quote: "The AI solution has transformed our user analytics, enabling faster insights and significant cost savings across departments.",
        link: "http://kea.mywire.org:5700/",
        image: "/crm.svg"
      },
    {
      title: "Scalixity-GPS Tracker",
      description: "Scalixity-GPS Tracker is an advanced GPS tracking website designed to keep your vehicle secure and monitored at all times.",
      result: "50% Increase in Efficiency",
      quote: "Automation has doubled our efficiency and reduced manual errors.",
      link: "http://kea.mywire.org:5900/login",
      image: "/gps.svg"
    }
  ]

  return (
    <section className="bg-[#F3F1EB] py-32">
      <div className="container mx-auto px-4">
        <span className="block text-sm text-black uppercase tracking-wider mb-4">
          Our Projects
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-black mb-12">
          Innovative Projects Delivered
        </h2>
        {projects.map((project, index) => (
          <div key={index} className="relative bg-[#9FA8DA] border border-black rounded-xl overflow-hidden mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              {index % 2 === 0 ? (
                <>
                  <motion.div 
                    className="p-12"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h3 className="text-3xl font-bold text-black mb-4">
                      {project.title}
                    </h3>
                    <p className="text-black mb-8">
                      {project.description}
                    </p>
                    <div className="mb-8">
                      <div className="text-6xl font-bold text-black mb-2">{project.result.split(' ')[0]}</div>
                      <p className="text-black">{project.result.split(' ').slice(1).join(' ')}</p>
                    </div>
                    <blockquote className="bg-white p-6 rounded-lg border border-black mb-8">
                      <p className="text-black italic mb-4">
                        &ldquo;{project.quote}&rdquo;
                      </p>
                    </blockquote>
                    <Link 
                      href={project.link}
                      className="inline-flex items-center text-black hover:text-gray-800 font-medium px-4 py-2"
                    >
                      View project <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </motion.div>
                  <motion.div 
                    className="relative h-full min-h-[300px]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </>
              ) : (
                <>
                  <motion.div 
                    className="relative h-full min-h-[300px]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <motion.div 
                    className="p-12"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h3 className="text-3xl font-bold text-black mb-4">
                      {project.title}
                    </h3>
                    <p className="text-black mb-8">
                      {project.description}
                    </p>
                    <div className="mb-8">
                      <div className="text-6xl font-bold text-black mb-2">{project.result.split(' ')[0]}</div>
                      <p className="text-black">{project.result.split(' ').slice(1).join(' ')}</p>
                    </div>
                    <blockquote className="bg-white p-6 rounded-lg border border-black mb-8">
                      <p className="text-black italic mb-4">
                        &ldquo;{project.quote}&rdquo;
                      </p>
                    </blockquote>
                    <Link 
                      href={project.link}
                      className="inline-flex items-center text-black hover:text-gray-800 font-medium px-4 py-2"
                    >
                      View Live Project <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </motion.div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 