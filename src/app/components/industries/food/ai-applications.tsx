"use client";

import { motion } from 'framer-motion';

const foodIndustryServices = [
  {
    title: "AI-Powered Recipe Recommendations",
    description: "Utilize AI algorithms to suggest personalized recipes based on user preferences, dietary restrictions, and trending ingredients."
  },
  {
    title: "Smart Inventory Management",
    description: "AI forecasts stock needs, reducing food waste by optimizing order quantities and tracking perishable items."
  },
  {
    title: "Predictive Demand Analysis",
    description: "Leverage AI to analyze sales data, seasonal trends, and customer behavior for accurate demand forecasting."
  },
  {
    title: "Food Quality Monitoring",
    description: "AI vision systems detect spoilage, contamination, and defects in food products, ensuring high-quality standards."
  },
  {
    title: "Chatbots for Customer Support",
    description: "Deploy AI-powered chatbots to handle customer inquiries, provide instant support, and recommend menu items."
  },
  {
    title: "Energy Optimization in Kitchens",
    description: "AI systems analyze energy usage in commercial kitchens, helping reduce utility costs and improve efficiency."
  }
];

export function AIApplications() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-black mb-12"
        >
          AI Applications in the Food Industry
        </motion.h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {foodIndustryServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:border-black transition-colors"
            >
              <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
              <p className="text-black leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AIApplications;
