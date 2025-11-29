"use client";

import { motion } from 'framer-motion';
import { Users, BarChart3, PieChart, Filter, Search, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: Users,
    title: "Enhanced Customer Insights",
    description: "Gain a deeper understanding of customer behavior, preferences, and buying patterns through AI-powered segmentation."
  },
  {
    icon: BarChart3,
    title: "Targeted Marketing Campaigns",
    description: "Craft personalized marketing strategies by identifying and targeting specific customer segments."
  },
  {
    icon: PieChart,
    title: "Optimized Product Offerings",
    description: "Align product assortments with customer segments to increase relevance and drive sales."
  },
  {
    icon: Filter,
    title: "Improved Customer Retention",
    description: "Identify at-risk customers and deploy tailored retention strategies to boost loyalty."
  },
  {
    icon: Search,
    title: "Real-time Personalization",
    description: "Deliver dynamic, individualized shopping experiences by adapting to real-time customer actions."
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Decision Making",
    description: "Leverage AI insights to make informed business decisions and stay ahead of market trends."
  }
];

export function Benefits() {
  return (
    <section className="bg-[#590178] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Benefits of AI-Powered Customer Segmentation
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Unlock the full potential of AI to segment your audience, personalize experiences, and drive sustainable business growth.
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
              className="bg-white p-8 rounded-xl border border-black hover:border-black transition-colors"
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
