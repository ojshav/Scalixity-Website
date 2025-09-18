"use client";

import { Server, Settings, Users, ShieldCheck, Database, TrendingUp } from 'lucide-react';

const expertiseAreas = [
  {
    icon: Users,
    title: "User-Centered UI/UX Design",
    description: "We create visually stunning and intuitive interfaces that enhance user experience and engagement, ensuring seamless navigation and accessibility."
  },
  {
    icon: Server,
    title: "Responsive & Adaptive Design",
    description: "Our designs are fully responsive, ensuring flawless functionality and aesthetics across all devices, from desktops to mobile phones."
  },
  {
    icon: Settings,
    title: "SEO & Performance Optimization",
    description: "We optimize web performance and search engine rankings, ensuring fast loading speeds, accessibility, and a strong online presence."
  },
  {
    icon: ShieldCheck,
    title: "Secure & Scalable Solutions",
    description: "Implementing industry-leading security measures, we build websites that are both robust and scalable to meet your growing business needs."
  },
  {
    icon: Database,
    title: "Custom Web Development",
    description: "From e-commerce platforms to corporate websites, we craft tailored web solutions that align with your brand identity and business goals."
  },
  {
    icon: TrendingUp,
    title: "Conversion-Focused Design",
    description: "Our design strategies focus on maximizing user engagement and conversion rates, ensuring your website drives measurable business success."
  }
];

export function Expertise() {
  return (
    <section className="py-24" style={{ backgroundColor: '#A8B2E7' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1D1D1D] mb-6">
            Our Web Design Expertise
          </h2>
          <p className="text-xl text-[#333] max-w-3xl mx-auto">
            Elevate your digital presence with stunning, high-performance web designs tailored to your needs.
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
