"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

const useCases = [
  {
    title: "Financial AI Agent",
    description: "We develop AI agents for finance and banking institutions that provide personalized financial advice and proactive customer service tailored to individual client goals and risk tolerance, enhancing customer satisfaction.",
    image: "/images/financial-ai-agent.svg"
  },
  {
    title: "Underwriting & Pricing Automation",
    description: "By building AI algorithms that automate underwriting, we help businesses accurately assess risk, determine optimal pricing, and improve efficiency while reducing manual labor.",
    image: "/images/underwriting-automation.svg"
  },
  {
    title: "Financial Document Automation",
    description: "We streamline financial document processing using AI, automating data extraction, classification, and validation to reduce errors and ensure compliance with regulatory requirements.",
    image: "/images/financial-document-automation.svg"
  },
  {
    title: "Personalized Financial Recommendation Engine",
    description: "Our AI-powered recommendation engine delivers personalized investment advice and product suggestions, enhancing customer engagement and loyalty through tailored financial recommendations.",
    image: "/images/financial-recommendation-engine.svg"
  },
  {
    title: "Risk Assessment and Management",
    description: "We build AI-driven risk management systems that identify potential risks and assess their impact, helping businesses create effective mitigation strategies for sound decision-making.",
    image: "/images/risk-assessment.svg"
  },
  {
    title: "Credit Risk Management Solution",
    description: "Our AI-powered credit scoring model accurately assesses creditworthiness and identifies early warning signs of financial distress, enabling timely intervention.",
    image: "/images/credit-risk-management.svg"
  },
  {
    title: "Regulatory Code Change Consultant",
    description: "We create an AI system that monitors regulatory changes and provides real-time updates, ensuring businesses stay compliant and adapt quickly to avoid penalties.",
    image: "/images/regulatory-code-change.svg"
  },
  {
    title: "Financial Analysis & Forecasting",
    description: "By leveraging AI for financial forecasting, we help businesses analyze vast datasets and predict market trends accurately, providing valuable insights for strategic decision-making.",
    image: "/images/financial-forecasting.svg"
  },
  {
    title: "Financial Operations and Reporting System",
    description: "We assist financial and banking businesses to automate routine tasks, improve operational efficiency, and generate accurate financial reports.",
    image: "/images/financial-operations.svg"
  },
  {
    title: "Portfolio Management Solution",
    description: "We build an AI-powered portfolio management tool that optimizes investments based on risk tolerance, return objectives, and market conditions, enhancing portfolio performance and returns.",
    image: "/images/portfolio-management.svg"
  },
  {
    title: "Integrated Trading Solution",
    description: "We develop AI-powered trading systems that automate trade execution and optimize performance, reducing manual intervention and increasing efficiency in trading operations.",
    image: "/images/trading-solution.svg"
  },
  {
    title: "Intelligent Customer Support",
    description: "The AI-powered chatbot and virtual assistant we build provide personalized and efficient customer support, enhancing customer experience and reducing operational costs.",
    image: "/images/customer-support.svg"
  },
  {
    title: "AI-Powered Financial CRM",
    description: "We develop an AI-powered CRM system that tailors customer interactions, improves sales and retention, and provides valuable insights for marketing and customer relationship management.",
    image: "/images/financial-crm.svg"
  },
  {
    title: "Market Insight Platform",
    description: "We build an AI-powered market insight platform that provides real-time insights, enabling informed decision-making and gaining a competitive advantage.",
    image: "/images/market-insight.svg"
  },
  {
    title: "Custom Solution Development",
    description: "We can develop a customized finance and banking AI solution based on your specific use case and requirements.",
    image: "/images/custom-solution.svg"
  }
]

export function UseCases() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            AI Use Cases for Finance & Banking
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how our AI solutions revolutionize the finance and banking sectors.
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
                <h3 className="text-2xl font-bold text-foreground mb-4">{useCase.title}</h3>
                <p className="text-muted-foreground mb-8">{useCase.description}</p>
              </div>
              <div className={index % 2 === 0 ? "md:order-2" : "md:order-1"}>
                <div className="relative h-[300px] rounded-xl overflow-hidden">
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
  )
}

export default UseCases;
