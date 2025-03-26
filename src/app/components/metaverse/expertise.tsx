"use client";

import { motion } from 'framer-motion';
import { Globe, Layers, Shield, Code, Users, Zap, MonitorSmartphone, ShoppingCart, Briefcase, Cpu } from 'lucide-react';

const expertiseAreas = [
  {
    icon: Globe,
    title: "Immersive Metaverse Experiences",
    description: "We design and develop highly interactive and engaging virtual environments, ensuring users experience lifelike interactions, rich visuals, and seamless digital connectivity. Our metaverse solutions create unique, engaging, and meaningful experiences."
  },
  {
    icon: Layers,
    title: "Scalable & Interoperable Architecture",
    description: "Our metaverse platforms are built to integrate across multiple blockchain networks, ensuring seamless interoperability. We enable frictionless digital experiences, cross-platform compatibility, and decentralized connectivity for a truly borderless virtual world."
  },
  {
    icon: Shield,
    title: "Secure & Decentralized Infrastructure",
    description: "We prioritize security and decentralization in our metaverse solutions, leveraging blockchain technology for transparent, tamper-proof systems. With robust authentication and privacy controls, users can interact confidently in a secure digital ecosystem."
  },
  {
    icon: Code,
    title: "Bespoke Metaverse Development",
    description: "We craft customized metaverse platforms tailored to industries such as gaming, social networking, education, healthcare, and enterprise collaboration. Our team ensures every solution aligns with your business needs and delivers unmatched virtual experiences."
  },
  {
    icon: Users,
    title: "Enhanced Social & Business Connectivity",
    description: "Our metaverse platforms enable seamless interaction, social engagement, and business networking through virtual events, immersive meetings, and digital collaboration tools, enhancing user connectivity across global audiences."
  },
  {
    icon: Zap,
    title: "AI-Powered Virtual Intelligence",
    description: "We integrate AI-driven NPCs, intelligent automation, and adaptive environments, creating dynamic, interactive, and evolving metaverse experiences that respond to user behavior and engagement patterns."
  },
  {
    icon: MonitorSmartphone,
    title: "Multi-Platform Accessibility",
    description: "Our metaverse solutions support web, mobile, VR, and AR devices, ensuring seamless access across platforms. Users can engage with digital environments effortlessly, regardless of their device preference."
  },
  {
    icon: ShoppingCart,
    title: "Metaverse Commerce & Digital Assets",
    description: "We enable businesses to establish virtual storefronts, NFT marketplaces, and decentralized e-commerce platforms. Our metaverse commerce solutions facilitate tokenized assets, smart contracts, and secure digital transactions."
  },
  {
    icon: Briefcase,
    title: "Enterprise Solutions & Virtual Workspaces",
    description: "Transform the way businesses collaborate and operate with immersive virtual offices, remote workspaces, and enterprise-driven metaverse applications, redefining digital engagement for companies."
  },
  {
    icon: Cpu,
    title: "High-Performance Metaverse Infrastructure",
    description: "We leverage advanced blockchain, cloud computing, and AI technologies to create scalable, high-performance metaverse ecosystems with low latency, high availability, and optimal rendering."
  }
];

export function Expertise() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            Scalixity&apos;s Metaverse Development Expertise
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Explore the limitless potential of the metaverse with our cutting-edge solutions, integrating blockchain, AI, and immersive technology to shape the future of digital interactions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:border-primary/50 transition-colors"
            >
              <area.icon className="w-12 h-12 text-black mb-6" />
              <h3 className="text-xl font-bold text-black mb-4">{area.title}</h3>
              <p className="text-black">{area.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Expertise;