"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

const industries = [
  {
    name: "Finance",
    icon: "/images/icons/finance.svg",
    description: "We create secure and automated smart contract solutions for the finance industry, enabling trustless transactions, loan agreements, and seamless digital asset exchanges.",
    solutions: [
      "DeFi Platforms",
      "Tokenized Assets",
      "Automated Payments",
      "Insurance Claims Processing",
      "Cross-border Transactions"
    ]
  },
  {
    name: "Healthcare",
    icon: "/images/icons/healthcare.svg",
    description: "Smart contracts in healthcare streamline medical billing, secure patient data, and automate insurance claims, enhancing efficiency and transparency.",
    solutions: [
      "Medical Data Management",
      "Insurance Verification",
      "Patient Consent Forms",
      "Pharmaceutical Supply Chains"
    ]
  },
  {
    name: "Real Estate",
    icon: "/images/icons/construction.svg",
    description: "Smart contracts simplify property transfers, rental agreements, and escrow services, ensuring secure, transparent, and automated real estate transactions.",
    solutions: [
      "Property Tokenization",
      "Rental Contracts",
      "Escrow Services",
      "Land Registry Management"
    ]
  },
  {
    name: "Supply Chain",
    icon: "/images/icons/manufacturing.svg",
    description: "We develop smart contracts to automate supplier agreements, track shipments, and ensure transparent supply chain management.",
    solutions: [
      "Shipment Tracking",
      "Supplier Payments",
      "Inventory Verification",
      "Product Authentication"
    ]
  },
  { 
    name: "Insurance", 
    icon: "/images/icons/insurance.svg",
    description: "Our smart contracts automate claims processing, policy management, and risk assessment for the insurance industry.",
    solutions: [
      "Automated Claims",
      "Policy Management",
      "Fraud Detection",
      "Parametric Insurance"
    ]
  },
  { 
    name: "Gaming", 
    icon: "/images/icons/gaming.webp",
    description: "Smart contracts enable true ownership of in-game assets, fair gameplay mechanics, and transparent reward systems.",
    solutions: [
      "NFT Game Assets",
      "Play-to-Earn Models",
      "Tournament Payouts",
      "Gaming Marketplaces"
    ]
  },
  { 
    name: "E-commerce", 
    icon: "/images/icons/ecommerce.svg",
    description: "We implement smart contracts for secure payments, automated escrow services, and loyalty programs in online retail.",
    solutions: [
      "Escrow Services",
      "Customer Loyalty Programs",
      "Supply Chain Verification",
      "Automated Refunds"
    ]
  },
  { 
    name: "Governance", 
    icon: "/images/icons/legal.svg",
    description: "Smart contracts enable transparent voting systems, automated compliance, and tamper-proof record-keeping for organizations.",
    solutions: [
      "Voting Systems",
      "Transparent Fund Allocation",
      "Compliance Automation",
      "Decentralized Governance"
    ]
  }
]

export function Industries() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">INDUSTRIES</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Empowering Industries with Smart Contract Solutions
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Our smart contract solutions are tailored to fit diverse industries, automating processes, enhancing transparency, and ensuring secure, decentralized operations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center p-6 bg-card rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="bg-[#A8B2E7] p-6 rounded-full mb-4">
                <Image
                  src={industry.icon}
                  alt={`${industry.name} icon`}
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 text-center mb-3">{industry.name}</h3>
              {industry.description && (
                <p className="text-sm textgray mb-4 text-center">{industry.description}</p>
              )}
              {industry.solutions && (
                <ul className="text-sm text-black mt-auto w-full list-disc pl-5">
                  {industry.solutions.map((solution, idx) => (
                    <li key={idx} className="mb-1">{solution}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Industries;