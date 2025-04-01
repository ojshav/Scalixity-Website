"use client";

import { Store, Layers, Brush, ShieldCheck, DollarSign, BarChart3 } from "lucide-react";

const expertiseAreas = [
  {
    icon: Store,
    title: "Custom NFT Marketplace Development",
    description:
      "We build feature-rich NFT marketplaces with seamless minting, buying, selling, and auctioning functionalities tailored to your business needs.",
  },
  {
    icon: Layers,
    title: "Multi-Chain & Interoperable Solutions",
    description:
      "Integrate your NFT marketplace with multiple blockchains, ensuring flexibility, scalability, and interoperability across ecosystems.",
  },
  {
    icon: Brush,
    title: "UI/UX-Optimized NFT Platforms",
    description:
      "Delivering intuitive and engaging user experiences with modern, aesthetically appealing interfaces for seamless interactions.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Smart Contract Audits",
    description:
      "Implementing robust security measures, including contract audits, anti-fraud mechanisms, and compliance with industry standards.",
  },
  {
    icon: DollarSign,
    title: "Tokenomics & Monetization Strategies",
    description:
      "Designing sustainable revenue models, including royalties, fractional ownership, and DeFi integrations to maximize earnings.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Performance Optimization",
    description:
      "Providing real-time insights into marketplace activity, user engagement, and transaction trends for data-driven decision-making.",
  },
];

export function Expertise() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            Our NFT Marketplace Development Expertise
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Creating secure, scalable, and high-performance NFT marketplaces tailored to your unique business goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:border-primary/50 transition-colors"
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

export default Expertise;
