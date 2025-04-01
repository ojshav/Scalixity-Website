"use client";

import { motion } from 'framer-motion';

const services = [
  {
    title: "Custom Backend Development",
    description: "We build high-performance, event-driven backends using Node.js for scalable and efficient web applications."
  },
  {
    title: "Real-Time Applications",
    description: "Develop chat apps, live streaming platforms, and dashboards with WebSocket support for real-time data exchange."
  },
  {
    title: "API Development & Integration",
    description: "Design RESTful and GraphQL APIs, ensuring seamless client-server communication and optimized data flow."
  },
  {
    title: "Microservices Architecture",
    description: "Leverage Node.js for microservices, breaking down monolithic apps into independent, scalable services."
  },
  {
    title: "Database Connectivity",
    description: "Integrate Node.js with MongoDB, PostgreSQL, and Redis for fast, secure, and reliable data storage solutions."
  },
  {
    title: "Cloud Deployment & Scaling",
    description: "Deploy Node.js apps on cloud platforms like AWS, Google Cloud, and Heroku, ensuring speed and flexibility."
  }
];

export function WhatWeOffer() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            Our Node.js Development Services
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Supercharge your backend with fast, scalable Node.js solutions — tailored for modern web and mobile apps. Our expertise lies in building high-performance APIs, real-time applications, and microservices architectures, ensuring seamless data flow, robust security, and cloud-ready deployments. Let’s craft agile, future-proof solutions that grow with your business.
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
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:border-gray-500 transition-colors"
            >
              <h3 className="text-xl font-bold text-black mb-4">{service.title}</h3>
              <p className="text-black leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
