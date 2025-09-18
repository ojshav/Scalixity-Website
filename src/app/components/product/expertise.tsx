"use client";

import { Layers, Wrench, Settings, Rocket, Users, ShieldCheck } from 'lucide-react';

const expertiseAreas = [
  {
    icon: Layers,
    title: "End-to-End Product Development",
    description: "From ideation to deployment, we build high-quality software solutions tailored to your business needs."
  },
  {
    icon: Wrench,
    title: "Custom Software Engineering",
    description: "We design and develop custom applications with robust architectures and scalable frameworks."
  },
  {
    icon: Settings,
    title: "Agile Development & DevOps",
    description: "Leverage Agile methodologies and DevOps practices for faster, more efficient development cycles."
  },
  {
    icon: Rocket,
    title: "Innovation & Emerging Technologies",
    description: "We integrate AI, blockchain, and IoT to create next-gen digital solutions that drive competitive advantage."
  },
  {
    icon: Users,
    title: "User-Centric Design & UX/UI",
    description: "Our designs focus on intuitive user experiences that enhance engagement and business growth."
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance Assurance",
    description: "We implement industry-leading security measures to protect data and ensure regulatory compliance."
  }
];

export function ProductDevelopmentExpertise() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            Our Product Development Expertise
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Delivering high-performance, scalable, and secure software solutions through expert engineering and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <div 
              key={index}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:border-black transition-colors"
            >
              <area.icon className="w-12 h-12 text-black mb-6" />
              <h3 className="text-xl font-bold text-black mb-4">{area.title}</h3>
              <p className="text-black">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductDevelopmentExpertise;
