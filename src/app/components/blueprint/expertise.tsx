"use client";

import { Code, Layers, Palette, ShieldCheck, BarChart3, Wrench } from 'lucide-react';

const expertiseAreas = [
  {
    icon: Code,
    title: "Custom App Architecture",
    description: "We design robust, scalable, and efficient application architectures tailored to your business requirements, ensuring flexibility, security, and high performance."
  },
  {
    icon: Layers,
    title: "End-to-End Development",
    description: "From conceptualization to deployment, we handle the full app development lifecycle, delivering seamless, feature-rich, and future-proof applications."
  },
  {
    icon: Palette,
    title: "UI/UX Design & Prototyping",
    description: "Our design-first approach ensures intuitive, visually engaging, and user-friendly interfaces that enhance usability, engagement, and conversion rates."
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance Assurance",
    description: "We implement advanced security measures, data encryption, and compliance protocols to protect user data and ensure regulatory adherence."
  },
  {
    icon: BarChart3,
    title: "Data-Driven Insights & Optimization",
    description: "Leveraging analytics and performance monitoring, we continuously optimize app performance, scalability, and user engagement."
  },
  {
    icon: Wrench,
    title: "Post-Launch Support & Maintenance",
    description: "We offer ongoing support, updates, and performance enhancements to keep your app running smoothly and efficiently in evolving market landscapes."
  }
];

export function Expertise() {
  return (
    <section className="py-24" style={{ backgroundColor: '#A8B2E7' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1D1D1D] mb-6">
            Our App Blueprint Expertise
          </h2>
          <p className="text-xl text-[#333] max-w-3xl mx-auto">
            We build scalable, secure, and innovative applications with a focus on performance and user experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <div 
              key={index}
              className="p-8 rounded-xl border border-black hover:border-gray-700 transition-colors"
              style={{ backgroundColor: '#F3F1EB' }}
            >
              <area.icon className="w-12 h-12 text-[#5A5A5A] mb-6" />
              <h3 className="text-xl font-bold text-[#1D1D1D] mb-4">{area.title}</h3>
              <p className="text-[#333]">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Expertise;
