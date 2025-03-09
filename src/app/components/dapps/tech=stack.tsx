"use client";

import { motion } from 'framer-motion';

const techStack = {
  "Blockchain Platforms": [
    { name: "Ethereum", logo: "/images/tech/ethereum.svg" },
    { name: "Binance Smart Chain", logo: "/images/tech/bsc.svg" },
    { name: "Polygon", logo: "/images/tech/polygon.svg" },
    { name: "Solana", logo: "/images/tech/solana.svg" }
  ],
  "Smart Contract Languages": [
    { name: "Solidity", logo: "/images/tech/solidity.svg" },
    { name: "Rust", logo: "/images/tech/rust.svg" },
    { name: "Vyper", logo: "/images/tech/vyper.svg" }
  ],
  "Development Frameworks": [
    { name: "Hardhat", logo: "/images/tech/hardhat.svg" },
    { name: "Truffle", logo: "/images/tech/truffle.svg" },
    { name: "Brownie", logo: "/images/tech/brownie.svg" }
  ],
  "Frontend Technologies": [
    { name: "React", logo: "/images/tech/react.svg" },
    { name: "Next.js", logo: "/images/tech/nextjs.svg" },
    { name: "Vue.js", logo: "/images/tech/vue.svg" }
  ],
  "Wallet & Authentication": [
    { name: "MetaMask", logo: "/images/tech/metamask.svg" },
    { name: "WalletConnect", logo: "/images/tech/walletconnect.svg" },
    { name: "Web3Auth", logo: "/images/tech/web3auth.svg" }
  ],
  "Storage Solutions": [
    { name: "IPFS", logo: "/images/tech/ipfs.svg" },
    { name: "Filecoin", logo: "/images/tech/filecoin.svg" },
    { name: "Arweave", logo: "/images/tech/arweave.svg" }
  ]
};

export function TechStack() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">TECH STACK</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Technologies We Use for DApp Development
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our technology stack ensures secure, scalable, and high-performance decentralized applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(techStack).map(([category, items], index) => (
            <div key={index} className="border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">{category}</h3>
              <div className="grid grid-cols-3 gap-4">
                {items.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <img
                      src={item.logo}
                      alt={item.name}
                      width={40}
                      height={40}
                      className="mb-2"
                    />
                    <span className="text-muted-foreground text-sm text-center">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
