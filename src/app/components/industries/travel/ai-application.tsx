"use client";

import { motion } from "framer-motion";
import { Globe, MapPin, Users, Plane, Calendar, ShieldCheck } from "lucide-react";

const travelApplications = [
  {
    icon: Globe,
    title: "Smart Travel Planning",
    description: "Utilize AI algorithms to create personalized itineraries based on user preferences, budget, and real-time data."
  },
  {
    icon: MapPin,
    title: "Dynamic Pricing Optimization",
    description: "Implement AI models to adjust pricing dynamically by analyzing demand patterns, competitor rates, and seasonal trends."
  },
  {
    icon: Users,
    title: "Customer Experience Personalization",
    description: "Enhance user experience by offering tailored recommendations for flights, hotels, and activities."
  },
  {
    icon: Plane,
    title: "Predictive Demand Forecasting",
    description: "Leverage AI to predict travel demand and optimize resource allocation for airlines, hotels, and agencies."
  },
  {
    icon: Calendar,
    title: "Real-Time Travel Assistance",
    description: "AI chatbots provide instant support, flight updates, and itinerary changes for seamless travel experiences."
  },
  {
    icon: ShieldCheck,
    title: "Fraud Detection & Security",
    description: "Use AI to identify suspicious activities, prevent fraud, and ensure secure transactions for online bookings."
  }
];

export function AIApplications() {
  return (
    <section className="bg-[#590178] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-white uppercase tracking-wider">
            AI APPLICATIONS
          </span>
          <h2 className="text-4xl font-bold text-white mt-4 mb-6">
            Revolutionizing the Travel Industry with AI
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Explore how AI empowers the travel sector by personalizing experiences, optimizing pricing, predicting demand, and enhancing security. Our AI solutions help travel businesses streamline operations, boost customer satisfaction, and stay competitive.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {travelApplications.map((app, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:border-black transition-colors"
            >
              <app.icon className="w-12 h-12 text-black mb-6" />
              <h3 className="text-xl font-bold text-black mb-4">{app.title}</h3>
              <p className="text-black">{app.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AIApplications;
