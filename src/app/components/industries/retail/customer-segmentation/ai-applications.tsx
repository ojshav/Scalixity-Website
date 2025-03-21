"use client";

import { motion } from 'framer-motion';
import { Users, BarChart3, PieChart, Filter, Search, TrendingUp } from 'lucide-react';

const applications = [
  {
    icon: Users,
    title: "Customer Profiling",
    description: "AI models that segment customers based on demographics, behavior, and purchasing patterns."
  },
  {
    icon: BarChart3,
    title: "Behavioral Analytics",
    description: "Track customer interactions and predict future actions to tailor marketing strategies."
  },
  {
    icon: PieChart,
    title: "Market Segmentation",
    description: "Identify key customer segments to optimize product offerings and personalize experiences."
  },
  {
    icon: Filter,
    title: "Real-time Data Filtering",
    description: "Instantly filter and categorize customer data for precise targeting and outreach."
  },
  {
    icon: Search,
    title: "Predictive Search & Recommendations",
    description: "Use AI to suggest products and services based on individual preferences and trends."
  },
  {
    icon: TrendingUp,
    title: "Trend Analysis",
    description: "Discover emerging trends in customer behavior to stay ahead in the competitive market."
  }
];

export function AIApplications() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">AI AGENT APPLICATIONS</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Transforming Retail with AI-Powered Customer Segmentation
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Unleash the power of AI to understand your audience better, personalize shopping experiences, and drive business growth through intelligent customer segmentation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl border border-black hover:border-brown-500 transition-colors"
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
