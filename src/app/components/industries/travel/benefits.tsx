"use client";

import { motion } from 'framer-motion';
import { Globe, Plane, MapPin, Users, BarChart, ShieldCheck } from 'lucide-react';

const benefits = [
  {
    icon: Globe,
    title: "Personalized Travel Experiences",
    description: "Leverage AI to offer tailored travel recommendations, customized itineraries, and targeted offers, enhancing customer satisfaction."
  },
  {
    icon: Plane,
    title: "Dynamic Pricing Optimization",
    description: "Implement AI-powered dynamic pricing models that adjust rates in real-time based on demand, competition, and seasonal trends."
  },
  {
    icon: MapPin,
    title: "Smart Route Planning",
    description: "Use AI algorithms to optimize travel routes, reduce delays, and suggest efficient transportation options for seamless journeys."
  },
  {
    icon: Users,
    title: "Enhanced Customer Support",
    description: "Integrate AI chatbots and virtual assistants to provide 24/7 support, answer inquiries, and handle booking modifications."
  },
  {
    icon: BarChart,
    title: "Predictive Analytics",
    description: "Analyze travel trends and customer behavior using AI, empowering businesses to make data-driven decisions and forecast demand."
  },
  {
    icon: ShieldCheck,
    title: "Fraud Detection & Security",
    description: "Utilize AI models to detect fraudulent transactions, ensuring secure online payments and protecting customer data."
  }
];

export function Benefits() {
  return (
    <section className="bg-[#590178] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-white uppercase tracking-wider">BENEFITS OF AI IN TRAVEL</span>
          <h2 className="text-4xl font-bold text-white mt-4 mb-6">
            Transform Travel with AI Solutions
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Revolutionize the travel experience with AI — enhance personalization, streamline operations, and boost customer engagement for a smarter, more connected journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:border-black/50 transition-colors"
            >
              <benefit.icon className="w-12 h-12 text-black mb-6" />
              <h3 className="text-xl font-bold text-black mb-4">{benefit.title}</h3>
              <p className="text-black">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
