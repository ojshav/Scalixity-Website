"use client";

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const reasons = [
  {
    title: "Unmatched Expertise in Metaverse Technologies",
    description: "We bring together AI, blockchain, and immersive virtual experiences to help businesses transition into the Metaverse seamlessly. Our deep knowledge in Web3, digital assets, and extended reality (XR) allows us to provide cutting-edge solutions tailored to your business needs."
  },
  {
    title: "Tailored Strategies for Maximum Impact",
    description: "We recognize that each business has distinct objectives. Our team designs customized Metaverse strategies that align with your industry trends, ensuring long-term growth, engagement, and revenue generation. Whether you're in gaming, education, real estate, or entertainment, we create solutions that resonate with your audience."
  },
  {
    title: "End-to-End Metaverse Development Support",
    description: "From initial ideation to deployment and beyond, we offer comprehensive Metaverse development services. Our team assists with virtual world design, NFT integrations, smart contracts, decentralized applications (DApps), and social experiences. We ensure that your Metaverse presence is scalable, interactive, and future-proof."
  },
  {
    title: "Robust Security & Regulatory Compliance",
    description: "Security is at the core of our Metaverse consulting. We follow best practices for data privacy, digital identity protection, and decentralized security frameworks. Our solutions comply with global regulations, ensuring a safe and trustworthy virtual ecosystem for users and businesses alike."
  },
  {
    title: "Innovative Monetization Strategies",
    description: "The Metaverse presents new revenue opportunities, and we help businesses tap into them effectively. From virtual commerce and NFT marketplaces to play-to-earn ecosystems, we design monetization models that maximize profitability while ensuring sustainability in the digital landscape."
  }
];

export function WhyChooseMeta() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">WHY CHOOSE US</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Why Choose Us for Metaverse Consulting
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            We empower businesses to thrive in the Metaverse by delivering innovative, secure, and customized digital solutions. Our expertise ensures seamless integration, immersive experiences, and a future-ready virtual presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">{reason.title}</h3>
                  <p className="text-black">{reason.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseMeta;
