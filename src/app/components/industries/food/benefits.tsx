"use client";

import { motion } from "framer-motion";
import { Utensils, ShoppingCart, Truck, Clock, LineChart, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: Utensils,
    title: "Enhanced Customer Experience",
    description: "Improve customer satisfaction with online ordering, real-time tracking, and personalized recommendations."
  },
  {
    icon: ShoppingCart,
    title: "Seamless Online Ordering",
    description: "Enable hassle-free online food ordering with secure payments and user-friendly interfaces."
  },
  {
    icon: Truck,
    title: "Optimized Delivery & Logistics",
    description: "Ensure timely deliveries with automated dispatching, real-time GPS tracking, and route optimization."
  },
  {
    icon: Clock,
    title: "Faster Service & Automation",
    description: "Reduce wait times and enhance efficiency with automated order processing and AI-driven kitchen management."
  },
  {
    icon: LineChart,
    title: "Data-Driven Business Growth",
    description: "Utilize AI-powered analytics to track customer preferences, sales trends, and operational efficiency."
  },
  {
    icon: ShieldCheck,
    title: "Food Safety & Compliance",
    description: "Ensure regulatory compliance with automated quality checks, inventory monitoring, and secure food handling."
  }
];

export function Benefits() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">
            BENEFITS
          </span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Transforming the Food Industry with Digital Innovation
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Leverage technology to enhance operations, customer experience, and business growth in the food sector.
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
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black"
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
