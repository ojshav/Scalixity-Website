"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const useCases = [
  {
    title: "AI-Powered Travel Assistants",
    description: "Enhance traveler experiences with AI chatbots that provide real-time booking assistance, itinerary planning, and instant customer support.",
    image: "/images/ai-travel-assistant.svg"
  },
  {
    title: "Personalized Travel Recommendations",
    description: "Leverage AI to suggest tailored destinations, activities, and accommodations based on user preferences and past behavior.",
    image: "/images/personalized-travel.svg"
  },
  {
    title: "Dynamic Pricing & Fare Optimization",
    description: "Implement AI algorithms to adjust flight, hotel, and package prices in real-time based on demand, seasonality, and competitor rates.",
    image: "/images/dynamic-pricing.svg"
  },
  {
    title: "Predictive Demand Forecasting",
    description: "Use AI models to predict travel trends, booking patterns, and seasonal demand, helping businesses optimize inventory and pricing strategies.",
    image: "/images/demand-forecasting.svg"
  },
  {
    title: "Fraud Detection & Risk Management",
    description: "Protect your platform with AI-powered fraud detection systems that identify suspicious transactions and mitigate financial risks.",
    image: "/images/fraud-detection.svg"
  },
  {
    title: "AI-Powered Review Analysis",
    description: "Analyze customer feedback and reviews with AI to identify patterns, improve services, and enhance overall traveler satisfaction.",
    image: "/images/review-analysis.svg"
  },
  {
    title: "Smart Itinerary Generation",
    description: "Automate personalized trip planning by curating travel itineraries with AI, considering user preferences, time constraints, and budgets.",
    image: "/images/itinerary-generation.svg"
  },
  {
    title: "Voice Search & Booking Integration",
    description: "Enable seamless voice-activated travel searches and bookings with AI-powered voice recognition technology.",
    image: "/images/voice-search.svg"
  },
  {
    title: "Real-Time Language Translation",
    description: "Incorporate AI translation tools to break language barriers, allowing travelers to communicate and navigate effortlessly.",
    image: "/images/language-translation.svg"
  },
  {
    title: "AI-Driven Customer Retention",
    description: "Predict customer churn and offer proactive deals or experiences to boost loyalty and long-term engagement.",
    image: "/images/customer-retention.svg"
  },
  {
    title: "Sentiment Analysis for Travel Insights",
    description: "Use AI to gauge customer sentiment from social media, reviews, and feedback, helping you adjust services and improve experiences.",
    image: "/images/sentiment-analysis.svg"
  },
  {
    title: "Custom AI Solutions for Travel",
    description: "Develop tailored AI solutions — from chatbots to predictive analytics — designed to fit your travel platform’s unique needs.",
    image: "/images/custom-solution.svg"
  }
];

export function UseCases() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            AI Use Cases for Travel
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Revolutionize travel experiences with AI — from dynamic pricing to personalized itineraries — elevating customer engagement and boosting operational efficiency.
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
              className="grid md:grid-cols-2 gap-8 items-center bg-[#F3F1EB] p-8 rounded-xl border border-black"
            >
              <div className={index % 2 === 0 ? "md:order-1" : "md:order-2"}>
                <h3 className="text-2xl font-bold text-black mb-4">{useCase.title}</h3>
                <p className="text-black mb-8">{useCase.description}</p>
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
  );
}

export default UseCases;
