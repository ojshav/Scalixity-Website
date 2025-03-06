"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "What is Hedra app development?",
    answer: "Hedra app development involves creating decentralized applications (dApps) using the Hedra Hashgraph technology. This technology provides a secure, fast, and fair distributed ledger that processes thousands of transactions per second with finality. It leverages a unique consensus algorithm, ensuring no forks, which makes it a reliable choice for blockchain-based solutions. Businesses use Hedra to build applications that require transparent and immutable records, from supply chains to tokenized assets and secure voting systems."
  },
  {
    question: "How can Hedra apps benefit my business?",
    answer: "Hedra apps offer a multitude of benefits for your business by enhancing security, increasing transaction speeds, and reducing costs. These apps automate workflows, streamline peer-to-peer transactions, and secure digital assets using robust cryptographic methods. Businesses can create more trustworthy ecosystems with transparent data sharing and real-time updates. Additionally, Hedra's low, predictable fees make it suitable for scalable enterprise solutions without unexpected spikes in transaction costs."
  },
  {
    question: "What types of applications can be built on Hedra?",
    answer: "Hedra's versatile framework allows the creation of various applications, including secure payment gateways, supply chain management systems with end-to-end transparency, tokenized asset platforms for managing digital ownership, and decentralized finance (DeFi) applications for lending, borrowing, and trading. Furthermore, businesses can build non-fungible token (NFT) marketplaces, gaming ecosystems with verifiable randomness, and even decentralized identity verification systems, pushing innovation across industries."
  },
  {
    question: "Is Hedra app development secure?",
    answer: "Yes, security is at the core of Hedra's Hashgraph technology. The consensus algorithm guarantees asynchronous Byzantine Fault Tolerance (aBFT), ensuring that even if malicious nodes are present, the system remains secure and operational. Additionally, we implement multi-layered security protocols, including encryption of data in transit and at rest, rigorous smart contract audits, and real-time threat monitoring. For businesses with strict compliance needs, we also ensure adherence to industry standards like GDPR and ISO certifications."
  },
  {
    question: "Can Hedra apps integrate with other blockchains?",
    answer: "Absolutely. Hedra apps are designed to support interoperability with other blockchains and legacy systems. Using APIs, bridges, and smart contracts, Hedra enables seamless data exchange and asset transfers between networks. This allows businesses to connect their Hedra-based dApps with Ethereum, Binance Smart Chain, or private blockchains to leverage the strengths of multiple technologies. Integration with off-chain systems like databases, CRMs, and cloud services also enhances functionality, ensuring a smooth workflow across your entire digital infrastructure."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">FAQ</span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get quick answers about our Hedra app development services
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
  )
}

export default FAQ;
