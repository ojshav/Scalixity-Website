"use client";

const techStack = {
  "Blockchain Platforms": [
    { name: "Ethereum", logo: "/tech/ethereum.svg" },
    { name: "Binance Smart Chain", logo: "/tech/bsc.svg" },
    { name: "Polygon", logo: "/tech/polygon.svg" },
    { name: "Solana", logo: "/tech/solana.svg" }
  ],
  "Smart Contract Languages": [
    { name: "Solidity", logo: "/tech/solidity.svg" },
    { name: "Rust", logo: "/tech/rust.svg" },
    { name: "Vyper", logo: "/tech/vyper.svg" }
  ],
  "Development Frameworks": [
    { name: "Hardhat", logo: "/tech/hardhat.svg" },
    { name: "Truffle", logo: "/tech/truffle.svg" },
    { name: "Brownie", logo: "/tech/brownie.svg" }
  ],
  "Frontend Technologies": [
    { name: "React", logo: "/tech/react.svg" },
    { name: "Next.js", logo: "/tech/nextjs.svg" },
    { name: "Vue.js", logo: "/tech/vue.svg" }
  ],
  "Wallet & Authentication": [
    { name: "MetaMask", logo: "/tech/metamask.svg" },
    { name: "WalletConnect", logo: "/tech/walletconnect.svg" },
    { name: "Web3Auth", logo: "/tech/web3auth.svg" }
  ],
  "Storage Solutions": [
    { name: "IPFS", logo: "/tech/ipfs.svg" },
    { name: "Filecoin", logo: "/tech/filecoin.svg" },
    { name: "Arweave", logo: "/tech/arweave.svg" }
  ]
};

export function TechStack() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">TECH STACK</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            Technologies We Use for DApp Development
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(techStack).map(([category, items], index) => (
            <div key={index} className="border border-border rounded-lg p-6 bg-[#F3F1EB]">
              <h3 className="text-xl font-semibold text-black mb-4">{category}</h3>
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
