"use client";

const techStack = [
  {
    category: "Blockchain Platforms",
    items: [
      { name: "Ethereum", logo: "/images/tech/ethereum.webp" },
      { name: "Solana", logo: "/images/tech/solana.webp" },
      { name: "Polygon", logo: "/images/tech/polygon.webp" }
    ]
  },
  {
    category: "Smart Contract Languages",
    items: [
      { name: "Solidity", logo: "/images/tech/solidity.webp" },
      { name: "Rust", logo: "/images/tech/rust.webp" },
      { name: "Vyper", logo: "/images/tech/vyper.webp" }
    ]
  },
  {
    category: "Development Frameworks",
    items: [
      { name: "Hardhat", logo: "/images/tech/hardhat.webp" },
      { name: "Truffle", logo: "/images/tech/truffle.webp" },
      { name: "Brownie", logo: "/images/tech/brownie.webp" }
    ]
  },
  {
    category: "Testing & Security Tools",
    items: [
      { name: "OpenZeppelin", logo: "/images/tech/openzeppelin.webp" },
      { name: "Echidna", logo: "/images/tech/echidna.webp" },
      { name: "MythX", logo: "/images/tech/mythx.webp" }
    ]
  },
  {
    category: "Oracles & Data Feeds",
    items: [
      { name: "Chainlink", logo: "/images/tech/chainlink.webp" },
      { name: "Band Protocol", logo: "/images/tech/band.webp" },
      { name: "API3", logo: "/images/tech/api3.webp" }
    ]
  },
  {
    category: "Wallets & Integrations",
    items: [
      { name: "MetaMask", logo: "/images/tech/metamask.webp" },
      { name: "WalletConnect", logo: "/images/tech/walletconnect.webp" },
      { name: "Ledger", logo: "/images/tech/ledger.webp" }
    ]
  }
];

export function TechStack() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">TOOLS & TECHNOLOGY</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Smart Contract Tech Stack
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Explore the cutting-edge tools and platforms we use to build secure, scalable, and robust smart contracts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((stack, index) => (
            <div key={index} className="bg-[#F3F1EB] p-8 rounded-xl border border-border">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{stack.category}</h3>
              <div className="flex flex-wrap gap-4">
                {stack.items.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center w-[100px]">
                    <img src={item.logo} alt={item.name} className="w-12 h-12 mb-2" />
                    <span className="text-black text-sm text-center">{item.name}</span>
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
