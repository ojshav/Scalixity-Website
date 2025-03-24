"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const projects = [
  {
    company: "HashPay",
    title: "Transforming Digital Payments with Hedra",
    description: "We partnered with HashPay to revolutionize their digital payment infrastructure using Hedra Hashgraph. The project focused on creating a secure, high-speed transaction platform that processes micro-transactions with finality, reducing latency and ensuring a seamless payment experience for users.",
    image: "/images/digital-hedra.svg",
    features: [
      "Real-time payment processing",
      "Enhanced security with aBFT consensus",
      "Integration with major cryptocurrencies",
      "Transparent transaction logs"
    ]
  },
  {
    company: "SupplyTrust",
    title: "Enhancing Supply Chain Transparency through Hedra",
    description: "Our collaboration with SupplyTrust empowered their supply chain management system with immutable, transparent records. Using Hedra's distributed ledger, we ensured real-time tracking of goods, streamlined auditing processes, and minimized fraudulent activities across the supply network.",
    image: "/images/supply-hedra.svg",
    features: [
      "End-to-end supply chain visibility",
      "Tamper-proof record-keeping",
      "Automated smart contract execution",
      "Seamless data sharing with stakeholders"
    ]
  },
  {
    company: "DeVote",
    title: "Securing Voting Systems with Hedra Technology",
    description: "We developed a decentralized voting platform, DeVote, utilizing Hedra Hashgraph's secure and fair consensus algorithm. The platform offers transparent vote counting, immutable logs, and user anonymity, establishing trust in democratic processes and corporate elections.",
    image: "/images/de-vote-hedra.svg",
    features: [
      "Transparent, immutable vote logs",
      "Anonymized voter data",
      "Real-time result aggregation",
      "Scalable infrastructure for large elections"
    ]
  }
]

export function FeaturedWork() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-16">
          <div>
            <span className="text-sm uppercase tracking-wider text-black">OUR FEATURED WORK</span>
            <h2 className="text-4xl font-bold text-black mt-4">
              Our Hedra-powered Projects
            </h2>
          </div>
          <Link
            href="/work"
            className="hidden md:flex items-center gap-2 text-black hover:text-black/80 transition-colors"
          >
            Explore Our Portfolio
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[#F3F1EB] border border-black rounded-xl p-6 shadow-lg grid md:grid-cols-2 gap-8 items-center"
            >
              <div>
                <span className="text-black text-sm">— {project.company}</span>
                <h3 className="text-2xl font-bold text-black mt-2 mb-4">{project.title}</h3>
                <p className="text-black mb-6">{project.description}</p>
                <ul className="space-y-3">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-black">
                      <div className="w-1.5 h-1.5 rounded-full bg-black" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/work/${project.company.toLowerCase()}`}
                  className="inline-flex items-center gap-2 text-black hover:text-black/80 transition-colors mt-6"
                >
                  Read more
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div>
                <div className="relative h-[400px] rounded-xl overflow-hidden border border-black">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12 md:hidden">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-black hover:text-black/80 transition-colors"
          >
            Explore Our Portfolio
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedWork;
