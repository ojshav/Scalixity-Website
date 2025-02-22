"use client";

import { motion } from 'framer-motion';
import { Globe, Layers, Shield, Code, Users, Zap, BarChart, MonitorSmartphone, ShoppingCart, Briefcase, Cpu } from 'lucide-react';

const benefits = [
  {
    icon: Globe,
    title: "Immersive Digital Experiences",
    description: "We create highly interactive and engaging metaverse environments that bring digital experiences to life with rich graphics, realistic interactions, and seamless connectivity. Our solutions push the boundaries of virtual engagement, ensuring users feel truly immersed."
  },
  {
    icon: Layers,
    title: "Scalable & Interoperable Solutions",
    description: "Our metaverse applications are designed for seamless interoperability across different blockchain networks, platforms, and protocols, ensuring global accessibility and cross-chain compatibility for uninterrupted virtual experiences."
  },
  {
    icon: Shield,
    title: "Decentralized & Secure Ecosystem",
    description: "Leveraging blockchain technology, we ensure secure, transparent, and tamper-proof digital environments that protect user data and digital assets. Our metaverse platforms incorporate end-to-end encryption, robust authentication, and decentralized governance models."
  },
  {
    icon: Code,
    title: "Custom Metaverse Development",
    description: "We tailor metaverse solutions for gaming, virtual commerce, social networking, education, real estate, healthcare, and enterprise applications. Our expertise allows us to create unique and functional virtual spaces that cater to industry-specific needs."
  },
  {
    icon: Users,
    title: "User-Driven Virtual Worlds",
    description: "Our metaverse platforms prioritize intuitive design and user experience, ensuring seamless navigation, rich interactions, and personalized digital personas with customizable avatars and dynamic social engagement features."
  },
  {
    icon: Zap,
    title: "AI-Powered Virtual Interactions",
    description: "Enhance metaverse experiences with AI-driven NPCs, automation, and interactive digital environments that evolve based on user behavior. Our AI-backed metaverse ecosystems offer lifelike interactions, intelligent matchmaking, and adaptive world-building."
  },
  {
    icon: MonitorSmartphone,
    title: "Cross-Platform Accessibility",
    description: "Our metaverse solutions are optimized for web, mobile, VR, and AR devices, ensuring a seamless experience across different platforms. Users can access virtual environments from any device, enhancing engagement and usability."
  },
  {
    icon: ShoppingCart,
    title: "Virtual Commerce & NFT Marketplace",
    description: "Enable businesses to create virtual storefronts, NFT trading platforms, and digital marketplaces within the metaverse ecosystem. We facilitate tokenized assets, smart contracts, and secure transactions for a thriving virtual economy."
  },
  {
    icon: Briefcase,
    title: "Enterprise Metaverse Solutions",
    description: "Revolutionizing remote work, virtual collaboration, and digital offices to enhance productivity and connectivity for enterprises. Our metaverse business solutions empower organizations with innovative ways to engage employees and clients."
  },
  {
    icon: Cpu,
    title: "High-Performance Infrastructure",
    description: "Utilizing the latest in blockchain, cloud computing, and AI technologies, we build a high-performing metaverse ecosystem that is fast, scalable, and future-ready. Our platforms offer low latency, high throughput, and optimized rendering for smooth digital experiences."
  }
];

export function Benefits() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Why Choose Scalixity for Metaverse Development
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empower your business with cutting-edge metaverse solutions, blending blockchain, AI, and immersive technology to unlock limitless possibilities in the digital realm.
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
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-colors"
            >
              <benefit.icon className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-bold text-foreground mb-4">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
