"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is the metaverse, and how does it relate to blockchain technology?",
    answer: "The metaverse is a rapidly evolving digital universe that enables users to engage in immersive experiences, whether through gaming, social interaction, virtual commerce, or enterprise solutions. Blockchain technology plays a crucial role in decentralizing the metaverse, ensuring secure transactions, true digital ownership, and transparent governance. Smart contracts, NFTs, and decentralized finance (DeFi) mechanisms empower users to own, trade, and monetize their assets, making the metaverse a dynamic and self-sustaining ecosystem."
  },
  {
    question: "How can businesses benefit from metaverse development?",
    answer: "Businesses can tap into the metaverse to expand their digital presence and create new revenue streams. From virtual showrooms and interactive customer experiences to remote work solutions and gamified training modules, the metaverse enhances engagement and productivity. Companies can leverage blockchain to tokenize assets, enabling secure transactions and new monetization opportunities. The metaverse fosters global connectivity, breaking geographical barriers and offering immersive marketing strategies, resulting in deeper brand engagement and higher customer retention."
  },
  {
    question: "What industries can adopt metaverse solutions?",
    answer: "A broad spectrum of industries can integrate metaverse solutions to revolutionize their operations. Gaming and entertainment lead the way, offering hyper-realistic experiences. Education institutions can create virtual campuses for remote learning, while real estate firms provide virtual property tours. Healthcare benefits from telemedicine advancements and VR-based therapies. Retail brands can launch virtual storefronts, while corporate enterprises utilize metaverse offices for hybrid work models. The possibilities are limitless, with each sector finding unique ways to leverage the metaverse’s capabilities."
  },
  {
    question: "What technologies power the metaverse?",
    answer: "The metaverse is a convergence of multiple advanced technologies, including blockchain, artificial intelligence (AI), virtual reality (VR), augmented reality (AR), cloud computing, and Web3. Blockchain ensures decentralized ownership and transparent transactions, while AI enhances automation, personalization, and virtual assistants. VR and AR provide immersive experiences, allowing users to interact with digital environments in real-time. Cloud computing ensures scalability, enabling seamless access across devices. The synergy of these technologies creates a robust, interconnected metaverse ecosystem."
  },
  {
    question: "How does Scalixity ensure security and privacy in the metaverse?",
    answer: "Security and privacy are paramount in the metaverse, and Scalixity integrates best-in-class security measures to safeguard users. Our solutions incorporate blockchain-based authentication, decentralized identity verification, and end-to-end encryption to prevent data breaches and unauthorized access. Smart contracts ensure transparent and tamper-proof transactions, while compliance with global data protection regulations (such as GDPR) guarantees user privacy. By implementing secure coding practices, AI-driven threat detection, and multi-layered security protocols, we provide a safe and trustworthy metaverse experience."
  },
  {
    question: "Can metaverse platforms be customized for specific business needs?",
    answer: "Absolutely. At Scalixity, we specialize in building custom metaverse solutions tailored to diverse industry requirements. Whether you need a fully immersive virtual workspace, an NFT marketplace, an e-learning environment, or an interactive entertainment hub, we design and develop metaverse platforms that align with your brand identity and business objectives. Our expertise in blockchain, AI, and immersive technologies ensures seamless integration, high performance, and engaging user experiences. Our tailored approach guarantees that your metaverse presence stands out and drives measurable results."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">FAQ</span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            Frequently Asked Questions About Metaverse Development
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get answers to common questions about metaverse technology and how our development services can help you build immersive digital experiences.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-card rounded-lg"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-foreground">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-primary" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-card mt-1 rounded-lg">
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
