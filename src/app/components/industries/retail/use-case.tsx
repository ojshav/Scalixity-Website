"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

const useCases = [
  {
    title: "Personalized Shopping Experiences",
    description: "We build AI-powered recommendation engines that tailor product suggestions based on customer preferences, browsing history, and behavior, enhancing user engagement and boosting sales.",
    image: "/images/personalized-shopping.svg"
  },
  {
    title: "Inventory Optimization",
    description: "Our AI solutions predict demand fluctuations and optimize stock levels, preventing overstock or stockouts, ensuring efficient supply chain management.",
    image: "/images/inventory-optimization.svg"
  },
  {
    title: "AI-Powered Customer Support",
    description: "We develop AI chatbots and virtual assistants that provide real-time support, resolve queries, and guide customers through their shopping journey, improving satisfaction and reducing workload.",
    image: "/images/customer-support.svg"
  },
  {
    title: "Visual Search Solutions",
    description: "Our AI-powered visual search tools allow customers to search for products using images, simplifying product discovery and improving user experience.",
    image: "/images/visual-search.svg"
  },
  {
    title: "Dynamic Pricing Models",
    description: "We create AI models that adjust product prices dynamically based on market trends, competitor pricing, and demand patterns, maximizing revenue and competitiveness.",
    image: "/images/dynamic-pricing.svg"
  },
  {
    title: "Fraud Detection & Prevention",
    description: "Our AI algorithms identify suspicious activities and detect fraudulent transactions, ensuring secure and trustworthy shopping environments.",
    image: "/images/fraud-detection.svg"
  },
  {
    title: "Sales Forecasting",
    description: "We build AI-powered forecasting tools that analyze historical sales data and market trends to accurately predict future sales and guide inventory decisions.",
    image: "/images/sales-forecasting.svg"
  },
  {
    title: "Customer Sentiment Analysis",
    description: "Our AI models analyze customer feedback, reviews, and social media mentions to gauge public sentiment, helping brands make data-driven decisions.",
    image: "/images/sentiment-analysis.svg"
  },
  {
    title: "In-Store AI Solutions",
    description: "We integrate AI-driven analytics for smart shelves, checkout-free shopping, and heat maps, revolutionizing physical store experiences.",
    image: "/images/in-store-ai.svg"
  },
  {
    title: "Product Categorization Automation",
    description: "We use AI to automate product tagging, categorization, and attribute extraction, ensuring your catalog remains accurate and easy to navigate.",
    image: "/images/product-categorization.svg"
  },
  {
    title: "Customer Retention Strategies",
    description: "Our AI solutions identify at-risk customers and implement personalized retention strategies, boosting loyalty and lifetime value.",
    image: "/images/customer-retention.svg"
  },
  {
    title: "Ad Campaign Optimization",
    description: "We create AI models that optimize ad placements, target the right audience, and maximize ROI for digital marketing campaigns.",
    image: "/images/ad-optimization.svg"
  },
  {
    title: "Store Performance Analytics",
    description: "Our AI tools provide real-time insights into store performance, helping retail managers make data-driven decisions and improve efficiency.",
    image: "/images/store-analytics.svg"
  },
  {
    title: "Market Trend Prediction",
    description: "We build AI platforms that predict emerging retail trends, helping brands stay ahead of the competition and capture new opportunities.",
    image: "/images/market-trends.svg"
  },
  {
    title: "Custom AI Solution Development",
    description: "Need a tailored AI solution for your retail business? We design and build AI models that align with your specific goals and challenges.",
    image: "/images/custom-solution.svg"
  }
]

export function UseCases() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            AI Use Cases for Retail
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your retail business with AI-driven solutions tailored for growth and efficiency.
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
