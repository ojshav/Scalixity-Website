"use client";

const techStack = {
  "Blockchain Platforms": [
    { name: "Ethereum", logo: "/images/tech/ethereum.webp" },
    { name: "Binance Smart Chain", logo: "/images/tech/bert.svg" },
    { name: "Polygon", logo: "/images/tech/polygon.webp" },
    { name: "Solana", logo: "/images/tech/solana.webp" }
  ],
  "Smart Contract Languages": [
    { name: "Solidity", logo: "/images/tech/solidity.webp" },
    { name: "Rust", logo: "/images/tech/rust.webp" },
    { name: "Vyper", logo: "/images/tech/vyper.webp" }
  ],
  "Development Frameworks": [
    { name: "Hardhat", logo: "/images/tech/hardhat.webp" },
    { name: "Truffle", logo: "/images/tech/truffle.webp" },
    { name: "Brownie", logo: "/images/tech/brownie.webp" }
  ],
  "Frontend Technologies": [
    { name: "React", logo: "/images/tech/react.webp" },
    { name: "Next.js", logo: "/images/tech/nextjs.svg" },
    { name: "Vue.js", logo: "/images/tech/botmap.svg" }
  ],
  "Wallet & Authentication": [
    { name: "MetaMask", logo: "/images/tech/metamask.webp" },
    { name: "WalletConnect", logo: "/images/tech/walletconnect.webp" },
    { name: "Web3Auth", logo: "/images/tech/web3auth.webp" }
  ],
  "Storage Solutions": [
    { name: "IPFS", logo: "/images/tech/ipfs.webp" },
    { name: "Filecoin", logo: "/images/tech/filecoin.webp" },
    { name: "Arweave", logo: "/images/tech/arweave.webp" }
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
