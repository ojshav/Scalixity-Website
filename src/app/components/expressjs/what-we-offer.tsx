"use client";

import { motion } from 'framer-motion';

const services = [
  {
    title: "Custom API Development",
    description: "We build robust RESTful APIs using Express.js, ensuring seamless data exchange and efficient client-server communication."
  },
  {
    title: "Middleware Integration",
    description: "Enhance your app's functionality with Express.js middleware for logging, authentication, and error handling."
  },
  {
    title: "Real-Time Data Processing",
    description: "Implement WebSocket support for real-time data streaming, perfect for chat apps, dashboards, and live updates."
  },
  {
    title: "Scalable Routing Solutions",
    description: "Design modular and dynamic routes, enabling clean, organized, and scalable backend architectures."
  },
  {
    title: "Database Integration",
    description: "Seamlessly connect Express.js with databases like MongoDB, PostgreSQL, and MySQL for optimized data management."
  },
  {
    title: "Cloud Deployment & Optimization",
    description: "Deploy your Express.js applications on cloud platforms like AWS, Vercel, and Heroku, ensuring speed and scalability."
  }
];

export function WhatWeOffer() {
  return (
    <section className="bg-[#A7ADD9] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-gray-700 uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Our Express.js Development Services
          </h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            Empower your backend with high-performance Express.js solutions — from API development to cloud deployment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl border border-gray-300 hover:border-gray-500 transition-colors"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-800 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
