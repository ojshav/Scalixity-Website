"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

const industries = [
  {
    name: "Finance",
    icon: "/icons/finance.svg",
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
    icon: "/icons/healthcare.svg",
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
    icon: "/icons/realestate.svg",
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
    icon: "/icons/supplychain.svg",
    description: "We develop smart contracts to automate supplier agreements, track shipments, and ensure transparent supply chain management.",
    solutions: [
      "Shipment Tracking",
      "Supplier Payments",
      "Inventory Verification",
      "Product Authentication"
    ]
  },
  { name: "Insurance", icon: "/icons/insurance.svg" },
  { name: "Gaming", icon: "/icons/gaming.svg" },
  { name: "E-commerce", icon: "/icons/ecommerce.svg" },
  { name: "Governance", icon: "/icons/governance.svg" }
]

export function Industries() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">INDUSTRIES</span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            Empowering Industries with Smart Contract Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our smart contract solutions are tailored to fit diverse industries, automating processes, enhancing transparency, and ensuring secure, decentralized operations.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="bg-card p-6 rounded-full mb-4">
                <Image
                  src={industry.icon}
                  alt={industry.name}
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground text-center">{industry.name}</h3>
              {industry.description && (
                <p className="text-sm text-muted-foreground mt-2 text-center">{industry.description}</p>
              )}
              {industry.solutions && (
                <ul className="text-sm text-muted-foreground mt-2 list-disc pl-5">
                  {industry.solutions.map((solution, idx) => (
                    <li key={idx}>{solution}</li>
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
