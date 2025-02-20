"use client";

import { Server, Settings, Users, ShieldCheck, Database, TrendingUp } from 'lucide-react';

const expertiseAreas = [
  {
    icon: Server,
    title: "Enterprise-Grade Application Development",
    description: "We build scalable, secure, and high-performance enterprise applications tailored to your business needs."
  },
  {
    icon: Settings,
    title: "Custom Enterprise Solutions",
    description: "Our team develops tailored software solutions that streamline workflows and enhance productivity."
  },
  {
    icon: Users,
    title: "Seamless User Experience & UI/UX",
    description: "Intuitive designs that enhance user adoption and engagement for enterprise applications."
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance Assurance",
    description: "We ensure top-tier security and compliance with industry standards, protecting enterprise data."
  },
  {
    icon: Database,
    title: "Scalable Data Architecture & Integration",
    description: "We implement advanced database solutions and seamless system integrations for enterprise applications."
  },
  {
    icon: TrendingUp,
    title: "Business Intelligence & Analytics",
    description: "Transform data into actionable insights with AI-powered analytics and reporting solutions."
  }
];

export function EnterpriseAppExpertise() {
  return (
    <section className="bg-[#080B16] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Our Enterprise App Development Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Empowering businesses with scalable, secure, and innovative enterprise applications designed for efficiency and growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-colors"
            >
              <area.icon className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">{area.title}</h3>
              <p className="text-gray-400">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EnterpriseAppExpertise;
