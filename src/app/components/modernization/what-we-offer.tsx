"use client";

import { Wrench, Cloud, Layers, MonitorSmartphone, Link, Shield, Rocket } from "lucide-react";


const offerings = [
  {
    title: "Legacy System Assessment",
    description: "We analyze your existing applications to identify performance bottlenecks, security risks, and scalability challenges.",
    icon: <Wrench className="w-10 h-10 text-black" />,
  },
  {
    title: "Cloud Migration",
    description: "Seamless transition of your applications to cloud environments like AWS, Azure, and Google Cloud for enhanced flexibility and cost efficiency.",
    icon: <Cloud className="w-10 h-10 text-black" />,
  },
  {
    title: "Microservices & Containerization",
    description: "Breaking monolithic architectures into microservices, leveraging Docker and Kubernetes for better scalability and maintenance.",
    icon: <Layers className="w-10 h-10 text-black" />,
  },
  {
    title: "UI/UX Modernization",
    description: "Enhancing outdated interfaces with modern, responsive, and user-friendly designs to improve customer experience.",
    icon: <MonitorSmartphone className="w-10 h-10 text-black" />,
  },
  {
    title: "API Integration & Optimization",
    description: "Upgrading and integrating APIs to enhance interoperability between different systems and platforms.",
    icon: <Link className="w-10 h-10 text-black" />,
  },
  {
    title: "Performance & Security Enhancements",
    description: "Optimizing application performance while ensuring security compliance and implementing best practices for data protection.",
    icon: <Shield className="w-10 h-10 text-black" />,
  },
  {
    title: "DevOps & Continuous Integration",
    description: "Implementing CI/CD pipelines, automation, and DevOps best practices for faster, more efficient software deployment.",
    icon: <Rocket className="w-10 h-10 text-black" />,
  },
];

export function WhatWeOffer () {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-black">WHAT WE OFFER</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            App Modernization Services
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Transform legacy applications with cutting-edge technology for improved performance, scalability, and security.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offer, index) => (
            <div 
              key={index} 
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">{offer.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">{offer.title}</h3>
                  <p className="text-black">{offer.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
