"use client"


const techStack = [
  {
    category: "Blockchain Platforms",
    items: [
      { name: "Ethereum", logo: "/tech/ethereum.svg" },
      { name: "Solana", logo: "/tech/solana.svg" },
      { name: "Polygon", logo: "/tech/polygon.svg" }
    ]
  },
  {
    category: "Smart Contract Languages",
    items: [
      { name: "Solidity", logo: "/tech/solidity.svg" },
      { name: "Rust", logo: "/tech/rust.svg" },
      { name: "Vyper", logo: "/tech/vyper.svg" }
    ]
  },
  {
    category: "Development Frameworks",
    items: [
      { name: "Hardhat", logo: "/tech/hardhat.svg" },
      { name: "Truffle", logo: "/tech/truffle.svg" },
      { name: "Brownie", logo: "/tech/brownie.svg" }
    ]
  },
  {
    category: "Testing & Security Tools",
    items: [
      { name: "OpenZeppelin", logo: "/tech/openzeppelin.svg" },
      { name: "Echidna", logo: "/tech/echidna.svg" },
      { name: "MythX", logo: "/tech/mythx.svg" }
    ]
  },
  {
    category: "Oracles & Data Feeds",
    items: [
      { name: "Chainlink", logo: "/tech/chainlink.svg" },
      { name: "Band Protocol", logo: "/tech/band.svg" },
      { name: "API3", logo: "/tech/api3.svg" }
    ]
  },
  {
    category: "Wallets & Integrations",
    items: [
      { name: "MetaMask", logo: "/tech/metamask.svg" },
      { name: "WalletConnect", logo: "/tech/walletconnect.svg" },
      { name: "Ledger", logo: "/tech/ledger.svg" }
    ]
  }
]

export function TechStack() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">TOOLS & TECHNOLOGY</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Smart Contract Tech Stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore the cutting-edge tools and platforms we use to build secure, scalable, and robust smart contracts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((stack, index) => (
            <div key={index} className="bg-card p-8 rounded-xl border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">{stack.category}</h3>
              <div className="flex flex-wrap gap-4">
                {stack.items.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center w-[100px]">
                    <img src={item.logo} alt={item.name} className="w-12 h-12 mb-2" />
                    <span className="text-muted-foreground text-sm text-center">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack;
